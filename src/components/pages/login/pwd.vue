<template>
  <div id="pwd">
    <!-- 用户注册界面 -->

    <div class="from-menu">
      <div class="title">
        <h2>
          设置登录密码
          <i class="el-icon-setting"></i>
        </h2>
      </div>
      <!-- 设置密码 -->
      <el-form :model="ruleForm" :rules="rules" label-width="80px" ref="ruleForm">
        <el-form-item label="密码:" prop="pass">
          <el-input
            type="password"
            v-model="ruleForm.pass"
            autocomplete="off"
            placeholder="建议字母与数字组合至少6位"
          ></el-input>
        </el-form-item>
        <el-form-item label="确认密码:" prop="checkPass">
          <el-input
            type="password"
            v-model="ruleForm.checkPass"
            autocomplete="off"
            placeholder="建议字母与数字组合至少6位"
          ></el-input>
        </el-form-item>
        <el-form-item label>
          <el-button
            type="warning"
            @click="registeredSuccess('ruleForm')"
            class="next"
          >完&nbsp;&nbsp;&nbsp;&nbsp;成</el-button>
          <router-link to="/register" class="page_up">返回上一页</router-link>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
import Cookies from "js-cookie";
export default {
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };

    return {
      ruleForm: {
        pass: "",
        checkPass: ""
      },
      // 表单验证的规则
      rules: {
        pass: [
          { validator: validatePass, trigger: "blur" },
          { min: 6, max: 20, message: "长度在6-20个字符", trigger: "blur" }
        ],
        checkPass: [{ validator: validatePass2, trigger: "blur" }]
      }
    };
  },

  methods: {
    registeredSuccess(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          let loginPhone = this.$store.state.loginPhone;
          let loginCode = this.$store.state.loginCode;
          this.$http
            .post(
              `/api/member/sso/register?telephone=${loginPhone}&password=${
                this.ruleForm.pass
              }&authCode=${loginCode}`
            )
            .then(res => {
              if (res.message == "该用户已经存在") {
                this.$message.error("该用户已经存在,请重新注册！或去往登录页面找回密码！");
                this.$router.push('/register')
              } else if (res.code == 200) {
                this.$message({
                  message: "恭喜您，注册成功！",
                  type: "success"
                });
                this.$http
                  .post(
                    `/api/member/sso/login?username=${loginPhone}&password=${
                      this.ruleForm.pass
                    }`
                  )
                  .then(r => {
                    if (r.code === 404) {
                      // 错误 弹框 用户名或密码错误
                      this.$message.error(r.message);
                    } else {
                      // 成功弹框
                      this.$message.success(r.message);
                      // 保存token
                      window.sessionStorage.setItem("token", r.data.token);
                      // 存cookie
                      Cookies.set("username", this.$store.state.loginPhone);
                      // 使用路由提供的方式进行跳转到上一页
                      this.$router.push("/shopping/member/sum_manage");
                    }
                  });
              }
            });
        } else {
          this.$message({
            message: res.message,
            type: "warning"
          });
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>
<style lang="less" scope>
#pwd {
  
  // 表单主体
  .from-menu {
    width: 940px;
    height: 600px;
    border-radius: 10px;
    background-color: #fff;
    margin-top: 20px;
    .title {
      width: 100%;
      height: 78px;
      line-height: 78px;
      box-shadow: 0px 5px 0px #ccc;
      h2 {
        padding-left: 30px;
        font-size: 22px;
        color: #6f6f6f;
      }
    }

    .el-form {
      padding: 100px 140px;
    }
    .el-form-item {
      margin: 50px 0;
    }

    .el-button {
      font-size: 22px;
      background-color: #fc6e06;
      padding: 10px 60px;
    }
    .page_up {
      margin-left: 100px;
      &:hover {
        color: #0094e7;
      }
    }
  }
}
</style>