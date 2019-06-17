<template>
  <div v-cloak>
    <!-- 商品详情页 -->
    <!-- 面包屑 -->
    <div class="crumbs">
      <mybreadxie></mybreadxie>
    </div>
    <!-- 商品 -->
    <div class="detail-main">
      <el-row>
        <el-col :span="7">
          <div class="grid-content bg-purple img-box">
            <div class="commodity-img">
              <img-zoom
                :src="setCommodityData.picPath"
                width="300"
                height="300"
                bigsrc="setCommodityData.picPath"
                :configs="configs"
              ></img-zoom>
            </div>
            <!-- 图片切换模块 -->
            <div class="thum_cont">
              <a
                href="javascript:;"
                class="switchover"
                v-for="(item,index) in imgArr"
                :key="index"
                :class="{active:imgIsShow === index}"
                @click="atPresent(index)"
              >
                <img :src="item.pic" alt>
              </a>
              <a href="javascript:;" @click="last">
                <i class="el-icon-arrow-left arrows left"></i>
              </a>
              <a href="javascript:;" @click="next">
                <i class="el-icon-arrow-right arrows right"></i>
              </a>
            </div>
            <div class="reminder">
              <p>温馨提醒：图片仅供参考，商品以实物为准</p>
            </div>
            <div class="collect">
              <a href="javascript:;" @click="collectBtn()">
                <i class="el-icon-star-off"></i>收藏
              </a>
              <a href="javascript:;">
                <i class="el-icon-copy-document"></i>对比
              </a>
            </div>

            <!-- 未登录弹出框 -->
            <el-dialog
              title="提示"
              :visible.sync="dialogVisible"
              width="30%"
              :before-close="loginPromptBox"
            >
              <span>您还没登录，请登录后再收藏。是否登录？</span>
              <span slot="footer" class="dialog-footer">
                <el-button type="primary" @click="gotoLogin">确 定</el-button>
                <el-button @click="dialogVisible = false">取 消</el-button>
              </span>
            </el-dialog>
          </div>
        </el-col>
        <el-col :span="12">
          <div class="grid-content bg-purple-light information">
            <div class="title">
              <h3>{{setCommodityData.name}}</h3>
              <span>知名品牌</span>
            </div>
            <div class="activity-description">
              <a href="javascript:;">
                <i class="all">全站</i>
                <i class="activity">活动</i>
                <span>全场9.9包邮！下单再送京东E卡！了解详情＞＞＞</span>
              </a>
              <a href="javascript:;">
                <i class="all">全站</i>
                <i class="activity">活动</i>
                <span>全场9.9包邮！下单再送京东E卡！了解详情＞＞＞</span>
              </a>
              <a href="javascript:;">
                <i class="all">全站</i>
                <i class="activity">活动</i>
                <span>全场9.9包邮！下单再送京东E卡！了解详情＞＞＞</span>
              </a>
            </div>
            <div class="tax">
              <ul>
                <li>
                  <p>含增值税</p>
                </li>
                <li v-for="i in priceGradientData" :key="i.id">
                  <p>{{i.count}}+:&nbsp;&nbsp;</p>
                  <span>
                    ￥
                    <i>{{i.price}}</i>/个
                  </span>
                </li>
              </ul>
            </div>
            <div class="select-num">
              <ul>
                <li class="inventory">
                  <span>
                    <i>现货库存：</i>
                    <i>{{setCommodityData.stock}}</i> 个
                  </span>
                  <span>
                    <i>近期销量：</i>
                    <i>{{setCommodityData.sale}}</i> 个
                  </span>
                  <span>
                    <a href="javascript:;">可订货</a>
                    <i class="el-icon-question"></i>
                  </span>
                </li>
                <li class="inventory">
                  <span>
                    <i>购买数量：</i>
                    <el-input-number
                      v-model="buyNum"
                      @change="howMany"
                      :min="1"
                      :max="setCommodityData.stock"
                      size="mini"
                    ></el-input-number>✖
                    <i class="price">￥{{changePrice}}</i> =
                    <i class="price">￥{{(changePrice*buyNum).toFixed(2)}}</i>
                    <i class="total">(总价)</i>
                  </span>
                </li>
                <li class="inventory">
                  <span>
                    <i>按整包装：</i>
                    <input
                      type="text"
                      oninput="value=value.replace(/[^\d]/g,'')"
                      style=" text-align:center"
                      class="package_quantity"
                    >
                    {{setCommodityData.unit}} （1{{setCommodityData.unit}}有{{setCommodityData.unitNum}}个）
                  </span>
                </li>
              </ul>
              <div class="buy-num"></div>
              <div class="pack"></div>
            </div>
            <div class="add-cart">
              <el-button type="warning" @click="addShoppingCart">加入购物车</el-button>
            </div>
          </div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content bg-purple">
            <div class="product_brand">
              <div class="product_brand_con">
                <div class="img_box">
                  <img
                    src="https://alimg.szlcsc.com/upload/public/brand/logo/20180619/0DB6BD535BF2C3C5FFF49C46AB22836C.jpg"
                  >
                </div>
                <div class="item">
                  <span
                    class="color9a9a9a inline_block layout_left"
                  >品&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;牌：</span>
                  <span class="fw_b inline_block">
                    <a
                      href="https://list.szlcsc.com/brand/450.html"
                      target="_blank"
                      class="trademark"
                    >{{setCommodityData.brandName}}</a>
                  </span>
                </div>
                <div class="item">
                  <span class="color9a9a9a inline_block layout_left">厂家型号：</span>
                  <span class="inline_block">{{setCommodityData.productType}}</span>
                </div>
                <div class="item">
                  <span class="color9a9a9a">商品编号：</span>
                  <span>{{setCommodityData.productSn}}</span>
                </div>
                <div class="item">
                  <span class="color9a9a9a layout_left inline_block">封装规格：</span>
                  <span class="layout_right inline_block">{{setCommodityData.productSpecifications}}</span>
                </div>
                <div class="item">
                  <span class="color9a9a9a">数据手册：</span>

                  <a
                    href="javascript:;"
                    class="color444"
                    id="downloadFile"
                    param-click="EE19BB4A4301AF90296C67311B688FC3"
                  >
                    <i class="el-icon-folder-opened"></i>
                    <span>下载文件</span>
                  </a>
                </div>
                <div class="item">
                  <span class="color9a9a9a">商品毛重：</span>
                  <span>{{setCommodityData.weight}} KG</span>
                </div>
              </div>
              <div class="product_brand_tool"></div>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>

    <!-- 商品介绍 -->
    <div class="details">
      <div class="header">
        <div class="introduce-tab">
          <a href="javascript:;" class="active">
            商品介绍
            <span class="left"></span>
          </a>
          <a href="javascript:;">
            数据手册PDF
            <span class="right"></span>
          </a>
        </div>
        <div class="correct">
          <i class="el-icon-warning"></i>
          <span>如果您发现商品信息不准确，</span>
          <a href="javascript:;">欢迎纠错</a>
        </div>
      </div>
      <div class="main">
        <div class="introduce-title">
          <span></span>
          <i>商品介绍</i>
        </div>
        <div class="texture">
          <p>
            材质：
            <i>X9R</i>
          </p>
        </div>
        <div class="likeness">
          <p>
            找到类似商品：
            <i>9640</i> 种
          </p>
          <a href="javascript:;">查看类似商品</a>
        </div>
        <div class="attribute-table">
          <el-table ref="multipleTable" tooltip-effect="dark" style="width: 100%">
            <el-table-column label="属性" width="800"></el-table-column>
            <el-table-column label="参数值"></el-table-column>
            <el-table-column width="100"></el-table-column>
          </el-table>
        </div>
        <div class="look-btn">
          <el-button type="primary" size="small">查看类似商品</el-button>
        </div>
        <div class="introduce-title">
          <span></span>
          <i>数据手册PDF</i>
        </div>
        <div class="content">
          <a href="javascript:;">0402B393K160CT数据手册PDF下载</a>
          <div class="pdf">
            <img
              src="https://alimg.szlcsc.com/upload/public/pdf/image/20190509/C384814_3EAAFEC3E2DC68F44520744676E6B6C2/C384814_3EAAFEC3E2DC68F44520744676E6B6C2_0001.png"
              alt
            >
            <span class="el-icon-caret-left left"></span>
            <span class="el-icon-caret-right right"></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import imgZoom from "vue2.0-zoom";
import { decode } from "punycode";
export default {
  inject: ["reload"],
  data() {
    return {
      // 放大镜配置
      configs: {
        width: 500,
        height: 500,
        maskWidth: 150,
        maskHeight: 150,
        maskColor: "#CFCFCF",
        maskOpacity: 0.3
      },
      // 图片切换
      imgIsShow: -1,
      // 登录提示框
      dialogVisible: false,
      categoryId: 0,
      productId: 0,
      setCommodityData: {},
      imgArr: [],
      buyNum: 1,
      changePrice: 0,
      // 价格梯度
      priceGradientData: []
    };
  },
  components: { imgZoom },

  created() {
    this.atPresent();
    this.categoryId = this.$route.query.categoryId;
    this.productId = this.$route.query.productId;
    this.getCommodityData(this.categoryId, this.productId);
  },

  methods: {
    // 获取商品信息
    async getCommodityData(id1, id2) {
      let res = await this.$http.get(
        `/api/produce/getProductDetail?categoryId=${id1}&productId=${id2}`
      );
      this.setCommodityData = res.data.pmsProduct;
      this.imgArr = this.setCommodityData.albumPics.split(",");
      this.priceGradientData = res.data.productLadderList;
      if (this.buyNum <= this.priceGradientData[0].count) {
        this.changePrice = this.priceGradientData[0].price;
      }
    },

    // 当前选中的图片
    atPresent(index, e) {
      this.imgIsShow = index;
      console.log(this.imgIsShow);
      if (!this.imgIsShow) {
        index = 0;
        this.imgIsShow = index;
      }
    },

    // 上一张
    last(index, e) {
      this.imgIsShow--;
    },

    next() {
      this.imgIsShow++;
    },

    // 商品价格
    howMany(value) {
      this.priceGradientData.forEach((pri, index) => {
        if (this.buyNum >= this.priceGradientData[index].count) {
          this.changePrice = this.priceGradientData[index].price;
        } else if (this.buyNum <= this.priceGradientData[0].count) {
          this.changePrice = this.priceGradientData[0].price;
        }
      });
    },

    // 加入购物车
    async addShoppingCart(index) {
      let data = {
        brandName: this.setCommodityData.brandName,
        picPath: this.setCommodityData.pic,
        productName: this.setCommodityData.name,
        productNumber: this.buyNum,
        productId: this.setCommodityData.id,
        productPrice: this.changePrice,
        productSpecifications: this.setCommodityData.productSpecifications,
        productType: this.setCommodityData.productType,
        productSn: this.setCommodityData.productSn,
        unit: this.setCommodityData.unit,
        unitNum: this.setCommodityData.unitNum,
        stock: this.setCommodityData.stock
      };

      let res = await this.$http.post("/api/member/cart/add", data);
      this.reload();
      this.$message({
        type: "success",
        message: "已成功加入购物车"
      });
    },

    // 收藏商品
    async collectBtn() {
       if (window.sessionStorage.getItem("token")) {
        // 调用接口
        let res = await this.$http.post(
          `/api/member/collection/addProduct?ids=${this.$route.query.productId}`
        );
        // 判断该商品是否已加入收藏;
        if (res.data === 0) {
          this.$message({
            type: "info",
            message: "当前收藏夹已有该商品！"
          });
        } else {
          this.$alert(
            `<strong><div class='add_success'>
      <span class='el-icon-success'></span>
      <div>
        <p class='title'>该商品已经成功添加到了您的收藏夹</p>
        <p>
        <a href='http://localhost:8080/#/shopping/member/favorite'>查看我的收藏夹</a></p>
      </div>
    </div></strong>`,
            "我的收藏",
            {
              dangerouslyUseHTMLString: true
            }
          );
        }
      } else {
        this.$confirm("您还没登录，请登录后再收藏。, 是否现在登录?", "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        })
          .then(() => {
            this.$router.push("/login");
          })
          .catch(() => {});
      }
    },

    loginPromptBox(done) {
      this.$confirm("确认关闭？")
        .then(_ => {
          done();
        })
        .catch(_ => {});
    },

    gotoLogin() {
      this.dialogVisible = false;
      this.$router.push("/login");
    }
  }
};
</script>
<style lang="less" scope>
.detail-main {
  margin-top: 20px;
  .img-box {
    text-align: center;

    // 放大镜
    .commodity-img {
      #_magnifier_layer {
        position: absolute;
        z-index: 9999;
        background: #f9f9f9;
      }
      ._magnifier {
        position: relative;
        display: inline-block;
      }
      ._magnifier img {
        vertical-align: middle;
      }
      ._magnifier_zoom {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 10;
        pointer-events: none;
      }
    }

    // 走马灯
    .thum_cont {
      margin-top: 8px;
      display: flex;
      justify-content: center;
      position: relative;
      .switchover {
        display: flex;
        width: 43px;
        height: 43px;
        margin: 0 8px;
        border: 2px solid transparent;
        &.active {
          border: 2px solid #0093e6;
        }
        img {
          display: block;
          width: 100%;
          height: 100%;
        }
      }

      .arrows {
        position: absolute;
        font-size: 30px;
        font-weight: bold;
        top: 10px;
        &.left {
          left: 18px;
        }
        &.right {
          right: 18px;
        }
        &:hover {
          color: #0093e6;
        }
      }
    }

    .reminder {
      padding-top: 6px;
      text-align: center;
      p {
        color: #9a9a9a;
        font-size: 12px;
      }
    }

    .collect {
      display: inline-block;
      vertical-align: middle;
      padding-right: 15px;
      color: #444;
      margin-top: 15px;
      margin-left: -170px;
      a {
        padding-right: 15px;
        color: #444;
        i {
          font-size: 16px;
          color: #ff8c00;
          display: inline-block;
          vertical-align: middle;
        }
      }
    }
  }

  // 商品信息
  .information {
    .title {
      display: flex;
      h3 {
        font-size: 16px;
        line-height: 24px;
        font-weight: bold;
        color: #000;
        margin-right: 10px;
      }
      span {
        color: #0093e6;
        border: 1px solid #0093e6;
        padding: 2px 6px;
        display: inline-block;
        vertical-align: text-top;
      }
    }
    .activity-description {
      margin-top: 20px;
      padding-top: 10px;
      border-top: 1px solid #e9e9e9;
      a {
        display: block;
        margin: 5px 0;
        .all {
          background-color: #ff8c00;
          border-radius: 0 6px 6px 0;
          color: #fff;
          padding: 2px 4px;
        }
        .activity {
          border: 1px solid #ff8c00;
          border-radius: 6px 0 0 6px;
          color: #ff8c00;
          padding: 1px 4px;
        }
        span {
          color: #0093e6;
        }
      }
    }
    // 增值税
    .tax {
      margin-top: 30px;
      ul {
        li {
          height: 26px;
          color: #444;
          p {
            float: left;
            width: 40%;
            text-align: right;
          }
          span:nth-of-type(1) {
            float: left;
            color: #ff7900;
          }
          span:nth-of-type(2) {
            color: #9a9a9a;
          }
        }
      }
    }
    // 购买填写信息
    .select-num {
      ul {
        .inventory {
          line-height: 40px;
          span {
            i {
              &:nth-of-type(1) {
                color: #9a9a9a;
              }
            }
            .el-icon-question {
              font-size: 20px;
            }
            .price {
              color: #ff7900;
              font-size: 14px;
              font-weight: bold;
            }
            .total {
              color: #ff7900;
              margin-left: 10px;
            }
            .package_quantity {
              height: 22px;
              width: 128px;
              line-height: 26px;
              border: 1px solid #dcdfe6;
            }
          }
        }
      }
    }
    //加入购物车
    .add-cart {
      padding-top: 20px;
      border-top: 1px solid #e9e9e9;
    }
  }

  // 品牌信息
  .product_brand {
    float: right;
    .img_box {
      box-sizing: border-box;
      width: 100%;
      height: 70px;
      text-align: center;
      border: 1px solid #e9e9e9;
      img {
        margin-top: 8px;
      }
    }
    .item {
      margin-top: 5px;
      .color9a9a9a {
        color: #9a9a9a;
      }
      .inline_block {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        width: 65%;
        .trademark {
          font-weight: bold;
          color: #444;
          &:hover {
            color: #0093e6;
          }
        }
        .layout_left {
          width: 60px;
        }
      }
      .el-icon-folder-opened {
        color: #0093e6;
        font-size: 20px;
      }
    }
  }
}

// 商品介绍
.details {
  .header {
    display: flex;
    justify-content: space-between;
    border-bottom: 2px solid #0093e6;
    .introduce-tab {
      text-align: center;
      a {
        display: inline-block;
        font-size: 16px;
        color: #444;
        margin: 10px 30px;
        position: relative;
        &.active {
          color: #0093e6;
        }
        span {
          position: absolute;
          width: 0;
          height: 0;
          border-left: 6px solid transparent;
          border-right: 6px solid transparent;
          border-bottom: 6px solid #0093e6;
          left: 25px;
          bottom: -10px;
          &.right {
            left: 38px;
          }
        }
      }
    }
    .correct {
      line-height: 38px;
      margin: 0 30px;
      .el-icon-warning {
        color: #ff7900;
        font-size: 20px;
        line-height: 20px;
      }
      a {
        color: #0093e6;
        text-decoration: underline;
      }
    }
  }

  .main {
    padding: 30px;
    .introduce-title {
      text-align: center;
      margin: 30px 0;
      i {
        font-size: 16px;
        line-height: 16px;
        font-weight: bold;
        color: #686868;
      }
    }

    .texture {
      font-size: 14px;
      line-height: 40px;
    }

    .likeness {
      box-sizing: border-box;
      padding: 0 16px;
      height: 38px;
      line-height: 38px;
      background: #fdf2e9;
      font-size: 14px;
      p {
        display: inline-block;
        i {
          color: #ff7900;
          font-weight: bold;
        }
      }
      a {
        font-weight: bold;
        color: #0093e6;
        margin-left: 30px;
      }
    }

    .attribute-table {
      .el-table {
        .has-gutter {
          tr {
            th {
              color: #333;
              text-align: center;
            }
          }
        }
      }
    }

    .look-btn {
      text-align: right;
    }

    .content {
      text-align: center;
      & > a {
        font-size: 16px;
        color: #0093e6;
        text-decoration: underline;
      }
      .pdf {
        margin: 20px auto;
        border: 20px solid #cccccc;
        width: 800px;
        height: 1035px;
        position: relative;
        img {
          width: 100%;
          height: 100%;
        }
        span {
          color: #fff;
          font-size: 50px;
          background-color: #7f7f7f;
          position: absolute;
          top: 480px;
          &.right {
            right: 0;
          }
          &.left {
            left: 0;
          }
          &:hover {
            background-color: #0093e6;
          }
        }
      }
    }
  }
}

// 弹出框样式
.add_success {
  display: flex;
  justify-content: center;
  .el-icon-success {
    font-size: 60px;
    color: #71c000;
    margin-right: 20px;
  }
  .title {
    font-size: 18px;
    color: #71c000;
    line-height: 30px;
  }
  a {
    color: #000;
    line-height: 20px;
  }
}
</style>