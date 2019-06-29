<template>
  <el-form :model="form" ref="form" :rules="rules" class="form">
    <!-- 用户名 -->
    <el-form-item class="form-item" prop="username">
      <el-input placeholder="用户名/手机" v-model="form.username" ></el-input>
    </el-form-item>
    <!-- 验证码 -->
    <el-form-item class="form-item" prop="captcha">
      <el-input placeholder="验证码" v-model="form.captcha">
        <template slot="append">
            <!-- 按钮 -->
            <el-button @click="headleSendCode">发送验证码</el-button>
        </template>
      </el-input>
    </el-form-item>
    <!-- 昵称 -->
    <el-form-item class="form-item" prop="nickname">
      <el-input placeholder="你的昵称" v-model="form.nickname"></el-input>
    </el-form-item>
    <!-- 密码 -->
    <el-form-item class="form-item" prop="password">
      <el-input placeholder="密码" type="password" v-model="form.password"></el-input>
    </el-form-item>
    <!-- 确认密码 -->
    <el-form-item class="form-item" prop="checkPassword">
      <el-input placeholder="确认密码" type="password" v-model="form.checkPassword"></el-input>
    </el-form-item>

    <!-- 确认按钮 -->
    <el-form-item class="form-item">
      <el-button type="success" class="register_btn" @click="headleRegSubmit">
      注册
    </el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  data(){
    return{
      //表单数据
      form:{
          username:"",
          password:"",//密码
          checkPassword:"",//确认
          nickname:"",
          captcha:""//验证码
      },
      //验证规则
      rules:{
        username:[{
                required: true, 
                message: '请输入用户名', 
                trigger: 'blur' 
          }],
        password:[{
                required: true, 
                message: '请输入密码', 
                trigger: 'blur' 
        }],
        checkPassword:[{
          validator: validatePass, trigger: 'blur' 
        }],
        nickname:[{
                required: true, 
                message: '请输入昵称', 
                trigger: 'blur'
        }],
        captcha:[{
                required: true, 
                message: '请输入验证码', 
                trigger: 'blur' 
        }]
      }
    };
    //验证两次密码
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.form.password) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
  },
  methods:{
    //发送验证码
    headleSendCode(){
      if(!this.form.username){
          this.$confirm('手机号不能为空','提示',{
            confirmButtonText: '确定',
            showCancelButton: false,
            type: 'warning'
          })
          return;
      }
      if(!(/^1[3456789]\d{9}$/.test(this.form.username))){
        this.$confirm("手机号格式错误",'提示',{
            confirmButtonText: '确定',
            showCancelButton: false,
            type: 'warning'
        })
      }
      this.$axios({
        url:"/captchas",
        method:"POST",
        data:{
          tel:this.form.username
        }
      }).then(res=>{
        // console.log(res);
        const {code} = res.data;
        this.$confirm(`模拟手机验证码：${code}`,"提示",{
            confirmButtonText: '确定',
            showCancelButton: false,
            type: 'warning'
        })

      })
    },
    //注册
  headleRegSubmit(){
    this.$refs.form.validate((valid)=>{
      if(valid){
        //这个解构，是把form中的密码确认拿出来。只把4个值传递过去
        const {checkPassword, ...props} = this.form
        // this.$axios({
        //   url:"/accounts/register",
        //   method:"POST",
        //   data:props
        // }).then(res=>{
        //   console.log(res);
        // })
        this.$store.dispatch("user/register",props)
        .then(res=>{
          this.$message.success("注册成功，正在登录...");
          setTimeout(()=>{
              this.$router.push('/')
          },1000)
        })
      }
    })
  }
  }
} 
</script>

<style scoped lang="less">
  .el-form{
    background-color: #fff;
    .form-item{
      padding:0px 25px;
      &:nth-child(1){
        padding-top: 20px 
      }
    }
    .register_btn{
      width: 100%;

    }
  }
</style>
