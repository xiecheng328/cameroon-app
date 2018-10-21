<template>
    <!--尹航-->
    <div class="Ask-items">
        <mu-appbar style="width: 100%;background: #fff;" title="提问" >
            <mu-button flat slot="left" to="/topic/recommend">
                <mu-icon value="close" flat>返回</mu-icon>
            </mu-button>
            <div class="cameroon-title"><h4>提问</h4></div>
            <mu-button flat slot="right">发布</mu-button>
        </mu-appbar>
        <mu-container>
            <mu-text-field v-model="value15" placeholder="标题" :max-length="10"></mu-text-field><br/>
            <mu-text-field v-model="value16" placeholder="添加问题描述" multi-line :rows="3" :max-length="100"></mu-text-field><br/>
        </mu-container>
    </div>
</template>

<script>
    export default {
        name: "PutQuestion",
        data () {
            return {
                value15: '',
                value16: ''
            }
        }
    }
</script>

<style scoped lang="scss">
    .container{
        height: 611px;
        background: white;
        .cameroon-title{
            margin-left: 65px;
        }
        .mu-input{
            margin-left: 65px;
            margin-top: 40px;
        }
    }
    .mu-button {
        margin: 6px 8px;
    }
</style>