<!--王静-->
<template>
    <div id="comment">
        <div>
            <button>取消</button>
            <h3>全部评论3条</h3>
        </div>
        <ul>
            <li v-for="val in cList ">
                {{val.idimg}}{{val.idname}}
                <p>{{val.idcomment}}</p>
                <p>{{val.datatime}}</p>
                <p>{{val.number}} {{val.iconimg1}} {{val.iconimg2}}</p>
            </li>
        </ul>
        <div>
            <input type="text" placeholder="请输入评论">
            <button>发送</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Comment",
        data(){
            return{
                cList:[
                    {
                       idimg:'../../../assets/img/1230.jpg',
                       idname:'猫掉了',
                       idcomment:'产品非常好',
                        datatime:'08-08',
                        number:'107',
                        iconimg1:'点赞',
                        iconimg2:'评论'
                    },
                    {
                        idimg:'../../../assets/img/1230.jpg',
                        idname:'一戒',
                        idcomment:'产品非常好',
                        datatime:'08-10',
                        number:'15',
                        iconimg1:'点赞',
                        iconimg2:'评论'
                    },
                    {
                        idimg:'../../../assets/img/1230.jpg',
                        idname:'柒',
                        idcomment:'产品非常好',
                        datatime:'08-19',
                        number:'67',
                        iconimg1:'点赞',
                        iconimg2:'评论'
                    }
                ]
            }
        }
    }
</script>

<style scoped>

</style>