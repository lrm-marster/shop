<!--
 * @Author: your name
 * @Date: 2021-02-22 09:13:50
 * @LastEditTime: 2021-02-22 20:14:03
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \shop-master\src\components\Login.vue
-->
<template>
    <div class="login_container">
        <div class="login_box">
            <!-- 头像区域 -->
            <div class="avatar_box">
                <img src="../assets/logo.png" alt="">
            </div>

            <!-- 登录区域 -->
            <el-form  label-width="0px" class="login_form" :model="loginform" :rules="rules" ref="loginform" status-icon>
                <el-form-item prop="username">
                    <el-input prefix-icon="iconfont icon-yonghu" v-model="loginform.username"></el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input prefix-icon="iconfont icon-mima" v-model="loginform.password" show-password></el-input>
                </el-form-item>
                <el-form-item class="btns">
                    <el-button type="primary" @click="submitForm('loginform')">确认</el-button>
                    <el-button type="info" @click="resetForm('loginform')">重置</el-button>
                </el-form-item>
            </el-form>


        </div>
    </div>
</template>

<script>
export default {
  data(){
    return {
      // 这是一个表单绑定数据a
      loginform: {
        username:'',
        password:''
      },
      rules:{
        username:[
          { required: true, message: '用户名不能为空', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        password:[
          { required: true, message: '密码不能为空', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ]
      }


    }
  },
  methods:{
    submitForm(formname){
      this.$refs[formname].validate((valid) => {
        if (valid) {
          this.$http.get(
            'login?name',
            {
              params:{
                name: this.loginform.username,
                password: this.loginform.password
              }
            }
          ).then( res => {
              console.log(res.data);
              this.$message({
                type:'success',
                message:'登录成功'
              });
            }
          ).catch( error => {
            console.log(error );
            this.$message.error('粗无');
            window.localStorage.setItem('token','123456');
            this.$router.push('/home');
          });



        } else {
          // alert('验证不成功!');
          return false;
        }
      });
    },
    resetForm(formname1){
      this.$refs[formname1].resetFields();
    }
  }
}
</script>

<style lang="less" scoped >
.login_container{
    background-color:#2b4b6b ;
    height: 100%;
    // width: 100%;
}
.login_box{
    background-color: #fff;
    width: 450px;
    height: 300px;
    border-radius:3px;
    // margin: 0 auto; /*水平居中*/
    position: relative;
    top: 50%; /*偏移*/
    left: 50%; /*偏移*/
    transform: translate(-50%,-50%);
    .avatar_box {
        height: 130px;
        width: 130px;
        border: 1px solid #eee;
        border-radius: 50%;
        box-shadow: 0 0 10px #ddd;
        position: absolute;
        left: 50%;
        transform: translate(-50%,-50%);
        background-color: #fff;
        padding: 10px 10px;
        img{
            width: 100%;
            height: 100%;
            border-radius: 50%;
            background-color: #eee;
        }
    }

    .btns{
        display: flex;
        justify-content: flex-end;
    }

    .login_form{
        position: absolute;
        bottom: 0;
        width: 100%;
        padding: 0 20px;
        box-sizing: border-box;
    }
}
</style>
