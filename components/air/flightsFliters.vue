<template>
    <div class="filters" >
        <el-row type="flex" class="filters-top" justify="space-between" align="middle">
            <el-col :span="8">
                单程： 
               {{data.info.departCity}} - {{data.info.destCity}} 
                / 
                {{data.info.departDate}}
            </el-col>
            <el-col :span="4">
                <el-select size="mini" v-model="airport" placeholder="起飞机场" @change="handleAirport">
                    <el-option
                    v-for="(item,index) in data.options.airport" :key="index"
                    :label="item"
                    :value="item"
                    >
                    </el-option>
                </el-select>
            </el-col>
            <el-col :span="4">
                <el-select size="mini" v-model="flightTimes"  placeholder="起飞时间" @change="handleFlightTimes">
                    <el-option
                    v-for="(item,index) in data.options.flightTimes" :key="index"
                    :label="`${item.from}:00 - ${item.to}:00`"
                    :value="`${item.from}:00 - ${item.to}:00`"
                    :ref="item"
                    >
                    </el-option>
                </el-select>
            </el-col>
            <el-col :span="4">
                <el-select size="mini" v-model="company"  placeholder="航空公司" @change="handleCompany">
                    <el-option
                    v-for="(item,index) in data.options.company" :key="index"
                    :label="item"
                    :value="item">
                    </el-option>
                </el-select>
            </el-col>
            <el-col :span="4">
                <el-select size="mini" v-model="airSize" placeholder="机型" @change="handleAirSize">
                    <el-option
                    v-for="(item,index) in sizeOptions" :key="index"
                    :label="item.name"
                    :value="item.size">
                    </el-option>
                </el-select>
            </el-col>
        </el-row>
        <div class="filter-cancel">
            筛选：
            <el-button 
                       type="primary" 
                       round 
                       plain 
                       size="mini" 
                       @click="handleFiltersCancel">
                撤销
    		</el-button>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            airport: "",        // 机场
            flightTimes: "",    // 出发时间
            company: "",        // 航空公司
            airSize: "",        // 机型大小
            ref:{},

            sizeOptions:[
                {name:"大", size:"L"},
                {name:"中", size:"M"},
                {name:"小", size:"S"}
            ]
        }
    },
    props:{
        data:{
            type:Object,
            default:{}
        }
    },
   
    methods: {
        // 选择机场时候触发
        handleAirport(value){
            //从返回的数据中可以知道机场是一个数组。要对数据进行筛选。所以：
            const arr  = this.data.flights.filter( v =>{
                 v.org_airport_name === value
            })
            this.$emit("setDataList",arr)
        },

        // 选择出发时间时候触发
        handleFlightTimes(ref){
            // console.log(ref,13141);
            // console.log(ref.split("-"));
            const fromNum =  +ref.split(" - ")[0].split(":")[0];
            const toNum = +ref.split(" - ")[1].split(":")[0];
            //console.log(this.data.flights)
            const arr = this.data.flights
            .filter(v => {
                return fromNum <= +v.dep_time.split(":")[0] && toNum >= +v.dep_time.split(":")[0]
            });

            this.$emit("setDataList", arr);
        },

         // 选择航空公司时候触发
        handleCompany(value){
            const arr = this.data.flights.filter(v =>
                 v.airline_name === value
            )
            this.$emit("setDataList", arr)
        },

         // 选择机型时候触发
         handleAirSize(value){
           const arr = this.data.flights.filter(v => 
                v.plane_size === value
            );

            this.$emit("setDataList", arr);
        },
        
        // 撤销条件时候触发
       handleFiltersCancel(){
            this.airport = "";
            this.flightTimes = "";
            this.company = "";
            this.airSize = "";
            
            this.$emit("setDataList", this.data.flights);
        },
    }
}
</script>

<style scoped lang="less">
    .filters{
        margin-bottom:20px;
    }

    .filters-top{
        > div{
            /deep/ .el-select{
                margin-left:10px;
            }
        }
    }

    .filter-cancel{
        margin-top:10px;
    }
</style>