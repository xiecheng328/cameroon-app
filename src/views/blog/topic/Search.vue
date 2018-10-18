<template>
    <div>
        <mu-col span="12" lg="4" sm="6">
            <mu-auto-complete :data="fruits" v-model="val"></mu-auto-complete>
            <mu-button icon slot="right" @click="add">
                <mu-icon value="search"></mu-icon>
            </mu-button>
            <mu-divider></mu-divider>
        </mu-col>
        <mu-list>
            <mu-sub-header>大家都在搜</mu-sub-header>
            <ul>
                <li>拖拉机价格</li>
                <li>玉米种子价格</li>
            </ul>
        </mu-list>
        <mu-divider></mu-divider>
        <mu-list>
            <div id="height">
                <span id="history">搜索历史</span>
                <mu-button icon slot="right" id="icon">
                    <mu-icon value="delete" @click="deleteAll"></mu-icon>
                </mu-button>
            </div>
            <!--<input type="text" @keyup="search" v-model="val">-->
            <!--<button @click="add">add</button>-->
            <ul>
                <li v-for="(xx,index) in showArr"  @click="xx.active = !xx.active">
                    {{xx.value}}
                    <button @click="del(index)">del</button>
                </li>
            </ul>
        </mu-list>
    </div>
</template>

<script>
    const fruits = [
        'Apple', 'Apricot', 'Avocado',
        'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry',
    ];
    export default {
        name: "Search",
        data () {
            return {
                fruits,
                val: '',
                arr:[],
                showArr:[]
            }
        },
        methods:{
            add(){
                this.arr.push({value:this.val,active:false});
                this.val = '';
                this.arr.sort(function(a,b){
                    return a.value - b.value;
                });
                this.showArr = this.arr;
            },
            search(){
                var newArr = this.arr.filter((elem,index)=>{
                    return elem.value.indexOf(this.val) != -1;
                });
                this.showArr = newArr;
            },
            del(index){
                this.arr.splice(index,1);
            },
            deleteAll(){
                this.arr='',
                this.showArrarr=''
            }
        }

    }
</script>

<style scoped>
    #icon {
        float: right;
    }
    #history {
        float: left;

    }
    #height{
        height: 30px;
    }
</style>