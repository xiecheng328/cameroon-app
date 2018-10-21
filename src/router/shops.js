/**
 * Created by apple on 18/10/11.
 * shop(商城)模块子路由
 */
import ShopHome from '../views/shop/ShopHome.vue';
import Classify from '../views/shop/Classify.vue';
import ShopList from '../views/shop/ShopList.vue';
import PartsList from '../views/shop/PartsList.vue';
import Search from '../views/shop/Search.vue';
import Detail from '../views/shop/Detail.vue';
import Rent from '../views/shop/Rent.vue';
import Shopbuy from '../views/shop/Shopbuy.vue';
import Forgood from '../views/shop/Forgood.vue';
import ShopManage from '../views/shop/ShopManage.vue';
import Review from '../views/shop/Review.vue';
import Receipt from '../views/shop/Receipt.vue';
import Collect from '../views/shop/Collect.vue';
export default [
    {path:'shophome',component:ShopHome,name:ShopHome},
    {path:'classify',component:Classify,name:Classify},
    {path:'shoplist',component:ShopList,name:ShopList},
    {path:'partslist',component:PartsList,name:PartsList},
    {path:'search',component:Search,name:Search},
    {path:'detail',component:Detail,name:Detail},
    {path:'rent',component:Rent,name:Rent},
    {path:'shopbuy',component:Shopbuy,name:Shopbuy},
    {path:'forgood',component:Forgood,name:Forgood},
    {path:'review',component:Review,name:Review},
    {path:'receipt',component:Receipt,name:Receipt},
    {path:'collect',component:Collect,name:Collect},
    {path:'shopmanage',component:ShopManage,name:ShopManage},
]