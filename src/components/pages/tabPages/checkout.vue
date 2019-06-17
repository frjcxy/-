<template>
  <div id="checkout" v-cloak>
    <!-- <div class="cart_head">
      <el-row>
        <el-col :span="12">
          <div class="grid-content bg-purple">
            <div class="logo">
              <router-link to="/shopping/index">
                <img src="../../../assets/logo02.png" alt>
              </router-link>
              <h3>收银台</h3>
            </div>
          </div>
        </el-col>
        <el-col :span="12">
          <div class="grid-content bg-purple-light">
            <el-steps align-center :space="200" :active="2" finish-status="success">
              <el-step title="查看购物车"></el-step>
              <el-step title="填写核对订单信息"></el-step>
              <el-step title="提交订单付款"></el-step>
            </el-steps>
          </div>
        </el-col>
      </el-row>
    </div> -->
    <div class="pay_wraper">
      <div class="pay_msg">
        <div class="pay_left">
          <h3>
            您的订单号 :
            <b>SO1906031323</b>
          </h3>
          <p class="pay_limit">立创商城已经为此订单预留库存，请尽快付款，超过时限订单将自动取消（具体时限请查看订单详情）</p>
        </div>
        <div class="pay_right">
          应付金额：
          <b>￥{{this.$store.state.totalAmount}}</b>
        </div>
      </div>
      <div class="pay_method">
        <el-tabs type="border-card">
          <el-tab-pane label="网银支付">
            <ul class="bank_list">
              <li data-value="ICBC">
                <img src="https://static.szlcsc.com/pay/resources/images/bank_img_18.jpg">
              </li>
              <li data-value="CMB">
                <img src="https://static.szlcsc.com/pay/resources/images/bank_img_11.jpg">
              </li>
              <li data-value="CCB">
                <img src="https://static.szlcsc.com/pay/resources/images/bank_img_13.jpg">
              </li>
              <li data-value="BOC">
                <img src="https://static.szlcsc.com/pay/resources/images/bank_img_15.jpg">
              </li>
              <li data-value="ABC">
                <img src="https://static.szlcsc.com/pay/resources/images/bank_img_27.jpg">
              </li>
              <li data-value="BCOM">
                <img src="https://static.szlcsc.com/pay/resources/images/bank_img_24.jpg">
              </li>
              <li data-value="SPDB">
                <img src="https://static.szlcsc.com/pay/resources/images/bank_img_25.jpg">
              </li>
              <li data-value="GDB">
                <img src="https://static.szlcsc.com/pay/resources/images/bank_img_28.jpg">
              </li>
              <li data-value="CITIC">
                <img src="https://static.szlcsc.com/pay/resources/images/bank_img_34.jpg">
              </li>
              <li data-value="CEB">
                <img src="https://static.szlcsc.com/pay/resources/images/bank_img_36.jpg">
              </li>
              <li data-value="CIB">
                <img src="https://static.szlcsc.com/pay/resources/images/bank_img_38.jpg">
              </li>
              <li data-value="CMBC">
                <img src="https://static.szlcsc.com/pay/resources/images/bank_img_49.jpg">
              </li>
              <li data-value="SHB">
                <img src="https://static.szlcsc.com/pay/resources/images/bank_img_47.jpg">
              </li>
              <li data-value="PAB">
                <img src="https://static.szlcsc.com/pay/resources/images/bank_img_61.jpg">
              </li>
              <li data-value="HXB">
                <img src="https://static.szlcsc.com/pay/resources/images/fk_yh_bs03.jpg">
              </li>
              <li data-value="BOB">
                <img src="https://static.szlcsc.com/pay/resources/images/fk_yh_bs13.jpg">
              </li>
              <li data-value="NJCB">
                <img src="https://static.szlcsc.com/pay/resources/images/fk_yh_bs17.jpg">
              </li>
              <li data-value="PSBC">
                <img src="https://static.szlcsc.com/pay/resources/images/fk_yh_bs35.jpg">
              </li>
              <li data-value="CBHB">
                <img src="https://static.szlcsc.com/pay/resources/images/bank_img_85.jpg">
              </li>
              <li data-value="NBCB">
                <img src="https://static.szlcsc.com/pay/resources/images/bank_img_81.jpg">
              </li>
              <li data-value="CZB">
                <img src="https://static.szlcsc.com/pay/resources/images/bank_img_89.jpg">
              </li>
              <li data-value="SRCB">
                <img src="https://static.szlcsc.com/pay/resources/images/bank_img_146.jpg">
              </li>
              <li data-value="HZB">
                <img src="https://static.szlcsc.com/pay/resources/images/bank_img_86.jpg">
              </li>
              <li data-value="HSB">
                <img src="https://static.szlcsc.com/pay/resources/images/bank_img_82.jpg">
              </li>
              <li data-value="BOC_B2B">
                <img src="https://static.szlcsc.com/pay/resources/images/fk_yh_bs49.jpg">
              </li>
              <li data-value="CMB_B2B">
                <img src="https://static.szlcsc.com/pay/resources/images/hbzfym_yh_bs50.jpg">
              </li>
              <li data-value="CIB_B2B">
                <img src="https://static.szlcsc.com/pay/resources/images/fk_yh_bs51.jpg">
              </li>
              <li data-value="CEB_B2B">
                <img src="https://static.szlcsc.com/pay/resources/images/fk_yh_bs55.jpg">
              </li>
              <li data-value="ICBC_B2B">
                <img src="https://static.szlcsc.com/pay/resources/images/bank_img_57.jpg">
              </li>
              <li data-value="CCB_B2B">
                <img
                  src="https://static.szlcsc.com/pay/resources/images/bank_img_59.jpg"
                  border="0"
                >
              </li>
              <li data-value="SPDB_B2B">
                <img src="https://static.szlcsc.com/pay/resources/images/bank_img_73.jpg">
              </li>
              <li data-value="ABC_B2B">
                <img src="https://static.szlcsc.com/pay/resources/images/bank_img_69.jpg">
              </li>
              <li data-value="BCOM_B2B">
                <img src="https://static.szlcsc.com/pay/resources/images/bank_img_147.jpg">
              </li>
            </ul>
            <div class="next_btn">
              <el-button type="warning">下一步</el-button>
            </div>
          </el-tab-pane>
          <el-tab-pane label="预付余额">
            <div class="select_method">
              <div class="no_active">
                <p>
                  您的预付余额账号暂未激活，您可以选择其他支付方式，或
                  <a class="activation">激活预付余额账号</a>
                </p>
                <p>预付余额支持“在线充值”和“线下对公充值”</p>
              </div>
            </div>
          </el-tab-pane>
          <el-tab-pane label="微信/支付宝">
            <ul class="bank_list wx_list">
              <!-- <li data-value="wxpay" :class="isChecked?'active':''" @click="setActiveClass($event)">
                <img src="https://static.szlcsc.com/pay/resources/images/wx.png">
              </li>-->
              <li
                data-value="alipay"
                :class="isChecked?'active':''"
                @click="setActiveClass($event)"
              >
                <img src="https://static.szlcsc.com/pay/resources/images/alipay.png">
              </li>
            </ul>
            <div class="next_btn">
              <el-button type="warning" @click="checkoutSubmit">下一步</el-button>
            </div>
            <div class="saoma_msg">提示：点击"下一步"后，请打开手机微信/支付宝"扫一扫"，扫描二维码。</div>
          </el-tab-pane>
          <el-tab-pane label="信用卡快捷支付">
            <ul class="bank_list">
              <li data-value="ICBC">
                <img src="https://static.szlcsc.com/pay/resources/images/bank_img_18.jpg">
              </li>
              <li data-value="CMB">
                <img src="https://static.szlcsc.com/pay/resources/images/bank_img_11.jpg">
              </li>
              <li data-value="CCB">
                <img src="https://static.szlcsc.com/pay/resources/images/bank_img_13.jpg">
              </li>
              <li data-value="BOC">
                <img src="https://static.szlcsc.com/pay/resources/images/bank_img_15.jpg">
              </li>
              <li data-value="ABC">
                <img src="https://static.szlcsc.com/pay/resources/images/bank_img_27.jpg">
              </li>
              <li data-value="BCOM">
                <img src="https://static.szlcsc.com/pay/resources/images/bank_img_24.jpg">
              </li>
              <li data-value="SPDB">
                <img src="https://static.szlcsc.com/pay/resources/images/bank_img_25.jpg">
              </li>
              <li data-value="GDB">
                <img src="https://static.szlcsc.com/pay/resources/images/bank_img_28.jpg">
              </li>
              <li data-value="CITIC">
                <img src="https://static.szlcsc.com/pay/resources/images/bank_img_34.jpg">
              </li>
              <li data-value="CEB">
                <img src="https://static.szlcsc.com/pay/resources/images/bank_img_36.jpg">
              </li>
              <li data-value="CIB">
                <img src="https://static.szlcsc.com/pay/resources/images/bank_img_38.jpg">
              </li>
              <li data-value="CMBC">
                <img src="https://static.szlcsc.com/pay/resources/images/bank_img_49.jpg">
              </li>
              <li data-value="SHB">
                <img src="https://static.szlcsc.com/pay/resources/images/bank_img_47.jpg">
              </li>
              <li data-value="PAB">
                <img src="https://static.szlcsc.com/pay/resources/images/bank_img_61.jpg">
              </li>
              <li data-value="HXB">
                <img src="https://static.szlcsc.com/pay/resources/images/fk_yh_bs03.jpg">
              </li>
              <li data-value="BOB">
                <img src="https://static.szlcsc.com/pay/resources/images/fk_yh_bs13.jpg">
              </li>
              <li data-value="NJCB">
                <img src="https://static.szlcsc.com/pay/resources/images/fk_yh_bs17.jpg">
              </li>
              <li data-value="PSBC">
                <img src="https://static.szlcsc.com/pay/resources/images/fk_yh_bs35.jpg">
              </li>
              <li data-value="BOC_B2B">
                <img src="https://static.szlcsc.com/pay/resources/images/fk_yh_bs49.jpg">
              </li>
              <li data-value="CMB_B2B">
                <img src="https://static.szlcsc.com/pay/resources/images/hbzfym_yh_bs50.jpg">
              </li>
              <li data-value="CIB_B2B">
                <img src="https://static.szlcsc.com/pay/resources/images/fk_yh_bs51.jpg">
              </li>
              <li data-value="CEB_B2B">
                <img src="https://static.szlcsc.com/pay/resources/images/fk_yh_bs55.jpg">
              </li>
              <li data-value="ICBC_B2B">
                <img src="https://static.szlcsc.com/pay/resources/images/bank_img_57.jpg">
              </li>
              <li data-value="CCB_B2B">
                <img
                  src="https://static.szlcsc.com/pay/resources/images/bank_img_59.jpg"
                  border="0"
                >
              </li>
              <li data-value="SPDB_B2B">
                <img src="https://static.szlcsc.com/pay/resources/images/bank_img_73.jpg">
              </li>
              <li data-value="ABC_B2B">
                <img src="https://static.szlcsc.com/pay/resources/images/bank_img_69.jpg">
              </li>
              <li id="more_creadit_card" @click="bankListVisible = true">
                <img
                  id="more_creadit_card_img"
                  src="https://static.szlcsc.com/pay/resources/images/more-bank.jpg"
                >
              </li>
            </ul>
            <div class="next_btn">
              <el-button type="warning">下一步</el-button>
            </div>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>

    <!-- 银行列表弹框 -->
    <el-dialog title="银行列表" :visible.sync="bankListVisible" center>
      <ul class="bank_list">
        <li data-value="ICBC">
          <img src="https://static.szlcsc.com/pay/resources/images/bank_img_18.jpg">
        </li>
        <li data-value="CMB">
          <img src="https://static.szlcsc.com/pay/resources/images/bank_img_11.jpg">
        </li>
        <li data-value="CCB">
          <img src="https://static.szlcsc.com/pay/resources/images/bank_img_13.jpg">
        </li>
        <li data-value="BOC">
          <img src="https://static.szlcsc.com/pay/resources/images/bank_img_15.jpg">
        </li>
        <li data-value="ABC">
          <img src="https://static.szlcsc.com/pay/resources/images/bank_img_27.jpg">
        </li>
        <li data-value="BCOM">
          <img src="https://static.szlcsc.com/pay/resources/images/bank_img_24.jpg">
        </li>
        <li data-value="SPDB">
          <img src="https://static.szlcsc.com/pay/resources/images/bank_img_25.jpg">
        </li>
        <li data-value="GDB">
          <img src="https://static.szlcsc.com/pay/resources/images/bank_img_28.jpg">
        </li>
        <li data-value="CITIC">
          <img src="https://static.szlcsc.com/pay/resources/images/bank_img_34.jpg">
        </li>
        <li data-value="CEB">
          <img src="https://static.szlcsc.com/pay/resources/images/bank_img_36.jpg">
        </li>
        <li data-value="CIB">
          <img src="https://static.szlcsc.com/pay/resources/images/bank_img_38.jpg">
        </li>
        <li data-value="CMBC">
          <img src="https://static.szlcsc.com/pay/resources/images/bank_img_49.jpg">
        </li>
        <li data-value="SHB">
          <img src="https://static.szlcsc.com/pay/resources/images/bank_img_47.jpg">
        </li>
        <li data-value="PAB">
          <img src="https://static.szlcsc.com/pay/resources/images/bank_img_61.jpg">
        </li>
        <li data-value="HXB">
          <img src="https://static.szlcsc.com/pay/resources/images/fk_yh_bs03.jpg">
        </li>
        <li data-value="BOB">
          <img src="https://static.szlcsc.com/pay/resources/images/fk_yh_bs13.jpg">
        </li>
        <li data-value="NJCB">
          <img src="https://static.szlcsc.com/pay/resources/images/fk_yh_bs17.jpg">
        </li>
        <li data-value="PSBC">
          <img src="https://static.szlcsc.com/pay/resources/images/fk_yh_bs35.jpg">
        </li>
        <li data-value="BOC_B2B">
          <img src="https://static.szlcsc.com/pay/resources/images/fk_yh_bs49.jpg">
        </li>
        <li data-value="CMB_B2B">
          <img src="https://static.szlcsc.com/pay/resources/images/hbzfym_yh_bs50.jpg">
        </li>
        <li data-value="CIB_B2B">
          <img src="https://static.szlcsc.com/pay/resources/images/fk_yh_bs51.jpg">
        </li>
        <li data-value="CEB_B2B">
          <img src="https://static.szlcsc.com/pay/resources/images/fk_yh_bs55.jpg">
        </li>
        <li data-value="ICBC_B2B">
          <img src="https://static.szlcsc.com/pay/resources/images/bank_img_57.jpg">
        </li>
        <li data-value="CCB_B2B">
          <img src="https://static.szlcsc.com/pay/resources/images/bank_img_59.jpg">
        </li>
        <li data-value="SPDB_B2B">
          <img src="https://static.szlcsc.com/pay/resources/images/bank_img_73.jpg">
        </li>
        <li data-value="ABC_B2B">
          <img src="https://static.szlcsc.com/pay/resources/images/bank_img_69.jpg">
        </li>
        <li data-value="NBCB">
          <img src="https://static.szlcsc.com/pay/resources/images/bank_img_81.jpg">
        </li>
        <li data-value="HSB">
          <img src="https://static.szlcsc.com/pay/resources/images/bank_img_82.jpg">
        </li>
        <li data-value="HXB">
          <img src="https://static.szlcsc.com/pay/resources/images/bank_img_83.jpg">
        </li>
        <li data-value="GZCB">
          <img src="https://static.szlcsc.com/pay/resources/images/bank_img_84.jpg">
        </li>
        <li data-value="CBHB">
          <img src="https://static.szlcsc.com/pay/resources/images/bank_img_85.jpg">
        </li>
        <li data-value="HZB">
          <img src="https://static.szlcsc.com/pay/resources/images/bank_img_86.jpg">
        </li>
        <li data-value="CZB">
          <img src="https://static.szlcsc.com/pay/resources/images/bank_img_89.jpg">
        </li>
        <li data-value="JSB">
          <img src="https://static.szlcsc.com/pay/resources/images/bank_img_90.jpg">
        </li>
        <li data-value="DLB">
          <img src="https://static.szlcsc.com/pay/resources/images/bank_img_91.jpg">
        </li>
        <li data-value="SRCB">
          <img src="https://static.szlcsc.com/pay/resources/images/bank_img_146.jpg">
        </li>
        <li data-value="BCOM_B2B">
          <img src="https://static.szlcsc.com/pay/resources/images/bank_img_147.jpg">
        </li>
      </ul>
      <span slot="footer" class="dialog-footer">
        <el-button type="warning" @click="bankListVisible = false">下一步</el-button>
        <el-button @click="bankListVisible = false">取 消</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      bankListVisible: false,
      isChecked: false,
      paymentPage: ""
    };
  },

  methods: {
    setActiveClass(e) {
      e.currentTarget.style.border = "2px dashed #0093e6";
    },
    async checkoutSubmit() {
      let res = await this.$http.get(
        `/api/pay/alipay/submit?orderSn=${
          this.$store.state.orderNumber
        }&totalAmount=${this.$store.state.totalAmount}&channelId=0`
      );
      const div = document.createElement("div");
      div.innerHTML = res;
      document.body.appendChild(div);
      document.forms[0].submit();
    }
  }
};
</script>
<style lang="less" scope>
#checkout {
  .cart_head {
    padding: 30px 0;
    .logo {
      a {
        img {
          display: inline-block;
          vertical-align: middle;
        }
      }
      h3 {
        display: inline-block;
        font-size: 22px;
      }
    }
    .el-steps {
      margin-top: 10px;
    }
  }

  .bank_list {
    padding-left: 20px;
    li {
      display: inline-block;
      margin: 10px;
      border: 1px solid #eee;
      cursor: pointer;
    }
  }

  .pay_wraper {
    .pay_msg {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 20px 0 20px 44px;
      background: #f5f5f5;
      h3,
      .pay_right {
        font-size: 14px;
        font-weight: bold;
        line-height: 20px;
        b {
          color: #f67f00;
        }
      }
      .pay_limit {
        line-height: 30px;
      }
    }

    .pay_method {
      border: 1px solid #eee;
      margin-bottom: 50px;

      .next_btn {
        text-align: center;
        padding: 10px 0;
        .el-button {
          padding: 10px 30px;
        }
      }

      .select_method {
        padding-bottom: 50px;
        .no_active {
          text-align: center;
          .activation {
            color: #0093e6;
          }
        }
      }
      .wx_list {
        li {
          padding: 10px;
          border: 2px dashed #fff;
          &.active {
            border: 2px dashed #0093e6;
          }
        }
      }
      .saoma_msg {
        text-align: center;
      }
    }
  }

  // 银行列表弹框
  .el-dialog {
    width: 860px;
    height: 594px;
    .el-dialog__body {
      width: 100%;
      height: 456px;
      overflow-y: auto;
      border-top: 1px solid #eee;
      padding: 0;
    }
  }
}
</style>