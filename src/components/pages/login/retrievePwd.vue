<template>
  <div id="retrievepwd">
    <!-- 找回密码 -->

    <div class="from-menu">
      <div class="title">
        <h2>
          找回密码
          <i class="el-icon-lock"></i>
        </h2>
      </div>
      <div class="content">
        <div class="steps">
          <div class="first checked">
            <i>1</i>
            <span>选择找回方式</span>
          </div>
          <div class="second" :style="{backgroundColor:secondBgc,color:color}">
            <i>2</i>
            <span>验证用户身份</span>
          </div>
          <div class="third" :style="thirdBgc">
            <i>3</i>
            <span>设置密码</span>
          </div>
        </div>
        <!-- 找回方式 -->
        <div class="way" v-show="wayShow">
          <div class="phone">
            <a href="javascript:;" @click="isPhoneShow">
              <i class="el-icon-mobile-phone"></i>
              <span>手机找回</span>
            </a>
            <p>使用手机找回客编及密码</p>
          </div>
          <div class="email">
            <a href="javascript:;" @click="isEmailShow">
              <i class="el-icon-message"></i>
              <span>邮箱找回</span>
            </a>
            <p>使用邮箱找回客编及密码</p>
          </div>
        </div>
        <!-- 验证用户身份 -->
        <div class="identity" v-if="identityShow">
          <el-form
            class="pwdForm phone-way"
            v-show="phoneShow"
            :model="ruleForm1"
            :rules="rules1"
            label-width="80px"
            ref="ruleForm1"
          >
            <el-form-item label="填写您的手机号码：" prop="phone">
              <el-input v-model="ruleForm1.phone" placeholder="填写11位长度手机号"></el-input>
            </el-form-item>
            <el-form-item label="输入图片校验码：" prop="checkCode">
              <el-input v-model="ruleForm1.checkCode" placeholder="填写图片校验码"></el-input>
              <div class="img-code">
                <span class="code-style" @click="createCode">{{verificationCode}}</span>
              </div>
            </el-form-item>
            <el-form-item label="输入手机验证码：" prop="code">
              <el-input v-model="ruleForm1.code" placeholder="填写手机收到的验证码"></el-input>
              <el-button type="warning" plain class="code-btn" @click="transmitCode">发送验证码</el-button>
            </el-form-item>
            <el-form-item>
              <el-button type="warning" class="next" @click="setPwd('ruleForm1')">下一步</el-button>
              <a href="javascript:;" @click="isPhonehide">使用邮箱找回密码</a>
            </el-form-item>
          </el-form>
          <el-form
            class="pwdForm email-way"
            v-show="emailShow"
            :model="ruleForm2"
            :rules="rules2"
            label-width="80px"
            ref="ruleForm2"
          >
            <el-form-item label="填写您的邮箱：" prop="email">
              <el-input v-model="ruleForm2.email" placeholder="请填写邮箱号"></el-input>
            </el-form-item>
            <el-form-item label="输入图片校验码：" prop="checkCode">
              <el-input v-model="ruleForm2.checkCode" placeholder="填写图片校验码"></el-input>
              <div class="img-code">
                <span class="code-style" @click="createCode">{{verificationCode}}</span>
              </div>
            </el-form-item>
            <el-form-item label="输入邮箱验证码：" prop="code">
              <el-input v-model="ruleForm2.code" placeholder="填写邮箱收到的验证码"></el-input>
              <el-button type="warning" plain class="code-btn" @click="transmitCode">发送验证码</el-button>
            </el-form-item>
            <el-form-item label>
              <el-button type="warning" class="next" @click="confirmTheCode()">下一步</el-button>
              <a href="javascript:;" @click="isEmailhide">使用手机找回密码</a>
            </el-form-item>
          </el-form>
        </div>

        <!-- 设置密码 -->
        <div class="set-pwd" v-if="setPwdIsShow=false">
          <el-form :model="ruleForm1" :rules="rules1" label-width="80px" ref="ruleForm1">
            <el-form-item label="密码:" prop="pass">
              <el-input
                type="password"
                v-model="ruleForm1.pass"
                autocomplete="off"
                placeholder="字母与数字组合至少6位"
              ></el-input>
            </el-form-item>
            <el-form-item label="确认密码:" prop="checkPass">
              <el-input
                type="password"
                v-model="ruleForm1.checkPass"
                autocomplete="off"
                placeholder="字母与数字组合至少6位"
              ></el-input>
            </el-form-item>
            <el-form-item label>
              <el-button type="warning" class="next">完&nbsp;&nbsp;&nbsp;&nbsp;成</el-button>
            </el-form-item>
          </el-form>
        </div>
        <div class="set"></div>
      </div>
      <div class="footer">
        <span class="notice">
          <i class="el-icon-warning"></i>
          如以上方式都不可行的情况下，请选择以下方式
        </span>
        <div class="follows">
          1、加我司的企业QQ。PCB/钢网业务：
          <font color="#1196db">
            <b>800005884</b>
          </font>，元器件业务：
          <font color="#1196db">
            <b>4000800709</b>
          </font>
          <br>2、提供相关的查询资料 如：贵方的公司名，联系地址，联系信息
          <br>3、我司工作人员核实了相关信息，如果系统上存在信息，则我司会与系统上记录人进行联系。
          <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如果联系后，对方同意，则把你的客户编号及初始化后的密码发到您的手机上，如果对方不同意，则只有重新注册。
          <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如果无法核实到或者联系不到注册的联系人，则只有重新注册客户资料
          <br>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      //  进度条
      active: 0,
      // 找回方式
      wayShow: "true",
      // 验证身份
      identityShow: false,
      // 手机找回
      phoneShow: "false",
      // 邮箱找回
      emailShow: "false",
      // 设置密码
      setPwdIsShow: "false",

      secondBgc: "",
      color: "",
      thirdBgc: "",
      verificationCode: "", //图片验证码
      // 表单验证的数据
      ruleForm1: {
        checkCode: "",
        phone: "",
        code: ""
      },
      ruleForm2: {
        checkCode: "",
        email: "",
        code: ""
      },
      // 手机验证码
      phoneCode: "",
      // 表单验证的规则
      rules1: {
        phone: [
          { required: true, message: "请输入11位数手机号", trigger: "blur" },
          { min: 11, max: 11, message: "长度在11个字符", trigger: "blur" }
        ],
        checkCode: [
          { required: true, message: "请输入图片中的校验码", trigger: "blur" },
          { min: 4, max: 4, message: "长度在4个字符", trigger: "blur" }
        ],
        code: [
          { required: true, message: "请输入手机验证码", trigger: "blur" },
          { min: 6, max: 6, message: "长度在6个字符", trigger: "blur" }
        ]
      },
      rules2: {
        email: [
          { required: true, message: "请输入邮箱", trigger: "blur" },
        ],
        checkCode: [
          { required: true, message: "请输入图片中的校验码", trigger: "blur" },
          { min: 4, max: 4, message: "长度在4个字符", trigger: "blur" }
        ],
        code: [
          { required: true, message: "请输入手机验证码", trigger: "blur" },
          { min: 6, max: 6, message: "长度在6个字符", trigger: "blur" }
        ]
      },
    };
  },
  methods: {
    isPhoneShow() {
      this.identityShow = true;
      this.phoneShow = true;
      this.emailShow = false;
      this.setPwdIsShow = false;
      this.wayShow = false;
      this.color = "#fff";
      this.secondBgc = "#018dda";
    },

    isPhonehide() {
      this.phoneShow = false;
      this.emailShow = true;
    },
    isEmailhide() {
      this.phoneShow = true;
      this.emailShow = false;
    },

    isEmailShow() {
      this.phoneShow = false;
      this.emailShow = true;
      this.setPwdIsShow = false;
      this.wayShow = false;
      this.identityShow = true;
      this.color = "#fff";
      this.secondBgc = "#018dda";
    },

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
      var customerCode = this.ruleForm1.checkCode.toUpperCase(); //把你输入的小写转化为大写
      if (customerCode == 0) {
        this.createCode();
        this.ruleForm1.checkCode = "";
        alert("请输入验证码");
      } else if (customerCode != this.verificationCode) {
        this.createCode();
        this.ruleForm1.checkCode = "";
        alert("验证码不正确，请重新输入");
      } else {
        alert("输入正确");
      }
    },
    async getduanxin(){
       let phone = this.ruleForm1.phone;
          let res = await this.$http.get(
            `/api/member/sso/getAuthCode?telephone=${phone}`
          );
          this.phoneCode = res.data;
          console.log("发送了")
    },
    //  发送验证码
    async transmitCode() {
      if (this.ruleForm1.phone) {
        if (this.ruleForm1.checkCode) {
          // let phone = this.ruleForm1.phone;
          // let res = await this.$http.get(
          //   `/api/member/sso/getAuthCode?telephone=${phone}`
          // );
          // this.phoneCode = res.data;
        } else {
          this.$message({
            message: "请输入图片验证码！",
            type: "warning"
          });
        }
      } else {
        this.$message({
          message: "请输入您手机号码！",
          type: "warning"
        });
      }
    },

    setPwd(ruleForm) {
      this.$refs[ruleForm].validate(valid => {
        if (valid) {
          // 数据正确
          console.log( this.ruleForm1)
          console.log(valid);
          this.getduanxin()
          

        alert('成功')
        } else {
          // 数据错误
          // this.$message.error("请正确输入用户名和密码");
          alert('失败')
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
#retrievepwd {
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
    }
    .content {
      margin-top: 10px;
      padding: 20px 30px 0;
      // 进度条
      .steps {
        width: 100%;
        height: 40px;
        background-color: #ccc;
        font-size: 16px;
        display: flex;
        text-align: center;
        .checked {
          background-color: #018dda;
          color: #fff;
        }
        i {
          font-size: 28px;
          line-height: 32px;
        }
        .first {
          width: 33.33%;
          height: 100%;
        }
        .second {
          width: 33.33%;
          height: 100%;
        }
        .third {
          width: 33.33%;
          height: 100%;
        }
      }

      // 找回方式
      .way {
        margin: 80px 0;
        display: flex;
        justify-content: space-around;
        a {
          display: block;
          width: 200px;
          height: 60px;
          background-color: #e3e5e7;
          border-radius: 4px;
          box-shadow: 2px 4px 6px #ccc;
          background: -webkit-linear-gradient(#eee, #ccc);
          font-size: 14px;
          font-weight: bold;
          text-align: center;
          line-height: 60px;
          i {
            font-size: 26px;
            color: #018dda;
            line-height: 26px;
            vertical-align: middle;
            margin-right: 10px;
          }
        }
        .phone,
        .email {
          text-align: center;
          p {
            margin-top: 10px;
            font-size: 8px;
          }
        }
      }

      // 验证身份
      .pwdForm {
        padding: 20px 60px 0;
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
            padding: 10px 70px;
          }
          a {
            color: #0677fe;
            font-size: 14px;
            margin-left: 10px;
          }
        }
        .clause {
          color: #409eff;
        }
      }
    }

    .footer {
      padding: 0 30px;
      .notice {
        color: #f00;
        font-size: 10px;
        line-height: 40px;
        display: block;
        width: 100%;
        border-bottom: 1px dashed #999;
        i {
          font-size: 20px;
          line-height: 20px;
          vertical-align: middle;
        }
      }
      .follows {
        margin-top: 10px;
        padding: 0 20px;
        line-height: 24px;
      }
    }
  }
}
</style>