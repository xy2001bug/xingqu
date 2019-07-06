<template>
    <div class="form">
        <!-- 这是登录的form表单 -->
        <el-form :model="ruleform" :rules= "rules" ref="ruleform" >
            <!-- 用户名 -->
            <el-form-item class="form-item"  prop="username">
                <el-input placeholder="用户名/手机" v-model="ruleform.username" ></el-input>
            </el-form-item>
            <!-- 密码？ -->
            <el-form-item class="form-item" prop="password">
                <el-input placeholder="密码" type="password" v-model="ruleform.password"></el-input>
            </el-form-item>
            <el-form-item class="foregetpaw">忘记密码？</el-form-item>
            <el-button 
            type="primary " 
            class="submint" 
            @click="handleLoginSubmit" >
                登录
            </el-button>
        </el-form>
    </div>
</template>

<script>
export default {
    data(){
        return{
            ruleform:{
                username:"",
                password:""
            },
             // 表单的验证,是写在return中的
                rules: {
                username: [
                    { required: true, message: '请输入手机号码', trigger: 'blur' }
                ],
                password: [
                    { required: true, message: '请输入密码', trigger: 'blur' },
                ],
            }       
        }
    },
   methods: {
    handleLoginSubmit(){
        // 验证表单
    
        this.$refs['ruleform'].validate((valid) => {
     
            // 为true表示没有错误
            if (valid) {
                this.$store.dispatch("user/login",this.ruleform)
                .then(res=>{
                    
                    this.$message({
                    
                        message: "登录成功，正在跳转",
                        type: "success"
                    });
                    // 跳转到首页
                    setTimeout(() => {
                        this.$router.replace("/")
                    }, 1000);
                })
            }
        })
    }
}
   

}
</script>

<style scopde lang="less">
    .form{
        padding: 20px;
        background-color: #fff;
        
        .submint{
            display: block;
            width: 100%;
            
        }
        .foregetpaw{
            float: right;
            font-size: 12px;
            color: blue;
            height: 12px;
            cursor: pointer;

        }
    }
</style>
