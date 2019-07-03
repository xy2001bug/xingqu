<template>
    <!-- section不是专门的容器，是对内容进行分块 -->
    <section class="contianer">
        <el-row type="flex" justify="space-between" >

            <!-- 写顶部过滤 -->
            <div class="flights-content" > 
                <!-- 过滤条件 -->
                <div>
                    <FlightsFliters :data="cacheFlithtsData" @setDataList = "showList" />
                </div>

                <!-- 航班信息头部布局 -->
                <div>
                   <FligthsHead/>
                </div>

                <!-- 航班信息 -->
                <div>
                    <FightsItem 
                    v-for="(item,index) in dataList"
                    :key="index"
                    :data="item" />

                    <!-- 分页 -->
                    <el-row type="flex" justify="space-between" style="margin-top:10px" >
                        <!-- size-change:每一页的条数。pagezise改变触发
                        current-change：当前页的数据，currentpage改变触发
                         current-page:当前页
                         total：总数-->
                        <el-pagination
                            @size-change="handleSizeChange"
                            @current-change="handleCurrentChange"
                            :current-page="pageIndex"
                            :page-sizes="[5, 10, 15, 20]"
                            :page-size="pageSize"
                            layout="total, sizes, prev, pager, next, jumper"
                            :total="flightsData.total">
                            </el-pagination>
                    </el-row>
                </div>
            </div>
            
            <!-- 侧边栏 -->
            <div class="aside">
                <!-- 侧边栏组件 -->
                <FlightsAside />
            </div>
        </el-row>
    </section>
</template>

<script>
import monent from  "moment"
import FligthsHead from "@/components/air/fightsListHead.vue"
import FightsItem from "@/components/air/flightsItem.vue"
import FlightsFliters from "@/components/air/flightsFliters.vue"
import FlightsAside from "@/components/air/flightsAside.vue"
export default {
    components:{
        FligthsHead,
        FightsItem,
        FlightsFliters,
        FlightsAside
    },
     data(){
        return {
            flightsData: {
                 flights: [],
                info: {},
                options: {}
            }, // 航班总数据
            dataList: [],     // 航班列表数据，用于循环flightsItem组件，单独出来是因为要分页
            pageIndex:1,//当前页码
            pageSize:5,//当前显示的条数

            //缓存一份数据,这个数据只会修改一次
            cacheFlithtsData:{
                flights:[],
                info:{},
                options:{}
            }
        }
    },
   methods: {
        // 获取航班总数据
        getData(){
            this.$axios({
                url: `airs`,
                params: this.$route.query // 来自URL的5个参数
            }).then(res => { 
                this.flightsData = res.data;
                // this.dataList = this.flightsData.flights;
                //缓存一份数据，这个数据是不会被修改的，flightsdata是被修改的
                this.cacheFlithtsData = {...res.data}
                this.showList();
            });
        },
        //设计一个函数。用来显示页面上的数据
        
        showList(arr){
            //如果是有数据传递过来的话，就执行
            if(arr){
                this.pageIndex = 1;
                this.flightsData.flights = arr;
                this.flightsData.total = arr.length
            }
            const startIndex = (this.pageIndex - 1) * this.pageSize;
            const endIndex = startIndex + this.pageSize
            this.dataList = this.flightsData.flights.slice(startIndex,endIndex)   
        },
        //切换条数
        handleSizeChange(val) {
        this.pageSize = val;
        this.pageIndex = 1;
        this.showList()
      },
        //切换页
      handleCurrentChange(val) {
        this.pageIndex = val;
        this.showList();
      }
    },

    mounted(){
        this.getData();
    },
     watch:{
        //监听url的变化。根据选择的路径进行跳转
        $route(){
            this.getData()
        }
    }
}
</script>
<style scoped lang="less">
    .contianer{
        width:1000px;
        margin:20px auto;

        .flights-content{
        width:745px;
        font-size:14px;

    }
    .aside{
        width:240px;
    } 
    }

    

    
</style>
