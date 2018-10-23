<template>
    <div class="footprint">
        <div class="none"></div>
        <div class="content">
            <div class="head">
              <h5> ———浏览足迹———</h5>
            </div>
            <ul class="fprint" >
                <li v-for="(ft,index) in footcontent" :key="index">
                    <img :src="ft.imgName" alt="">
                    <span class="font">{{ft.footName}}</span>
                    <br />
                    <br />
                    <hr style="height:1px;border:none;border-top:1px solid #555555;z-index:1;" />
                </li>
            </ul>
        </div>
    </div>
    
</template>

<script>
import img1 from './../../assets/img/tractors1.jpg';
import img2 from './../../assets/img/tractors2.jpg';
import img3 from './../../assets/img/tractors3.jpg';
export default {
    data(){
        return{
            footcontent:[{
                imgName:img1,
                footName:'东方红SK504(0.9m)型拖拉机'
            },
            {
                imgName:img2,
                footName:'柳林1GZ-200履带自走式旋耕机(直联式)'
            },
            {
                imgName:img3,
                footName:'三盟5HX-30批式循环粮食烘干机'
            }]
        }
    }
}
</script>


<style  lang="scss" scoped>
.footprint{
    margin-top: 9px;
    
    li{
        // width: 60px;
        height: 150px;
    
        
        img{
            height: 1rem;
            // width: 200px;
        }
    }
}
.none{
    width: 1rem;
    height: 100%;
    // background-color: #fff;
}
.content{
    float: right;
    // left: 237px;
    width: 2.4rem;
    height: 300px;
    // background-color: #e2e2e2;
    // z-index: 1;
    
}
.head{
    background-color: #fdfdfd;
    width: 100%;
}
.fprint{
    background-color: #fdfdfd;
    img{
        width: 100%;
        // background-color: #fff;
        
    }
}
.footprint .font{
    padding:8px;
    text-align: center;
    display: table-cell;
    vertical-align:middle
    

}
</style>
