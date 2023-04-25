(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getOwnPropSymbols = Object.getOwnPropertySymbols;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __propIsEnum = Object.prototype.propertyIsEnumerable;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __spreadValues = (a, b) => {
    for (var prop in b || (b = {}))
      if (__hasOwnProp.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    if (__getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(b)) {
        if (__propIsEnum.call(b, prop))
          __defNormalProp(a, prop, b[prop]);
      }
    return a;
  };
  var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
  var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
    get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
  }) : x)(function(x) {
    if (typeof require !== "undefined")
      return require.apply(this, arguments);
    throw new Error('Dynamic require of "' + x + '" is not supported');
  });
  var __reExport = (target, module, desc) => {
    if (module && typeof module === "object" || typeof module === "function") {
      for (let key of __getOwnPropNames(module))
        if (!__hasOwnProp.call(target, key) && key !== "default")
          __defProp(target, key, { get: () => module[key], enumerable: !(desc = __getOwnPropDesc(module, key)) || desc.enumerable });
    }
    return target;
  };
  var __toModule = (module) => {
    return __reExport(__markAsModule(__defProp(module != null ? __create(__getProtoOf(module)) : {}, "default", module && module.__esModule && "default" in module ? { get: () => module.default, enumerable: true } : { value: module, enumerable: true })), module);
  };

  // src/index.ts
  var import_vue19 = __toModule(__require("vue"));

  // src/ts/interface.ts
  var import_vue18 = __toModule(__require("vue"));

  // src/ts/utils.ts
  var import_vue = __toModule(__require("vue"));
  var isFunction = (value) => typeof value === "function";
  var isString = (value) => typeof value === "string";
  var isNonEmptyString = (value) => isString(value) && value.trim().length > 0;
  var isNumber = (value) => typeof value === "number";
  var isUndefined = (value) => typeof value === "undefined";
  var isObject = (value) => typeof value === "object" && value !== null;
  var isJSX = (obj) => hasProp(obj, "tag") && isNonEmptyString(obj.tag);
  var isTouchEvent = (event) => window.TouchEvent && event instanceof TouchEvent;
  var isToastComponent = (obj) => hasProp(obj, "component") && isToastContent(obj.component);
  var isVueComponent = (c) => isFunction(c) || isObject(c);
  var isToastContent = (obj) => !isUndefined(obj) && (isString(obj) || isVueComponent(obj) || isToastComponent(obj));
  var isDOMRect = (obj) => isObject(obj) && ["height", "width", "right", "left", "top", "bottom"].every((p) => isNumber(obj[p]));
  var hasProp = (obj, propKey) => (isObject(obj) || isFunction(obj)) && propKey in obj;
  var getId = ((i) => () => i++)(0);
  function getX(event) {
    return isTouchEvent(event) ? event.targetTouches[0].clientX : event.clientX;
  }
  function getY(event) {
    return isTouchEvent(event) ? event.targetTouches[0].clientY : event.clientY;
  }
  var removeElement = (el) => {
    if (!isUndefined(el.remove)) {
      el.remove();
    } else if (el.parentNode) {
      el.parentNode.removeChild(el);
    }
  };
  var getVueComponentFromObj = (obj) => {
    if (isToastComponent(obj)) {
      return getVueComponentFromObj(obj.component);
    }
    if (isJSX(obj)) {
      return (0, import_vue.defineComponent)({
        render() {
          return obj;
        }
      });
    }
    return typeof obj === "string" ? obj : (0, import_vue.toRaw)((0, import_vue.unref)(obj));
  };
  var normalizeToastComponent = (obj) => {
    if (typeof obj === "string") {
      return obj;
    }
    const props = hasProp(obj, "props") && isObject(obj.props) ? obj.props : {};
    const listeners = hasProp(obj, "listeners") && isObject(obj.listeners) ? obj.listeners : {};
    return { component: getVueComponentFromObj(obj), props, listeners };
  };
  var isBrowser = () => typeof window !== "undefined";

  // src/ts/eventBus.ts
  var EventBus = class {
    constructor() {
      this.allHandlers = {};
    }
    getHandlers(eventType) {
      return this.allHandlers[eventType] || [];
    }
    on(eventType, handler) {
      const handlers = this.getHandlers(eventType);
      handlers.push(handler);
      this.allHandlers[eventType] = handlers;
    }
    off(eventType, handler) {
      const handlers = this.getHandlers(eventType);
      handlers.splice(handlers.indexOf(handler) >>> 0, 1);
    }
    emit(eventType, event) {
      const handlers = this.getHandlers(eventType);
      handlers.forEach((handler) => handler(event));
    }
  };
  var isEventBusInterface = (e) => ["on", "off", "emit"].every((f) => hasProp(e, f) && isFunction(e[f]));

  // vue:/Users/maronato/Developer/vue-toastification/src/components/VtToastContainer.vue?vue&type=script
  var import_vue16 = __toModule(__require("vue"));

  // src/ts/constants.ts
  var TYPE;
  (function(TYPE2) {
    TYPE2["SUCCESS"] = "success";
    TYPE2["ERROR"] = "error";
    TYPE2["WARNING"] = "warning";
    TYPE2["INFO"] = "info";
    TYPE2["DEFAULT"] = "default";
  })(TYPE || (TYPE = {}));
  var POSITION;
  (function(POSITION2) {
    POSITION2["TOP_LEFT"] = "top-left";
    POSITION2["TOP_CENTER"] = "top-center";
    POSITION2["TOP_RIGHT"] = "top-right";
    POSITION2["BOTTOM_LEFT"] = "bottom-left";
    POSITION2["BOTTOM_CENTER"] = "bottom-center";
    POSITION2["BOTTOM_RIGHT"] = "bottom-right";
  })(POSITION || (POSITION = {}));
  var EVENTS;
  (function(EVENTS2) {
    EVENTS2["ADD"] = "add";
    EVENTS2["DISMISS"] = "dismiss";
    EVENTS2["UPDATE"] = "update";
    EVENTS2["CLEAR"] = "clear";
    EVENTS2["UPDATE_DEFAULTS"] = "update_defaults";
  })(EVENTS || (EVENTS = {}));
  var VT_NAMESPACE = "Vue-Toastification";

  // src/ts/propValidators.ts
  var COMMON = {
    type: {
      type: String,
      default: TYPE.DEFAULT
    },
    classNames: {
      type: [String, Array],
      default: () => []
    },
    trueBoolean: {
      type: Boolean,
      default: true
    }
  };
  var ICON = {
    type: COMMON.type,
    customIcon: {
      type: [String, Boolean, Object, Function],
      default: true
    }
  };
  var CLOSE_BUTTON = {
    component: {
      type: [String, Object, Function, Boolean],
      default: "button"
    },
    classNames: COMMON.classNames,
    showOnHover: {
      type: Boolean,
      default: false
    },
    ariaLabel: {
      type: String,
      default: "close"
    }
  };
  var PROGRESS_BAR = {
    timeout: {
      type: [Number, Boolean],
      default: 5e3
    },
    hideProgressBar: {
      type: Boolean,
      default: false
    },
    isRunning: {
      type: Boolean,
      default: false
    }
  };
  var TRANSITION = {
    transition: {
      type: [Object, String],
      default: `${VT_NAMESPACE}__bounce`
    }
  };
  var CORE_TOAST = {
    position: {
      type: String,
      default: POSITION.TOP_RIGHT
    },
    draggable: COMMON.trueBoolean,
    draggablePercent: {
      type: Number,
      default: 0.6
    },
    pauseOnFocusLoss: COMMON.trueBoolean,
    pauseOnHover: COMMON.trueBoolean,
    closeOnClick: COMMON.trueBoolean,
    timeout: PROGRESS_BAR.timeout,
    hideProgressBar: PROGRESS_BAR.hideProgressBar,
    toastClassName: COMMON.classNames,
    bodyClassName: COMMON.classNames,
    icon: ICON.customIcon,
    closeButton: CLOSE_BUTTON.component,
    closeButtonClassName: CLOSE_BUTTON.classNames,
    showCloseButtonOnHover: CLOSE_BUTTON.showOnHover,
    accessibility: {
      type: Object,
      default: () => ({
        toastRole: "alert",
        closeButtonLabel: "close"
      })
    },
    rtl: {
      type: Boolean,
      default: false
    },
    eventBus: {
      type: Object,
      required: false,
      default: () => new EventBus()
    }
  };
  var TOAST = {
    id: {
      type: [String, Number],
      required: true,
      default: 0
    },
    type: COMMON.type,
    content: {
      type: [String, Object, Function],
      required: true,
      default: ""
    },
    onClick: {
      type: Function,
      default: void 0
    },
    onClose: {
      type: Function,
      default: void 0
    }
  };
  var CONTAINER = {
    container: {
      type: [
        Object,
        Function
      ],
      default: () => document.body
    },
    newestOnTop: COMMON.trueBoolean,
    maxToasts: {
      type: Number,
      default: 20
    },
    transition: TRANSITION.transition,
    toastDefaults: Object,
    filterBeforeCreate: {
      type: Function,
      default: (toast) => toast
    },
    filterToasts: {
      type: Function,
      default: (toasts) => toasts
    },
    containerClassName: COMMON.classNames,
    onMounted: Function,
    shareAppContext: [Boolean, Object]
  };
  var propValidators_default = {
    CORE_TOAST,
    TOAST,
    CONTAINER,
    PROGRESS_BAR,
    ICON,
    TRANSITION,
    CLOSE_BUTTON
  };

  // vue:/Users/maronato/Developer/vue-toastification/src/components/VtToast.vue?vue&type=script
  var import_vue12 = __toModule(__require("vue"));

  // vue:/Users/maronato/Developer/vue-toastification/src/components/VtProgressBar.vue?vue&type=script
  var import_vue2 = __toModule(__require("vue"));
  var VtProgressBar_default = (0, import_vue2.defineComponent)({
    name: "VtProgressBar",
    props: propValidators_default.PROGRESS_BAR,
    data() {
      return {
        hasClass: true
      };
    },
    computed: {
      style() {
        return {
          animationDuration: `${this.timeout}ms`,
          animationPlayState: this.isRunning ? "running" : "paused",
          opacity: this.hideProgressBar ? 0 : 1
        };
      },
      cpClass() {
        return this.hasClass ? `${VT_NAMESPACE}__progress-bar` : "";
      }
    },
    watch: {
      timeout() {
        this.hasClass = false;
        this.$nextTick(() => this.hasClass = true);
      }
    },
    mounted() {
      this.$el.addEventListener("animationend", this.animationEnded);
    },
    beforeUnmount() {
      this.$el.removeEventListener("animationend", this.animationEnded);
    },
    methods: {
      animationEnded() {
        this.$emit("close-toast");
      }
    }
  });

  // vue:/Users/maronato/Developer/vue-toastification/src/components/VtProgressBar.vue?vue&type=template
  var import_vue3 = __toModule(__require("vue"));
  function render(_ctx, _cache) {
    return (0, import_vue3.openBlock)(), (0, import_vue3.createElementBlock)("div", {
      style: (0, import_vue3.normalizeStyle)(_ctx.style),
      class: (0, import_vue3.normalizeClass)(_ctx.cpClass)
    }, null, 6);
  }

  // vue:/Users/maronato/Developer/vue-toastification/src/components/VtProgressBar.vue
  VtProgressBar_default.render = render;
  var VtProgressBar_default2 = VtProgressBar_default;

  // vue:/Users/maronato/Developer/vue-toastification/src/components/VtCloseButton.vue?vue&type=script
  var import_vue4 = __toModule(__require("vue"));
  var VtCloseButton_default = (0, import_vue4.defineComponent)({
    name: "VtCloseButton",
    props: propValidators_default.CLOSE_BUTTON,
    computed: {
      buttonComponent() {
        if (this.component !== false) {
          return getVueComponentFromObj(this.component);
        }
        return "button";
      },
      classes() {
        const classes = [`${VT_NAMESPACE}__close-button`];
        if (this.showOnHover) {
          classes.push("show-on-hover");
        }
        return classes.concat(this.classNames);
      }
    }
  });

  // vue:/Users/maronato/Developer/vue-toastification/src/components/VtCloseButton.vue?vue&type=template
  var import_vue5 = __toModule(__require("vue"));
  var _hoisted_1 = /* @__PURE__ */ (0, import_vue5.createTextVNode)(" \xD7 ");
  function render2(_ctx, _cache) {
    return (0, import_vue5.openBlock)(), (0, import_vue5.createBlock)((0, import_vue5.resolveDynamicComponent)(_ctx.buttonComponent), (0, import_vue5.mergeProps)({
      "aria-label": _ctx.ariaLabel,
      class: _ctx.classes
    }, _ctx.$attrs), {
      default: (0, import_vue5.withCtx)(() => [
        _hoisted_1
      ]),
      _: 1
    }, 16, ["aria-label", "class"]);
  }

  // vue:/Users/maronato/Developer/vue-toastification/src/components/VtCloseButton.vue
  VtCloseButton_default.render = render2;
  var VtCloseButton_default2 = VtCloseButton_default;

  // vue:/Users/maronato/Developer/vue-toastification/src/components/VtIcon.vue?vue&type=script
  var import_vue10 = __toModule(__require("vue"));

  // vue:/Users/maronato/Developer/vue-toastification/src/components/icons/VtSuccessIcon.vue?vue&type=script
  var VtSuccessIcon_default = {};

  // vue:/Users/maronato/Developer/vue-toastification/src/components/icons/VtSuccessIcon.vue?vue&type=template
  var import_vue6 = __toModule(__require("vue"));
  var _hoisted_12 = {
    "aria-hidden": "true",
    focusable: "false",
    "data-prefix": "fas",
    "data-icon": "check-circle",
    class: "svg-inline--fa fa-check-circle fa-w-16",
    role: "img",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512 512"
  };
  var _hoisted_2 = /* @__PURE__ */ (0, import_vue6.createElementVNode)("path", {
    fill: "currentColor",
    d: "M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"
  }, null, -1);
  var _hoisted_3 = [
    _hoisted_2
  ];
  function render3(_ctx, _cache) {
    return (0, import_vue6.openBlock)(), (0, import_vue6.createElementBlock)("svg", _hoisted_12, _hoisted_3);
  }

  // vue:/Users/maronato/Developer/vue-toastification/src/components/icons/VtSuccessIcon.vue
  VtSuccessIcon_default.render = render3;
  var VtSuccessIcon_default2 = VtSuccessIcon_default;

  // vue:/Users/maronato/Developer/vue-toastification/src/components/icons/VtInfoIcon.vue?vue&type=script
  var VtInfoIcon_default = {};

  // vue:/Users/maronato/Developer/vue-toastification/src/components/icons/VtInfoIcon.vue?vue&type=template
  var import_vue7 = __toModule(__require("vue"));
  var _hoisted_13 = {
    "aria-hidden": "true",
    focusable: "false",
    "data-prefix": "fas",
    "data-icon": "info-circle",
    class: "svg-inline--fa fa-info-circle fa-w-16",
    role: "img",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512 512"
  };
  var _hoisted_22 = /* @__PURE__ */ (0, import_vue7.createElementVNode)("path", {
    fill: "currentColor",
    d: "M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"
  }, null, -1);
  var _hoisted_32 = [
    _hoisted_22
  ];
  function render4(_ctx, _cache) {
    return (0, import_vue7.openBlock)(), (0, import_vue7.createElementBlock)("svg", _hoisted_13, _hoisted_32);
  }

  // vue:/Users/maronato/Developer/vue-toastification/src/components/icons/VtInfoIcon.vue
  VtInfoIcon_default.render = render4;
  var VtInfoIcon_default2 = VtInfoIcon_default;

  // vue:/Users/maronato/Developer/vue-toastification/src/components/icons/VtWarningIcon.vue?vue&type=script
  var VtWarningIcon_default = {};

  // vue:/Users/maronato/Developer/vue-toastification/src/components/icons/VtWarningIcon.vue?vue&type=template
  var import_vue8 = __toModule(__require("vue"));
  var _hoisted_14 = {
    "aria-hidden": "true",
    focusable: "false",
    "data-prefix": "fas",
    "data-icon": "exclamation-circle",
    class: "svg-inline--fa fa-exclamation-circle fa-w-16",
    role: "img",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512 512"
  };
  var _hoisted_23 = /* @__PURE__ */ (0, import_vue8.createElementVNode)("path", {
    fill: "currentColor",
    d: "M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"
  }, null, -1);
  var _hoisted_33 = [
    _hoisted_23
  ];
  function render5(_ctx, _cache) {
    return (0, import_vue8.openBlock)(), (0, import_vue8.createElementBlock)("svg", _hoisted_14, _hoisted_33);
  }

  // vue:/Users/maronato/Developer/vue-toastification/src/components/icons/VtWarningIcon.vue
  VtWarningIcon_default.render = render5;
  var VtWarningIcon_default2 = VtWarningIcon_default;

  // vue:/Users/maronato/Developer/vue-toastification/src/components/icons/VtErrorIcon.vue?vue&type=script
  var VtErrorIcon_default = {};

  // vue:/Users/maronato/Developer/vue-toastification/src/components/icons/VtErrorIcon.vue?vue&type=template
  var import_vue9 = __toModule(__require("vue"));
  var _hoisted_15 = {
    "aria-hidden": "true",
    focusable: "false",
    "data-prefix": "fas",
    "data-icon": "exclamation-triangle",
    class: "svg-inline--fa fa-exclamation-triangle fa-w-18",
    role: "img",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 576 512"
  };
  var _hoisted_24 = /* @__PURE__ */ (0, import_vue9.createElementVNode)("path", {
    fill: "currentColor",
    d: "M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"
  }, null, -1);
  var _hoisted_34 = [
    _hoisted_24
  ];
  function render6(_ctx, _cache) {
    return (0, import_vue9.openBlock)(), (0, import_vue9.createElementBlock)("svg", _hoisted_15, _hoisted_34);
  }

  // vue:/Users/maronato/Developer/vue-toastification/src/components/icons/VtErrorIcon.vue
  VtErrorIcon_default.render = render6;
  var VtErrorIcon_default2 = VtErrorIcon_default;

  // vue:/Users/maronato/Developer/vue-toastification/src/components/VtIcon.vue?vue&type=script
  var VtIcon_default = (0, import_vue10.defineComponent)({
    name: "VtIcon",
    props: propValidators_default.ICON,
    computed: {
      customIconChildren() {
        return hasProp(this.customIcon, "iconChildren") ? this.trimValue(this.customIcon.iconChildren) : "";
      },
      customIconClass() {
        if (isString(this.customIcon)) {
          return this.trimValue(this.customIcon);
        } else if (hasProp(this.customIcon, "iconClass")) {
          return this.trimValue(this.customIcon.iconClass);
        }
        return "";
      },
      customIconTag() {
        if (hasProp(this.customIcon, "iconTag")) {
          return this.trimValue(this.customIcon.iconTag, "i");
        }
        return "i";
      },
      hasCustomIcon() {
        return this.customIconClass.length > 0;
      },
      component() {
        if (this.hasCustomIcon) {
          return this.customIconTag;
        }
        if (isToastContent(this.customIcon)) {
          return getVueComponentFromObj(this.customIcon);
        }
        return this.iconTypeComponent;
      },
      iconTypeComponent() {
        const types = {
          [TYPE.DEFAULT]: VtInfoIcon_default2,
          [TYPE.INFO]: VtInfoIcon_default2,
          [TYPE.SUCCESS]: VtSuccessIcon_default2,
          [TYPE.ERROR]: VtErrorIcon_default2,
          [TYPE.WARNING]: VtWarningIcon_default2
        };
        return types[this.type];
      },
      iconClasses() {
        const classes = [`${VT_NAMESPACE}__icon`];
        if (this.hasCustomIcon) {
          return classes.concat(this.customIconClass);
        }
        return classes;
      }
    },
    methods: {
      trimValue(value, empty = "") {
        return isNonEmptyString(value) ? value.trim() : empty;
      }
    }
  });

  // vue:/Users/maronato/Developer/vue-toastification/src/components/VtIcon.vue?vue&type=template
  var import_vue11 = __toModule(__require("vue"));
  function render7(_ctx, _cache) {
    return (0, import_vue11.openBlock)(), (0, import_vue11.createBlock)((0, import_vue11.resolveDynamicComponent)(_ctx.component), {
      class: (0, import_vue11.normalizeClass)(_ctx.iconClasses)
    }, {
      default: (0, import_vue11.withCtx)(() => [
        (0, import_vue11.createTextVNode)((0, import_vue11.toDisplayString)(_ctx.customIconChildren), 1)
      ]),
      _: 1
    }, 8, ["class"]);
  }

  // vue:/Users/maronato/Developer/vue-toastification/src/components/VtIcon.vue
  VtIcon_default.render = render7;
  var VtIcon_default2 = VtIcon_default;

  // vue:/Users/maronato/Developer/vue-toastification/src/components/VtToast.vue?vue&type=script
  var VtToast_default = (0, import_vue12.defineComponent)({
    name: "VtToast",
    components: { ProgressBar: VtProgressBar_default2, CloseButton: VtCloseButton_default2, Icon: VtIcon_default2 },
    inheritAttrs: false,
    props: Object.assign({}, propValidators_default.CORE_TOAST, propValidators_default.TOAST),
    data() {
      const data = {
        isRunning: true,
        disableTransitions: false,
        beingDragged: false,
        dragStart: 0,
        dragPos: { x: 0, y: 0 },
        dragRect: {}
      };
      return data;
    },
    computed: {
      classes() {
        const classes = [
          `${VT_NAMESPACE}__toast`,
          `${VT_NAMESPACE}__toast--${this.type}`,
          `${this.position}`
        ].concat(this.toastClassName);
        if (this.disableTransitions) {
          classes.push("disable-transition");
        }
        if (this.rtl) {
          classes.push(`${VT_NAMESPACE}__toast--rtl`);
        }
        return classes;
      },
      bodyClasses() {
        const classes = [
          `${VT_NAMESPACE}__toast-${isString(this.content) ? "body" : "component-body"}`
        ].concat(this.bodyClassName);
        return classes;
      },
      draggableStyle() {
        if (this.dragStart === this.dragPos.x) {
          return {};
        } else if (this.beingDragged) {
          return {
            transform: `translateX(${this.dragDelta}px)`,
            opacity: 1 - Math.abs(this.dragDelta / this.removalDistance)
          };
        } else {
          return {
            transition: "transform 0.2s, opacity 0.2s",
            transform: "translateX(0)",
            opacity: 1
          };
        }
      },
      dragDelta() {
        return this.beingDragged ? this.dragPos.x - this.dragStart : 0;
      },
      removalDistance() {
        if (isDOMRect(this.dragRect)) {
          return (this.dragRect.right - this.dragRect.left) * this.draggablePercent;
        }
        return 0;
      }
    },
    mounted() {
      if (this.draggable) {
        this.draggableSetup();
      }
      if (this.pauseOnFocusLoss) {
        this.focusSetup();
      }
    },
    beforeUnmount() {
      if (this.draggable) {
        this.draggableCleanup();
      }
      if (this.pauseOnFocusLoss) {
        this.focusCleanup();
      }
    },
    methods: {
      hasProp,
      getVueComponentFromObj,
      closeToast() {
        this.eventBus.emit(EVENTS.DISMISS, this.id);
      },
      clickHandler() {
        if (this.onClick) {
          this.onClick(this.closeToast);
        }
        if (this.closeOnClick) {
          if (!this.beingDragged || this.dragStart === this.dragPos.x) {
            this.closeToast();
          }
        }
      },
      timeoutHandler() {
        this.closeToast();
      },
      hoverPause() {
        if (this.pauseOnHover) {
          this.isRunning = false;
        }
      },
      hoverPlay() {
        if (this.pauseOnHover) {
          this.isRunning = true;
        }
      },
      focusPause() {
        this.isRunning = false;
      },
      focusPlay() {
        this.isRunning = true;
      },
      focusSetup() {
        addEventListener("blur", this.focusPause);
        addEventListener("focus", this.focusPlay);
      },
      focusCleanup() {
        removeEventListener("blur", this.focusPause);
        removeEventListener("focus", this.focusPlay);
      },
      draggableSetup() {
        const element = this.$el;
        element.addEventListener("touchstart", this.onDragStart, {
          passive: true
        });
        element.addEventListener("mousedown", this.onDragStart);
        addEventListener("touchmove", this.onDragMove, { passive: false });
        addEventListener("mousemove", this.onDragMove);
        addEventListener("touchend", this.onDragEnd);
        addEventListener("mouseup", this.onDragEnd);
      },
      draggableCleanup() {
        const element = this.$el;
        element.removeEventListener("touchstart", this.onDragStart);
        element.removeEventListener("mousedown", this.onDragStart);
        removeEventListener("touchmove", this.onDragMove);
        removeEventListener("mousemove", this.onDragMove);
        removeEventListener("touchend", this.onDragEnd);
        removeEventListener("mouseup", this.onDragEnd);
      },
      onDragStart(event) {
        this.beingDragged = true;
        this.dragPos = { x: getX(event), y: getY(event) };
        this.dragStart = getX(event);
        this.dragRect = this.$el.getBoundingClientRect();
      },
      onDragMove(event) {
        if (this.beingDragged) {
          event.preventDefault();
          if (this.isRunning) {
            this.isRunning = false;
          }
          this.dragPos = { x: getX(event), y: getY(event) };
        }
      },
      onDragEnd() {
        if (this.beingDragged) {
          if (Math.abs(this.dragDelta) >= this.removalDistance) {
            this.disableTransitions = true;
            this.$nextTick(() => this.closeToast());
          } else {
            setTimeout(() => {
              this.beingDragged = false;
              if (isDOMRect(this.dragRect) && this.pauseOnHover && this.dragRect.bottom >= this.dragPos.y && this.dragPos.y >= this.dragRect.top && this.dragRect.left <= this.dragPos.x && this.dragPos.x <= this.dragRect.right) {
                this.isRunning = false;
              } else {
                this.isRunning = true;
              }
            });
          }
        }
      }
    }
  });

  // vue:/Users/maronato/Developer/vue-toastification/src/components/VtToast.vue?vue&type=template
  var import_vue13 = __toModule(__require("vue"));
  var _hoisted_16 = ["role"];
  function render8(_ctx, _cache) {
    const _component_Icon = (0, import_vue13.resolveComponent)("Icon");
    const _component_CloseButton = (0, import_vue13.resolveComponent)("CloseButton");
    const _component_ProgressBar = (0, import_vue13.resolveComponent)("ProgressBar");
    return (0, import_vue13.openBlock)(), (0, import_vue13.createElementBlock)("div", {
      class: (0, import_vue13.normalizeClass)(_ctx.classes),
      style: (0, import_vue13.normalizeStyle)(_ctx.draggableStyle),
      onClick: _cache[0] || (_cache[0] = (...args) => _ctx.clickHandler && _ctx.clickHandler(...args)),
      onMouseenter: _cache[1] || (_cache[1] = (...args) => _ctx.hoverPause && _ctx.hoverPause(...args)),
      onMouseleave: _cache[2] || (_cache[2] = (...args) => _ctx.hoverPlay && _ctx.hoverPlay(...args))
    }, [
      _ctx.icon ? ((0, import_vue13.openBlock)(), (0, import_vue13.createBlock)(_component_Icon, {
        key: 0,
        "custom-icon": _ctx.icon,
        type: _ctx.type
      }, null, 8, ["custom-icon", "type"])) : (0, import_vue13.createCommentVNode)("v-if", true),
      (0, import_vue13.createElementVNode)("div", {
        role: _ctx.accessibility.toastRole || "alert",
        class: (0, import_vue13.normalizeClass)(_ctx.bodyClasses)
      }, [
        typeof _ctx.content === "string" ? ((0, import_vue13.openBlock)(), (0, import_vue13.createElementBlock)(import_vue13.Fragment, { key: 0 }, [
          (0, import_vue13.createTextVNode)((0, import_vue13.toDisplayString)(_ctx.content), 1)
        ], 2112)) : ((0, import_vue13.openBlock)(), (0, import_vue13.createBlock)((0, import_vue13.resolveDynamicComponent)(_ctx.getVueComponentFromObj(_ctx.content)), (0, import_vue13.mergeProps)({
          key: 1,
          "toast-id": _ctx.id
        }, _ctx.hasProp(_ctx.content, "props") ? _ctx.content.props : {}, (0, import_vue13.toHandlers)(_ctx.hasProp(_ctx.content, "listeners") ? _ctx.content.listeners : {}), { onCloseToast: _ctx.closeToast }), null, 16, ["toast-id", "onCloseToast"]))
      ], 10, _hoisted_16),
      !!_ctx.closeButton ? ((0, import_vue13.openBlock)(), (0, import_vue13.createBlock)(_component_CloseButton, {
        key: 1,
        component: _ctx.closeButton,
        "class-names": _ctx.closeButtonClassName,
        "show-on-hover": _ctx.showCloseButtonOnHover,
        "aria-label": _ctx.accessibility.closeButtonLabel,
        onClick: (0, import_vue13.withModifiers)(_ctx.closeToast, ["stop"])
      }, null, 8, ["component", "class-names", "show-on-hover", "aria-label", "onClick"])) : (0, import_vue13.createCommentVNode)("v-if", true),
      _ctx.timeout ? ((0, import_vue13.openBlock)(), (0, import_vue13.createBlock)(_component_ProgressBar, {
        key: 2,
        "is-running": _ctx.isRunning,
        "hide-progress-bar": _ctx.hideProgressBar,
        timeout: _ctx.timeout,
        onCloseToast: _ctx.timeoutHandler
      }, null, 8, ["is-running", "hide-progress-bar", "timeout", "onCloseToast"])) : (0, import_vue13.createCommentVNode)("v-if", true)
    ], 38);
  }

  // vue:/Users/maronato/Developer/vue-toastification/src/components/VtToast.vue
  VtToast_default.render = render8;
  var VtToast_default2 = VtToast_default;

  // vue:/Users/maronato/Developer/vue-toastification/src/components/VtTransition.vue?vue&type=script
  var import_vue14 = __toModule(__require("vue"));
  var VtTransition_default = (0, import_vue14.defineComponent)({
    name: "VtTransition",
    props: propValidators_default.TRANSITION,
    emits: ["leave"],
    methods: {
      hasProp,
      leave(el) {
        if (el instanceof HTMLElement) {
          el.style.left = el.offsetLeft + "px";
          el.style.top = el.offsetTop + "px";
          el.style.width = getComputedStyle(el).width;
          el.style.position = "absolute";
        }
      }
    }
  });

  // vue:/Users/maronato/Developer/vue-toastification/src/components/VtTransition.vue?vue&type=template
  var import_vue15 = __toModule(__require("vue"));
  function render9(_ctx, _cache) {
    return (0, import_vue15.openBlock)(), (0, import_vue15.createBlock)(import_vue15.TransitionGroup, {
      tag: "div",
      "enter-active-class": _ctx.transition.enter ? _ctx.transition.enter : `${_ctx.transition}-enter-active`,
      "move-class": _ctx.transition.move ? _ctx.transition.move : `${_ctx.transition}-move`,
      "leave-active-class": _ctx.transition.leave ? _ctx.transition.leave : `${_ctx.transition}-leave-active`,
      onLeave: _ctx.leave
    }, {
      default: (0, import_vue15.withCtx)(() => [
        (0, import_vue15.renderSlot)(_ctx.$slots, "default")
      ]),
      _: 3
    }, 8, ["enter-active-class", "move-class", "leave-active-class", "onLeave"]);
  }

  // vue:/Users/maronato/Developer/vue-toastification/src/components/VtTransition.vue
  VtTransition_default.render = render9;
  var VtTransition_default2 = VtTransition_default;

  // vue:/Users/maronato/Developer/vue-toastification/src/components/VtToastContainer.vue?vue&type=script
  var VtToastContainer_default = (0, import_vue16.defineComponent)({
    name: "VueToastification",
    devtools: {
      hide: true
    },
    components: { Toast: VtToast_default2, VtTransition: VtTransition_default2 },
    props: Object.assign({}, propValidators_default.CORE_TOAST, propValidators_default.CONTAINER, propValidators_default.TRANSITION),
    data() {
      const data = {
        count: 0,
        positions: Object.values(POSITION),
        toasts: {},
        defaults: {}
      };
      return data;
    },
    computed: {
      toastArray() {
        return Object.values(this.toasts);
      },
      filteredToasts() {
        return this.defaults.filterToasts(this.toastArray);
      }
    },
    beforeMount() {
      const events = this.eventBus;
      events.on(EVENTS.ADD, this.addToast);
      events.on(EVENTS.CLEAR, this.clearToasts);
      events.on(EVENTS.DISMISS, this.dismissToast);
      events.on(EVENTS.UPDATE, this.updateToast);
      events.on(EVENTS.UPDATE_DEFAULTS, this.updateDefaults);
      this.defaults = this.$props;
    },
    mounted() {
      this.setup(this.container);
    },
    methods: {
      async setup(container) {
        if (isFunction(container)) {
          container = await container();
        }
        removeElement(this.$el);
        container.appendChild(this.$el);
      },
      setToast(props) {
        if (!isUndefined(props.id)) {
          this.toasts[props.id] = props;
        }
      },
      addToast(params) {
        params.content = normalizeToastComponent(params.content);
        const props = Object.assign({}, this.defaults, params.type && this.defaults.toastDefaults && this.defaults.toastDefaults[params.type], params);
        const toast = this.defaults.filterBeforeCreate(props, this.toastArray);
        toast && this.setToast(toast);
      },
      dismissToast(id) {
        const toast = this.toasts[id];
        if (!isUndefined(toast) && !isUndefined(toast.onClose)) {
          toast.onClose();
        }
        delete this.toasts[id];
      },
      clearToasts() {
        Object.keys(this.toasts).forEach((id) => {
          this.dismissToast(id);
        });
      },
      getPositionToasts(position) {
        const toasts = this.filteredToasts.filter((toast) => toast.position === position).slice(0, this.defaults.maxToasts);
        return this.defaults.newestOnTop ? toasts.reverse() : toasts;
      },
      updateDefaults(update) {
        if (!isUndefined(update.container)) {
          this.setup(update.container);
        }
        this.defaults = Object.assign({}, this.defaults, update);
      },
      updateToast({
        id,
        options,
        create
      }) {
        if (this.toasts[id]) {
          if (options.timeout && options.timeout === this.toasts[id].timeout) {
            options.timeout++;
          }
          this.setToast(Object.assign({}, this.toasts[id], options));
        } else if (create) {
          this.addToast(Object.assign({}, { id }, options));
        }
      },
      getClasses(position) {
        const classes = [`${VT_NAMESPACE}__container`, position];
        return classes.concat(this.defaults.containerClassName);
      }
    }
  });

  // vue:/Users/maronato/Developer/vue-toastification/src/components/VtToastContainer.vue?vue&type=template
  var import_vue17 = __toModule(__require("vue"));
  function render10(_ctx, _cache) {
    const _component_Toast = (0, import_vue17.resolveComponent)("Toast");
    const _component_VtTransition = (0, import_vue17.resolveComponent)("VtTransition");
    return (0, import_vue17.openBlock)(), (0, import_vue17.createElementBlock)("div", null, [
      ((0, import_vue17.openBlock)(true), (0, import_vue17.createElementBlock)(import_vue17.Fragment, null, (0, import_vue17.renderList)(_ctx.positions, (pos) => {
        return (0, import_vue17.openBlock)(), (0, import_vue17.createElementBlock)("div", { key: pos }, [
          (0, import_vue17.createVNode)(_component_VtTransition, {
            transition: _ctx.defaults.transition,
            class: (0, import_vue17.normalizeClass)(_ctx.getClasses(pos))
          }, {
            default: (0, import_vue17.withCtx)(() => [
              ((0, import_vue17.openBlock)(true), (0, import_vue17.createElementBlock)(import_vue17.Fragment, null, (0, import_vue17.renderList)(_ctx.getPositionToasts(pos), (toast) => {
                return (0, import_vue17.openBlock)(), (0, import_vue17.createBlock)(_component_Toast, (0, import_vue17.mergeProps)({
                  key: toast.id
                }, toast), null, 16);
              }), 128))
            ]),
            _: 2
          }, 1032, ["transition", "class"])
        ]);
      }), 128))
    ]);
  }

  // vue:/Users/maronato/Developer/vue-toastification/src/components/VtToastContainer.vue
  VtToastContainer_default.render = render10;
  var VtToastContainer_default2 = VtToastContainer_default;

  // src/ts/interface.ts
  var buildInterface = (globalOptions = {}, mountContainer = true) => {
    const events = globalOptions.eventBus = globalOptions.eventBus || new EventBus();
    if (mountContainer) {
      (0, import_vue18.nextTick)(() => {
        const app = (0, import_vue18.createApp)(VtToastContainer_default2, __spreadValues({}, globalOptions));
        const component = app.mount(document.createElement("div"));
        const onMounted = globalOptions.onMounted;
        if (!isUndefined(onMounted)) {
          onMounted(component, app);
        }
        if (globalOptions.shareAppContext) {
          const baseApp = globalOptions.shareAppContext;
          if (baseApp === true) {
            console.warn(`[${VT_NAMESPACE}] App to share context with was not provided.`);
          } else {
            app._context.components = baseApp._context.components;
            app._context.directives = baseApp._context.directives;
            app._context.mixins = baseApp._context.mixins;
            app._context.provides = baseApp._context.provides;
            app.config.globalProperties = baseApp.config.globalProperties;
          }
        }
      });
    }
    const toast = (content, options) => {
      const props = Object.assign({}, { id: getId(), type: TYPE.DEFAULT }, options, {
        content
      });
      events.emit(EVENTS.ADD, props);
      return props.id;
    };
    toast.clear = () => events.emit(EVENTS.CLEAR, void 0);
    toast.updateDefaults = (update) => {
      events.emit(EVENTS.UPDATE_DEFAULTS, update);
    };
    toast.dismiss = (id) => {
      events.emit(EVENTS.DISMISS, id);
    };
    function updateToast(id, { content, options }, create = false) {
      const opt = Object.assign({}, options, { content });
      events.emit(EVENTS.UPDATE, {
        id,
        options: opt,
        create
      });
    }
    toast.update = updateToast;
    toast.success = (content, options) => toast(content, Object.assign({}, options, { type: TYPE.SUCCESS }));
    toast.info = (content, options) => toast(content, Object.assign({}, options, { type: TYPE.INFO }));
    toast.error = (content, options) => toast(content, Object.assign({}, options, { type: TYPE.ERROR }));
    toast.warning = (content, options) => toast(content, Object.assign({}, options, { type: TYPE.WARNING }));
    return toast;
  };

  // src/index.ts
  var createMockToastInterface = () => {
    const toast = () => console.warn(`[${VT_NAMESPACE}] This plugin does not support SSR!`);
    return new Proxy(toast, {
      get() {
        return toast;
      }
    });
  };
  function createToastInterface(optionsOrEventBus) {
    if (!isBrowser()) {
      return createMockToastInterface();
    }
    if (isEventBusInterface(optionsOrEventBus)) {
      return buildInterface({ eventBus: optionsOrEventBus }, false);
    }
    return buildInterface(optionsOrEventBus, true);
  }
  var toastInjectionKey = Symbol("VueToastification");
  var globalEventBus = new EventBus();
  var VueToastificationPlugin = (App, options) => {
    if ((options == null ? void 0 : options.shareAppContext) === true) {
      options.shareAppContext = App;
    }
    const inter = createToastInterface(__spreadValues({
      eventBus: globalEventBus
    }, options));
    App.provide(toastInjectionKey, inter);
  };
  var provideToast = (options) => {
    const toast = createToastInterface(options);
    if ((0, import_vue19.getCurrentInstance)()) {
      (0, import_vue19.provide)(toastInjectionKey, toast);
    }
  };
  var useToast = (eventBus) => {
    if (eventBus) {
      return createToastInterface(eventBus);
    }
    const toast = (0, import_vue19.getCurrentInstance)() ? (0, import_vue19.inject)(toastInjectionKey, void 0) : void 0;
    return toast ? toast : createToastInterface(globalEventBus);
  };
  var src_default = VueToastificationPlugin;
})();
