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
        <el-row type="flex" justify="space-between" class="search-input">
            <el-input placeholder="请输入酒店"></el-input>          
             <el-date-picker type="date" placeholder="请选择入住日期" style="width: 100%;" @change="handleDate" ></el-date-picker>
             <el-date-picker type="date" placeholder="请选择离开日期" style="width: 100%;" @change="handleDate" ></el-date-picker>
            <el-input
                placeholder="人数未定"
                suffix-icon="el-icon-user"
                v-model="input1">
            </el-input>
            <el-button type="primary">查看价格</el-button>
        </el-row>
        <!-- 这是地图和区域介绍 -->
        <div>
            <Map />
        </div>
        <!-- 这是过滤条件 -->
        <div class="filter-list">
            <FilterList />
        </div>
        <!-- 这是酒店的介绍 -->
        <div class="hotel-intrus">
            <HotelIntroduce />
            <HotelIntroduce />
            <HotelIntroduce />
            <HotelIntroduce />
        </div>
    </div>
</template>

<script>
import Map from "@/components/hotel/map.vue";
import FilterList from "@/components/hotel/filter-list.vue"
import HotelIntroduce from "@/components/hotel/hotel-introduce.vue"
export default {
    data(){
        return{
            input1:1
        }
    },
    components:{
                Map,
                FilterList,
                HotelIntroduce,
    },
    mounted(){
        this.$axios({
            url:'/hotels'
        }).then(res =>{
            console.log(res);
        })
    },
    methods:{
        //选择时间触发
        handleDate(){

        }
    }

}
</script>

<style scoped lang="less">
.container{
    width:1000px;
    margin:20px auto;
   .search-input{
       margin: 20px 0px;
       .el-input{
           margin-right: 20px;
       }
   }
   .filter-list{
       border: 1px solid #ddd;
   }
   
}

</style>
