/**
 * Created by apple on 18/10/11.
 * shop(商城)模块子路由
 */
import ShopHome from '../views/shop/ShopHome.vue';
import Classify from '../views/shop/Classify.vue';

export default [
    {path:'shophome',component:ShopHome,name:ShopHome},
    {path:'classify',component:Classify,name:Classify},
]