<template>
  <!-- 结算页面 -->
  <div id="submit_order" v-cloak>
    <!-- 发货提醒 -->
    <div class="order_tip">
      <div class="title">
        <i class="el-icon-message-solid"></i>
        <span>订单发货提醒：</span>
      </div>
      <p>立创4小时闪电发货来啦！！！商品种类小于50款的现货订单：周一至周六8:00-17:00付款，4小时内发货；周日17:00前付款，当天发货；其他时间段付款的订单，当天或第二天12:00前发货。实际发货以快递收货时间为准，另绑定订单发货时间有延时，代购和订货订单以商城工作人员通知时间为准，请做好相应安排并尽量及时支付，谢谢！</p>
    </div>

    <div class="ordet_info_title">
      填写并核对订单信息
      <a
        href="https://cart.szlcsc.com/cart/display.html"
        class="right goldenrod"
      >返回购物车修改&gt;&gt;</a>
    </div>
    <div class="ordet_box">
      <!-- 订单信息 -->
      <ul class="ordet_info">
        <li class="consignee">
          <h4 class="common_title">
            <span>收货人信息</span>
            <a href="javascript:;" class="blue addReceiveAddress" @click="newAddressForm = true">新增</a>
          </h4>
          <div class="order_address">
            <div
              class="address_list"
              @click="currentAddress(item,$event)"
              :class="{active:item.id == currentShow}"
              v-for="(item,index) in getAddressData"
              :key="index"
            >
              <div class="addressee">
                <span>{{item.name}}</span>
                <a
                  href="javascript:;"
                  class="set_normal"
                  v-text="item.defaultStatus == 0?'设为默认':'默认地址'"
                  @click="SetDefault(item.id)"
                ></a>
              </div>
              <div class="order_address_info">
                <p class="ellipsis">
                  <span>{{item.province}}</span>
                  <span>{{item.city}}</span>
                  <span>{{item.region}}</span>
                </p>
                <p class="ellipsis receive-address">{{item.detailAddress}}</p>
                <p class="li_phone">{{item.phoneNumber}}</p>
              </div>
              <div class="order_edit_address">
                <a href="javascript:;" class="edit_js" @click="modificationAddress(item)">修改</a>
                <a href="javascript:;" class="del_js" @click="delAddress(item.id)">删除</a>
              </div>
            </div>

            <!-- <li class="no_people">
              暂无收货人信息，
              <a class="blue addReceiveAddress">请添加</a>
            </li>-->

            <div class="clear"></div>
          </div>
        </li>
        <li class="order_people">
          <h4 class="common_title">
            <span>下单联系人</span>
          </h4>
          <ul class="contact_uuid">
            <li>
              联系人：
              <span class="name">{{defaultLinkman}}</span>
            </li>
            <li class="order_phone">
              手机号码：
              <span class="phone">{{defaultPhone}}</span>
            </li>
            <li>
              <a href="javascript:;" @click="linkmanForm=true">选择其他联系人</a>
            </li>
          </ul>
        </li>
        <li class="shipping">
          <h4 class="common_title">
            <span>配送方式</span>
          </h4>
          <ul>
            <li>
              <div class="left">您可以选择</div>
              <select class="shipping_method left" id="express_list">
                <option value="sf_special_offers">顺丰经济快递(陆运)</option>
                <option value="SF">顺丰标准快递</option>
                <option value="KYJJJF">跨越速运（隔日）</option>
                <option value="JDTH">京东快递-特惠（陆运）</option>
                <option value="KYBZJF">跨越速运（次日）</option>
                <option value="JDTZ">京东快递-特准</option>
                <option value="SR">速尔快递</option>
                <option value="YS">优速快递</option>
                <option value="EMS">EMS国内特快</option>
              </select>
              <div class="clear"></div>
            </li>
            <li style="margin-right: 15px;">
              <input type="checkbox" id="freightToPay">
              <label for="freightToPay" style="cursor: pointer;">运费到付</label>
              <span class="goldenrod" id="nonsupport_freightToPay" style="display: none">（不支持运费到付）</span>
            </li>
            <li class="freightToPay_tip" style="display: none;">运费到付就是您收到货物后付运费给快递公司</li>
            <li class="no_freightToPay_tip">
              当前订单商品总毛重约为
              <span class="goldenrod">
                <span id="weight">0.08247</span>KG
              </span>
              需要运费
              <span class="goldenrod">
                ￥
                <span class="freightMoney">{{freight}}</span>
              </span>
              <span id="freeFreight99" class="red" style="display: inline;">
                (
                <span class="contain-freight-text">9.9包邮</span>)
              </span>
            </li>
          </ul>
          <div class="unifiedBusinessNumber" style="display: none;">
            <input id="unifiedBusinessNumber" type="text" placeholder="请填写统编号" disabled="disabled">
          </div>
        </li>
        <li class="invoice_info">
          <h4 class="common_title">
            <span>
              发票信息
              <i class="red">（请谨慎选择发票类型，发票开出后，无法更换）</i>
            </span>
          </h4>
          <ul class="invoice_info_ul">
            <li class="general invoice_info_btn">
              <el-tooltip class="item" effect="dark" content="Top Center 提示文字" placement="top">
                <a href="javascript:;">普通发票</a>
              </el-tooltip>
            </li>
            <li class="exclusive_use invoice_info_btn">
              <a href="javascript:;">专用发票 （增值税）</a>
            </li>
            <li class="no_need invoice_info_btn">
              <a href="javascript:;">不需要发票</a>
            </li>
          </ul>
        </li>
        <li class="remark_info">
          <div id="remark_ipt_btn">
            <h4 class="common_title">
              <span>订单备注</span>
            </h4>
          </div>
          <div id="remark_ipt_toggle">
            <textarea
              id="order_remark"
              v-model="orderComment"
              placeholder="字数限制：500字"
              maxlength="500"
            ></textarea>
            <p>
              您还可以输入
              <span class="remarkMostLen goldenrod">500</span> 个字
            </p>
          </div>
        </li>
        <li class="preferential_method invoice_info">
          <h4 class="common_title">
            <span>
              可享优惠
              <i class="way">（每个订单只能使用一种优惠方式）</i>
            </span>
          </h4>
          <ul class="invoice_info_ul">
            <li>
              <input type="radio" name="preferentialMethod">
              <label for="preferentialMethod1">
                使用优惠券折扣
                <span class="blue">
                  （你有
                  <b class="goldenrod">0</b> 张优惠券可使用）
                </span>
              </label>
            </li>
            <li class="jlcIntegral_wrap">
              <input type="radio" name="preferentialMethod">
              <label for="preferentialMethod2">使用嘉立创积分抵扣</label>
            </li>
            <li>
              <input type="radio" name="preferentialMethod" checked="true">
              <label for="preferentialMethod3">不享受优惠</label>
            </li>
            <li class="order_coupon">
              <div></div>
              <div class="clear"></div>
            </li>
          </ul>
        </li>
      </ul>
      <!-- 提交订单 -->
      <div class="order_submit_wraper">
        <div></div>
        <div class="order_submit_info">
          <ul>
            <li>
              <div>
                共
                <i>{{orderNum}}</i> 种商品，商品总金额：
              </div>
              <div>￥{{(orderPrice-freight).toFixed(2)}}</div>
            </li>
            <li>
              <div>嘉立创积分抵扣：</div>
              <div>
                -￥
                <i>{{deduction}}</i>
              </div>
            </li>
            <li>
              <div>运费：</div>
              <div>￥{{freight}}</div>
            </li>
            <li>
              <div>应付金额：</div>
              <div class="total">￥ {{orderPrice.toFixed(2)}}</div>
            </li>
          </ul>
          <div class="agreement">
            <el-checkbox v-model="checked"></el-checkbox>
            <span>同意立创商城</span>
            <a href="https://www.szlcsc.com/help/603.html" target="_blank">
              <span class="blue">《网站使用条款》</span>
            </a>
          </div>
          <el-button type="warning" @click="submitOrder" :disabled="isDisable">提交订单</el-button>
        </div>
      </div>
    </div>

    <!-- 新增地址弹出框 -->
    <div class="new_address">
      <el-dialog title="新增收货地址" :visible.sync="newAddressForm">
        <el-form :model="ruleForm" label-position="right" :rules="rules" ref="ruleForm">
          <el-form-item label="收货人：" prop="name">
            <el-input v-model="ruleForm.name" autocomplete="off" placeholder="收货人"></el-input>
          </el-form-item>
          <el-form-item label="手机：" prop="phoneNumber">
            <el-input v-model="ruleForm.phoneNumber" autocomplete="off" placeholder="请填写正确的11位手机号码"></el-input>
          </el-form-item>
          <el-form-item label="所在地区：" prop="address">
            <!-- 饿了吗ui的级联选择器 -->
            <el-cascader
              expand-trigger="hover"
              v-model="ruleForm.address"
              :options="options"
              placeholder="请选择省 市 区"
            ></el-cascader>
          </el-form-item>
          <el-form-item label="详细地址：" class="particular_content" prop="detailAddress">
            <el-input
              class="particular_input"
              v-model="ruleForm.detailAddress"
              autocomplete="off"
              placeholder="街道、小区、楼牌号等，无需重复填写省市区"
            ></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button type="primary" @click="submitAddressForm('ruleForm'),newAddressForm=false">保 存</el-button>
        </div>
      </el-dialog>
    </div>
    <!-- 修改地址弹出框 -->
    <div class="new_address">
      <el-dialog title="修改收货地址" :visible.sync="alterAddressForm">
        <el-form :model="ruleForm" label-position="right" :rules="rules" ref="ruleForm">
          <el-form-item label="收货人：" prop="name">
            <el-input v-model="ruleForm.name" autocomplete="off" placeholder="收货人"></el-input>
          </el-form-item>
          <el-form-item label="手机：" prop="phoneNumber">
            <el-input v-model="ruleForm.phoneNumber" autocomplete="off" placeholder="请填写正确的11位手机号码"></el-input>
          </el-form-item>
          <el-form-item label="所在地区：" prop="address">
            <!-- 饿了吗ui的级联选择器 -->
            <el-cascader
              expand-trigger="hover"
              v-model="ruleForm.address"
              :options="options"
              placeholder="请选择省 市 区"
            ></el-cascader>
          </el-form-item>
          <el-form-item label="详细地址：" class="particular_content" prop="detailAddress">
            <el-input
              class="particular_input"
              v-model="ruleForm.detailAddress"
              autocomplete="off"
              placeholder="街道、小区、楼牌号等，无需重复填写省市区"
            ></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button type="primary" @click="submitAddressForm('ruleForm')">保 存</el-button>
        </div>
      </el-dialog>
    </div>
    <!-- 新增联系人弹出框 -->
    <div class="linkman">
      <el-dialog title="选择其他联系人" :visible.sync="linkmanForm">
        <h4>常用联系人</h4>
        <el-table :data="getLinkmanData" @row-click="openDetails">
          <el-table-column type="index"></el-table-column>
          <el-table-column prop="contactName" label="下单联系人" width="140"></el-table-column>
          <el-table-column prop="phone" label="联系人手机" width="220"></el-table-column>
          <el-table-column prop="operation" label="操作">
            <template slot-scope="current">
              <span class="operation" v-show="current.row.status == 1">
                <i class="el-icon-location-information"></i> 默认联系人
              </span>
              <a
                class="operation"
                href="javascript:;"
                v-show="current.row.status != 1"
                @click="setTacitlyApprove(current.row)"
              >设置默认</a>
              <a
                class="operation"
                href="javascript:;"
                @click="modification(current.row),addLinkmanShow = true"
              >修改</a>
              <a
                class="operation"
                href="javascript:;"
                v-show="current.row.status != 1"
                @click="delLinkmanData(current.row)"
              >删除</a>
            </template>
          </el-table-column>
        </el-table>
        <div class="linkman_btn">
          <el-button @click="addLinkmanShow = true">新增联系人</el-button>
          <el-button type="primary" @click="linkmanForm=false">确定</el-button>
        </div>
        <div v-show="addLinkmanShow">
          <h4>新增联系人</h4>
          <el-form
            :inline="true"
            :model="ruleFormTwo"
            :rules="rulesTwo"
            ref="ruleFormTwo"
            class="demo-form-inline"
          >
            <el-form-item label="下单联系人：" prop="contactName">
              <el-input v-model="ruleFormTwo.contactName"></el-input>
            </el-form-item>
            <el-form-item label="手机：" prop="phone">
              <el-input v-model="ruleFormTwo.phone"></el-input>
            </el-form-item>
            <!-- <el-form-item>
              <el-checkbox v-model="checked">设为默认</el-checkbox>
            </el-form-item>-->

            <el-form-item>
              <el-button type="primary" @click="saveBtn('ruleFormTwo')">保存</el-button>
            </el-form-item>
          </el-form>
        </div>
      </el-dialog>
    </div>
  </div>
</template>
<script>
// 省市联动数据
import options from "../../../lib/city_data2017_element.js";
import { Promise } from "q";
import { promises } from "fs";
export default {
  data() {
    return {
      isDisable: false,
      // 备注
      orderComment: "",
      // 地址选中时样式
      currentShow: 0,
      // 运费
      freight: 10.1,
      // 设置默认地址状态码
      defaultStatus: 0,
      //默认地址的数据
      defaultAddressData: {},
      // 获取地址
      getAddressData: [],
      memberReceiveAddress: {},
      // 新增地址
      options,
      newAddressForm: false,
      // 默认姓名
      defaultLinkman: "",
      defaultPhone: "",
      ruleForm: {
        id: null,
        name: "",
        phoneNumber: "",
        address: [],
        detailAddress: ""
      },
      // 修改地址
      alterAddressForm: false,
      rules: {
        name: [
          { required: true, message: "请输入收货人姓名", trigger: "blur" },
          { min: 2, message: "长度不小于 2 个字符", trigger: "blur" }
        ],
        phoneNumber: [
          { required: true, message: "请输入收货人手机号码", trigger: "blur" },
          {
            pattern: /^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/,
            message: "目前只支持中国大陆的手机号码"
          }
        ],
        address: [
          { required: true, message: "请输入收货人省 市 区", trigger: "blur" }
        ],
        detailAddress: [
          { required: true, message: "请输入收货人详细地址", trigger: "blur" }
        ]
      },

      // 订单数量
      orderNum: 0,
      // 订单总价
      orderPrice: 0,
      // 抵扣
      deduction: 0,
      checked: true,
      // 新增联系人显示隐藏
      addLinkmanShow: false,
      // 获取联系人
      getLinkmanData: [],
      // 默认联系人的数据
      defaultLinkmanData: {},
      // 新增联系人
      linkmanForm: false,
      checked: true,
      ruleFormTwo: {
        contactName: "",
        phone: "",
        status: 0,
        id: null
      },
      rulesTwo: {
        contactName: [
          { required: true, message: "请输入收货人姓名", trigger: "blur" },
          { min: 2, message: "长度不小于 2 个字符", trigger: "blur" }
        ],
        phone: [
          { required: true, message: "请输入收货人手机号码", trigger: "blur" },
          {
            pattern: /^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/,
            message: "目前只支持中国大陆的手机号码"
          }
        ]
      }
    };
  },

  created() {
    this.getAddress();
    this.getLinkman();
    this.getOrderData();
  },

  methods: {
    // 获取联系人地址
    async getAddress() {
      let res = await this.$http.get("/api/member/address/list");
      this.getAddressData = res.data;
      this.setAddressstyle(this.getAddressData);
    },
    // 默认地址样式
    setAddressstyle(res) {
      res.forEach(val => {
        if (val.defaultStatus === 1) {
          this.currentShow = val.id;
        }
      });
    },

    // 选中的地址
    currentAddress(item, e) {
      //判断当点击的元素为a标签时，当前元素未选中
      if (
        e.toElement.className != "set_normal" &&
        e.toElement.className != "edit_js" &&
        e.toElement.className != "del_js"
      ) {
        this.currentShow = item.id;
      }
      this.memberReceiveAddress = item;
    },

    // 设为默认地址
    async SetDefault(id) {
      let res = await this.$http.get(
        `/api/member/address/defaultContactAddress?id=${id}`
      );
      if (res.code === 200) {
        this.$message({
          type: "success",
          message: "设置成功!"
        });
        this.defaultStatus = 1;
        this.getAddress();
      }
    },
    // 新增地址
    submitAddressForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          let data = {
            id: this.ruleForm.id,
            defaultStatus: this.defaultStatus,
            city: this.ruleForm.address[1],
            detailAddress: this.ruleForm.detailAddress,
            name: this.ruleForm.name,
            phoneNumber: this.ruleForm.phoneNumber,
            province: this.ruleForm.address[0],
            region: this.ruleForm.address[2]
          };
          this.$http.post("/api/member/address/saveAddress", data).then(res => {
            this.$message({
              type: "success",
              message: res.message
            });
            this.getAddress();
            this.alterAddressForm = false;
            this.$refs[formName].resetFields(); //表单提交后清空
          });
        } else {
          this.$message({
            type: "warning",
            message: "新增失败！"
          });
          return false;
        }
      });
    },

    // 删除地址
    delAddress(id) {
      this.$confirm("确定删除？", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(async () => {
          let res = await this.$http.post(`/api/member/address/delete/${id}`);
          this.$message({
            type: "success",
            message: res.message
          });
          this.getAddress();
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },

    //修改地址
    modificationAddress(item) {
      this.alterAddressForm = true;
      this.ruleForm.id = item.id;
      this.ruleForm.name = item.name;
      this.ruleForm.phoneNumber = item.phoneNumber;
      this.ruleForm.detailAddress = item.detailAddress;
      let addressArr = [];
      addressArr.push(item.province, item.city, item.region);
      this.ruleForm.address = addressArr;
    },

    // 获取联系人
    async getLinkman() {
      let res = await this.$http.get("/api/member/address/getContactInfo");
      this.getLinkmanData = res.data;
      this.setDefaultShow(this.getLinkmanData);
    },
    // 保存联系人
    saveBtn(formName) {
      this.$refs[formName].validate(valid => {
        let data = {
          contactName: this.ruleFormTwo.contactName,
          id: this.ruleFormTwo.id,
          phone: this.ruleFormTwo.phone,
          status: this.ruleFormTwo.status
        };
        if (valid) {
          this.$http
            .post("/api/member/address/saveContactInfo", data)
            .then(res => {
              this.$message({
                type: "success",
                message: res.message
              });
              this.getLinkman();
              this.ruleFormTwo.id = null;
              this.$refs[formName].resetFields(); //表单提交后清空
            });
        } else {
          this.$message({
            type: "warning",
            message: res.message
          });
          return false;
        }
      });
    },
    // 默认显示联系人
    setDefaultShow(res) {
      res.forEach(val => {
        if (val.status === 1) {
          this.defaultLinkman = val.contactName;
          this.defaultPhone = val.phone;
        }
      });
    },
    // 选中联系人
    openDetails(row) {
      this.defaultLinkman = row.contactName;
      this.defaultPhone = row.phone;
    },

    // 联系人设为默认
    async setTacitlyApprove(item) {
      let res = await this.$http.get(
        `/api/member/address/defaultContact?id=${item.id}`
      );
      this.$message({
        type: "success",
        message: "设置成功!"
      });
      this.getLinkman();
    },

    // 修改联系人
    modification(item) {
      this.ruleFormTwo.id = item.id;
      this.ruleFormTwo.contactName = item.contactName;
      this.ruleFormTwo.phone = item.phone;
      this.ruleFormTwo.status = item.status;
    },
    //删除联系人
    delLinkmanData(item) {
      this.$confirm("是否删除该联系人？", "提示", {
        confirmButtonText: "确认",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(async () => {
          // 确认
          let res = await this.$http.get(
            `/api/member/address/removeContactInfo?id=${item.id}`
          );
          if (res.code == 200) {
            this.getLinkman();
          }
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: res.message
          });
        });
    },
    // 获取订单信息
    getOrderData() {
      this.orderNum = this.$store.state.submitOrderGoods.length;

      let orderArr = this.$store.state.submitOrderGoods;
      orderArr.forEach(el => {
        this.orderPrice += el.productPrice * el.productNumber;
      });
      this.orderPrice = this.orderPrice - this.deduction + this.freight;
    },

    // 提交订单的接口
    async submitOrdeApi(address) {
      let data = {
        cartPromotionItemList: this.$store.state.submitOrderGoods, //订单的商品信息
        freightAmount: this.freight, //运费
        note: this.orderComment, //备注
        payAmount: this.orderPrice, //金额
        memberReceiveAddress: address, //地址信息
        orderSn: this.$store.state.orderNumber //商品编号
      };
      console.log(data);
      this.$store.state.totalAmount = data.payAmount.toFixed(2);
      let res = await this.$http.post("/api/order/orderResult", data);

      this.$message({
        type: "success",
        message: res.message
      });
      this.isDisable = false;
      this.$router.push("/shopping/checkout");
    },

    // 提交订单接口调用
    submitOrder() {
      let id;
      this.getAddressData.forEach(val => {
        if (val.defaultStatus === 1) {
          id = val.id;
        }
      });
      if (this.currentShow === id) {
        // 获取默认地址
        this.getAddressData.forEach(val => {
          if (val.defaultStatus === 1) {
            this.defaultAddressData = val;
          }
        });
        // 获取默认联系人
        this.getLinkmanData.forEach(value => {
          if (value.status === 1) {
            this.defaultLinkmanData = value;
          }
        });
        this.submitOrdeApi(this.defaultAddressData);
      } else {
        if (this.memberReceiveAddress.id) {
          if (this.defaultLinkman) {
            if (this.checked) {
              this.isDisable = true;
              this.submitOrdeApi(this.memberReceiveAddress);
            } else {
              this.$message({
                type: "warning",
                message: "请阅读并勾选网站使用条款！"
              });
            }
          } else {
            this.$message({
              type: "warning",
              message: "请选择下单联系人！"
            });
          }
        } else {
          this.$message({
            type: "warning",
            message: "请选择收件人地址！"
          });
        }
      }
    }
  }
};
</script>
<style lang="less" scope>
#submit_order {
  .order_tip {
    width: 100%;
    box-sizing: border-box;
    padding: 22px 30px 22px 15px;
    margin-top: 20px;
    border: 1px solid #f78000;
    background: #fdf2e8;
    border-radius: 5px;
    .title {
      color: #f78000;
      font-size: 14px;
      font-weight: bold;
      i {
        margin-right: 5px;
        font-size: 20px;
      }
    }
    p {
      text-indent: 2em;
      font-size: 14px;
      color: #666;
      line-height: 24px;
    }
  }

  .ordet_info_title {
    margin-top: 10px;
    line-height: 36px;
    font-size: 16px;
    color: #444;
    display: flex;
    justify-content: space-between;
    a {
      color: #f78000;
      height: 24px;
      line-height: 36px;
      font-size: 12px;
    }
  }

  .ordet_box {
    border: 1px solid #e9e9e9;
    .ordet_info {
      .common_title {
        display: flex;
        justify-content: space-between;
        padding: 0 20px;

        background: #f2f2f2;
        font-weight: bold;
        line-height: 34px;
        border-bottom: 1px solid #e9e9e9;
        span {
          font-size: 14px;
          font-weight: bold;
          color: #444;
        }
        a {
          color: #0093e6;
          font-weight: normal;
        }
      }
      .consignee {
        .order_address {
          padding: 20px 0 20px 100px;
          .address_list.active {
            border: 3px dashed #33a9eb;
          }
          .address_list {
            display: inline-block;
            vertical-align: -webkit-baseline-middle;
            width: 250px;
            height: 116px;
            margin: 5px 10px;
            padding: 12px 20px;
            border: 3px dashed #ccc;
            .addressee {
              display: flex;
              justify-content: space-between;
              align-items: center;
              border-bottom: 1px dashed #dedede;
              line-height: 30px;
              a {
                color: #9a9a9a;
              }
              .set_normal {
                &:hover {
                  color: #0093e6;
                }
              }
            }
            .order_edit_address {
              padding: 10px 0;
              a {
                &:nth-last-of-type(1) {
                  margin-left: 10px;
                }
                &:hover {
                  color: #f00;
                }
              }
            }
            .order_address_info {
              padding-top: 5px;
              p {
                line-height: 20px;
              }
            }
          }
        }
      }

      .order_people {
        ul {
          color: #9a9a9a;
          line-height: 50px;
          padding: 0 20px;
          li {
            display: inline-block;
            margin-right: 80px;
            &:nth-last-child(1) {
              a {
                color: #0093e6;
              }
            }
          }
        }
      }

      .shipping {
        ul {
          display: flex;
          align-items: center;
          padding: 14px 0 10px 42px;
          line-height: 26px;
          li {
            display: flex;
            #freightToPay {
              vertical-align: middle;
              margin-top: 7px;
            }
            .left {
              margin-right: 10px;
            }
            .goldenrod {
              margin: 0 5px;

              color: #ff7800;
            }
            .red {
              color: #ff0000;
            }
          }
        }
      }

      .invoice_info {
        h4 {
          .red {
            color: #ff0000;
            font-size: 12px;
            font-weight: normal;
          }
        }

        .invoice_info_ul {
          padding: 22px 0 16px 20px;
          .invoice_info_btn {
            display: inline-block;
            margin-right: 40px;
            position: relative;
            box-sizing: border-box;
            width: 180px;
            height: 44px;
            line-height: 42px;
            text-align: center;
            border: 1px solid #dedede;
            a {
              display: block;
              width: 100%;
              height: 100px;
            }
          }
        }
      }

      .remark_info {
        #remark_ipt_toggle {
          padding: 22px 0 20px 42px;
          width: 680px;
          #order_remark {
            box-sizing: border-box;
            padding: 6px;
            width: 680px;
            height: 95px;
            font-size: 12px;
            border: 1px solid #ccc;
          }
          p {
            margin-top: 20px;
            text-align: right;
            .goldenrod {
              color: #f78000;
            }
          }
        }
      }

      .preferential_method {
        border-bottom: 1px solid #e9e9e9;
        h4 {
          span {
            .way {
              color: #ff0000;
              font-size: 12px;
              font-weight: normal;
            }
          }
        }
      }
    }

    .order_submit_wraper {
      height: 100%;
      display: flex;
      justify-content: space-between;
      .order_submit_info {
        width: 450px;
        text-align: right;
        ul {
          li {
            width: 100%;
            text-align: right;
            line-height: 28px;
            margin: 5px 0;
            div {
              display: inline-block;
              &:nth-last-child(1) {
                width: 150px;
              }
            }
            .total {
              font-size: 20px;
              line-height: 20px;
              font-weight: bold;
              color: #f78000;
            }
          }
        }

        .agreement {
          .el-checkbox {
            margin-right: 10px;
          }
          a {
            color: #0093e6;
          }
        }
        .el-button {
          height: 40px;
          font-size: 16px;
          color: #fff;
          text-align: center;
          border-radius: 2px;
          background: #ff7800;
          margin: 20px 0 40px;
        }
      }
    }
  }

  // 弹框公共样式
  .el-dialog {
    border: 4px solid #d9d9d9;
    .el-dialog__header {
      padding: 10px;
      border-bottom: 1px solid #dedede;
      span {
        font-size: 14px;
        font-weight: bold;
        color: #444;
      }
    }
    .el-dialog__body {
      padding-top: 10px;
      padding-bottom: 10px;
    }
  }
  .el-button {
    padding: 6px 20px;
  }
  // 新增地址弹出框
  .new_address {
    .el-dialog__wrapper {
      .el-dialog {
        width: 544px;
        .el-dialog__body {
          .el-form-item {
            margin: 0;
            .el-form-item__label {
              width: 100px;
            }
            .el-input {
              width: 260px;
              .el-input__inner {
                width: 100%;
                height: 30px;
                line-height: 30px;
                font-size: 10px;
              }
            }
            .particular_input {
              width: 360px;
            }
            .el-form-item__error {
              left: 370px;
              top: 10px;
            }
          }

          .particular_content {
            .el-form-item__error {
              top: 40px;
            }
          }
        }

        .el-dialog__footer {
          padding: 0 110px 20px;
          text-align: left;
          .el-button {
            padding: 8px 20px;
          }
        }
      }
    }
  }

  // 新增联系人弹出框
  .linkman {
    .el-dialog {
      width: 630px;
      .el-dialog__body {
        h4 {
          line-height: 20px;
          border-bottom: 1px solid #dedede;
        }
        .el-table {
          thead,
          tbody {
            th,
            td {
              text-align: center;
            }
            td > .cell {
              font-size: 10px;
            }
            .operation {
              padding: 0 5px;
              i {
                color: #f78000;
                font-size: 16px;
              }
              &:hover {
                color: #0093e6;
              }
            }
          }
        }
        .linkman_btn {
          text-align: center;
          padding-top: 5px;
        }
        .el-form {
          padding: 10px 0 15px;
          .el-form-item {
            margin-bottom: 0;
            .el-form-item__label {
              padding: 0;
            }
            .el-form-item__content {
              .el-input {
                .el-input__inner {
                  width: 120px;
                  height: 30px;
                  line-height: 30px;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
