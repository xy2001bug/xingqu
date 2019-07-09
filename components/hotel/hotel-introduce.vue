<template>
<div :v-if="isShow" :class="{isShow}" >
 <el-row type="flex" justify="space-between" class="hotel-int" 
    v-for="(item,index) in data.data" :key="index" >
        <el-col :span="8">      
            <img :src="item.photos">
        </el-col>
        <el-col :span="8" class="hotel-intstrus">
            <div class="instrus-title" @click="heahleSelect(item)">
                {{item.name}}
            </div>
            <div class="instrus-title-english">
                {{item.alias}}
            </div>
            <div class="hotel-evaluate">
                <span class="evaluate-level">
                    <el-rate
                    class="route-stars"
                        v-model="item.stars"
                        disabled
                        show-score
                        text-color="#ff9900"
                        score-template="{value}">
                        </el-rate>
                    分
                </span>
                <span>
                    <i>{{item.all_remarks}}</i>条评价
                </span>
                <span>
                    <i>{{item.roomCount}}</i>篇游记
                </span>
            </div>
            <div class="hotel-address">
                <i class="iconfont iconlocation"></i>
                {{item.address}}
            </div>
        </el-col>
        <el-col :span="8" class="hotel-link" >           
                <a :href="`${othersHotel[i]}`" class="link-other" v-for="(v,i) in item.products" :key="i">
                    <span>{{v.name}}</span>
                    <span>
                        <i>￥ {{v.price}}</i>起
                        <i class="el-icon-arrow-right"></i>
                    </span>
                </a>
                <!-- <a href="#" class="link-other">
                    <span>携程</span>
                    <span>
                        <i>￥ 96</i>起
                        <i class="el-icon-arrow-right"></i>
                    </span>
                </a>
                <a href="#" class="link-other">
                    <span>携程</span>
                    <span>
                        <i>￥ 96</i>起
                        <i class="el-icon-arrow-right"></i>
                    </span>
                </a> -->

        </el-col>
    </el-row>
    <div class="hotel-pagination">
         <el-pagination
            @current-change="headleCurrentChange"
            layout="prev, pager, next"
            :total="data.total">
        </el-pagination>
    </div>
</div>
   
</template>

<script>
export default {
    data(){
        return{
            starsLength:0,
            isShow:false,
            _start:0,
            othersHotel:[
                "https://hotels.ctrip.com/",
                "http://hotel.elong.com/",
                "https://www.hotels.cn/"
            ]
        }
    },
    props:{
        data:{
            type:Object,
            default:{}

        }
    },
    mounted(){
        setTimeout(() => {
            // console.log(this.data,123);
            if(this.data.total == 0){
         
                this.isShow = true
            }
            
        }, 300);
    },
    methods:{

        //点击酒店的时候触发【
        heahleSelect(item){
            console.log("选择酒店",item);
            const id = item.id
            this.$router.push({
                path:"/hotels/detail",
                query:{
                    city:+this.$route.query.city,
                    id
                }
            })
        },
        //改变当前页的时候触发
        headleCurrentChange(val){
            this._start = this.data.nextStart
                this.$axios({
                url:"/hotels",
                params:{
                   city:+this.$route.query.city,
                   _limit:10,
                   _start:this._start,               
                }
            }).then(res=>{
               
                this.data = res.data
            })
          

        }
        //
    }
}
</script>

<style scoped lang="less">
.hotel-pagination{
    float: right;
    height: 20px;
}
.isShow{
    height: 1px;
    overflow: hidden;
}
.hotel-int{
    height: 265px;
    width: 1020px;
    padding-top: 30px;
    border-bottom:1px solid #ddd;
    img{
        height: 210px;
        width: 320px;
    }
    .hotel-intstrus{
        .instrus-title{
            font-size: 22px;
            font-weight: 400;
            cursor: pointer;
        }
        .instrus-title-english{
            color: #aaaaaa;
            font-size: 14px;
            padding-top: 15px;
        }
        .hotel-evaluate{
            span{
                padding-right:15px ;
            }
            .evaluate-level{
                color: orange;
                .route-stars{
                    display: inline;
                }
            }
             padding-top: 15px;
            font-size: 14px;
            i{
                font-size: 14px;
                color: orange;
            }
        }
    }
    .hotel-address{
         padding-top: 15px;
         color: #666;
    }
    .hotel-link{
        padding-left: 40px;
       
        .link-other{
             border-bottom:1px solid #ddd;
            display: flex;
            justify-content: space-between;
            &:active{
                background-color: #eee;
            }
            span{
                display: inline-block;
                color: #666;
                margin: 15px; 
                i{
                    color: orange;
                }
            }
        }
    }
}
</style>
