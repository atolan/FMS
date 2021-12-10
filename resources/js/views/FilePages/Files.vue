<template>
<section id="viewport">
    <ContextMenu/>
    <ContentSidebar>

        <!--Empty storage warning-->
        <!-- <ContentGroup >
            <UpgradeSidebarBanner />
        </ContentGroup> -->

        <!--Locations-->
        <ContentGroup>
            <div class="menu-list-wrapper vertical">
                <a class="menu-list-item link" :class="{'is-active': $isThisLocation(['base'])}" 
                    @click="goHome"
                    @dragover.prevent="dragEnter"
                    @dragleave="dragLeave"
                    @drop="dragFinish"
                >
                    <div class="icon">
                        <!-- <home-icon size="17"></home-icon> -->
                        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                            viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve" width="17" height="17" class="homeIcon">

                            <path d="M12,2l10.3,7.9h-0.9h-1.6v1.6V22h-4.1v-6.3v-1.6H14h-4H8.4v1.6V22H4.2V11.5V9.9H2.6H1.7L12,2 M12,0.5
                                c-0.3,0-0.6,0.1-0.9,0.3L0.8,8.7c-0.5,0.4-0.7,1.1-0.5,1.7s0.8,1,1.4,1h0.9h0.1v0.1V22c0,0.8,0.7,1.5,1.5,1.5h4.1
                                c0.8,0,1.5-0.7,1.5-1.5v-6.3v-0.1H10h4h0.1v0.1V22c0,0.8,0.7,1.5,1.5,1.5h4.1c0.8,0,1.5-0.7,1.5-1.5V11.5v-0.1h0.1h0.9
                                c0.6,0,1.2-0.4,1.4-1c0.2-0.6,0-1.3-0.5-1.7L12.9,0.8C12.6,0.6,12.3,0.5,12,0.5L12,0.5z"/>

                        </svg>
                   
                    </div>
                    <div class="label">
                        {{ $t('sidebar.home') }}
                    </div>
                </a>
            </div>
        </ContentGroup>

        <!--Navigator-->
        <ContentGroup :title="$t('sidebar.navigator_title')" slug="navigator" :can-collapse="true" class="navigator"
                        >
            <span class="empty-note navigator" v-if="tree.length == 0" style="padding-top:20px">
                {{ $t('sidebar.folders_empty') }}
            </span>
            <TreeMenuNavigator class="folder-tree" :depth="0" :nodes="items" v-for="items in tree" :key="items.unique_id" 
                   @dragstart="dragStart(items)"
                    />
        </ContentGroup>
        <!--//hiCreo trash-->
        <ContentGroup>
            <div class="menu-list-wrapper vertical">
                <a class="menu-list-item link trash" :class="{'is-active-trash': $isThisLocation(['trash', 'trash-root'])}" @click="getTrash" v-show="isTrashCanVisible">
                    <div class="icon">
                        <!-- <img v-if="isTrashEmpty" class="icon" style="width: 17px;" src="../../components/FilesView/images/recycleBin_empty.svg"/>
                        <img v-if="!isTrashEmpty" class="icon" style="width: 17px;" src="../../components/FilesView/images/recycleBin_file.svg"/> -->
                        <!-- <trash2-icon size="17"></trash2-icon> -->
                        <svg v-if="isTrashEmpty" class="recycleBin" width="17" height="17"  version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                            viewBox="0 0 17 17" style="enable-background:new 0 0 17 17;" xml:space="preserve">

                            <path d="M9.8,7.2L8.6,4.7L7.4,7.2L6.2,6.7l1.6-3h1.6l1.6,3.1L9.8,7.2z M9.6,11h2.7l-1.6-2.2l0.9-0.9l2,2.8L13,12.1H9.5L9.6,11z
                                M6.6,8.9L5,11.1L7.7,11l0.2,1.3H4.5l-0.8-1.4l2-2.8L6.6,8.9z M16.3,1.3l-2.6,14.3H3.3L0.7,1.3H16.3 M16.3,0.6H0.7
                                c-0.2,0-0.4,0.1-0.6,0.2C0,1.1,0,1.3,0,1.5l2.5,14.3c0.1,0.4,0.4,0.6,0.7,0.6h10.4c0.4,0,0.6-0.2,0.7-0.6L17,1.5
                                c0.1-0.2,0-0.4-0.1-0.6C16.7,0.7,16.5,0.6,16.3,0.6L16.3,0.6z"/>                        
                        </svg>
                        <svg v-if="!isTrashEmpty" class="recycleBin" width="17" height="17" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                            viewBox="0 0 17 17" style="enable-background:new 0 0 17 17;" xml:space="preserve">
                            <g>
                                <path d="M16,4.3l-2.3,11.3H3.3L1,4.3H16 M16,3.3H1c-0.3,0-0.6,0.1-0.8,0.4C0,3.9,0,4.2,0,4.5l2.3,11.3c0.1,0.5,0.5,0.8,1,0.8h10.5
                                    c0.5,0,0.9-0.3,1-0.8L17,4.5c0.1-0.3,0-0.6-0.2-0.8C16.6,3.5,16.3,3.3,16,3.3L16,3.3z M16,5.3L16,5.3L16,5.3L16,5.3z"/>
                            </g>
                            <polygon points="9.7,8.7 8.5,6.3 7.3,8.7 6.1,8.3 7.6,5.2 9.2,5.2 10.9,8.3 "/>
                            <polygon points="9.5,12.5 12.1,12.5 10.6,10.3 11.5,9.4 13.5,12.2 12.8,13.6 9.3,13.6 "/>
                            <polygon points="6.4,10.4 4.9,12.6 7.5,12.5 7.8,13.8 4.3,13.8 3.5,12.4 5.5,9.5 "/>
                            <polyline class="st0" points="0.9,3.7 3.1,1.9 4.6,3.2 8.7,0.6 12,3.7 "/>
                            <polyline class="st0" points="16.1,3.8 12.2,1.2 10.9,2.2 "/>
                        </svg>
                    </div>
                    <div class="label">
                        {{ $t('locations.trash') }}
                    </div>
                </a>
            </div>
        </ContentGroup>
    </ContentSidebar>

    <ContentFileView />
    <!-- <FileInfoPanel  v-if="fileInfoPreview.length === 2 && 
                    (fileInfoPreview[0].type === 'image' ||
                    fileInfoPreview[0].type === 'video' ||
                    fileInfoPreview[0].type === 'audio' ||
                    (fileInfoPreview[0].type === 'file' || fileInfoPreview[0].mimetype === 'hic')) "/> -->
</section>

</template>

<script>
import UpgradeSidebarBanner from '@/components/Others/UpgradeSidebarBanner'
import TreeMenuNavigator from '@/components/Others/TreeMenuNavigator'
import MultiSelected from '@/components/FilesView/MultiSelected'
import ContentFileView from '@/components/Others/ContentFileView'
import ContentSidebar from '@/components/Sidebar/ContentSidebar'
import ContentGroup from '@/components/Sidebar/ContentGroup'
import ContextMenu from '@/components/FilesView/ContextMenu'
// import FileInfoPanel from '@/components/FilesView/FileInfoPanel'
import {
    mapGetters
} from 'vuex'
import {
    events
} from '@/bus'
import {
    UploadCloudIcon,
    FolderIcon,
    Trash2Icon,
    HomeIcon,
    XIcon,
} from 'vue-feather-icons'

export default {
    name: 'FilesView',
    components: {
        UpgradeSidebarBanner,
        TreeMenuNavigator,
        ContentFileView,
        MultiSelected,
        ContentSidebar,
        UploadCloudIcon,
        ContentGroup,
        ContextMenu,
        FolderIcon,
        Trash2Icon,
        HomeIcon,
        XIcon,
        // FileInfoPanel
    },
    computed: {
        ...mapGetters(['user', 'homeDirectory', 'currentFolder', 'config', 'fileInfoDetail', 'fileInfoPreview', 'curclickedItem', 'data', 'trashItemCnt']),

        tree() {
            if (this.user === undefined) return []
            return this.user.relationships.tree.data.attributes.folders
        },
        storage() {
            if (this.user === undefined) return []
            return this.$store.getters.user.relationships.storage.data.attributes
        },
        isTrashEmpty() {
            return this.trashItemCnt === 0 ? true : false
        }
    },
    data() {
        return {
            area: false,
            draggedItem: undefined,
            isTrashCanVisible: true
        }
    },
    methods: {
        dragEnter() {
            this.area = true
        },
        dragLeave() {
            this.area = false
        },
        dragFinish(){
            // Move no selected item
            if (this.curclickedItem !== undefined)
                this.draggedItem = this.curclickedItem
            if (!this.draggedItem){
                this.area = false
                return
            }
            if (this.draggedItem.type === 'folder' && this.draggedItem.parent_id === 0){
                this.area = false
                return
            }
            if (this.draggedItem.type !== 'folder' && parseInt(this.draggedItem.folder_id) === 0){
                this.area = false
                return
            }
            if(!this.fileInfoDetail.includes(this.draggedItem)) {
                this.$store.dispatch('moveItem', {to_id: 0 ,noSelectedItem:this.draggedItem})
            }

            // Move all selected items
            if(this.fileInfoDetail.includes(this.draggedItem)) {
                this.$store.dispatch('moveItem', {to_id: 0 ,noSelectedItem:null})
            }
            
            this.draggedItem = undefined
            this.area = false
            this.$store.commit('CLEAR_ITEM_MOVED')
        },    
        // Call this function when start to drag folder in ROOT TreeMenu
        dragStart(item) {
            this.draggedItem = [item]
            this.$store.commit('SET_ITEM_TO_MOVE', item)
        },   
        getTrash() {
            events.$emit('leftMenu:show')
            this.$store.dispatch('getTrash')
        },
        getLatest() {
            this.$store.dispatch('getLatest')
        },
        goHome() {
            events.$emit('leftMenu:show')
            this.$store.dispatch('getFolder', [{
                folder: this.homeDirectory,
                back: false,
                init: true,
                type: 'image'
            }])
        },
        openFolder(folder) {
            this.$store.dispatch('getFolder', [{
                folder: folder,
                back: false,
                init: false
            }])
        },

  
    },
    created() {
        let popup = setTimeout(() => {
            this.$store.dispatch('getTrash')
            this.goHome()

            // Listen for dragstart folder items
            events.$on('dragstart', (item) => {
                this.draggedItem = item, this.dragInProgress = true
            })

            events.$on('drop', () => {
                this.dragInProgress = false
            })
        }, 2000)
        
        
    }
}
</script>

<style lang="scss" scoped>
.empty-note {

    &.navigator {
        padding: 5px 25px 10px;
    }

    &.favourites {
        padding: 5px 23px 10px;
    }
}

.navigator {
    width: 100%;
    overflow-x: auto;
    margin-top: -20px;
}

@media only screen and (max-width: 1024px) {

    .empty-note {

        &.navigator {
            padding: 5px 20px 10px;
        }

        &.favourites {
            padding: 5px 18px 10px;
        }
    }
}

// Transition
.folder-item-move {
    transition: transform 300s ease;
}

.folder-item-enter-active {
    transition: all 300ms ease;
}

.folder-item-leave-active {
    transition: all 300ms;
}

.folder-item-enter,
.folder-item-leave-to

/* .list-leave-active below version 2.1.8 */
    {
    opacity: 0;
    transform: translateX(30px);
}

.folder-item-leave-active {
    position: absolute;
}
</style>
