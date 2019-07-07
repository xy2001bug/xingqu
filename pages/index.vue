<template>
    <div class="container">
        <!-- 幻灯片 -->
        <el-carousel 
        :interval="5000" 
        arrow="always">
            <el-carousel-item 
            v-for="(item, index) in banners" 
            :key="index">
                <div class="banner-image" 
             :style="`        
             background:url(${$axios.defaults.baseURL}${item.url}) center center no-repeat;
             background-size:contain contain;
             `">
                  
                  </div>
            </el-carousel-item>
        </el-carousel>
        <div class="banner-content">  
          <el-row type="flex" class="search-tab">
            <!-- tab切换 -->
            <span
            v-for="(item,index) in options" :key="index"
            :class="{action:currentTarget == index}"
            @click="headleTaget(index)"
            >
            <strong>{{item.name}}</strong>
            </span>
          </el-row>
          <el-row type="flex" class="search-input" align="middle" >
            <!-- 输入框 -->
            <input type="text" :placeholder="options[currentTarget].placeholder" />
            <i class="el-icon-search" ></i>
          </el-row>
        </div>
        <!-- 夏日出行精选 -->
        <Summer />
        <!-- 经典旅行城市 -->
        <Classic />
        <!-- 精选房源 -->
        <House />
        <!-- 高分体验 -->
        <Experience />

    </div>
  
</template>
<script>
import Summer from "@/components/index/summer.vue"
import Classic from "@/components/index/classic.vue"
import House from "@/components/index/house.vue"
import Experience from "@/components/index/experience.vue"

export default {
  components:{
    Summer,
    Classic,
    House,
    Experience
  },
  data(){
    return{
      banners:[],
      options:[
        {
          name:"攻略",
          placeholder:"搜索城市"
        },
        {
          name:"酒店",
          placeholder:"请输入酒店"
        },
        {
          name:"机票",
          placeholder:"请输入出发地"
        }
      ],
      currentTarget:0
    }
  },
  mounted(){
    this.$axios({
      url:"/scenics/banners",
      method:"GET"
    }).then(res=>{
      //这里有一个问题，data中图片的路劲是相对的，在给页面的时候，这个路径变成绝对路劲  
      const {data} = res.data
      this.banners= data
    })
  },
  methods:{
    headleTaget(index){
      this.currentTarget = index;
      if(index === 2){
        // this.$roter.push ('/air')
        this.$router.push("/air")
      }
    }
  }

}
</script>

<style scoped lang="less">
.container{
    min-width:1000px;
    margin:0 auto;
    position:relative;

    /deep/ .el-carousel__container{
        height:700px;
    }

    .banner-image{
        width:100%;
        height:100%;
    }
    .banner-content{
      z-index: 9;
      position: absolute;
      // tab栏相对整个页面在纵向上的位置
      top: 14%;
      left: 50%;
      width: 1000px;
      margin-left: -500px;
      border-top:1px transparent solid;
      .search-tab{
        width: 550px;
        margin: 0 auto;
        .action{        
          strong{
            color: #333;
          }
          &:after{
            background-color: #eee;
          }
        }
        span{
                width:82px;
                height:36px;
                display:block;
                position: relative;
                margin-right:8px;
                cursor: pointer;

                strong{
                position:absolute;
                z-index:2;
                display: block;
                width:100%;
                height:100%;
                line-height:30px;
                text-align:center;
                color:#fff;
                }

                &:after{
                position: absolute;
                left:0;
                top:0;
                display:block;
                content: "";
                width:100%;
                height:100%;
                border: 1px rgba(255,255,255,.2) solid;
                border-bottom: none;
                transform: scale(1.1,1.3) perspective(.7em) rotateX(2.2deg);
                transform-origin: bottom left;
                background: rgba(0,0,0,.5);
                border-radius:1px 2px 0 0;
                box-sizing:border-box;
                }
            }

      }
      .search-input{
        width: 550px;
        margin: 0 auto;
        width: 550px;
        height: 46px;
        background-color: #fff;
        border-radius: 0 5px 5px 5px;
        //更改光标的透明度
        border: 1px rgba(255,255,255,.2) solid;

        input{
          width: 100%;
          height: 36px;
          outline: none;
          border: 0;
          padding-left: 10px;

        }
        i{
          padding: 10px;
          font-size: 24px;
          font-weight: 700;
          cursor :pointer;
        }
      }

    }
}
</style>
