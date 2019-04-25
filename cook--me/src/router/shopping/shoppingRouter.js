import greensShopping from '../../views/shopping/greens-shopping.vue';
import greensNullShopping from '../../views/shopping/null-shopping.vue';
import Shopping from '../../views/shopping/shopping.vue';
import confirmAnOrder from '../../views/shopping/confirmAnOrder.vue';
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
]
