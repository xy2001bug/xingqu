<template>
    <el-row type="flex" justify="space-between" class="filter">
        <el-col :span="8">
               <el-row class="fliter-price">
                   <el-row type="flex" justify="space-between">
                       <span class="price-text">价格:</span>
                       <span type="text" class="price-input">0 - {{value}}</span>
                   </el-row>
               <el-row>
                   <el-slider v-model="value">
                    </el-slider>
               </el-row>
               </el-row>
        </el-col>
        <el-col :span="6">
           <div class="filter-group">  
               <div class="group-text">住宿等级</div>
               <div class="group-options">
                   <el-dropdown trigger="click" v-model="group" >
                        <span class="el-dropdown-link">
                            {{group}}
                            <i class="el-icon-arrow-down el-icon--right"></i>
                        </span>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item icon="el-icon-check" >一星</el-dropdown-item>
                            <el-dropdown-item icon="el-icon-check" >二星</el-dropdown-item>
                            <el-dropdown-item icon="el-icon-check">三星</el-dropdown-item>
                            <el-dropdown-item icon="el-icon-check">四星</el-dropdown-item>
                            <el-dropdown-item icon="el-icon-check">五星</el-dropdown-item>
                        </el-dropdown-menu>
                        </el-dropdown>  
               </div>
           </div>
        </el-col>
        <el-col :span="6">
             <div class="filter-group">  
               <div class="group-text">住宿类型</div>
               <div class="group-options">
                   <el-dropdown trigger="click" v-model="group">
                        <span class="el-dropdown-link">
                            {{group}}
                            <i class="el-icon-arrow-down el-icon--right"></i>
                        </span>
                        <el-dropdown-menu slot="dropdown" >
                            <el-dropdown-item icon="el-icon-check" >经济型</el-dropdown-item>
                            <el-dropdown-item icon="el-icon-check" >豪华型</el-dropdown-item>
                            <el-dropdown-item icon="el-icon-check">舒适型</el-dropdown-item>
                            <el-dropdown-item icon="el-icon-check">度假村</el-dropdown-item>
                            <el-dropdown-item icon="el-icon-check">公寓</el-dropdown-item>
                        </el-dropdown-menu>
                        </el-dropdown>  
               </div>
           </div>
        </el-col>
         <el-col :span="6">
              <div class="filter-group">  
               <div class="group-text">酒店设施</div>
               <div class="group-options">
                   <el-dropdown trigger="click" v-model="group">
                        <span class="el-dropdown-link">
                            {{group}}
                            <i class="el-icon-arrow-down el-icon--right"></i>
                        </span>
                        <el-dropdown-menu slot="dropdown" >
                            <el-dropdown-item icon="el-icon-check" >wifi</el-dropdown-item>
                            <el-dropdown-item icon="el-icon-check" >热水</el-dropdown-item>
                            <el-dropdown-item icon="el-icon-check">电脑</el-dropdown-item>
                            <el-dropdown-item icon="el-icon-check">电视</el-dropdown-item>
                            <el-dropdown-item icon="el-icon-check">空调</el-dropdown-item>
                        </el-dropdown-menu>
                        </el-dropdown>  
               </div>
           </div>
        </el-col>
         <el-col :span="6">
 <div class="filter-brand">  
               <div class="group-text">酒店品牌</div>
               <div class="group-options">
                   <el-dropdown trigger="click" v-model="group">
                        <span class="el-dropdown-link">
                            {{group}}
                            <i class="el-icon-arrow-down el-icon--right"></i>
                        </span>
                        <el-dropdown-menu slot="dropdown" >
                            <el-dropdown-item icon="el-icon-check" >7天连锁</el-dropdown-item>
                            <el-dropdown-item icon="el-icon-check" >如家</el-dropdown-item>
                            <el-dropdown-item icon="el-icon-check">汉庭</el-dropdown-item>
                            <el-dropdown-item icon="el-icon-check">格林豪泰</el-dropdown-item>
                            <el-dropdown-item icon="el-icon-check">99旅馆</el-dropdown-item>
                        </el-dropdown-menu>
                        </el-dropdown>  
               </div>
           </div>
        </el-col>
        
    </el-row>
</template>

<script>
export default {
     data() {
      return {
        value: 0,
        group:"不限",
        star:""
      }
    },
    props:{
        data:{
            type:Object,
            default:{}
        }
    },
    watch:{
       data:{
           handler(newVal,oldVal){
            //    console.log(newVal,1231);
           },
           deep: true
       }
    }
   
}
</script>

<style scoped lang="less">
.filter{ 
    .fliter-price{
        margin: 15px;
        font-size: 14px;
        padding-right: 15px;
        border-right: 1px solid #ddd;
        .price-input{
                height: 24px;
                width: 100px;
            }
    }
    .filter-group{
        height: 62px;
         margin: 15px;
        font-size: 14px;
        padding-right: 15px;
        border-right: 1px solid #ddd;
       
        .group-options{
            padding-top: 15px; 
            i{
                padding-left: 30px;
            }
        }
    }
    .filter-brand{
         
         margin: 15px;
        font-size: 14px;
        padding-right: 15px;
        .group-options{
            padding-top: 15px; 
            i{
                padding-left: 30px;
            }
        }
    }
    
}
</style>
