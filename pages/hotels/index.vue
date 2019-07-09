<template>
    <div class="container">
        <!-- 这是面包屑 -->
        <el-row class="crumbs">
            <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>酒店</el-breadcrumb-item>>
            <el-breadcrumb-item>酒店预订</el-breadcrumb-item>
            </el-breadcrumb>
        </el-row>
        <!-- 这是搜索栏 -->
        <div>
            <searchHotel />
        </div>
        <!-- 这是地图和区域介绍 -->
        <div>
            <Map :data="hotelData"/>
        </div>
        <!-- 这是过滤条件 -->
        <div class="filter-list">
            <FilterList :data="hotelData"/>
        </div>
        <!-- 这是酒店的介绍 -->
        <div class="hotel-intrus">
            <HotelIntroduce :data="hotelData"/>
        </div>
    </div>
</template>

<script>
import Map from "@/components/hotel/map.vue";
import FilterList from "@/components/hotel/filter-list.vue"
import HotelIntroduce from "@/components/hotel/hotel-introduce.vue"
import SearchHotel from "@/components/hotel/search-hotel.vue"
export default {
    data(){
        return{
            hotelData:{},
            hotelFilterData:{},
        }
    },
    
    
    components:{ 
                SearchHotel,
                Map,
                FilterList,
                HotelIntroduce,
              
    },
     watch:{
       hotelData:{
           handler(newVal,oldVal){
             this.hotelData = newVal;
           },
           deep: true
       }
    },
    mounted(){
       this.getHotelData();
    },
    watch:{
       $route: function (newVal, oldVal) {
            if (newVal !== oldVal)  {
                //直接强制刷新！！1
             location.reload();
        }
       }
    },
    methods:{
        //获取全部数据
       getHotelData(){
           if(!this.$route.query.city){
               this.$route.query.city = 74
           }
        this.$axios({
            url:'/hotels',
            params:{
                city:+this.$route.query.city 
            }
        }).then(res =>{    
            this.hotelData = {...res.data};  
            // console.log(this.hotelData,"第一");   
            this.hotelFilterData = this.hotelData    
      
        })
       },
           
       
    }

}
</script>

<style scoped lang="less">
.container{
    width:1000px;
    margin:40px auto;
   
   .filter-list{
       border: 1px solid #ddd;
   }
   
}

</style>
