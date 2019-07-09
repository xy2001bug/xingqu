<template>
     <div class="box">
         <div class="boss">
         <!-- 头部攻略详情 -->
         <div class="box_1">
            <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/post' }">旅游攻略</el-breadcrumb-item>
            <el-breadcrumb-item>攻略详情</el-breadcrumb-item>
            </el-breadcrumb>
         </div>

        <!-- 标题 -->
        <div class="box_2">
            <h1> {{this.dataList.title}}</h1>
        </div>
        <!-- 攻略时间 -->
        <div class="box_3">
            <p>攻略：2019-05-22 10:57  阅读1302</p>
        </div>

        <!-- 内容 -->
        <div class="box__content11" v-html="this.dataList.content">{{this.dataList.content}}</div>

        <div class="box_4">
            <div> 
                <i class="el-icon-edit-outline">
                <p>评论</p>
                </i> 
                </div>
            <div @click="handleShouChang">
                <i class="el-icon-star-off">
                <p>收藏</p>
                </i>
            </div>
            <div>
                <i class="el-icon-share">
                <p>分享</p>
                </i>
            </div>
            <div>
                  <i class="el-icon-thumb">
                <p>点赞</p>
            </i>
            </div>
        </div>

        
                <!-- 引入外部评论组件 -->
                <div>
                    <Discuss></Discuss>
                </div>
            </div>



            <div class="youbian">
                <div class="youbian_gonglue"> 相关攻略</div>
                <div  class="youbian_gonglue_"  v-for="(item,key,index ) in data_Data" :key="index">
                        {{key}}
                </div>
            </div>
     </div>
</template>

<script>
import Discuss from "./discuss.vue"
export default {
    components:{
        Discuss,
    },
        data() {
            return {
                dataList:[],
                data_Data:"",
                id:"",//获取的ID
            }
        },
        mounted() {

            this.hodeleGongLue ();
            this.huoquluyouId ();

                 this.$axios({
                url:`/posts`,
                method:"GET",
                params:{
                    city:+this.id
                }
            }).then(res=> {
                console.log(res,1213);
                this.dataList = res.data.data[0];
                this.data_Data = res.data
            })

            
            
        },
        methods:{
            handleShouChang(){
                this.$axios({
                    url:`/posts/star`,
                    method:"GET",
                }).then(res => {
                    // console.log(res);
                    
                })
            },
            // 封装一个请求数据
            hodeleGongLue(){
               this.$axios({
                url:`/posts/recommend`,
                method:"GET",
            }).then(res=> {
                // console.log(res );
                this.data_Data = res.data.data
             
            })
            },
            // 封装一个获取路由的函数
            huoquluyouId(){
                 const query = this.$route.query.id;
                //  console.log(query);
                 
                 this.id = query
            }
        }
}
</script>

<style>
   .box {
       
        display: flex;
        width: 1000px;
        margin: 0 auto;
        padding-top: 10px;
        justify-content: space-between;
   }
   .box .boss{
           width: 700px;
   }
   .box_1 {
       padding: 20px 0 20px 0;
   }
   .box_2 {
       border-bottom: 1px solid #ddd;
       padding-bottom: 20px;
   }
   .box_3 > p {
       padding: 20px 0 20px 0;
       text-align: right;
       color: #aaa;
   }
   .box_4 {
       display: flex;
       justify-content: center;
       padding: 40px 0 40px 0;
   }
   .box_4 div {
        margin: 0 20px;
        font-size: 20px;
        text-align: center;
        cursor: pointer;
   }
   .box_4 div > i{
        display: block;
        font-size: 35px;
        color:#aec555;
   }
   .box_4 div >i > p{
        margin-top: 5px;
        font-size: 14px;
        color: #999;
   }
   .box__content11 img {
          max-width: 700px !important ;
       }
    .box .youbian{
        width: 300px;
    }
    .box .youbian .youbian_gonglue{
        font-size: 20px;
        font-weight: 700;
        padding: 20px 0 20px 0;
        border-bottom: 1px solid #ccc; 
    }
     .box .youbian .youbian_gonglue .youbian_gonglue_{
         height: 300px;
     }
</style>
