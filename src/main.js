import './assets/sass/main.sass';

import Vue from 'vue';
import GSelect from './components/GSelect.vue';
import App from './App.vue';

Vue.component('g-select', GSelect);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
