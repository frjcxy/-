<template>
  <div id="list_details" v-cloak>
    <!-- 商品列表页 -->
    <!-- 面包屑 -->
    <div class="crumbs">
      <mybreadxie></mybreadxie>
    </div>
    <el-row class="main-box">
      <!-- 菜单 -->
      <el-col :span="4" class="catalog">
        <div class="grid-content bg-purple">
          <el-menu default-active="2" class="el-menu-vertical-demo" unique-opened>
            <el-submenu
              v-for="(item,index) in $store.state.setCategoryData"
              :key="index"
              :index="index+''"
            >
              <template slot="title">
                <span @click="thirdCategory(item.oneId)">{{item.oneName}}</span>
              </template>
              <el-submenu v-for="(it,index2) in item.productCategoriesTwo" :key="index2" :index="it.twoId+''">
                <template slot="title">
                  <router-link :to="`/shopping/listdetails/${it.twoId}`">{{it.twoName}}</router-link>
                </template>
                <el-menu-item
                  v-for="(i,index2) in it.productCategoriesThree"
                  :key="index2"
                  :index="i.id+''"
                >
                  <a @click="toDoCommodityList(i.id)">{{i.name}}</a>
                </el-menu-item>
              </el-submenu>
            </el-submenu>
          </el-menu>
        </div>
      </el-col>
      <el-col :span="18" class="commodity">
        <div class="grid-content bg-purple-light">
          <!-- 商品分类标题 -->
          <div class="title">
            当前
            <i class="name">" {{commodityTitle}} "</i>共
            <i class="num">{{total}}</i>件相关商品
          </div>
          <div class="filtrate_module">
            <ul class="filtrate_list">
              <li class="filtrate" v-for="(item,index) in getProductAttriData" :key="index">
                <h4>{{item.pmsProductAttribute.name}}</h4>
                <div class="filtrate_search">
                  <el-input></el-input>
                  <i class="el-icon-search"></i>
                  <ul>
                    <li
                      v-for="(it,index2) in item.pmsProductAttributeValues"
                      :key="index2"
                      @click="setList(it)"
                    >{{it.value}}</li>
                  </ul>
                </div>
              </li>
            </ul>
            <!-- 筛选 -->
            <div class="checked">
              <span>当前选择：</span>
              <div class="tagbox">
                <el-tag
                  class="tag"
                  v-for="(tag,index3) in valueList"
                  :key="index3"
                  closable
                  @close="clickTagOut(tag)"
                  :type="tag.type"
                >{{tag.name}}</el-tag>
              </div>
            </div>
            <!-- 筛选按钮模块 -->
            <div class="screen-out">
              <el-button type="warning" plain size="mini" @click="delFilter">清除筛选</el-button>
              <el-button type="primary" size="mini" @click="applyFilter">应用筛选</el-button>
              <span class="result">
                筛选结果：
                <i>{{total}}</i>
              </span>
            </div>
          </div>

          <!-- 商品状态模块 -->
          <div class="commodity-state">
            <table border="1">
              <tr>
                <th @click="synthesizeSort">综合排序</th>
                <th @click="repertorySort">库存</th>
                <th @click="priceSort">价格</th>
                <th @click="amountSort">数量</th>
                <!-- 页码 -->
                <th class="pages">
                  <span class="current-page">{{this.sendData.pageNum}}</span>/
                  <span class="total-page">{{Math.ceil(this.total/this.sendData.pageSize)}}</span>
                </th>
                <th @click="pageUp">
                  <i class="el-icon-arrow-left"></i>
                </th>
                <th @click="pageDn">
                  <i class="el-icon-arrow-right"></i>
                </th>
              </tr>
            </table>
            <div class="price-screening">
              <el-input placeholder="请输入关键字" class="keyword" size="mini"></el-input>&nbsp;&nbsp;
              <span>价格筛选 (小批量) &nbsp;: &nbsp;&nbsp;</span>
              <el-input size="mini" class="time"></el-input>&nbsp;&nbsp;-&nbsp;&nbsp;
              <el-input size="mini" class="time"></el-input>
              <a href="#" class="search-btn">在结果中搜索</a>
              <el-checkbox class="cash-commodity">现货商品</el-checkbox>
              <div class="conform">
                符合条件商品:
                <i class="num">{{total}}</i>
              </div>
            </div>
          </div>

          <!-- 商品信息列表 -->
          <div class="commodity-message">
            <ul class="message-list">
              <li v-for="(item,index) in commodityData" :key="index">
                <el-row>
                  <el-col :span="3">
                    <div class="grid-content bg-purple img-box">
                      <div class="img_small_box">
                        <div @mouseover="mouseOver(index)" @mouseleave="mouseLeave(index)">
                          <a href="javascript:;">
                            <img :src="item.pmsProduct.pic" alt>
                          </a>
                          <div class="big-img" v-show="bigImgShow == index">
                            <a href="javascript:;">
                              <img :src="item.pmsProduct.pic" alt>
                            </a>
                            <div class="img-list">
                              <el-carousel :interval="4000" type="card" height="100px">
                                <el-carousel-item v-for="it in imgArr" :key="it">
                                  <img :src="it" alt>
                                </el-carousel-item>
                              </el-carousel>
                            </div>
                            <p>温馨提醒：图片仅供参考，商品以实物为准</p>
                            <span class="triangle"></span>
                          </div>
                        </div>
                        <a href="javascript:;" class="operation">对比</a>
                        <a
                          href="javascript:;"
                          class="operation"
                          @click="openCollectBox(item.pmsProduct.id)"
                        >收藏</a>
                      </div>
                    </div>
                  </el-col>
                  <el-col :span="11">
                    <div class="grid-content bg-purple-light introduce">
                      <router-link
                        :to="{path:'/shopping/particulars',query:{categoryId:`${item.pmsProduct.productCategoryId}`,productId:`${item.pmsProduct.id}`}}"
                      >{{item.pmsProduct.name}}</router-link>
                      <ul>
                        <li>
                          商品编号：
                          <i>{{item.pmsProduct.productSn}}</i>
                        </li>
                        <li>
                          品牌：
                          <i>{{item.pmsProduct.brandName}}</i>
                        </li>
                        <li>
                          封装规格：
                          <i>{{item.pmsProduct.productSpecifications}}</i>
                        </li>
                        <li>
                          型号：
                          <i>{{item.pmsProduct.productType}}</i>
                        </li>
                      </ul>
                      <p class="handbook">
                        <i class="el-icon-folder-opened"></i>
                        数据手册
                      </p>
                      <span class="famous">知名品牌</span>
                    </div>
                  </el-col>
                  <el-col :span="5">
                    <div class="grid-content bg-purple tax">
                      <ul>
                        <li>
                          <p>含增值税</p>
                        </li>
                        <li v-for="(it,index2) in item.productLadderList" :key="index2">
                          <p>{{it.count}}+:&nbsp;&nbsp;</p>
                          <span>
                            ￥
                            <i>{{it.price}}</i>
                          </span>
                        </li>
                      </ul>
                    </div>
                  </el-col>
                  <el-col :span="5">
                    <div class="grid-content bg-purple-light buy">
                      <ul>
                        <li>
                          1袋有
                          <i>1000</i>个
                        </li>
                        <li>
                          近期约售:
                          <i>{{item.pmsProduct.sale}}</i>个
                        </li>
                        <li>
                          库存:
                          <i>{{item.pmsProduct.stock}}</i>个
                        </li>
                        <li>可订货</li>
                        <li>
                          <el-button
                            type="warning"
                            size="medium"
                            @click="showDialog(item.pmsProduct.id)"
                          >我要买</el-button>
                        </li>
                      </ul>
                    </div>
                  </el-col>
                </el-row>
                <!-- 点击按钮【我要买】弹窗 -->
                <el-dialog title="添加购物车" :visible.sync="buyDialogVisible" width="40%" :key="index">
                  <div class="content">
                    <div class="left">
                      <ul>
                        <li>
                          <span>商品名称：</span>
                          <i>{{commodityDetailsData.name}}</i>
                        </li>
                        <li>
                          <span>原厂型号：</span>
                          <i>{{commodityDetailsData.productSn}}</i>
                        </li>
                        <li>
                          <span>品&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;牌：</span>
                          <i>{{commodityDetailsData.brandName}}</i>
                        </li>
                        <li>
                          <span>封装规格：</span>
                          <i>{{commodityDetailsData.productSpecifications}}</i>
                        </li>
                        <li>
                          <span>现货库存：</span>
                          <i>{{commodityDetailsData.stock}}个</i>
                        </li>
                      </ul>
                    </div>
                    <div class="right">
                      <ul>
                        <li>含增值税</li>
                        <li v-for="(i,num) in priceGradientData" :key="num">
                          <span>{{i.count}}+ :</span>
                          <i>￥{{i.price}}</i>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <span slot="footer" class="dialog-footer">
                    <div></div>
                    <ul>
                      <li>
                        <span>购买数量：</span>
                        <input
                          min="1"
                          :max="commodityDetailsData.stock"
                          type="number"
                          v-model="buyNum"
                          @input="howMany"
                        > ✖
                        <i>￥{{changePrice}}</i> =
                        <i>￥{{(buyNum*changePrice).toFixed(2)}}</i>
                      </li>
                      <li>
                        <span>购买数量：</span>
                        <input type="number">
                        <span>
                          盒（1盒有）
                          <i>{{2500}}</i>个
                        </span>
                      </li>
                      <li class="add_shop_cart">
                        <el-button type="warning" @click="addToShopCart()">加入购物车</el-button>
                      </li>
                    </ul>
                  </span>
                </el-dialog>
              </li>
            </ul>
          </div>

          <!-- 分页 -->
          <div class="pages">
            <el-pagination
              @size-change="sizeChange"
              @current-change="currentChange"
              :current-page="currentPage4"
              :page-sizes="[5, 10, 15, 20]"
              :page-size="sendData.pageSize"
              layout="total,sizes, prev, pager, next, jumper"
              :total="total"
            ></el-pagination>
          </div>

          <!-- 海外代购 -->
          <div class="agent-shopping">
            <el-button type="primary">海外代购</el-button>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import Cookies from "js-cookie";
export default {
  inject: ["reload"],
  data() {
    return {
      // showAdd: false,
      bigImgShow: null,
      // 获取商品列表
      commodityData: [],
      // 商品
      commodityTitle: "",
      // 获取单个商品信息
      commodityDetailsData: {},
      // 商品图片
      imgArr: [],
      // 价格梯度
      priceGradientData: [],
      // 价格
      changePrice: 0,
      currentPage4: 1,
      categoryData: [],
      menuData: [],
      menuSecondData: [],
      // 对话框
      buyDialogVisible: false,
      // 根据id获取商品属性
      getProductAttriData: [],
      // 购买数量
      buyNum: 1,
      //属性
      valueList: [],
      // 页码页容量
      sendData: {
        pageNum: 1,
        pageSize: 5
      },
      //总条数
      total: 0
    };
  },
  created() {
    this.getCommodityListData();
    this.bigImgShow = false;
    this.getCrumbsData();
    this.getFilterProductAttriData();
    this.mouseLeave();
    this.currentPage4 = Number(localStorage.getItem("pagination")) || 1;
    this.currentChange(this.currentPage4);
  },
  beforeUpdate() {
    // 解决翻页后刷新不回到第一页问题
    localStorage.setItem("pagination", this.currentPage4);
  },
  beforeDestroy() {
    localStorage.setItem("pagination", "1");
  },

  methods: {
    // 左侧菜单导航栏
    getCrumbsData() {
      let id = this.$route.params.id;
      this.menuData = this.$store.state.tabData;
    },
    // 获取二三级分类
    async thirdCategory(id) {
      let res = await this.$http.get(
        `/api/home/getProductCategoryTwoAndThree/${id}`
      );
      this.categoryData = res.data;
    },
    // 商品价格
    howMany() {
      this.priceGradientData.forEach((pri, index) => {
        if (this.buyNum >= this.priceGradientData[index].count) {
          this.changePrice = this.priceGradientData[index].price;
        } else if (this.buyNum <= this.priceGradientData[0].count) {
          this.changePrice = this.priceGradientData[0].price;
        }
      });
    },

    // 商品排序
    synthesizeSort() {
      // return this.commodityData.sort(productLadderList[0].price)
    },

    repertorySort() {},

    priceSort() {
      this.sortFlag = this.sortFlag == 1 ? -1 : 1;
      this.sendData.pageNum = 1;
      this.getCommodityListData();
    },
    amountSort() {},

    // 列表前翻页
    pageUp() {
      --this.sendData.pageNum;
      if (this.sendData.pageNum <= 1) {
        this.sendData.pageNum = 1;
        this.getCommodityListData();
      }
    },
    pageDn() {
      ++this.sendData.pageNum;
      if (
        this.sendData.pageNum >= Math.ceil(this.total / this.sendData.pageSize)
      ) {
        this.sendData.pageNum = Math.ceil(this.total / this.sendData.pageSize);
        this.getCommodityListData();
      }
    },

    // 列表后翻页
    sizeChange(size) {
      this.sendData.pageSize = size;
      this.getCommodityListData();
      // document.documentElement.scrollTop = 550; //翻页时回到商品列表顶部
    },

    currentChange(current) {
      this.loading = true;
      this.currentPage4 = current;
      this.sendData.pageNum = current;
      this.getCommodityListData();
      // document.documentElement.scrollTop = 550;
    },
    // 获取商品列表数据
    async getCommodityListData() {
      let id = this.$route.params.id;
      let res = await this.$http.get(
        `/api/produce/productLadder/${id}?pageSize=${
          this.sendData.pageSize
        }&pageNum=${this.sendData.pageNum}`
      );

      res.data.pageData.forEach(i => {
        this.imgArr = i.pmsProduct.albumPics.split(",");
      });
      this.commodityData = res.data.pageData;
      this.commodityTitle = this.commodityData[0].pmsProduct.subTitle;
      this.total = res.data.totalCount;
    },

    // 编程式导航
    toDoCommodityList(id) {
      this.$router.push(`/shopping/listdetails/${id}`);
      this.getCommodityListData();
    },

    // 根据id获取商品属性
    async getFilterProductAttriData() {
      let id = this.$route.params.id;
      let res = await this.$http.get(
        `/api/produce/getProductAttributeByCategoryId?productCategoryId=${id}`
      );

      this.getProductAttriData = res.data;
    },

    // 给每个属性添加事件
    async setList(item) {
      let data = item.value;
      this.valueList.push({ name: data });
      let res = await this.$http.get(
        `/api/produce/filterProductAttribute?value=${item.value}`
      );
    },
    // 点击标签页删除
    clickTagOut(name) {
      this.valueList.splice(this.valueList.indexOf(name), 1);
    },

    // 清除筛选
    delFilter() {
      this.valueList = [];
    },

    //获取筛选后的商品列表
    applyFilter() {
      this.valueList.forEach(async item => {
        let res = await this.$http.get(
          `/api/produce/productLadder/attribute/${
            item.name
          }?pageSize=10&pageNum=1`
        );
        this.commodityData = res.data.pageData;
        this.total = res.data.totalCount;
      });
    },

    // 鼠标移入移出事件
    mouseOver(index) {
      this.bigImgShow = index;
    },
    // 移出
    mouseLeave() {
      this.bigImgShow = null;
    },

    // 加入收藏夹
    async openCollectBox(id) {
      if (window.sessionStorage.getItem("token")) {
        // 调用接口
        let res = await this.$http.post(
          `/api/member/collection/addProduct?ids=${id}`
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

    // 获取单个商品信息 // 显示弹窗事件
    async showDialog(id) {
      this.buyDialogVisible = true;
      let categoryId = this.$route.params.id;
      let res = await this.$http.get(
        `/api/produce/getProductDetail?categoryId=${categoryId}&productId=${id}`
      );
      this.commodityDetailsData = res.data.pmsProduct;
      this.priceGradientData = res.data.productLadderList;
      this.changePrice = this.priceGradientData[0].price;
    },

    //加入购物车事件
    async addToShopCart() {
      this.buyDialogVisible = false;
      let data = {
        brandName: this.commodityDetailsData.brandName,
        picPath: this.commodityDetailsData.pic,
        productId: this.commodityDetailsData.id,
        productName: this.commodityDetailsData.name,
        productNumber: this.buyNum,
        productPrice: this.changePrice,
        productSn: this.commodityDetailsData.productSn,
        productSpecifications: this.commodityDetailsData.productSpecifications,
        productType: this.commodityDetailsData.productType,
        unit: this.commodityDetailsData.unit,
        unitNum: this.commodityDetailsData.unitNum,
        stock: this.commodityDetailsData.stock
      };

      // if (window.sessionStorage.getItem("token")) {
      let res = await this.$http.post("/api/member/cart/add", data);
      this.$message({
        type: "success",
        message: "已加入购物车！"
      });

      this.$store.commit("setShoppingCart", res.data);
      this.reload(); //刷新当前页
      // } else {
      //   Cookies.set("shoppingCartData", data);
      //   this.$message({
      //     type: "success",
      //     message: "已加入本地"
      //   });
      // }
    }
  },

  computed: {
    // 筛选后的数量
    checkedData() {
      let num = this.valueList.length;
      return num;
    }
  }
};
</script>
<style lang="less" scope>
#list_details {
  .main-box {
    margin-top: 20px;
    // 目录
    .catalog {
      width: 240px;
      .el-menu {
        background-color: #eee;
        & > li {
          span {
            display: block;
            width: 100%;
            height: 100%;
          }
        }
      }
    }
    // 商品
    .commodity {
      margin-left: 15px;
      // 商品分类标题
      span.title {
        font-size: 14px;
        color: #9a9a9a;
        .name {
          color: #666;
        }
        .num {
          color: #ff7800;
        }
      }

      .filtrate_module {
        margin: 10px 0;
        border: 1px solid #ccc;
        .filtrate_list {
          overflow-y: scroll;
          height: 250px;
          width: 100%;
          white-space: nowrap;
          .filtrate {
            width: 150px;
            padding: 0 5px;
            display: inline-block;
            h4 {
              font-size: 14px;
              font-weight: bold;
              line-height: 40px;
              color: #444;
            }
            .filtrate_search {
              position: relative;
              border: 1px solid #ccc;
              .el-input {
                .el-input__inner {
                  height: 24px;
                  border: none;
                  border-radius: 0;
                  border-bottom: 1px solid #ccc;
                  line-height: 24px;
                }
              }
              .el-icon-search {
                display: block;
                width: 24px;
                height: 24px;
                line-height: 24px;
                text-align: center;
                font-size: 14px;
                cursor: pointer;

                position: absolute;
                right: 0px;
                top: 0;
              }
              ul {
                width: 100%;
                height: 140px;
                overflow-y: scroll;
                li {
                  cursor: pointer;
                  line-height: 24px;
                  padding-left: 10px;
                  &:hover {
                    background-color: #409eff;
                    color: #fff;
                  }
                }
              }
            }
          }
        }
        // 筛选tag
        .checked {
          line-height: 35px;
          margin-top: 10px;
          padding-left: 20px;
          display: flex;
          & > span {
            font-size: 14px;
            font-weight: bold;
            display: inline-block;
            width: 80px;
          }
          .tagbox {
            flex: 1;
            .tag {
              margin: 0 2px;
              padding: 0 10px;
              word-wrap: break-word;
              word-break: break-all;
              overflow: hidden;
            }
          }
        }
        // 筛选按钮模块
        .screen-out {
          text-align: right;
          padding: 5px 50px;
          .result {
            margin-left: 20px;
            i {
              color: #ff7800;
              font-size: 14px;
              font-weight: bold;
            }
          }
        }
      }

      // 商品状态模块
      .commodity-state {
        margin-top: 10px;
        table {
          tr {
            th {
              border: 1px solid #ccc;
              padding: 10px 20px;
              font-size: 14px;
              cursor: pointer;
              &:hover {
                color: #fff;
                background-color: #409eff;
              }
              &.pages {
                width: 442px;
                text-align: right;
                padding-right: 10px;
                cursor: default;
                &:hover {
                  color: #000;
                  background-color: #fff;
                }
                .current-page {
                  color: #409eff;
                  font-weight: bold;
                }
              }
              i {
                font-size: 20px;
              }
            }
          }
        }
        .price-screening {
          margin: 10px 0;
          display: flex;
          align-items: center;
          .keyword {
            width: 180px;
          }

          .time {
            width: 80px;
          }

          .search-btn {
            padding: 4px 12px;
            margin: 0 30px 0 10px;
            background-color: #b7b7b7;
            color: #fff;
            &:hover {
              background-color: #0093e6;
            }
          }
          .cash-commodity {
            padding-right: 60px;
            .el-checkbox__inner {
              border: 1px solid #ccc;
            }
          }
          .conform {
            text-align: right;
            color: #f00;
            .num {
              font-weight: bold;
              font-size: 14px;
            }
          }
        }
      }

      // 商品信息列表
      .commodity-message {
        .message-list {
          & > li {
            padding: 10px;
            border-top: 1px solid #ccc;
            border-bottom: 1px solid #ccc;
            &:hover {
              background-color: #ebebeb;
            }
            // 商品图片
            .img-box {
              width: 100px;
              height: 200px;
              text-align: center;
              margin-top: 10px;
              position: relative;
              .img_small_box {
                .operation {
                  font-size: 8px;
                  display: inline-block;
                  padding: 1px 8px;
                  border: 1px solid #ccc;
                  margin: 10px 2px 0;

                  &:hover {
                    color: #ee7600;
                    border: 1px solid #ee7600;
                  }
                }
                img {
                  display: block;
                  width: 100%;
                  height: 100px;
                  border: 1px solid #eee;
                }
              }

              .big-img {
                z-index: 999;
                width: 340px;
                border: 1px solid #ccc;
                box-sizing: border-box;
                box-shadow: 4px 4px 4px #ccc;
                padding: 10px;
                background-color: #fff;
                position: absolute;
                top: -120px;
                left: 110px;
                a {
                  display: block;
                  width: 300px;
                  height: 300px;
                  margin: auto;
                  img {
                    width: 100%;
                    height: 100%;
                  }
                }

                .img-list {
                  margin-top: 10px;
                  img {
                    display: inline-block;
                    width: 50px;
                    height: 50px;
                    margin: 0 4px;
                    border: 1px solid #bdbdbd;
                    text-align: center;
                    vertical-align: middle;
                  }
                  .el-carousel__container {
                    height: 60px !important;
                    line-height: 60px;
                  }
                }
                p {
                  color: #9a9a9a;
                }
                .triangle {
                  display: block;
                  width: 0;
                  height: 0;
                  border-width: 8px 8px 8px 0;
                  border-style: solid;
                  border-color: transparent #e8e8e8 transparent transparent; /*透明 黄 透明 透明 */
                  position: absolute;
                  top: 160px;
                  left: -8px;
                }
              }
            }
          }
          // 商品信息
          .introduce {
            a {
              color: #409eff;
              font-size: 14px;
              line-height: 34px;
              display: block;
              width: 350px;
              overflow: hidden; /*超出部分隐藏*/
              text-overflow: ellipsis; /* 超出部分显示省略号 */
              white-space: nowrap; /*规定段落中的文本不进行换行 */
            }
            ul {
              li {
                color: #9a9a9a;
                display: inline-block;
                margin-right: 50px;
                line-height: 26px;
                i {
                  color: #444;
                }
              }
            }
            .handbook {
              font-size: 12px;
              line-height: 34px;
              color: #409eff;
              .el-icon-folder-opened {
                font-size: 16px;
              }
            }
            .famous {
              // display: block;
              padding: 0 5px;
              line-height: 34px;
              color: #409eff;
              border: 1px solid #409eff;
            }
          }
          // 增值税
          .tax {
            margin-top: 40px;
            ul {
              li {
                height: 26px;
                color: #444;
                p {
                  float: left;
                  width: 60%;
                  text-align: right;
                }
                span {
                  float: left;
                  color: #ff7900;
                }
              }
            }
          }
          .buy {
            margin-top: 35px;
            li {
              color: #444;
              text-align: right;
              line-height: 30px;
              i {
                color: #ff7900;
              }
            }
          }
        }
      }
    }

    //分页
    .pages {
      text-align: right;
      margin-top: 20px;
    }

    .agent-shopping {
      margin: 30px 0;
      text-align: center;
    }
  }

  // 弹窗的样式
  .el-dialog__header {
    background: #f2f2f2;
    border-bottom: 1px solid #dedede;
    .el-dialog__title {
      font-size: 14px;
      font-weight: bold;
    }
  }

  @keyframes bounceIn {
    0% {
      transform: scale(0);
      opacity: 0.4;
    }
    0% {
      transform: scale(0.7);
      opacity: 0.8;
    }
    90% {
      transform: scale(1);
      left: 630px;
      top: -480px;
    }
    100% {
      transform: scale(0);
    }
  }

  .content {
    display: flex;
    justify-content: space-around;
    font-size: 12px;
    .left {
      ul {
        li {
          line-height: 40px;
          span {
            color: #9a9a9a;
          }
        }
      }
    }
    .right {
      ul {
        li {
          line-height: 30px;
          &:nth-of-type(1) {
            text-align: center;
          }
          span {
            display: inline-block;
            width: 100px;
            text-align: right;
          }
          i {
            color: #ff7b00;
            margin-left: 5px;
          }
        }
      }
    }
  }
  .dialog-footer {
    display: flex;
    div {
      width: 300px;
    }
    ul {
      flex: 1;
      li {
        text-align: left;
        line-height: 30px;
        &:nth-of-type(1) {
          input {
            color: #ee7600;
          }

          i {
            color: #ee7600;
            &:nth-last-of-type(1) {
              font-size: 14px;
              font-weight: bold;
            }
          }
        }
        input {
          width: 60px;

          padding-left: 4px;
        }
        &:nth-last-of-type(1) {
          margin: 5px 0 20px;
          .el-button {
            padding: 10px;
          }
        }
      }
    }
  }
}
</style>