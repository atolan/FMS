(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunks/files~chunks/shared-page"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Others/TreeMenuNavigator.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Others/TreeMenuNavigator.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Others_TreeMenuNavigator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/Others/TreeMenuNavigator */ "./resources/js/components/Others/TreeMenuNavigator.vue");
/* harmony import */ var vue_feather_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-feather-icons */ "./node_modules/vue-feather-icons/dist/vue-feather-icons.es.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _bus__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/bus */ "./resources/js/bus.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'TreeMenuNavigator',
  props: ['nodes', 'depth', 'disabled'],
  components: {
    TreeMenuNavigator: _components_Others_TreeMenuNavigator__WEBPACK_IMPORTED_MODULE_0__["default"],
    ChevronRightIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_1__["ChevronRightIcon"],
    FolderIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_1__["FolderIcon"]
  },
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_2__["mapGetters"])(['fileInfoDetail', 'curclickedItem', 'data', 'user', 'treefolders'])), {}, {
    disabledFolder: function disabledFolder() {
      //     let disableFolder = false
      //     let ismultiple = 0
      //     var curDragItem = this.curclickedItem && this.curclickedItem.type === 'folder' ? this.curclickedItem : undefined
      //     if (!curDragItem && this.fileInfoDetail.length > 0){
      //         for (let i = 0; i < this.fileInfoDetail.length; i++){
      //             if (this.fileInfoDetail[i].type === 'folder'){
      //                 curDragItem = this.fileInfoDetail[i]
      //                 ismultiple = ismultiple + 1
      //             }
      //         }
      //     }
      //     if(curDragItem) {
      //         //Disable the parent of the folder
      //         if(this.nodes.parent_id === curDragItem.unique_id){
      //             disableFolder = true
      //             this.disableChildren = true
      //         }
      //         //Disable the self folder with all children
      //         if (this.nodes.unique_id === curDragItem.parent_id) {
      //             disableFolder = true
      //             if (ismultiple > 1)
      //                 {
      //                     this.disableChildren = true
      //                 }
      //         }
      //         if (this.nodes.unique_id === curDragItem.unique_id & !this.data['sidebar']){
      //             disableFolder = true
      //         }
      //         if(this.disabled) {
      //             this.disableChildren = true
      //         }
      //     }else {
      //         disableFolder = false
      //         this.disableChildren = false
      //    }
      // return disableFolder
      return false;
    },
    indent: function indent() {
      var offset = window.innerWidth <= 1024 ? 17 : 22;
      var value = this.depth == 0 ? offset : offset + this.depth * 20;
      return {
        paddingLeft: value + 'px'
      };
    },
    isemptyfolder: function isemptyfolder() {
      var itemcnt = this.nodes.items;
      if (itemcnt === 0) return true;else return false;
    }
  }),
  data: function data() {
    return {
      isVisible: false,
      isSelected: false,
      area: false,
      draggedItem: undefined,
      disableChildren: false,
      focusedParentIndex: 0,
      focusedNodes: undefined
    };
  },
  methods: {
    // Call this function when start to drag folder in UNDER-ROOT TreeMenu
    dragStart: function dragStart(item) {
      this.data['sidebar'] = true;
      this.$store.commit('CLEAR_FILEINFO_DETAIL');
      this.$store.commit('SET_ITEM_TO_MOVE', item);
    },
    // Call this function when finish to drag on folder in TreeMenu            
    dragFinish: function dragFinish(evt) {
      this.area = false;

      if (evt.dataTransfer.files.length > 0) {
        this.$uploadExternalFiles(evt, this.nodes.unique_id);
        this.$store.dispatch('getAppData');

        for (var i = 0; i < evt.dataTransfer.files.length; i++) {
          this.$store.commit('INCREASE_FOLDER_ITEM', this.nodes.unique_id);
        }

        this.data['IsExternalUploadedToTreeMenu'] = true;
        return;
      }

      if (this.curclickedItem !== undefined && !this.fileInfoDetail.includes(this.curclickedItem)) {
        // If drop the folder in itself, return
        if (this.curclickedItem.type === 'folder') if (this.curclickedItem.unique_id === this.nodes.unique_id) {
          this.draggedItem = undefined;
          this.area = false;
          this.$store.commit('CLEAR_ITEM_MOVED');
          this.data['sidebar'] = false;
          return;
        }
        var folder_id = this.curclickedItem.type === 'folder' ? this.curclickedItem.parent_id : this.curclickedItem.folder_id;
        if (folder_id !== this.nodes.unique_id) this.$store.dispatch('moveItem', {
          to_id: this.nodes.unique_id,
          noSelectedItem: this.curclickedItem
        });
        this.draggedItem = undefined;
      } // Move all selected items
      // if(this.fileInfoDetail.includes(this.draggedItem)) {
      else {
        var folder_id = this.fileInfoDetail[0].type == 'folder' ? this.fileInfoDetail[0].parent_id : this.fileInfoDetail[0].folder_id;
        folder_id = parseInt(folder_id);
        if (folder_id !== this.nodes.unique_id && parseInt(this.fileInfoDetail[0].unique_id) !== this.nodes.unique_id) this.$store.dispatch('moveItem', {
          to_id: this.nodes.unique_id,
          noSelectedItem: null
        });
        this.draggedItem = undefined;
      }

      if (this.currentFolder.location !== 'public') this.$store.dispatch('getAppData');
      if (this.currentFolder.location === 'public') this.$store.dispatch('getFolderTree');
      this.$store.commit('CLEAR_ITEM_MOVED');
      this.data['sidebar'] = false; // this.draggedItem = undefined
      // this.getFolder()
    },
    dragEnter: function dragEnter() {
      var _this = this;

      this.area = true;
      setTimeout(function () {
        _this.isVisible = true;
      }, 500);
    },
    dragLeave: function dragLeave() {
      this.area = false;
    },
    getFolder: function getFolder() {
      _bus__WEBPACK_IMPORTED_MODULE_3__["events"].$emit('show-folder', this.nodes); // Go to folder

      if (this.$isThisLocation('public')) {
        this.$store.dispatch('browseShared', [{
          folder: this.nodes,
          back: false,
          init: false
        }]);
      } else {
        this.$store.dispatch('getFolder', [{
          folder: this.nodes,
          back: false,
          init: false
        }]);
      }
    },
    showTree: function showTree() {
      this.isVisible = !this.isVisible;
    },
    contextMenu: function contextMenu(event, item) {
      this.data['focusedParentFolderIndex'] = this.focusedParentIndex;
      this.data['focusedNodes'] = this.focusedNodes;
      _bus__WEBPACK_IMPORTED_MODULE_3__["events"].$emit('contextMenu:show', event, item, true);
      this.focusedParentIndex = 0;
      this.focusedNodes = undefined;
    },
    focusFolder: function focusFolder() {
      this.focusedParentIndex = this.nodes.unique_id;
      this.focusedNodes = this.nodes; // alert(this.data['focusFolderID'])
    },
    noneFocusFolder: function noneFocusFolder() {// this.focusFolderID = -1
      // this.data['focusFolderID'] = -1
    },
    checkParent: function checkParent(folder) {
      var parent = this.treefolders.filter(function (element) {
        return element.unique_id === folder.parent_id;
      });
      if (parent[0].unique_id === this.nodes.unique_id) return parent[0];

      while (parent[0].parent_id !== 0) {
        parent = this.treefolders.filter(function (element) {
          return element.unique_id === parent[0].parent_id;
        });
        if (parent.length > 0 && parent[0].unique_id === this.nodes.unique_id) return parent[0];
      }

      return false;
    }
  },
  created: function created() {
    var _this2 = this;

    this.data['sidebar'] = true; // events.$on('drop' , () => {
    //     this.draggedItem = []
    // })
    //Get dragged item

    _bus__WEBPACK_IMPORTED_MODULE_3__["events"].$on('dragstart', function (data, selectedItems) {
      //If another one, other than the selected items, is selected
      if (!selectedItems.includes(data)) {
        _this2.$store.commit('SET_ITEM_TO_MOVE', data);

        _this2.$store.commit('CLEAR_FILEINFO_DETAIL');
      } //If one of the selected items is selected
      else {
        _this2.draggedItem = data;

        _this2.$store.commit('CLEAR_ITEM_MOVED');
      }
    }); // Select clicked folder

    _bus__WEBPACK_IMPORTED_MODULE_3__["events"].$on('show-folder', function (node) {
      _this2.isSelected = false;
      if (_this2.nodes.unique_id == node.unique_id) _this2.isSelected = true;
    }); // events.$on('leftMenu:show', (item, parents) => {

    _bus__WEBPACK_IMPORTED_MODULE_3__["events"].$on('leftMenu:show', function (item) {
      _this2.isSelected = false;
      if (item === undefined) return; // var found = parents.filter(item => item.unique_id === this.nodes.unique_id)
      // if (found.length > 0) {
      //     if (this.data['cnt'] === undefined) {
      //         this.data['cnt'] = 0
      //     }
      //     else {
      //         this.data['cnt '] = this.data['cnt'] + 1
      //     }
      //     console.log(this.data['cnt'])
      //     let popup = setTimeout(() => {
      //         console.log(found[0].name)
      //         this.isVisible = true
      //     }, 2880 * this.data['cnt'])  
      // }
      // var tmpitem = item
      // let tree = this.user.relationships.tree.data.attributes.folders
      // let isparent = this.checkParent(item)
      // if (isparent.parent_id === 0) {
      //     console.log(this.nodes.name, this.isSelected, this.isVisible)
      //     this.isVisible = true
      //     // this.isSelected = true
      // }

      if (item.unique_id === _this2.nodes.unique_id) {
        // console.log('matched', this.nodes.unique_id)
        _this2.isSelected = true;
        _this2.isVisible = true;
      }
    });
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Others/TreeMenuNavigator.vue?vue&type=style&index=0&id=38f20d4e&lang=scss&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Others/TreeMenuNavigator.vue?vue&type=style&index=0&id=38f20d4e&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".is-inactive[data-v-38f20d4e] {\n  opacity: 0.5;\n  pointer-events: none;\n}\n.is-dragenter[data-v-38f20d4e] {\n  border: 2px dashed #0066ff !important;\n  border-radius: 8px;\n}\n.folder-item[data-v-38f20d4e] {\n  display: block;\n  padding: 2px 0;\n  transition: 150ms all ease;\n  cursor: pointer;\n  position: relative;\n  white-space: nowrap;\n  width: 100%;\n  border: 2px dashed transparent;\n}\n.folder-item .icon[data-v-38f20d4e] {\n  line-height: 0;\n  width: 15px;\n  margin-right: 9px;\n  vertical-align: middle;\n  margin-top: -1px;\n}\n.folder-item .icon path[data-v-38f20d4e], .folder-item .icon line[data-v-38f20d4e], .folder-item .icon polyline[data-v-38f20d4e], .folder-item .icon rect[data-v-38f20d4e], .folder-item .icon circle[data-v-38f20d4e] {\n  transition: 150ms all ease;\n}\n.folder-item .icon[data-v-38f20d4e] {\n  stroke: #1B2539;\n  fill: none;\n}\n.folder-item .icon path[data-v-38f20d4e],\n.folder-item .icon line[data-v-38f20d4e],\n.folder-item .icon polyline[data-v-38f20d4e],\n.folder-item .icon rect[data-v-38f20d4e],\n.folder-item .icon circle[data-v-38f20d4e],\n.folder-item .icon ellipse[data-v-38f20d4e] {\n  stroke: #1B2539;\n  fill: none;\n}\n.folder-item[data-v-38f20d4e]:hover {\n  background: rgba(0, 102, 255, 0.1);\n}\n.folder-item:hover .label[data-v-38f20d4e] {\n  color: #0066ff;\n}\n.folder-item:hover .icon[data-v-38f20d4e] {\n  stroke: #bec6cf;\n  fill: none;\n}\n.folder-item:hover .icon path[data-v-38f20d4e],\n.folder-item:hover .icon line[data-v-38f20d4e],\n.folder-item:hover .icon polyline[data-v-38f20d4e],\n.folder-item:hover .icon rect[data-v-38f20d4e],\n.folder-item:hover .icon circle[data-v-38f20d4e],\n.folder-item:hover .icon ellipse[data-v-38f20d4e] {\n  stroke: #0066ff;\n  fill: none;\n}\n.folder-item .icon-arrow[data-v-38f20d4e] {\n  transition: 300ms all ease;\n  margin-right: 4px;\n  vertical-align: middle;\n  opacity: 0;\n}\n.folder-item .icon-arrow.is-visible[data-v-38f20d4e] {\n  opacity: 1;\n}\n.folder-item .icon-arrow.is-opened[data-v-38f20d4e] {\n  transform: rotate(90deg);\n}\n.folder-item .label[data-v-38f20d4e] {\n  transition: 150ms all ease;\n  font-size: 0.75em;\n  font-weight: normal;\n  vertical-align: middle;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: inline-block;\n  color: #1B2539;\n  max-width: 130px;\n}\n.folder-item:hover .icon path[data-v-38f20d4e], .folder-item:hover .icon line[data-v-38f20d4e], .folder-item:hover .icon polyline[data-v-38f20d4e], .folder-item:hover .icon rect[data-v-38f20d4e], .folder-item:hover .icon circle[data-v-38f20d4e], .folder-item.is-selected .icon path[data-v-38f20d4e], .folder-item.is-selected .icon line[data-v-38f20d4e], .folder-item.is-selected .icon polyline[data-v-38f20d4e], .folder-item.is-selected .icon rect[data-v-38f20d4e], .folder-item.is-selected .icon circle[data-v-38f20d4e] {\n  stroke: #0066ff;\n}\n.folder-item:hover .label[data-v-38f20d4e], .folder-item.is-selected .label[data-v-38f20d4e] {\n  color: #0066ff;\n}\n@media only screen and (max-width: 1024px) {\n.folder-item[data-v-38f20d4e] {\n    padding: 2px 0;\n}\n}\n@media (prefers-color-scheme: dark) {\n.folder-item .label[data-v-38f20d4e] {\n    color: #bec6cf;\n}\n.folder-item[data-v-38f20d4e]:hover {\n    background: rgba(0, 102, 255, 0.1);\n}\n.folder-item.is-selected[data-v-38f20d4e] {\n    background: rgba(0, 102, 255, 0.1);\n}\n.is-selected[data-v-38f20d4e] {\n    background: rgba(0, 102, 255, 0.1);\n}\n}\n@media (prefers-color-scheme: dark) and (max-width: 690px) {\n.folder-item[data-v-38f20d4e]:hover, .folder-item.is-selected[data-v-38f20d4e] {\n    background: rgba(0, 102, 255, 0.1);\n}\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Others/TreeMenuNavigator.vue?vue&type=style&index=0&id=38f20d4e&lang=scss&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Others/TreeMenuNavigator.vue?vue&type=style&index=0&id=38f20d4e&lang=scss&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./TreeMenuNavigator.vue?vue&type=style&index=0&id=38f20d4e&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Others/TreeMenuNavigator.vue?vue&type=style&index=0&id=38f20d4e&lang=scss&scoped=true&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Others/TreeMenuNavigator.vue?vue&type=template&id=38f20d4e&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Others/TreeMenuNavigator.vue?vue&type=template&id=38f20d4e&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("transition", { attrs: { name: "folder" } }, [
    _c(
      "div",
      { staticClass: "folder-item-wrapper" },
      [
        _c(
          "div",
          {
            staticClass: "folder-item",
            class: {
              "is-selected": _vm.isSelected,
              "is-dragenter": _vm.area,
              "is-inactive": _vm.disabledFolder || _vm.disabled
            },
            staticStyle: { height: "100%" },
            style: _vm.indent,
            attrs: { draggable: true },
            on: {
              click: _vm.getFolder,
              dragstart: function($event) {
                return _vm.$emit("dragstart")
              },
              mouseover: _vm.focusFolder,
              dragover: function($event) {
                $event.preventDefault()
                return _vm.dragEnter.apply(null, arguments)
              },
              dragleave: _vm.dragLeave,
              drop: function($event) {
                return _vm.dragFinish($event)
              },
              contextmenu: function($event) {
                $event.preventDefault()
                return _vm.contextMenu($event, undefined)
              }
            }
          },
          [
            _c("chevron-right-icon", {
              staticClass: "icon-arrow",
              class: {
                "is-opened": _vm.isVisible,
                "is-visible": _vm.nodes.folders.length !== 0
              },
              attrs: { size: "17" },
              on: {
                click: function($event) {
                  $event.stopPropagation()
                  return _vm.showTree.apply(null, arguments)
                }
              }
            }),
            _vm._v(" "),
            _vm.isemptyfolder
              ? _c(
                  "svg",
                  {
                    staticClass: "icon",
                    staticStyle: { "enable-background": "new 0 0 17 17" },
                    attrs: {
                      width: "17",
                      height: "17",
                      version: "1.1",
                      id: "Layer_1",
                      xmlns: "http://www.w3.org/2000/svg",
                      "xmlns:xlink": "http://www.w3.org/1999/xlink",
                      x: "0px",
                      y: "0px",
                      viewBox: "0 0 17 17",
                      "xml:space": "preserve"
                    }
                  },
                  [
                    _c("path", {
                      staticClass: "st0",
                      attrs: {
                        d:
                          "M15.6,13.5c0,0.8-0.6,1.4-1.4,1.4H2.8c-0.8,0-1.4-0.6-1.4-1.4V3.5c0-0.8,0.6-1.4,1.4-1.4h3.5l1.4,2.1h6.4\n                    c0.8,0,1.4,0.6,1.4,1.4V13.5z"
                      }
                    })
                  ]
                )
              : _vm._e(),
            _vm._v(" "),
            !_vm.isemptyfolder
              ? _c(
                  "svg",
                  {
                    staticClass: "icon",
                    staticStyle: { "enable-background": "new 0 0 17 17" },
                    attrs: {
                      width: "17",
                      height: "17",
                      version: "1.1",
                      id: "Layer_1",
                      xmlns: "http://www.w3.org/2000/svg",
                      "xmlns:xlink": "http://www.w3.org/1999/xlink",
                      x: "0px",
                      y: "0px",
                      viewBox: "0 0 17 17",
                      "xml:space": "preserve"
                    }
                  },
                  [
                    _c("path", {
                      staticClass: "st0",
                      attrs: {
                        d:
                          "M15.6,13.5c0,0.8-0.6,1.4-1.4,1.4H2.8c-0.8,0-1.4-0.6-1.4-1.4V3.5c0-0.8,0.6-1.4,1.4-1.4h3.5l1.4,2.1h6.4\n                    c0.8,0,1.4,0.6,1.4,1.4V13.5z"
                      }
                    }),
                    _vm._v(" "),
                    _c("path", {
                      staticClass: "st0",
                      attrs: { d: "M15.4,6.3H8L6.6,8.4H2.1" }
                    }),
                    _vm._v(" "),
                    _c("line", {
                      staticClass: "st0",
                      attrs: { x1: "1.9", y1: "6", x2: "15.3", y2: "6" }
                    }),
                    _vm._v(" "),
                    _c("path", {
                      staticClass: "st0",
                      attrs: { d: "M1.9,14.2" }
                    })
                  ]
                )
              : _vm._e(),
            _vm._v(" "),
            _c("span", { staticClass: "label" }, [
              _vm._v(_vm._s(_vm.nodes.name))
            ])
          ],
          1
        ),
        _vm._v(" "),
        _vm._l(_vm.nodes.folders, function(item) {
          return _vm.isVisible
            ? _c("TreeMenuNavigator", {
                key: item.unique_id,
                attrs: {
                  disabled: _vm.disableChildren,
                  depth: _vm.depth + 1,
                  nodes: item
                },
                on: {
                  dragstart: function($event) {
                    return _vm.dragStart(item)
                  }
                }
              })
            : _vm._e()
        })
      ],
      2
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/Others/TreeMenuNavigator.vue":
/*!**************************************************************!*\
  !*** ./resources/js/components/Others/TreeMenuNavigator.vue ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TreeMenuNavigator_vue_vue_type_template_id_38f20d4e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TreeMenuNavigator.vue?vue&type=template&id=38f20d4e&scoped=true& */ "./resources/js/components/Others/TreeMenuNavigator.vue?vue&type=template&id=38f20d4e&scoped=true&");
/* harmony import */ var _TreeMenuNavigator_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TreeMenuNavigator.vue?vue&type=script&lang=js& */ "./resources/js/components/Others/TreeMenuNavigator.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _TreeMenuNavigator_vue_vue_type_style_index_0_id_38f20d4e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TreeMenuNavigator.vue?vue&type=style&index=0&id=38f20d4e&lang=scss&scoped=true& */ "./resources/js/components/Others/TreeMenuNavigator.vue?vue&type=style&index=0&id=38f20d4e&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _TreeMenuNavigator_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TreeMenuNavigator_vue_vue_type_template_id_38f20d4e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TreeMenuNavigator_vue_vue_type_template_id_38f20d4e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "38f20d4e",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Others/TreeMenuNavigator.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Others/TreeMenuNavigator.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/Others/TreeMenuNavigator.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TreeMenuNavigator_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./TreeMenuNavigator.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Others/TreeMenuNavigator.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TreeMenuNavigator_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Others/TreeMenuNavigator.vue?vue&type=style&index=0&id=38f20d4e&lang=scss&scoped=true&":
/*!************************************************************************************************************************!*\
  !*** ./resources/js/components/Others/TreeMenuNavigator.vue?vue&type=style&index=0&id=38f20d4e&lang=scss&scoped=true& ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_TreeMenuNavigator_vue_vue_type_style_index_0_id_38f20d4e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./TreeMenuNavigator.vue?vue&type=style&index=0&id=38f20d4e&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Others/TreeMenuNavigator.vue?vue&type=style&index=0&id=38f20d4e&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_TreeMenuNavigator_vue_vue_type_style_index_0_id_38f20d4e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_TreeMenuNavigator_vue_vue_type_style_index_0_id_38f20d4e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_TreeMenuNavigator_vue_vue_type_style_index_0_id_38f20d4e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_TreeMenuNavigator_vue_vue_type_style_index_0_id_38f20d4e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/Others/TreeMenuNavigator.vue?vue&type=template&id=38f20d4e&scoped=true&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/components/Others/TreeMenuNavigator.vue?vue&type=template&id=38f20d4e&scoped=true& ***!
  \*********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TreeMenuNavigator_vue_vue_type_template_id_38f20d4e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./TreeMenuNavigator.vue?vue&type=template&id=38f20d4e&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Others/TreeMenuNavigator.vue?vue&type=template&id=38f20d4e&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TreeMenuNavigator_vue_vue_type_template_id_38f20d4e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TreeMenuNavigator_vue_vue_type_template_id_38f20d4e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=shared-page.js.map?id=2c0eeb5fa627b1a504a0