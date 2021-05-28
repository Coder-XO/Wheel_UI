import {createWebHashHistory, createRouter} from 'vue-router';
import Home from './views/Home.vue';
import Doc from './views/Doc.vue';
import SwitchDemo from './components/SwitchDemo.vue';

const history = createWebHashHistory();   // hash型路由
export const router = createRouter({   // 创建 router
  history: history,
  routes: [
    {
      path: '/', component: Home
    },
    {
      path: '/doc', component: Doc,
      children: [
        {
          path: 'switch', component: SwitchDemo
        }
      ]
    }
  ]
});
