<template>
    <el-form>
        <el-row type="flex" justify="space-between" class="search-input">
            <el-autocomplete
                class="searchCity"
                v-model="form.hotelCity"
                :fetch-suggestions="queryHotelCity"
                placeholder="请输入城市"
                @select="handleSelectHotelCity"
                ></el-autocomplete>        
             <el-date-picker type="date" placeholder="请选择入住日期" style="width: 100%;" @change="handleDateCheckIn" v-model="form.dateCheckIn"></el-date-picker>
             <el-date-picker type="date" placeholder="请选择离开日期" style="width: 100%;" @change="handleDateCheckOut" v-model="form.dateCheckOut"></el-date-picker>
            <el-input
                placeholder="人数未定"
                suffix-icon="el-icon-user"
                v-model="form.personNum">
            </el-input>
            <el-button type="primary" @click="headleSubmit">查看价格</el-button>
        </el-row>
    </el-form>
</template>

<script>
import moment from "moment"
export default {
    data(){
        return{
          
            form:{  
                hotelCity:"",
                cityId:74,
                dateCheckIn:"",//入住时间
                dateCheckOut:"",//离开时间
                personNum:"人数未定",  //入住人数
              
            }
        }
    },
    props:{
        data:{
            type:Number,
            default:null
        }
    },
    methods:{
        //选择入住时间的时候触发
        handleDateCheckIn(value){
            this.form.dateCheckIn = moment(value).format("YYYY-MM-DD")
        },
        //选择离开时间的时候触发
        handleDateCheckOut(value){
            this.form.dateCheckOut = moment(value).format("YYYY-MM-DD")
        },
         // 出发城市输入框获得焦点时触发
    // value 是选中的值，cb是回调函数，接收要展示的列表
    queryHotelCity(value, cb) {
         if(!value) {
                return;
            }
            this.$axios({
                url: "http://157.122.54.189:9095/airs/city?name=" + value,
                method: "GET"
            }).then(res => {       
                const {data} = res.data;
                //这是为了获取城市id的
                const [idCount] = data
               this.form.cityId = idCount.id
                const newData = data.map(v => {
                    return {
                        ...v,
                        value: v.name.replace("市", "")
                    }
                })

                // cb函数接收的参数是数组，数据里面每一项必须是对象，然后带有value的属性
                cb(newData);
            });
    },
    // 出发城市下拉选择时触发
    handleSelectHotelCity(item) {
      this.form.hotelCity=item.value
    //   console.log(123);
       this.$router.push({
            path:"/hotels",
            query:{
                city:this.form.cityId,
                enterTime:this.form.dateCheckIn,
                leftTime:this.form.dateCheckOut,                
            }
        })

    },
    //点击提交
    headleSubmit(){
        this.$router.push({
            path:"/hotels",
            query:{
                city:+this.$route.query.city,
                enterTime:this.form.dateCheckIn,
                leftTime:this.form.dateCheckOut
            }
        })
           
    
    }
    }
}
</script>

<style scoped lang="less">
    .search-input{
       margin: 20px 0px;
       .searchCity{
        //    display: inline-block;
           width: 600px;
        margin-right: 20px;
       }
       .el-input{
           margin-right: 20px;
       }
   }
</style>
