if (typeof Promise !== "undefined" && !Promise.prototype.finally) {
  Promise.prototype.finally = function(callback) {
    const promise = this.constructor;
    return this.then(
      (value) => promise.resolve(callback()).then(() => value),
      (reason) => promise.resolve(callback()).then(() => {
        throw reason;
      })
    );
  };
}
;
if (typeof uni !== "undefined" && uni && uni.requireGlobal) {
  const global = uni.requireGlobal();
  ArrayBuffer = global.ArrayBuffer;
  Int8Array = global.Int8Array;
  Uint8Array = global.Uint8Array;
  Uint8ClampedArray = global.Uint8ClampedArray;
  Int16Array = global.Int16Array;
  Uint16Array = global.Uint16Array;
  Int32Array = global.Int32Array;
  Uint32Array = global.Uint32Array;
  Float32Array = global.Float32Array;
  Float64Array = global.Float64Array;
  BigInt64Array = global.BigInt64Array;
  BigUint64Array = global.BigUint64Array;
}
;
if (uni.restoreGlobal) {
  uni.restoreGlobal(Vue, weex, plus, setTimeout, clearTimeout, setInterval, clearInterval);
}
(function(vue) {
  "use strict";
  const _imports_0$2 = "/static/splash.png";
  const _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };
  const _sfc_main$3 = {
    name: "SplashPage",
    onShow() {
      setTimeout(() => {
        uni.redirectTo({
          url: "/pages/guide/guide"
        });
      }, 3e3);
    }
  };
  function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "container" }, [
      vue.createElementVNode("image", {
        class: "splash-image",
        src: _imports_0$2,
        mode: "aspectFill"
      })
    ]);
  }
  const PagesSplashSplash = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$2], ["__scopeId", "data-v-b5d3b004"], ["__file", "F:/money/app1000/app/pages/splash/splash.vue"]]);
  const _imports_0$1 = "/static/background.jpg";
  const _imports_1 = "/static/logo.png";
  const _sfc_main$2 = {
    name: "GuidePage",
    methods: {
      login() {
        uni.navigateTo({
          url: "/pages/login/login"
        });
      }
    }
  };
  function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "container" }, [
      vue.createCommentVNode(" 背景图 "),
      vue.createElementVNode("image", {
        class: "background-image",
        src: _imports_0$1,
        mode: "aspectFill"
      }),
      vue.createCommentVNode(" Logo "),
      vue.createElementVNode("view", { class: "logo-container" }, [
        vue.createElementVNode("image", {
          class: "logo",
          src: _imports_1,
          mode: "aspectFit"
        })
      ]),
      vue.createCommentVNode(" 标题 "),
      vue.createElementVNode("text", { class: "title" }, "SOURCE MEAL"),
      vue.createElementVNode("text", { class: "subtitle" }, "餐食来源 定制配方"),
      vue.createCommentVNode(" 登录按钮 "),
      vue.createElementVNode("button", {
        class: "login-button",
        onClick: _cache[0] || (_cache[0] = (...args) => $options.login && $options.login(...args))
      }, "立即登录"),
      vue.createCommentVNode(" 注册链接 "),
      vue.createElementVNode("navigator", {
        class: "register-link",
        url: "/pages/register/register"
      }, "还没有账号？去注册")
    ]);
  }
  const PagesGuideGuide = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$1], ["__scopeId", "data-v-04b95c5c"], ["__file", "F:/money/app1000/app/pages/guide/guide.vue"]]);
  const _imports_0 = "/static/logo.png";
  const _sfc_main$1 = {
    data() {
      return {
        title: "Hello"
      };
    },
    onLoad() {
    },
    methods: {}
  };
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "content" }, [
      vue.createElementVNode("image", {
        class: "logo",
        src: _imports_0
      }),
      vue.createElementVNode("view", { class: "text-area" }, [
        vue.createElementVNode(
          "text",
          { class: "title" },
          vue.toDisplayString($data.title),
          1
          /* TEXT */
        )
      ])
    ]);
  }
  const PagesIndexIndex = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render], ["__file", "F:/money/app1000/app/pages/index/index.vue"]]);
  __definePage("pages/splash/splash", PagesSplashSplash);
  __definePage("pages/guide/guide", PagesGuideGuide);
  __definePage("pages/index/index", PagesIndexIndex);
  function formatAppLog(type, filename, ...args) {
    if (uni.__log__) {
      uni.__log__(type, filename, ...args);
    } else {
      console[type].apply(console, [...args, filename]);
    }
  }
  const _sfc_main = {
    onLaunch: function() {
      formatAppLog("log", "at App.vue:4", "App Launch");
    },
    onShow: function() {
      formatAppLog("log", "at App.vue:7", "App Show");
    },
    onHide: function() {
      formatAppLog("log", "at App.vue:10", "App Hide");
    }
  };
  const App = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "F:/money/app1000/app/App.vue"]]);
  function createApp() {
    const app = vue.createVueApp(App);
    return {
      app
    };
  }
  const { app: __app__, Vuex: __Vuex__, Pinia: __Pinia__ } = createApp();
  uni.Vuex = __Vuex__;
  uni.Pinia = __Pinia__;
  __app__.provide("__globalStyles", __uniConfig.styles);
  __app__._component.mpType = "app";
  __app__._component.render = () => {
  };
  __app__.mount("#app");
})(Vue);
