<template>
    <!--尹航-->
    <div class="Ask-items">
        <mu-appbar style="width: 100%;" color="primary">
            <mu-button flat slot="left">返回</mu-button>
                提问
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

<style scoped>
    .mu-button {
        margin: 6px 8px;
    }
</style>