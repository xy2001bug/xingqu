<template>
    <div class="banxin">

        <!-- 头部酒店跳转 -->
        <div class="header">
            <span><router-link to="/hotels">酒店</router-link></span>
            <i>></i>
            <span><router-link to="/hotels">南京酒店</router-link></span>
            <i>></i>
            <span>{{details.name}}</span>
        </div>   

        <!-- 酒店名字 -->
        <div>
            <div class="title">
                <span class="title-name">{{details.name}}</span> 
                <el-rate
                    v-model="details.stars"
                    disabled
                    show-score
                    text-color="#ff9900"
                    score-template="{value}">
                    </el-rate>
                <p>{{details.alias}}</p>
                <i class="el-icon-location"></i>
                <span>{{details.address}}</span>
            </div>
        </div> 

        <!-- 酒店图片 -->
        <div class="hotel-img">
            <el-row :gutter="20" >
                <el-col :span="16"
                 
                >
                <div class="grid-content bg-purple big-img"
                    
                ><img :src="`http://157.122.54.189:9093/images/hotel-pics/${this.index+1}.jpeg`" alt=""></div></el-col>



                <div>
                <el-col :span="4" v-for="(item, index) in pics" 
                :key="index">
                    <div class="grid-content bg-purple small-img" @click="hanldExamine(index)"><a href="javascript:void(0);"><img :src="`http://157.122.54.189:9093/images/hotel-pics/${index+1}.jpeg`" alt=""></a></div></el-col>
            
                </div>
                
            </el-row>
        </div>

        <!-- 酒店价格组件 -->
        <HotelPrice/> 


        <!-- 酒店地图组件 -->
        <div class="map">
            <Map :data="hotelDataDetail"/>
        </div>

        <!-- 酒店基本信息 -->
        <HotelDeploy />

        <!-- 回复框 -->
        <Comment/>
    </div>
</template>

<script>

    // 引入组件地图
import Map from "@/components/hotel/map.vue";
import HotelPrice from "@/components/hotel/hotelPrice.vue";
import HotelDeploy from "@/components/hotel/hotelDeploy.vue";
import Comment from "@/components/hotel/comment.vue";

export default {
        data(){
            return{
                details:{},
                rem:[1,2,3,],
                pics:[],
                dow:false,
                index:'',
                hotelDataDetail:{}
            }
        },
        watch:{
       data:{
           handler(newVal,oldVal){
             this.data = newVal;
           },
           deep: true
       }
    },
    components:{
        Map,
        HotelPrice,
        HotelDeploy,
        Comment
    },
    mounted(){
        this.$axios({
            url:"/hotels",
           method:"GET",
           params:{
               city:+this.$route.query.city 
           }
        }).then(res=>{
            this.hotelDataDetail = {...res.data}
            console.log(res);
            this.details=res.data.data[0]
            this.pics=res.data.data[0].pics;
        })
    },
    methods:{
        hanldExamine(index){
            this.index=index
        }
    }
    
    
}
</script>

<style scoped lang="less">
    .banxin{
        width: 1000px;
        margin: 0 auto;
    }  
    
    .header{
        padding-top:20px;
        font-weight: 700;
    }
    .header span{
        font-size: 14px;
    }
    .header i{
        color: #666;
    }
    .header span:last-child{
        font-size: 12px;
        font-weight: 400;
        color: #666;
    }
    .title{
        padding-top:20px;
    }
    .title span:first-child{
        color: #333;
        font-weight: 400;
        font-size: x-large;
    }
    .title p{
        color: #666;
        font-size: 14px;
    }
    .title span:last-child{
        color: #666;
        font-size: 14px;
    }

    .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
    .el-col {
        border-radius: 4px;
    }
    .bg-purple-dark {
        background: #99a9bf;
    }

    .bg-purple-light {
        background: #e5e9f2;
    }
    .grid-content {
        border-radius: 4px;
        min-height: 36px;
    }
    .row-bg {
        padding: 10px 0;
        background-color: #f9fafc;
    }
    .big-img{
        width: 640px;
        height: 360px;
        // display: none;
    }
    .big-img img{
        height: 360px;
        width: 640px;
    }
    .small-img img{
        width: 160px;
        height: 110px;
        margin-bottom: 10px;
    }
    .hotel-img{
        margin-top:20px;
    }
    .map{
        margin-top:40px;
        margin-bottom: 80px;
    }
</style>
