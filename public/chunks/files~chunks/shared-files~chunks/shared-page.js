(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunks/files~chunks/shared-files~chunks/shared-page"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/ButtonUpload.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FilesView/ButtonUpload.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
  name: 'ButtonBase',
  props: ['buttonStyle'],
  data: function data() {
    return {
      files: undefined
    };
  },
  methods: {
    emmitFiles: function emmitFiles(e) {
      //debugger
      this.$uploadFiles(e.target.files);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/ContextMenu.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FilesView/ContextMenu.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_FilesView_OptionGroup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/FilesView/OptionGroup */ "./resources/js/components/FilesView/OptionGroup.vue");
/* harmony import */ var _components_FilesView_Option__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/FilesView/Option */ "./resources/js/components/FilesView/Option.vue");
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
  name: 'ContextMenu',
  components: {
    OptionGroup: _components_FilesView_OptionGroup__WEBPACK_IMPORTED_MODULE_0__["default"],
    Option: _components_FilesView_Option__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_2__["mapGetters"])(['user', 'fileInfoDetail', 'clipBoard', 'copyOrCutInfo', 'data'])), {}, {
    hasFolder: function hasFolder() {
      // Check if selected items includes some folder
      if (this.fileInfoDetail.find(function (item) {
        return item.type === 'folder';
      })) return true;
    },
    hasFile: function hasFile() {
      // Check if selected items includes some files
      if (this.fileInfoDetail.find(function (item) {
        return item.type !== 'folder';
      })) return true;
    },
    multiSelected: function multiSelected() {
      if (this.isMultipleMenu) return true;
      if (this.fileInfoDetail.length > 1) return true;
      if (this.fileInfoDetail.length == 1 && !this.fileInfoDetail.includes(this.item)) return true;
      return false;
    },
    isFolder: function isFolder() {
      return this.item && this.item.type === 'folder';
    },
    isFile: function isFile() {
      return this.item && this.item.type !== 'folder' && this.item && this.item.type !== 'image';
    },
    isImage: function isImage() {
      return this.item && this.item.type === 'image';
    },
    isCut: function isCut() {
      return this.copyOrCutInfo;
    },
    canCopyorCut: function canCopyorCut() {
      return this.clipBoard.length < 1 || !this.clipBoard.includes(this.item);
    },
    canPaste: function canPaste() {
      return this.clipBoard.length > 0 && !this.clipBoard.includes(this.item);
    },
    onlyMediaSelected: function onlyMediaSelected() {
      var onlymedia = true;

      if (this.fileInfoDetail.length > 1) {
        this.fileInfoDetail.forEach(function (element) {
          var type = element.type;

          if (type !== 'image' && type !== 'audio' && type !== 'video') {
            onlymedia = false;
          }
        });
      } else {
        onlymedia = false;
      }

      return onlymedia;
    }
  }),
  data: function data() {
    return {
      showFromPreview: false,
      item: undefined,
      isMenu: false,
      isVisible: false,
      isMultipleMenu: false,
      positionX: 0,
      positionY: 0
    };
  },
  methods: {
    downloadFolder: function downloadFolder() {
      this.data['IS_SHOW_CONTEXT'] = false;
      this.$store.dispatch('downloadFolder', this.item);
    },
    emptyTrash: function emptyTrash() {
      this.data['IS_SHOW_CONTEXT'] = false;
      this.$store.dispatch('emptyTrash');
    },
    restoreItem: function restoreItem() {
      this.data['IS_SHOW_CONTEXT'] = false; // If is item not in selected items restore just this single item

      if (!this.fileInfoDetail.includes(this.item)) this.$store.dispatch('restoreItem', this.item); // If is item in selected items restore all items from fileInfoDetail

      if (this.fileInfoDetail.includes(this.item)) this.$store.dispatch('restoreItem', null);
    },
    renameItem: function renameItem() {
      this.data['IS_SHOW_CONTEXT'] = false;
      _bus__WEBPACK_IMPORTED_MODULE_3__["events"].$emit('popup:open', {
        name: 'rename-item',
        item: this.item
      });
    },
    copyOrcutItem: function copyOrcutItem(bcut) {
      this.data['IS_SHOW_CONTEXT'] = false;
      var item = this.item;
      if (this.isMenu && this.data['focusedNodes']) item = this.data['focusedNodes'];
      if (!this.fileInfoDetail.includes(item)) this.$store.commit('GET_FILEINFO_DETAIL', item);
      this.$store.commit('SET_COPY_CUT_STATE', bcut);
      this.$store.commit('STORE_COPY_CUT_ITEM');
      this.isVisible = false;
      _bus__WEBPACK_IMPORTED_MODULE_3__["events"].$emit('focus:fileBrowser');
    },
    AddToPage: function AddToPage() {},
    pasteItem: function pasteItem() {
      this.data['IS_SHOW_CONTEXT'] = false;
      var parent_id = this.item ? this.item.unique_id : this.data['focusedParentFolderIndex'];
      console.log(parent_id);

      if (this.copyOrCutInfo) {
        // cut-paste
        this.$store.dispatch('cutItem', {
          to_id: parent_id
        });
      } else {
        // copy-paste
        this.$store.dispatch('copyItem', {
          to_id: parent_id
        }); // this.$copyFunc(parent_id)
      }
    },
    downloadItem: function downloadItem() {
      this.data['IS_SHOW_CONTEXT'] = false;
      if (this.fileInfoDetail.length > 1) this.$store.dispatch('downloadFiles');else {
        this.$downloadFile(this.item.file_url, this.item.name + '.' + this.item.mimetype);
      }
    },
    deleteItem: function deleteItem(evt) {
      this.data['IS_SHOW_CONTEXT'] = false;

      if (!this.fileInfoDetail.includes(this.item)) {
        this.$store.commit('CLEAR_FILEINFO_DETAIL');
        this.$store.commit('GET_FILEINFO_DETAIL', this.item);
      } // If is context menu open to multi selected items dele this selected items


      if (this.fileInfoDetail.includes(this.item)) {
        if (evt.shiftKey) {
          _bus__WEBPACK_IMPORTED_MODULE_3__["events"].$emit('popup:open', {
            name: 'confirm-delete'
          });
        } else {
          this.$store.dispatch('deleteItem', false);
        }
      }
    },
    createFolder: function createFolder() {
      this.data['IS_SHOW_CONTEXT'] = false; // this.$store.dispatch('testapi', {id:38})

      this.$store.dispatch('createFolder', this.$t('popup_create_folder.folder_default_name'));
    },
    closeAndResetContextMenu: function closeAndResetContextMenu() {
      this.data['IS_SHOW_CONTEXT'] = false; // Close context menu

      this.isVisible = false; // Reset item container

      this.item = undefined;
    },
    showFolderActionsMenu: function showFolderActionsMenu() {
      var container = document.getElementById('folder-actions');
      this.positionX = container.offsetLeft + 16;
      this.positionY = container.offsetTop + 30; // Show context menu

      this.isVisible = true;
    },
    showContextMenu: function showContextMenu(event) {
      if (this.data['IS_SHOW_PREVIEW']) return;
      if (this.fileInfoDetail.length > 1) this.isMultipleMenu = true;else this.isMultipleMenu = false;
      this.data['IS_SHOW_CONTEXT'] = true;
      var parent = document.getElementById('menu-list');
      var nodesSameClass = parent.getElementsByClassName('menu-option');
      var VerticalOffsetArea = nodesSameClass.length * 50;
      var HorizontalOffsetArea = 190; // let container = document.getElementById('files-view')

      var container = document.getElementById('viewport');
      var offset = container.getClientRects()[0];
      var x = event.clientX - offset.left;
      var y = event.clientY - offset.top; // Set position Y

      if (container.offsetHeight - y < VerticalOffsetArea) {
        this.positionY = y - VerticalOffsetArea;
      } else {
        this.positionY = y;
      } // Set position X


      if (container.offsetWidth - x < HorizontalOffsetArea) {
        this.positionX = x - HorizontalOffsetArea;
      } else {
        this.positionX = x;
      } // Show context menu


      this.isVisible = true;
    },
    showFilePreviewMenu: function showFilePreviewMenu() {
      var container = document.getElementById('fast-preview-menu');

      if (container) {
        this.positionX = container.offsetLeft + 16;
        this.positionY = container.offsetTop + 51;
      }
    }
  },
  watch: {
    item: function item(newValue, oldValue) {
      if (oldValue != undefined && this.showFromPreview) {
        this.showFromPreview = false;
      }
    }
  },
  mounted: function mounted() {
    var _this = this;

    _bus__WEBPACK_IMPORTED_MODULE_3__["events"].$on('actualShowingImage:ContextMenu', function (item) {
      _this.item = item;
    });
  },
  created: function created() {
    var _this2 = this;

    _bus__WEBPACK_IMPORTED_MODULE_3__["events"].$on('showContextMenuPreview:show', function (item) {
      if (!_this2.showFromPreview) {
        _this2.item = item;
        _this2.showFromPreview = true; // this.showFilePreviewMenu()
      } else if (_this2.showFromPreview) {
        _this2.showFromPreview = false;
        _this2.item = undefined;
      }
    });
    _bus__WEBPACK_IMPORTED_MODULE_3__["events"].$on('showContextMenuPreview:hide', function () {
      _this2.isVisible = false;
      _this2.showFromPreview = false;
      _this2.item = undefined;
    });
    _bus__WEBPACK_IMPORTED_MODULE_3__["events"].$on('contextMenu:show', function (event, item, side) {
      // If the file preview window is active, return
      if (_this2.data['IS_SHOW_PREVIEW']) return; // Store item

      _this2.item = item;
      _this2.isMenu = side;
      console.log('---------------------------');
      console.log(_this2.data['focusedParentFolderIndex']);
      console.log(_this2.item);
      console.log(_this2.fileInfoDetail.length);
      console.log(_this2.data['focusedNodes']);
      console.log('---------------------------'); // alert(this.clipBoard.length)
      // alert(this.fileInfoDetail.length)
      // Show context menu

      setTimeout(function () {
        return _this2.showContextMenu(event, item);
      }, 10);
    });
    _bus__WEBPACK_IMPORTED_MODULE_3__["events"].$on('unClick', function () {
      return _this2.closeAndResetContextMenu();
    });
    _bus__WEBPACK_IMPORTED_MODULE_3__["events"].$on('folder:actions', function (folder) {
      // Store item
      _this2.item = folder;
      if (_this2.isVisible) _this2.isVisible = false;else _this2.showFolderActionsMenu();
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/CopyProgress.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FilesView/CopyProgress.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_FilesView_ProgressBar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/FilesView/ProgressBar */ "./resources/js/components/FilesView/ProgressBar.vue");
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



 // Vue.use(VueEllipseProgress, "vep"); you can define a name and use the plugin like <vep/>

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'CopyProgress',
  components: {
    RefreshCwIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_1__["RefreshCwIcon"],
    ProgressBar: _components_FilesView_ProgressBar__WEBPACK_IMPORTED_MODULE_0__["default"],
    XIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_1__["XIcon"]
  },
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_2__["mapGetters"])(['itemsInCopyQueueTotal', 'copyItemQueue'])), {}, {
    copiedItems: function copiedItems() {
      var cnt = this.itemsInCopyQueueTotal - this.copyItemQueue.length;
      return cnt;
    },
    copyProgress: function copyProgress() {
      var percentage = (this.itemsInCopyQueueTotal - this.copyItemQueue.length) / this.itemsInCopyQueueTotal; // console.log(percentage)
      // this.currentRate = percentage

      this.myProgress = Math.round(percentage) * 100;
      return Math.round(percentage) * 100;
    }
  }),
  data: function data() {
    return {
      myProgress: 0
    };
  },
  methods: {
    jumpPageHandle: function jumpPageHandle(val) {
      console.log('val:', val);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/DesktopSortingAndPreview.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FilesView/DesktopSortingAndPreview.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_FilesView_SortingAndPreviewMenu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/FilesView/SortingAndPreviewMenu */ "./resources/js/components/FilesView/SortingAndPreviewMenu.vue");
/* harmony import */ var _bus__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/bus */ "./resources/js/bus.js");
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'DesktopSortingAndPreview',
  components: {
    SortingAndPreviewMenu: _components_FilesView_SortingAndPreviewMenu__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      isVisible: false
    };
  },
  mounted: function mounted() {
    var _this = this;

    _bus__WEBPACK_IMPORTED_MODULE_1__["events"].$on('sortingAndPreview', function (state) {
      _this.isVisible = state;
    });
    _bus__WEBPACK_IMPORTED_MODULE_1__["events"].$on('unClick', function () {
      _this.isVisible = false;
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/DesktopToolbar.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FilesView/DesktopToolbar.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_FilesView_ToolbarButtonUpload__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/FilesView/ToolbarButtonUpload */ "./resources/js/components/FilesView/ToolbarButtonUpload.vue");
/* harmony import */ var vue_feather_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-feather-icons */ "./node_modules/vue-feather-icons/dist/vue-feather-icons.es.js");
/* harmony import */ var _components_FilesView_UploadProgress__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/FilesView/UploadProgress */ "./resources/js/components/FilesView/UploadProgress.vue");
/* harmony import */ var _components_FilesView_CopyProgress__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/FilesView/CopyProgress */ "./resources/js/components/FilesView/CopyProgress.vue");
/* harmony import */ var _components_FilesView_ToolbarButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/FilesView/ToolbarButton */ "./resources/js/components/FilesView/ToolbarButton.vue");
/* harmony import */ var _components_FilesView_SearchBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/FilesView/SearchBar */ "./resources/js/components/FilesView/SearchBar.vue");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _bus__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/bus */ "./resources/js/bus.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_8__);
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
//
//
//
//
//









/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'ToolBar',
  components: {
    ToolbarButtonUpload: _components_FilesView_ToolbarButtonUpload__WEBPACK_IMPORTED_MODULE_0__["default"],
    MoreHorizontalIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_1__["MoreHorizontalIcon"],
    ChevronLeftIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_1__["ChevronLeftIcon"],
    UploadProgress: _components_FilesView_UploadProgress__WEBPACK_IMPORTED_MODULE_2__["default"],
    CopyProgress: _components_FilesView_CopyProgress__WEBPACK_IMPORTED_MODULE_3__["default"],
    ToolbarButton: _components_FilesView_ToolbarButton__WEBPACK_IMPORTED_MODULE_4__["default"],
    SearchBar: _components_FilesView_SearchBar__WEBPACK_IMPORTED_MODULE_5__["default"]
  },
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_6__["mapGetters"])(['FilePreviewType', 'fileInfoVisible', 'fileInfoDetail', 'currentFolder', 'browseHistory', 'homeDirectory', 'data'])), {}, {
    hasCapacity: function hasCapacity() {
      // Check if set storage limitation
      if (!this.$store.getters.config.storageLimit) return true; // Check if is loaded user

      if (!this.$store.getters.user) return true; // Check if user has storage

      return this.$store.getters.user.relationships.storage.data.attributes.used <= 100;
    },
    directoryName: function directoryName() {
      return this.currentFolder ? this.currentFolder.name : this.homeDirectory.name;
    },
    preview: function preview() {
      return this.FilePreviewType === 'list' ? 'th' : 'th-list';
    },
    canCreateFolderInView: function canCreateFolderInView() {
      return !this.$isThisLocation(['base', 'public']);
    },
    canDeleteInView: function canDeleteInView() {
      var locations = ['trash', 'trash-root', 'base', 'participant_uploads', 'latest', 'shared', 'public'];
      return !this.$isThisLocation(locations) || this.fileInfoDetail.length === 0;
    },
    canUploadInView: function canUploadInView() {
      return !this.$isThisLocation(['base', 'public']);
    },
    canMoveInView: function canMoveInView() {
      var locations = ['base', 'participant_uploads', 'latest', 'shared', 'public'];
      return !this.$isThisLocation(locations) || this.fileInfoDetail.length === 0;
    },
    canShareInView: function canShareInView() {
      var locations = ['base', 'participant_uploads', 'latest', 'shared', 'public'];
      return !this.$isThisLocation(locations) || this.fileInfoDetail.length > 1 || this.fileInfoDetail.length === 0;
    }
  }),
  data: function data() {
    return {
      sortingAndPreview: false
    };
  },
  watch: {
    sortingAndPreview: function sortingAndPreview() {
      if (this.sortingAndPreview) {
        _bus__WEBPACK_IMPORTED_MODULE_7__["events"].$emit('sortingAndPreview', true);
      }

      if (!this.sortingAndPreview) {
        _bus__WEBPACK_IMPORTED_MODULE_7__["events"].$emit('unClick');
      }
    }
  },
  methods: {
    dropUpload: function dropUpload(event) {
      this.$uploadExternalFiles(event, 0);
    },
    goBack: function goBack() {
      // Get previous folder
      var previousFolder = Object(lodash__WEBPACK_IMPORTED_MODULE_8__["last"])(this.browseHistory);
      if (!previousFolder) return;

      if (previousFolder.location === 'trash-root') {
        this.$store.dispatch('getTrash');
      } else if (previousFolder.location === 'shared') {
        this.$store.dispatch('getShared');
      } else {
        if (this.$isThisLocation('public')) {
          this.$store.dispatch('browseShared', [{
            folder: previousFolder,
            back: true,
            init: false
          }]);
        } else {
          this.$store.dispatch('getFolder', [{
            folder: previousFolder,
            back: true,
            init: false
          }]);
        }
      }

      _bus__WEBPACK_IMPORTED_MODULE_7__["events"].$emit('leftMenu:show', previousFolder);
    },
    folderActions: function folderActions() {
      _bus__WEBPACK_IMPORTED_MODULE_7__["events"].$emit('folder:actions', this.currentFolder);
    },
    deleteItem: function deleteItem(evt) {
      if (this.fileInfoDetail.length > 0) {
        this.data['IS_SHOW_PREVIEW'] = false;

        if (evt.shiftKey) {
          _bus__WEBPACK_IMPORTED_MODULE_7__["events"].$emit('popup:open', {
            name: 'confirm-delete'
          });
        } else {
          this.$store.dispatch('deleteItem');
        }
      }
    },
    createFolder: function createFolder() {
      this.data['focusedParentFolderIndex'] = this.currentFolder.unique_id;
      this.$store.dispatch('createFolder', this.$t('popup_create_folder.folder_default_name'));
    },
    moveItem: function moveItem() {
      if (this.fileInfoDetail.length > 0) _bus__WEBPACK_IMPORTED_MODULE_7__["events"].$emit('popup:open', {
        name: 'move',
        item: this.fileInfoDetail
      });
    },
    shareItem: function shareItem() {
      if (this.fileInfoDetail[0]) {
        //ADD BY M
        if (this.fileInfoDetail[0].shared) {
          _bus__WEBPACK_IMPORTED_MODULE_7__["events"].$emit('popup:open', {
            name: 'share-edit',
            item: this.fileInfoDetail[0]
          });
        } else {
          _bus__WEBPACK_IMPORTED_MODULE_7__["events"].$emit('popup:open', {
            name: 'share-create',
            item: this.fileInfoDetail[0]
          });
        }
      }
    }
  },
  mounted: function mounted() {
    var _this = this;

    var desktoptoolbar = this.$refs.desktoptoolbar;
    desktoptoolbar.addEventListener("dragover", function (e) {
      e = e || event;
      e.preventDefault();
    }, false);
    desktoptoolbar.addEventListener("drop", function (e) {
      e = e || event;
      e.preventDefault();
    }, false);
    _bus__WEBPACK_IMPORTED_MODULE_7__["events"].$on('unClick', function () {
      _this.sortingAndPreview = false;
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/DragSelect.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FilesView/DragSelect.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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
var getDimensions = function getDimensions(p1, p2) {
  return {
    width: Math.abs(p1.x - p2.x),
    height: Math.abs(p1.y - p2.y)
  };
};

var collisionCheck = function collisionCheck(node1, node2) {
  return node1.left < node2.left + node2.width && node1.left + node1.width > node2.left && node1.top < node2.top + node2.height && node1.top + node1.height > node2.top;
};

/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    attribute: {
      type: String,
      required: true
    },
    color: {
      type: String,
      "default": "#4299E1"
    },
    opacity: {
      type: Number,
      "default": 0.7
    }
  },
  data: function data() {
    return {
      intersected: []
    };
  },
  watch: {
    intersected: function intersected(i) {
      this.$emit("change", i);
    }
  },
  mounted: function mounted() {
    var container = this.$refs.container;
    var self = this;
    var containerRect = container.getBoundingClientRect();

    var getCoords = function getCoords(e) {
      return {
        x: e.clientX - containerRect.left,
        y: e.clientY - containerRect.top
      };
    };

    var children;
    var box = document.createElement("div");
    box.setAttribute("data-drag-box-component", "");
    box.style.position = "absolute";
    box.style.zIndex = "99";
    box.style.backgroundColor = this.color;
    box.style.opacity = this.opacity;
    var start = {
      x: 0,
      y: 0
    };
    var end = {
      x: 0,
      y: 0
    };

    function intersection() {
      var rect = box.getBoundingClientRect();
      var intersected = [];

      for (var i = 0; i < children.length; i++) {
        try {
          if (collisionCheck(rect, children[i].getBoundingClientRect())) {
            // const attr = children[i].getAttribute(self.attribute);
            // if (children[i].hasAttribute(self.attribute)) {
            intersected.push(i); // }
          }
        } catch (err) {
          continue;
        }
      }

      if (JSON.stringify([].concat(intersected)) !== JSON.stringify(_toConsumableArray(self.intersected))) self.intersected = intersected;
    }

    function touchStart(e) {
      e.preventDefault();
      startDrag(e.touches[0]);
    }

    function touchMove(e) {
      e.preventDefault();
      drag(e.touches[0]);
    }

    function startDrag(e) {
      self.$emit("startDrag", e);
      start = getCoords(e);
      containerRect = container.getBoundingClientRect();
      children = container.firstChild.childNodes;
      box.style.top = start.y + "px";
      box.style.left = start.x + "px";

      for (var i = 0; i < children.length; i++) {
        var childrenRect = children[i].getBoundingClientRect();

        if (start.x + containerRect.left > childrenRect.x && start.x + containerRect.left < childrenRect.x + childrenRect.width && start.y + containerRect.top > childrenRect.y && start.y + containerRect.top < childrenRect.y + childrenRect.height) {
          // self.intersected.push(i)
          return;
        }
      }

      end = start;
      document.addEventListener("mousemove", drag);
      document.addEventListener("touchmove", touchMove);
      container.prepend(box);
      intersection();
    }

    function drag(e) {
      end = getCoords(e);
      var dimensions = getDimensions(start, end);

      if (end.x < start.x) {
        box.style.left = end.x + "px";
      }

      if (end.y < start.y) {
        box.style.top = end.y + "px";
      }

      box.style.width = dimensions.width + "px";
      box.style.height = dimensions.height + "px";
      intersection();
    }

    function endDrag(e) {
      // If occurs within ToolBar region, return
      var fileBrowserRect = document.getElementById('file-content-id').getBoundingClientRect();
      var curPos = {
        x: e.clientX,
        y: e.clientY
      };
      curPos.x = curPos.x - fileBrowserRect.left;
      curPos.y = curPos.y - fileBrowserRect.top;
      if ((start.x <= 0 || start.y <= 0) && (curPos.x <= 0 || curPos.y <= 0)) return;

      if (self.intersected.length == 0) {
        var isOutRegion = true; //hiCreo

        if (children) {
          for (var i = 0; i < children.length; i++) {
            var childrenRect = children[i].getBoundingClientRect();

            if (start.x + containerRect.left > childrenRect.x && start.x + containerRect.left < childrenRect.x + childrenRect.width && start.y + containerRect.top > childrenRect.y && start.y + containerRect.top < childrenRect.y + childrenRect.height) {
              // self.intersected.push(i)
              isOutRegion = false;
            }
          }
        }

        if (isOutRegion) self.$emit("clickoutside");
      }

      start = {
        x: 0,
        y: 0
      };
      end = {
        x: 0,
        y: 0
      };
      box.style.width = 0;
      box.style.height = 0;
      document.removeEventListener("mousemove", drag);
      document.removeEventListener("touchmove", touchMove);
      box.remove();
    }

    container.addEventListener("mousedown", startDrag);
    container.addEventListener("touchstart", touchStart);
    document.addEventListener("mouseup", endDrag);
    document.addEventListener("touchend", endDrag);
    this.$once("on:destroy", function () {
      container.removeEventListener("mousedown", startDrag);
      container.removeEventListener("touchstart", touchStart);
      document.removeEventListener("mouseup", endDrag);
      document.removeEventListener("touchend", endDrag);
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/EmptyMessage.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FilesView/EmptyMessage.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_feather_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-feather-icons */ "./node_modules/vue-feather-icons/dist/vue-feather-icons.es.js");
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
  name: 'EmptyMessage',
  props: ['icon', 'message'],
  components: {
    EyeOffIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_0__["EyeOffIcon"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/EmptyPage.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FilesView/EmptyPage.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_FilesView_ButtonUpload__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/FilesView/ButtonUpload */ "./resources/js/components/FilesView/ButtonUpload.vue");
/* harmony import */ var _components_FilesView_Spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/FilesView/Spinner */ "./resources/js/components/FilesView/Spinner.vue");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
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



/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'EmptyPage',
  props: ['title', 'description'],
  components: {
    ButtonUpload: _components_FilesView_ButtonUpload__WEBPACK_IMPORTED_MODULE_0__["default"],
    Spinner: _components_FilesView_Spinner__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_2__["mapGetters"])(['data', 'isLoading', 'currentFolder'])), {}, {
    isEmpty: function isEmpty() {
      return this.data && this.data.length == 0;
    }
  }),
  data: function data() {
    return {
      isEmptyPageVisible: true
    };
  },
  created: function created() {//hiCreo
    // const _formData = new FormData();
    // _formData.append('action', 'getRole');
    // axios
    // .post('hiCreoAPI.php', _formData)
    // .then(response => {
    //     const _role = response.data.role
    //     if(_role === 'saveToLibrary' || _role === 'saveToLibraryFromMarket'){
    //         this.isEmptyPageVisible = false
    //     }
    // })
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/FileBrowser.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FilesView/FileBrowser.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_FilesView_MobileToolbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/FilesView/MobileToolbar */ "./resources/js/components/FilesView/MobileToolbar.vue");
/* harmony import */ var _components_FilesView_MobileActions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/FilesView/MobileActions */ "./resources/js/components/FilesView/MobileActions.vue");
/* harmony import */ var _components_FilesView_MultiSelected__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/FilesView/MultiSelected */ "./resources/js/components/FilesView/MultiSelected.vue");
/* harmony import */ var _components_FilesView_FileItemList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/FilesView/FileItemList */ "./resources/js/components/FilesView/FileItemList.vue");
/* harmony import */ var _components_FilesView_FileItemGrid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/FilesView/FileItemGrid */ "./resources/js/components/FilesView/FileItemGrid.vue");
/* harmony import */ var _components_FilesView_EmptyMessage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/FilesView/EmptyMessage */ "./resources/js/components/FilesView/EmptyMessage.vue");
/* harmony import */ var _components_FilesView_EmptyPage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/FilesView/EmptyPage */ "./resources/js/components/FilesView/EmptyPage.vue");
/* harmony import */ var _components_FilesView_SearchBar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/FilesView/SearchBar */ "./resources/js/components/FilesView/SearchBar.vue");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _bus__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/bus */ "./resources/js/bus.js");
/* harmony import */ var _DragSelect_vue__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./DragSelect.vue */ "./resources/js/components/FilesView/DragSelect.vue");
/* harmony import */ var _components_FilesView_Spinner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/components/FilesView/Spinner */ "./resources/js/components/FilesView/Spinner.vue");
/* harmony import */ var vue_infinite_loading__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! vue-infinite-loading */ "./node_modules/vue-infinite-loading/dist/vue-infinite-loading.js");
/* harmony import */ var vue_infinite_loading__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(vue_infinite_loading__WEBPACK_IMPORTED_MODULE_12__);
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














var infiniteScroll = __webpack_require__(/*! vue-infinite-scroll */ "./node_modules/vue-infinite-scroll/vue-infinite-scroll.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'FilesContainer',
  components: {
    MobileToolbar: _components_FilesView_MobileToolbar__WEBPACK_IMPORTED_MODULE_0__["default"],
    MobileActions: _components_FilesView_MobileActions__WEBPACK_IMPORTED_MODULE_1__["default"],
    MultiSelected: _components_FilesView_MultiSelected__WEBPACK_IMPORTED_MODULE_2__["default"],
    FileItemList: _components_FilesView_FileItemList__WEBPACK_IMPORTED_MODULE_3__["default"],
    FileItemGrid: _components_FilesView_FileItemGrid__WEBPACK_IMPORTED_MODULE_4__["default"],
    EmptyMessage: _components_FilesView_EmptyMessage__WEBPACK_IMPORTED_MODULE_5__["default"],
    SearchBar: _components_FilesView_SearchBar__WEBPACK_IMPORTED_MODULE_7__["default"],
    EmptyPage: _components_FilesView_EmptyPage__WEBPACK_IMPORTED_MODULE_6__["default"],
    DragSelect: _DragSelect_vue__WEBPACK_IMPORTED_MODULE_10__["default"],
    Spinner: _components_FilesView_Spinner__WEBPACK_IMPORTED_MODULE_11__["default"],
    infiniteScroll: infiniteScroll,
    InfiniteLoading: vue_infinite_loading__WEBPACK_IMPORTED_MODULE_12___default.a
  },
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_8__["mapGetters"])(['filesInQueueTotal', 'copyItemQueue', 'fileInfoVisible', 'fileInfoDetail', 'fileInfoPreview', 'selectedItems', 'currentFolder', 'FilePreviewType', 'curclickedItem', 'isSearching', 'isLoading', 'focusOnName', 'focusText', 'clipBoard', 'copyOrCutInfo', 'data', 'busy', 'getFolderContentCnt', 'sorting', 'api'])), {}, {
    isGrid: function isGrid() {
      return this.FilePreviewType === 'grid';
    },
    isList: function isList() {
      return this.FilePreviewType === 'list';
    },
    isEmpty: function isEmpty() {
      return this.data.length == 0;
    },
    draggedItems: function draggedItems() {
      //Set opacity for dragged items
      if (!this.fileInfoDetail.includes(this.draggingId)) {
        return [this.draggingId];
      }

      if (this.fileInfoDetail.includes(this.draggingId)) {
        return this.fileInfoDetail;
      }
    }
  }),
  data: function data() {
    return {
      iitem: _components_FilesView_FileItemGrid__WEBPACK_IMPORTED_MODULE_4__["default"],
      draggingId: undefined,
      isDragging: false,
      mobileMultiSelect: false,
      item1: _components_FilesView_FileItemGrid__WEBPACK_IMPORTED_MODULE_4__["default"],
      items1: this.data,
      isDropExternal: false,
      timer: null,
      prevScrollPos: -1
    };
  },
  methods: {
    releaseClipborad: function releaseClipborad() {
      console.log('ESC');

      if (this.data['IS_SHOW_CONFIRM_DELETE'] === undefined) {
        this.data['IS_SHOW_CONFIRM_DELETE'] = false;
      }

      if (this.data['IS_SHOW_CONFIRM_DELETE']) return;
      this.$store.commit('SET_COPY_CUT_STATE', false);
      this.$store.commit('CLEAR_CLIPBOARD');
      this.$store.commit('CLEAR_FILEINFO_DETAIL');
      this.$store.commit('CLEAR_FILEINFO_PREV'); // Close the context menu if it is open 

      _bus__WEBPACK_IMPORTED_MODULE_9__["events"].$emit('unClick');
    },
    onShortKey: function onShortKey(event) {
      var _this = this;

      if (this.focusOnName) {
        var selection = null;

        if (window.getSelection) {
          selection = window.getSelection();
        } else if (document.selection) {
          selection = document.selection.createRange();
        }

        var start = Math.min(selection.anchorOffset, selection.focusOffset);
        var end = Math.max(selection.anchorOffset, selection.focusOffset);
        var selectedTxt = this.focusText.substr(start, end - start);

        switch (event.srcKey) {
          case 'copy':
            if (selection.type === 'Range') {
              navigator.clipboard.writeText(selectedTxt).then(function () {
                console.log('Async: Copying to clipboard was successful!');
              }, function (err) {
                console.error('Async: Could not copy text: ', err);
              });
            }

            break;

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

            break;

          case 'paste':
            navigator.clipboard.readText().then(function (text) {
              console.log('from clipboard, ', text);

              String.prototype.splice = function (idx, rem, str) {
                return this.slice(0, idx) + str + this.slice(idx + Math.abs(rem));
              };

              if (selection.type === 'Caret') {
                var result = _this.focusText.splice(selection.focusOffset, 0, text);

                _bus__WEBPACK_IMPORTED_MODULE_9__["events"].$emit('nametag:copy', result);
                console.log(result);
              } else if (selection.type === 'Range') {
                var result = _this.focusText.replace(selectedTxt, text);

                _bus__WEBPACK_IMPORTED_MODULE_9__["events"].$emit('nametag:copy', result);
                console.log(result);
              }
            })["catch"](function (err) {
              console.log('Something went wrong', err);
            });
            break;

          case 'selectAll':
            break;
        }

        return;
      }

      switch (event.srcKey) {
        case 'copy':
          if (this.currentFolder.location === 'trash-root' || this.currentFolder.location === 'trash') return;
          console.log('ctrl+c');
          if (this.fileInfoDetail.length < 1) break;
          this.$store.commit('SET_COPY_CUT_STATE', false);
          this.$store.commit('STORE_COPY_CUT_ITEM'); //David 20211119
          //this.$store.commit('CLEAR_FILEINFO_DETAIL')

          console.log('ctrl+c');
          break;

        case 'cut':
          if (this.currentFolder.location === 'trash-root' || this.currentFolder.location === 'trash') return;
          console.log('ctrl+x');
          if (this.fileInfoDetail.length < 1) break;
          this.$store.commit('SET_COPY_CUT_STATE', true);
          this.$store.commit('STORE_COPY_CUT_ITEM'); // this.$store.commit('CLEAR_FILEINFO_DETAIL')

          console.log('ctrl+x');
          break;

        case 'paste':
          if (this.currentFolder.location === 'trash-root' || this.currentFolder.location === 'trash') return;
          console.log('ctrl+v');
          if (!this.clipBoard || this.clipBoard.length < 1) break;
          var parent_id = this.currentFolder.unique_id;
          console.log(parent_id);

          if (this.copyOrCutInfo) {
            // cut-paste
            this.$store.dispatch('cutItem', {
              to_id: parent_id
            });
          } else {
            // copy-paste
            this.$store.dispatch('copyItem', {
              to_id: parent_id
            }); // this.$copyFunc(parent_id)
          }

          break;

        case 'rename':
          if (this.currentFolder.location === 'trash-root' || this.currentFolder.location === 'trash') return;
          console.log('F2');
          if (this.fileInfoDetail.length === 1) _bus__WEBPACK_IMPORTED_MODULE_9__["events"].$emit('popup:open', {
            name: 'rename-item',
            item: this.fileInfoDetail[0]
          });
          break;

        case 'selectAll':
          console.log('ctrl+a');

          for (var i = 0; i < this.data.length; i++) {
            this.$store.commit('GET_FILEINFO_DETAIL', this.data[i]);
          }

          break;
      }
    },
    onScroll: function onScroll(event) {
      var container = document.getElementsByClassName('files-container')[0];
      var scrollPos = container.clientHeight * container.scrollTop / (container.scrollHeight - container.clientHeight);
      if (this.prevScrollPos === -1) this.prevScrollPos = scrollPos - 1;

      if (scrollPos > this.prevScrollPos && container.scrollTop / (container.scrollHeight - container.clientHeight) > 0.97 && !this.busy) {
        console.log(scrollPos);
        this.$store.commit('SET_BUSY', true);
        var folderContentCnt = this.getFolderContentCnt;
        this.$store.dispatch('getNextFolder', [{
          folder: this.currentFolder,
          start: folderContentCnt
        }]);
      }

      this.prevScrollPos = scrollPos;
    },
    dragSelected: function dragSelected(item) {
      for (var i = 0; i < this.data.length; i++) {
        if (this.data[i] === item) {
          if (this.selectedItems.includes(i)) return true;
        }
      }

      return false;
    },
    onChange: function onChange(event) {
      window.getSelection().removeAllRanges();
      this.$store.commit('CLEAR_FILEINFO_PREV');
      this.$store.commit('CLEAR_FILEINFO_DETAIL');

      for (var i = 0; i < event.length; i++) {
        this.$store.commit('GET_FILEINFO_DETAIL', this.data[event[i]]);
      }
    },
    dragEnd: function dragEnd() {
      alert(this.selectedItems);
    },
    deleteItems: function deleteItems(event) {
      if (this.fileInfoDetail.length > 0 && this.$checkPermission('master') || this.$checkPermission('editor')) {
        if (event.shiftKey) {
          _bus__WEBPACK_IMPORTED_MODULE_9__["events"].$emit('popup:open', {
            name: 'confirm-delete'
          });
        } else {
          this.$store.dispatch('deleteItem');
        }
      }
    },
    dropUpload: function dropUpload(event) {
      if (this.isDropExternal) {
        this.isDropExternal = false;
        return;
      }

      if (event.dataTransfer.files.length === 0) return;
      if (this.currentFolder.name === 'Trash') return; // Upload external file

      this.$uploadExternalFiles(event, this.currentFolder.unique_id);
      this.isDragging = false;
    },
    dragEnter: function dragEnter() {
      this.isDragging = true;
    },
    dragLeave: function dragLeave() {
      this.isDragging = false;
    },
    dragStart: function dragStart(data) {
      var img = document.createElement('img');
      img.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";
      event.dataTransfer.setDragImage(img, 0, 0);

      if (!this.fileInfoDetail.includes(data)) {
        this.$store.commit('CLEAR_FILEINFO_DETAIL');
        this.$store.commit('GET_FILEINFO_DETAIL', data);
      }

      _bus__WEBPACK_IMPORTED_MODULE_9__["events"].$emit('dragstart', data, this.fileInfoDetail); // Store dragged folder

      this.draggingId = data;
    },
    dragFinish: function dragFinish(data, event) {
      var _this2 = this;

      if (data.type === 'folder') {
        if (event.dataTransfer.types[0] === 'Files') {
          this.isDropExternal = true;
          this.$uploadExternalFiles(event, data.unique_id);

          for (var i = 0; i < event.dataTransfer.files.length; i++) {
            this.$store.commit('INCREASE_FOLDER_ITEM', data.unique_id);
          }

          return;
        }
      }

      if (this.draggingId === undefined) this.draggingId = this.curclickedItem;

      if (event.dataTransfer.types[0] !== 'Files') {
        // Prevent to drop on file or image
        if (data.type !== 'folder' || this.draggingId === data) return; // Prevent to drop on itself

        if (data.unique_id === this.draggingId.unique_id) {
          this.isDragging = false;
          this.$store.commit('CLEAR_ITEM_MOVED');
          return;
        } //Prevent move selected folder to folder if in beteewn selected folders


        if (this.fileInfoDetail.find(function (item) {
          return item === data && _this2.fileInfoDetail.length > 1;
        })) return; // Move folder to new parent
        //Move item if is not included in selected items

        if (!this.fileInfoDetail.includes(this.draggingId)) {
          this.$store.dispatch('moveItem', {
            to_id: data.unique_id,
            noSelectedItem: this.draggingId
          });
        } //Move selected items to folder


        if (this.fileInfoDetail.length > 0 && this.fileInfoDetail.includes(this.draggingId)) {
          this.$store.dispatch('moveItem', {
            to_id: data.unique_id,
            noSelectedItem: null
          });
        }
      } else {
        // Get unique_id of current folder
        var unique_id = data.type !== 'folder' ? this.currentFolder.unique_id : data.unique_id; // Upload external file

        if (this.isList) this.$uploadExternalFiles(event, unique_id);
      }

      if (this.currentFolder.location !== 'public') this.$store.dispatch('getAppData');
      if (this.currentFolder.location === 'public') this.$store.dispatch('getFolderTree');
      this.isDragging = false;
      this.$store.commit('CLEAR_ITEM_MOVED');
    },
    contextMenu: function contextMenu(event, item) {
      this.data['focusedParentFolderIndex'] = this.currentFolder.unique_id;
      this.data['focusedNodes'] = undefined;

      if (!this.fileInfoDetail.includes(item)) {
        this.$store.commit('CLEAR_FILEINFO_DETAIL');
        this.$store.commit('GET_FILEINFO_DETAIL', item);
      }

      _bus__WEBPACK_IMPORTED_MODULE_9__["events"].$emit('contextMenu:show', event, item, false);
    },
    onLMouseClicked: function onLMouseClicked(evt) {
      window.getSelection().removeAllRanges(); // if (!evt.shiftKey && !evt.ctrlKey)
      //     if(!this.fileInfoDetail.includes(this.curclickedItem)) {
      //         this.$store.commit('CLEAR_FILEINFO_DETAIL')
      //         this.$store.commit('CLEAR_FILEINFO_PREV')
      //     }
    },
    filesContainerClick: function filesContainerClick() {
      // If showing the preview dialog now, return
      if (this.data['IS_SHOW_PREVIEW'] === undefined) this.data['IS_SHOW_PREVIEW'] = false;
      if (this.data['IS_SHOW_PREVIEW']) return; // If showing the context menu now, return

      if (this.data['IS_SHOW_CONTEXT'] === undefined) this.data['IS_SHOW_CONTEXT'] = false;
      if (this.data['IS_SHOW_CONTEXT']) return; // If showing the context menu now, return

      if (this.data['IS_SHOW_CONFIRM_DELETE'] === undefined) this.data['IS_SHOW_CONFIRM_DELETE'] = false;
      if (this.data['IS_SHOW_CONFIRM_DELETE']) return; // Deselect itms clicked by outside

      this.$store.commit('CLEAR_FILEINFO_DETAIL'); // this.$store.commit('CLEAR_FILEINFO_PREV')

      this.$store.commit('CLEAR_ITEM_MOVED');
    }
  },
  created: function created() {
    var _this3 = this;

    _bus__WEBPACK_IMPORTED_MODULE_9__["events"].$on('mobileSelecting:stop', function () {
      _this3.mobileMultiSelect = false;
    });
    _bus__WEBPACK_IMPORTED_MODULE_9__["events"].$on('drop', function () {
      _this3.isDragging = false;
      setTimeout(function () {
        _this3.draggingId = undefined;
      }, 10);
    });
    _bus__WEBPACK_IMPORTED_MODULE_9__["events"].$on('fileItem:deselect', function () {
      console.log('fileItem:deselect');

      _this3.$store.commit('CLEAR_FILEINFO_DETAIL');
    });
    _bus__WEBPACK_IMPORTED_MODULE_9__["events"].$on('scrollTop', function () {
      // Scroll top
      var container = document.getElementsByClassName('files-container')[0];
      if (container) container.scrollTop = 0;
    });
    _bus__WEBPACK_IMPORTED_MODULE_9__["events"].$on('focus:fileBrowser', function () {
      _this3.$refs.fileBrowser.focus();
    });
  },
  beforeDestroy: function beforeDestroy() {
    // do not forget clear the interval timer
    clearInterval(this.timer);
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/FileItemGrid.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FilesView/FileItemGrid.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_feather_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-feather-icons */ "./node_modules/vue-feather-icons/dist/vue-feather-icons.es.js");
/* harmony import */ var _components_FilesView_FolderIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/FilesView/FolderIcon */ "./resources/js/components/FilesView/FolderIcon.vue");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _bus__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/bus */ "./resources/js/bus.js");
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
  name: 'FileItemGrid',
  props: {
    source: {
      type: Object,
      "default": function _default() {
        return {};
      }
    }
  },
  components: {
    UserPlusIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_0__["UserPlusIcon"],
    CheckIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_0__["CheckIcon"],
    LinkIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_0__["LinkIcon"],
    FolderIcon: _components_FilesView_FolderIcon__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_3__["mapGetters"])(['FilePreviewType', 'sharedDetail', 'fileInfoDetail', 'copyOrCutInfo', 'clipBoard', 'fileInfoPreview', 'data', 'focusNameID', 'treefolders'])), {}, {
    itemid: function itemid() {
      return 'itemid' + this.source.unique_id;
    },
    folderEmojiOrColor: function folderEmojiOrColor() {
      var _this = this;

      // If folder have set some color
      if (this.source.icon_color) {
        this.$nextTick(function () {
          _this.$refs["folder".concat(_this.source.unique_id)].firstElementChild.style.fill = "".concat(_this.source.icon_color);
        });
        return false;
      } // If folder have set some emoji


      if (this.source.icon_emoji) return this.source.icon_emoji;
    },
    isClicked: function isClicked() {
      var _this2 = this;

      return this.fileInfoDetail.some(function (element) {
        return element.unique_id == _this2.source.unique_id;
      }) || this.fileInfoPreview.length === 1 && this.fileInfoPreview[0] === this.source;
    },
    isCutted: function isCutted() {
      var _this3 = this;

      return this.copyOrCutInfo && this.clipBoard.some(function (element) {
        return element.unique_id == _this3.source.unique_id;
      });
    },
    temp: function temp() {
      return this.isClickedItem;
    },
    isFolder: function isFolder() {
      return this.source.type === 'folder';
    },
    isFile: function isFile() {
      return this.source.type !== 'folder' && this.source.type !== 'image';
    },
    isPdf: function isPdf() {
      return this.source.mimetype === 'pdf';
    },
    isImage: function isImage() {
      return this.source.type === 'image';
    },
    isVideo: function isVideo() {
      return this.source.type === 'video';
    },
    isAudio: function isAudio() {
      var mimetypes = ['mpeg', 'mp3', 'mp4', 'wan', 'flac'];
      return mimetypes.includes(this.source.mimetype) && this.source.type === 'audio';
    },
    //hiCreo
    isHic: function isHic() {
      return this.source.mimetype === 'hic' && this.source.type === 'file';
    },
    canEditName: function canEditName() {
      return !this.$isMobile() && !this.$isThisLocation(['trash', 'trash-root']) && !this.$checkPermission('visitor') && !(this.sharedDetail && this.sharedDetail.type === 'file');
    },
    canShowMobileOptions: function canShowMobileOptions() {
      return !(this.sharedDetail && this.sharedDetail.type === 'file');
    },
    canDrag: function canDrag() {
      return !this.isDeleted && this.$checkPermission(['master', 'editor']);
    },
    timeStamp: function timeStamp() {
      return this.source.deleted_at ? this.$t('item_thumbnail.deleted_at', this.source.deleted_at) : this.source.created_at;
    },
    folderItems: function folderItems() {
      return this.source.deleted_at ? this.source.trashed_items : this.source.items;
    },
    isDeleted: function isDeleted() {
      return this.source.deleted_at ? true : false;
    },
    thumbnailwidth: function thumbnailwidth() {
      if (this.isImage) {
        var width = parseInt(this.source.width);
        var height = parseInt(this.source.height);

        if (Math.max(width, height) > 80) {
          if (Math.max(width, height) === width) {
            return width + 'px';
          } else if (Math.max(width, height) === height) {
            return width * 80 / height + 'px';
          }
        }

        return width + 'px';
      }

      return '80px';
    }
  }),
  data: function data() {
    return {
      area: false,
      itemName: undefined,
      multiSelectMode: false,
      originalName: undefined
    };
  },
  methods: {
    onMouseDown: function onMouseDown() {
      this.$store.commit('SET_ITEM_TO_MOVE', this.source);
      _bus__WEBPACK_IMPORTED_MODULE_4__["events"].$emit('unClick');
    },
    drop: function drop() {// events.$emit('drop')
    },
    showItemActions: function showItemActions() {
      // Load file info detail
      this.$store.commit('CLEAR_FILEINFO_DETAIL');
      this.$store.commit('GET_FILEINFO_DETAIL', this.source);
      _bus__WEBPACK_IMPORTED_MODULE_4__["events"].$emit('mobileMenu:show');
    },
    dragEnter: function dragEnter() {
      if (this.source.type !== 'folder') return;
      this.area = true;
    },
    dragLeave: function dragLeave() {
      this.area = false;
    },
    getParents: function getParents(item) {
      var parents = [];
      var parent = this.treefolders.filter(function (element) {
        return element.unique_id === item.parent_id;
      });
      if (parent.length > 0) parents.push(parent[0]);

      while (parent[0].parent_id !== 0) {
        parent = this.treefolders.filter(function (element) {
          return element.unique_id === parent[0].parent_id;
        });
        if (parent.length > 0) parents.push(parent[0]);
      }

      return parents;
    },
    clickedItem: function clickedItem(e) {
      var _this4 = this;

      // Disabled right click
      if (e.button === 2) return;

      if (!this.$isMobile()) {
        // After click deselect new folder rename input
        document.getSelection().removeAllRanges();

        if (this.source.type === 'folder') {
          // var parents = this.getParents(this.source)
          // parents.forEach(element => {
          _bus__WEBPACK_IMPORTED_MODULE_4__["events"].$emit('leftMenu:show', this.source); // });
        }

        if (e.ctrlKey && !e.shiftKey && !e.metaKey) {
          // Click + Ctrl
          if (this.fileInfoDetail.find(function (source) {
            return source.unique_id === _this4.source.unique_id;
          })) {
            this.$store.commit('REMOVE_ITEM_FILEINFO_DETAIL', this.source);
          } else {
            this.$store.commit('GET_FILEINFO_DETAIL', this.source);
          }
        } else if (e.shiftKey) {
          // Click + Shift
          if (this.fileInfoDetail.length < 1) return;
          var beginItemIndex = this.data.indexOf(this.fileInfoDetail[0]);
          var clickedItemIndex = this.data.indexOf(this.source);
          console.log('clickedItem Shift');
          this.$store.commit('CLEAR_FILEINFO_DETAIL'); //Shift selecting from top to bottom

          if (beginItemIndex < clickedItemIndex) {
            for (var i = beginItemIndex; i <= clickedItemIndex; i++) {
              this.$store.commit('GET_FILEINFO_DETAIL', this.data[i]);
            } //Shift selecting from bottom to top

          } else {
            for (var _i = beginItemIndex; _i >= clickedItemIndex; _i--) {
              this.$store.commit('GET_FILEINFO_DETAIL', this.data[_i]);
            }
          }
        } else {
          // if first clicked
          //console.log('clickedItem ', this.source)
          this.$store.commit('CLEAR_FILEINFO_DETAIL');
          this.$store.commit('GET_FILEINFO_DETAIL', this.source);

          if (this.fileInfoPreview.length === 0) {// this.$store.commit('SET_FILEINFO_PREV', this.source)
          } else if (this.fileInfoPreview.length === 1 && this.fileInfoPreview[0] != this.source) {
            // If another source has been selected after once-clicked, replace that source with the first-clicked source
            this.$store.commit('CLEAR_FILEINFO_PREV');
            this.$store.commit('SET_FILEINFO_PREV', this.source);
          } else if (this.fileInfoPreview.length === 1 && this.fileInfoPreview[0] === this.source) {
            // Show the preview dialog for the selected media source (image, video and audio)
            // this.$store.commit('SET_FILEINFO_PREV', this.source)
            // this.data['IS_SHOW_PREVIEW'] = true
            console.log("passed preview by click of source twice");
          } else {
            this.$store.commit('CLEAR_FILEINFO_PREV');
          }
        }
      }

      if (!this.mobileMultiSelect && this.$isMobile()) {
        if (this.isFolder) {
          if (this.$isThisLocation('public')) {
            this.$store.dispatch('browseShared', [{
              folder: this.source,
              back: false,
              init: false
            }]);
          } else {
            this.$store.dispatch('getFolder', [{
              folder: this.source,
              back: false,
              init: false
            }]);
          }
        } else {
          if (this.isImage || this.isVideo || this.isAudio || this.isPdf) {
            this.$store.commit('LOAD_FILEINFO_DETAIL', this.source);
            _bus__WEBPACK_IMPORTED_MODULE_4__["events"].$emit('fileFullPreview:show');
          }
        }
      }

      if (this.multiSelectMode && this.$isMobile()) {
        if (this.fileInfoDetail.some(function (source) {
          return source.unique_id === _this4.source.unique_id;
        })) {
          this.$store.commit('REMOVE_ITEM_FLEINFO_DETAIL', this.source);
        } else {
          I;
          this.$store.commit('GET_FILEINFO_DETAIL', this.source);
        }
      } // Get target classname


      var itemClass = e.target.className;
      if (['name', 'icon', 'file-link', 'file-icon-text'].includes(itemClass)) return;
    },
    showPreview: function showPreview() {
      if (this.isImage || this.isVideo || this.isAudio || this.isHic) {
        this.$store.commit('CLEAR_FILEINFO_DETAIL');
        this.$store.commit('GET_FILEINFO_DETAIL', this.source);
      }
    },
    goToItem: function goToItem() {
      //hiCreo
      if (this.isImage || this.isVideo || this.isAudio || this.isHic) {
        this.$store.commit('CLEAR_FILEINFO_PREV');
        this.$store.commit('SET_FILEINFO_PREV', this.source);
        this.$store.commit('SET_FILEINFO_PREV', this.source);
        this.data['IS_SHOW_PREVIEW'] = true;
        _bus__WEBPACK_IMPORTED_MODULE_4__["events"].$emit('popup:open', {
          name: 'fileinfo-preview'
        });
      } else if (this.isFile || !this.isFolder && !this.isVideo && !this.isAudio && !this.isImage) {
        if (this.isPdf) {// window.open('assets/sample.pdf', '_blank')
        } else this.$downloadFile(this.source.file_url, this.source.name + '.' + this.source.mimetype);
      } else if (this.isFolder) {
        //Clear selected data after open another folder
        this.$store.commit('CLEAR_FILEINFO_DETAIL');

        if (this.$isThisLocation('public')) {
          this.$store.dispatch('browseShared', [{
            folder: this.source,
            back: false,
            init: false
          }]);
        } else {
          this.$store.dispatch('getFolder', [{
            folder: this.source,
            back: false,
            init: false
          }]);
        }
      }
    },
    endRename: function endRename(e) {
      if (e.target.innerText.trim() === '') {
        this.itemName = this.originalName;
      } else {
        this.itemName = e.target.innerText.trim();
      }

      this.$store.dispatch('renameItem', {
        unique_id: this.source.unique_id,
        type: this.source.type,
        name: this.itemName
      });
      window.getSelection().removeAllRanges();
      this.$store.commit('SET_FOCUS_NAMETAG', false);
    },
    onFocus: function onFocus(e) {
      this.$store.commit('SET_FOCUS_NAME_ID', this.source.unique_id);
      this.$store.commit('SET_FOCUS_NAMETAG', true);
      this.$store.commit('SET_FOCUS_NAME_TEXT', e.target.innerText.trim());
    },
    lostNameFocus: function lostNameFocus(e) {
      if (e.target.innerText.trim() === '') {
        this.itemName = this.originalName;
      } else {
        this.itemName = e.target.innerText.trim();
      }

      this.$store.dispatch('renameItem', {
        unique_id: this.source.unique_id,
        type: this.source.type,
        name: this.itemName
      });
      this.$store.commit('SET_FOCUS_NAMETAG', false); // console.log('lost on name tag')          
    },
    renameItem: Object(lodash__WEBPACK_IMPORTED_MODULE_2__["debounce"])(function (e) {
      // Prevent submit empty string
      if (e.target.innerText.trim() === '') {
        this.itemName = "&nbsp;";
        return;
      } // this.$store.dispatch('renameItem', {
      //     unique_id: this.source.unique_id,
      //     type: this.source.type,
      //     name: e.target.innerText.trim()
      // })

    }, 300)
  },
  created: function created() {
    var _this5 = this;

    this.itemName = this.source.name;
    this.originalName = this.source.name;
    _bus__WEBPACK_IMPORTED_MODULE_4__["events"].$on('newFolder:focus', function (unique_id) {
      if (_this5.source.unique_id == unique_id && !_this5.$isMobile()) {
        _this5.$refs[unique_id].focus();

        document.execCommand('selectAll');
      }
    });
    _bus__WEBPACK_IMPORTED_MODULE_4__["events"].$on('mobileSelecting:start', function () {
      _this5.multiSelectMode = true;
      console.log('mobileSelecting:start');

      _this5.$store.commit('CLEAR_FILEINFO_DETAIL');
    });
    _bus__WEBPACK_IMPORTED_MODULE_4__["events"].$on('mobileSelecting:stop', function () {
      _this5.multiSelectMode = false;
      console.log('mobileSelecting:stop');

      _this5.$store.commit('CLEAR_FILEINFO_DETAIL');
    }); // Change source name

    _bus__WEBPACK_IMPORTED_MODULE_4__["events"].$on('change:name', function (source) {
      if (_this5.source.unique_id == source.unique_id) {
        _this5.itemName = source.name;
      }
    });
  },
  mounted: function mounted() {
    var _this6 = this;

    _bus__WEBPACK_IMPORTED_MODULE_4__["events"].$on('nametag:copy', function (text) {
      if (_this6.source.unique_id === _this6.focusNameID) {
        _this6.itemName = text;
      }
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/FileItemList.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FilesView/FileItemList.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_feather_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-feather-icons */ "./node_modules/vue-feather-icons/dist/vue-feather-icons.es.js");
/* harmony import */ var _components_FilesView_FolderIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/FilesView/FolderIcon */ "./resources/js/components/FilesView/FolderIcon.vue");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _bus__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/bus */ "./resources/js/bus.js");
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
  name: 'FileItemList',
  props: ['item'],
  components: {
    UserPlusIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_0__["UserPlusIcon"],
    LinkIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_0__["LinkIcon"],
    FolderIcon: _components_FilesView_FolderIcon__WEBPACK_IMPORTED_MODULE_1__["default"],
    CheckIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_0__["CheckIcon"]
  },
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_3__["mapGetters"])(['FilePreviewType', 'fileInfoDetail', 'fileInfoPreview', 'copyOrCutInfo', 'clipBoard', 'data', 'focusNameID'])), {}, {
    isClicked: function isClicked() {
      var _this = this;

      return this.fileInfoDetail.some(function (element) {
        return element.unique_id == _this.item.unique_id;
      }) || this.fileInfoPreview.length === 1 && this.fileInfoPreview[0] === this.item;
    },
    isCutted: function isCutted() {
      var _this2 = this;

      return this.copyOrCutInfo && this.clipBoard.some(function (element) {
        return element.unique_id == _this2.item.unique_id;
      });
    },
    isFolder: function isFolder() {
      return this.item.type === 'folder';
    },
    isFile: function isFile() {
      return this.item.type !== 'folder' && this.item.type !== 'image';
    },
    isImage: function isImage() {
      return this.item.type === 'image';
    },
    isPdf: function isPdf() {
      return this.item.mimetype === 'pdf';
    },
    isVideo: function isVideo() {
      return this.item.type === 'video';
    },
    isAudio: function isAudio() {
      var mimetypes = ['mpeg', 'mp3', 'mp4', 'wan', 'flac'];
      return mimetypes.includes(this.item.mimetype) && this.item.type === 'audio';
    },
    //hiCreo
    isHic: function isHic() {
      return this.item.mimetype === 'hic' && this.item.type === 'file';
    },
    canEditName: function canEditName() {
      return !this.$isMobile() && !this.$isThisLocation(['trash', 'trash-root']) && !this.$checkPermission('visitor') && !(this.sharedDetail && this.sharedDetail.type === 'file');
    },
    canDrag: function canDrag() {
      return !this.isDeleted && this.$checkPermission(['master', 'editor']);
    },
    timeStamp: function timeStamp() {
      return this.item.deleted_at ? this.$t('item_thumbnail.deleted_at', {
        time: this.item.deleted_at
      }) : this.item.created_at;
    },
    folderItems: function folderItems() {
      return this.item.deleted_at ? this.item.trashed_items : this.item.items;
    },
    isDeleted: function isDeleted() {
      return this.item.deleted_at ? true : false;
    },
    thumbnailwidth: function thumbnailwidth() {
      if (this.isImage) {
        var width = parseInt(this.item.width);
        var height = parseInt(this.item.height);

        if (Math.max(width, height) > 80) {
          if (Math.max(width, height) === width) {
            return width + 'px';
          } else if (Math.max(width, height) === height) {
            return width * 80 / height + 'px';
          }
        }

        return width + 'px';
      }

      return '80px';
    }
  }),
  filters: {
    limitCharacters: function limitCharacters(str) {
      if (str.length > 3) {
        return str.substring(0, 3) + '...';
      } else {
        return str.substring(0, 3);
      }
    }
  },
  data: function data() {
    return {
      area: false,
      itemName: undefined,
      mobileMultiSelect: false,
      originalName: undefined
    };
  },
  methods: {
    onMouseDown: function onMouseDown() {
      _bus__WEBPACK_IMPORTED_MODULE_4__["events"].$emit('unClick');
    },
    drop: function drop() {
      this.area = false;
      _bus__WEBPACK_IMPORTED_MODULE_4__["events"].$emit('drop');
    },
    showItemActions: function showItemActions() {
      // Load file info detail
      this.$store.commit('CLEAR_FILEINFO_DETAIL');
      this.$store.commit('GET_FILEINFO_DETAIL', this.item);
      _bus__WEBPACK_IMPORTED_MODULE_4__["events"].$emit('mobileMenu:show');
    },
    dragEnter: function dragEnter() {
      if (this.item.type !== 'folder') return;
      this.area = true;
    },
    dragLeave: function dragLeave() {
      this.area = false;
    },
    clickedItem: function clickedItem(e) {
      var _this3 = this;

      // Disabled right click
      if (e.button === 2) return;

      if (!this.$isMobile()) {
        // After click deselect new folder rename input
        document.getSelection().removeAllRanges();
        if (this.item.type === 'folder') _bus__WEBPACK_IMPORTED_MODULE_4__["events"].$emit('leftMenu:show', this.item);

        if (e.ctrlKey && !e.shiftKey && !e.metaKey) {
          // Click + Ctrl
          if (this.fileInfoDetail.find(function (item) {
            return item.unique_id === _this3.item.unique_id;
          })) {
            this.$store.commit('REMOVE_ITEM_FILEINFO_DETAIL', this.item);
          } else {
            this.$store.commit('GET_FILEINFO_DETAIL', this.item);
          }
        } else if (e.shiftKey) {
          // Click + Shift
          if (this.fileInfoDetail.length < 1) return;
          var beginItemIndex = this.data.indexOf(this.fileInfoDetail[0]);
          var clickedItemIndex = this.data.indexOf(this.item); // If Click + Shift + Ctrl dont remove already selected items
          // if (!e.ctrlKey && !e.metaKey) {
          //     this.$store.commit('CLEAR_FILEINFO_DETAIL')
          // }
          // remove all items already clicked

          this.$store.commit('CLEAR_FILEINFO_DETAIL'); //Shift selecting from top to bottom

          if (beginItemIndex < clickedItemIndex) {
            for (var i = beginItemIndex; i <= clickedItemIndex; i++) {
              this.$store.commit('GET_FILEINFO_DETAIL', this.data[i]);
            } //Shift selecting from bottom to top

          } else {
            for (var _i = beginItemIndex; _i >= clickedItemIndex; _i--) {
              this.$store.commit('GET_FILEINFO_DETAIL', this.data[_i]);
            }
          }
        } else {
          this.$store.commit('CLEAR_FILEINFO_DETAIL');
          this.$store.commit('GET_FILEINFO_DETAIL', this.item); // if first clicked

          if (this.fileInfoPreview.length === 0) {
            this.$store.commit('SET_FILEINFO_PREV', this.item);
          } else if (this.fileInfoPreview.length === 1 && this.fileInfoPreview[0] != this.item) {
            this.$store.commit('CLEAR_FILEINFO_PREV');
            this.$store.commit('SET_FILEINFO_PREV', this.item);
          } else if (this.fileInfoPreview.length === 1 && this.fileInfoPreview[0] === this.item) {
            // Show the preview dialog for the selected media item (image, video and audio)
            // this.$store.commit('SET_FILEINFO_PREV', this.item)
            // this.data['IS_SHOW_PREVIEW'] = true
            console.log("passed preview by click of item twice");
          } else {
            this.$store.commit('CLEAR_FILEINFO_PREV');
          }
        }
      }

      if (!this.mobileMultiSelect && this.$isMobile()) {
        if (this.isFolder) {
          if (this.$isThisLocation('public')) {
            this.$store.dispatch('browseShared', [{
              folder: this.item,
              back: false,
              init: false
            }]);
          } else {
            this.$store.dispatch('getFolder', [{
              folder: this.item,
              back: false,
              init: false
            }]);
          }
        } else {
          if (this.isImage || this.isVideo || this.isAudio || this.isPdf) {
            this.$store.commit('LOAD_FILEINFO_DETAIL', this.item);
            _bus__WEBPACK_IMPORTED_MODULE_4__["events"].$emit('fileFullPreview:show');
          }
        }
      }

      if (this.mobileMultiSelect && this.$isMobile()) {
        if (this.fileInfoDetail.some(function (item) {
          return item.unique_id === _this3.item.unique_id;
        })) {
          this.$store.commit('REMOVE_ITEM_FILEINFO_DETAIL', this.item);
        } else {
          this.$store.commit('GET_FILEINFO_DETAIL', this.item);
        }
      } // Get target classname


      var itemClass = e.target.className;
      if (['name', 'icon', 'file-link', 'file-icon-text'].includes(itemClass)) return;
    },
    goToItem: function goToItem() {
      //hiCreo
      if (this.isImage || this.isVideo || this.isAudio || this.isHic) {
        this.$store.commit('CLEAR_FILEINFO_PREV');
        this.$store.commit('SET_FILEINFO_PREV', this.item);
        this.$store.commit('SET_FILEINFO_PREV', this.item);
        this.data['IS_SHOW_PREVIEW'] = true;
        _bus__WEBPACK_IMPORTED_MODULE_4__["events"].$emit('popup:open', {
          name: 'fileinfo-preview'
        });
      } else if (this.isFile || !this.isFolder && !this.isVideo && !this.isAudio && !this.isImage) {
        this.$downloadFile(this.item.file_url, this.item.name + '.' + this.item.mimetype);
      } else if (this.isFolder) {
        //Clear selected items after open another folder
        this.$store.commit('CLEAR_FILEINFO_DETAIL');

        if (this.$isThisLocation('public')) {
          this.$store.dispatch('browseShared', [{
            folder: this.item,
            back: false,
            init: false
          }]);
        } else {
          this.$store.dispatch('getFolder', [{
            folder: this.item,
            back: false,
            init: false
          }]);
        }
      }
    },
    endRename: function endRename(e) {
      if (e.target.innerText.trim() === '') {
        this.itemName = this.originalName;
      } else {
        this.itemName = e.target.innerText.trim();
      }

      this.$store.dispatch('renameItem', {
        unique_id: this.source.unique_id,
        type: this.source.type,
        name: this.itemName
      });
      window.getSelection().removeAllRanges();
      this.$store.commit('SET_FOCUS_NAMETAG', false);
    },
    onFocus: function onFocus(e) {
      this.$store.commit('SET_FOCUS_NAME_ID', this.source.unique_id);
      this.$store.commit('SET_FOCUS_NAMETAG', true);
      this.$store.commit('SET_FOCUS_NAME_TEXT', e.target.innerText.trim());
    },
    lostNameFocus: function lostNameFocus(e) {
      if (e.target.innerText.trim() === '') {
        this.itemName = this.originalName;
      } else {
        this.itemName = e.target.innerText.trim();
      }

      this.$store.dispatch('renameItem', {
        unique_id: this.source.unique_id,
        type: this.source.type,
        name: this.itemName
      });
      this.$store.commit('SET_FOCUS_NAMETAG', false);
    },
    renameItem: Object(lodash__WEBPACK_IMPORTED_MODULE_2__["debounce"])(function (e) {
      // Prevent submit empty string
      if (e.target.innerText.trim() === '') {
        this.itemName = "&nbsp;";
        return;
      } // this.$store.dispatch('renameItem', {
      //     unique_id: this.source.unique_id,
      //     type: this.source.type,
      //     name: e.target.innerText.trim()
      // })

    }, 300)
  },
  created: function created() {
    var _this4 = this;

    this.itemName = this.item.name;
    this.originalName = this.item.name;
    _bus__WEBPACK_IMPORTED_MODULE_4__["events"].$on('newFolder:focus', function (unique_id) {
      if (_this4.item.unique_id == unique_id && !_this4.$isMobile()) {
        _this4.$refs[unique_id].focus();

        document.execCommand('selectAll');
      }
    });
    _bus__WEBPACK_IMPORTED_MODULE_4__["events"].$on('mobileSelecting:start', function () {
      _this4.mobileMultiSelect = true;

      _this4.$store.commit('CLEAR_FILEINFO_DETAIL');
    });
    _bus__WEBPACK_IMPORTED_MODULE_4__["events"].$on('mobileSelecting:stop', function () {
      _this4.mobileMultiSelect = false;

      _this4.$store.commit('CLEAR_FILEINFO_DETAIL');
    }); // Change item name

    _bus__WEBPACK_IMPORTED_MODULE_4__["events"].$on('change:name', function (item) {
      if (_this4.item.unique_id == item.unique_id) _this4.itemName = item.name;
    });
    _bus__WEBPACK_IMPORTED_MODULE_4__["events"].$on('nametag:copy', function (text) {
      if (_this4.source.unique_id === _this4.focusNameID) {
        _this4.itemName = text;
      }
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/MobileActionButton.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FilesView/MobileActionButton.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_feather_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-feather-icons */ "./node_modules/vue-feather-icons/dist/vue-feather-icons.es.js");
/* harmony import */ var _components_FilesView_Icons_SortingAndPreviewIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/FilesView/Icons/SortingAndPreviewIcon */ "./resources/js/components/FilesView/Icons/SortingAndPreviewIcon.vue");
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
  name: 'MobileActionButton',
  props: ['icon'],
  components: {
    SortingAndPreviewIcon: _components_FilesView_Icons_SortingAndPreviewIcon__WEBPACK_IMPORTED_MODULE_1__["default"],
    CheckSquareIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_0__["CheckSquareIcon"],
    CreditCardIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_0__["CreditCardIcon"],
    FolderPlusIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_0__["FolderPlusIcon"],
    UserPlusIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_0__["UserPlusIcon"],
    XSquareIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_0__["XSquareIcon"],
    CheckIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_0__["CheckIcon"],
    TrashIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_0__["TrashIcon"],
    PlusIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_0__["PlusIcon"],
    ListIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_0__["ListIcon"],
    GridIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_0__["GridIcon"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/MobileActionButtonUpload.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FilesView/MobileActionButtonUpload.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_feather_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-feather-icons */ "./node_modules/vue-feather-icons/dist/vue-feather-icons.es.js");
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
  name: 'MobileActionButtonUpload',
  components: {
    UploadCloudIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_0__["UploadCloudIcon"]
  },
  methods: {
    emmitFiles: function emmitFiles(e) {
      this.$uploadFiles(e.target.files);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/MobileActions.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FilesView/MobileActions.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_FilesView_MobileActionButtonUpload__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/FilesView/MobileActionButtonUpload */ "./resources/js/components/FilesView/MobileActionButtonUpload.vue");
/* harmony import */ var _components_FilesView_MobileMultiSelectButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/FilesView/MobileMultiSelectButton */ "./resources/js/components/FilesView/MobileMultiSelectButton.vue");
/* harmony import */ var _components_FilesView_MobileActionButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/FilesView/MobileActionButton */ "./resources/js/components/FilesView/MobileActionButton.vue");
/* harmony import */ var _components_FilesView_UploadProgress__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/FilesView/UploadProgress */ "./resources/js/components/FilesView/UploadProgress.vue");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _bus__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/bus */ "./resources/js/bus.js");
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
  name: 'MobileActions',
  components: {
    MobileActionButtonUpload: _components_FilesView_MobileActionButtonUpload__WEBPACK_IMPORTED_MODULE_0__["default"],
    MobileMultiSelectButton: _components_FilesView_MobileMultiSelectButton__WEBPACK_IMPORTED_MODULE_1__["default"],
    MobileActionButton: _components_FilesView_MobileActionButton__WEBPACK_IMPORTED_MODULE_2__["default"],
    UploadProgress: _components_FilesView_UploadProgress__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_4__["mapGetters"])(['FilePreviewType'])), {}, {
    previewIcon: function previewIcon() {
      return this.FilePreviewType === 'list' ? 'th' : 'th-list';
    },
    trashLocationMenu: function trashLocationMenu() {
      return this.$isThisLocation(['trash', 'trash-root']) && this.$checkPermission('master');
    },
    baseLocationMasterMenu: function baseLocationMasterMenu() {
      return this.$isThisLocation(['base', 'public']) && this.$checkPermission(['master', 'editor']);
    },
    baseLocationVisitorMenu: function baseLocationVisitorMenu() {
      return this.$isThisLocation(['base', 'shared', 'public']) && this.$checkPermission('visitor') || this.$isThisLocation(['latest', 'shared']) && this.$checkPermission('master');
    }
  }),
  data: function data() {
    return {
      multiSelectMode: false,
      mobileSortingAndPreview: false
    };
  },
  methods: {
    selectAll: function selectAll() {
      this.$store.commit('SELECT_ALL_FILES');
    },
    deselectAll: function deselectAll() {
      this.$store.commit('CLEAR_FILEINFO_DETAIL');
    },
    enableMultiSelectMode: function enableMultiSelectMode() {
      this.multiSelectMode = true;
      _bus__WEBPACK_IMPORTED_MODULE_5__["events"].$emit('mobileSelecting:start');
    },
    disableMultiSelectMode: function disableMultiSelectMode() {
      this.multiSelectMode = false;
      _bus__WEBPACK_IMPORTED_MODULE_5__["events"].$emit('mobileSelecting:stop');
    },
    showViewOptions: function showViewOptions() {
      this.mobileSortingAndPreview = !this.mobileSortingAndPreview; // Toggle mobile sorting

      _bus__WEBPACK_IMPORTED_MODULE_5__["events"].$emit('mobileSortingAndPreview', this.mobileSortingAndPreview);
      _bus__WEBPACK_IMPORTED_MODULE_5__["events"].$emit('mobileSortingAndPreviewVignette', this.mobileSortingAndPreview);
    },
    createFolder: function createFolder() {
      _bus__WEBPACK_IMPORTED_MODULE_5__["events"].$emit('popup:open', {
        name: 'create-folder'
      });
    }
  },
  mounted: function mounted() {
    var _this = this;

    _bus__WEBPACK_IMPORTED_MODULE_5__["events"].$on('mobileSelecting:stop', function () {
      return _this.multiSelectMode = false;
    });
    _bus__WEBPACK_IMPORTED_MODULE_5__["events"].$on('mobileSortingAndPreview', function (state) {
      return _this.mobileSortingAndPreview = state;
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/MobileMultiSelectButton.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FilesView/MobileMultiSelectButton.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_feather_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-feather-icons */ "./node_modules/vue-feather-icons/dist/vue-feather-icons.es.js");
/* harmony import */ var _bus__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/bus */ "./resources/js/bus.js");
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
  name: 'MobileActionButton',
  props: ['icon'],
  components: {
    CheckSquareIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_0__["CheckSquareIcon"]
  },
  data: function data() {
    return {
      mobileSelectingActive: false
    };
  },
  mounted: function mounted() {
    var _this = this;

    _bus__WEBPACK_IMPORTED_MODULE_1__["events"].$on('mobileSelecting:start', function () {
      _this.mobileSelectingActive = true;
    });
    _bus__WEBPACK_IMPORTED_MODULE_1__["events"].$on('mobileSelecting:stop', function () {
      _this.mobileSelectingActive = false;
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/MobileToolbar.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FilesView/MobileToolbar.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_FilesView_ToolbarButtonUpload__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/FilesView/ToolbarButtonUpload */ "./resources/js/components/FilesView/ToolbarButtonUpload.vue");
/* harmony import */ var _components_FilesView_ToolbarButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/FilesView/ToolbarButton */ "./resources/js/components/FilesView/ToolbarButton.vue");
/* harmony import */ var _components_FilesView_SearchBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/FilesView/SearchBar */ "./resources/js/components/FilesView/SearchBar.vue");
/* harmony import */ var vue_feather_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-feather-icons */ "./node_modules/vue-feather-icons/dist/vue-feather-icons.es.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _bus__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/bus */ "./resources/js/bus.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_6__);
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







/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'MobileToolBar',
  components: {
    ToolbarButtonUpload: _components_FilesView_ToolbarButtonUpload__WEBPACK_IMPORTED_MODULE_0__["default"],
    ChevronLeftIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_3__["ChevronLeftIcon"],
    ToolbarButton: _components_FilesView_ToolbarButton__WEBPACK_IMPORTED_MODULE_1__["default"],
    SearchBar: _components_FilesView_SearchBar__WEBPACK_IMPORTED_MODULE_2__["default"],
    MenuIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_3__["MenuIcon"]
  },
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_4__["mapGetters"])(['fileInfoVisible', 'FilePreviewType', 'fileInfoDetail', 'currentFolder', 'browseHistory', 'homeDirectory'])), {}, {
    directoryName: function directoryName() {
      return this.currentFolder ? this.currentFolder.name : this.homeDirectory.name;
    }
  }),
  methods: {
    showMobileNavigation: function showMobileNavigation() {
      _bus__WEBPACK_IMPORTED_MODULE_5__["events"].$emit('show:mobile-navigation');
      _bus__WEBPACK_IMPORTED_MODULE_5__["events"].$emit('mobileSelecting:stop');
    },
    goBack: function goBack() {
      var previousFolder = Object(lodash__WEBPACK_IMPORTED_MODULE_6__["last"])(this.browseHistory);

      if (previousFolder.location === 'trash-root') {
        this.$store.dispatch('getTrash');
      } else if (previousFolder.location === 'shared') {
        this.$store.dispatch('getShared');
      } else {
        if (this.$isThisLocation('public')) {
          this.$store.dispatch('browseShared', [{
            folder: previousFolder,
            back: true,
            init: false
          }]);
        } else {
          this.$store.dispatch('getFolder', [{
            folder: previousFolder,
            back: true,
            init: false
          }]);
        }
      }
    }
  },
  created: function created() {
    var _this = this;

    // Listen for hide sidebar
    _bus__WEBPACK_IMPORTED_MODULE_5__["events"].$on('show:content', function () {
      if (_this.isSidebarMenu) _this.isSidebarMenu = false;
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/Option.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FilesView/Option.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_feather_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-feather-icons */ "./node_modules/vue-feather-icons/dist/vue-feather-icons.es.js");
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
  name: 'Option',
  props: ['title', 'icon'],
  components: {
    CornerDownRightIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_0__["CornerDownRightIcon"],
    DownloadCloudIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_0__["DownloadCloudIcon"],
    FolderPlusIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_0__["FolderPlusIcon"],
    PaperclipIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_0__["PaperclipIcon"],
    LifeBuoyIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_0__["LifeBuoyIcon"],
    Trash2Icon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_0__["Trash2Icon"],
    SmileIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_0__["SmileIcon"],
    Edit2Icon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_0__["Edit2Icon"],
    TrashIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_0__["TrashIcon"],
    LinkIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_0__["LinkIcon"],
    StarIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_0__["StarIcon"],
    EyeIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_0__["EyeIcon"],
    CopyIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_0__["CopyIcon"],
    ClipboardIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_0__["ClipboardIcon"],
    XIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_0__["XIcon"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/OptionGroup.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FilesView/OptionGroup.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'OptionGroup'
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/ProgressBar.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FilesView/ProgressBar.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'ProgressBar',
  props: ['progress']
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/SearchBar.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FilesView/SearchBar.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_feather_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-feather-icons */ "./node_modules/vue-feather-icons/dist/vue-feather-icons.es.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
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




/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'SearchBar',
  components: {
    SearchIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_0__["SearchIcon"],
    XIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_0__["XIcon"]
  },
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])(['currentFolder'])), {}, {
    isQuery: function isQuery() {
      return this.query !== '' && typeof this.query !== 'undefined';
    }
  }),
  data: function data() {
    return {
      query: ''
    };
  },
  watch: {
    query: function query(val) {
      return this.getResult(val);
    }
  },
  methods: {
    onPaste: function onPaste() {},
    resetQuery: function resetQuery() {
      this.query = '';
    },
    getResult: Object(lodash__WEBPACK_IMPORTED_MODULE_2__["debounce"])(function (value) {
      if (this.isQuery) {
        // Get search result if query is not empty
        this.$store.dispatch('getSearchResult', value);
      } else if (typeof value !== 'undefined') {
        if (this.currentFolder) {
          // Get back after delete query to previosly folder
          if (this.$isThisLocation('public')) {
            this.$store.dispatch('browseShared', [{
              folder: this.currentFolder,
              back: true,
              init: false
            }]);
          } else {
            this.$store.dispatch('getFolder', [{
              folder: this.currentFolder,
              back: true,
              init: false
            }]);
          }
        }

        this.$store.commit('CHANGE_SEARCHING_STATE', false);
      }
    }, 300)
  },
  created: function created() {
    var _this = this;

    _bus__WEBPACK_IMPORTED_MODULE_3__["events"].$on('clear-query', function () {
      return _this.query = undefined;
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/ToolbarButtonUpload.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FilesView/ToolbarButtonUpload.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_feather_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-feather-icons */ "./node_modules/vue-feather-icons/dist/vue-feather-icons.es.js");
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
  name: 'ToolbarButtonUpload',
  props: ['action'],
  components: {
    UploadCloudIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_0__["UploadCloudIcon"]
  },
  methods: {
    emmitFiles: function emmitFiles(e) {
      // var thumbnailImgs = []
      // for(let index = 0; index < e.target.files.length; index++) {
      //     const file = e.target.files[index]
      //     var reader = new FileReader()
      //     reader.onload = function(evt) {
      //         var img = new Image()
      //         img.src = evt.target.result
      //         img.onload = function() {
      //             var c = document.createElement("canvas");
      //             c.width = 512
      //             c.height = 512
      //             var ctx = c.getContext("2d");
      //             ctx.scale(512 / img.width, 512 / img.height)
      //             ctx.drawImage(img, 0, 0)
      //             thumbnailImgs.push(c.toDataURL())
      //             if (thumbnailImgs.length === e.target.files.length) {
      this.$uploadFiles(e.target.files); //             }
      //         }
      //     }
      //     reader.readAsDataURL(file)
      // }
      // this.$uploadFiles(e.target.files)
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/UploadProgress.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FilesView/UploadProgress.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_FilesView_ProgressBar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/FilesView/ProgressBar */ "./resources/js/components/FilesView/ProgressBar.vue");
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




/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'UploadProgress',
  components: {
    RefreshCwIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_1__["RefreshCwIcon"],
    ProgressBar: _components_FilesView_ProgressBar__WEBPACK_IMPORTED_MODULE_0__["default"],
    XIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_1__["XIcon"]
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_2__["mapGetters"])(['filesInQueueUploaded', 'filesInQueueTotal', 'uploadingProgress', 'isProcessingFile', 'fileQueue'])),
  methods: {
    cancelUpload: function cancelUpload() {
      _bus__WEBPACK_IMPORTED_MODULE_3__["events"].$emit('cancel-upload');
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/ButtonUpload.vue?vue&type=style&index=0&id=1ec4da91&scoped=true&lang=scss&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FilesView/ButtonUpload.vue?vue&type=style&index=0&id=1ec4da91&scoped=true&lang=scss& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".button-base[data-v-1ec4da91] {\n  font-size: 0.9375em;\n  font-weight: 700;\n  cursor: pointer;\n  transition: 0.15s all ease;\n  border-radius: 8px;\n  border: 0;\n  padding: 10px 28px;\n  display: inline-block;\n}\n.button-base[data-v-1ec4da91]:active {\n  transform: scale(0.95);\n}\n.button-base.theme[data-v-1ec4da91] {\n  color: #0066ff;\n  background: rgba(0, 102, 255, 0.1);\n}\n.button-base.secondary[data-v-1ec4da91] {\n  color: #1B2539;\n  background: #f4f5f6;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/ContextMenu.vue?vue&type=style&index=0&id=0c6958e0&scoped=true&lang=scss&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FilesView/ContextMenu.vue?vue&type=style&index=0&id=0c6958e0&scoped=true&lang=scss& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".no-options[data-v-0c6958e0] .text-label {\n  color: rgba(27, 37, 57, 0.7) !important;\n}\n[data-v-0c6958e0] .no-options:hover {\n  background: transparent;\n}\n.no-options[data-v-0c6958e0] path,\n.no-options[data-v-0c6958e0] line,\n.no-options[data-v-0c6958e0] circle {\n  stroke: rgba(27, 37, 57, 0.7) !important;\n}\n.filePreviewFixed[data-v-0c6958e0] {\n  position: fixed !important;\n  display: flex;\n}\n.contextmenu[data-v-0c6958e0] {\n  min-width: 250px;\n  position: absolute;\n  z-index: 99;\n  box-shadow: 0 7px 25px 1px rgba(0, 0, 0, 0.12);\n  background: white;\n  border-radius: 4px;\n  overflow: hidden;\n}\n.contextmenu.showed[data-v-0c6958e0] {\n  display: block;\n}\n.menu-options[data-v-0c6958e0] {\n  list-style: none;\n  width: 100%;\n  margin: 0;\n  padding: 0;\n}\n@media (prefers-color-scheme: dark) {\n.contextmenu[data-v-0c6958e0] {\n    background: #1e2024;\n}\n.no-options[data-v-0c6958e0] .text-label {\n    color: #7d858c !important;\n}\n[data-v-0c6958e0] .no-options:hover {\n    background: transparent;\n}\n.no-options[data-v-0c6958e0] path,\n  .no-options[data-v-0c6958e0] line,\n  .no-options[data-v-0c6958e0] circle {\n    stroke: #7d858c !important;\n}\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/CopyProgress.vue?vue&type=style&index=0&id=fb8a3000&scoped=true&lang=scss&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FilesView/CopyProgress.vue?vue&type=style&index=0&id=fb8a3000&scoped=true&lang=scss& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".sync-alt[data-v-fb8a3000] {\n  -webkit-animation: spin-data-v-fb8a3000 1s linear infinite;\n          animation: spin-data-v-fb8a3000 1s linear infinite;\n  margin-right: 5px;\n}\n.sync-alt polyline[data-v-fb8a3000], .sync-alt path[data-v-fb8a3000] {\n  stroke: #0066ff;\n}\n@-webkit-keyframes spin-data-v-fb8a3000 {\n0% {\n    transform: rotate(0);\n}\n100% {\n    transform: rotate(360deg);\n}\n}\n@keyframes spin-data-v-fb8a3000 {\n0% {\n    transform: rotate(0);\n}\n100% {\n    transform: rotate(360deg);\n}\n}\n.info-panel-enter-active[data-v-fb8a3000],\n.info-panel-leave-active[data-v-fb8a3000] {\n  transition: all 0.3s ease;\n}\n.info-panel-enter[data-v-fb8a3000],\n.info-panel-leave-to[data-v-fb8a3000] {\n  opacity: 0;\n  transform: translateY(-100%);\n}\n.copy-progress[data-v-fb8a3000] {\n  width: 100%;\n  padding-bottom: 10px;\n  position: relative;\n  z-index: 1;\n}\n.copy-progress .progress-wrapper[data-v-fb8a3000] {\n  display: flex;\n}\n.copy-progress .progress-wrapper .cancel-icon[data-v-fb8a3000] {\n  cursor: pointer;\n  padding: 0 13px;\n}\n.copy-progress .progress-wrapper .cancel-icon:hover line[data-v-fb8a3000] {\n  stroke: #0066ff;\n}\n.copy-progress .progress-title[data-v-fb8a3000] {\n  font-weight: 700;\n  text-align: center;\n}\n.copy-progress .progress-title span[data-v-fb8a3000] {\n  font-size: 0.875em;\n}\n@media only screen and (max-width: 690px) {\n.copy-progress .progress-wrapper .cancel-icon[data-v-fb8a3000] {\n    padding: 0 9px;\n}\n}\n@media (prefers-color-scheme: dark) {\n.progress-bar[data-v-fb8a3000] {\n    background: #1e2024;\n}\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/DesktopSortingAndPreview.vue?vue&type=style&index=0&id=6684c497&scoped=true&lang=scss&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FilesView/DesktopSortingAndPreview.vue?vue&type=style&index=0&id=6684c497&scoped=true&lang=scss& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".sorting-preview[data-v-6684c497] {\n  min-width: 250px;\n  position: absolute;\n  z-index: 99;\n  box-shadow: 0 7px 25px 1px rgba(0, 0, 0, 0.12);\n  background: white;\n  border-radius: 8px;\n  overflow: hidden;\n  right: 66px;\n  top: 63px;\n}\n.sorting-preview.showed[data-v-6684c497] {\n  display: block;\n}\n.sorting-preview[data-v-6684c497] .menu-option:hover {\n  background: #f4f5f6;\n}\n.sorting-preview[data-v-6684c497] .menu-option:hover .text-label {\n  color: #0066ff;\n}\n.sorting-preview[data-v-6684c497] .menu-option:hover path,\n.sorting-preview[data-v-6684c497] .menu-option:hover /deep/ line,\n.sorting-preview[data-v-6684c497] .menu-option:hover /deep/ polyline,\n.sorting-preview[data-v-6684c497] .menu-option:hover rect,\n.sorting-preview[data-v-6684c497] .menu-option:hover circle,\n.sorting-preview[data-v-6684c497] .menu-option:hover polygon {\n  stroke: #0066ff !important;\n}\n@media (prefers-color-scheme: dark) {\n.sorting-preview[data-v-6684c497] {\n    background: #1e2024;\n}\n.sorting-preview[data-v-6684c497] .menu-option:hover {\n    background: rgba(0, 102, 255, 0.1);\n}\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/DesktopToolbar.vue?vue&type=style&index=0&id=14323afd&scoped=true&lang=scss&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FilesView/DesktopToolbar.vue?vue&type=style&index=0&id=14323afd&scoped=true&lang=scss& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".preview-sorting[data-v-14323afd] .label {\n  color: #1B2539 !important;\n}\n.preview-sorting[data-v-14323afd] .preview-sorting path, .preview-sorting[data-v-14323afd] .preview-sorting line, .preview-sorting[data-v-14323afd] .preview-sorting polyline, .preview-sorting[data-v-14323afd] .preview-sorting rect, .preview-sorting[data-v-14323afd] .preview-sorting circle {\n  stroke: #1B2539 !important;\n}\n.preview-sorting[data-v-14323afd]:hover .preview-sorting path, .preview-sorting[data-v-14323afd]:hover .preview-sorting line, .preview-sorting[data-v-14323afd]:hover .preview-sorting polyline, .preview-sorting[data-v-14323afd]:hover .preview-sorting rect, .preview-sorting[data-v-14323afd]:hover .preview-sorting circle {\n  stroke: #0066ff !important;\n}\n.toolbar-wrapper[data-v-14323afd] {\n  padding-top: 10px;\n  padding-bottom: 10px;\n  display: flex;\n  position: relative;\n  z-index: 2;\n}\n.toolbar-wrapper > div[data-v-14323afd] {\n  flex-grow: 1;\n  align-self: center;\n  white-space: nowrap;\n}\n.directory-name[data-v-14323afd] {\n  vertical-align: middle;\n  font-size: 1.0625em;\n  color: #1B2539;\n  font-weight: 700;\n  max-width: 220px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: inline-block;\n}\n.icon-back[data-v-14323afd] {\n  vertical-align: middle;\n  cursor: pointer;\n  margin-right: 6px;\n  opacity: 0.15;\n  pointer-events: none;\n  transition: 150ms all ease;\n}\n.icon-back.is-active[data-v-14323afd] {\n  opacity: 1;\n  pointer-events: initial;\n}\n.toolbar-go-back[data-v-14323afd] {\n  cursor: pointer;\n}\n.toolbar-go-back .folder-options[data-v-14323afd] {\n  vertical-align: middle;\n  margin-left: 6px;\n  padding: 1px 4px;\n  line-height: 0;\n  border-radius: 3px;\n  transition: 150ms all ease;\n}\n.toolbar-go-back .folder-options svg circle[data-v-14323afd] {\n  transition: 150ms all ease;\n}\n.toolbar-go-back .folder-options[data-v-14323afd]:hover {\n  background: #f4f5f6;\n}\n.toolbar-go-back .folder-options:hover svg circle[data-v-14323afd] {\n  stroke: #0066ff;\n}\n.toolbar-go-back .folder-options .icon-more[data-v-14323afd] {\n  vertical-align: middle;\n}\n.toolbar-go-back .back-directory-title[data-v-14323afd] {\n  font-size: 0.9375em;\n  line-height: 1;\n  font-weight: 700;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: inline-block;\n  vertical-align: middle;\n  color: #1B2539;\n}\n.toolbar-position[data-v-14323afd] {\n  text-align: center;\n}\n.toolbar-position span[data-v-14323afd] {\n  font-size: 1.0625em;\n  font-weight: 600;\n}\n.toolbar-tools[data-v-14323afd] {\n  text-align: right;\n}\n.toolbar-tools .toolbar-button-wrapper[data-v-14323afd] {\n  margin-left: 28px;\n  display: inline-block;\n  vertical-align: middle;\n}\n.toolbar-tools .toolbar-button-wrapper[data-v-14323afd]:first-child {\n  margin-left: 0 !important;\n}\n.toolbar-tools .button[data-v-14323afd] {\n  margin-left: 5px;\n}\n.toolbar-tools .button.active[data-v-14323afd] svg line,\n.toolbar-tools .button.active[data-v-14323afd] svg circle,\n.toolbar-tools .button.active[data-v-14323afd] svg rect {\n  stroke: #0066ff;\n}\n.toolbar-tools .button.active.preview-sorting[data-v-14323afd] {\n  background: #f4f5f6;\n}\n.toolbar-tools .button.active.preview-sorting[data-v-14323afd] .preview-sorting path, .toolbar-tools .button.active.preview-sorting[data-v-14323afd] .preview-sorting line, .toolbar-tools .button.active.preview-sorting[data-v-14323afd] .preview-sorting polyline, .toolbar-tools .button.active.preview-sorting[data-v-14323afd] .preview-sorting rect, .toolbar-tools .button.active.preview-sorting[data-v-14323afd] .preview-sorting circle {\n  stroke: #0066ff !important;\n}\n.toolbar-tools .button.is-inactive[data-v-14323afd] {\n  opacity: 0.25;\n  pointer-events: none;\n}\n.toolbar-tools .button[data-v-14323afd]:first-child {\n  margin-left: 0;\n}\n@media only screen and (max-width: 1024px) {\n.toolbar-go-back .back-directory-title[data-v-14323afd] {\n    max-width: 120px;\n}\n.toolbar-tools .button[data-v-14323afd] {\n    margin-left: 0;\n    height: 40px;\n    width: 40px;\n}\n.toolbar-tools .toolbar-button-wrapper[data-v-14323afd] {\n    margin-left: 25px;\n}\n}\n@media (prefers-color-scheme: dark) {\n.toolbar .directory-name[data-v-14323afd] {\n    color: #bec6cf;\n}\n.toolbar-go-back .back-directory-title[data-v-14323afd] {\n    color: #bec6cf;\n}\n.toolbar-go-back .folder-options[data-v-14323afd]:hover {\n    background: #1e2024;\n}\n.active.preview-sorting[data-v-14323afd] {\n    background: #1e2024 !important;\n}\n.preview-sorting[data-v-14323afd] .label {\n    color: #1B2539 !important;\n}\n.preview-sorting[data-v-14323afd] .preview-sorting path, .preview-sorting[data-v-14323afd] .preview-sorting line, .preview-sorting[data-v-14323afd] .preview-sorting polyline, .preview-sorting[data-v-14323afd] .preview-sorting rect, .preview-sorting[data-v-14323afd] .preview-sorting circle {\n    stroke: #bec6cf !important;\n}\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/EmptyMessage.vue?vue&type=style&index=0&id=f2442590&scoped=true&lang=scss&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FilesView/EmptyMessage.vue?vue&type=style&index=0&id=f2442590&scoped=true&lang=scss& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".empty-message[data-v-f2442590] {\n  text-align: center;\n  display: flex;\n  align-items: center;\n  height: 100%;\n}\n.empty-message .message[data-v-f2442590] {\n  margin: 0 auto;\n}\n.empty-message .message p[data-v-f2442590] {\n  margin-top: 10px;\n  max-width: 130px;\n  font-size: 0.8125em;\n  font-weight: 500;\n  color: rgba(27, 37, 57, 0.7);\n}\n.empty-message .message .icon path[data-v-f2442590], .empty-message .message .icon line[data-v-f2442590], .empty-message .message .icon polyline[data-v-f2442590], .empty-message .message .icon rect[data-v-f2442590], .empty-message .message .icon circle[data-v-f2442590] {\n  stroke: #1B2539;\n}\n@media (prefers-color-scheme: dark) {\n.empty-message .message .icon path[data-v-f2442590], .empty-message .message .icon line[data-v-f2442590], .empty-message .message .icon polyline[data-v-f2442590], .empty-message .message .icon rect[data-v-f2442590], .empty-message .message .icon circle[data-v-f2442590] {\n    stroke: #7d858c;\n}\n.empty-message .message p[data-v-f2442590] {\n    color: #7d858c;\n}\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/EmptyPage.vue?vue&type=style&index=0&id=3497fe2e&scoped=true&lang=scss&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FilesView/EmptyPage.vue?vue&type=style&index=0&id=3497fe2e&scoped=true&lang=scss& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".empty-page[data-v-3497fe2e] {\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  top: 0;\n  margin-top: 0px;\n  display: flex;\n  align-items: center;\n}\n.empty-page .empty-state[data-v-3497fe2e] {\n  margin: 0 auto;\n  padding-left: 15px;\n  padding-right: 15px;\n}\n.text-content[data-v-3497fe2e] {\n  text-align: center;\n  margin: 30px 0;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.text-content .title[data-v-3497fe2e] {\n  font-size: 1.25em;\n  color: #1B2539;\n  font-weight: 700;\n  margin: 0;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.text-content .description[data-v-3497fe2e] {\n  font-size: 0.8125em;\n  color: rgba(27, 37, 57, 0.7);\n  margin-bottom: 20px;\n  display: block;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n@media (prefers-color-scheme: dark) {\n.text-content .title[data-v-3497fe2e] {\n    color: #bec6cf;\n}\n.text-content .description[data-v-3497fe2e] {\n    color: #7d858c;\n}\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/FileBrowser.vue?vue&type=style&index=0&id=6409943e&scoped=true&lang=scss&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FilesView/FileBrowser.vue?vue&type=style&index=0&id=6409943e&scoped=true&lang=scss& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".file-list .dragged[data-v-6409943e] .is-dragenter {\n  border: 2px solid transparent;\n}\n.dragged[data-v-6409943e] {\n  opacity: 0.5;\n}\n.drag-selected[data-v-6409943e] {\n  border-radius: 8px;\n  background: #f4f5f6;\n}\n#multi-selected[data-v-6409943e] {\n  position: fixed;\n  pointer-events: none;\n  z-index: 100;\n}\n.mobile-multi-select[data-v-6409943e] {\n  bottom: 50px !important;\n  top: 0px;\n}\n.button-upload[data-v-6409943e] {\n  display: block;\n  text-align: center;\n  margin: 20px 0;\n}\n.mobile-search[data-v-6409943e] {\n  display: none;\n  margin-bottom: 10px;\n  margin-top: 10px;\n}\n.file-content[data-v-6409943e] {\n  display: flex;\n}\n.file-content.is-dragging[data-v-6409943e] {\n  transform: scale(0.99);\n}\n.files-container[data-v-6409943e] {\n  overflow-x: hidden;\n  overflow-y: auto;\n  flex: 0 0 100%;\n  transition: 150ms all ease;\n  position: relative;\n  scroll-behavior: smooth;\n}\n.files-container.is-fileinfo-visible[data-v-6409943e] {\n  flex: 0 1 100%;\n}\n.files-container .file-list.list[data-v-6409943e] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, 360px);\n  justify-content: space-evenly;\n}\n.files-container .file-list.grid[data-v-6409943e] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, 136px);\n  justify-content: space-evenly;\n}\n.file-info-container[data-v-6409943e] {\n  position: absolute;\n  padding-left: 20px;\n  overflow: auto;\n}\n.file-move[data-v-6409943e] {\n  transition: transform 0.6s;\n}\n.file-enter-active[data-v-6409943e] {\n  transition: all 300ms ease;\n}\n.file-leave-active[data-v-6409943e] {\n  transition: all 0ms;\n}\n.file-enter[data-v-6409943e], .file-leave-to[data-v-6409943e] {\n  opacity: 0;\n  transform: translateX(-20px);\n}\n@media only screen and (min-width: 960px) {\n.file-content[data-v-6409943e] {\n    position: absolute;\n    top: 72px;\n    left: 0px;\n    right: 0px;\n    bottom: 0;\n    transition: 0.3s all ease;\n    overflow-y: auto;\n    overflow-x: hidden;\n}\n.file-content.is-offset[data-v-6409943e] {\n    margin-top: 50px;\n}\n}\n@media only screen and (max-width: 960px) {\n.file-info-container[data-v-6409943e] {\n    display: none;\n}\n.mobile-search[data-v-6409943e] {\n    display: block;\n}\n.file-content[data-v-6409943e] {\n    position: absolute;\n    top: 72px;\n    left: 0px;\n    right: 0px;\n    bottom: 0;\n    transition: 0.3s all ease;\n    overflow-y: auto;\n    overflow-x: hidden;\n}\n.file-content.is-offset[data-v-6409943e] {\n    margin-top: 50px;\n}\n}\n@media only screen and (max-width: 690px) {\n.files-container[data-v-6409943e] {\n    padding-left: 15px;\n    padding-right: 15px;\n    top: 72px;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    position: fixed;\n    overflow-y: auto;\n}\n.files-container .file-list.grid[data-v-6409943e] {\n    grid-template-columns: repeat(auto-fill, 120px);\n}\n.file-content[data-v-6409943e] {\n    position: absolute;\n    top: 72px;\n    left: 0px;\n    right: 0px;\n    bottom: 0;\n    transition: 0.3s all ease;\n}\n.file-content.is-offset[data-v-6409943e] {\n    margin-top: 50px;\n}\n.mobile-search[data-v-6409943e] {\n    margin-bottom: 0;\n}\n.file-info-container[data-v-6409943e] {\n    display: none;\n}\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/FileItemGrid.vue?vue&type=style&index=0&id=2085e75a&scoped=true&lang=scss&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FilesView/FileItemGrid.vue?vue&type=style&index=0&id=2085e75a&scoped=true&lang=scss& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".check-select[data-v-2085e75a] {\n  margin-right: 10px;\n  margin-left: 3px;\n  position: absolute;\n  top: -10px;\n  z-index: 5;\n  left: 0px;\n}\n.check-select-folder[data-v-2085e75a] {\n  margin-right: 10px;\n  margin-left: 3px;\n  position: absolute;\n  top: 8px;\n  z-index: 5;\n  left: 10px;\n}\n.select-box[data-v-2085e75a] {\n  width: 20px;\n  height: 20px;\n  background-color: #f4f5f6;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 0px;\n  box-shadow: 0 3px 15px 2px rgba(26, 36, 55, 0.05);\n}\n.select-box-active[data-v-2085e75a] {\n  background-color: #0066ff;\n}\n.select-box-active .icon[data-v-2085e75a] {\n  stroke: white;\n}\n.show-actions[data-v-2085e75a] {\n  cursor: pointer;\n  padding: 4px 26px;\n}\n.show-actions .icon-action[data-v-2085e75a] {\n  font-size: 0.75em;\n}\n.show-actions path[data-v-2085e75a] {\n  fill: #0066ff;\n}\n.file-wrapper[data-v-2085e75a] {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  position: relative;\n  text-align: center;\n  display: inline-block;\n  vertical-align: text-top;\n  width: 100%;\n}\n.file-wrapper .source-name[data-v-2085e75a] {\n  display: block;\n  padding-left: 10px;\n  padding-right: 10px;\n  line-height: 20px;\n}\n.file-wrapper .source-name .source-size[data-v-2085e75a],\n.file-wrapper .source-name .source-length[data-v-2085e75a] {\n  font-size: 0.6875em;\n  font-weight: 400;\n  color: rgba(27, 37, 57, 0.7);\n  display: inline-block;\n}\n.file-wrapper .source-name .source-info[data-v-2085e75a] {\n  display: block;\n  line-height: 1;\n}\n.file-wrapper .source-name .source-shared[data-v-2085e75a] {\n  display: inline-block;\n}\n.file-wrapper .source-name .source-shared .label[data-v-2085e75a] {\n  font-size: 0.75em;\n  font-weight: 400;\n  color: #0066ff;\n}\n.file-wrapper .source-name .source-shared .shared-icon[data-v-2085e75a] {\n  vertical-align: middle;\n}\n.file-wrapper .source-name .source-shared .shared-icon path[data-v-2085e75a], .file-wrapper .source-name .source-shared .shared-icon circle[data-v-2085e75a], .file-wrapper .source-name .source-shared .shared-icon line[data-v-2085e75a] {\n  stroke: #0066ff;\n}\n.file-wrapper .source-name .name[data-v-2085e75a] {\n  color: #1B2539;\n  font-size: 0.75em;\n  font-weight: normal;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  display: -webkit-box;\n  -webkit-line-clamp: 3;\n  -webkit-box-orient: vertical;\n  white-space: normal;\n  max-height: none;\n}\n.file-wrapper .source-name .name[contenteditable][data-v-2085e75a] {\n  -webkit-user-select: text;\n  -moz-user-select: text;\n   -ms-user-select: text;\n       user-select: text;\n}\n.file-wrapper .source-name .name[contenteditable='true'][data-v-2085e75a]:hover {\n  text-decoration: underline;\n}\n.file-wrapper .source-name .name.actived[data-v-2085e75a] {\n  max-height: initial;\n}\n.file-wrapper.selected .file-source[data-v-2085e75a] {\n  background: #f4f5f6;\n}\n.file-wrapper .file-source[data-v-2085e75a] {\n  border: 2px dashed transparent;\n  width: 140px;\n  margin: 2px auto;\n  cursor: pointer;\n  position: relative;\n  padding: 15px 0;\n  border: 1px solid transparent;\n}\n.file-wrapper .file-source.is-dragenter[data-v-2085e75a] {\n  border: 2px dashed #0066ff;\n  border-radius: 0px;\n}\n.file-wrapper .file-source.is-cutted[data-v-2085e75a] {\n  opacity: 50%;\n}\n.file-wrapper .file-source.no-clicked[data-v-2085e75a] {\n  background: white !important;\n  border: 1px solid transparent;\n}\n.file-wrapper .file-source.no-clicked .source-name .name[data-v-2085e75a] {\n  color: #1B2539 !important;\n}\n.file-wrapper .file-source[data-v-2085e75a]:hover, .file-wrapper .file-source.is-clicked[data-v-2085e75a] {\n  border-radius: 0px;\n  background: #cce8ff;\n  border: 1px solid #99d1ff;\n}\n.file-wrapper .icon-source[data-v-2085e75a] {\n  text-align: center;\n  position: relative;\n  height: 80px;\n  margin-bottom: 20px;\n  display: flex;\n  align-items: center;\n}\n.file-wrapper .icon-source .file-link[data-v-2085e75a] {\n  display: block;\n}\n.file-wrapper .icon-source .file-icon[data-v-2085e75a] {\n  font-size: 6.25em;\n  margin: 0 auto;\n}\n.file-wrapper .icon-source .file-icon.fileTypeEps[data-v-2085e75a], .file-wrapper .icon-source .file-icon.fileTypePdf[data-v-2085e75a], .file-wrapper .icon-source .file-icon.fileTypePsd[data-v-2085e75a], .file-wrapper .icon-source .file-icon.fileTypePptx[data-v-2085e75a], .file-wrapper .icon-source .file-icon.fileTypeHic[data-v-2085e75a], .file-wrapper .icon-source .file-icon.fileTypeXlsx[data-v-2085e75a], .file-wrapper .icon-source .file-icon.fileTypeHic[data-v-2085e75a], .file-wrapper .icon-source .file-icon.fileTypeDocx[data-v-2085e75a], .file-wrapper .icon-source .file-icon.fileTypeVideo[data-v-2085e75a], .file-wrapper .icon-source .file-icon.fileTypeAudio[data-v-2085e75a] {\n  display: none;\n}\n.file-wrapper .icon-source .file-icon.fileTypeZip path[data-v-2085e75a] {\n  fill: #fafafc;\n  stroke: #ccc;\n  stroke-width: 1px;\n}\n.file-wrapper .icon-source .file-icon path[data-v-2085e75a] {\n  fill: #fafafc;\n  stroke: #ccc;\n  stroke-width: 1;\n}\n.file-wrapper .icon-source .file-icon-text[data-v-2085e75a] {\n  margin: 5px auto 0;\n  position: absolute;\n  text-align: center;\n  left: 0;\n  right: 0;\n  color: #0066ff;\n  font-size: 0.75em;\n  font-weight: 600;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  max-width: 120px;\n  max-height: 120px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.file-wrapper .icon-source .file-icon-text.fileTypePlain[data-v-2085e75a]:after {\n  content: 'FILE';\n  font-size: 12px;\n}\n.file-wrapper .icon-source .file-icon-text.fileTypePlain .fileTypeIcon[data-v-2085e75a] {\n  width: 120px;\n  height: 120px;\n  position: relative;\n}\n.file-wrapper .icon-source .file-icon-text.fileTypePlain .fileTypeIcon.fileTypeZip[data-v-2085e75a]:after {\n  content: 'ZIP';\n  font-size: 12px;\n  margin-top: 50px;\n  position: absolute;\n  margin-left: -8px;\n}\n.file-wrapper .icon-source .file-icon-text.fileTypePlain .fileTypeIcon.fileTypeIco[data-v-2085e75a]:after {\n  content: 'ICO';\n  font-size: 12px;\n  margin-top: 50px;\n  position: absolute;\n  margin-left: -10px;\n}\n.file-wrapper .icon-source .file-icon-text.fileTypePlain .fileTypeIcon .icon[data-v-2085e75a] {\n  width: 120px;\n  height: 120px;\n  position: absolute;\n  top: 0px;\n  left: 0px;\n}\n.file-wrapper .icon-source .image[data-v-2085e75a] {\n  max-width: 95%;\n  -o-object-fit: contain;\n     object-fit: contain;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  height: 80px;\n  border-radius: 0px;\n  margin: 0 auto;\n  pointer-events: none;\n}\n.file-wrapper .icon-source .folder[data-v-2085e75a] {\n  width: 80px;\n  height: 80px;\n  margin: auto;\n}\n.file-wrapper .icon-source .folder[data-v-2085e75a] .folder-icon {\n  font-size: 5em;\n}\n@media only screen and (max-width: 960px) {\n.file-wrapper .icon-source[data-v-2085e75a] {\n    margin-bottom: 15px;\n}\n.file-wrapper .icon-source.is-cutted[data-v-2085e75a] {\n    opacity: 50%;\n}\n}\n@media only screen and (max-width: 690px) {\n.file-wrapper .file-source[data-v-2085e75a] {\n    width: 120px;\n}\n.file-wrapper .file-source.is-cutted[data-v-2085e75a] {\n    opacity: 50%;\n}\n.file-wrapper .icon-source[data-v-2085e75a] {\n    margin-bottom: 10px;\n    height: 90px;\n}\n.file-wrapper .icon-source .file-icon[data-v-2085e75a] {\n    font-size: 4.6875em;\n}\n.file-wrapper .icon-source .file-icon-text[data-v-2085e75a] {\n    font-size: 0.75em;\n}\n.file-wrapper .icon-source .folder[data-v-2085e75a] {\n    width: 75px;\n    height: 75px;\n    margin-top: 0;\n    margin-bottom: 0;\n}\n.file-wrapper .icon-source .folder[data-v-2085e75a] .folder-icon {\n    font-size: 4.6875em;\n}\n.file-wrapper .icon-source .image[data-v-2085e75a] {\n    width: 90px;\n    height: 90px;\n}\n.file-wrapper .source-name .name[data-v-2085e75a] {\n    font-size: 0.8125em;\n    line-height: .9;\n    max-height: 30px;\n}\n}\n@media (prefers-color-scheme: dark) {\n.select-box[data-v-2085e75a] {\n    background-color: #353940;\n}\n.select-box-active[data-v-2085e75a] {\n    background-color: #1a75ff;\n}\n.select-box-active .icon[data-v-2085e75a] {\n    stroke: white;\n}\n.file-wrapper .icon-source .file-icon path[data-v-2085e75a] {\n    fill: #1e2024;\n    stroke: #2F3C54;\n}\n.file-wrapper .file-source.no-clicked[data-v-2085e75a] {\n    background: #131414 !important;\n}\n.file-wrapper .file-source.no-clicked .file-icon path[data-v-2085e75a] {\n    fill: #1e2024 !important;\n    stroke: #2F3C54;\n}\n.file-wrapper .file-source.no-clicked .source-name .name[data-v-2085e75a] {\n    color: #bec6cf !important;\n}\n.file-wrapper .file-source.is-cutted[data-v-2085e75a] {\n    opacity: 50%;\n}\n.file-wrapper .file-source[data-v-2085e75a]:hover, .file-wrapper .file-source.is-clicked[data-v-2085e75a] {\n    background: #1e2024;\n}\n.file-wrapper .file-source:hover .file-icon path[data-v-2085e75a], .file-wrapper .file-source.is-clicked .file-icon path[data-v-2085e75a] {\n    fill: #131414;\n}\n.file-wrapper .source-name .name[data-v-2085e75a] {\n    color: #bec6cf;\n}\n.file-wrapper .source-name .source-size[data-v-2085e75a],\n  .file-wrapper .source-name .source-length[data-v-2085e75a] {\n    color: #7d858c;\n}\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/FileItemList.vue?vue&type=style&index=0&id=2cfcc5ab&scoped=true&lang=scss&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FilesView/FileItemList.vue?vue&type=style&index=0&id=2cfcc5ab&scoped=true&lang=scss& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".slide-from-left-move[data-v-2cfcc5ab] {\n  transition: transform 300s ease;\n}\n.slide-from-left-enter-active[data-v-2cfcc5ab],\n.slide-from-right-enter-active[data-v-2cfcc5ab],\n.slide-from-left-leave-active[data-v-2cfcc5ab],\n.slide-from-right-leave-active[data-v-2cfcc5ab] {\n  transition: all 300ms;\n}\n.slide-from-left-enter[data-v-2cfcc5ab],\n.slide-from-left-leave-to[data-v-2cfcc5ab] {\n  opacity: 0;\n  transform: translateX(-100%);\n}\n.slide-from-right-enter[data-v-2cfcc5ab],\n.slide-from-right-leave-to[data-v-2cfcc5ab] {\n  opacity: 0;\n  transform: translateX(100%);\n}\n.check-select[data-v-2cfcc5ab] {\n  margin-right: 15px;\n  margin-left: 6px;\n}\n.check-select .select-box[data-v-2cfcc5ab] {\n  width: 20px;\n  height: 20px;\n  background-color: #e6e8eb;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 0px;\n}\n.check-select .select-box-active[data-v-2cfcc5ab] {\n  background-color: #0066ff;\n}\n.check-select .select-box-active .icon[data-v-2cfcc5ab] {\n  stroke: white;\n}\n.file-wrapper[data-v-2cfcc5ab] {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  position: relative;\n  margin: 2px 10px;\n}\n.file-wrapper[data-v-2cfcc5ab]:hover {\n  border-color: transparent;\n}\n.file-wrapper .actions[data-v-2cfcc5ab] {\n  text-align: right;\n  width: 50px;\n}\n.file-wrapper .actions .show-actions[data-v-2cfcc5ab] {\n  cursor: pointer;\n  padding: 12px 6px 12px;\n}\n.file-wrapper .actions .show-actions .icon-action[data-v-2cfcc5ab] {\n  font-size: 0.875em;\n}\n.file-wrapper .actions .show-actions .icon-action path[data-v-2cfcc5ab] {\n  fill: #0066ff;\n}\n.file-wrapper .item-name[data-v-2cfcc5ab] {\n  display: block;\n  width: 100%;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.file-wrapper .item-name .item-info[data-v-2cfcc5ab] {\n  display: block;\n  line-height: 1;\n}\n.file-wrapper .item-name .item-shared[data-v-2cfcc5ab] {\n  display: inline-block;\n}\n.file-wrapper .item-name .item-shared .label[data-v-2cfcc5ab] {\n  font-size: 0.75em;\n  font-weight: 400;\n  color: #0066ff;\n}\n.file-wrapper .item-name .item-shared .shared-icon[data-v-2cfcc5ab] {\n  vertical-align: middle;\n}\n.file-wrapper .item-name .item-shared .shared-icon path[data-v-2cfcc5ab],\n.file-wrapper .item-name .item-shared .shared-icon circle[data-v-2cfcc5ab],\n.file-wrapper .item-name .item-shared .shared-icon line[data-v-2cfcc5ab] {\n  stroke: #0066ff;\n}\n.file-wrapper .item-name .item-size[data-v-2cfcc5ab],\n.file-wrapper .item-name .item-length[data-v-2cfcc5ab] {\n  font-size: 0.6875em;\n  font-weight: 400;\n  color: rgba(27, 37, 57, 0.7);\n}\n.file-wrapper .item-name .name[data-v-2cfcc5ab] {\n  white-space: nowrap;\n}\n.file-wrapper .item-name .name[contenteditable][data-v-2cfcc5ab] {\n  -webkit-user-select: text;\n  -moz-user-select: text;\n   -ms-user-select: text;\n       user-select: text;\n}\n.file-wrapper .item-name .name[contenteditable='true'][data-v-2cfcc5ab]:hover {\n  text-decoration: underline;\n}\n.file-wrapper .item-name .name[data-v-2cfcc5ab] {\n  color: #1B2539;\n  font-size: 0.875em;\n  font-weight: 700;\n  max-height: 40px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.file-wrapper .item-name .name.actived[data-v-2cfcc5ab] {\n  max-height: initial;\n}\n.file-wrapper.selected .file-item[data-v-2cfcc5ab] {\n  background: #f4f5f6;\n}\n.file-wrapper .icon-item[data-v-2cfcc5ab] {\n  text-align: center;\n  position: relative;\n  flex: 0 0 50px;\n  line-height: 0;\n  margin-right: 20px;\n  overflow: hidden;\n}\n.file-wrapper .icon-item .folder[data-v-2cfcc5ab] {\n  width: 52px;\n  height: 52px;\n}\n.file-wrapper .icon-item .folder[data-v-2cfcc5ab] .folder-icon {\n  font-size: 3.25em;\n}\n.file-wrapper .icon-item .file-icon[data-v-2cfcc5ab] {\n  font-size: 2.8125em;\n  margin-top: 2px;\n}\n.file-wrapper .icon-item .file-icon.fileTypeEps[data-v-2cfcc5ab], .file-wrapper .icon-item .file-icon.fileTypePdf[data-v-2cfcc5ab], .file-wrapper .icon-item .file-icon.fileTypePsd[data-v-2cfcc5ab], .file-wrapper .icon-item .file-icon.fileTypePptx[data-v-2cfcc5ab], .file-wrapper .icon-item .file-icon.fileTypeHic[data-v-2cfcc5ab], .file-wrapper .icon-item .file-icon.fileTypeXlsx[data-v-2cfcc5ab], .file-wrapper .icon-item .file-icon.fileTypeHic[data-v-2cfcc5ab], .file-wrapper .icon-item .file-icon.fileTypeDocx[data-v-2cfcc5ab], .file-wrapper .icon-item .file-icon.fileTypeVideo[data-v-2cfcc5ab], .file-wrapper .icon-item .file-icon.fileTypeAudio[data-v-2cfcc5ab] {\n  display: none;\n}\n.file-wrapper .icon-item .file-icon.fileTypeZip path[data-v-2cfcc5ab] {\n  fill: #fafafc;\n  stroke: #ccc;\n  stroke-width: 1px;\n}\n.file-wrapper .icon-item .file-icon path[data-v-2cfcc5ab] {\n  fill: #fafafc;\n  stroke: #dfe0e8;\n  stroke-width: 1;\n}\n.file-wrapper .icon-item .file-icon-text[data-v-2cfcc5ab] {\n  line-height: 1;\n  font-size: 0.6875em;\n  margin: 0 auto;\n  position: absolute;\n  text-align: center;\n  left: 0;\n  right: 0;\n  color: #0066ff;\n  font-weight: 600;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  max-width: 50px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.file-wrapper .icon-item .file-icon-text.fileTypePlain[data-v-2cfcc5ab]:after {\n  content: 'FILE';\n  font-size: 10px;\n  display: block;\n  margin-top: 18px;\n}\n.file-wrapper .icon-item .file-icon-text.fileTypePlain .fileTypeIcon[data-v-2cfcc5ab] {\n  width: 50px;\n  height: 50px;\n  overflow: hidden;\n}\n.file-wrapper .icon-item .file-icon-text.fileTypePlain .fileTypeIcon.fileTypeZip img[data-v-2cfcc5ab] {\n  width: 60px;\n  height: 60px;\n  margin-left: -4px;\n  margin-top: -2px;\n}\n.file-wrapper .icon-item .file-icon-text.fileTypePlain .fileTypeIcon.fileTypeZip[data-v-2cfcc5ab]:after {\n  content: 'ZIP';\n  font-size: 10px;\n  margin-top: 18px;\n  position: absolute;\n  margin-left: 18px;\n  left: 0;\n}\n.file-wrapper .icon-item .file-icon-text.fileTypePlain .fileTypeIcon.fileTypeIco[data-v-2cfcc5ab]:after {\n  content: 'ICO';\n  font-size: 10px;\n  margin-top: 18px;\n  position: absolute;\n  margin-left: -9px;\n}\n.file-wrapper .icon-item .file-icon-text.fileTypePlain .fileTypeIcon img[data-v-2cfcc5ab] {\n  width: 80px;\n  height: 80px;\n  margin-left: -15px;\n  margin-top: -15px;\n}\n.file-wrapper .icon-item .image[data-v-2cfcc5ab] {\n  -o-object-fit: cover;\n     object-fit: cover;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  max-width: 100%;\n  border-radius: 3px;\n  width: 50px;\n  height: 50px;\n  pointer-events: none;\n}\n.file-wrapper .file-item[data-v-2cfcc5ab] {\n  border: 2px dashed transparent;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  padding: 7px;\n}\n.file-wrapper .file-item.is-dragenter[data-v-2cfcc5ab] {\n  border: 2px dashed #0066ff;\n  border-radius: 0px;\n}\n.file-wrapper .file-item.is-cutted[data-v-2cfcc5ab] {\n  opacity: 50%;\n}\n.file-wrapper .file-item.no-clicked[data-v-2cfcc5ab] {\n  background: white !important;\n}\n.file-wrapper .file-item.no-clicked .item-name .name[data-v-2cfcc5ab] {\n  color: #1B2539 !important;\n}\n.file-wrapper .file-item[data-v-2cfcc5ab]:hover, .file-wrapper .file-item.is-clicked[data-v-2cfcc5ab] {\n  border-radius: 0px;\n  background: #cce8ff;\n}\n@media (prefers-color-scheme: dark) {\n.check-select .select-box[data-v-2cfcc5ab] {\n    background-color: #353940;\n}\n.check-select .select-box-active[data-v-2cfcc5ab] {\n    background-color: #0066ff;\n}\n.check-select .select-box-active .icon[data-v-2cfcc5ab] {\n    stroke: white;\n}\n.file-wrapper .icon-item .file-icon path[data-v-2cfcc5ab] {\n    fill: #1e2024;\n    stroke: #2f3c54;\n}\n.file-wrapper .file-item.is-cutted[data-v-2cfcc5ab] {\n    opacity: 50%;\n}\n.file-wrapper .file-item.no-clicked[data-v-2cfcc5ab] {\n    background: #131414 !important;\n}\n.file-wrapper .file-item.no-clicked .file-icon path[data-v-2cfcc5ab] {\n    fill: #1e2024 !important;\n    stroke: #2F3C54;\n}\n.file-wrapper .file-item.no-clicked .item-name .name[data-v-2cfcc5ab] {\n    color: #bec6cf !important;\n}\n.file-wrapper .file-item[data-v-2cfcc5ab]:hover, .file-wrapper .file-item.is-clicked[data-v-2cfcc5ab] {\n    background: #1e2024;\n}\n.file-wrapper .file-item:hover .item-name .name[data-v-2cfcc5ab], .file-wrapper .file-item.is-clicked .item-name .name[data-v-2cfcc5ab] {\n    color: #0066ff;\n}\n.file-wrapper .file-item:hover .file-icon path[data-v-2cfcc5ab], .file-wrapper .file-item.is-clicked .file-icon path[data-v-2cfcc5ab] {\n    fill: #131414;\n}\n.file-wrapper .item-name .name[data-v-2cfcc5ab] {\n    color: #bec6cf;\n}\n.file-wrapper .item-name .item-size[data-v-2cfcc5ab],\n  .file-wrapper .item-name .item-length[data-v-2cfcc5ab] {\n    color: #7d858c;\n}\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/MobileActionButton.vue?vue&type=style&index=0&id=95f75cf0&scoped=true&lang=scss&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FilesView/MobileActionButton.vue?vue&type=style&index=0&id=95f75cf0&scoped=true&lang=scss& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mobile-action-button[data-v-95f75cf0] {\n  background: #f4f5f6;\n  margin-right: 15px;\n  border-radius: 8px;\n  padding: 7px 10px;\n  cursor: pointer;\n  border: none;\n  transition: 150ms all ease;\n  /*&:hover {\n        background: rgba($theme, 0.1);\n\n        .icon {\n            path, line, polyline, rect, circle {\n                stroke: $theme;\n            }\n        }\n\n        .label {\n            color: $theme;\n        }\n    }*/\n}\n.mobile-action-button .flex[data-v-95f75cf0] {\n  display: flex;\n  align-items: center;\n}\n.mobile-action-button .icon[data-v-95f75cf0] {\n  margin-right: 10px;\n  font-size: 0.875em;\n}\n.mobile-action-button .icon path[data-v-95f75cf0], .mobile-action-button .icon line[data-v-95f75cf0], .mobile-action-button .icon polyline[data-v-95f75cf0], .mobile-action-button .icon rect[data-v-95f75cf0], .mobile-action-button .icon circle[data-v-95f75cf0] {\n  transition: 150ms all ease;\n}\n.mobile-action-button .label[data-v-95f75cf0] {\n  transition: 150ms all ease;\n  font-size: 0.875em;\n  font-weight: 700;\n  color: #1B2539;\n}\n.mobile-action-button[data-v-95f75cf0]:active {\n  transform: scale(0.95);\n}\n@media (prefers-color-scheme: dark) {\n.mobile-action-button[data-v-95f75cf0] {\n    background: #1e2024;\n}\n.mobile-action-button path[data-v-95f75cf0], .mobile-action-button line[data-v-95f75cf0], .mobile-action-button polyline[data-v-95f75cf0], .mobile-action-button rect[data-v-95f75cf0], .mobile-action-button circle[data-v-95f75cf0] {\n    stroke: #0066ff;\n}\n.mobile-action-button .label[data-v-95f75cf0] {\n    color: #bec6cf;\n}\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/MobileActionButtonUpload.vue?vue&type=style&index=0&id=b04b41ae&scoped=true&lang=scss&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FilesView/MobileActionButtonUpload.vue?vue&type=style&index=0&id=b04b41ae&scoped=true&lang=scss& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mobile-action-button[data-v-b04b41ae] {\n  background: #f4f5f6;\n  margin-right: 15px;\n  border-radius: 8px;\n  padding: 7px 10px;\n  cursor: pointer;\n  border: none;\n}\n.mobile-action-button .flex[data-v-b04b41ae] {\n  display: flex;\n  align-items: center;\n}\n.mobile-action-button .icon[data-v-b04b41ae] {\n  vertical-align: middle;\n  margin-right: 10px;\n  font-size: 0.875em;\n}\n.mobile-action-button .label[data-v-b04b41ae] {\n  vertical-align: middle;\n  font-size: 0.875em;\n  font-weight: 700;\n  color: #1B2539;\n}\n@media (prefers-color-scheme: dark) {\n.mobile-action-button[data-v-b04b41ae] {\n    background: #1e2024;\n}\n.mobile-action-button path[data-v-b04b41ae], .mobile-action-button line[data-v-b04b41ae], .mobile-action-button polyline[data-v-b04b41ae], .mobile-action-button rect[data-v-b04b41ae], .mobile-action-button circle[data-v-b04b41ae] {\n    stroke: #0066ff;\n}\n.mobile-action-button .label[data-v-b04b41ae] {\n    color: #bec6cf;\n}\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/MobileActions.vue?vue&type=style&index=0&id=18dc5ba6&scoped=true&lang=scss&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FilesView/MobileActions.vue?vue&type=style&index=0&id=18dc5ba6&scoped=true&lang=scss& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".button-enter-active[data-v-18dc5ba6],\n.button-leave-active[data-v-18dc5ba6] {\n  transition: all 250ms;\n}\n.button-enter[data-v-18dc5ba6] {\n  opacity: 0;\n  transform: translateY(-50%);\n}\n.button-leave-to[data-v-18dc5ba6] {\n  opacity: 0;\n  transform: translateY(50%);\n}\n.button-leave-active[data-v-18dc5ba6] {\n  position: absolute;\n}\n.preview-sorting[data-v-18dc5ba6] {\n  background: #f4f5f6 !important;\n}\n.preview-sorting[data-v-18dc5ba6] .label {\n  color: #1B2539 !important;\n}\n.preview-sorting[data-v-18dc5ba6] .preview-sorting path, .preview-sorting[data-v-18dc5ba6] .preview-sorting line, .preview-sorting[data-v-18dc5ba6] .preview-sorting polyline, .preview-sorting[data-v-18dc5ba6] .preview-sorting rect, .preview-sorting[data-v-18dc5ba6] .preview-sorting circle {\n  stroke: #1B2539 !important;\n}\n#mobile-actions-wrapper[data-v-18dc5ba6] {\n  display: none;\n  background: white;\n  position: -webkit-sticky;\n  position: sticky;\n  top: 35px;\n  z-index: 3;\n}\n.mobile-action-button.is-inactive[data-v-18dc5ba6] {\n  opacity: 0.25;\n  pointer-events: none;\n}\n.mobile-actions[data-v-18dc5ba6] {\n  white-space: nowrap;\n  overflow-x: auto;\n  margin: 0 -15px;\n  padding: 10px 0 10px 15px;\n}\n@media only screen and (max-width: 960px) {\n#mobile-actions-wrapper[data-v-18dc5ba6] {\n    display: block;\n}\n}\n@media (prefers-color-scheme: dark) {\n#mobile-actions-wrapper[data-v-18dc5ba6] {\n    background: #131414;\n}\n.preview-sorting[data-v-18dc5ba6] {\n    background: #1e2024 !important;\n}\n.preview-sorting[data-v-18dc5ba6] .label {\n    color: #bec6cf !important;\n}\n.preview-sorting[data-v-18dc5ba6] .preview-sorting path, .preview-sorting[data-v-18dc5ba6] .preview-sorting line, .preview-sorting[data-v-18dc5ba6] .preview-sorting polyline, .preview-sorting[data-v-18dc5ba6] .preview-sorting rect, .preview-sorting[data-v-18dc5ba6] .preview-sorting circle {\n    stroke: #0066ff !important;\n}\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/MobileMultiSelectButton.vue?vue&type=style&index=0&id=1e539d57&scoped=true&lang=scss&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FilesView/MobileMultiSelectButton.vue?vue&type=style&index=0&id=1e539d57&scoped=true&lang=scss& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mobile-action-button[data-v-1e539d57] {\n  background: #f4f5f6;\n  margin-right: 15px;\n  border-radius: 8px;\n  padding: 7px 10px;\n  cursor: pointer;\n  border: none;\n  transition: 150ms all ease;\n}\n.mobile-action-button .flex[data-v-1e539d57] {\n  display: flex;\n  align-items: center;\n}\n.mobile-action-button .icon[data-v-1e539d57] {\n  margin-right: 10px;\n  font-size: 0.875em;\n}\n.mobile-action-button .icon path[data-v-1e539d57], .mobile-action-button .icon line[data-v-1e539d57], .mobile-action-button .icon polyline[data-v-1e539d57], .mobile-action-button .icon rect[data-v-1e539d57], .mobile-action-button .icon circle[data-v-1e539d57] {\n  transition: 150ms all ease;\n}\n.mobile-action-button .label[data-v-1e539d57] {\n  transition: 150ms all ease;\n  font-size: 0.875em;\n  font-weight: 700;\n  color: #1B2539;\n}\n.active .icon path[data-v-1e539d57], .active .icon line[data-v-1e539d57], .active .icon polyline[data-v-1e539d57], .active .icon rect[data-v-1e539d57], .active .icon circle[data-v-1e539d57] {\n  stroke: #0066ff !important;\n}\n.active .label[data-v-1e539d57] {\n  color: #0066ff !important;\n}\n@media (prefers-color-scheme: dark) {\n.mobile-action-button[data-v-1e539d57] {\n    background: #1e2024;\n}\n.mobile-action-button path[data-v-1e539d57], .mobile-action-button line[data-v-1e539d57], .mobile-action-button polyline[data-v-1e539d57], .mobile-action-button rect[data-v-1e539d57], .mobile-action-button circle[data-v-1e539d57] {\n    stroke: #0066ff;\n}\n.mobile-action-button .label[data-v-1e539d57] {\n    color: #bec6cf;\n}\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/MobileToolbar.vue?vue&type=style&index=0&id=005ba5ab&scoped=true&lang=scss&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FilesView/MobileToolbar.vue?vue&type=style&index=0&id=005ba5ab&scoped=true&lang=scss& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mobile-toolbar[data-v-005ba5ab] {\n  background: white;\n  text-align: center;\n  display: none;\n  padding: 10px 0;\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  z-index: 6;\n}\n.mobile-toolbar > div[data-v-005ba5ab] {\n  width: 100%;\n  flex-grow: 1;\n  align-self: center;\n  white-space: nowrap;\n}\n.mobile-toolbar .go-back-button[data-v-005ba5ab] {\n  text-align: left;\n  flex: 1;\n  opacity: 0;\n  visibility: hidden;\n  pointer-events: none;\n}\n.mobile-toolbar .go-back-button .icon-back[data-v-005ba5ab] {\n  vertical-align: middle;\n  cursor: pointer;\n  margin-top: -2px;\n}\n.mobile-toolbar .go-back-button.is-visible[data-v-005ba5ab] {\n  pointer-events: initial;\n  visibility: visible;\n  opacity: 1;\n}\n.mobile-toolbar .directory-name[data-v-005ba5ab] {\n  line-height: 1;\n  text-align: center;\n  width: 100%;\n  vertical-align: middle;\n  font-size: 1em;\n  color: #1B2539;\n  font-weight: 700;\n  max-width: 220px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: inline-block;\n}\n.mobile-toolbar .more-actions-button[data-v-005ba5ab] {\n  flex: 1;\n  text-align: right;\n  position: relative;\n}\n.mobile-toolbar .more-actions-button .tap-area[data-v-005ba5ab] {\n  display: inline-block;\n  padding: 10px;\n  position: absolute;\n  right: -10px;\n  top: -20px;\n}\n.mobile-toolbar .more-actions-button .tap-area path[data-v-005ba5ab], .mobile-toolbar .more-actions-button .tap-area line[data-v-005ba5ab], .mobile-toolbar .more-actions-button .tap-area polyline[data-v-005ba5ab], .mobile-toolbar .more-actions-button .tap-area rect[data-v-005ba5ab], .mobile-toolbar .more-actions-button .tap-area circle[data-v-005ba5ab] {\n  stroke: #1B2539;\n}\n@media only screen and (max-width: 960px) {\n.mobile-toolbar[data-v-005ba5ab] {\n    display: flex;\n}\n}\n@media (prefers-color-scheme: dark) {\n.mobile-toolbar[data-v-005ba5ab] {\n    background: #131414;\n}\n.mobile-toolbar .directory-name[data-v-005ba5ab] {\n    color: #bec6cf;\n}\n.mobile-toolbar .more-actions-button .tap-area path[data-v-005ba5ab], .mobile-toolbar .more-actions-button .tap-area line[data-v-005ba5ab], .mobile-toolbar .more-actions-button .tap-area polyline[data-v-005ba5ab], .mobile-toolbar .more-actions-button .tap-area rect[data-v-005ba5ab], .mobile-toolbar .more-actions-button .tap-area circle[data-v-005ba5ab] {\n    stroke: #bec6cf;\n}\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/Option.vue?vue&type=style&index=0&id=c9acfa9a&scoped=true&lang=scss&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FilesView/Option.vue?vue&type=style&index=0&id=c9acfa9a&scoped=true&lang=scss& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".danger .text-label[data-v-c9acfa9a] {\n  color: #fd397a !important;\n}\n.danger .icon path[data-v-c9acfa9a],\n.danger .icon line[data-v-c9acfa9a],\n.danger .icon polyline[data-v-c9acfa9a],\n.danger .icon rect[data-v-c9acfa9a],\n.danger .icon circle[data-v-c9acfa9a],\n.danger .icon polygon[data-v-c9acfa9a] {\n  stroke: #fd397a !important;\n}\n.menu-option[data-v-c9acfa9a] {\n  white-space: nowrap;\n  font-weight: 700;\n  font-size: 0.875em;\n  padding: 15px 20px;\n  cursor: pointer;\n  width: 100%;\n  color: #1B2539;\n  display: flex;\n  align-items: center;\n}\n.menu-option .icon[data-v-c9acfa9a] {\n  margin-right: 20px;\n  line-height: 0;\n}\n.menu-option .text-label[data-v-c9acfa9a] {\n  font-size: 1em;\n}\n.menu-option[data-v-c9acfa9a]:hover {\n  background: #f4f5f6;\n}\n.menu-option:hover .text-label[data-v-c9acfa9a] {\n  color: #0066ff;\n}\n.menu-option:hover path[data-v-c9acfa9a],\n.menu-option:hover line[data-v-c9acfa9a],\n.menu-option:hover polyline[data-v-c9acfa9a],\n.menu-option:hover rect[data-v-c9acfa9a],\n.menu-option:hover circle[data-v-c9acfa9a],\n.menu-option:hover polygon[data-v-c9acfa9a] {\n  stroke: #0066ff;\n}\n@media (prefers-color-scheme: dark) {\n.danger[data-v-c9acfa9a]:hover {\n    background: rgba(253, 57, 122, 0.1) !important;\n}\n.menu-option[data-v-c9acfa9a] {\n    color: #bec6cf;\n}\n.menu-option[data-v-c9acfa9a]:hover {\n    background: rgba(0, 102, 255, 0.1);\n}\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/OptionGroup.vue?vue&type=style&index=0&id=85830b88&scoped=true&lang=scss&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FilesView/OptionGroup.vue?vue&type=style&index=0&id=85830b88&scoped=true&lang=scss& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".menu-option-group[data-v-85830b88] {\n  padding: 5px 0;\n  border-bottom: 1px solid #F8F8F8;\n}\n.menu-option-group[data-v-85830b88]:first-child {\n  padding-top: 0;\n}\n.menu-option-group[data-v-85830b88]:last-child {\n  padding-bottom: 0;\n  border-bottom: none;\n}\n@media (prefers-color-scheme: dark) {\n.menu-option-group[data-v-85830b88] {\n    border-color: rgba(255, 255, 255, 0.02);\n}\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/ProgressBar.vue?vue&type=style&index=0&id=7fb97850&scoped=true&lang=scss&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FilesView/ProgressBar.vue?vue&type=style&index=0&id=7fb97850&scoped=true&lang=scss& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".progress-bar[data-v-7fb97850] {\n  width: 100%;\n  height: 5px;\n  background: #f4f5f6;\n  margin-top: 6px;\n  border-radius: 10px;\n}\n.progress-bar span[data-v-7fb97850] {\n  background: #0066ff;\n  display: block;\n  height: 100%;\n  border-radius: 10px;\n  max-width: 100%;\n}\n@media (prefers-color-scheme: dark) {\n.progress-bar[data-v-7fb97850] {\n    background: #1e2024;\n}\n}\n@media only screen and (min-width: 680px) and (prefers-color-scheme: dark) {\n.progress-bar[data-v-7fb97850] {\n    background: #1e2024;\n}\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/SearchBar.vue?vue&type=style&index=0&id=23e12306&scoped=true&lang=scss&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FilesView/SearchBar.vue?vue&type=style&index=0&id=23e12306&scoped=true&lang=scss& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".search-bar[data-v-23e12306] {\n  position: relative;\n}\n.search-bar input[data-v-23e12306] {\n  background: transparent;\n  outline: 0;\n  padding: 5px 20px 5px 30px;\n  background-image: url(https://editor.hicreo.com/web/image/portfolio/search_btn.svg);\n  background-repeat: no-repeat;\n  background-size: 24px;\n  background-position: left center;\n  border: none;\n  border-bottom: 1px solid #aaa;\n  font-weight: 400;\n  font-size: 1em;\n  min-width: 175px;\n  transition: 0.15s all ease;\n  -webkit-appearance: none;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n}\n.search-bar input[data-v-23e12306]:hover {\n  border-bottom: 1px solid #666;\n  background-image: url(https://editor.hicreo.com/web/image/portfolio/search_btn_hover.svg);\n}\n.search-bar input[data-v-23e12306]::-moz-placeholder {\n  color: #1B2539;\n  font-size: 0.875em;\n  font-weight: 500;\n}\n.search-bar input[data-v-23e12306]:-ms-input-placeholder {\n  color: #1B2539;\n  font-size: 0.875em;\n  font-weight: 500;\n}\n.search-bar input[data-v-23e12306]::placeholder {\n  color: #1B2539;\n  font-size: 0.875em;\n  font-weight: 500;\n}\n.search-bar .icon.search_clear[data-v-23e12306] {\n  position: absolute;\n  right: 0px;\n  top: 10px;\n  cursor: pointer;\n  display: block;\n  background-image: url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='23' height='23'><path style='fill:%23666666;' d='M8.9,7.5l6.1,6.1L13.6,15L7.5,8.9L1.4,15L0,13.6l6.1-6.1L0,1.4L1.4,0l6.1,6.1L13.6,0L15,1.4L8.9,7.5z'/></svg>\");\n  background-position: 6px 6px;\n  background-size: 16px;\n  background-repeat: no-repeat;\n  cursor: pointer;\n  width: 20px;\n  height: 20px;\n}\n.search-bar .icon .pointer[data-v-23e12306] {\n  cursor: pointer;\n}\n@media only screen and (max-width: 1024px) {\n.search-bar input[data-v-23e12306] {\n    max-width: 190px;\n    padding-right: 16px;\n}\n}\n@media only screen and (max-width: 690px) {\n.search-bar input[data-v-23e12306] {\n    min-width: initial;\n    width: 100%;\n    max-width: initial;\n    padding: 9px 20px 9px 30px;\n}\n.search-bar input[data-v-23e12306]:focus {\n    border: 1px solid transparent;\n    box-shadow: none;\n}\n.search-bar .icon[data-v-23e12306] {\n    padding: 11px 15px 11px 0;\n}\n}\n@media (prefers-color-scheme: dark) {\n.search-bar input[data-v-23e12306] {\n    border-color: transparent;\n    color: #bec6cf;\n}\n.search-bar input[data-v-23e12306]::-moz-placeholder {\n    color: #7d858c;\n}\n.search-bar input[data-v-23e12306]:-ms-input-placeholder {\n    color: #7d858c;\n}\n.search-bar input[data-v-23e12306]::placeholder {\n    color: #7d858c;\n}\n.search-bar .icon svg path[data-v-23e12306] {\n    fill: #7d858c;\n}\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/ToolbarButtonUpload.vue?vue&type=style&index=0&id=8eb7bbc0&scoped=true&lang=scss&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FilesView/ToolbarButtonUpload.vue?vue&type=style&index=0&id=8eb7bbc0&scoped=true&lang=scss& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".button[data-v-8eb7bbc0] {\n  height: 42px;\n  width: 42px;\n  border-radius: 8px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0;\n  text-align: center;\n  cursor: pointer;\n  white-space: nowrap;\n  outline: none;\n  border: none;\n}\n.button[data-v-8eb7bbc0]:hover {\n  background: #f4f5f6;\n}\n.button:hover path[data-v-8eb7bbc0], .button:hover line[data-v-8eb7bbc0], .button:hover polyline[data-v-8eb7bbc0], .button:hover rect[data-v-8eb7bbc0], .button:hover circle[data-v-8eb7bbc0] {\n  transition: 150ms all ease;\n  stroke: #0066ff;\n}\n.button:hover .uploadIcon path[data-v-8eb7bbc0], .button:hover .uploadIcon line[data-v-8eb7bbc0], .button:hover .uploadIcon polyline[data-v-8eb7bbc0], .button:hover .uploadIcon rect[data-v-8eb7bbc0], .button:hover .uploadIcon circle[data-v-8eb7bbc0], .button:hover .uploadIcon ellipse[data-v-8eb7bbc0] {\n  fill: #0066ff;\n  stroke: none;\n}\n@media (prefers-color-scheme: dark) {\n.button[data-v-8eb7bbc0] {\n    background: transparent;\n}\n.button[data-v-8eb7bbc0]:hover {\n    background: #1e2024;\n}\n.button path[data-v-8eb7bbc0], .button line[data-v-8eb7bbc0], .button polyline[data-v-8eb7bbc0], .button rect[data-v-8eb7bbc0], .button circle[data-v-8eb7bbc0] {\n    stroke: #bec6cf;\n}\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/UploadProgress.vue?vue&type=style&index=0&id=4c87f9e8&scoped=true&lang=scss&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FilesView/UploadProgress.vue?vue&type=style&index=0&id=4c87f9e8&scoped=true&lang=scss& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".sync-alt[data-v-4c87f9e8] {\n  -webkit-animation: spin-data-v-4c87f9e8 1s linear infinite;\n          animation: spin-data-v-4c87f9e8 1s linear infinite;\n  margin-right: 5px;\n}\n.sync-alt polyline[data-v-4c87f9e8], .sync-alt path[data-v-4c87f9e8] {\n  stroke: #0066ff;\n}\n@-webkit-keyframes spin-data-v-4c87f9e8 {\n0% {\n    transform: rotate(0);\n}\n100% {\n    transform: rotate(360deg);\n}\n}\n@keyframes spin-data-v-4c87f9e8 {\n0% {\n    transform: rotate(0);\n}\n100% {\n    transform: rotate(360deg);\n}\n}\n.info-panel-enter-active[data-v-4c87f9e8],\n.info-panel-leave-active[data-v-4c87f9e8] {\n  transition: all 0.3s ease;\n}\n.info-panel-enter[data-v-4c87f9e8],\n.info-panel-leave-to[data-v-4c87f9e8] {\n  opacity: 0;\n  transform: translateY(-100%);\n}\n.upload-progress[data-v-4c87f9e8] {\n  width: 100%;\n  padding-bottom: 10px;\n  position: relative;\n  z-index: 1;\n}\n.upload-progress .progress-wrapper[data-v-4c87f9e8] {\n  display: flex;\n}\n.upload-progress .progress-wrapper .cancel-icon[data-v-4c87f9e8] {\n  cursor: pointer;\n  padding: 0 13px;\n}\n.upload-progress .progress-wrapper .cancel-icon:hover line[data-v-4c87f9e8] {\n  stroke: #0066ff;\n}\n.upload-progress .progress-title[data-v-4c87f9e8] {\n  font-weight: 700;\n  text-align: center;\n}\n.upload-progress .progress-title span[data-v-4c87f9e8] {\n  font-size: 0.875em;\n}\n@media only screen and (max-width: 690px) {\n.upload-progress .progress-wrapper .cancel-icon[data-v-4c87f9e8] {\n    padding: 0 9px;\n}\n}\n@media (prefers-color-scheme: dark) {\n.progress-bar[data-v-4c87f9e8] {\n    background: #1e2024;\n}\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/ButtonUpload.vue?vue&type=style&index=0&id=1ec4da91&scoped=true&lang=scss&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FilesView/ButtonUpload.vue?vue&type=style&index=0&id=1ec4da91&scoped=true&lang=scss& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./ButtonUpload.vue?vue&type=style&index=0&id=1ec4da91&scoped=true&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/ButtonUpload.vue?vue&type=style&index=0&id=1ec4da91&scoped=true&lang=scss&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/ContextMenu.vue?vue&type=style&index=0&id=0c6958e0&scoped=true&lang=scss&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FilesView/ContextMenu.vue?vue&type=style&index=0&id=0c6958e0&scoped=true&lang=scss& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./ContextMenu.vue?vue&type=style&index=0&id=0c6958e0&scoped=true&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/ContextMenu.vue?vue&type=style&index=0&id=0c6958e0&scoped=true&lang=scss&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/CopyProgress.vue?vue&type=style&index=0&id=fb8a3000&scoped=true&lang=scss&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FilesView/CopyProgress.vue?vue&type=style&index=0&id=fb8a3000&scoped=true&lang=scss& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./CopyProgress.vue?vue&type=style&index=0&id=fb8a3000&scoped=true&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/CopyProgress.vue?vue&type=style&index=0&id=fb8a3000&scoped=true&lang=scss&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/DesktopSortingAndPreview.vue?vue&type=style&index=0&id=6684c497&scoped=true&lang=scss&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FilesView/DesktopSortingAndPreview.vue?vue&type=style&index=0&id=6684c497&scoped=true&lang=scss& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./DesktopSortingAndPreview.vue?vue&type=style&index=0&id=6684c497&scoped=true&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/DesktopSortingAndPreview.vue?vue&type=style&index=0&id=6684c497&scoped=true&lang=scss&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/DesktopToolbar.vue?vue&type=style&index=0&id=14323afd&scoped=true&lang=scss&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FilesView/DesktopToolbar.vue?vue&type=style&index=0&id=14323afd&scoped=true&lang=scss& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./DesktopToolbar.vue?vue&type=style&index=0&id=14323afd&scoped=true&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/DesktopToolbar.vue?vue&type=style&index=0&id=14323afd&scoped=true&lang=scss&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/EmptyMessage.vue?vue&type=style&index=0&id=f2442590&scoped=true&lang=scss&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FilesView/EmptyMessage.vue?vue&type=style&index=0&id=f2442590&scoped=true&lang=scss& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./EmptyMessage.vue?vue&type=style&index=0&id=f2442590&scoped=true&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/EmptyMessage.vue?vue&type=style&index=0&id=f2442590&scoped=true&lang=scss&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/EmptyPage.vue?vue&type=style&index=0&id=3497fe2e&scoped=true&lang=scss&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FilesView/EmptyPage.vue?vue&type=style&index=0&id=3497fe2e&scoped=true&lang=scss& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./EmptyPage.vue?vue&type=style&index=0&id=3497fe2e&scoped=true&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/EmptyPage.vue?vue&type=style&index=0&id=3497fe2e&scoped=true&lang=scss&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/FileBrowser.vue?vue&type=style&index=0&id=6409943e&scoped=true&lang=scss&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FilesView/FileBrowser.vue?vue&type=style&index=0&id=6409943e&scoped=true&lang=scss& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./FileBrowser.vue?vue&type=style&index=0&id=6409943e&scoped=true&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/FileBrowser.vue?vue&type=style&index=0&id=6409943e&scoped=true&lang=scss&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/FileItemGrid.vue?vue&type=style&index=0&id=2085e75a&scoped=true&lang=scss&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FilesView/FileItemGrid.vue?vue&type=style&index=0&id=2085e75a&scoped=true&lang=scss& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./FileItemGrid.vue?vue&type=style&index=0&id=2085e75a&scoped=true&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/FileItemGrid.vue?vue&type=style&index=0&id=2085e75a&scoped=true&lang=scss&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/FileItemList.vue?vue&type=style&index=0&id=2cfcc5ab&scoped=true&lang=scss&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FilesView/FileItemList.vue?vue&type=style&index=0&id=2cfcc5ab&scoped=true&lang=scss& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./FileItemList.vue?vue&type=style&index=0&id=2cfcc5ab&scoped=true&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/FileItemList.vue?vue&type=style&index=0&id=2cfcc5ab&scoped=true&lang=scss&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/MobileActionButton.vue?vue&type=style&index=0&id=95f75cf0&scoped=true&lang=scss&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FilesView/MobileActionButton.vue?vue&type=style&index=0&id=95f75cf0&scoped=true&lang=scss& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./MobileActionButton.vue?vue&type=style&index=0&id=95f75cf0&scoped=true&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/MobileActionButton.vue?vue&type=style&index=0&id=95f75cf0&scoped=true&lang=scss&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/MobileActionButtonUpload.vue?vue&type=style&index=0&id=b04b41ae&scoped=true&lang=scss&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FilesView/MobileActionButtonUpload.vue?vue&type=style&index=0&id=b04b41ae&scoped=true&lang=scss& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./MobileActionButtonUpload.vue?vue&type=style&index=0&id=b04b41ae&scoped=true&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/MobileActionButtonUpload.vue?vue&type=style&index=0&id=b04b41ae&scoped=true&lang=scss&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/MobileActions.vue?vue&type=style&index=0&id=18dc5ba6&scoped=true&lang=scss&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FilesView/MobileActions.vue?vue&type=style&index=0&id=18dc5ba6&scoped=true&lang=scss& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./MobileActions.vue?vue&type=style&index=0&id=18dc5ba6&scoped=true&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/MobileActions.vue?vue&type=style&index=0&id=18dc5ba6&scoped=true&lang=scss&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/MobileMultiSelectButton.vue?vue&type=style&index=0&id=1e539d57&scoped=true&lang=scss&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FilesView/MobileMultiSelectButton.vue?vue&type=style&index=0&id=1e539d57&scoped=true&lang=scss& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./MobileMultiSelectButton.vue?vue&type=style&index=0&id=1e539d57&scoped=true&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/MobileMultiSelectButton.vue?vue&type=style&index=0&id=1e539d57&scoped=true&lang=scss&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/MobileToolbar.vue?vue&type=style&index=0&id=005ba5ab&scoped=true&lang=scss&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FilesView/MobileToolbar.vue?vue&type=style&index=0&id=005ba5ab&scoped=true&lang=scss& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./MobileToolbar.vue?vue&type=style&index=0&id=005ba5ab&scoped=true&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/MobileToolbar.vue?vue&type=style&index=0&id=005ba5ab&scoped=true&lang=scss&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/Option.vue?vue&type=style&index=0&id=c9acfa9a&scoped=true&lang=scss&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FilesView/Option.vue?vue&type=style&index=0&id=c9acfa9a&scoped=true&lang=scss& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./Option.vue?vue&type=style&index=0&id=c9acfa9a&scoped=true&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/Option.vue?vue&type=style&index=0&id=c9acfa9a&scoped=true&lang=scss&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/OptionGroup.vue?vue&type=style&index=0&id=85830b88&scoped=true&lang=scss&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FilesView/OptionGroup.vue?vue&type=style&index=0&id=85830b88&scoped=true&lang=scss& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./OptionGroup.vue?vue&type=style&index=0&id=85830b88&scoped=true&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/OptionGroup.vue?vue&type=style&index=0&id=85830b88&scoped=true&lang=scss&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/ProgressBar.vue?vue&type=style&index=0&id=7fb97850&scoped=true&lang=scss&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FilesView/ProgressBar.vue?vue&type=style&index=0&id=7fb97850&scoped=true&lang=scss& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./ProgressBar.vue?vue&type=style&index=0&id=7fb97850&scoped=true&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/ProgressBar.vue?vue&type=style&index=0&id=7fb97850&scoped=true&lang=scss&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/SearchBar.vue?vue&type=style&index=0&id=23e12306&scoped=true&lang=scss&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FilesView/SearchBar.vue?vue&type=style&index=0&id=23e12306&scoped=true&lang=scss& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./SearchBar.vue?vue&type=style&index=0&id=23e12306&scoped=true&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/SearchBar.vue?vue&type=style&index=0&id=23e12306&scoped=true&lang=scss&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/ToolbarButtonUpload.vue?vue&type=style&index=0&id=8eb7bbc0&scoped=true&lang=scss&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FilesView/ToolbarButtonUpload.vue?vue&type=style&index=0&id=8eb7bbc0&scoped=true&lang=scss& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./ToolbarButtonUpload.vue?vue&type=style&index=0&id=8eb7bbc0&scoped=true&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/ToolbarButtonUpload.vue?vue&type=style&index=0&id=8eb7bbc0&scoped=true&lang=scss&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/UploadProgress.vue?vue&type=style&index=0&id=4c87f9e8&scoped=true&lang=scss&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FilesView/UploadProgress.vue?vue&type=style&index=0&id=4c87f9e8&scoped=true&lang=scss& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./UploadProgress.vue?vue&type=style&index=0&id=4c87f9e8&scoped=true&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/UploadProgress.vue?vue&type=style&index=0&id=4c87f9e8&scoped=true&lang=scss&");

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

/***/ "./node_modules/vue-infinite-scroll/vue-infinite-scroll.js":
/*!*****************************************************************!*\
  !*** ./node_modules/vue-infinite-scroll/vue-infinite-scroll.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function (global, factory) {
   true ? module.exports = factory() :
  undefined;
}(this, function () { 'use strict';

  var ctx = '@@InfiniteScroll';

  var throttle = function throttle(fn, delay) {
    var now, lastExec, timer, context, args; //eslint-disable-line

    var execute = function execute() {
      fn.apply(context, args);
      lastExec = now;
    };

    return function () {
      context = this;
      args = arguments;

      now = Date.now();

      if (timer) {
        clearTimeout(timer);
        timer = null;
      }

      if (lastExec) {
        var diff = delay - (now - lastExec);
        if (diff < 0) {
          execute();
        } else {
          timer = setTimeout(function () {
            execute();
          }, diff);
        }
      } else {
        execute();
      }
    };
  };

  var getScrollTop = function getScrollTop(element) {
    if (element === window) {
      return Math.max(window.pageYOffset || 0, document.documentElement.scrollTop);
    }

    return element.scrollTop;
  };

  var getComputedStyle = document.defaultView.getComputedStyle;

  var getScrollEventTarget = function getScrollEventTarget(element) {
    var currentNode = element;
    // bugfix, see http://w3help.org/zh-cn/causes/SD9013 and http://stackoverflow.com/questions/17016740/onscroll-function-is-not-working-for-chrome
    while (currentNode && currentNode.tagName !== 'HTML' && currentNode.tagName !== 'BODY' && currentNode.nodeType === 1) {
      var overflowY = getComputedStyle(currentNode).overflowY;
      if (overflowY === 'scroll' || overflowY === 'auto') {
        return currentNode;
      }
      currentNode = currentNode.parentNode;
    }
    return window;
  };

  var getVisibleHeight = function getVisibleHeight(element) {
    if (element === window) {
      return document.documentElement.clientHeight;
    }

    return element.clientHeight;
  };

  var getElementTop = function getElementTop(element) {
    if (element === window) {
      return getScrollTop(window);
    }
    return element.getBoundingClientRect().top + getScrollTop(window);
  };

  var isAttached = function isAttached(element) {
    var currentNode = element.parentNode;
    while (currentNode) {
      if (currentNode.tagName === 'HTML') {
        return true;
      }
      if (currentNode.nodeType === 11) {
        return false;
      }
      currentNode = currentNode.parentNode;
    }
    return false;
  };

  var doBind = function doBind() {
    if (this.binded) return; // eslint-disable-line
    this.binded = true;

    var directive = this;
    var element = directive.el;

    var throttleDelayExpr = element.getAttribute('infinite-scroll-throttle-delay');
    var throttleDelay = 200;
    if (throttleDelayExpr) {
      throttleDelay = Number(directive.vm[throttleDelayExpr] || throttleDelayExpr);
      if (isNaN(throttleDelay) || throttleDelay < 0) {
        throttleDelay = 200;
      }
    }
    directive.throttleDelay = throttleDelay;

    directive.scrollEventTarget = getScrollEventTarget(element);
    directive.scrollListener = throttle(doCheck.bind(directive), directive.throttleDelay);
    directive.scrollEventTarget.addEventListener('scroll', directive.scrollListener);

    this.vm.$on('hook:beforeDestroy', function () {
      directive.scrollEventTarget.removeEventListener('scroll', directive.scrollListener);
    });

    var disabledExpr = element.getAttribute('infinite-scroll-disabled');
    var disabled = false;

    if (disabledExpr) {
      this.vm.$watch(disabledExpr, function (value) {
        directive.disabled = value;
        if (!value && directive.immediateCheck) {
          doCheck.call(directive);
        }
      });
      disabled = Boolean(directive.vm[disabledExpr]);
    }
    directive.disabled = disabled;

    var distanceExpr = element.getAttribute('infinite-scroll-distance');
    var distance = 0;
    if (distanceExpr) {
      distance = Number(directive.vm[distanceExpr] || distanceExpr);
      if (isNaN(distance)) {
        distance = 0;
      }
    }
    directive.distance = distance;

    var immediateCheckExpr = element.getAttribute('infinite-scroll-immediate-check');
    var immediateCheck = true;
    if (immediateCheckExpr) {
      immediateCheck = Boolean(directive.vm[immediateCheckExpr]);
    }
    directive.immediateCheck = immediateCheck;

    if (immediateCheck) {
      doCheck.call(directive);
    }

    var eventName = element.getAttribute('infinite-scroll-listen-for-event');
    if (eventName) {
      directive.vm.$on(eventName, function () {
        doCheck.call(directive);
      });
    }
  };

  var doCheck = function doCheck(force) {
    var scrollEventTarget = this.scrollEventTarget;
    var element = this.el;
    var distance = this.distance;

    if (force !== true && this.disabled) return; //eslint-disable-line
    var viewportScrollTop = getScrollTop(scrollEventTarget);
    var viewportBottom = viewportScrollTop + getVisibleHeight(scrollEventTarget);

    var shouldTrigger = false;

    if (scrollEventTarget === element) {
      shouldTrigger = scrollEventTarget.scrollHeight - viewportBottom <= distance;
    } else {
      var elementBottom = getElementTop(element) - getElementTop(scrollEventTarget) + element.offsetHeight + viewportScrollTop;

      shouldTrigger = viewportBottom + distance >= elementBottom;
    }

    if (shouldTrigger && this.expression) {
      this.expression();
    }
  };

  var InfiniteScroll = {
    bind: function bind(el, binding, vnode) {
      el[ctx] = {
        el: el,
        vm: vnode.context,
        expression: binding.value
      };
      var args = arguments;
      el[ctx].vm.$on('hook:mounted', function () {
        el[ctx].vm.$nextTick(function () {
          if (isAttached(el)) {
            doBind.call(el[ctx], args);
          }

          el[ctx].bindTryCount = 0;

          var tryBind = function tryBind() {
            if (el[ctx].bindTryCount > 10) return; //eslint-disable-line
            el[ctx].bindTryCount++;
            if (isAttached(el)) {
              doBind.call(el[ctx], args);
            } else {
              setTimeout(tryBind, 50);
            }
          };

          tryBind();
        });
      });
    },
    unbind: function unbind(el) {
      if (el && el[ctx] && el[ctx].scrollEventTarget) el[ctx].scrollEventTarget.removeEventListener('scroll', el[ctx].scrollListener);
    }
  };

  var install = function install(Vue) {
    Vue.directive('InfiniteScroll', InfiniteScroll);
  };

  if (window.Vue) {
    window.infiniteScroll = InfiniteScroll;
    Vue.use(install); // eslint-disable-line
  }

  InfiniteScroll.install = install;

  return InfiniteScroll;

}));

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/ButtonUpload.vue?vue&type=template&id=1ec4da91&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FilesView/ButtonUpload.vue?vue&type=template&id=1ec4da91&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************/
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
  return _c(
    "label",
    {
      staticClass: "button file-input button-base",
      class: _vm.buttonStyle,
      attrs: { label: "file" }
    },
    [
      _vm._t("default"),
      _vm._v(" "),
      _c("input", {
        directives: [
          { name: "show", rawName: "v-show", value: false, expression: "false" }
        ],
        attrs: {
          accept: "*",
          id: "file",
          type: "file",
          name: "files[]",
          multiple: ""
        },
        on: { change: _vm.emmitFiles }
      })
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/ContextMenu.vue?vue&type=template&id=0c6958e0&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FilesView/ContextMenu.vue?vue&type=template&id=0c6958e0&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************/
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
  return _c(
    "div",
    {
      directives: [
        {
          name: "show",
          rawName: "v-show",
          value: _vm.isVisible || _vm.showFromPreview,
          expression: "isVisible || showFromPreview"
        }
      ],
      ref: "contextmenu",
      staticClass: "contextmenu",
      class: { filePreviewFixed: _vm.showFromPreview },
      style: { top: _vm.positionY + "px", left: _vm.positionX + "px" },
      on: { click: _vm.closeAndResetContextMenu }
    },
    [
      _vm.$isThisLocation(["trash", "trash-root"]) &&
      _vm.$checkPermission("master") &&
      !_vm.showFromPreview
        ? _c(
            "div",
            { staticClass: "menu-options", attrs: { id: "menu-list" } },
            [
              !_vm.multiSelected
                ? _c(
                    "OptionGroup",
                    [
                      _vm.item
                        ? _c("Option", {
                            attrs: {
                              title: _vm.$t("context_menu.restore"),
                              icon: "restore"
                            },
                            nativeOn: {
                              click: function($event) {
                                return _vm.restoreItem.apply(null, arguments)
                              }
                            }
                          })
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.item
                        ? _c("Option", {
                            attrs: {
                              title: _vm.$t("context_menu.delete"),
                              icon: "trash"
                            },
                            nativeOn: {
                              click: function($event) {
                                return _vm.deleteItem.apply(null, arguments)
                              }
                            }
                          })
                        : _vm._e(),
                      _vm._v(" "),
                      _c("Option", {
                        attrs: {
                          title: _vm.$t("context_menu.empty_trash"),
                          icon: "empty-trash"
                        },
                        nativeOn: {
                          click: function($event) {
                            return _vm.emptyTrash.apply(null, arguments)
                          }
                        }
                      })
                    ],
                    1
                  )
                : _vm._e(),
              _vm._v(" "),
              _vm.multiSelected
                ? _c(
                    "OptionGroup",
                    [
                      _vm.item
                        ? _c("Option", {
                            attrs: {
                              title: _vm.$t("context_menu.restore"),
                              icon: "restore"
                            },
                            nativeOn: {
                              click: function($event) {
                                return _vm.restoreItem.apply(null, arguments)
                              }
                            }
                          })
                        : _vm._e(),
                      _vm._v(" "),
                      _c("Option", {
                        attrs: {
                          title: _vm.$t("context_menu.delete"),
                          icon: "trash"
                        },
                        nativeOn: {
                          click: function($event) {
                            return _vm.deleteItem.apply(null, arguments)
                          }
                        }
                      }),
                      _vm._v(" "),
                      _c("Option", {
                        attrs: {
                          title: _vm.$t("context_menu.empty_trash"),
                          icon: "empty-trash"
                        },
                        nativeOn: {
                          click: function($event) {
                            return _vm.emptyTrash.apply(null, arguments)
                          }
                        }
                      })
                    ],
                    1
                  )
                : _vm._e()
            ],
            1
          )
        : _vm._e(),
      _vm._v(" "),
      _vm.$isThisLocation(["base", "participant_uploads", "latest"]) &&
      _vm.$checkPermission("master") &&
      !_vm.showFromPreview
        ? _c(
            "div",
            { staticClass: "menu-options", attrs: { id: "menu-list" } },
            [
              !_vm.$isThisLocation(["participant_uploads", "latest"]) &&
              !_vm.item
                ? _c(
                    "OptionGroup",
                    [
                      _c("Option", {
                        attrs: {
                          title: _vm.$t("context_menu.create_folder"),
                          icon: "create-folder"
                        },
                        nativeOn: {
                          click: function($event) {
                            return _vm.createFolder.apply(null, arguments)
                          }
                        }
                      }),
                      _vm._v(" "),
                      _vm.canPaste && !_vm.isMenu
                        ? _c("Option", {
                            attrs: { title: "Paste", icon: "paste" },
                            nativeOn: {
                              click: function($event) {
                                return _vm.pasteItem.apply(null, arguments)
                              }
                            }
                          })
                        : _vm._e()
                    ],
                    1
                  )
                : _vm._e(),
              _vm._v(" "),
              _vm.item && !_vm.multiSelected
                ? _c(
                    "OptionGroup",
                    [
                      _c("Option", {
                        attrs: {
                          title: _vm.$t("context_menu.rename"),
                          icon: "rename"
                        },
                        nativeOn: {
                          click: function($event) {
                            return _vm.renameItem.apply(null, arguments)
                          }
                        }
                      }),
                      _vm._v(" "),
                      _c("Option", {
                        attrs: {
                          title: _vm.$t("context_menu.delete"),
                          icon: "trash"
                        },
                        nativeOn: {
                          click: function($event) {
                            return _vm.deleteItem.apply(null, arguments)
                          }
                        }
                      }),
                      _vm._v(" "),
                      _c("Option", {
                        attrs: { title: "Copy", icon: "copy" },
                        nativeOn: {
                          click: function($event) {
                            return _vm.copyOrcutItem(false)
                          }
                        }
                      }),
                      _vm._v(" "),
                      _c("Option", {
                        attrs: { title: "Cut", icon: "cut" },
                        nativeOn: {
                          click: function($event) {
                            return _vm.copyOrcutItem(true)
                          }
                        }
                      }),
                      _vm._v(" "),
                      _vm.canPaste && _vm.isFolder
                        ? _c("Option", {
                            attrs: { title: "Paste", icon: "paste" },
                            nativeOn: {
                              click: function($event) {
                                return _vm.pasteItem.apply(null, arguments)
                              }
                            }
                          })
                        : _vm._e(),
                      _vm._v(" "),
                      !_vm.isFolder
                        ? _c("Option", {
                            attrs: {
                              title: _vm.$t("context_menu.download"),
                              icon: "download"
                            },
                            nativeOn: {
                              click: function($event) {
                                return _vm.downloadItem.apply(null, arguments)
                              }
                            }
                          })
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.isFolder
                        ? _c("Option", {
                            attrs: {
                              title: _vm.$t("context_menu.zip_folder"),
                              icon: "zip-folder"
                            },
                            nativeOn: {
                              click: function($event) {
                                return _vm.downloadFolder.apply(null, arguments)
                              }
                            }
                          })
                        : _vm._e()
                    ],
                    1
                  )
                : _vm._e(),
              _vm._v(" "),
              _vm.item && _vm.multiSelected
                ? _c(
                    "OptionGroup",
                    [
                      _c("Option", {
                        attrs: {
                          title: _vm.$t("context_menu.delete"),
                          icon: "trash"
                        },
                        nativeOn: {
                          click: function($event) {
                            return _vm.deleteItem.apply(null, arguments)
                          }
                        }
                      }),
                      _vm._v(" "),
                      _c("Option", {
                        attrs: { title: "Copy", icon: "copy" },
                        nativeOn: {
                          click: function($event) {
                            return _vm.copyOrcutItem(false)
                          }
                        }
                      }),
                      _vm._v(" "),
                      _c("Option", {
                        attrs: { title: "Cut", icon: "cut" },
                        nativeOn: {
                          click: function($event) {
                            return _vm.copyOrcutItem(true)
                          }
                        }
                      }),
                      _vm._v(" "),
                      _vm.onlyMediaSelected
                        ? _c("Option", {
                            attrs: { title: "Add to Page", icon: "add" },
                            nativeOn: {
                              click: function($event) {
                                return _vm.AddToPage.apply(null, arguments)
                              }
                            }
                          })
                        : _vm._e()
                    ],
                    1
                  )
                : _vm._e()
            ],
            1
          )
        : _vm._e()
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/CopyProgress.vue?vue&type=template&id=fb8a3000&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FilesView/CopyProgress.vue?vue&type=template&id=fb8a3000&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************/
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
  return _c("transition", { attrs: { name: "info-panel" } }, [
    _c("div", { staticClass: "copy-progress" }, [
      _c("div", { staticClass: "progress-title" }, [
        _vm.copyItemQueue.length > 0
          ? _c("span", [
              _vm._v(
                "\n                    Copying " +
                  _vm._s(_vm.copyProgress) +
                  "% - " +
                  _vm._s(_vm.copiedItems) +
                  "/" +
                  _vm._s(_vm.itemsInCopyQueueTotal) +
                  "\n                    "
              )
            ])
          : _vm._e()
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "progress-wrapper" })
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/DesktopSortingAndPreview.vue?vue&type=template&id=6684c497&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FilesView/DesktopSortingAndPreview.vue?vue&type=template&id=6684c497&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************/
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
  return _vm.isVisible
    ? _c(
        "div",
        { staticClass: "sorting-preview" },
        [_c("SortingAndPreviewMenu")],
        1
      )
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/DesktopToolbar.vue?vue&type=template&id=14323afd&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FilesView/DesktopToolbar.vue?vue&type=template&id=14323afd&scoped=true& ***!
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
  return _c(
    "div",
    { ref: "desktoptoolbar", attrs: { id: "desktop-toolbar" } },
    [
      _c(
        "div",
        {
          staticClass: "toolbar-wrapper",
          on: {
            drop: function($event) {
              $event.stopPropagation()
              $event.preventDefault()
              return _vm.dropUpload($event)
            }
          }
        },
        [
          _vm.homeDirectory
            ? _c("div", { staticClass: "toolbar-go-back" }, [
                _c(
                  "div",
                  { staticClass: "go-back-button", on: { click: _vm.goBack } },
                  [
                    _c("chevron-left-icon", {
                      staticClass: "icon-back",
                      class: { "is-active": _vm.browseHistory.length > 1 },
                      attrs: { size: "17" }
                    }),
                    _vm._v(" "),
                    _c("span", { staticClass: "back-directory-title" }, [
                      _vm._v(
                        "\n        " + _vm._s(_vm.directoryName) + "\n      "
                      )
                    ]),
                    _vm._v(" "),
                    _vm.browseHistory.length > 1 &&
                    _vm.$isThisLocation(["base", "public"])
                      ? _c(
                          "span",
                          {
                            staticClass: "folder-options",
                            attrs: { id: "folder-actions" },
                            on: {
                              click: function($event) {
                                $event.stopPropagation()
                                return _vm.folderActions.apply(null, arguments)
                              }
                            }
                          },
                          [
                            _c("more-horizontal-icon", {
                              staticClass: "icon-more",
                              attrs: { size: "14" }
                            })
                          ],
                          1
                        )
                      : _vm._e()
                  ],
                  1
                )
              ])
            : _vm._e(),
          _vm._v(" "),
          _c("div", { staticClass: "toolbar-tools" }, [
            _c(
              "div",
              { staticClass: "toolbar-button-wrapper" },
              [_c("SearchBar")],
              1
            ),
            _vm._v(" "),
            _vm.$checkPermission(["master", "editor"])
              ? _c(
                  "div",
                  { staticClass: "toolbar-button-wrapper" },
                  [
                    _c("ToolbarButtonUpload", {
                      class: {
                        "is-inactive": _vm.canUploadInView || !_vm.hasCapacity
                      },
                      attrs: { action: _vm.$t("actions.upload") }
                    }),
                    _vm._v(" "),
                    _c("ToolbarButton", {
                      class: { "is-inactive": _vm.canCreateFolderInView },
                      attrs: {
                        source: "folder-plus",
                        action: _vm.$t("actions.create_folder")
                      },
                      nativeOn: {
                        click: function($event) {
                          return _vm.createFolder.apply(null, arguments)
                        }
                      }
                    })
                  ],
                  1
                )
              : _vm._e(),
            _vm._v(" "),
            _vm.$checkPermission(["master", "editor"]) && !_vm.$isMobile()
              ? _c(
                  "div",
                  { staticClass: "toolbar-button-wrapper" },
                  [
                    _c("ToolbarButton", {
                      class: { "is-inactive": _vm.canDeleteInView },
                      attrs: {
                        source: "trash",
                        action: _vm.$t("actions.delete")
                      },
                      nativeOn: {
                        click: function($event) {
                          return _vm.deleteItem.apply(null, arguments)
                        }
                      }
                    })
                  ],
                  1
                )
              : _vm._e(),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "toolbar-button-wrapper" },
              [
                _c("ToolbarButton", {
                  staticClass: "preview-sorting",
                  class: { active: _vm.sortingAndPreview },
                  attrs: {
                    source: "preview-sorting",
                    action: _vm.$t("actions.sorting_view")
                  },
                  nativeOn: {
                    click: function($event) {
                      $event.stopPropagation()
                      _vm.sortingAndPreview = !_vm.sortingAndPreview
                    }
                  }
                })
              ],
              1
            )
          ])
        ]
      ),
      _vm._v(" "),
      _c("UploadProgress"),
      _vm._v(" "),
      _c("CopyProgress")
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/DragSelect.vue?vue&type=template&id=15fa290e&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FilesView/DragSelect.vue?vue&type=template&id=15fa290e& ***!
  \***********************************************************************************************************************************************************************************************************************/
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
  return _c(
    "div",
    {
      ref: "container",
      staticStyle: {
        position: "relative",
        "user-select": "none",
        "touch-action": "none",
        height: "100%"
      },
      attrs: { id: "container" }
    },
    [_vm._t("default", null, null, { selected: _vm.intersected })],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/EmptyMessage.vue?vue&type=template&id=f2442590&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FilesView/EmptyMessage.vue?vue&type=template&id=f2442590&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "empty-message" }, [
    _c(
      "div",
      { staticClass: "message" },
      [
        _vm.icon === "eye-off"
          ? _c("eye-off-icon", { staticClass: "icon", attrs: { size: "36" } })
          : _vm._e(),
        _vm._v(" "),
        _c("p", [_vm._v(_vm._s(_vm.message))])
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/EmptyPage.vue?vue&type=template&id=3497fe2e&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FilesView/EmptyPage.vue?vue&type=template&id=3497fe2e&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************/
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
  return _vm.isLoading || _vm.isEmpty
    ? _c(
        "div",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: _vm.isEmptyPageVisible,
              expression: "isEmptyPageVisible"
            }
          ],
          staticClass: "empty-page"
        },
        [
          _c("div", { staticClass: "empty-state" }, [
            _vm.$isThisLocation(["shared"]) && !_vm.isLoading
              ? _c("div", { staticClass: "text-content" }, [
                  _c("h1", { staticClass: "title" }, [
                    _vm._v(_vm._s(_vm.$t("shared.empty_shared")))
                  ])
                ])
              : _vm._e(),
            _vm._v(" "),
            _vm.$isThisLocation(["trash", "trash-root"]) && !_vm.isLoading
              ? _c("div", { staticClass: "text-content" }, [
                  _c("h1", { staticClass: "title" }, [
                    _vm._v("This folder is empty.")
                  ])
                ])
              : _vm._e(),
            _vm._v(" "),
            _vm.$isThisLocation(["participant_uploads"]) && !_vm.isLoading
              ? _c("div", { staticClass: "text-content" }, [
                  _c("h1", { staticClass: "title" }, [
                    _vm._v(_vm._s(_vm.$t("messages.nothing_from_participants")))
                  ])
                ])
              : _vm._e(),
            _vm._v(" "),
            _vm.$isThisLocation(["base", "public", "latest"]) && !_vm.isLoading
              ? _c(
                  "div",
                  { staticClass: "text-content" },
                  [
                    _c("h1", { staticClass: "title" }, [
                      _vm._v(_vm._s(_vm.$t("empty_page.title")))
                    ]),
                    _vm._v(" "),
                    _vm.$checkPermission(["master", "editor"])
                      ? _c("p", { staticClass: "description" }, [
                          _vm._v(_vm._s(_vm.$t("empty_page.description")))
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.$checkPermission(["master", "editor"])
                      ? _c(
                          "ButtonUpload",
                          { attrs: { "button-style": "theme" } },
                          [
                            _vm._v(
                              "\n                " +
                                _vm._s(_vm.$t("empty_page.call_to_action")) +
                                "\n            "
                            )
                          ]
                        )
                      : _vm._e()
                  ],
                  1
                )
              : _vm._e(),
            _vm._v(" "),
            _vm.isLoading
              ? _c("div", { staticClass: "text-content" }, [_c("Spinner")], 1)
              : _vm._e()
          ])
        ]
      )
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/FileBrowser.vue?vue&type=template&id=6409943e&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FilesView/FileBrowser.vue?vue&type=template&id=6409943e&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************/
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
  return _c(
    "div",
    {
      directives: [
        {
          name: "shortkey",
          rawName: "v-shortkey",
          value: {
            copy: ["ctrl", "c"],
            cut: ["ctrl", "x"],
            paste: ["ctrl", "v"],
            selectAll: ["ctrl", "a"],
            rename: ["f2"]
          },
          expression:
            "{copy: ['ctrl', 'c'], cut: ['ctrl', 'x'], paste:['ctrl', 'v'], selectAll: ['ctrl', 'a'], rename: ['f2']}"
        }
      ],
      ref: "fileBrowser",
      staticClass: "file-content",
      class: {
        "is-offset": _vm.filesInQueueTotal > 0 || _vm.copyItemQueue.length > 0,
        "is-dragging": _vm.isDragging
      },
      attrs: { id: "file-content-id", tabindex: "-1" },
      on: {
        dragover: [
          function($event) {
            $event.preventDefault()
          },
          _vm.dragEnter
        ],
        drop: function($event) {
          $event.stopPropagation()
          $event.preventDefault()
          return _vm.dropUpload($event)
        },
        dragleave: _vm.dragLeave,
        keydown: [
          function($event) {
            if (
              !$event.type.indexOf("key") &&
              _vm._k($event.keyCode, "delete", [8, 46], $event.key, [
                "Backspace",
                "Delete",
                "Del"
              ])
            ) {
              return null
            }
            return _vm.deleteItems($event)
          },
          function($event) {
            if (
              !$event.type.indexOf("key") &&
              _vm._k($event.keyCode, "esc", 27, $event.key, ["Esc", "Escape"])
            ) {
              return null
            }
            return _vm.releaseClipborad.apply(null, arguments)
          }
        ],
        shortkey: _vm.onShortKey
      }
    },
    [
      _c(
        "div",
        {
          ref: "fileContainer",
          staticClass: "files-container",
          class: {
            "is-fileinfo-visible":
              _vm.fileInfoVisible && !_vm.$isMinimalScale(),
            "mobile-multi-select": _vm.mobileMultiSelect
          },
          on: {
            "&scroll": function($event) {
              return _vm.onScroll.apply(null, arguments)
            },
            scroll: _vm.onScroll
          }
        },
        [
          _vm.isList
            ? _c(
                "div",
                {
                  staticClass: "file-list-wrapper",
                  staticStyle: { height: "100%" }
                },
                [
                  _c(
                    "div",
                    { staticStyle: { height: "100%" } },
                    [
                      _c(
                        "DragSelect",
                        {
                          attrs: { attribute: "attr" },
                          on: {
                            startDrag: _vm.onLMouseClicked,
                            change: function($event) {
                              return _vm.onChange($event)
                            },
                            clickoutside: _vm.filesContainerClick
                          }
                        },
                        [
                          _c(
                            "transition-group",
                            {
                              staticClass: "file-list",
                              class: _vm.FilePreviewType,
                              attrs: { name: "file", tag: "section" }
                            },
                            _vm._l(_vm.data, function(item) {
                              return _c("FileItemList", {
                                key: item.unique_id,
                                staticClass: "file-item",
                                class: _vm.dragSelected(item)
                                  ? "drag-selected"
                                  : "",
                                attrs: { item: item },
                                on: {
                                  dragstart: function($event) {
                                    return _vm.dragStart(item)
                                  }
                                },
                                nativeOn: {
                                  drop: function($event) {
                                    $event.stopPropagation()
                                    $event.preventDefault()
                                    return _vm.dragFinish(item, $event)
                                  },
                                  contextmenu: function($event) {
                                    $event.preventDefault()
                                    return _vm.contextMenu($event, item)
                                  }
                                }
                              })
                            }),
                            1
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                ]
              )
            : _vm._e(),
          _vm._v(" "),
          _vm.isGrid
            ? _c(
                "div",
                {
                  staticClass: "file-grid-wrapper",
                  staticStyle: { height: "100%" }
                },
                [
                  _c(
                    "div",
                    { staticStyle: { height: "100%" } },
                    [
                      _c(
                        "DragSelect",
                        {
                          attrs: { attribute: "attr" },
                          on: {
                            startDrag: _vm.onLMouseClicked,
                            change: function($event) {
                              return _vm.onChange($event)
                            },
                            clickoutside: _vm.filesContainerClick
                          }
                        },
                        [
                          _c(
                            "transition-group",
                            {
                              staticClass: "file-list",
                              class: _vm.FilePreviewType,
                              attrs: { name: "file", tag: "section" }
                            },
                            _vm._l(_vm.data, function(item) {
                              return _c("FileItemGrid", {
                                key: item.unique_id,
                                staticClass: "file-item",
                                class: _vm.dragSelected(item)
                                  ? "drag-selected"
                                  : "",
                                attrs: { source: item, attr: item.unique_id },
                                on: {
                                  dragstart: function($event) {
                                    return _vm.dragStart(item)
                                  }
                                },
                                nativeOn: {
                                  drop: function($event) {
                                    $event.preventDefault()
                                    return _vm.dragFinish(item, $event)
                                  },
                                  contextmenu: function($event) {
                                    $event.preventDefault()
                                    return _vm.contextMenu($event, item)
                                  }
                                }
                              })
                            }),
                            1
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                ]
              )
            : _vm._e(),
          _vm._v(" "),
          !_vm.isSearching ? _c("EmptyPage") : _vm._e(),
          _vm._v(" "),
          _vm.isSearching && _vm.isEmpty
            ? _c("EmptyMessage", {
                attrs: {
                  message: _vm.$t("messages.nothing_was_found"),
                  icon: "eye-slash"
                }
              })
            : _vm._e()
        ],
        1
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/FileItemGrid.vue?vue&type=template&id=2085e75a&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FilesView/FileItemGrid.vue?vue&type=template&id=2085e75a&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************/
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
  return _c(
    "div",
    {
      staticClass: "file-wrapper",
      attrs: { spellcheck: "false" },
      on: { click: _vm.clickedItem, dblclick: _vm.goToItem }
    },
    [
      _c(
        "div",
        {
          staticClass: "file-source",
          class: {
            "is-clicked": _vm.isClicked,
            "no-clicked": !_vm.isClicked && this.$isMobile(),
            "is-dragenter": _vm.area,
            "is-cutted": _vm.isCutted
          },
          attrs: { draggable: _vm.canDrag },
          on: {
            mousedown: _vm.onMouseDown,
            dragstart: function($event) {
              return _vm.$emit("dragstart")
            },
            drop: function($event) {
              _vm.drop()
              _vm.area = false
            },
            dragleave: _vm.dragLeave,
            dragover: function($event) {
              $event.preventDefault()
              return _vm.dragEnter.apply(null, arguments)
            }
          }
        },
        [
          _c(
            "div",
            { staticClass: "icon-source" },
            [
              _vm.multiSelectMode
                ? _c(
                    "div",
                    {
                      class: {
                        "check-select-folder": this.source.type === "folder",
                        "check-select": this.source.type !== "folder"
                      }
                    },
                    [
                      _c(
                        "div",
                        {
                          staticClass: "select-box",
                          class: { "select-box-active": _vm.isClicked }
                        },
                        [
                          _vm.isClicked
                            ? _c("CheckIcon", {
                                staticClass: "icon",
                                attrs: { size: "17" }
                              })
                            : _vm._e()
                        ],
                        1
                      )
                    ]
                  )
                : _vm._e(),
              _vm._v(" "),
              _vm.isFile || (_vm.isImage && !_vm.source.thumbnail)
                ? _c("span", { staticClass: "file-icon-text fileTypePlain" }, [
                    this.source.mimetype === "postscript"
                      ? _c("div", { staticClass: "fileTypeIcon fileTypeEps" }, [
                          _c("img", {
                            staticClass: "icon",
                            attrs: { src: __webpack_require__(/*! ./images/illust.svg */ "./resources/js/components/FilesView/images/illust.svg") }
                          })
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    this.source.mimetype === "vnd.adobe.photoshop"
                      ? _c("div", { staticClass: "fileTypeIcon fileTypePsd" }, [
                          _c("img", {
                            staticClass: "icon",
                            attrs: { src: __webpack_require__(/*! ./images/photoshop.svg */ "./resources/js/components/FilesView/images/photoshop.svg") }
                          })
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    this.source.mimetype ===
                    "vnd.openxmlformats-officedocument.presentationml.presentation"
                      ? _c(
                          "div",
                          { staticClass: "fileTypeIcon fileTypePptx" },
                          [
                            _c("img", {
                              staticClass: "icon",
                              attrs: {
                                src: __webpack_require__(/*! ./images/msPowerPoint.svg */ "./resources/js/components/FilesView/images/msPowerPoint.svg")
                              }
                            })
                          ]
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    this.source.mimetype ===
                    "vnd.openxmlformats-officedocument.spreadsheetml.sheet"
                      ? _c(
                          "div",
                          { staticClass: "fileTypeIcon fileTypeXlsx" },
                          [
                            _c("img", {
                              staticClass: "icon",
                              attrs: { src: __webpack_require__(/*! ./images/msExcel.svg */ "./resources/js/components/FilesView/images/msExcel.svg") }
                            })
                          ]
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    this.source.mimetype ===
                    "vnd.openxmlformats-officedocument.wordprocessingml.document"
                      ? _c(
                          "div",
                          { staticClass: "fileTypeIcon fileTypeDocx" },
                          [
                            _c("img", {
                              staticClass: "icon",
                              attrs: { src: __webpack_require__(/*! ./images/msWord.svg */ "./resources/js/components/FilesView/images/msWord.svg") }
                            })
                          ]
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    this.source.mimetype === "pdf"
                      ? _c("div", { staticClass: "fileTypeIcon fileTypePdf" }, [
                          _c("img", {
                            staticClass: "icon",
                            attrs: { src: __webpack_require__(/*! ./images/acrobat.svg */ "./resources/js/components/FilesView/images/acrobat.svg") }
                          })
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    this.source.mimetype === "zip"
                      ? _c("div", { staticClass: "fileTypeIcon fileTypeZip" }, [
                          _c("img", {
                            staticClass: "icon",
                            attrs: { src: __webpack_require__(/*! ./images/zip.svg */ "./resources/js/components/FilesView/images/zip.svg") }
                          })
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    this.source.mimetype === "hic"
                      ? _c("div", { staticClass: "fileTypeIcon fileTypeHic" }, [
                          _c("img", {
                            staticClass: "icon",
                            attrs: { src: __webpack_require__(/*! ./images/hiC.svg */ "./resources/js/components/FilesView/images/hiC.svg") }
                          })
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    this.source.mimetype === "vnd.microsoft.icon"
                      ? _c("div", { staticClass: "fileTypeIcon fileTypeIco" })
                      : _vm._e(),
                    _vm._v(" "),
                    this.source.mimetype === "mp4"
                      ? _c(
                          "div",
                          { staticClass: "fileTypeIcon fileTypeVideo" },
                          [
                            _c("img", {
                              staticClass: "icon",
                              attrs: { src: __webpack_require__(/*! ./images/video.svg */ "./resources/js/components/FilesView/images/video.svg") }
                            })
                          ]
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    this.source.mimetype === "x-msvideo"
                      ? _c(
                          "div",
                          { staticClass: "fileTypeIcon fileTypeVideo" },
                          [
                            _c("img", {
                              staticClass: "icon",
                              attrs: { src: __webpack_require__(/*! ./images/video.svg */ "./resources/js/components/FilesView/images/video.svg") }
                            })
                          ]
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    this.source.mimetype === "quicktime"
                      ? _c(
                          "div",
                          { staticClass: "fileTypeIcon fileTypeVideo" },
                          [
                            _c("img", {
                              staticClass: "icon",
                              attrs: { src: __webpack_require__(/*! ./images/video.svg */ "./resources/js/components/FilesView/images/video.svg") }
                            })
                          ]
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    this.source.mimetype === "webm"
                      ? _c(
                          "div",
                          { staticClass: "fileTypeIcon fileTypeAudio" },
                          [
                            _c("img", {
                              staticClass: "icon",
                              attrs: { src: __webpack_require__(/*! ./images/video.svg */ "./resources/js/components/FilesView/images/video.svg") }
                            })
                          ]
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    this.source.mimetype === "mp3"
                      ? _c(
                          "div",
                          { staticClass: "fileTypeIcon fileTypeAudio" },
                          [
                            _c("img", {
                              staticClass: "icon",
                              attrs: { src: __webpack_require__(/*! ./images/audio.svg */ "./resources/js/components/FilesView/images/audio.svg") }
                            })
                          ]
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    this.source.mimetype === "x-wav"
                      ? _c(
                          "div",
                          { staticClass: "fileTypeIcon fileTypeAudio" },
                          [
                            _c("img", {
                              staticClass: "icon",
                              attrs: { src: __webpack_require__(/*! ./images/audio.svg */ "./resources/js/components/FilesView/images/audio.svg") }
                            })
                          ]
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    this.source.mimetype === "x-ms-asf"
                      ? _c(
                          "div",
                          { staticClass: "fileTypeIcon fileTypeAudio" },
                          [
                            _c("img", {
                              staticClass: "icon",
                              attrs: { src: __webpack_require__(/*! ./images/audio.svg */ "./resources/js/components/FilesView/images/audio.svg") }
                            })
                          ]
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    this.source.mimetype === "x-aiff"
                      ? _c(
                          "div",
                          { staticClass: "fileTypeIcon fileTypeAudio" },
                          [
                            _c("img", {
                              staticClass: "icon",
                              attrs: { src: __webpack_require__(/*! ./images/audio.svg */ "./resources/js/components/FilesView/images/audio.svg") }
                            })
                          ]
                        )
                      : _vm._e()
                  ])
                : _vm._e(),
              _vm._v(" "),
              _vm.isFile || (_vm.isImage && !_vm.source.thumbnail)
                ? _c("FontAwesomeIcon", {
                    staticClass: "file-icon",
                    class: {
                      fileTypeEps: this.source.mimetype === "postscript",
                      fileTypePsd:
                        this.source.mimetype === "vnd.adobe.photoshop",
                      fileTypeExe: this.source.mimetype === "x-dosexec",
                      fileTypePptx:
                        this.source.mimetype ===
                        "vnd.openxmlformats-officedocument.presentationml.presentation",
                      fileTypeXlsx:
                        this.source.mimetype ===
                        "vnd.openxmlformats-officedocument.spreadsheetml.sheet",
                      fileTypeDocx:
                        this.source.mimetype ===
                        "vnd.openxmlformats-officedocument.wordprocessingml.document",
                      fileTypePdf: this.source.mimetype === "pdf",
                      fileTypeZip: this.source.mimetype === "zip",
                      fileTypeHic: this.source.mimetype === "hic",
                      fileTypeVideo:
                        this.source.mimetype === "mp4" ||
                        this.source.mimetype === "x-msvideo" ||
                        this.source.mimetype === "quicktime" ||
                        this.source.mimetype === "webm",
                      fileTypeAudio:
                        this.source.mimetype === "mp3" ||
                        this.source.mimetype === "x-wav" ||
                        this.source.mimetype === "x-ms-asf" ||
                        this.source.mimetype === "x-aiff"
                    },
                    attrs: { icon: "file" }
                  })
                : _vm._e(),
              _vm._v(" "),
              _vm.isImage && _vm.source.thumbnail
                ? _c("img", {
                    staticClass: "image",
                    style: { width: _vm.thumbnailwidth },
                    attrs: {
                      loading: "lazy",
                      src: _vm.source.thumbnail,
                      alt: _vm.source.name
                    }
                  })
                : _vm._e(),
              _vm._v(" "),
              _vm.isFolder
                ? _c("FolderIcon", {
                    staticClass: "folder",
                    attrs: { item: _vm.source, location: "file-source-grid" }
                  })
                : _vm._e()
            ],
            1
          ),
          _vm._v(" "),
          _c("div", { staticClass: "source-name" }, [
            _c("b", {
              ref: _vm.source.unique_id,
              staticClass: "name",
              attrs: {
                id: _vm.itemid,
                contenteditable: _vm.canEditName,
                allow: "clipboard-read; clipboard-write"
              },
              domProps: { innerHTML: _vm._s(_vm.itemName) },
              on: {
                input: _vm.renameItem,
                keydown: [
                  function($event) {
                    if (
                      !$event.type.indexOf("key") &&
                      _vm._k($event.keyCode, "delete", [8, 46], $event.key, [
                        "Backspace",
                        "Delete",
                        "Del"
                      ])
                    ) {
                      return null
                    }
                    $event.stopPropagation()
                  },
                  function($event) {
                    if (
                      !$event.type.indexOf("key") &&
                      _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
                    ) {
                      return null
                    }
                    return _vm.endRename.apply(null, arguments)
                  }
                ],
                click: function($event) {
                  $event.stopPropagation()
                },
                focus: _vm.onFocus,
                blur: _vm.lostNameFocus
              }
            }),
            _vm._v(" "),
            _c("div", { staticClass: "source-info" }, [
              _vm.$checkPermission("master") && _vm.source.shared
                ? _c(
                    "div",
                    { staticClass: "source-shared" },
                    [
                      _c("link-icon", {
                        staticClass: "shared-icon",
                        attrs: { size: "12" }
                      })
                    ],
                    1
                  )
                : _vm._e(),
              _vm._v(" "),
              _vm.$checkPermission("master") &&
              _vm.source.user_scope !== "master"
                ? _c(
                    "div",
                    { staticClass: "source-shared" },
                    [
                      _c("user-plus-icon", {
                        staticClass: "shared-icon",
                        attrs: { size: "12" }
                      })
                    ],
                    1
                  )
                : _vm._e(),
              _vm._v(" "),
              !_vm.isFolder
                ? _c("span", { staticClass: "source-size" }, [
                    _vm._v(_vm._s(_vm.source.filesize))
                  ])
                : _vm._e(),
              _vm._v(" "),
              _vm.isFolder
                ? _c("span", { staticClass: "source-length" }, [
                    _vm._v(
                      "\n                        " +
                        _vm._s(
                          _vm.folderItems == 0
                            ? _vm.$t("folder.empty")
                            : _vm.$tc("folder.item_counts", _vm.folderItems)
                        ) +
                        "\n\t\t\t\t    "
                    )
                  ])
                : _vm._e()
            ])
          ]),
          _vm._v(" "),
          _vm.$isMobile() && !_vm.multiSelectMode && _vm.canShowMobileOptions
            ? _c(
                "span",
                {
                  staticClass: "show-actions",
                  on: {
                    mousedown: function($event) {
                      $event.stopPropagation()
                      return _vm.showItemActions.apply(null, arguments)
                    }
                  }
                },
                [
                  _c("FontAwesomeIcon", {
                    staticClass: "icon-action",
                    attrs: { icon: "ellipsis-h" }
                  })
                ],
                1
              )
            : _vm._e()
        ]
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/FileItemList.vue?vue&type=template&id=2cfcc5ab&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FilesView/FileItemList.vue?vue&type=template&id=2cfcc5ab&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************/
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
  return _c(
    "div",
    {
      staticClass: "file-wrapper",
      attrs: { spellcheck: "false" },
      on: {
        mousedown: _vm.onMouseDown,
        click: _vm.clickedItem,
        dblclick: _vm.goToItem
      }
    },
    [
      _c(
        "div",
        {
          staticClass: "file-item",
          class: {
            "is-clicked": _vm.isClicked,
            "no-clicked": !_vm.isClicked && this.$isMobile(),
            "is-dragenter": _vm.area,
            "is-cutted": _vm.isCutted
          },
          attrs: { draggable: _vm.canDrag },
          on: {
            dragstart: function($event) {
              return _vm.$emit("dragstart")
            },
            drop: function($event) {
              return _vm.drop()
            },
            dragleave: _vm.dragLeave,
            dragover: function($event) {
              $event.preventDefault()
              return _vm.dragEnter.apply(null, arguments)
            }
          }
        },
        [
          _c("transition", { attrs: { name: "slide-from-left" } }, [
            _vm.mobileMultiSelect
              ? _c("div", { staticClass: "check-select" }, [
                  _c(
                    "div",
                    {
                      staticClass: "select-box",
                      class: { "select-box-active": _vm.isClicked }
                    },
                    [
                      _vm.isClicked
                        ? _c("CheckIcon", {
                            staticClass: "icon",
                            attrs: { size: "17" }
                          })
                        : _vm._e()
                    ],
                    1
                  )
                ])
              : _vm._e()
          ]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "icon-item" },
            [
              _vm.isFile || (_vm.isImage && !_vm.item.thumbnail)
                ? _c("span", { staticClass: "file-icon-text fileTypePlain" }, [
                    this.item.mimetype === "postscript"
                      ? _c("div", { staticClass: "fileTypeIcon fileTypeEps" }, [
                          _c("img", {
                            staticClass: "icon",
                            attrs: { src: __webpack_require__(/*! ./images/illust.svg */ "./resources/js/components/FilesView/images/illust.svg") }
                          })
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    this.item.mimetype === "vnd.adobe.photoshop"
                      ? _c("div", { staticClass: "fileTypeIcon fileTypePsd" }, [
                          _c("img", {
                            staticClass: "icon",
                            attrs: { src: __webpack_require__(/*! ./images/photoshop.svg */ "./resources/js/components/FilesView/images/photoshop.svg") }
                          })
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    this.item.mimetype ===
                    "vnd.openxmlformats-officedocument.presentationml.presentation"
                      ? _c(
                          "div",
                          { staticClass: "fileTypeIcon fileTypePptx" },
                          [
                            _c("img", {
                              staticClass: "icon",
                              attrs: {
                                src: __webpack_require__(/*! ./images/msPowerPoint.svg */ "./resources/js/components/FilesView/images/msPowerPoint.svg")
                              }
                            })
                          ]
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    this.item.mimetype ===
                    "vnd.openxmlformats-officedocument.spreadsheetml.sheet"
                      ? _c(
                          "div",
                          { staticClass: "fileTypeIcon fileTypeXlsx" },
                          [
                            _c("img", {
                              staticClass: "icon",
                              attrs: { src: __webpack_require__(/*! ./images/msExcel.svg */ "./resources/js/components/FilesView/images/msExcel.svg") }
                            })
                          ]
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    this.item.mimetype ===
                    "vnd.openxmlformats-officedocument.wordprocessingml.document"
                      ? _c(
                          "div",
                          { staticClass: "fileTypeIcon fileTypeDocx" },
                          [
                            _c("img", {
                              staticClass: "icon",
                              attrs: { src: __webpack_require__(/*! ./images/msWord.svg */ "./resources/js/components/FilesView/images/msWord.svg") }
                            })
                          ]
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    this.item.mimetype === "pdf"
                      ? _c("div", { staticClass: "fileTypeIcon fileTypePdf" }, [
                          _c("img", {
                            staticClass: "icon",
                            attrs: { src: __webpack_require__(/*! ./images/acrobat.svg */ "./resources/js/components/FilesView/images/acrobat.svg") }
                          })
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    this.item.mimetype === "zip"
                      ? _c("div", { staticClass: "fileTypeIcon fileTypeZip" }, [
                          _c("img", {
                            staticClass: "icon",
                            attrs: { src: __webpack_require__(/*! ./images/zip.svg */ "./resources/js/components/FilesView/images/zip.svg") }
                          })
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    this.item.mimetype === "hic"
                      ? _c("div", { staticClass: "fileTypeIcon fileTypeHic" }, [
                          _c("img", {
                            staticClass: "icon",
                            attrs: { src: __webpack_require__(/*! ./images/hiC.svg */ "./resources/js/components/FilesView/images/hiC.svg") }
                          })
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    this.item.mimetype === "vnd.microsoft.icon"
                      ? _c("div", { staticClass: "fileTypeIcon fileTypeIco" })
                      : _vm._e(),
                    _vm._v(" "),
                    this.item.mimetype === "mp4"
                      ? _c(
                          "div",
                          { staticClass: "fileTypeIcon fileTypeVideo" },
                          [
                            _c("img", {
                              staticClass: "icon",
                              attrs: { src: __webpack_require__(/*! ./images/video.svg */ "./resources/js/components/FilesView/images/video.svg") }
                            })
                          ]
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    this.item.mimetype === "x-msvideo"
                      ? _c(
                          "div",
                          { staticClass: "fileTypeIcon fileTypeVideo" },
                          [
                            _c("img", {
                              staticClass: "icon",
                              attrs: { src: __webpack_require__(/*! ./images/video.svg */ "./resources/js/components/FilesView/images/video.svg") }
                            })
                          ]
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    this.item.mimetype === "quicktime"
                      ? _c(
                          "div",
                          { staticClass: "fileTypeIcon fileTypeVideo" },
                          [
                            _c("img", {
                              staticClass: "icon",
                              attrs: { src: __webpack_require__(/*! ./images/video.svg */ "./resources/js/components/FilesView/images/video.svg") }
                            })
                          ]
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    this.item.mimetype === "webm"
                      ? _c(
                          "div",
                          { staticClass: "fileTypeIcon fileTypeAudio" },
                          [
                            _c("img", {
                              staticClass: "icon",
                              attrs: { src: __webpack_require__(/*! ./images/video.svg */ "./resources/js/components/FilesView/images/video.svg") }
                            })
                          ]
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    this.item.mimetype === "mp3"
                      ? _c(
                          "div",
                          { staticClass: "fileTypeIcon fileTypeAudio" },
                          [
                            _c("img", {
                              staticClass: "icon",
                              attrs: { src: __webpack_require__(/*! ./images/audio.svg */ "./resources/js/components/FilesView/images/audio.svg") }
                            })
                          ]
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    this.item.mimetype === "x-wav"
                      ? _c(
                          "div",
                          { staticClass: "fileTypeIcon fileTypeAudio" },
                          [
                            _c("img", {
                              staticClass: "icon",
                              attrs: { src: __webpack_require__(/*! ./images/audio.svg */ "./resources/js/components/FilesView/images/audio.svg") }
                            })
                          ]
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    this.item.mimetype === "x-ms-asf"
                      ? _c(
                          "div",
                          { staticClass: "fileTypeIcon fileTypeAudio" },
                          [
                            _c("img", {
                              staticClass: "icon",
                              attrs: { src: __webpack_require__(/*! ./images/audio.svg */ "./resources/js/components/FilesView/images/audio.svg") }
                            })
                          ]
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    this.item.mimetype === "x-aiff"
                      ? _c(
                          "div",
                          { staticClass: "fileTypeIcon fileTypeAudio" },
                          [
                            _c("img", {
                              staticClass: "icon",
                              attrs: { src: __webpack_require__(/*! ./images/audio.svg */ "./resources/js/components/FilesView/images/audio.svg") }
                            })
                          ]
                        )
                      : _vm._e()
                  ])
                : _vm._e(),
              _vm._v(" "),
              _vm.isFile || (_vm.isImage && !_vm.item.thumbnail)
                ? _c("FontAwesomeIcon", {
                    staticClass: "file-icon",
                    class: {
                      fileTypeEps: this.item.mimetype === "postscript",
                      fileTypePsd: this.item.mimetype === "vnd.adobe.photoshop",
                      fileTypeExe: this.item.mimetype === "x-dosexec",
                      fileTypePptx:
                        this.item.mimetype ===
                        "vnd.openxmlformats-officedocument.presentationml.presentation",
                      fileTypeXlsx:
                        this.item.mimetype ===
                        "vnd.openxmlformats-officedocument.spreadsheetml.sheet",
                      fileTypeDocx:
                        this.item.mimetype ===
                        "vnd.openxmlformats-officedocument.wordprocessingml.document",
                      fileTypePdf: this.item.mimetype === "pdf",
                      fileTypeZip: this.item.mimetype === "zip",
                      fileTypeHic: this.item.mimetype === "hic",
                      fileTypeVideo:
                        this.item.mimetype === "mp4" ||
                        this.item.mimetype === "x-msvideo" ||
                        this.item.mimetype === "quicktime" ||
                        this.item.mimetype === "webm",
                      fileTypeAudio:
                        this.item.mimetype === "mp3" ||
                        this.item.mimetype === "x-wav" ||
                        this.item.mimetype === "x-ms-asf" ||
                        this.item.mimetype === "x-aiff"
                    },
                    attrs: { icon: "file" }
                  })
                : _vm._e(),
              _vm._v(" "),
              _vm.isImage && _vm.item.thumbnail
                ? _c("img", {
                    staticClass: "image",
                    staticStyle: { height: "auto" },
                    style: { width: _vm.thumbnailwidth },
                    attrs: {
                      loading: "lazy",
                      src: _vm.item.thumbnail,
                      alt: _vm.item.name
                    }
                  })
                : _vm._e(),
              _vm._v(" "),
              _vm.isFolder
                ? _c("FolderIcon", {
                    staticClass: "folder",
                    attrs: { item: _vm.item, location: "file-item-list" }
                  })
                : _vm._e()
            ],
            1
          ),
          _vm._v(" "),
          _c("div", { staticClass: "item-name" }, [
            _c("b", {
              ref: this.item.unique_id,
              staticClass: "name",
              attrs: { contenteditable: _vm.canEditName },
              domProps: { innerHTML: _vm._s(_vm.itemName) },
              on: {
                input: _vm.renameItem,
                keydown: [
                  function($event) {
                    if (
                      !$event.type.indexOf("key") &&
                      _vm._k($event.keyCode, "delete", [8, 46], $event.key, [
                        "Backspace",
                        "Delete",
                        "Del"
                      ])
                    ) {
                      return null
                    }
                    $event.stopPropagation()
                  },
                  function($event) {
                    if (
                      !$event.type.indexOf("key") &&
                      _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
                    ) {
                      return null
                    }
                    return _vm.endRename.apply(null, arguments)
                  }
                ],
                click: function($event) {
                  $event.stopPropagation()
                },
                focus: _vm.onFocus,
                blur: _vm.lostNameFocus
              }
            }),
            _vm._v(" "),
            _c("div", { staticClass: "item-info" }, [
              _vm.$checkPermission("master") && _vm.item.shared
                ? _c(
                    "div",
                    { staticClass: "item-shared" },
                    [
                      _c("link-icon", {
                        staticClass: "shared-icon",
                        attrs: { size: "12" }
                      })
                    ],
                    1
                  )
                : _vm._e(),
              _vm._v(" "),
              _vm.$checkPermission("master") && _vm.item.user_scope !== "master"
                ? _c(
                    "div",
                    { staticClass: "item-shared" },
                    [
                      _c("user-plus-icon", {
                        staticClass: "shared-icon",
                        attrs: { size: "12" }
                      })
                    ],
                    1
                  )
                : _vm._e(),
              _vm._v(" "),
              !_vm.isFolder
                ? _c("span", { staticClass: "item-size" }, [
                    _vm._v(
                      _vm._s(_vm.item.filesize) + ", " + _vm._s(_vm.timeStamp)
                    )
                  ])
                : _vm._e(),
              _vm._v(" "),
              _vm.isFolder
                ? _c("span", { staticClass: "item-length" }, [
                    _vm._v(
                      " " +
                        _vm._s(
                          _vm.folderItems == 0
                            ? _vm.$t("folder.empty")
                            : _vm.$tc("folder.item_counts", _vm.folderItems)
                        ) +
                        ", " +
                        _vm._s(_vm.timeStamp) +
                        " "
                    )
                  ])
                : _vm._e()
            ])
          ]),
          _vm._v(" "),
          _c("transition", { attrs: { name: "slide-from-right" } }, [
            _vm.$isMobile() && !_vm.mobileMultiSelect
              ? _c("div", { staticClass: "actions" }, [
                  _c(
                    "span",
                    {
                      staticClass: "show-actions",
                      on: {
                        mousedown: function($event) {
                          $event.stopPropagation()
                          return _vm.showItemActions.apply(null, arguments)
                        }
                      }
                    },
                    [
                      _c("FontAwesomeIcon", {
                        staticClass: "icon-action",
                        attrs: { icon: "ellipsis-v" }
                      })
                    ],
                    1
                  )
                ])
              : _vm._e()
          ])
        ],
        1
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/MobileActionButton.vue?vue&type=template&id=95f75cf0&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FilesView/MobileActionButton.vue?vue&type=template&id=95f75cf0&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************/
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
  return _c("button", { staticClass: "mobile-action-button" }, [
    _c(
      "div",
      { staticClass: "flex" },
      [
        _vm.icon === "credit-card"
          ? _c("credit-card-icon", {
              staticClass: "icon",
              attrs: { size: "15" }
            })
          : _vm._e(),
        _vm._v(" "),
        _vm.icon === "folder-plus"
          ? _c("folder-plus-icon", {
              staticClass: "icon",
              attrs: { size: "15" }
            })
          : _vm._e(),
        _vm._v(" "),
        _vm.icon === "th-list"
          ? _c("list-icon", { staticClass: "icon", attrs: { size: "15" } })
          : _vm._e(),
        _vm._v(" "),
        _vm.icon === "trash"
          ? _c("trash-icon", { staticClass: "icon", attrs: { size: "15" } })
          : _vm._e(),
        _vm._v(" "),
        _vm.icon === "th"
          ? _c("grid-icon", { staticClass: "icon", attrs: { size: "15" } })
          : _vm._e(),
        _vm._v(" "),
        _vm.icon === "user-plus"
          ? _c("user-plus-icon", { staticClass: "icon", attrs: { size: "15" } })
          : _vm._e(),
        _vm._v(" "),
        _vm.icon === "plus"
          ? _c("plus-icon", { staticClass: "icon", attrs: { size: "15" } })
          : _vm._e(),
        _vm._v(" "),
        _vm.icon === "check-square"
          ? _c("check-square-icon", {
              staticClass: "icon",
              attrs: { size: "15" }
            })
          : _vm._e(),
        _vm._v(" "),
        _vm.icon === "x-square"
          ? _c("x-square-icon", { staticClass: "icon", attrs: { size: "15" } })
          : _vm._e(),
        _vm._v(" "),
        _vm.icon === "check"
          ? _c("check-icon", { staticClass: "icon", attrs: { size: "15" } })
          : _vm._e(),
        _vm._v(" "),
        _vm.icon === "preview-sorting"
          ? _c("sorting-and-preview-icon", {
              staticClass: "icon preview-sorting",
              attrs: { size: "15" }
            })
          : _vm._e(),
        _vm._v(" "),
        _c("span", { staticClass: "label" }, [_vm._t("default")], 2)
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/MobileActionButtonUpload.vue?vue&type=template&id=b04b41ae&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FilesView/MobileActionButtonUpload.vue?vue&type=template&id=b04b41ae&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************/
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
  return _c("button", { staticClass: "mobile-action-button" }, [
    _c(
      "div",
      { staticClass: "flex" },
      [
        _c("upload-cloud-icon", { staticClass: "icon", attrs: { size: "15" } }),
        _vm._v(" "),
        _c(
          "label",
          {
            staticClass: "label button file-input button-base",
            attrs: { label: "file" }
          },
          [
            _vm._t("default"),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: false,
                  expression: "false"
                }
              ],
              attrs: {
                id: "file",
                type: "file",
                name: "files[]",
                multiple: ""
              },
              on: { change: _vm.emmitFiles }
            })
          ],
          2
        )
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/MobileActions.vue?vue&type=template&id=18dc5ba6&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FilesView/MobileActions.vue?vue&type=template&id=18dc5ba6&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************/
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
  return _c(
    "div",
    { attrs: { id: "mobile-actions-wrapper" } },
    [
      _vm.trashLocationMenu && !_vm.multiSelectMode
        ? _c(
            "div",
            { staticClass: "mobile-actions" },
            [
              _c(
                "MobileActionButton",
                {
                  attrs: { icon: "trash" },
                  nativeOn: {
                    click: function($event) {
                      return _vm.$store.dispatch("emptyTrash")
                    }
                  }
                },
                [
                  _vm._v(
                    "\n            " +
                      _vm._s(_vm.$t("context_menu.empty_trash")) +
                      "\n        "
                  )
                ]
              ),
              _vm._v(" "),
              _c(
                "MobileMultiSelectButton",
                {
                  nativeOn: {
                    click: function($event) {
                      return _vm.enableMultiSelectMode.apply(null, arguments)
                    }
                  }
                },
                [
                  _vm._v(
                    "\n            " +
                      _vm._s(_vm.$t("context_menu.select")) +
                      "\n        "
                  )
                ]
              ),
              _vm._v(" "),
              _c(
                "MobileActionButton",
                {
                  staticClass: "preview-sorting",
                  attrs: { icon: "preview-sorting" },
                  nativeOn: {
                    click: function($event) {
                      return _vm.showViewOptions.apply(null, arguments)
                    }
                  }
                },
                [
                  _vm._v(
                    "\n            " +
                      _vm._s(_vm.$t("preview_sorting.preview_sorting_button")) +
                      "\n        "
                  )
                ]
              )
            ],
            1
          )
        : _vm._e(),
      _vm._v(" "),
      _c("transition", { attrs: { name: "button" } }, [
        _vm.baseLocationMasterMenu && !_vm.multiSelectMode
          ? _c(
              "div",
              { staticClass: "mobile-actions" },
              [
                _c(
                  "MobileActionButton",
                  {
                    class: { "is-inactive": _vm.multiSelectMode },
                    attrs: { icon: "folder-plus" },
                    nativeOn: {
                      click: function($event) {
                        return _vm.createFolder.apply(null, arguments)
                      }
                    }
                  },
                  [
                    _vm._v(
                      "\n                " +
                        _vm._s(_vm.$t("context_menu.add_folder")) +
                        "\n            "
                    )
                  ]
                ),
                _vm._v(" "),
                _c(
                  "MobileActionButtonUpload",
                  { class: { "is-inactive": _vm.multiSelectMode } },
                  [
                    _vm._v(
                      "\n                " +
                        _vm._s(_vm.$t("context_menu.upload")) +
                        "\n            "
                    )
                  ]
                ),
                _vm._v(" "),
                _c(
                  "MobileMultiSelectButton",
                  {
                    nativeOn: {
                      click: function($event) {
                        return _vm.enableMultiSelectMode.apply(null, arguments)
                      }
                    }
                  },
                  [
                    _vm._v(
                      "\n                " +
                        _vm._s(_vm.$t("context_menu.select")) +
                        "\n            "
                    )
                  ]
                ),
                _vm._v(" "),
                _c(
                  "MobileActionButton",
                  {
                    staticClass: "preview-sorting",
                    attrs: { icon: "preview-sorting" },
                    nativeOn: {
                      click: function($event) {
                        return _vm.showViewOptions.apply(null, arguments)
                      }
                    }
                  },
                  [
                    _vm._v(
                      "\n                " +
                        _vm._s(
                          _vm.$t("preview_sorting.preview_sorting_button")
                        ) +
                        "\n            "
                    )
                  ]
                )
              ],
              1
            )
          : _vm._e()
      ]),
      _vm._v(" "),
      _c("transition", { attrs: { name: "button" } }, [
        _vm.multiSelectMode
          ? _c(
              "div",
              { staticClass: "mobile-actions" },
              [
                _c(
                  "MobileActionButton",
                  {
                    attrs: { icon: "check-square" },
                    nativeOn: {
                      click: function($event) {
                        return _vm.selectAll.apply(null, arguments)
                      }
                    }
                  },
                  [
                    _vm._v(
                      "\n                " +
                        _vm._s(_vm.$t("mobile_selecting.select_all")) +
                        "\n            "
                    )
                  ]
                ),
                _vm._v(" "),
                _c(
                  "MobileActionButton",
                  {
                    attrs: { icon: "x-square" },
                    nativeOn: {
                      click: function($event) {
                        return _vm.deselectAll.apply(null, arguments)
                      }
                    }
                  },
                  [
                    _vm._v(
                      "\n                " +
                        _vm._s(_vm.$t("mobile_selecting.deselect_all")) +
                        "\n            "
                    )
                  ]
                ),
                _vm._v(" "),
                _c(
                  "MobileActionButton",
                  {
                    attrs: { icon: "check" },
                    nativeOn: {
                      click: function($event) {
                        return _vm.disableMultiSelectMode.apply(null, arguments)
                      }
                    }
                  },
                  [
                    _vm._v(
                      "\n                " +
                        _vm._s(_vm.$t("mobile_selecting.done")) +
                        "\n            "
                    )
                  ]
                )
              ],
              1
            )
          : _vm._e()
      ]),
      _vm._v(" "),
      _vm.baseLocationVisitorMenu && !_vm.multiSelectMode
        ? _c(
            "div",
            { staticClass: "mobile-actions" },
            [
              _c(
                "MobileMultiSelectButton",
                {
                  nativeOn: {
                    click: function($event) {
                      return _vm.enableMultiSelectMode.apply(null, arguments)
                    }
                  }
                },
                [
                  _vm._v(
                    "\n           " +
                      _vm._s(_vm.$t("context_menu.select")) +
                      "\n        "
                  )
                ]
              ),
              _vm._v(" "),
              _c(
                "MobileActionButton",
                {
                  staticClass: "preview-sorting",
                  attrs: { icon: "preview-sorting" },
                  nativeOn: {
                    click: function($event) {
                      return _vm.showViewOptions.apply(null, arguments)
                    }
                  }
                },
                [
                  _vm._v(
                    "\n            " +
                      _vm._s(_vm.$t("preview_sorting.preview_sorting_button")) +
                      "\n        "
                  )
                ]
              )
            ],
            1
          )
        : _vm._e(),
      _vm._v(" "),
      _c("UploadProgress")
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/MobileMultiSelectButton.vue?vue&type=template&id=1e539d57&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FilesView/MobileMultiSelectButton.vue?vue&type=template&id=1e539d57&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************/
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
  return _c(
    "button",
    {
      staticClass: "mobile-action-button",
      class: { active: _vm.mobileSelectingActive }
    },
    [
      _c(
        "div",
        { staticClass: "flex" },
        [
          _c("CheckSquareIcon", { staticClass: "icon", attrs: { size: "15" } }),
          _vm._v(" "),
          _c("span", { staticClass: "label" }, [_vm._t("default")], 2)
        ],
        1
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/MobileToolbar.vue?vue&type=template&id=005ba5ab&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FilesView/MobileToolbar.vue?vue&type=template&id=005ba5ab&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "mobile-toolbar" }, [
    _c(
      "div",
      {
        staticClass: "go-back-button",
        class: { "is-visible": _vm.browseHistory.length > 1 },
        on: { click: _vm.goBack }
      },
      [
        _c("chevron-left-icon", {
          staticClass: "icon-back",
          attrs: { size: "17" }
        })
      ],
      1
    ),
    _vm._v(" "),
    _c("div", { staticClass: "directory-name" }, [
      _vm._v(_vm._s(_vm.directoryName))
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "more-actions-button" }, [
      _vm.$checkPermission("master")
        ? _c(
            "div",
            {
              staticClass: "tap-area",
              on: { click: _vm.showMobileNavigation }
            },
            [_c("menu-icon", { attrs: { size: "17" } })],
            1
          )
        : _vm._e()
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/Option.vue?vue&type=template&id=c9acfa9a&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FilesView/Option.vue?vue&type=template&id=c9acfa9a&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************/
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
  return _c(
    "li",
    {
      staticClass: "menu-option",
      class: [_vm.icon === "trash" ? "danger" : ""]
    },
    [
      _c(
        "div",
        { staticClass: "icon" },
        [
          _vm.icon === "trash"
            ? _c("trash-2-icon", { attrs: { size: "17" } })
            : _vm._e(),
          _vm._v(" "),
          _vm.icon === "restore"
            ? _c("life-buoy-icon", { attrs: { size: "17" } })
            : _vm._e(),
          _vm._v(" "),
          _vm.icon === "empty-trash"
            ? _c("trash-icon", { attrs: { size: "17" } })
            : _vm._e(),
          _vm._v(" "),
          _vm.icon === "detail"
            ? _c("eye-icon", { attrs: { size: "17" } })
            : _vm._e(),
          _vm._v(" "),
          _vm.icon === "download"
            ? _c("download-cloud-icon", { attrs: { size: "17" } })
            : _vm._e(),
          _vm._v(" "),
          _vm.icon === "rename"
            ? _c("edit2-icon", { attrs: { size: "17" } })
            : _vm._e(),
          _vm._v(" "),
          _vm.icon === "move-item"
            ? _c("corner-down-right-icon", { attrs: { size: "17" } })
            : _vm._e(),
          _vm._v(" "),
          _vm.icon === "share"
            ? _c("link-icon", { attrs: { size: "17" } })
            : _vm._e(),
          _vm._v(" "),
          _vm.icon === "favourites"
            ? _c("star-icon", { attrs: { size: "17" } })
            : _vm._e(),
          _vm._v(" "),
          _vm.icon === "create-folder"
            ? _c("folder-plus-icon", { attrs: { size: "17" } })
            : _vm._e(),
          _vm._v(" "),
          _vm.icon === "no-options"
            ? _c("smile-icon", { attrs: { size: "17" } })
            : _vm._e(),
          _vm._v(" "),
          _vm.icon === "zip-folder"
            ? _c("paperclip-icon", { attrs: { size: "17" } })
            : _vm._e(),
          _vm._v(" "),
          _vm.icon === "copy"
            ? _c("copy-icon", { attrs: { size: "17" } })
            : _vm._e(),
          _vm._v(" "),
          _vm.icon === "add"
            ? _c("plus-icon", { attrs: { size: "17" } })
            : _vm._e(),
          _vm._v(" "),
          _vm.icon === "paste"
            ? _c("clipboard-icon", { attrs: { size: "17" } })
            : _vm._e(),
          _vm._v(" "),
          _vm.icon === "cut"
            ? _c("x-icon", { attrs: { size: "17" } })
            : _vm._e()
        ],
        1
      ),
      _vm._v(" "),
      _c("div", { staticClass: "text-label" }, [
        _vm._v("\n        " + _vm._s(_vm.title) + "\n    ")
      ])
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/OptionGroup.vue?vue&type=template&id=85830b88&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FilesView/OptionGroup.vue?vue&type=template&id=85830b88&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************/
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
  return _c("ul", { staticClass: "menu-option-group" }, [_vm._t("default")], 2)
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/ProgressBar.vue?vue&type=template&id=7fb97850&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FilesView/ProgressBar.vue?vue&type=template&id=7fb97850&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "progress-bar" }, [
    _c("span", { style: { width: _vm.progress + "%" } })
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/SearchBar.vue?vue&type=template&id=23e12306&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FilesView/SearchBar.vue?vue&type=template&id=23e12306&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "search-bar" }, [
    _c("input", {
      directives: [
        {
          name: "shortkey",
          rawName: "v-shortkey.avoid",
          modifiers: { avoid: true }
        },
        {
          name: "model",
          rawName: "v-model",
          value: _vm.query,
          expression: "query"
        }
      ],
      staticClass: "query",
      attrs: {
        type: "text",
        name: "query",
        placeholder: _vm.$t("inputs.placeholder_search_files")
      },
      domProps: { value: _vm.query },
      on: {
        paste: _vm.onPaste,
        input: function($event) {
          if ($event.target.composing) {
            return
          }
          _vm.query = $event.target.value
        }
      }
    }),
    _vm._v(" "),
    _vm.isQuery
      ? _c("div", {
          staticClass: "icon search_clear",
          on: { click: _vm.resetQuery }
        })
      : _vm._e()
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/ToolbarButtonUpload.vue?vue&type=template&id=8eb7bbc0&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FilesView/ToolbarButtonUpload.vue?vue&type=template&id=8eb7bbc0&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************/
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
  return _c(
    "label",
    { staticClass: "button file-input", attrs: { label: "file" } },
    [
      _c(
        "svg",
        {
          staticClass: "uploadIcon",
          staticStyle: { "enable-background": "new 0 0 24 24" },
          attrs: {
            version: "1.1",
            id: "Layer_1",
            xmlns: "http://www.w3.org/2000/svg",
            "xmlns:xlink": "http://www.w3.org/1999/xlink",
            x: "0px",
            y: "0px",
            viewBox: "0 0 24 24",
            "xml:space": "preserve",
            width: "19",
            height: "19"
          }
        },
        [
          _c("path", {
            attrs: {
              d:
                "M12,2.9c3.4,0,6.1,2.7,6.1,6.1c0,0.3,0,0.6-0.1,0.8l-0.1,0.8h0.9c1.8,0,3.2,1.4,3.2,3.2c0,1.7-1.3,3-2.9,3.2v2l0.2,0\n            c2.7-0.2,4.8-2.5,4.8-5.2c0-2.4-1.7-4.4-3.9-5c-0.1-4.4-3.7-8-8.1-8l0,0c-4.4,0-8,3.6-8.1,8C3,9.1,2.2,9.6,1.5,10.2\n            c-1,1-1.5,2.3-1.5,3.6c0,2.7,2.1,4.9,4.8,5.2l0.1,0h0.1v-2C3.3,16.9,2,15.5,2,13.9c0-0.8,0.3-1.6,0.9-2.2c0.6-0.6,1.4-0.9,2.3-0.9\n            h0.9L6,9.8c0-0.2-0.1-0.5-0.1-0.8C5.9,5.6,8.6,2.9,12,2.9"
            }
          }),
          _vm._v(" "),
          _c("path", {
            attrs: {
              d:
                "M7.1,16.2L7.1,16.2c0.4,0.4,1,0.4,1.4,0l2.5-2.5v8.5c0,0.6,0.4,1,1,1h0.1c0.6,0,1-0.4,1-1v-8.5l2.5,2.5c0.4,0.4,1,0.4,1.4,0\n            h0c0.4-0.4,0.4-1,0-1.4l-4.2-4.2c-0.4-0.4-1-0.4-1.4,0l-4.2,4.2C6.7,15.2,6.7,15.8,7.1,16.2z"
            }
          })
        ]
      ),
      _vm._v(" "),
      _c("input", {
        directives: [
          { name: "show", rawName: "v-show", value: false, expression: "false" }
        ],
        attrs: { id: "file", type: "file", name: "files[]", multiple: "" },
        on: { change: _vm.emmitFiles }
      })
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/UploadProgress.vue?vue&type=template&id=4c87f9e8&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FilesView/UploadProgress.vue?vue&type=template&id=4c87f9e8&scoped=true& ***!
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
  return _c("transition", { attrs: { name: "info-panel" } }, [
    _vm.fileQueue.length > 0
      ? _c("div", { staticClass: "upload-progress" }, [
          _c("div", { staticClass: "progress-title" }, [
            _vm.isProcessingFile
              ? _c(
                  "span",
                  [
                    _c("refresh-cw-icon", {
                      staticClass: "sync-alt",
                      attrs: { size: "12" }
                    }),
                    _vm._v(
                      "\n                    " +
                        _vm._s(_vm.$t("uploading.processing_file")) +
                        "\n                "
                    )
                  ],
                  1
                )
              : _vm._e(),
            _vm._v(" "),
            !_vm.isProcessingFile && _vm.fileQueue.length > 0
              ? _c("span", [
                  _vm._v(
                    "\n                    " +
                      _vm._s(
                        _vm.$t("uploading.progress", {
                          current: _vm.filesInQueueUploaded,
                          total: _vm.filesInQueueTotal,
                          progress: _vm.uploadingProgress
                        })
                      ) +
                      "\n                "
                  )
                ])
              : _vm._e()
          ]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "progress-wrapper" },
            [
              _c("ProgressBar", { attrs: { progress: _vm.uploadingProgress } }),
              _vm._v(" "),
              _c(
                "span",
                {
                  staticClass: "cancel-icon",
                  attrs: { title: _vm.$t("uploading.cancel") },
                  on: { click: _vm.cancelUpload }
                },
                [
                  _c("x-icon", {
                    attrs: { size: "16" },
                    on: { click: _vm.cancelUpload }
                  })
                ],
                1
              )
            ],
            1
          )
        ])
      : _vm._e()
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/FilesView/ButtonUpload.vue":
/*!************************************************************!*\
  !*** ./resources/js/components/FilesView/ButtonUpload.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ButtonUpload_vue_vue_type_template_id_1ec4da91_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ButtonUpload.vue?vue&type=template&id=1ec4da91&scoped=true& */ "./resources/js/components/FilesView/ButtonUpload.vue?vue&type=template&id=1ec4da91&scoped=true&");
/* harmony import */ var _ButtonUpload_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ButtonUpload.vue?vue&type=script&lang=js& */ "./resources/js/components/FilesView/ButtonUpload.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ButtonUpload_vue_vue_type_style_index_0_id_1ec4da91_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ButtonUpload.vue?vue&type=style&index=0&id=1ec4da91&scoped=true&lang=scss& */ "./resources/js/components/FilesView/ButtonUpload.vue?vue&type=style&index=0&id=1ec4da91&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ButtonUpload_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ButtonUpload_vue_vue_type_template_id_1ec4da91_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ButtonUpload_vue_vue_type_template_id_1ec4da91_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "1ec4da91",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/FilesView/ButtonUpload.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/FilesView/ButtonUpload.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/FilesView/ButtonUpload.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ButtonUpload_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ButtonUpload.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/ButtonUpload.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ButtonUpload_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/FilesView/ButtonUpload.vue?vue&type=style&index=0&id=1ec4da91&scoped=true&lang=scss&":
/*!**********************************************************************************************************************!*\
  !*** ./resources/js/components/FilesView/ButtonUpload.vue?vue&type=style&index=0&id=1ec4da91&scoped=true&lang=scss& ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ButtonUpload_vue_vue_type_style_index_0_id_1ec4da91_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./ButtonUpload.vue?vue&type=style&index=0&id=1ec4da91&scoped=true&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/ButtonUpload.vue?vue&type=style&index=0&id=1ec4da91&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ButtonUpload_vue_vue_type_style_index_0_id_1ec4da91_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ButtonUpload_vue_vue_type_style_index_0_id_1ec4da91_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ButtonUpload_vue_vue_type_style_index_0_id_1ec4da91_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ButtonUpload_vue_vue_type_style_index_0_id_1ec4da91_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/FilesView/ButtonUpload.vue?vue&type=template&id=1ec4da91&scoped=true&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/components/FilesView/ButtonUpload.vue?vue&type=template&id=1ec4da91&scoped=true& ***!
  \*******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ButtonUpload_vue_vue_type_template_id_1ec4da91_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./ButtonUpload.vue?vue&type=template&id=1ec4da91&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/ButtonUpload.vue?vue&type=template&id=1ec4da91&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ButtonUpload_vue_vue_type_template_id_1ec4da91_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ButtonUpload_vue_vue_type_template_id_1ec4da91_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/FilesView/ContextMenu.vue":
/*!***********************************************************!*\
  !*** ./resources/js/components/FilesView/ContextMenu.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ContextMenu_vue_vue_type_template_id_0c6958e0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ContextMenu.vue?vue&type=template&id=0c6958e0&scoped=true& */ "./resources/js/components/FilesView/ContextMenu.vue?vue&type=template&id=0c6958e0&scoped=true&");
/* harmony import */ var _ContextMenu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ContextMenu.vue?vue&type=script&lang=js& */ "./resources/js/components/FilesView/ContextMenu.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ContextMenu_vue_vue_type_style_index_0_id_0c6958e0_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ContextMenu.vue?vue&type=style&index=0&id=0c6958e0&scoped=true&lang=scss& */ "./resources/js/components/FilesView/ContextMenu.vue?vue&type=style&index=0&id=0c6958e0&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ContextMenu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ContextMenu_vue_vue_type_template_id_0c6958e0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ContextMenu_vue_vue_type_template_id_0c6958e0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "0c6958e0",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/FilesView/ContextMenu.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/FilesView/ContextMenu.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/FilesView/ContextMenu.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ContextMenu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ContextMenu.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/ContextMenu.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ContextMenu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/FilesView/ContextMenu.vue?vue&type=style&index=0&id=0c6958e0&scoped=true&lang=scss&":
/*!*********************************************************************************************************************!*\
  !*** ./resources/js/components/FilesView/ContextMenu.vue?vue&type=style&index=0&id=0c6958e0&scoped=true&lang=scss& ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ContextMenu_vue_vue_type_style_index_0_id_0c6958e0_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./ContextMenu.vue?vue&type=style&index=0&id=0c6958e0&scoped=true&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/ContextMenu.vue?vue&type=style&index=0&id=0c6958e0&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ContextMenu_vue_vue_type_style_index_0_id_0c6958e0_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ContextMenu_vue_vue_type_style_index_0_id_0c6958e0_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ContextMenu_vue_vue_type_style_index_0_id_0c6958e0_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ContextMenu_vue_vue_type_style_index_0_id_0c6958e0_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/FilesView/ContextMenu.vue?vue&type=template&id=0c6958e0&scoped=true&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/components/FilesView/ContextMenu.vue?vue&type=template&id=0c6958e0&scoped=true& ***!
  \******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ContextMenu_vue_vue_type_template_id_0c6958e0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./ContextMenu.vue?vue&type=template&id=0c6958e0&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/ContextMenu.vue?vue&type=template&id=0c6958e0&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ContextMenu_vue_vue_type_template_id_0c6958e0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ContextMenu_vue_vue_type_template_id_0c6958e0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/FilesView/CopyProgress.vue":
/*!************************************************************!*\
  !*** ./resources/js/components/FilesView/CopyProgress.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CopyProgress_vue_vue_type_template_id_fb8a3000_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CopyProgress.vue?vue&type=template&id=fb8a3000&scoped=true& */ "./resources/js/components/FilesView/CopyProgress.vue?vue&type=template&id=fb8a3000&scoped=true&");
/* harmony import */ var _CopyProgress_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CopyProgress.vue?vue&type=script&lang=js& */ "./resources/js/components/FilesView/CopyProgress.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _CopyProgress_vue_vue_type_style_index_0_id_fb8a3000_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CopyProgress.vue?vue&type=style&index=0&id=fb8a3000&scoped=true&lang=scss& */ "./resources/js/components/FilesView/CopyProgress.vue?vue&type=style&index=0&id=fb8a3000&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _CopyProgress_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CopyProgress_vue_vue_type_template_id_fb8a3000_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CopyProgress_vue_vue_type_template_id_fb8a3000_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "fb8a3000",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/FilesView/CopyProgress.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/FilesView/CopyProgress.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/FilesView/CopyProgress.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CopyProgress_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./CopyProgress.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/CopyProgress.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CopyProgress_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/FilesView/CopyProgress.vue?vue&type=style&index=0&id=fb8a3000&scoped=true&lang=scss&":
/*!**********************************************************************************************************************!*\
  !*** ./resources/js/components/FilesView/CopyProgress.vue?vue&type=style&index=0&id=fb8a3000&scoped=true&lang=scss& ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CopyProgress_vue_vue_type_style_index_0_id_fb8a3000_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./CopyProgress.vue?vue&type=style&index=0&id=fb8a3000&scoped=true&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/CopyProgress.vue?vue&type=style&index=0&id=fb8a3000&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CopyProgress_vue_vue_type_style_index_0_id_fb8a3000_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CopyProgress_vue_vue_type_style_index_0_id_fb8a3000_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CopyProgress_vue_vue_type_style_index_0_id_fb8a3000_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CopyProgress_vue_vue_type_style_index_0_id_fb8a3000_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/FilesView/CopyProgress.vue?vue&type=template&id=fb8a3000&scoped=true&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/components/FilesView/CopyProgress.vue?vue&type=template&id=fb8a3000&scoped=true& ***!
  \*******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CopyProgress_vue_vue_type_template_id_fb8a3000_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./CopyProgress.vue?vue&type=template&id=fb8a3000&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/CopyProgress.vue?vue&type=template&id=fb8a3000&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CopyProgress_vue_vue_type_template_id_fb8a3000_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CopyProgress_vue_vue_type_template_id_fb8a3000_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/FilesView/DesktopSortingAndPreview.vue":
/*!************************************************************************!*\
  !*** ./resources/js/components/FilesView/DesktopSortingAndPreview.vue ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DesktopSortingAndPreview_vue_vue_type_template_id_6684c497_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DesktopSortingAndPreview.vue?vue&type=template&id=6684c497&scoped=true& */ "./resources/js/components/FilesView/DesktopSortingAndPreview.vue?vue&type=template&id=6684c497&scoped=true&");
/* harmony import */ var _DesktopSortingAndPreview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DesktopSortingAndPreview.vue?vue&type=script&lang=js& */ "./resources/js/components/FilesView/DesktopSortingAndPreview.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _DesktopSortingAndPreview_vue_vue_type_style_index_0_id_6684c497_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DesktopSortingAndPreview.vue?vue&type=style&index=0&id=6684c497&scoped=true&lang=scss& */ "./resources/js/components/FilesView/DesktopSortingAndPreview.vue?vue&type=style&index=0&id=6684c497&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _DesktopSortingAndPreview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DesktopSortingAndPreview_vue_vue_type_template_id_6684c497_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _DesktopSortingAndPreview_vue_vue_type_template_id_6684c497_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "6684c497",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/FilesView/DesktopSortingAndPreview.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/FilesView/DesktopSortingAndPreview.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/FilesView/DesktopSortingAndPreview.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DesktopSortingAndPreview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./DesktopSortingAndPreview.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/DesktopSortingAndPreview.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DesktopSortingAndPreview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/FilesView/DesktopSortingAndPreview.vue?vue&type=style&index=0&id=6684c497&scoped=true&lang=scss&":
/*!**********************************************************************************************************************************!*\
  !*** ./resources/js/components/FilesView/DesktopSortingAndPreview.vue?vue&type=style&index=0&id=6684c497&scoped=true&lang=scss& ***!
  \**********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_DesktopSortingAndPreview_vue_vue_type_style_index_0_id_6684c497_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./DesktopSortingAndPreview.vue?vue&type=style&index=0&id=6684c497&scoped=true&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/DesktopSortingAndPreview.vue?vue&type=style&index=0&id=6684c497&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_DesktopSortingAndPreview_vue_vue_type_style_index_0_id_6684c497_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_DesktopSortingAndPreview_vue_vue_type_style_index_0_id_6684c497_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_DesktopSortingAndPreview_vue_vue_type_style_index_0_id_6684c497_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_DesktopSortingAndPreview_vue_vue_type_style_index_0_id_6684c497_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/FilesView/DesktopSortingAndPreview.vue?vue&type=template&id=6684c497&scoped=true&":
/*!*******************************************************************************************************************!*\
  !*** ./resources/js/components/FilesView/DesktopSortingAndPreview.vue?vue&type=template&id=6684c497&scoped=true& ***!
  \*******************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DesktopSortingAndPreview_vue_vue_type_template_id_6684c497_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./DesktopSortingAndPreview.vue?vue&type=template&id=6684c497&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/DesktopSortingAndPreview.vue?vue&type=template&id=6684c497&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DesktopSortingAndPreview_vue_vue_type_template_id_6684c497_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DesktopSortingAndPreview_vue_vue_type_template_id_6684c497_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/FilesView/DesktopToolbar.vue":
/*!**************************************************************!*\
  !*** ./resources/js/components/FilesView/DesktopToolbar.vue ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DesktopToolbar_vue_vue_type_template_id_14323afd_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DesktopToolbar.vue?vue&type=template&id=14323afd&scoped=true& */ "./resources/js/components/FilesView/DesktopToolbar.vue?vue&type=template&id=14323afd&scoped=true&");
/* harmony import */ var _DesktopToolbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DesktopToolbar.vue?vue&type=script&lang=js& */ "./resources/js/components/FilesView/DesktopToolbar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _DesktopToolbar_vue_vue_type_style_index_0_id_14323afd_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DesktopToolbar.vue?vue&type=style&index=0&id=14323afd&scoped=true&lang=scss& */ "./resources/js/components/FilesView/DesktopToolbar.vue?vue&type=style&index=0&id=14323afd&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _DesktopToolbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DesktopToolbar_vue_vue_type_template_id_14323afd_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _DesktopToolbar_vue_vue_type_template_id_14323afd_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "14323afd",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/FilesView/DesktopToolbar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/FilesView/DesktopToolbar.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/FilesView/DesktopToolbar.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DesktopToolbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./DesktopToolbar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/DesktopToolbar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DesktopToolbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/FilesView/DesktopToolbar.vue?vue&type=style&index=0&id=14323afd&scoped=true&lang=scss&":
/*!************************************************************************************************************************!*\
  !*** ./resources/js/components/FilesView/DesktopToolbar.vue?vue&type=style&index=0&id=14323afd&scoped=true&lang=scss& ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_DesktopToolbar_vue_vue_type_style_index_0_id_14323afd_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./DesktopToolbar.vue?vue&type=style&index=0&id=14323afd&scoped=true&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/DesktopToolbar.vue?vue&type=style&index=0&id=14323afd&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_DesktopToolbar_vue_vue_type_style_index_0_id_14323afd_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_DesktopToolbar_vue_vue_type_style_index_0_id_14323afd_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_DesktopToolbar_vue_vue_type_style_index_0_id_14323afd_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_DesktopToolbar_vue_vue_type_style_index_0_id_14323afd_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/FilesView/DesktopToolbar.vue?vue&type=template&id=14323afd&scoped=true&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/components/FilesView/DesktopToolbar.vue?vue&type=template&id=14323afd&scoped=true& ***!
  \*********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DesktopToolbar_vue_vue_type_template_id_14323afd_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./DesktopToolbar.vue?vue&type=template&id=14323afd&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/DesktopToolbar.vue?vue&type=template&id=14323afd&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DesktopToolbar_vue_vue_type_template_id_14323afd_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DesktopToolbar_vue_vue_type_template_id_14323afd_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/FilesView/DragSelect.vue":
/*!**********************************************************!*\
  !*** ./resources/js/components/FilesView/DragSelect.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DragSelect_vue_vue_type_template_id_15fa290e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DragSelect.vue?vue&type=template&id=15fa290e& */ "./resources/js/components/FilesView/DragSelect.vue?vue&type=template&id=15fa290e&");
/* harmony import */ var _DragSelect_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DragSelect.vue?vue&type=script&lang=js& */ "./resources/js/components/FilesView/DragSelect.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _DragSelect_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DragSelect_vue_vue_type_template_id_15fa290e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _DragSelect_vue_vue_type_template_id_15fa290e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/FilesView/DragSelect.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/FilesView/DragSelect.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/FilesView/DragSelect.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DragSelect_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./DragSelect.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/DragSelect.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DragSelect_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/FilesView/DragSelect.vue?vue&type=template&id=15fa290e&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/FilesView/DragSelect.vue?vue&type=template&id=15fa290e& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DragSelect_vue_vue_type_template_id_15fa290e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./DragSelect.vue?vue&type=template&id=15fa290e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/DragSelect.vue?vue&type=template&id=15fa290e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DragSelect_vue_vue_type_template_id_15fa290e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DragSelect_vue_vue_type_template_id_15fa290e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/FilesView/EmptyMessage.vue":
/*!************************************************************!*\
  !*** ./resources/js/components/FilesView/EmptyMessage.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EmptyMessage_vue_vue_type_template_id_f2442590_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EmptyMessage.vue?vue&type=template&id=f2442590&scoped=true& */ "./resources/js/components/FilesView/EmptyMessage.vue?vue&type=template&id=f2442590&scoped=true&");
/* harmony import */ var _EmptyMessage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EmptyMessage.vue?vue&type=script&lang=js& */ "./resources/js/components/FilesView/EmptyMessage.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _EmptyMessage_vue_vue_type_style_index_0_id_f2442590_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EmptyMessage.vue?vue&type=style&index=0&id=f2442590&scoped=true&lang=scss& */ "./resources/js/components/FilesView/EmptyMessage.vue?vue&type=style&index=0&id=f2442590&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _EmptyMessage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _EmptyMessage_vue_vue_type_template_id_f2442590_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _EmptyMessage_vue_vue_type_template_id_f2442590_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "f2442590",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/FilesView/EmptyMessage.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/FilesView/EmptyMessage.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/FilesView/EmptyMessage.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EmptyMessage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./EmptyMessage.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/EmptyMessage.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EmptyMessage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/FilesView/EmptyMessage.vue?vue&type=style&index=0&id=f2442590&scoped=true&lang=scss&":
/*!**********************************************************************************************************************!*\
  !*** ./resources/js/components/FilesView/EmptyMessage.vue?vue&type=style&index=0&id=f2442590&scoped=true&lang=scss& ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_EmptyMessage_vue_vue_type_style_index_0_id_f2442590_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./EmptyMessage.vue?vue&type=style&index=0&id=f2442590&scoped=true&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/EmptyMessage.vue?vue&type=style&index=0&id=f2442590&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_EmptyMessage_vue_vue_type_style_index_0_id_f2442590_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_EmptyMessage_vue_vue_type_style_index_0_id_f2442590_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_EmptyMessage_vue_vue_type_style_index_0_id_f2442590_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_EmptyMessage_vue_vue_type_style_index_0_id_f2442590_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/FilesView/EmptyMessage.vue?vue&type=template&id=f2442590&scoped=true&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/components/FilesView/EmptyMessage.vue?vue&type=template&id=f2442590&scoped=true& ***!
  \*******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EmptyMessage_vue_vue_type_template_id_f2442590_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./EmptyMessage.vue?vue&type=template&id=f2442590&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/EmptyMessage.vue?vue&type=template&id=f2442590&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EmptyMessage_vue_vue_type_template_id_f2442590_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EmptyMessage_vue_vue_type_template_id_f2442590_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/FilesView/EmptyPage.vue":
/*!*********************************************************!*\
  !*** ./resources/js/components/FilesView/EmptyPage.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EmptyPage_vue_vue_type_template_id_3497fe2e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EmptyPage.vue?vue&type=template&id=3497fe2e&scoped=true& */ "./resources/js/components/FilesView/EmptyPage.vue?vue&type=template&id=3497fe2e&scoped=true&");
/* harmony import */ var _EmptyPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EmptyPage.vue?vue&type=script&lang=js& */ "./resources/js/components/FilesView/EmptyPage.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _EmptyPage_vue_vue_type_style_index_0_id_3497fe2e_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EmptyPage.vue?vue&type=style&index=0&id=3497fe2e&scoped=true&lang=scss& */ "./resources/js/components/FilesView/EmptyPage.vue?vue&type=style&index=0&id=3497fe2e&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _EmptyPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _EmptyPage_vue_vue_type_template_id_3497fe2e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _EmptyPage_vue_vue_type_template_id_3497fe2e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "3497fe2e",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/FilesView/EmptyPage.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/FilesView/EmptyPage.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/FilesView/EmptyPage.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EmptyPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./EmptyPage.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/EmptyPage.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EmptyPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/FilesView/EmptyPage.vue?vue&type=style&index=0&id=3497fe2e&scoped=true&lang=scss&":
/*!*******************************************************************************************************************!*\
  !*** ./resources/js/components/FilesView/EmptyPage.vue?vue&type=style&index=0&id=3497fe2e&scoped=true&lang=scss& ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_EmptyPage_vue_vue_type_style_index_0_id_3497fe2e_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./EmptyPage.vue?vue&type=style&index=0&id=3497fe2e&scoped=true&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/EmptyPage.vue?vue&type=style&index=0&id=3497fe2e&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_EmptyPage_vue_vue_type_style_index_0_id_3497fe2e_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_EmptyPage_vue_vue_type_style_index_0_id_3497fe2e_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_EmptyPage_vue_vue_type_style_index_0_id_3497fe2e_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_EmptyPage_vue_vue_type_style_index_0_id_3497fe2e_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/FilesView/EmptyPage.vue?vue&type=template&id=3497fe2e&scoped=true&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/components/FilesView/EmptyPage.vue?vue&type=template&id=3497fe2e&scoped=true& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EmptyPage_vue_vue_type_template_id_3497fe2e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./EmptyPage.vue?vue&type=template&id=3497fe2e&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/EmptyPage.vue?vue&type=template&id=3497fe2e&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EmptyPage_vue_vue_type_template_id_3497fe2e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EmptyPage_vue_vue_type_template_id_3497fe2e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/FilesView/FileBrowser.vue":
/*!***********************************************************!*\
  !*** ./resources/js/components/FilesView/FileBrowser.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FileBrowser_vue_vue_type_template_id_6409943e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FileBrowser.vue?vue&type=template&id=6409943e&scoped=true& */ "./resources/js/components/FilesView/FileBrowser.vue?vue&type=template&id=6409943e&scoped=true&");
/* harmony import */ var _FileBrowser_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FileBrowser.vue?vue&type=script&lang=js& */ "./resources/js/components/FilesView/FileBrowser.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _FileBrowser_vue_vue_type_style_index_0_id_6409943e_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FileBrowser.vue?vue&type=style&index=0&id=6409943e&scoped=true&lang=scss& */ "./resources/js/components/FilesView/FileBrowser.vue?vue&type=style&index=0&id=6409943e&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _FileBrowser_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FileBrowser_vue_vue_type_template_id_6409943e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _FileBrowser_vue_vue_type_template_id_6409943e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "6409943e",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/FilesView/FileBrowser.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/FilesView/FileBrowser.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/FilesView/FileBrowser.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FileBrowser_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./FileBrowser.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/FileBrowser.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FileBrowser_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/FilesView/FileBrowser.vue?vue&type=style&index=0&id=6409943e&scoped=true&lang=scss&":
/*!*********************************************************************************************************************!*\
  !*** ./resources/js/components/FilesView/FileBrowser.vue?vue&type=style&index=0&id=6409943e&scoped=true&lang=scss& ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_FileBrowser_vue_vue_type_style_index_0_id_6409943e_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./FileBrowser.vue?vue&type=style&index=0&id=6409943e&scoped=true&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/FileBrowser.vue?vue&type=style&index=0&id=6409943e&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_FileBrowser_vue_vue_type_style_index_0_id_6409943e_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_FileBrowser_vue_vue_type_style_index_0_id_6409943e_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_FileBrowser_vue_vue_type_style_index_0_id_6409943e_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_FileBrowser_vue_vue_type_style_index_0_id_6409943e_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/FilesView/FileBrowser.vue?vue&type=template&id=6409943e&scoped=true&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/components/FilesView/FileBrowser.vue?vue&type=template&id=6409943e&scoped=true& ***!
  \******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FileBrowser_vue_vue_type_template_id_6409943e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./FileBrowser.vue?vue&type=template&id=6409943e&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/FileBrowser.vue?vue&type=template&id=6409943e&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FileBrowser_vue_vue_type_template_id_6409943e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FileBrowser_vue_vue_type_template_id_6409943e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/FilesView/FileItemGrid.vue":
/*!************************************************************!*\
  !*** ./resources/js/components/FilesView/FileItemGrid.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FileItemGrid_vue_vue_type_template_id_2085e75a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FileItemGrid.vue?vue&type=template&id=2085e75a&scoped=true& */ "./resources/js/components/FilesView/FileItemGrid.vue?vue&type=template&id=2085e75a&scoped=true&");
/* harmony import */ var _FileItemGrid_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FileItemGrid.vue?vue&type=script&lang=js& */ "./resources/js/components/FilesView/FileItemGrid.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _FileItemGrid_vue_vue_type_style_index_0_id_2085e75a_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FileItemGrid.vue?vue&type=style&index=0&id=2085e75a&scoped=true&lang=scss& */ "./resources/js/components/FilesView/FileItemGrid.vue?vue&type=style&index=0&id=2085e75a&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _FileItemGrid_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FileItemGrid_vue_vue_type_template_id_2085e75a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _FileItemGrid_vue_vue_type_template_id_2085e75a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "2085e75a",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/FilesView/FileItemGrid.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/FilesView/FileItemGrid.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/FilesView/FileItemGrid.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FileItemGrid_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./FileItemGrid.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/FileItemGrid.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FileItemGrid_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/FilesView/FileItemGrid.vue?vue&type=style&index=0&id=2085e75a&scoped=true&lang=scss&":
/*!**********************************************************************************************************************!*\
  !*** ./resources/js/components/FilesView/FileItemGrid.vue?vue&type=style&index=0&id=2085e75a&scoped=true&lang=scss& ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_FileItemGrid_vue_vue_type_style_index_0_id_2085e75a_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./FileItemGrid.vue?vue&type=style&index=0&id=2085e75a&scoped=true&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/FileItemGrid.vue?vue&type=style&index=0&id=2085e75a&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_FileItemGrid_vue_vue_type_style_index_0_id_2085e75a_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_FileItemGrid_vue_vue_type_style_index_0_id_2085e75a_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_FileItemGrid_vue_vue_type_style_index_0_id_2085e75a_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_FileItemGrid_vue_vue_type_style_index_0_id_2085e75a_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/FilesView/FileItemGrid.vue?vue&type=template&id=2085e75a&scoped=true&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/components/FilesView/FileItemGrid.vue?vue&type=template&id=2085e75a&scoped=true& ***!
  \*******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FileItemGrid_vue_vue_type_template_id_2085e75a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./FileItemGrid.vue?vue&type=template&id=2085e75a&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/FileItemGrid.vue?vue&type=template&id=2085e75a&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FileItemGrid_vue_vue_type_template_id_2085e75a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FileItemGrid_vue_vue_type_template_id_2085e75a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/FilesView/FileItemList.vue":
/*!************************************************************!*\
  !*** ./resources/js/components/FilesView/FileItemList.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FileItemList_vue_vue_type_template_id_2cfcc5ab_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FileItemList.vue?vue&type=template&id=2cfcc5ab&scoped=true& */ "./resources/js/components/FilesView/FileItemList.vue?vue&type=template&id=2cfcc5ab&scoped=true&");
/* harmony import */ var _FileItemList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FileItemList.vue?vue&type=script&lang=js& */ "./resources/js/components/FilesView/FileItemList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _FileItemList_vue_vue_type_style_index_0_id_2cfcc5ab_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FileItemList.vue?vue&type=style&index=0&id=2cfcc5ab&scoped=true&lang=scss& */ "./resources/js/components/FilesView/FileItemList.vue?vue&type=style&index=0&id=2cfcc5ab&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _FileItemList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FileItemList_vue_vue_type_template_id_2cfcc5ab_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _FileItemList_vue_vue_type_template_id_2cfcc5ab_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "2cfcc5ab",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/FilesView/FileItemList.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/FilesView/FileItemList.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/FilesView/FileItemList.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FileItemList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./FileItemList.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/FileItemList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FileItemList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/FilesView/FileItemList.vue?vue&type=style&index=0&id=2cfcc5ab&scoped=true&lang=scss&":
/*!**********************************************************************************************************************!*\
  !*** ./resources/js/components/FilesView/FileItemList.vue?vue&type=style&index=0&id=2cfcc5ab&scoped=true&lang=scss& ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_FileItemList_vue_vue_type_style_index_0_id_2cfcc5ab_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./FileItemList.vue?vue&type=style&index=0&id=2cfcc5ab&scoped=true&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/FileItemList.vue?vue&type=style&index=0&id=2cfcc5ab&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_FileItemList_vue_vue_type_style_index_0_id_2cfcc5ab_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_FileItemList_vue_vue_type_style_index_0_id_2cfcc5ab_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_FileItemList_vue_vue_type_style_index_0_id_2cfcc5ab_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_FileItemList_vue_vue_type_style_index_0_id_2cfcc5ab_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/FilesView/FileItemList.vue?vue&type=template&id=2cfcc5ab&scoped=true&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/components/FilesView/FileItemList.vue?vue&type=template&id=2cfcc5ab&scoped=true& ***!
  \*******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FileItemList_vue_vue_type_template_id_2cfcc5ab_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./FileItemList.vue?vue&type=template&id=2cfcc5ab&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/FileItemList.vue?vue&type=template&id=2cfcc5ab&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FileItemList_vue_vue_type_template_id_2cfcc5ab_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FileItemList_vue_vue_type_template_id_2cfcc5ab_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/FilesView/MobileActionButton.vue":
/*!******************************************************************!*\
  !*** ./resources/js/components/FilesView/MobileActionButton.vue ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MobileActionButton_vue_vue_type_template_id_95f75cf0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MobileActionButton.vue?vue&type=template&id=95f75cf0&scoped=true& */ "./resources/js/components/FilesView/MobileActionButton.vue?vue&type=template&id=95f75cf0&scoped=true&");
/* harmony import */ var _MobileActionButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MobileActionButton.vue?vue&type=script&lang=js& */ "./resources/js/components/FilesView/MobileActionButton.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _MobileActionButton_vue_vue_type_style_index_0_id_95f75cf0_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MobileActionButton.vue?vue&type=style&index=0&id=95f75cf0&scoped=true&lang=scss& */ "./resources/js/components/FilesView/MobileActionButton.vue?vue&type=style&index=0&id=95f75cf0&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _MobileActionButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MobileActionButton_vue_vue_type_template_id_95f75cf0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _MobileActionButton_vue_vue_type_template_id_95f75cf0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "95f75cf0",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/FilesView/MobileActionButton.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/FilesView/MobileActionButton.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/FilesView/MobileActionButton.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MobileActionButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./MobileActionButton.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/MobileActionButton.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MobileActionButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/FilesView/MobileActionButton.vue?vue&type=style&index=0&id=95f75cf0&scoped=true&lang=scss&":
/*!****************************************************************************************************************************!*\
  !*** ./resources/js/components/FilesView/MobileActionButton.vue?vue&type=style&index=0&id=95f75cf0&scoped=true&lang=scss& ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_MobileActionButton_vue_vue_type_style_index_0_id_95f75cf0_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./MobileActionButton.vue?vue&type=style&index=0&id=95f75cf0&scoped=true&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/MobileActionButton.vue?vue&type=style&index=0&id=95f75cf0&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_MobileActionButton_vue_vue_type_style_index_0_id_95f75cf0_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_MobileActionButton_vue_vue_type_style_index_0_id_95f75cf0_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_MobileActionButton_vue_vue_type_style_index_0_id_95f75cf0_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_MobileActionButton_vue_vue_type_style_index_0_id_95f75cf0_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/FilesView/MobileActionButton.vue?vue&type=template&id=95f75cf0&scoped=true&":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/components/FilesView/MobileActionButton.vue?vue&type=template&id=95f75cf0&scoped=true& ***!
  \*************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MobileActionButton_vue_vue_type_template_id_95f75cf0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./MobileActionButton.vue?vue&type=template&id=95f75cf0&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/MobileActionButton.vue?vue&type=template&id=95f75cf0&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MobileActionButton_vue_vue_type_template_id_95f75cf0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MobileActionButton_vue_vue_type_template_id_95f75cf0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/FilesView/MobileActionButtonUpload.vue":
/*!************************************************************************!*\
  !*** ./resources/js/components/FilesView/MobileActionButtonUpload.vue ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MobileActionButtonUpload_vue_vue_type_template_id_b04b41ae_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MobileActionButtonUpload.vue?vue&type=template&id=b04b41ae&scoped=true& */ "./resources/js/components/FilesView/MobileActionButtonUpload.vue?vue&type=template&id=b04b41ae&scoped=true&");
/* harmony import */ var _MobileActionButtonUpload_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MobileActionButtonUpload.vue?vue&type=script&lang=js& */ "./resources/js/components/FilesView/MobileActionButtonUpload.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _MobileActionButtonUpload_vue_vue_type_style_index_0_id_b04b41ae_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MobileActionButtonUpload.vue?vue&type=style&index=0&id=b04b41ae&scoped=true&lang=scss& */ "./resources/js/components/FilesView/MobileActionButtonUpload.vue?vue&type=style&index=0&id=b04b41ae&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _MobileActionButtonUpload_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MobileActionButtonUpload_vue_vue_type_template_id_b04b41ae_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _MobileActionButtonUpload_vue_vue_type_template_id_b04b41ae_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "b04b41ae",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/FilesView/MobileActionButtonUpload.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/FilesView/MobileActionButtonUpload.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/FilesView/MobileActionButtonUpload.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MobileActionButtonUpload_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./MobileActionButtonUpload.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/MobileActionButtonUpload.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MobileActionButtonUpload_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/FilesView/MobileActionButtonUpload.vue?vue&type=style&index=0&id=b04b41ae&scoped=true&lang=scss&":
/*!**********************************************************************************************************************************!*\
  !*** ./resources/js/components/FilesView/MobileActionButtonUpload.vue?vue&type=style&index=0&id=b04b41ae&scoped=true&lang=scss& ***!
  \**********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_MobileActionButtonUpload_vue_vue_type_style_index_0_id_b04b41ae_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./MobileActionButtonUpload.vue?vue&type=style&index=0&id=b04b41ae&scoped=true&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/MobileActionButtonUpload.vue?vue&type=style&index=0&id=b04b41ae&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_MobileActionButtonUpload_vue_vue_type_style_index_0_id_b04b41ae_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_MobileActionButtonUpload_vue_vue_type_style_index_0_id_b04b41ae_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_MobileActionButtonUpload_vue_vue_type_style_index_0_id_b04b41ae_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_MobileActionButtonUpload_vue_vue_type_style_index_0_id_b04b41ae_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/FilesView/MobileActionButtonUpload.vue?vue&type=template&id=b04b41ae&scoped=true&":
/*!*******************************************************************************************************************!*\
  !*** ./resources/js/components/FilesView/MobileActionButtonUpload.vue?vue&type=template&id=b04b41ae&scoped=true& ***!
  \*******************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MobileActionButtonUpload_vue_vue_type_template_id_b04b41ae_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./MobileActionButtonUpload.vue?vue&type=template&id=b04b41ae&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/MobileActionButtonUpload.vue?vue&type=template&id=b04b41ae&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MobileActionButtonUpload_vue_vue_type_template_id_b04b41ae_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MobileActionButtonUpload_vue_vue_type_template_id_b04b41ae_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/FilesView/MobileActions.vue":
/*!*************************************************************!*\
  !*** ./resources/js/components/FilesView/MobileActions.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MobileActions_vue_vue_type_template_id_18dc5ba6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MobileActions.vue?vue&type=template&id=18dc5ba6&scoped=true& */ "./resources/js/components/FilesView/MobileActions.vue?vue&type=template&id=18dc5ba6&scoped=true&");
/* harmony import */ var _MobileActions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MobileActions.vue?vue&type=script&lang=js& */ "./resources/js/components/FilesView/MobileActions.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _MobileActions_vue_vue_type_style_index_0_id_18dc5ba6_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MobileActions.vue?vue&type=style&index=0&id=18dc5ba6&scoped=true&lang=scss& */ "./resources/js/components/FilesView/MobileActions.vue?vue&type=style&index=0&id=18dc5ba6&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _MobileActions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MobileActions_vue_vue_type_template_id_18dc5ba6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _MobileActions_vue_vue_type_template_id_18dc5ba6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "18dc5ba6",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/FilesView/MobileActions.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/FilesView/MobileActions.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/FilesView/MobileActions.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MobileActions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./MobileActions.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/MobileActions.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MobileActions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/FilesView/MobileActions.vue?vue&type=style&index=0&id=18dc5ba6&scoped=true&lang=scss&":
/*!***********************************************************************************************************************!*\
  !*** ./resources/js/components/FilesView/MobileActions.vue?vue&type=style&index=0&id=18dc5ba6&scoped=true&lang=scss& ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_MobileActions_vue_vue_type_style_index_0_id_18dc5ba6_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./MobileActions.vue?vue&type=style&index=0&id=18dc5ba6&scoped=true&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/MobileActions.vue?vue&type=style&index=0&id=18dc5ba6&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_MobileActions_vue_vue_type_style_index_0_id_18dc5ba6_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_MobileActions_vue_vue_type_style_index_0_id_18dc5ba6_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_MobileActions_vue_vue_type_style_index_0_id_18dc5ba6_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_MobileActions_vue_vue_type_style_index_0_id_18dc5ba6_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/FilesView/MobileActions.vue?vue&type=template&id=18dc5ba6&scoped=true&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/components/FilesView/MobileActions.vue?vue&type=template&id=18dc5ba6&scoped=true& ***!
  \********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MobileActions_vue_vue_type_template_id_18dc5ba6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./MobileActions.vue?vue&type=template&id=18dc5ba6&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/MobileActions.vue?vue&type=template&id=18dc5ba6&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MobileActions_vue_vue_type_template_id_18dc5ba6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MobileActions_vue_vue_type_template_id_18dc5ba6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/FilesView/MobileMultiSelectButton.vue":
/*!***********************************************************************!*\
  !*** ./resources/js/components/FilesView/MobileMultiSelectButton.vue ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MobileMultiSelectButton_vue_vue_type_template_id_1e539d57_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MobileMultiSelectButton.vue?vue&type=template&id=1e539d57&scoped=true& */ "./resources/js/components/FilesView/MobileMultiSelectButton.vue?vue&type=template&id=1e539d57&scoped=true&");
/* harmony import */ var _MobileMultiSelectButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MobileMultiSelectButton.vue?vue&type=script&lang=js& */ "./resources/js/components/FilesView/MobileMultiSelectButton.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _MobileMultiSelectButton_vue_vue_type_style_index_0_id_1e539d57_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MobileMultiSelectButton.vue?vue&type=style&index=0&id=1e539d57&scoped=true&lang=scss& */ "./resources/js/components/FilesView/MobileMultiSelectButton.vue?vue&type=style&index=0&id=1e539d57&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _MobileMultiSelectButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MobileMultiSelectButton_vue_vue_type_template_id_1e539d57_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _MobileMultiSelectButton_vue_vue_type_template_id_1e539d57_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "1e539d57",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/FilesView/MobileMultiSelectButton.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/FilesView/MobileMultiSelectButton.vue?vue&type=script&lang=js&":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/FilesView/MobileMultiSelectButton.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MobileMultiSelectButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./MobileMultiSelectButton.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/MobileMultiSelectButton.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MobileMultiSelectButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/FilesView/MobileMultiSelectButton.vue?vue&type=style&index=0&id=1e539d57&scoped=true&lang=scss&":
/*!*********************************************************************************************************************************!*\
  !*** ./resources/js/components/FilesView/MobileMultiSelectButton.vue?vue&type=style&index=0&id=1e539d57&scoped=true&lang=scss& ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_MobileMultiSelectButton_vue_vue_type_style_index_0_id_1e539d57_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./MobileMultiSelectButton.vue?vue&type=style&index=0&id=1e539d57&scoped=true&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/MobileMultiSelectButton.vue?vue&type=style&index=0&id=1e539d57&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_MobileMultiSelectButton_vue_vue_type_style_index_0_id_1e539d57_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_MobileMultiSelectButton_vue_vue_type_style_index_0_id_1e539d57_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_MobileMultiSelectButton_vue_vue_type_style_index_0_id_1e539d57_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_MobileMultiSelectButton_vue_vue_type_style_index_0_id_1e539d57_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/FilesView/MobileMultiSelectButton.vue?vue&type=template&id=1e539d57&scoped=true&":
/*!******************************************************************************************************************!*\
  !*** ./resources/js/components/FilesView/MobileMultiSelectButton.vue?vue&type=template&id=1e539d57&scoped=true& ***!
  \******************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MobileMultiSelectButton_vue_vue_type_template_id_1e539d57_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./MobileMultiSelectButton.vue?vue&type=template&id=1e539d57&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/MobileMultiSelectButton.vue?vue&type=template&id=1e539d57&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MobileMultiSelectButton_vue_vue_type_template_id_1e539d57_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MobileMultiSelectButton_vue_vue_type_template_id_1e539d57_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/FilesView/MobileToolbar.vue":
/*!*************************************************************!*\
  !*** ./resources/js/components/FilesView/MobileToolbar.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MobileToolbar_vue_vue_type_template_id_005ba5ab_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MobileToolbar.vue?vue&type=template&id=005ba5ab&scoped=true& */ "./resources/js/components/FilesView/MobileToolbar.vue?vue&type=template&id=005ba5ab&scoped=true&");
/* harmony import */ var _MobileToolbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MobileToolbar.vue?vue&type=script&lang=js& */ "./resources/js/components/FilesView/MobileToolbar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _MobileToolbar_vue_vue_type_style_index_0_id_005ba5ab_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MobileToolbar.vue?vue&type=style&index=0&id=005ba5ab&scoped=true&lang=scss& */ "./resources/js/components/FilesView/MobileToolbar.vue?vue&type=style&index=0&id=005ba5ab&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _MobileToolbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MobileToolbar_vue_vue_type_template_id_005ba5ab_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _MobileToolbar_vue_vue_type_template_id_005ba5ab_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "005ba5ab",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/FilesView/MobileToolbar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/FilesView/MobileToolbar.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/FilesView/MobileToolbar.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MobileToolbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./MobileToolbar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/MobileToolbar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MobileToolbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/FilesView/MobileToolbar.vue?vue&type=style&index=0&id=005ba5ab&scoped=true&lang=scss&":
/*!***********************************************************************************************************************!*\
  !*** ./resources/js/components/FilesView/MobileToolbar.vue?vue&type=style&index=0&id=005ba5ab&scoped=true&lang=scss& ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_MobileToolbar_vue_vue_type_style_index_0_id_005ba5ab_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./MobileToolbar.vue?vue&type=style&index=0&id=005ba5ab&scoped=true&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/MobileToolbar.vue?vue&type=style&index=0&id=005ba5ab&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_MobileToolbar_vue_vue_type_style_index_0_id_005ba5ab_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_MobileToolbar_vue_vue_type_style_index_0_id_005ba5ab_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_MobileToolbar_vue_vue_type_style_index_0_id_005ba5ab_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_MobileToolbar_vue_vue_type_style_index_0_id_005ba5ab_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/FilesView/MobileToolbar.vue?vue&type=template&id=005ba5ab&scoped=true&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/components/FilesView/MobileToolbar.vue?vue&type=template&id=005ba5ab&scoped=true& ***!
  \********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MobileToolbar_vue_vue_type_template_id_005ba5ab_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./MobileToolbar.vue?vue&type=template&id=005ba5ab&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/MobileToolbar.vue?vue&type=template&id=005ba5ab&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MobileToolbar_vue_vue_type_template_id_005ba5ab_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MobileToolbar_vue_vue_type_template_id_005ba5ab_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/FilesView/Option.vue":
/*!******************************************************!*\
  !*** ./resources/js/components/FilesView/Option.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Option_vue_vue_type_template_id_c9acfa9a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Option.vue?vue&type=template&id=c9acfa9a&scoped=true& */ "./resources/js/components/FilesView/Option.vue?vue&type=template&id=c9acfa9a&scoped=true&");
/* harmony import */ var _Option_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Option.vue?vue&type=script&lang=js& */ "./resources/js/components/FilesView/Option.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Option_vue_vue_type_style_index_0_id_c9acfa9a_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Option.vue?vue&type=style&index=0&id=c9acfa9a&scoped=true&lang=scss& */ "./resources/js/components/FilesView/Option.vue?vue&type=style&index=0&id=c9acfa9a&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Option_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Option_vue_vue_type_template_id_c9acfa9a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Option_vue_vue_type_template_id_c9acfa9a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "c9acfa9a",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/FilesView/Option.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/FilesView/Option.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/FilesView/Option.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Option_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Option.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/Option.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Option_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/FilesView/Option.vue?vue&type=style&index=0&id=c9acfa9a&scoped=true&lang=scss&":
/*!****************************************************************************************************************!*\
  !*** ./resources/js/components/FilesView/Option.vue?vue&type=style&index=0&id=c9acfa9a&scoped=true&lang=scss& ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Option_vue_vue_type_style_index_0_id_c9acfa9a_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./Option.vue?vue&type=style&index=0&id=c9acfa9a&scoped=true&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/Option.vue?vue&type=style&index=0&id=c9acfa9a&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Option_vue_vue_type_style_index_0_id_c9acfa9a_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Option_vue_vue_type_style_index_0_id_c9acfa9a_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Option_vue_vue_type_style_index_0_id_c9acfa9a_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Option_vue_vue_type_style_index_0_id_c9acfa9a_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/FilesView/Option.vue?vue&type=template&id=c9acfa9a&scoped=true&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/FilesView/Option.vue?vue&type=template&id=c9acfa9a&scoped=true& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Option_vue_vue_type_template_id_c9acfa9a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Option.vue?vue&type=template&id=c9acfa9a&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/Option.vue?vue&type=template&id=c9acfa9a&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Option_vue_vue_type_template_id_c9acfa9a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Option_vue_vue_type_template_id_c9acfa9a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/FilesView/OptionGroup.vue":
/*!***********************************************************!*\
  !*** ./resources/js/components/FilesView/OptionGroup.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _OptionGroup_vue_vue_type_template_id_85830b88_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./OptionGroup.vue?vue&type=template&id=85830b88&scoped=true& */ "./resources/js/components/FilesView/OptionGroup.vue?vue&type=template&id=85830b88&scoped=true&");
/* harmony import */ var _OptionGroup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OptionGroup.vue?vue&type=script&lang=js& */ "./resources/js/components/FilesView/OptionGroup.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _OptionGroup_vue_vue_type_style_index_0_id_85830b88_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./OptionGroup.vue?vue&type=style&index=0&id=85830b88&scoped=true&lang=scss& */ "./resources/js/components/FilesView/OptionGroup.vue?vue&type=style&index=0&id=85830b88&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _OptionGroup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _OptionGroup_vue_vue_type_template_id_85830b88_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _OptionGroup_vue_vue_type_template_id_85830b88_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "85830b88",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/FilesView/OptionGroup.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/FilesView/OptionGroup.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/FilesView/OptionGroup.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OptionGroup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./OptionGroup.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/OptionGroup.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OptionGroup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/FilesView/OptionGroup.vue?vue&type=style&index=0&id=85830b88&scoped=true&lang=scss&":
/*!*********************************************************************************************************************!*\
  !*** ./resources/js/components/FilesView/OptionGroup.vue?vue&type=style&index=0&id=85830b88&scoped=true&lang=scss& ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_OptionGroup_vue_vue_type_style_index_0_id_85830b88_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./OptionGroup.vue?vue&type=style&index=0&id=85830b88&scoped=true&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/OptionGroup.vue?vue&type=style&index=0&id=85830b88&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_OptionGroup_vue_vue_type_style_index_0_id_85830b88_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_OptionGroup_vue_vue_type_style_index_0_id_85830b88_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_OptionGroup_vue_vue_type_style_index_0_id_85830b88_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_OptionGroup_vue_vue_type_style_index_0_id_85830b88_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/FilesView/OptionGroup.vue?vue&type=template&id=85830b88&scoped=true&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/components/FilesView/OptionGroup.vue?vue&type=template&id=85830b88&scoped=true& ***!
  \******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OptionGroup_vue_vue_type_template_id_85830b88_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./OptionGroup.vue?vue&type=template&id=85830b88&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/OptionGroup.vue?vue&type=template&id=85830b88&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OptionGroup_vue_vue_type_template_id_85830b88_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OptionGroup_vue_vue_type_template_id_85830b88_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/FilesView/ProgressBar.vue":
/*!***********************************************************!*\
  !*** ./resources/js/components/FilesView/ProgressBar.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ProgressBar_vue_vue_type_template_id_7fb97850_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProgressBar.vue?vue&type=template&id=7fb97850&scoped=true& */ "./resources/js/components/FilesView/ProgressBar.vue?vue&type=template&id=7fb97850&scoped=true&");
/* harmony import */ var _ProgressBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProgressBar.vue?vue&type=script&lang=js& */ "./resources/js/components/FilesView/ProgressBar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ProgressBar_vue_vue_type_style_index_0_id_7fb97850_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProgressBar.vue?vue&type=style&index=0&id=7fb97850&scoped=true&lang=scss& */ "./resources/js/components/FilesView/ProgressBar.vue?vue&type=style&index=0&id=7fb97850&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ProgressBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ProgressBar_vue_vue_type_template_id_7fb97850_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ProgressBar_vue_vue_type_template_id_7fb97850_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "7fb97850",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/FilesView/ProgressBar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/FilesView/ProgressBar.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/FilesView/ProgressBar.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProgressBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ProgressBar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/ProgressBar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProgressBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/FilesView/ProgressBar.vue?vue&type=style&index=0&id=7fb97850&scoped=true&lang=scss&":
/*!*********************************************************************************************************************!*\
  !*** ./resources/js/components/FilesView/ProgressBar.vue?vue&type=style&index=0&id=7fb97850&scoped=true&lang=scss& ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ProgressBar_vue_vue_type_style_index_0_id_7fb97850_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./ProgressBar.vue?vue&type=style&index=0&id=7fb97850&scoped=true&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/ProgressBar.vue?vue&type=style&index=0&id=7fb97850&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ProgressBar_vue_vue_type_style_index_0_id_7fb97850_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ProgressBar_vue_vue_type_style_index_0_id_7fb97850_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ProgressBar_vue_vue_type_style_index_0_id_7fb97850_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ProgressBar_vue_vue_type_style_index_0_id_7fb97850_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/FilesView/ProgressBar.vue?vue&type=template&id=7fb97850&scoped=true&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/components/FilesView/ProgressBar.vue?vue&type=template&id=7fb97850&scoped=true& ***!
  \******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProgressBar_vue_vue_type_template_id_7fb97850_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./ProgressBar.vue?vue&type=template&id=7fb97850&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/ProgressBar.vue?vue&type=template&id=7fb97850&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProgressBar_vue_vue_type_template_id_7fb97850_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProgressBar_vue_vue_type_template_id_7fb97850_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/FilesView/SearchBar.vue":
/*!*********************************************************!*\
  !*** ./resources/js/components/FilesView/SearchBar.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SearchBar_vue_vue_type_template_id_23e12306_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SearchBar.vue?vue&type=template&id=23e12306&scoped=true& */ "./resources/js/components/FilesView/SearchBar.vue?vue&type=template&id=23e12306&scoped=true&");
/* harmony import */ var _SearchBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SearchBar.vue?vue&type=script&lang=js& */ "./resources/js/components/FilesView/SearchBar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _SearchBar_vue_vue_type_style_index_0_id_23e12306_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SearchBar.vue?vue&type=style&index=0&id=23e12306&scoped=true&lang=scss& */ "./resources/js/components/FilesView/SearchBar.vue?vue&type=style&index=0&id=23e12306&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _SearchBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SearchBar_vue_vue_type_template_id_23e12306_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SearchBar_vue_vue_type_template_id_23e12306_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "23e12306",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/FilesView/SearchBar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/FilesView/SearchBar.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/FilesView/SearchBar.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./SearchBar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/SearchBar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/FilesView/SearchBar.vue?vue&type=style&index=0&id=23e12306&scoped=true&lang=scss&":
/*!*******************************************************************************************************************!*\
  !*** ./resources/js/components/FilesView/SearchBar.vue?vue&type=style&index=0&id=23e12306&scoped=true&lang=scss& ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchBar_vue_vue_type_style_index_0_id_23e12306_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./SearchBar.vue?vue&type=style&index=0&id=23e12306&scoped=true&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/SearchBar.vue?vue&type=style&index=0&id=23e12306&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchBar_vue_vue_type_style_index_0_id_23e12306_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchBar_vue_vue_type_style_index_0_id_23e12306_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchBar_vue_vue_type_style_index_0_id_23e12306_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchBar_vue_vue_type_style_index_0_id_23e12306_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/FilesView/SearchBar.vue?vue&type=template&id=23e12306&scoped=true&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/components/FilesView/SearchBar.vue?vue&type=template&id=23e12306&scoped=true& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchBar_vue_vue_type_template_id_23e12306_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./SearchBar.vue?vue&type=template&id=23e12306&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/SearchBar.vue?vue&type=template&id=23e12306&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchBar_vue_vue_type_template_id_23e12306_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchBar_vue_vue_type_template_id_23e12306_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/FilesView/ToolbarButtonUpload.vue":
/*!*******************************************************************!*\
  !*** ./resources/js/components/FilesView/ToolbarButtonUpload.vue ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ToolbarButtonUpload_vue_vue_type_template_id_8eb7bbc0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ToolbarButtonUpload.vue?vue&type=template&id=8eb7bbc0&scoped=true& */ "./resources/js/components/FilesView/ToolbarButtonUpload.vue?vue&type=template&id=8eb7bbc0&scoped=true&");
/* harmony import */ var _ToolbarButtonUpload_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ToolbarButtonUpload.vue?vue&type=script&lang=js& */ "./resources/js/components/FilesView/ToolbarButtonUpload.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ToolbarButtonUpload_vue_vue_type_style_index_0_id_8eb7bbc0_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ToolbarButtonUpload.vue?vue&type=style&index=0&id=8eb7bbc0&scoped=true&lang=scss& */ "./resources/js/components/FilesView/ToolbarButtonUpload.vue?vue&type=style&index=0&id=8eb7bbc0&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ToolbarButtonUpload_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ToolbarButtonUpload_vue_vue_type_template_id_8eb7bbc0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ToolbarButtonUpload_vue_vue_type_template_id_8eb7bbc0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "8eb7bbc0",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/FilesView/ToolbarButtonUpload.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/FilesView/ToolbarButtonUpload.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/FilesView/ToolbarButtonUpload.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ToolbarButtonUpload_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ToolbarButtonUpload.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/ToolbarButtonUpload.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ToolbarButtonUpload_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/FilesView/ToolbarButtonUpload.vue?vue&type=style&index=0&id=8eb7bbc0&scoped=true&lang=scss&":
/*!*****************************************************************************************************************************!*\
  !*** ./resources/js/components/FilesView/ToolbarButtonUpload.vue?vue&type=style&index=0&id=8eb7bbc0&scoped=true&lang=scss& ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ToolbarButtonUpload_vue_vue_type_style_index_0_id_8eb7bbc0_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./ToolbarButtonUpload.vue?vue&type=style&index=0&id=8eb7bbc0&scoped=true&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/ToolbarButtonUpload.vue?vue&type=style&index=0&id=8eb7bbc0&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ToolbarButtonUpload_vue_vue_type_style_index_0_id_8eb7bbc0_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ToolbarButtonUpload_vue_vue_type_style_index_0_id_8eb7bbc0_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ToolbarButtonUpload_vue_vue_type_style_index_0_id_8eb7bbc0_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ToolbarButtonUpload_vue_vue_type_style_index_0_id_8eb7bbc0_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/FilesView/ToolbarButtonUpload.vue?vue&type=template&id=8eb7bbc0&scoped=true&":
/*!**************************************************************************************************************!*\
  !*** ./resources/js/components/FilesView/ToolbarButtonUpload.vue?vue&type=template&id=8eb7bbc0&scoped=true& ***!
  \**************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ToolbarButtonUpload_vue_vue_type_template_id_8eb7bbc0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./ToolbarButtonUpload.vue?vue&type=template&id=8eb7bbc0&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/ToolbarButtonUpload.vue?vue&type=template&id=8eb7bbc0&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ToolbarButtonUpload_vue_vue_type_template_id_8eb7bbc0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ToolbarButtonUpload_vue_vue_type_template_id_8eb7bbc0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/FilesView/UploadProgress.vue":
/*!**************************************************************!*\
  !*** ./resources/js/components/FilesView/UploadProgress.vue ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UploadProgress_vue_vue_type_template_id_4c87f9e8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UploadProgress.vue?vue&type=template&id=4c87f9e8&scoped=true& */ "./resources/js/components/FilesView/UploadProgress.vue?vue&type=template&id=4c87f9e8&scoped=true&");
/* harmony import */ var _UploadProgress_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UploadProgress.vue?vue&type=script&lang=js& */ "./resources/js/components/FilesView/UploadProgress.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _UploadProgress_vue_vue_type_style_index_0_id_4c87f9e8_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UploadProgress.vue?vue&type=style&index=0&id=4c87f9e8&scoped=true&lang=scss& */ "./resources/js/components/FilesView/UploadProgress.vue?vue&type=style&index=0&id=4c87f9e8&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _UploadProgress_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _UploadProgress_vue_vue_type_template_id_4c87f9e8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _UploadProgress_vue_vue_type_template_id_4c87f9e8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "4c87f9e8",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/FilesView/UploadProgress.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/FilesView/UploadProgress.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/FilesView/UploadProgress.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UploadProgress_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./UploadProgress.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/UploadProgress.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UploadProgress_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/FilesView/UploadProgress.vue?vue&type=style&index=0&id=4c87f9e8&scoped=true&lang=scss&":
/*!************************************************************************************************************************!*\
  !*** ./resources/js/components/FilesView/UploadProgress.vue?vue&type=style&index=0&id=4c87f9e8&scoped=true&lang=scss& ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_UploadProgress_vue_vue_type_style_index_0_id_4c87f9e8_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./UploadProgress.vue?vue&type=style&index=0&id=4c87f9e8&scoped=true&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/UploadProgress.vue?vue&type=style&index=0&id=4c87f9e8&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_UploadProgress_vue_vue_type_style_index_0_id_4c87f9e8_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_UploadProgress_vue_vue_type_style_index_0_id_4c87f9e8_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_UploadProgress_vue_vue_type_style_index_0_id_4c87f9e8_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_UploadProgress_vue_vue_type_style_index_0_id_4c87f9e8_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/FilesView/UploadProgress.vue?vue&type=template&id=4c87f9e8&scoped=true&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/components/FilesView/UploadProgress.vue?vue&type=template&id=4c87f9e8&scoped=true& ***!
  \*********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UploadProgress_vue_vue_type_template_id_4c87f9e8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./UploadProgress.vue?vue&type=template&id=4c87f9e8&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/UploadProgress.vue?vue&type=template&id=4c87f9e8&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UploadProgress_vue_vue_type_template_id_4c87f9e8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UploadProgress_vue_vue_type_template_id_4c87f9e8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/FilesView/images/acrobat.svg":
/*!**************************************************************!*\
  !*** ./resources/js/components/FilesView/images/acrobat.svg ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/acrobat.svg?f87110f917ab6bbe9d54b8a59631d98f";

/***/ }),

/***/ "./resources/js/components/FilesView/images/audio.svg":
/*!************************************************************!*\
  !*** ./resources/js/components/FilesView/images/audio.svg ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/audio.svg?9baf5b5e3dde7566feb3905f2f8bc726";

/***/ }),

/***/ "./resources/js/components/FilesView/images/hiC.svg":
/*!**********************************************************!*\
  !*** ./resources/js/components/FilesView/images/hiC.svg ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/hiC.svg?484b0e0f7d3f9443ea1d899abc29b006";

/***/ }),

/***/ "./resources/js/components/FilesView/images/illust.svg":
/*!*************************************************************!*\
  !*** ./resources/js/components/FilesView/images/illust.svg ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/illust.svg?d1c8230b25a55972bdab7966fb61a513";

/***/ }),

/***/ "./resources/js/components/FilesView/images/msExcel.svg":
/*!**************************************************************!*\
  !*** ./resources/js/components/FilesView/images/msExcel.svg ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/msExcel.svg?1f1c13cde8911e72f114252472f1b54a";

/***/ }),

/***/ "./resources/js/components/FilesView/images/msPowerPoint.svg":
/*!*******************************************************************!*\
  !*** ./resources/js/components/FilesView/images/msPowerPoint.svg ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/msPowerPoint.svg?2585a0649a7630ad706858b54a0f4886";

/***/ }),

/***/ "./resources/js/components/FilesView/images/msWord.svg":
/*!*************************************************************!*\
  !*** ./resources/js/components/FilesView/images/msWord.svg ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/msWord.svg?a4693105d6d10c3586f0102a218236be";

/***/ }),

/***/ "./resources/js/components/FilesView/images/photoshop.svg":
/*!****************************************************************!*\
  !*** ./resources/js/components/FilesView/images/photoshop.svg ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/photoshop.svg?ba8dcfe6a3268b23b0c2e5fa5945b116";

/***/ }),

/***/ "./resources/js/components/FilesView/images/video.svg":
/*!************************************************************!*\
  !*** ./resources/js/components/FilesView/images/video.svg ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/video.svg?1f559b766dddddce04b4041dc77b83e2";

/***/ }),

/***/ "./resources/js/components/FilesView/images/zip.svg":
/*!**********************************************************!*\
  !*** ./resources/js/components/FilesView/images/zip.svg ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/zip.svg?b03c50c7ecbdef0dc95a24d1323b89a1";

/***/ })

}]);
//# sourceMappingURL=shared-page.js.map?id=dff24e7fabe18409a273