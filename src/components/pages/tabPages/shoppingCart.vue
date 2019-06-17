<template>
  <div id="shopping-cart" v-cloak>
    <!-- 购物车页面 -->
    <div class="cartListContainer">
      <!-- 当无商品时 -->
      <div class="no_pro_wraper" v-if="orderList.length<=0?goodsShow=true:goodsShow=false">
        <span>
          <i class="el-icon-shopping-cart-2"></i>
        </span>
        <span>
          <p class="no_goods_txt">当前购物车暂时没有商品，您可以选择</p>
          <p>
            <a href="javascript:;" @click="goToCollect">查看收藏夹</a>
            或
            <a href="javascript:;" @click="refurbish">选购商品</a>
          </p>
        </span>
      </div>

      <!-- 当有商品时 -->
      <div class="pro_wraper" v-if="orderList.length>0?goodsShow=true:goodsShow=false">
        <div class="cart_msg">
          <p>购物车商品只保留3个月，请及时提交订单，暂时不需要购买的商品，建议您选择“移入收藏夹”。</p>
        </div>
        <div class="cart_list">
          <ul class="thead">
            <li>
              <el-checkbox v-model="checkAll" @change="setCheckedAll">
                <i>现货商品</i>
              </el-checkbox>
            </li>
            <li>商品编号</li>
            <li>商品信息</li>
            <li>单价(含增值税)</li>
            <li>数量</li>
            <li>金额(含增值税)</li>
            <li>操作</li>
          </ul>
          <ul class="tbody">
            <li class="list_box" v-for="(item,index) in orderList" :key="index">
              <ul class="each_item">
                <li class="check">
                  <el-checkbox-group v-model="checkModel" @change="setCheckedModel">
                    <el-checkbox :label="item">
                      <img :src="item.picPath" alt>
                    </el-checkbox>
                  </el-checkbox-group>
                </li>
                <li class="numble">{{item.productSn}}</li>
                <li class="message">
                  <p>
                    <a href="#" class="productName">{{item.productName}}</a>
                  </p>
                  <p>
                    <a href="#">{{item.productType}}</a>
                    <a href="#">{{item.productSpecifications}}</a>
                  </p>
                  <p>
                    <span>{{item.brandName}}</span>
                    <span style="color:#f00;">(1{{item.unit}}有{{item.unitNum}}个)</span>
                  </p>
                </li>
                <li class="unit_price" @mousemove="boxShow(item.productId)" @mouseleave="boxHide">
                  <el-tooltip placement="bottom" effect="light" style="width:100px;">
                    <div slot="content">
                      多行信息
                      <br>第二行信息
                    </div>
                    <div>
                      <span>￥{{item.productPrice}}</span>
                      <i class="el-icon-arrow-down"></i>
                    </div>
                  </el-tooltip>
                </li>
                <li class="amount">
                  <el-input-number
                    size="mini"
                    v-model="item.productNumber"
                    :value="item.productNumber"
                    @change="handleChange"
                    :min="1"
                    :max="10"
                  ></el-input-number>
                  <p>
                    商品库存:
                    <i>{{item.stock}}</i>个
                  </p>
                </li>
                <li class="sum">
                  ￥
                  <i>{{(item.productNumber*item.productPrice).toFixed(2)}}</i>
                </li>
                <li class="operation">
                  <p>
                    <a href="javascript:;" @click="collectQuote(item.productId)">移入收藏夹</a>
                    <a href="javascript:;" @click="delQuote(item.productId)">删除</a>
                  </p>
                  <!-- <el-input placeholder="材料编号" prefix-icon="el-icon-edit" size="mini"></el-input> -->
                </li>
              </ul>
              <!-- <div class="pop-up-box" v-show="popUpBox">
                <ul>
                  <li>单价（含增值税）:</li>
                  <li>
                    <span>1~9个 :</span>
                    <i>￥25.22</i>
                  </li>
                  <li>
                    <span>10个以上 :</span>
                    <i>￥24.8</i>
                  </li>
                </ul>
                <span class="arrows"></span>
              </div>-->
            </li>
          </ul>
        </div>
        <div class="settle_accounts">
          <div class="del">
            <a href="javascript:;" @click="delMultiple">
              <i class="el-icon-delete-solid"></i>删除
            </a>
            <a href="javascript:;" @click="collectMultiple">
              <i class="el-icon-star-off"></i>移入收藏夹
            </a>
            <a href="javascript:;">
              <i class="el-icon-tickets"></i>导出至Excel
            </a>
          </div>
          <div class="payment">
            <span>
              已选中
              <i>{{checkModel.length}}</i>种商品
            </span>
            <span>
              总价(不含运费):￥
              <i>{{getTotalPrice.toFixed(2)}}</i>
            </span>
            <el-button type="warning" @click="settleAccounts" :disabled="isDisable">结算</el-button>
          </div>
        </div>
      </div>
      <div class="speed_add">
        <h3>根据商品编号快速添加购物车</h3>
        <div>
          <span>商品编号 : &nbsp;&nbsp;</span>
          <el-input></el-input>
          <span>数量 : &nbsp;&nbsp;</span>
          <el-input></el-input>
          <el-button type="primary">添加</el-button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { log } from "util";
import { Promise } from "q";
import { promises } from "fs";
export default {
  inject: ["reload"],
  data() {
    return {
      isDisable: false,
      checkModel: [],
      checkAll: false, // 全选
      popUpBox: false, // 增值税弹出框
      getTotalPrice: 0, // 商品总价
      orderList: [], //订单列表信息
      selectedGoods: [], //选中的商品
      goodsShow: false,
      idArr: []
    };
  },

  created() {
    this.getShoppingCartData();
    this.common.setCheckedAll();
  },

  methods: {
    refurbish() {
      this.$router.push("/");
      this.reload();
    },
    //回到首页
    goToindex() {
      this.reload();
      this.$router.push("/");
    },
    // 获取购物车列表
    async getShoppingCartData() {
      let res = await this.$http.post("/api/member/cart/list");
      this.orderList = res.data;
    },
    // 实现多选框全选反选功能
    setCheckedAll(val) {
      this.checkModel = val ? this.orderList : [];
      if (this.checkAll) {
        this.orderList.forEach(res => {
          this.selectedGoods = this.orderList;
          this.getTotalPrice += res.productNumber * res.productPrice;
        });
      } else {
        this.getTotalPrice = 0;
      }
    },
    setCheckedModel(value) {
      let checkedCount = value.length;
      this.checkAll = checkedCount === this.orderList.length;
      this.getTotalPrice = 0;
      value.forEach(res => {
        this.getTotalPrice += res.productNumber * res.productPrice;
      });
      this.selectedGoods = value;
    },
    // 跳转到收藏夹
    goToCollect() {
      this.$router.push("/shopping/member/favorite");
      this.reload();
    },

    // 计数器
    handleChange(value) {
      console.log(value);
      // this.getTotalPrice = value
    },

    // 增值税显示隐藏
    boxShow(id) {
      this.popUpBox = true;
    },
    boxHide(id) {
      this.popUpBox = false;
    },

    // 删除购物车商品接口
    async delCartProduct(ids) {
      let res = await this.$http.post(
        `/api/member/cart/delete?productId=${ids}`
      );
      if (res.code === 200) {
        this.$message({
          type: "success",
          message: "操作成功！"
        });
        this.getShoppingCartData();
      } else {
        this.$message({
          type: "warning",
          message: "删除失败！"
        });
      }
    },

    // 删除单个商品事件
    delQuote(id) {
      this.$confirm(
        "您可以选择删除商品，或移入收藏夹。",
        "您是要删除该商品吗？",
        {
          confirmButtonText: "移入收藏夹",
          cancelButtonText: "删除",
          type: "warning",
          center: true,
          closeOnPressEscape: false,
          distinguishCancelAndClose: true
        }
      )
        .then(() => {
          // 移入收藏夹
          this.collectionGoods(id);
        })
        .catch(action => {
          message: action === "cancel" ? this.delCartProduct(id) : "";
        });
    },

    //删除多个商品事件
    delMultiple() {
      this.selectedGoods.forEach(res => {
        this.idArr.push(res.productId);
      });
      if (this.checkModel.length <= 0) {
        this.$message({
          type: "warning",
          message: "请勾选要删除的商品！"
        });
      } else {
        this.$confirm(
          "您可以选择删除商品，或移入收藏夹。",
          "您是要删除该商品吗？",
          {
            confirmButtonText: "移入收藏夹",
            cancelButtonText: "删除",
            type: "warning",
            center: true,
            closeOnPressEscape: false,
            distinguishCancelAndClose: true
          }
        )
          .then(() => {
            // 移入收藏夹
            this.collectionGoods(this.idArr);
          })
          .catch(action => {
            message: action === "cancel" ? this.delCartProduct(this.idArr) : "";
          });
      }
    },

    // 收藏商品接口
    collectionGoods(ids) {
      this.$confirm("移动后选中的商品将不在购物车中显示!", "移到收藏夹", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
        center: true
      })
        .then(async () => {
          let res = await this.$http.post(
            `/api/member/collection/addProduct?ids=${ids}`
          );
          if (res.code === 200) {
            this.$message({
              type: "success",
              message: "操作成功！"
            });
            this.delCartProduct(ids);
          } else {
            this.$message({
              type: "warning",
              message: "收藏失败！"
            });
          }
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消收藏!"
          });
        });
    },
    // 收藏单个商品事件
    collectQuote(id) {
      this.collectionGoods(id);
    },

    //收藏多个商品事件
    collectMultiple() {
      this.selectedGoods.forEach(res => {
        this.idArr.push(res.productId);
      });
      if (this.checkModel.length <= 0) {
        this.$message({
          type: "warning",
          message: "请勾选要收藏的商品！"
        });
      } else {
        this.collectionGoods(this.idArr);
      }
    },

    // 结账
    async settleAccounts() {
      if (this.checkModel.length > 0) {
        this.isDisable = true;
        let res = await this.$http.post(
          "/api/member/cart/settleAccounts",
          this.selectedGoods
        );
        this.$store.state.submitOrderGoods = res.data.cartPromotionItemList;
        this.isDisable = false;
        this.$store.state.orderNumber = res.data.orderSn;
        this.$router.push("/shopping/submitOrder");

        this.getShoppingCartData();
      } else {
        this.$message({
          type: "warning",
          message: "请选择要购买的商品！"
        });
      }
    }
  }
};
</script>
<style lang="less" scope>
#shopping-cart {
  .cartListContainer {
    //   当无商品时
    .no_pro_wraper {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 60px 0;
      span {
        &:nth-last-of-type(1) {
          margin-left: 20px;
          a {
            color: #0193e6;
          }
        }
        i {
          font-size: 70px;
          color: #cccccc;
        }
        .no_goods_txt {
          margin-bottom: 15px;
        }
      }
    }

    // 当有商品时
    .cart_msg {
      line-height: 40px;
      background: #fcf2e8;
      margin: 20px 0 15px 0;
      padding-left: 15px;
      border-radius: 5px;
      border: 1px solid #f3d4b8;
    }
    .cart_list {
      width: 100%;
      .thead {
        line-height: 40px;
        background-color: #f4f4f4;
        border: 1px solid #eaeaea;
        border-bottom: 2px solid #eaeaea;
        display: flex;
        li {
          text-align: left;
          &:nth-of-type(1) {
            width: 12%;
          }
          &:nth-of-type(2) {
            width: 12%;
          }
          &:nth-of-type(3) {
            width: 25%;
          }
          &:nth-of-type(4) {
            width: 12%;
          }
          &:nth-of-type(5) {
            width: 15%;
            text-align: center;
          }
          &:nth-of-type(6) {
            width: 12%;
            text-align: center;
          }
          &:nth-last-of-type(1) {
            width: 12%;
            text-align: center;
          }
        }
      }
      .tbody {
        .list_box {
          border-bottom: 1px solid #eaeaea;
          position: relative;
          .each_item {
            li {
              display: inline-block;
              width: 12%;
              padding: 20px 0;
              vertical-align: text-top;
            }
            .check {
              .el-checkbox__input {
                vertical-align: top;
              }
              img {
                display: block;
                width: 60px;
                height: 60px;
              }
            }
            .message {
              width: 25%;
              line-height: 24px;
              .productName {
                display: block;
                width: 100%;
                box-sizing: border-box;
                padding-right: 50px;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
              }
            }
            .unit_price {
              i {
                color: #0193e6;
                margin-left: 25px;
              }
            }

            .amount {
              width: 15%;
              text-align: center;
              p {
                margin-top: 5px;
                color: #9a9a9a;
              }
            }

            .sum {
              color: #ff7800;
              font-weight: bold;
              text-align: center;
            }
            .operation {
              p {
                display: flex;
                justify-content: space-between;
                margin-bottom: 5px;
                padding: 0 20px;
              }
            }
          }

          .pop-up-box {
            position: absolute;
            left: 550px;
            top: 50px;
            background-color: #e0e0e0;
            width: 200px;
            text-align: left;
            padding: 10px;
            z-index: 99;
            border: 1px solid #cecccd;
            li {
              &:nth-of-type(1) {
                text-align: center;
                line-height: 24px;
              }
              span {
                display: inline-block;
                width: 100px;
                text-align: right;
              }
              i {
                color: #ff7900;
              }
            }

            .arrows {
              position: absolute;
              left: 100px;
              top: -45px;

              width: 0;
              height: 0;
              border-width: 0 5px 5px;
              border-style: solid;
              border-color: transparent transparent #e0e0e0; /*透明 透明  灰*/
              margin: 40px auto;
            }
          }
        }
      }
    }

    .settle_accounts {
      height: 46px;
      margin: 20px 0;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .del {
        a {
          line-height: 20px;
          margin-right: 40px;
          &:hover {
            color: #ff7900;
          }
          i {
            font-size: 20px;
            color: #ff7900;
          }
        }
      }
      .payment {
        span {
          &:nth-of-type(2) {
            margin: 0 20px;
          }
          i {
            font-weight: bold;
            font-size: 20px;
            color: #ff7900;
          }
        }
        .el-button {
          padding: 10px 26px;
        }
      }
    }
    .speed_add {
      padding-left: 30px;
      h3 {
        font-size: 14px;
        line-height: 40px;
        font-weight: bold;
        color: #5c5e5c;
      }
      div {
        margin-bottom: 20px;
        .el-input {
          width: 200px;
          height: 30px;
          margin-right: 10px;
          .el-input__inner {
            width: 100%;
            height: 100%;
            line-height: 30px;
          }
        }
        .el-button {
          padding: 7px 18px;
        }
      }
    }
  }
}
</style>



