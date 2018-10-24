<template>
    <div>
         <mu-container>
        <div class="download-title">
             <mu-button class="download-title-back" flat @click="changeFatherB">{{manage.return}}</mu-button>
             <h3 class="download-title-text">{{manage.OffLine}}</h3>
        </div>
        <hr/>
        <div class="download-locality">
            <img src="../../../../../assets/img/profilemydownloadvip1.png" alt="">
           <p>{{manage.localVideo}}</p>
        </div>
        <hr/>
        <div class="manage-off">
            <img src="../../../../../assets/img/profilemydownload.png" alt="">
            <p>{{manage.OfflineVideo}}</p>
        </div>
        <hr/>
        <div>

        </div>
        
        </mu-container>
    </div>
</template>

<script>
export default {
  name:"profile",
  data(){
    return{
        manage:{
            return:this.$t('profile.return'),
            OffLine:this.$t('profile.return'),
            localVideo:this.$t('profile.localVideo'),
            OfflineVideo:this.$t('profile. OfflineVideo'),
        }
    };  
  },
  methods:{
    changeFatherB(){
      this.$emit('resetFatherp');
    }
  },
}
</script>

<style lang="scss" scoped>
img{
    width: 50px;
    height: 50px;
}
img,p{
    float: left;
}
.download-title{
  margin-top: 0.4rem;
  height: 40px;
  line-height: 40px;
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  // background-color: #05c2a9;
  &-back{
  margin-left: 0.2rem;
  }
  &-text{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%)
  }
  &-father{
   position: absolute;
   top: 6%;
   left: 80%;
  }
}

.download-locality{
    width: 100%;
    height: 60px;
}
.manage-off{
    width: 100%;
    height: 60px;
}
</style>
