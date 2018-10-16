<template>
    <router-link to="" id="contain">
        <div>
            <fellowList></fellowList>
            <fellowList></fellowList>
            <fellowList></fellowList>
            <fellowList></fellowList>
        </div>
        <div class="load" v-show="isShow">
            <img src="../../../assets/img/loading.gif" alt="">
        </div>
            <div id="oShow" v-show="true">没文章了,去推荐看看</div>
    </router-link>
</template>

<script>
    import fellowList from '../../../componentes/topic/fellowList'
    export default {
        name: "fellow",
        components:{
            fellowList
        },
        data(){
            return {
                isShow:false,
                isEnd:false
            }
        },
        created(){
            window.onscroll = ()=>{
                var scrollTop = document.documentElement.scrollTop;
                var scrollHeight = document.documentElement.scrollHeight;
                var cilentHeight = document.documentElement.clientHeight;
                if(scrollHeight - scrollTop == cilentHeight && !this.isEnd)
                {
                    // this.isShow = true;
                    console.log("到底了");
                }
            }
        }
    }
</script>

<style scoped lang="scss">
    *{
        margin: 0;
        padding: 0;
        body{
            background: #cccccc;
            #contain{
                #load{
                    text-align: center;
                }
                #oShow{
                    color: black;
                    padding: 10px;
                    width: 100%;
                    height: 200px;
                    text-align: center;
                }
            }

        }
    }
</style>
