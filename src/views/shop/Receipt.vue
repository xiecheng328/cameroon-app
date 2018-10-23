 <template>
     <div class="receipt">
         <div class="cover">
          <mu-flex justify-content="center" class="cover-button">
            <mu-button @click="openBotttomSheet">验证指纹
                <img src="./img/fingerprint.png" alt="">
            </mu-button>
        </mu-flex>
        <mu-bottom-sheet :open.sync="open" class="cover-reminder">
            <mu-list @item-click="closeBottomSheet" class="cover-reminder-style">
                <h2>付款成功<img src="./img/right.png" alt=""></h2>
            </mu-list>
  </mu-bottom-sheet>
         </div>
   </div>
</template>
<script>
export default {
     data () {
    return {
      open: false,
    }
  },
   methods: {
    closeBottomSheet () {
      this.open = false;
    },
    openBotttomSheet () {
      this.open = true;
    }
  }
 
}

</script>

<style lang="scss" scoped>
    .receipt{
            width: 375px;
            height:555px;
            background-size: cover;
             }
         .cover{           
                position: absolute;
                z-index: 1;
                width: 375px;
                height: 555px;
                background-color:black; 
                opacity: 0.7;
                &-button{
                    margin-top: 60%;
                    img{
                        width: 32px;
                    }
                }
                &-reminder{
                  height: 200px;
                  h2{
                      margin-left: 120px ;
                      margin-top: 40px;
                  }
                  img{
                      margin-left: 3px;
                      margin-top: 10px;
                      width: 30px;

                  }
                   
                
                }
        }
 
</style>
