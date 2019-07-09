<template>
    <div>
       <!-- 酒店价格 -->
       
         <el-table
            
            :data="details"
            style="width: 100%">
            <el-table-column
                prop="name"
                label="价格来源"
                width="300">
            </el-table-column>
            <el-table-column
                align="center"
                prop="bestType"
                label="低价房型"
                width="300"
                >
                
            </el-table-column>
            <el-table-column
            align="center"
                prop="price"
                label="最低价格/每晚">
            </el-table-column>
        </el-table>
       
    </div>   
</template>

<script>
export default {
    data() {
        return {
          details:[]
          
        }
    },
    mounted(){
        this.$axios({
            url:`hotels`,
           method:"GET",
        }).then(res=>{
            // console.log(res);
            this.details=res.data.data[0].products
            // console.log(this.details);
            // console.log(this.details);
            // const {date,name,address}=details
        })
    },
    // methods:{
    //   hanldClick(){
    //     console.log(123);
    //   }
    // }
}
</script>

<style>

</style>
