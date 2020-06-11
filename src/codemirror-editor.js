// This file is auto generated by build/build-entry.js
import Component from './codemirror-editor.vue';
import xss from '@/utils/xss/index';
// font css
import '@/assets/css/font';

const version = '1.3.2';

const install = (Vue) => {
  Vue.component(Component.name, Component);
};

Component.version = version;
Component.install = install;
Component.use = function (optionsOrInstall, opt) {
  if (typeof optionsOrInstall === 'function') {
    optionsOrInstall(Component, opt);
  } else {
    optionsOrInstall.install(Component, opt);
  }

  return Component;
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export { version, xss };

export default Component;
