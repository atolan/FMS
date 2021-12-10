<template>
    <div class="file-content" id="file-content-id" :class="{ 'is-offset': filesInQueueTotal > 0 || copyItemQueue.length > 0, 'is-dragging': isDragging }"
         @dragover.prevent
         @drop.stop.prevent="dropUpload($event)"
         @dragover="dragEnter"
         @dragleave="dragLeave"
         @keydown.delete="deleteItems($event)"
         @keydown.esc="releaseClipborad"
         v-shortkey="{copy: ['ctrl', 'c'], cut: ['ctrl', 'x'], paste:['ctrl', 'v'], selectAll: ['ctrl', 'a'], rename: ['f2']}" 
         @shortkey="onShortKey" 
         
         tabindex="-1"
         ref="fileBrowser"
    >    
        <div    v-on:scroll.passive="onScroll"
                @scroll="onScroll"
                
                class="files-container"
                ref="fileContainer"
                :class="{'is-fileinfo-visible': fileInfoVisible && !$isMinimalScale() , 'mobile-multi-select' : mobileMultiSelect}"
                
                
        >
            <!------block mobile version_SK------>
            <!--MobileToolbar-->
            <!-- <MobileToolbar /> -->

            <!--Searchbar-->
            <!-- <SearchBar class="mobile-search" /> -->

            <!--Mobile Actions-->
            <!-- <MobileActions /> -->
            <!------block mobile version_SK------>

            <!--Item previews list-->
            <div v-if="isList" class="file-list-wrapper" style="height: 100%;">
                
                <div style="height: 100%;">
                    <DragSelect
                        attribute="attr"
                        @startDrag="onLMouseClicked"
                        @change="onChange($event)"
                        @clickoutside="filesContainerClick"
                        
                    >
                        <transition-group
                                name="file"
                                tag="section"
                                class="file-list"
                                :class="FilePreviewType"
                        >
                            <FileItemList
                                    @dragstart="dragStart(item)"
                                    @drop.stop.native.prevent="dragFinish(item, $event)"
                                    @contextmenu.native.prevent="contextMenu($event, item)"
                                    :item="item"
                                    v-for="item in data"
                                    :key="item.unique_id"
                                    class="file-item"
                                    :class="dragSelected(item) ? 'drag-selected' : '' "                     
                            />
                        </transition-group>
                    </DragSelect>
                </div>
            </div>
            <!-- <Spinner />    -->
            <!--Item previews grid-->
            <div v-if="isGrid" class="file-grid-wrapper" style="height: 100%;">
                <div style="height: 100%;">
                    <DragSelect
                        attribute="attr"
                        @startDrag="onLMouseClicked"
                        @change="onChange($event)"
                        @clickoutside="filesContainerClick"
                    >
                        <transition-group
                                name="file"
                                tag="section"
                                class="file-list"
                                :class="FilePreviewType"
                        >   
                            <FileItemGrid
                                    @dragstart="dragStart(item)"
                                    @drop.native.prevent="dragFinish(item, $event)"
                                    @contextmenu.native.prevent="contextMenu($event, item)"
                                    :source="item"
                                    v-for="item in data"
                                    :key="item.unique_id"
                                    :attr="item.unique_id"
                                    class="file-item"
                                    :class="dragSelected(item) ? 'drag-selected' : '' "
                            />
                        </transition-group>
                    </DragSelect>
                </div>
            </div>

            <!--Show empty page if folder is empty-->
            <EmptyPage v-if="! isSearching"/>

            <!--Show empty page if no search results-->
            <EmptyMessage
                    v-if="isSearching && isEmpty"
                    :message="$t('messages.nothing_was_found')"
                    icon="eye-slash"
            />
        </div>

        <!-- <FileInfoPanel  v-if="fileInfoPreview.length === 2 && 
                            (fileInfoPreview[0].type === 'image' ||
                            fileInfoPreview[0].type === 'video' ||
                            fileInfoPreview[0].type === 'audio' ||
                            (fileInfoPreview[0].type === 'file' || fileInfoPreview[0].mimetype === 'hic')) "/> -->
    </div>
</template>

<script>
    import MobileToolbar from '@/components/FilesView/MobileToolbar'
    import MobileActions from '@/components/FilesView/MobileActions'
    import MultiSelected from '@/components/FilesView/MultiSelected'
    import FileItemList from '@/components/FilesView/FileItemList'
    import FileItemGrid from '@/components/FilesView/FileItemGrid'
    import EmptyMessage from '@/components/FilesView/EmptyMessage'
    import EmptyPage from '@/components/FilesView/EmptyPage'
    import SearchBar from '@/components/FilesView/SearchBar'
    import {mapGetters} from 'vuex'
    import {events} from '@/bus'
    import DragSelect from "./DragSelect.vue"
    import Spinner from '@/components/FilesView/Spinner'
    import InfiniteLoading from 'vue-infinite-loading'
    var infiniteScroll = require('vue-infinite-scroll');

    export default {
        name: 'FilesContainer',
        components: {
            MobileToolbar,
            MobileActions,
            MultiSelected,
            FileItemList,
            FileItemGrid,
            EmptyMessage,
            SearchBar,
            EmptyPage,
            DragSelect,
            Spinner,
            infiniteScroll,
            InfiniteLoading,
        },
        computed: {
            ...mapGetters([
                'filesInQueueTotal',
                'copyItemQueue',
                'fileInfoVisible',
                'fileInfoDetail',
                'fileInfoPreview',
                'selectedItems',
                'currentFolder',
                'FilePreviewType',
                'curclickedItem',
                'isSearching',
                'isLoading',
                'focusOnName',
                'focusText',
                'clipBoard', 
                'copyOrCutInfo', 
                'data',
                'busy',
                'getFolderContentCnt',
                'sorting',
                'api',
            ]),
            isGrid() {
                return this.FilePreviewType === 'grid'
            },
            isList() {
                return this.FilePreviewType === 'list'
            },
            isEmpty() {
                return this.data.length == 0
            },
            draggedItems() {
                //Set opacity for dragged items

                if(!this.fileInfoDetail.includes(this.draggingId)){
                    return [this.draggingId]
                }

                if(this.fileInfoDetail.includes(this.draggingId)) {
                    return this.fileInfoDetail
                }
            }
        },
        data() {
            return {
                iitem: FileItemGrid,
                draggingId: undefined,
                isDragging: false,
                mobileMultiSelect: false,
                item1: FileItemGrid,
                items1: this.data,
                isDropExternal: false,
                timer: null,
                prevScrollPos: -1,
            }
        },
        methods: {
            releaseClipborad(){
                console.log('ESC')
                if (this.data['IS_SHOW_CONFIRM_DELETE'] === undefined) {
                    this.data['IS_SHOW_CONFIRM_DELETE'] = false
                }
                if (this.data['IS_SHOW_CONFIRM_DELETE']) return
                
                this.$store.commit('SET_COPY_CUT_STATE', false)
                this.$store.commit('CLEAR_CLIPBOARD')
                this.$store.commit('CLEAR_FILEINFO_DETAIL')
                this.$store.commit('CLEAR_FILEINFO_PREV')

                // Close the context menu if it is open 
                events.$emit('unClick')
            },
            onShortKey(event){
                if (this.focusOnName) {
                    var selection = null
                    if (window.getSelection) {
                        selection = window.getSelection();
                    } else if (document.selection) {
                        selection = document.selection.createRange();
                    }

                    var start = Math.min(selection.anchorOffset, selection.focusOffset)
                    var end = Math.max(selection.anchorOffset, selection.focusOffset)
                    var selectedTxt = this.focusText.substr(start, end - start)
                    switch (event.srcKey) {
                        case 'copy':
                            if (selection.type === 'Range') {
                                navigator.clipboard.writeText(selectedTxt).then(function () {
                                    console.log('Async: Copying to clipboard was successful!');
                                }, function (err) {
                                    console.error('Async: Could not copy text: ', err);
                                });
                            }
                            break
                        case 'cut':
                            if (selection.type === 'Range') {
                                navigator.clipboard.writeText(selectedTxt).then(function () {
                                    // var result = this.focusText.replace(selectedTxt, '')
                                    // events.$emit('nametag:copy', result)
                                    console.log('Async: Copying to clipboard was successful!');
                                }, function (err) {
                                    console.error('Async: Could not copy text: ', err);
                                });
                            }                            
                            break
                        case 'paste':
                            navigator.clipboard.readText()
                            .then(text => {
                                console.log('from clipboard, ', text)
                                String.prototype.splice = function(idx, rem, str) {
                                    return this.slice(0, idx) + str + this.slice(idx + Math.abs(rem));
                                };                                
                                if (selection.type === 'Caret') {
                                    var result = this.focusText.splice(selection.focusOffset, 0, text);
                                    events.$emit('nametag:copy', result)
                                    console.log(result)
                                }
                                else if (selection.type === 'Range') {
                                    var result = this.focusText.replace(selectedTxt, text)
                                    events.$emit('nametag:copy', result)
                                    console.log(result)
                                }
                            })
                            .catch(err => {
                                console.log('Something went wrong', err);
                            })                              
                            break
                        case 'selectAll':
                            break
                    }                    
                    return
                }

                switch (event.srcKey) {
                    case 'copy':
                        if (this.currentFolder.location === 'trash-root' || this.currentFolder.location === 'trash') return
                        console.log('ctrl+c')
                        if (this.fileInfoDetail.length < 1)
                            break
                        this.$store.commit('SET_COPY_CUT_STATE', false)
                        this.$store.commit('STORE_COPY_CUT_ITEM')
                        //David 20211119
                        //this.$store.commit('CLEAR_FILEINFO_DETAIL')
                        console.log('ctrl+c')
                        break
                    case 'cut':
                        if (this.currentFolder.location === 'trash-root' || this.currentFolder.location === 'trash') return
                        console.log('ctrl+x')
                        if (this.fileInfoDetail.length < 1)
                            break
                        this.$store.commit('SET_COPY_CUT_STATE', true)
                        this.$store.commit('STORE_COPY_CUT_ITEM')
                        // this.$store.commit('CLEAR_FILEINFO_DETAIL')
                        console.log('ctrl+x')
                        break
                    case 'paste':
                        if (this.currentFolder.location === 'trash-root' || this.currentFolder.location === 'trash') return
                        console.log('ctrl+v')
                        if (!this.clipBoard || this.clipBoard.length < 1)
                            break
                        const parent_id = this.currentFolder.unique_id
                                    
                        console.log(parent_id)
                        if (this.copyOrCutInfo){
                            // cut-paste
                            this.$store.dispatch('cutItem', {to_id:parent_id})
                        }
                        else{
                            // copy-paste
                            this.$store.dispatch('copyItem', {to_id:parent_id})
                            // this.$copyFunc(parent_id)
                        }
                        break
                    case 'rename':
                        if (this.currentFolder.location === 'trash-root' || this.currentFolder.location === 'trash') return
                        console.log('F2')
                        if (this.fileInfoDetail.length === 1)
                            events.$emit('popup:open', { name: 'rename-item', item: this.fileInfoDetail[0] })
                        break
                    case 'selectAll':
                        console.log('ctrl+a')
                        for(let i = 0; i < this.data.length; i++) {
                            this.$store.commit('GET_FILEINFO_DETAIL', this.data[i])
                        }
                        break
                }
            },
            onScroll(event){
                var container = document.getElementsByClassName(
                    'files-container'
                )[0]            
                const scrollPos = container.clientHeight * container.scrollTop / (container.scrollHeight - container.clientHeight)
                if (this.prevScrollPos === -1) this.prevScrollPos = scrollPos - 1
                if (scrollPos > this.prevScrollPos && container.scrollTop / (container.scrollHeight - container.clientHeight) > 0.97  && !this.busy) {
                    console.log(scrollPos)
                    this.$store.commit('SET_BUSY', true)
                    let folderContentCnt = this.getFolderContentCnt
                    this.$store.dispatch('getNextFolder', [{ folder: this.currentFolder, start: folderContentCnt }])                
                }
                this.prevScrollPos = scrollPos
            }, 
            dragSelected(item) {
                for(let i = 0; i < this.data.length; i++) {
                    if (this.data[i] === item) {
                        if (this.selectedItems.includes(i)) 
                            return true
                    }
                }
                return false
            },
            onChange(event) {
                window.getSelection().removeAllRanges();
                this.$store.commit('CLEAR_FILEINFO_PREV')
                this.$store.commit('CLEAR_FILEINFO_DETAIL')
                for (let i = 0; i < event.length; i++){
                    this.$store.commit('GET_FILEINFO_DETAIL', this.data[event[i]])
                }
            },
            dragEnd() {
                alert(this.selectedItems)
            },
            deleteItems(event) {
                if(this.fileInfoDetail.length > 0 && this.$checkPermission('master') || this.$checkPermission('editor')) {
                    if (event.shiftKey) {
                        events.$emit('popup:open', {name: 'confirm-delete'})
                    }
                    else {
                        this.$store.dispatch('deleteItem')
                    }
                }
            },
            dropUpload(event) {
                if (this.isDropExternal) {
                    this.isDropExternal = false
                    return
                }
                if (event.dataTransfer.files.length === 0) return
                if (this.currentFolder.name === 'Trash') return
                // Upload external file
                this.$uploadExternalFiles(event, this.currentFolder.unique_id)

                this.isDragging = false
            },
            dragEnter() {
                this.isDragging = true
            },
            dragLeave() {
                this.isDragging = false
            },
            dragStart(data) {
                let img = document.createElement('img')
                img.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                event.dataTransfer.setDragImage(img, 0, 0)

                if (!this.fileInfoDetail.includes(data)) {
                    this.$store.commit('CLEAR_FILEINFO_DETAIL')
                    this.$store.commit('GET_FILEINFO_DETAIL', data)
                }
                events.$emit('dragstart', data, this.fileInfoDetail)

                // Store dragged folder
                this.draggingId = data
            },
            dragFinish(data, event) {
                if (data.type === 'folder') {
                    if (event.dataTransfer.types[0] === 'Files') {
                        this.isDropExternal = true
                        this.$uploadExternalFiles(event, data.unique_id)
                        for (let i = 0; i < event.dataTransfer.files.length; i++) {
                            this.$store.commit('INCREASE_FOLDER_ITEM', data.unique_id)
                        }
                        return
                    }
                }

                if (this.draggingId === undefined) 
                    this.draggingId = this.curclickedItem
                if (event.dataTransfer.types[0] !== 'Files') {
                    // Prevent to drop on file or image
                    if (data.type !== 'folder' || this.draggingId === data) return

                    // Prevent to drop on itself
                    if (data.unique_id === this.draggingId.unique_id) {
                        this.isDragging = false
                        this.$store.commit('CLEAR_ITEM_MOVED')
                        return
                    }

                    //Prevent move selected folder to folder if in beteewn selected folders
                    if(this.fileInfoDetail.find(item => item === data && this.fileInfoDetail.length > 1)) return 

                    // Move folder to new parent

                    //Move item if is not included in selected items
                    if(!this.fileInfoDetail.includes(this.draggingId)){
                        this.$store.dispatch('moveItem', {to_id:data.unique_id ,noSelectedItem:this.draggingId})
                    }

                    //Move selected items to folder
                    if(this.fileInfoDetail.length > 0 && this.fileInfoDetail.includes(this.draggingId)){
                        this.$store.dispatch('moveItem', {to_id:data.unique_id ,noSelectedItem: null})
                    } 

                } else {

                    // Get unique_id of current folder
                    const unique_id = data.type !== 'folder' ? this.currentFolder.unique_id : data.unique_id

                    // Upload external file
                    if (this.isList)
                        this.$uploadExternalFiles(event, unique_id)
                }
                if (this.currentFolder.location !== 'public')
                    this.$store.dispatch('getAppData')
                if (this.currentFolder.location === 'public')
                    this.$store.dispatch('getFolderTree')

                this.isDragging = false
                this.$store.commit('CLEAR_ITEM_MOVED')
            },
            contextMenu(event, item) {
                this.data['focusedParentFolderIndex'] = this.currentFolder.unique_id
                this.data['focusedNodes'] = undefined
                
                if (!this.fileInfoDetail.includes(item)) {
                    this.$store.commit('CLEAR_FILEINFO_DETAIL')
                    this.$store.commit('GET_FILEINFO_DETAIL', item)
                }
                events.$emit('contextMenu:show', event, item, false)
            },
            onLMouseClicked(evt) {
                window.getSelection().removeAllRanges()
                // if (!evt.shiftKey && !evt.ctrlKey)
                //     if(!this.fileInfoDetail.includes(this.curclickedItem)) {
                //         this.$store.commit('CLEAR_FILEINFO_DETAIL')
                //         this.$store.commit('CLEAR_FILEINFO_PREV')
                //     }
            },
            filesContainerClick() {
                // If showing the preview dialog now, return
                if (this.data['IS_SHOW_PREVIEW'] === undefined)
                    this.data['IS_SHOW_PREVIEW'] = false
                if (this.data['IS_SHOW_PREVIEW']) return

                // If showing the context menu now, return
                if (this.data['IS_SHOW_CONTEXT'] === undefined)
                    this.data['IS_SHOW_CONTEXT'] = false
                if (this.data['IS_SHOW_CONTEXT']) return

                // If showing the context menu now, return
                if (this.data['IS_SHOW_CONFIRM_DELETE'] === undefined)
                    this.data['IS_SHOW_CONFIRM_DELETE'] = false
                if (this.data['IS_SHOW_CONFIRM_DELETE']) return                

                // Deselect itms clicked by outside
                this.$store.commit('CLEAR_FILEINFO_DETAIL')
                // this.$store.commit('CLEAR_FILEINFO_PREV')
                this.$store.commit('CLEAR_ITEM_MOVED')
            },         
        },      
        created() {

            events.$on('mobileSelecting:stop' , () => {
                this.mobileMultiSelect = false
            })

            events.$on('drop', () => {
                this.isDragging = false
                setTimeout(() => {
                    this.draggingId = undefined
                }, 10);
            })

            events.$on('fileItem:deselect', () => {
                console.log('fileItem:deselect')
                this.$store.commit('CLEAR_FILEINFO_DETAIL')
            })

            events.$on('scrollTop', () => {
                // Scroll top
                var container = document.getElementsByClassName(
                    'files-container'
                )[0]

                if (container) container.scrollTop = 0
            })

            events.$on('focus:fileBrowser', () => {
                this.$refs.fileBrowser.focus()
            })
        },
        beforeDestroy() {
            // do not forget clear the interval timer
            clearInterval(this.timer);
        }        
    }
</script>

<style scoped lang="scss">
    @import '@assets/vue-file-manager/_variables';
    @import '@assets/vue-file-manager/_mixins';

    .file-list {
        .dragged {
        /deep/.is-dragenter {
            border: 2px solid transparent;
        }
        }
    }

    .dragged {
        opacity: 0.5;
    }

    .drag-selected {
        border-radius: 8px;
        // background: rgba(230, 122, 122, 1);
        background: $light_background;
    }

    #multi-selected {
        position: fixed;
        pointer-events: none;
        z-index: 100;
        
    }

    .mobile-multi-select {
        bottom: 50px !important;
        top: 0px;
    }

    .button-upload {
        display: block;
        text-align: center;
        margin: 20px 0;
    }

    .mobile-search {
        display: none;
        margin-bottom: 10px;
        margin-top: 10px;
    }

    .file-content {
        display: flex;

        &.is-dragging {
            @include transform(scale(0.99));
        }
    }

    .files-container {
        overflow-x: hidden;
        overflow-y: auto;
        flex: 0 0 100%;
        @include transition(150ms);
        position: relative;
        scroll-behavior: smooth;

        &.is-fileinfo-visible {
            flex: 0 1 100%;
        }

        .file-list {
            &.list {
                display: grid;
                grid-template-columns: repeat(auto-fill, 360px);
                justify-content: space-evenly;
            }
            &.grid {
                display: grid;
                grid-template-columns: repeat(auto-fill, 136px);
                justify-content: space-evenly;
            }
        }
    }

    .file-info-container {
        // flex: 0 0 300px;
        position: absolute;
        padding-left: 20px;
        overflow: auto;
    }

    // Transition
    .file-move {
        transition: transform 0.6s;
    }

    .file-enter-active {
        transition: all 300ms ease;
    }

    .file-leave-active {
        transition: all 0ms;
    }

    .file-enter, .file-leave-to /* .list-leave-active below version 2.1.8 */
    {
        opacity: 0;
        transform: translateX(-20px);
    }

    @media only screen and (min-width: 960px) {

        .file-content {
            position: absolute;
            top: 72px;
            left: 0px;
            right: 0px;
            bottom: 0;
            @include transition;
            overflow-y: auto;
            overflow-x: hidden;

            &.is-offset {
                margin-top: 50px;
            }
        }
    }

    @media only screen and (max-width: 960px) {

        .file-info-container {
            display: none;
        }

        .mobile-search {
            display: block;
        }
        .file-content {
            position: absolute;
            // top: 0px;
            top: 72px;
            left: 0px;
            right: 0px;
            bottom: 0;
            @include transition;
            overflow-y: auto;
            overflow-x: hidden;

            &.is-offset {
                margin-top: 50px;
            }
        }
    }

    @media only screen and (max-width: 690px) {

        .files-container {
            padding-left: 15px;
            padding-right: 15px;
            // top: 0;
            top: 72px;
            left: 0;
            right: 0;
            bottom: 0;
            position: fixed;
            overflow-y: auto;

            .file-list {

                &.grid {
                    grid-template-columns: repeat(auto-fill, 120px);
                }
            }
        }

        .file-content {
            position: absolute;
            // top: 0;
            top: 72px;
            left: 0px;
            right: 0px;
            bottom: 0;
            @include transition;

            &.is-offset {
                margin-top: 50px;
            }
        }

        .mobile-search {
            margin-bottom: 0;
        }
        
        .file-info-container {
            display: none;
        }
    }
</style>
