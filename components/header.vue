<template>
    <header class="header">
        <el-row type="flex" justify="space-between" class="main">

            <!-- logo -->
            <div class="logo">
                <nuxt-link to="/">
                    <img src="../static/logo.png" alt="" style="width:156px;height:50px">
                </nuxt-link>
            </div>

            <!-- 菜单栏 -->
            <el-row type="flex" class="navs">
                <nuxt-link to="/">首页</nuxt-link>
                <nuxt-link to="/post">旅游攻略</nuxt-link>
                <nuxt-link to="/hotels">酒店</nuxt-link>
                <nuxt-link to="/air">国内机票</nuxt-link>  
            </el-row>

            <!-- 登录/用户信息 -->
            <el-row type="flex" align="middle">

                <!-- 如果用户存在则展示用户信息，用户数据来自store -->
                <el-dropdown v-if="$store.state.user.userInfo.token">
                    <el-row type="flex" align="middle" class="el-dropdown-link">
                    <nuxt-link to="#">
                        <img :src="$axios.defaults.baseURL + $store.state.user.userInfo.user.defaultAvatar"/>
                        {{$store.state.user.userInfo.user.nickname}} 
                    </nuxt-link>
                    <i class="el-icon-caret-bottom el-icon--right"></i>
                     </el-row>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>
                           <nuxt-link to="#">个人中心</nuxt-link>
                        </el-dropdown-item>
                        <el-dropdown-item>
                            <div @click="handleLogout">退出</div> 
                        </el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>

                <!-- 不存在用户信息展示登录注册链接 -->
                <nuxt-link to="/user/login" class="account-link" v-else>
                    登录 / 注册 
                </nuxt-link>
            </el-row>
        </el-row>
    </header>
</template>
<script>
export default {
    methods: {
        // 用户退出
        handleLogout(){
            //不经过actions，直接给mutations
            const {commit} = this.$store;
            commit("user/clearUserInfo");
            this.$message({
                message:"退出成功",
                type:"success"
            })

        },
    }
}
</script>
<style scoped lang="less">
    .header{
        height: 60px;
        line-height:60px;
        background:#fff;
        border-bottom: 1px #ddd solid;
        box-shadow:0 3px 0 #f5f5f5;
        box-sizing: border-box;

        .main{
            width:1000px;
            margin:0 auto;
        }

        .logo{
            width:156px;
            padding-top:4px;

            img{
                display: block;
                width:100%;
            }
        }

        .navs{
            margin: 0 20px;
            flex:1;

            a{
                display:block;
                padding:0 20px;
                height:60px;
                box-sizing: border-box;

                &:hover,&:focus, &:active {
                    border-bottom:5px #409eff solid;
                    color:#409eff;
                }
            }

            /deep/ .nuxt-link-exact-active{
                background:#409eff;
                color:#fff!important;
            }
        }

        .message{
            height:36px;
            line-height:1;
            cursor:pointer;
            .el-icon-bell{
                margin-right:2px;
                font-size:18px;      
            }
        }

        .el-dropdown-link{
           margin-left:20px;

           &:hover{
               img{
                    border-color: #409eff;
               }
            }

           a{
               display:block;
           }

            img{

                width:32px;
                height:32px;
                vertical-align: middle;
                border:2px #fff solid;
                border-radius:50px;
            }
        }

        .account-link{
            font-size: 14px;
            margin-left:10px;
            color:#666;

            &:hover{
                color:#409eff;
                text-decoration: underline;
            }
        }
    } 
</style>