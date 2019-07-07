<template>
    <el-row type="flex" justify="space-between" class="hotel-int">
        <el-col :span="8">      
            <img src="https://p0.meituan.net/hotel/ce4339f0baea06372107c3640fa0dbe183731.jpg%40700w_700h_0e_1l%7Cwatermark%3D1%26%26r%3D1%26p%3D9%26x%3D2%26y%3D2%26relative%3D1%26o%3D20" alt="">
        </el-col>
        <el-col :span="8" class="hotel-intstrus">
            <div class="instrus-title">
                南京古都文化酒店（鼓楼店）(如家联盟)
            </div>
            <div class="instrus-title-english">
                nan jing gu du wen hua hotel （ gu lou dian ）(ru jia lian meng)
            </div>
            <div class="hotel-evaluate">
                <span class="evaluate-level">
                    <i class="el-rate__icon el-icon-star-on"></i>
                    <i class="el-rate__icon el-icon-star-on"></i>
                    <i class="el-rate__icon el-icon-star-on"></i>
                    <i class="el-rate__icon el-icon-star-on"></i>
                    4分
                </span>
                <span>
                    <i>5</i>条评价
                </span>
                <span>
                    <i>58</i>篇游记
                </span>
            </div>
            <div class="hotel-address">
                <i class="iconfont iconlocation"></i>
                位于: 北京东路8号(江苏电视台对面，北京东路与丹凤街交汇处东南角)
            </div>
        </el-col>
        <el-col :span="8" class="hotel-link">           
                <a href="#" class="link-other">
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
                </a>
                <a href="#" class="link-other">
                    <span>携程</span>
                    <span>
                        <i>￥ 96</i>起
                        <i class="el-icon-arrow-right"></i>
                    </span>
                </a>

        </el-col>
    </el-row>
</template>

<script>
export default {

}
</script>

<style scoped lang="less">
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
