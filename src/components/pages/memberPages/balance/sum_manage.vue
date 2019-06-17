<template>
  <div id="sum_manage">
    <!-- 预付余额账户管理 -->
    <div class="main">
      <div class="main_top">
        <el-row class="df-box">
          <el-col :span="12" class="sum_left">
            <div class="grid-content bg-purple">
              <h3>预付余额</h3>
              <p>￥0.00</p>
              <el-button type="warning">激活</el-button>
            </div>
          </el-col>
          <el-col :span="12" class="sum_right">
            <div class="grid-content bg-purple-light">
              <ul>
                <li>
                  <span>账户状态：</span>
                  <i>启用</i>
                </li>
                <li>
                  <span>充值提醒：</span>
                  <i>
                    <i class="el-icon-bell"></i> 设置充值提醒
                  </i>
                </li>
                <li>
                  <span>余额转出账户：</span>
                  <i>
                    请完整转出账户信息
                    <i class="el-icon-edit"></i>
                  </i>
                </li>
                <li>
                  <span>补款单自付款：</span>
                  <i>
                    <input type="text">
                    <i class="el-icon-question"></i>
                    <i class="el-icon-edit"></i>
                  </i>
                </li>
                <li>
                  <span></span>
                  <i>
                    <a href="#">修改支付密码</a>
                    <a href="#">修改余额转出手机</a>
                  </i>
                </li>
              </ul>
            </div>
          </el-col>
        </el-row>
      </div>
      <div class="main_line">
        <div></div>
      </div>
      <div class="main_title">
        <h3>交易记录</h3>
      </div>
      <div class="main_form">
        <div class="list">
          <span>类型：</span>
          <el-select v-model="value" placeholder="请选择">
            <el-option></el-option>
          </el-select>
        </div>
        <div class="time">
          <span>时间：</span>
          <el-date-picker
            type="daterange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
          ></el-date-picker>
        </div>

        <!-- 表格 -->
        <el-table class="table" border highlight-current-row style="width: 100%">
          <el-table-column property="time" label="交易时间" width="250"></el-table-column>
          <el-table-column property="type" label="类型" width="160"></el-table-column>
          <el-table-column property="sum" label="金额" width="160"></el-table-column>
          <el-table-column property="balance" label="账户余额" width="220"></el-table-column>
          <el-table-column property="remarks" label="备注"></el-table-column>
        </el-table>
        <!-- 分页 -->
        <el-pagination
          class="pages"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage1"
          :page-sizes="[100, 200, 300, 400]"
          :page-size="100"
          layout="total, sizes, prev, pager, next, jumper"
          :total="400"
        ></el-pagination>
      </div>
    </div>

    <!-- 注册成功时选择账户类型弹框 -->
    <el-dialog
      :modal="true"
      :show-close="false"
      :close-on-press-escape="false"
      :close-on-click-modal="false"
      class="account_box"
      title="选择账户类型"
      :visible.sync="individualAccountVisible"
      width="40%"
      :before-close="handleClose"
    >
      <div class="content">
        <p>为了落实公司的财务规范，响应个人客户与企业客户的不同需求，商城账户类型必须区分企业和个人。</p>
        <span>注：请慎重考虑，选择后不可更改。</span>
        <div class="account">
          <a href="javascript:;" :class="personalShow?'active':''" @click="typeChange1">个人账户</a>
          <a href="javascript:;" :class="enterpriseShow?'active':''" @click="typeChange2">企业账户</a>
        </div>

        <!-- 个人 -->
        <div class="personal" v-show="personalShow">
          <h4>完善个人资料</h4>
          <p>个人购买行为，请选择个人账户类型：</p>
          <p>预付余额转出银行开户名等，都必须与会员账户“姓名”，保存一致。</p>

          <el-form label-width="80px" :model="ruleForm1" :rules="rules1" ref="ruleForm1">
            <el-form-item label=" 姓名：" prop="name">
              <el-input size="small" v-model="ruleForm1.name"></el-input>
              <span class="hint"></span>
              <span class="hint">
                <i class="el-icon-warning"></i>
                <span>请填写真实姓名，不可修改！</span>
              </span>
            </el-form-item>
            <el-form-item label=" 手机：">
              <i>{{this.$store.state.loginPhone.substr(0,3) +'****' +this.$store.state.loginPhone.substr(7,9)}}</i>
            </el-form-item>
            <el-form-item>
              <el-checkbox v-model="ruleForm1.checked">
                我已阅读并理解账户类型说明
                <a class="explain" href="javascript:;">查看详情说明</a>
              </el-checkbox>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitPersonageForm('ruleForm1')">确认并提交</el-button>
            </el-form-item>
          </el-form>
        </div>

        <!-- 企业 -->
        <div class="enterprise" v-show="enterpriseShow">
          <h4>完善企业资料</h4>
          <p>企业购买行为，请选择企业账户类型：</p>
          <p>增值税发票抬头，预付余额转出银行卡开户名等，都会跟会员账户 “企业名称” ，保存一致。</p>

          <el-form label-width="130px" :model="ruleForm2" :rules="rules2" ref="ruleForm2">
            <el-form-item label="企业名称：" prop="companyName">
              <el-input size="small" v-model="ruleForm2.companyName"></el-input>
              <span class="hint">
                <i class="el-icon-warning"></i>
                <span>请填写工商局注册的全称，不可更改！</span>
              </span>
            </el-form-item>
            <el-form-item label="纳税人识别号：" prop="taxpayerIdentifier">
              <el-input size="small" v-model="ruleForm2.taxpayerIdentifier"></el-input>
              <span class="hint">
                <i class="el-icon-warning"></i>
                <span>请填写正确的纳税人识别号！</span>
              </span>
            </el-form-item>
            <el-form-item label="联系人：" prop="liaisonMan">
              <el-input size="small" v-model="ruleForm2.liaisonMan"></el-input>
              <span class="hint">
                <i class="el-icon-warning"></i>
                <span>请填写联系人姓名！</span>
              </span>
            </el-form-item>
            <el-form-item label=" 手机：">
              <i>{{this.$store.state.loginPhone.substr(0,3) +'****' +this.$store.state.loginPhone.substr(7,9)}}</i>
            </el-form-item>
            <el-form-item>
              <el-checkbox v-model="ruleForm2.checked">
                已阅读并理解账户类型说明
                <a class="explain" href="javascript:;">查看详情说明</a>
              </el-checkbox>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitFirmForm('ruleForm2')">确认并提交</el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </el-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isCompany: 0,
      ruleForm1: {
        phone: "",
        name: "",
        checked: false
      },
      ruleForm2: {
        phone: "",
        companyName: "",
        liaisonMan: "",
        taxpayerIdentifier: "",
        checked: false
      },
      rules1: {
        name: [
          { required: true, message: "请输入姓名", trigger: "blur" },
          { min: 2, max: 5, message: "长度在 2 到 5 个字符", trigger: "blur" }
        ]
      },
      rules2: {
        companyName: [
          { required: true, message: "请输入公司名称", trigger: "blur" }
        ],
        liaisonMan: [
          { required: true, message: "请输入联系人姓名", trigger: "blur" },
          { min: 2, max: 5, message: "长度在 2 到 5 个字符", trigger: "blur" }
        ],
        taxpayerIdentifier: [
          { required: true, message: "请输入纳税人识别号", trigger: "blur" },
          {
            pattern: /^[A-Za-z0-9]+$/,
            message: "您输入的识别号不合法！"
          }
        ]
      },
      individualAccountVisible: true,
      personalShow: true,
      enterpriseShow: false
    };
  },
  created() {
    // if (this.$store.state.loginPhone != '') {
    //   this.individualAccountVisible = false;
    // }
    
  },

  methods: {
    // 个人账户
    typeChange1() {
      this.personalShow = true;
      this.enterpriseShow = false;
    },
    // 企业账户
    typeChange2() {
      this.personalShow = false;
      this.enterpriseShow = true;
    },

    submitPersonageForm(formName) {
      this.$refs[formName].validate(async valid => {
        if (valid) {
          if (this.ruleForm1.checked == true) {
            let data = {
              isCompany: 0,
              personName: this.ruleForm1.name,
              companyName: null,
              liaisonMan: null,
              taxpayerIdentifier: null
            };
            let res = await this.$http.post("/api/member/sso/saveData", data);
            this.$message({
              message: "个人账户信息提交成功！",
              type: "success"
            });
            this.individualAccountVisible = false;
            this.$store.state.personalDetails = data;
            this.$router.push("/shopping/index");
          } else {
            this.$message({
              message: "请阅读账户类型说明并勾选",
              type: "warning"
            });
          }
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },

    submitFirmForm(formName) {
      this.$refs[formName].validate(async valid => {
        if (valid) {
          if (this.ruleForm2.checked == true) {
            let data = {
              isCompany: 1,
              personName: null,
              companyName: this.ruleForm2.companyName,
              liaisonMan: this.ruleForm2.liaisonMan,
              taxpayerIdentifier: this.ruleForm2.taxpayerIdentifier
            };
            this.$store.state.enterpriseInformation = data;
            let res = await this.$http.post("/api/member/sso/saveData", data);
            this.$message({
              message: "企业账户信息提交成功！",
              type: "success"
            });
            this.individualAccountVisible = false;
            this.$router.push("/shopping/index");
          } else {
            this.$message({
              message: "请阅读账户类型说明并勾选",
              type: "warning"
            });
          }
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
  }
};
</script>
<style lang="less" scope>
#sum_manage {
  .main {
    border: 1px solid #e9e9e9;
    .main_top {
      padding: 0 10px;
      .df-box {
        display: flex;
        justify-content: space-between;
        .sum_left {
          h3 {
            color: #444;
            font-weight: bold;
            font-size: 18px;
            line-height: 60px;
          }
          p {
            font-size: 30px;
            line-height: 30px;
            font-weight: bold;
            color: #ff7800;
          }
          .el-button {
            padding: 10px 40px;
            margin-top: 40px;
          }
        }

        .sum_right {
          ul {
            padding: 40px;
            li {
              line-height: 34px;
              &:nth-of-type(2) {
                i {
                  color: #ff7800;
                }
                .el-icon-bell {
                  font-size: 20px;
                }
              }
              &:nth-of-type(3) {
                i {
                  color: #999;
                }
                .el-icon-edit {
                  font-size: 20px;
                  color: #ff7800;
                }
              }
              &:nth-of-type(4) {
                input {
                  width: 80px;
                  height: 20px;
                  line-height: 20px;
                }
                .el-icon-edit,
                .el-icon-question {
                  font-size: 20px;
                  color: #ff7800;
                  margin-left: 5px;
                }
              }
              &:nth-of-type(5) {
                a {
                  color: #0093e6;
                  margin-right: 20px;
                }
              }
              span {
                display: inline-block;
                width: 200px;
                text-align: right;
                color: #999;
              }
            }
          }
        }
      }
    }

    .main_line {
      padding: 0 20px;
      div {
        width: 100%;
        height: 5px;
        border-top: 1px solid #e9e9e9;
        border-bottom: 1px solid #e9e9e9;
      }
    }
    .main_title {
      font-size: 16px;
      line-height: 30px;
      font-weight: bold;
      color: #444;
      padding: 10px 20px;
    }

    .main_form {
      padding: 20px;
      .list {
        display: inline-block;
        .el-input {
          width: 180px;
          .el-input__inner {
            width: 100%;
            height: 30px;
            line-height: 30px;
          }
          .el-input__icon {
            height: 30px;
            line-height: 30px;
          }
        }
      }

      .time {
        display: inline-block;
        margin-left: 50px;
        .el-input__inner {
          width: 380px;
          height: 30px;
          line-height: 30px;
          .el-input__icon {
            height: 30px;
            line-height: 30px;
          }
          .el-range-separator {
            height: 30px;
            line-height: 30px;
          }
        }
      }

      .table {
        margin-top: 20px;
        border: 1px solid #eee;
        .is-leaf {
          text-align: center;

          .cell {
            font-weight: bold;
            color: #444;
          }
        }
      }
      .pages {
        margin-top: 20px;
        text-align: right;
      }
    }
  }

  .account_box {
    & > .el-dialog {
      border: 4px solid #dedede;
      .el-dialog__header {
        padding: 10px;
        border-bottom: 1px solid #dedede;
        .el-dialog__title {
          font-weight: bold;
          font-size: 14px;
        }
      }
      .el-dialog__body {
        padding-top: 10px;
        .content {
          & > p {
            line-height: 20px;
          }
          & > span {
            color: #ff0000;
            font-size: 12px;
          }
          .account {
            a {
              display: inline-block;
              padding: 10px 30px;
              border: 2px solid #eee;
              margin: 20px 10px;
            }
            .active {
              border: 2px solid #0093e6;
            }
          }

          .personal,
          .enterprise {
            h4 {
              font-weight: bold;
              line-height: 40px;
            }
            & > p {
              line-height: 40px;
            }
            .el-form {
              padding: 0 60px;
              .el-form-item {
                margin-bottom: 14px;
                .el-form-item__content {
                  .hint {
                    color: #bbb;
                  }
                }

                .el-input {
                  width: 200px;
                  margin-right: 10px;
                }
                .explain {
                  color: #0093e6;
                  text-decoration: underline;
                }
              }
            }
          }
        }
      }
    }

    // 个人账户弹框
    .personal {
    }
  }
}
</style>