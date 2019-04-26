import greensShopping from '../../views/shopping/greens-shopping.vue';
import greensNullShopping from '../../views/shopping/null-shopping.vue';
import Shopping from '../../views/shopping/shopping.vue';
import confirmAnOrder from '../../views/shopping/confirmAnOrder.vue';
import zhifubao from '../../views/shopping/zhifubaoA.vue'
import zhifubaoForm from '../../views/shopping/zhifubaoForm.vue'
export default[
    {
      path: '/greensShopping',
      name: 'greensShopping',
      component: greensShopping
    },
    {
      path: '/greensNullShopping',
      name: 'greensNullShopping',
      component: greensNullShopping
    },
    {
      path: '/Shopping',
      name: 'Shopping',
      component: Shopping
    },
    {
      path: '/confirmAnOrder',
      name: 'confirmAnOrder',
      component: confirmAnOrder
    },
    {
        path:'/zhifubao',
        name:'zhifubao',
        component:zhifubao
    },
    {
        path:'/zhifubaoForm',
        name:'zhifubaoForm',
        component:zhifubaoForm
    },
]
