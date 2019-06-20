<template>
  <div id="login">
    <img src="../../../assets/login_left.png" alt>
    <!-- 用户注册界面 -->
    <el-tabs type="border-card">
      <!-- 用户登录 -->
      <el-tab-pane>
        <span slot="label">
          <i class="el-icon-s-custom"></i> 用户登录
        </span>
        <el-form
          :model="ruleForm1"
          status-icon
          ref="ruleForm1"
          label-width="100px"
          class="demo-ruleForm"
          label-position="top"
          :rules="rules1"
        >
          <el-form-item prop="username" class="new_login" style="margin-top:30px;">
            <span class="new_login_img">
              <i class="el-icon-s-custom icon"></i>
            </span>
            <el-input
              @keyup.enter.native="loginBtn('ruleForm1')"
              v-model.trim="ruleForm1.username"
              placeholder="客户编号/手机号码/邮箱"
            ></el-input>
          </el-form-item>
          <el-form-item prop="password" class="new_login" style="margin-top:30px;">
            <span class="new_login_img">
              <i class="el-icon-lock icon"></i>
            </span>
            <el-input
              type="password"
              v-model.trim="ruleForm1.password"
              autocomplete="off"
              placeholder="请输入密码"
              @keyup.enter.native="loginBtn('ruleForm1')"
            ></el-input>
          </el-form-item>

          <!-- <el-form-item prop="selfLogin">
            <el-checkbox class="check-login" checked style="margin: 0;">自动登录</el-checkbox>
          </el-form-item>-->
          <el-form-item>
            <el-button
              type="warning"
              @click="loginBtn('ruleForm1')"
              class="login-btn"
            >登&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;录</el-button>
          </el-form-item>
        </el-form>
      </el-tab-pane>
      <!-- 动态密码登录 -->
      <el-tab-pane>
        <span slot="label">动态密码登录</span>
        <el-form
          :model="ruleForm2"
          status-icon
          ref="ruleForm2"
          label-width="100px"
          class="demo-ruleForm"
          label-position="top"
          :rules="rules2"
        >
          <el-form-item prop="phone" class="new_login" style="margin-top:30px;">
            <span class="new_login_img">
              <i class="el-icon-mobile icon"></i>
            </span>
            <el-input
              v-model.trim="ruleForm2.phone"
              placeholder="请输入手机号"
              @keyup.enter.native="getVerificationCode"
            ></el-input>
            <el-button
              type="warning"
              class="code-btn"
              size="small"
              plain
              @click="getVerificationCode"
            >发送验证码</el-button>
          </el-form-item>
          <el-form-item prop="checkCode" class="new_login" style="margin-top:30px;">
            <span class="new_login_img">
              <i class="el-icon-s-ticket icon"></i>
            </span>
            <el-input
              placeholder="请输入图片验证码"
              v-model.trim="ruleForm2.checkCode"
              @keyup.enter.native="getVerificationCode"
            ></el-input>
            <!-- 图片验证码-->
            <span class="code-style" @click="createCode">{{verificationCode}}</span>
          </el-form-item>
          <el-form-item prop="phoneCode" class="new_login" style="margin-top:30px;">
            <span class="new_login_img">
              <i class="el-icon-more-outline icon"></i>
            </span>
            <el-input
              v-model.trim="ruleForm2.phoneCode"
              placeholder="请输入手机验证码"
              @keyup.enter.native="getVerificationCode"
            ></el-input>
          </el-form-item>
          <!-- <el-form-item>
            <el-checkbox class="check-login" checked style="margin: 0;">自动登录</el-checkbox>
          </el-form-item>-->
          <el-form-item>
            <el-button
              type="warning"
              @click="phoneLogin('ruleForm2'),confirmTheCode()"
              class="login-btn"
            >登&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;录</el-button>
          </el-form-item>
        </el-form>
      </el-tab-pane>
      <div class="get_back">
        <span class="wechat">
          <a href="#">
            <i class="el-icon-s-comment"></i>微信
          </a>
        </span>
        <span class="register">
          <router-link to="/retrievePwd">找回密码</router-link>
          <router-link to="/register">免费注册</router-link>
        </span>
      </div>
    </el-tabs>
  </div>
</template>
<script>
// js-Cookies
import Cookies from "js-cookie";
import logi from "../../../api/login";
export default {
  data() {
    // 验证手机号
    var checkPhone = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("手机号码不可为空"));
      } else {
        if (value !== "") {
          var reg = /^1[3456789]\d{9}$/;
          if (!reg.test(value)) {
            callback(new Error("请输入有效的手机号码"));
          }
        }
        callback();
      }
    };
    return {
      // 当前登录时间
      nowLoginTime: "",
      verificationCode: "", //生成的验证码
      ruleForm1: {
        username: "",
        password: "",
        selfLogin: ""
      },
      ruleForm2: {
        phone: "",
        selfLogin: "",
        checkCode: "",
        phoneCode: ""
      },
      // 表单的验证规则
      rules1: {
        username: [
          // required必须 message 提示信息 trigger 触发方式
          // min 最小 max 最大
          { required: true, message: "用户名不能为空", trigger: "blur" },
          {
            min: 4,
            max: 21,
            message: "长度在 4 到 21 个字符",
            trigger: "change"
          }
        ],
        password: [
          // required必须 message 提示信息 trigger 触发方式
          // min 最小 max 最大
          { required: true, message: "密码不能为空", trigger: "blur" },
          {
            min: 3,
            max: 18,
            message: "长度在 3 到 18 个字符",
            trigger: "change"
          }
        ]
      },
      rules2: {
        phone: [
          {
            validator: checkPhone,
            trigger: "blur"
          }
        ],
        checkCode: [
          { required: true, message: "验证码不能为空", trigger: "blur" }
        ],
        phoneCode: [
          { required: true, message: "请输入手机验证码", trigger: "blur" }
        ]
      }
    };
  },

  methods: {
    // 图片验证码
    createCode() {
      //通过随机数生成验证码
      this.verificationCode = "";
      var code = "";
      var codeLength = 4; //验证码长度
      var random = new Array(
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z"
      );
      for (var i = 0; i < codeLength; i++) {
        var index = Math.floor(Math.random() * 36);
        code += random[index];
      }
      this.verificationCode = code;
    },
    confirmTheCode() {
      //验证函数
      var customerCode = this.ruleForm.checkCode.toUpperCase(); //把你输入的小写转化为大写
      if (customerCode == 0) {
        this.createCode();
        this.ruleForm.checkCode = "";
        alert("请输入验证码");
      } else if (customerCode != this.verificationCode) {
        this.createCode();
        this.ruleForm.checkCode = "";
        alert("验证码不正确，请重新输入");
      } else {
        alert("输入正确");
      }
    },

    // 账号密码登入验证



    async loginBtn(ruleForm1) {
      this.$refs[ruleForm1].validate(valid => {
        if (valid) {
          // 数据正确
          this.$http.post( `/api/member/sso/login?username=${this.ruleForm1.username}&password=${this.ruleForm1.password}`,this.ruleForm1
            )
            .then(res => {
              if (res.code === 404) {
                // 错误 弹框 用户名或密码错误
                this.$message.error(res.message);
              } else {
                // 成功弹框
                this.$message.success(res.message);
                // 保存token
                window.sessionStorage.setItem("token", res.data.token);
                // 存cookie
                Cookies.set("username", this.ruleForm1.username);
                // 获取登录时间
                this.nowLoginTime = new Date();
                Cookies.set("loginTime", this.nowLoginTime);
                // 使用路由提供的方式进行跳转到上一页
                this.$router.go(-1);
              }
            });
        } else {
          // 数据错误 this.$http
          // this.$message.error("请正确输入用户名和密码");
          return false;
        }
      });
    },

    // 动态登录
    // 验证码
    async getVerificationCode() {
      if (this.ruleForm2.phone == "") {
        this.$message({
          message: "请输入手机号码！",
          type: "warning"
        });
      } else {
        if (this.ruleForm2.checkCode === this.verificationCode) {
          console.log(112);

          let res = await this.$http.get(
            `/api/member/sso/getAuthCode?telephone=${this.ruleForm2.phone}`
          );
          this.ruleForm2.phoneCode = res.data;
        } else {
          this.$message({
            message: "请先通过图片验证！",
            type: "warning"
          });
        }
      }
    }
  },
  mounted() {
    this.createCode();
  }
};
</script>
<style lang="less" scope>
#login {
  display: flex;
  justify-content: center;
  align-items: center;
  .el-tabs__nav {
    .is-active {
      background-color: #fff;
    }
  }
  // 表单主体
  .el-tabs {
    width: 370px;
    background-color: #fff;
    margin-top: 40px;
    float: right;
    .el-tabs__nav {
      width: 100%;
      background-color: #e6e6e6;
      .el-tabs__item {
        width: 50%;
        text-align: center;
        span {
          font-size: 18px;
          i {
            color: #ff6600;
            font-size: 24px;
            line-height: 24px;
          }
        }
      }
    }
    .el-tabs__content {
      padding: 10px 30px;
      //   用户登录输入框
      .new_login {
        display: flex;
        justify-content: center;
        align-items: center;
        .el-form-item {
          padding: 0;
        }
        .el-form-item__content {
          width: 100%;
          height: 40px;
          display: flex;

          .new_login_img {
            width: 38px;
          }
          .el-input {
            flex: 1;
            .el-input__inner {
              border-radius: 0;
            }
          }
        }

        .code-btn {
          padding: 0px 5px;
        }

        .icon {
          display: inline-block;
          width: 38px;
          height: 38px;
          background-color: #dcdfe6;
          font-size: 18px;
          color: #bebebe;
          text-align: center;
          line-height: 38px;
          border: 1px solid #ccc;
        }

        // 图片验证
        .code-style {
          display: inline-block;
          text-align: center;
          width: 80px;
          height: 40px;
          line-height: 40px;
          background-color: #0677fe;
          font-size: 16px;
          color: #fff;
          font-weight: bold;
          cursor: pointer;
          margin-left: 2px;
        }
      }
      // 自动登录
      .check-login {
        margin: 20px 0;
      }
      // 登录按钮
      .login-btn {
        width: 100%;
        font-size: 18px;
      }
      //找回密码
      .get_back {
        display: flex;
        justify-content: space-between;
        margin: 10px 0;
        span {
          font-size: 14px;
          line-height: 24px;
          &.wechat {
            a {
              i {
                color: #0f0;
                font-size: 24px;
                line-height: 24px;
                vertical-align: middle;
              }
            }
          }

          &.register {
            a {
              color: #409eff;
              margin-left: 20px;
            }
          }
        }
      }
    }
  }
}
</style>