<template>
<div>
  
    <div class="help">
      <!-- 用户反馈窗口title -->
      <mu-appbar style="width: 100%;left:0;right:0;top:0;position:fixed;" color="#FFFFFF" z-depth="0" textColor="#333333">
      
      <div class="help-title">用户反馈窗口</div>
      <mu-button  icon slot="right" ></mu-button>
      </mu-appbar>
       
  </div>
  <div class="con">
    <div   style="color:red;margin-top:1rem">请选择你要反馈的板块</div>
            <div>
                <select v-model="selected">
                    <option disabled value=""></option>
                    <option>请选择</option>
                    <option>圈子</option>
                    <option>信息</option>
                    <option>商城</option>
                    <option>我的</option>
                </select>
              
           </div>
                       <div  style="color:red;margin-top:20px">反馈内容</div>
            <textarea v-model="message" placeholder="请在此编辑~"></textarea>
            

               <div  style="color:red;margin-top:20px">请留下你的联系电话</div>
           <input v-model="msg" />

              <div  style="color:red;margin-top:20px">请留下你的电子邮箱</div>
           <input v-model="msg2" />
<br>
           </div>
          
           <button class="button-help">点击提交</button>
          
</div>

            
</template>
<script>
export default {
   data(){
      return{
        message:"",
         checked: true,
            checkedNames: ['John'],
            picked: 'One',
            selected: '请选择',
            selectedMulit:['B','C'],
            selectedAutoSign: 'A',
            msg:"请输入电话号",
            msg2:"请输入e-mail",  
     
        imgList:[
        
        ]
      };

    },

  name:"help-2",
  methods:{
   
  
  }
}
</script>
<style lang="scss" scoped>
  .help{
    height: 100%;
  }
  .help-title{
      text-align: center;
  }
  .button-help{
    width: 200px;
    height: 50px;
    float: left;
    margin-top: 75px;
    margin-left: 90px;
    background-color:blue;
    color: #ccc;
  }
  .con{
    margin-left: 25px;
  }
  
</style>



