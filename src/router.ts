import {createWebHashHistory, createRouter} from 'vue-router';
import Home from './views/Home.vue';
import Doc from './views/Doc.vue';
import SwitchDemo from './components/SwitchDemo.vue';
import ButtonDemo from './components/ButtonDemo.vue';
import DialogDemo from './components/DialogDemo.vue';
import TabsDemo from './components/TabsDemo.vue';
import DocDemo from './components/DocDemo.vue';

const history = createWebHashHistory();   // hash型路由

export const router = createRouter({   // 创建 router
  history: history,
  routes: [
    {
      path: '/', component: Home  // 默认页面
    },
    {
      path: '/doc', component: Doc,
      children: [
        {
          path: '', component: DocDemo
        },
        {
          path: 'switch', component: SwitchDemo
        },
        {
          path: 'button', component: ButtonDemo
        },
        {
          path: 'dialog', component: DialogDemo
        },
        {
          path: 'tabs', component: TabsDemo
        },
      ]
    }
  ]
});
