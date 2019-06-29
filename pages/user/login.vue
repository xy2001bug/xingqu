<template>
    <div class="container">
       <el-row type="flex" justify="center" align="middle" class="main" >
           <div class="from-wrapper">
                <el-row type="flex" justify="center" class="tabs" >
                    <span v-for="(item,index) in [`登录`,`注册`]" :key="index" 
                    :class="{active: currentTab==index}" 
                    @click="headleChangeTab(index)">
                        {{item}}
                    </span>
                </el-row>
                <Login v-if="currentTab == 0" />
           </div>


       </el-row>
    </div>
</template>

<script>
import Login from "@/components/user/login.vue"
export default {
    components:{
        Login,
    },
    data(){
        return{
           currentTab:0
        }
    },
    methods:{
        headleChangeTab(index){
            this.currentTab = index;

        }
    }

}
</script>
<style lang="less" scoped>
.container{
    background:url(http://157.122.54.189:9095/assets/images/th03.jfif) center 0;
    height: 720px;
    min-width: 1000px;
        .main{
            top: 40%;
            left: 50%;
            margin-left: -200px;
            background-color: #eee;
            width: 400px;
            .from-wrapper{
                .tabs{
                    span{
                    display: block;
                    width:200px;
                    height: 50px;
                    box-sizing: border-box;
                    border-top:2px #eee solid;
                    background:#eee;
                    line-height: 48px;
                    text-align: center;
                    cursor: pointer;
                    color:#666;
                        &.active{   
                            background-color:bisque;
                            border-top: 2px yellowgreen solid;
                        }
                    }
                }
            }
        }

    

}
</style>
