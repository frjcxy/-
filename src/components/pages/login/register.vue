<template>
  <div id="register">
    <!-- 用户注册界面 -->
    <div class="from-menu">
      <div class="title">
        <h2>
          用户注册
          <i class="el-icon-edit"></i>
        </h2>
        <router-link to="/login">
          已有账号？
          <i>请登录>>></i>
        </router-link>
      </div>
      <!-- 注册表单 -->
      <el-form
        class="registerForm"
        :model="ruleForm"
        :rules="rules"
        label-width="80px"
        ref="ruleForm"
      >
        <el-form-item label="填写您的手机号码：" prop="phone">
          <el-input v-model="ruleForm.phone" placeholder="填写11位长度手机号" @keyup.enter.native="next('ruleForm')"></el-input>
        </el-form-item>
        <el-form-item label="输入图片校验码：" prop="checkCode">
          <el-input v-model="ruleForm.checkCode" placeholder="填写图片校验码" @keyup.enter.native="next('ruleForm')"></el-input>
          <div class="img-code">
            <span class="code-style" @click="createCode">{{verificationCode}}</span>
          </div>
        </el-form-item>

        <el-form-item label="输入手机验证码：" prop="phoneCode">
          <el-input v-model="ruleForm.phoneCode" placeholder="填写手机收到的验证码" @keyup.enter.native="next('ruleForm')"></el-input>
          <el-button type="warning" plain class="code-btn" @click="transmitCode">发送验证码</el-button>
        </el-form-item>
        <el-form-item label="填写您的QQ（选填）：">
          <el-input v-model="ruleForm.QQ" placeholder="填写您的QQ" @keyup.enter.native="next('ruleForm')"></el-input>
        </el-form-item>
        <el-form-item label>
          <el-checkbox
            v-model="ruleForm.checked"
            @change="handleSelectionChange"
            label="我已看过并同意"
            name="type"
          ></el-checkbox>
          <a href="#" class="clause">《服务条款》</a>
        </el-form-item>
        <el-form-item label>
          <el-button type="warning" class="next" @click="next('ruleForm'),confirmTheCode()">下一步</el-button>
        </el-form-item>
      </el-form>
      <!-- 注册说明 -->
      <div class="explain">
        <div class="explain-left">
          <ul>
            <li>1、系统将发送校验码到您填写的这个手机号码</li>
            <li>2、港澳台及海外客户请直接联系我司工作人员注册</li>
            <li>3、注册成功帐号，您的这个手机号码将可作为手机帐号登录</li>
          </ul>
        </div>
        <div class="explain-right">
          <img src alt="放置二维码">
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { log } from "util";
export default {
  props: {},
  name: "app",
  components: {},
  data() {
    return {
      verificationCode: "", //生成的验证码
      // 表单验证的数据
      ruleForm: {
        checkCode: "",
        phone: "",
        QQ: "",
        phoneCode: "",
        // 是否勾选服务条款
        checked: false
      },

      // 表单验证的规则
      rules: {
        phone: [
          { required: true, message: "请输入11位数手机号", trigger: "blur" },
          { min: 11, max: 11, message: "长度在11个字符", trigger: "blur" }
        ],
        checkCode: [
          { required: true, message: "请输入图片中的校验码", trigger: "blur" },
          { min: 4, max: 4, message: "长度在4个字符", trigger: "blur" }
        ],
        phoneCode: [
          { required: true, message: "请输入手机验证码", trigger: "blur" },
          { min: 6, max: 6, message: "长度在6个字符", trigger: "blur" }
        ]
      }
    };
  },

  created() {
    // this.transmitCode();
  },

  methods: {
    // 图片验证码
    createCode: function() {
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
    confirmTheCode: function() {
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
      }
    },

    //  发送验证码
    async transmitCode() {
      if (!this.ruleForm.phone) {
        this.$message({
          message: "请输入手机号码！",
          type: "warning"
        });
      } else if (this.ruleForm.checkCode) {
        let phone = this.ruleForm.phone;
        let res = await this.$http.get(
          `/api/member/sso/getAuthCode?telephone=${phone}`
        );
      } else {
        this.$message({
          message: "请输入图片验证！",
          type: "warning"
        });
      }
    },

    // 勾选服务条款
    handleSelectionChange(value) {
      this.ruleForm.checked = value;
    },

    // 下一步
    next(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$store.state.loginPhone = this.ruleForm.phone;
          this.$store.state.loginCode = this.ruleForm.phoneCode;
          this.$store.state.QQ = this.ruleForm.QQ;
          if (this.ruleForm.checked) {
            this.$router.push("/pwd");
          } else {
            this.$message({
              message: "请勾选服务条款！",
              type: "warning"
            });
          }
        } else {
          return false;
        }
      });
    }
  },

  mounted() {
    this.createCode();
  }
};
</script>
<style lang="less" scope>
#register {
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
      display: flex;
      justify-content: space-between;
      h2 {
        padding-left: 30px;
        font-size: 22px;
        color: #6f6f6f;
      }
      a {
        padding-right: 30px;
        font-size: 14px;
        color: #6f6f6f;
        font-weight: bold;
        i {
          color: #f00;
        }
      }
    }
    // 表单
    .registerForm {
      padding: 30px 100px 0px;
      border-bottom: 1px solid#ccc;
      .el-form-item__label {
        font-size: 16px;
        width: 200px !important;
      }
      .el-form-item__content {
        width: 340px;
        margin-left: 200px !important;
        position: relative;
        .el-input__inner {
          border: 1px solid #d7d7d7;
        }
        // 图片验证

        .img-code {
          display: flex;
          justify-content: center;
          align-items: center;
          position: absolute;
          right: -116px;
          top: 5px;
        }

        .code-style {
          display: inline-block;
          text-align: center;
          width: 80px;
          height: 30px;
          line-height: 30px;
          background-color: #0677fe;
          font-size: 16px;
          color: #fff;
          font-weight: bold;
          cursor: pointer;
          margin-right: 4px;
        }

        // 手机验证码
        .code-btn {
          position: absolute;
          right: -144px;
          bottom: 0px;
        }

        .el-checkbox {
          margin-right: 0;
        }

        .el-button.next {
          font-size: 22px;
          background-color: #fc6e06;
          padding: 10px 80px;
        }
      }
      .clause {
        color: #409eff;
      }
    }

    // 注册说明
    .explain {
      padding: 0 80px;
      margin-top: 2px;
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      .explain-left {
        font-size: 14px;
        color: #666;
        line-height: 30px;
        flex: 1;
      }

      .explain-right {
        width: 258px;
        height: 110px;
        background-color: #ccc;
        img {
          display: block;
          width: 100px;
          height: 100%;
        }
      }
    }
  }
}
</style>