<template>
    <div>
    <div id="con">
        <mu-button flat to="" id="back"></mu-button>
        <!--<mu-text-field v-model="val" id="iPt"></mu-text-field>-->
        <!--<input tabindex="0" id="iPt" class="mu-text-field-input">-->
        <input type="text" id="iPt" v-model="val">
        <mu-button flat to="" id="point" @click="show3 = !show3"></mu-button>
    </div>
    <!--<ul id="showPoint">-->
        <!--<li>1</li>-->
        <!--<li>2</li>-->
        <!--<li>4</li>-->
    <!--</ul>-->
        <mu-container>
            <mu-flex class="mu-transition-row">
                <mu-expand-transition>
                    <div v-show="show3">
                        <div class="mu-transition-box mu-primary-color mu-inverse" >举报</div>
                        <div class="mu-transition-box mu-primary-color mu-inverse" >屏蔽该作者</div>
                        <div class="mu-transition-box mu-primary-color mu-inverse" >分享给好友</div>
                    </div>
                </mu-expand-transition>
            </mu-flex>
        </mu-container>
    </div>
</template>

<script>

    export default {
        name: "Search",
        data () {
            return{
                val:'',
                show3: false
            }
        },
        methods:{

        }
    }
</script>


<style scoped lang="scss">
    *{
        margin: 0;
        padding: 0;
        #con{
            padding: 1px;
            /*width: 100%;*/
            height: 25px;
            display: flex;
            #back{
                /*width: 50px;*/
                /*height: 50px;*/
                flex: 1;
                background: url("../../../public/back.png");
                background-size: contain;
                background-repeat: no-repeat;
                background-position: center;
                height: 100%;
            }
            #iPt{
                flex: 5;
                border: 0;
                background: transparent;
                border-bottom:grey solid 1px;
            }
            #point{
                flex: 1;
                background: url("../../../public/point.png");
                background-size: contain;
                background-repeat: no-repeat;
                background-position: center;
                height: 100%;
            }
        }
        .mu-transition-row {
            min-height: 100px;
            float: right;
        }
        .mu-transition-box {
            min-width: 88px;
            height: 25px;
            margin-right: 0;
            border-radius: 4px;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .mu-inverse{
            color: black;
        }
        .mu-primary-color{
            background-color: white;
        }
        #showPoint{
            float: right;
        }
    }


</style>
