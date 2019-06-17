`<template>
  <div id="box">
    <el-container>
      <!-- 头部 -->
      <el-header id="header" :height="height">
        <!-- 顶部 -->
        <div class="top">
          <el-row class="top-menu w">
            <el-col :span="6">
              <div class="grid-content bg-purple">
                <span v-if="!username">您好，欢迎来到立创商城</span>
                <span v-if="username">
                  您好，
                  <router-link
                    to="/shopping/member/center"
                    style="color:#409eff;font-weight: bold;"
                  >{{username}}</router-link>
                </span>
              </div>
            </el-col>
            <el-col :span="18">
              <div class="grid-content bg-purple-light enter">
                <ul>
                  <li class="please_login" v-if="!username">
                    <router-link to="/login">请登录</router-link>
                  </li>

                  <li class="free_registration" v-if="!username">
                    <router-link to="/register">免费注册</router-link>
                  </li>

                  <li class="vip" @mouseenter="memberListShow" @mouseleave="memberListHide">
                    <router-link to="/shopping/member/center">
                      会员中心
                      <i class="el-icon-caret-bottom"></i>
                    </router-link>
                    <div class="member_list" v-show="memberList">
                      <dl>
                        <dd>
                          <router-link to="/shopping/member/list">我的订单</router-link>
                          <i>|</i>
                        </dd>
                        <dd>
                          <router-link to="/shopping/member/favorite">我的收藏</router-link>
                        </dd>
                        <dd>
                          <router-link to="/shopping/member/complaint">售后投诉</router-link>
                          <i>|</i>
                        </dd>
                        <dd>
                          <router-link to="/shopping/member/myticket">我的优惠券</router-link>
                        </dd>
                        <dd>
                          <router-link to="/shopping/member/sum_manage">预付余额</router-link>
                          <i>|</i>
                        </dd>
                        <dd>
                          <router-link to="/shopping/member/site">收货地址</router-link>
                        </dd>
                      </dl>
                    </div>
                  </li>
                  <li>
                    <router-link to="/shopping/member/message">
                      消息(
                      <span>0</span> )
                    </router-link>
                  </li>
                  <li>
                    <a href="#">
                      <i class="el-icon-mobile-phone"></i> 手机版
                    </a>
                  </li>

                  <li>
                    <a href="#">PCB/钢网下单系统</a>
                  </li>

                  <li>
                    <a href="#">Global website</a>
                  </li>
                  <li>
                    <span>
                      <i class="el-icon-phone"></i>15118172930
                    </span>
                  </li>
                  <li v-if="username">
                    <span style="cursor:pointer;" @click="loginout">|&nbsp;&nbsp;&nbsp;退出</span>
                  </li>
                </ul>
              </div>
            </el-col>
          </el-row>
        </div>
        <!-- logo及搜索栏 -->
        <div class="logo_wraper" v-show="isShopping" :class="searchIsFixed == true ? 'isFixed' :''">
          <el-row class="w">
            <el-col :span="10">
              <div class="grid-content bg-purple logo">
                <h1>
                  <a href="javascript:;" to="/" @click="refurbish">
                    <img src="../../assets/lcsc_logo_new.png" alt="logo">
                  </a>
                </h1>
              </div>
            </el-col>
            <el-col :span="10">
              <div class="grid-content bg-purple-light searchBox">
                <div class="sch_bd">
                  <input
                    type="text"
                    placeholder="请输入型号或者产品信息"
                    class="search"
                    v-model.trim="keyword"
                    @keyup.enter="searchKeyword"
                  >
                  <ul class="search_list" v-show="searchList=false">
                    <li>
                      <span>电感</span>
                      <span>
                        约
                        <i>2</i> 条结果
                      </span>
                    </li>
                    <li>
                      <span>电感</span>
                      <span>
                        约
                        <i>62</i> 条结果
                      </span>
                    </li>
                    <li>
                      <span>电感</span>
                      <span>
                        约
                        <i>6222</i> 条结果
                      </span>
                    </li>
                    <li>
                      <span>电感</span>
                      <span>
                        约
                        <i>6222</i> 条结果
                      </span>
                    </li>
                    <li>
                      <span>电感</span>
                      <span>
                        约
                        <i>6222</i> 条结果
                      </span>
                    </li>
                    <li>
                      <span>电感</span>
                      <span>
                        约
                        <i>6222</i> 条结果
                      </span>
                    </li>
                    <li>
                      <span>电感</span>
                      <span>
                        约
                        <i>6222</i> 条结果
                      </span>
                    </li>
                    <li>
                      <span>电感</span>
                      <span>
                        约
                        <i>6222</i> 条结果
                      </span>
                    </li>
                  </ul>
                  <el-button type="primary" class="searchBtn" @click="searchKeyword">
                    <i class="el-icon-search"></i>
                  </el-button>
                </div>
                <div class="sch_hot" v-show="recommendShow">
                  <a href="#">【9.9包邮】</a>
                  <a href="#">限时88折</a>
                  <a href="#">199元新人券</a>
                  <a href="#">校园大使</a>
                  <a href="#">推荐返利</a>
                  <a href="#">海外现货样品</a>
                  <a href="#">方案验证板</a>
                </div>
              </div>
            </el-col>
            <el-col :span="4">
              <div class="grid-content bg-purple shopping-cart">
                <a href="javascript:;" @click="goToShopppingCart">
                  <el-badge :value="cartNum" class="item" type="warning">
                    <i class="el-icon-shopping-cart-2"></i>
                  </el-badge>
                </a>
              </div>
            </el-col>
          </el-row>
        </div>
        <!-- 购物车头部 -->
        <div class="cart_head" v-show="isCart">
          <el-row class="w">
            <el-col :span="12">
              <div class="grid-content bg-purple logo">
                <h1>
                  <a href="javascript:;" @click="refurbish">
                    <img src="../../assets/logo02.png" alt>
                  </a>
                  <h3>购物车</h3>
                </h1>
              </div>
            </el-col>
            <el-col :span="12">
              <div class="grid-content bg-purple-light searchBox">
                <div class="sch_bd">
                  <input
                    type="text"
                    placeholder="请输入型号或者产品信息"
                    class="search"
                    v-model.trim="keyword"
                    @keyup.enter="searchKeyword"
                  >
                  <el-button type="primary" class="searchBtn" @click="searchKeyword">
                    <i class="el-icon-search"></i>
                  </el-button>
                </div>
              </div>
            </el-col>
          </el-row>
        </div>
        <!-- 头部 -->
        <div class="pay_head" v-show="isSubmitOrder">
          <el-row class="w">
            <el-col :span="12">
              <div class="grid-content bg-purple logo">
                <h1>
                  <a href="javascript:;" @click="refurbish">
                    <img src="../../assets/logo02.png" alt>
                  </a>
                  <h3 v-text="this.$route.path === '/shopping/submitOrder'?'提交订单':'收银台'"></h3>
                </h1>
              </div>
            </el-col>
            <el-col :span="12">
              <div class="grid-content bg-purple-light">
                <el-steps
                  align-center
                  :space="200"
                  :active="this.$route.path === '/shopping/submitOrder'?'2':'3'"
                  finish-status="success"
                >
                  <el-step title="查看购物车"></el-step>
                  <el-step title="填写核对订单信息"></el-step>
                  <el-step title="提交订单付款"></el-step>
                </el-steps>
              </div>
            </el-col>
          </el-row>
        </div>

        <!-- 导航栏 -->
        <div class="nav" v-show="isShopping" :class="addPaddingTop == true ? 'top200' :''">
          <div class="w">
            <el-row class="nav-box">
              <el-col :span="4" class="sort">
                <div class="grid-content bg-purple">
                  <a href="#" class="classify el-icon-s-unfold">全部商品分类</a>
                </div>
              </el-col>
              <el-col :span="20" class="snav">
                <div class="grid-content bg-purple-light">
                  <ul>
                    <li>
                      <router-link to="/shopping/index">商城首页</router-link>
                    </li>
                    <li>
                      <router-link to="/shopping/catalog">商品目录</router-link>
                    </li>
                    <li>
                      <router-link to="/shopping/ticket">领券中心</router-link>
                    </li>
                    <li>
                      <router-link to="/shopping/procurement">海外代购</router-link>
                    </li>
                    <li>
                      <router-link to="/shopping/integral">积分商城</router-link>
                    </li>
                    <li>
                      <router-link to="/shopping/enter">免费入驻</router-link>
                    </li>
                    <li>
                      <router-link to="/shopping/pairing">BOM配单</router-link>
                    </li>
                  </ul>
                </div>
              </el-col>
            </el-row>
          </div>
        </div>
      </el-header>
      <!-- 主体部分 -->
      <el-main id="main" class="w">
        <router-view></router-view>
      </el-main>
      <!-- 底部 -->
      <el-footer id="footer">
        <!-- 多快好省 -->
        <div class="long" v-if="footerIsShow">
          <div class="slogan w">
            <el-row>
              <el-col :span="6">
                <div class="grid-content bg-purple list-box">
                  <div>
                    <span>多</span>
                  </div>
                  <div>
                    <h5>海量现货</h5>
                    <p>20万现货SKU</p>
                    <p>品类不断扩充</p>
                  </div>
                </div>
              </el-col>
              <el-col :span="6">
                <div class="grid-content bg-purple list-box">
                  <div>
                    <span>快</span>
                  </div>
                  <div>
                    <h5>闪电发货</h5>
                    <p>科技智能大仓储</p>
                    <p>4小时快速交货</p>
                  </div>
                </div>
              </el-col>
              <el-col :span="6">
                <div class="grid-content bg-purple list-box">
                  <div>
                    <span>好</span>
                  </div>
                  <div>
                    <h5>严控渠道</h5>
                    <p>仅从原厂和代理商进货</p>
                    <p>每一颗料均可原厂追溯</p>
                  </div>
                </div>
              </el-col>
              <el-col :span="6">
                <div class="grid-content bg-purple list-box">
                  <div>
                    <span>省</span>
                  </div>
                  <div>
                    <h5>降低成本</h5>
                    <p>明码标价节省时间成本</p>
                    <p>一站式采购正品元器件</p>
                  </div>
                </div>
              </el-col>
            </el-row>
          </div>
        </div>
        <!-- 指南 -->
        <div class="guide w" v-if="footerIsShow">
          <el-row class="guide-box">
            <el-col :span="4" class="guide-list">
              <div class="grid-content bg-purple">
                <ul>
                  <li>
                    <h5>购物指南</h5>
                  </li>
                  <li>
                    <a href="#">购物指南</a>
                  </li>
                  <li>
                    <a href="#">购物指南</a>
                  </li>
                  <li>
                    <a href="#">购物指南</a>
                  </li>
                  <li>
                    <a href="#">购物指南</a>
                  </li>
                  <li>
                    <a href="#">购物指南</a>
                  </li>
                </ul>
              </div>
            </el-col>
            <el-col :span="4" class="guide-list">
              <div class="grid-content bg-purple">
                <ul>
                  <li>
                    <h5>购物指南</h5>
                  </li>
                  <li>
                    <a href="#">购物指南</a>
                  </li>
                  <li>
                    <a href="#">购物指南</a>
                  </li>
                  <li>
                    <a href="#">购物指南</a>
                  </li>
                  <li>
                    <a href="#">购物指南</a>
                  </li>
                  <li>
                    <a href="#">购物指南</a>
                  </li>
                </ul>
              </div>
            </el-col>
            <el-col :span="4" class="guide-list">
              <div class="grid-content bg-purple">
                <ul>
                  <li>
                    <h5>购物指南</h5>
                  </li>
                  <li>
                    <a href="#">购物指南</a>
                  </li>
                  <li>
                    <a href="#">购物指南</a>
                  </li>
                  <li>
                    <a href="#">购物指南</a>
                  </li>
                  <li>
                    <a href="#">购物指南</a>
                  </li>
                  <li>
                    <a href="#">购物指南</a>
                  </li>
                </ul>
              </div>
            </el-col>
            <el-col :span="4" class="guide-list">
              <div class="grid-content bg-purple">
                <ul>
                  <li>
                    <h5>购物指南</h5>
                  </li>
                  <li>
                    <a href="#">购物指南</a>
                  </li>
                  <li>
                    <a href="#">购物指南</a>
                  </li>
                  <li>
                    <a href="#">购物指南</a>
                  </li>
                  <li>
                    <a href="#">购物指南</a>
                  </li>
                  <li>
                    <a href="#">购物指南</a>
                  </li>
                </ul>
              </div>
            </el-col>
            <el-col :span="4" class="guide-list">
              <div class="grid-content bg-purple">
                <ul>
                  <li>
                    <h5>购物指南</h5>
                  </li>
                  <li>
                    <a href="#">购物指南</a>
                  </li>
                  <li>
                    <a href="#">购物指南</a>
                  </li>
                  <li>
                    <a href="#">购物指南</a>
                  </li>
                  <li>
                    <a href="#">购物指南</a>
                  </li>
                  <li>
                    <a href="#">购物指南</a>
                  </li>
                </ul>
              </div>
            </el-col>
          </el-row>
        </div>
        <!-- 友情链接 -->
        <div class="friendlink" v-if="footerIsShow">
          <el-tabs v-model="activeName" class="w">
            <el-tab-pane label="成员网站" name="first">成员网站</el-tab-pane>
            <el-tab-pane label="友情链接" name="second">友情链接</el-tab-pane>
          </el-tabs>
        </div>
        <!-- 底部导航栏 -->
        <div class="tabbar">
          <div class="w">
            <ul>
              <li>
                <a href="#">商城首页</a>
              </li>
              <li>|</li>
              <li>
                <a href="#">关于立创商城</a>
              </li>
              <li>|</li>
              <li>
                <a href="#">联系我们</a>
              </li>
              <li>|</li>
              <li>
                <a href="#">友情链接</a>
              </li>
              <li>|</li>
              <li>
                <a href="#">网站使用条款</a>
              </li>
              <li>|</li>
              <li>
                <a href="#">加入收藏</a>
              </li>
            </ul>
          </div>
        </div>

        <!-- 版权 -->
        <div class="copyright">
          <div class="w">
            <ul>
              <li>
                <a href="#">电信入口</a>
              </li>
              <li>
                <a href="#">联通入口</a>
              </li>
              <li>
                <a href="#">移动入口</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="#">
                  <img src="https://static.szlcsc.com/www/resources/images/govIcon2.png" alt>
                  粤公安备44030402002194号
                </a>
              </li>
              <li>
                <a href="#">粤ICP备13005967号-2</a>
              </li>
            </ul>
            <p>©2011-2019 立创商城 版权所有</p>
            <span>
              <a href="#">
                <img src="https://static.szlcsc.com/www/resources/images/govIcon.gif" alt>
              </a>
            </span>
          </div>
        </div>
      </el-footer>
    </el-container>
  </div>
</template>
<script>
import Cookies from "js-cookie";
import { async } from "q";
export default {
  inject: ["reload"],
  data() {
    return {
      activeColor: false,
      // 退出登录提示框
      // loginoutTooltip: false,
      activeName: "first",
      // 头部显示或隐藏
      isShopping: true,
      isCart: false,
      isSubmitOrder: false,

      footerIsShow: true,
      height: "216",
      // 搜索栏固定
      searchIsFixed: false,
      // 防止搜索栏脱标影响其他元素
      addPaddingTop: false,
      // 搜索栏下方的推荐
      recommendShow: true,
      // 关键字搜索
      keyword: "",
      // 顶部会员中心
      memberList: false,
      username: "",
      // 搜索的数据
      getSearchData: [],
      pageNum: 1, //总页数
      pageSize: 1, //页容量
      // 加入购物车数量
      cartNum: 0
    };
  },
  created() {
    this.getCookies();
    this.getCartNum();
    this.showOrHide();
  },

  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },


  methods: {
    refurbish(){
      this.$router.push('/')
      this.reload();
      
    },
    // 头部区域的显示和隐藏
    showOrHide() {
      if (this.$route.path === "/shopping/shoppingCart") {
        this.isShopping = false;
        this.isCart = true;
        this.isSubmitOrder = false;
      } else if (
        this.$route.path === "/shopping/checkout" ||
        this.$route.path === "/shopping/submitOrder"
      ) {
        this.isShopping = false;
        this.isCart = false;
        this.isSubmitOrder = true;
      } else if (this.$route.path == "/shopping/pay") {
        this.footerIsShow = false;
        this.isShopping = false;
      }
    },
    //跳转到购物车
    goToShopppingCart() {
      this.reload();
      this.$router.push("/shopping/shoppingCart");
    },
    // 获取页面滚动的距离，实现搜索栏固定
    handleScroll() {
      var scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      var offsetTop = document.querySelector("#searchBox").offsetTop;
      if (scrollTop > offsetTop + 100) {
        this.searchIsFixed = true;
        this.recommendShow = false;
        this.addPaddingTop = true;
      } else {
        this.searchIsFixed = false;
        this.recommendShow = true;
        this.addPaddingTop = false;
      }
    },
    // cookie中获取用户名
    getCookies() {
      this.username = Cookies.get("username");
    },
    // 退出登录提示框
    loginout() {
      this.$confirm("你确定要退出吗?", "提示", {
        cancelButtonText: "取消",
        confirmButtonText: "确定",
        type: "warning"
      })
        .then(() => {
          // 确定
          // 删除token
          window.sessionStorage.removeItem("token");
          // 删除cookies
          Cookies.remove("username");
          // 返回首页
          this.$router.push("/");
          this.reload();
        })
        .catch(() => {
          // 取消
        });
    },

    // 关键字搜索商品
    searchKeyword() {
      if (this.keyword.length == 0) {
        this.$confirm("请输入型号或者产品相关信息进行搜索", "失败提示", {
          confirmButtonText: "确定",
          showCancelButton: false,
          type: "warning",
          center: true
        });
      } else {
        this.$http
          .get(
            `/ips/esProduct/search/keyword?keyword=${this.keyword}&pageNum=${
              this.pageNum
            }&pageSize=${this.pageSize}`
          )
          .then(res => {
            if (res.data.list.length <= 0) {
              this.$message({
                type: "warning",
                message: "暂无此商品，请更换搜索的商品名称！"
              });
            } else {
              this.$router.push(
                `/shopping/listdetails/${res.data.list[0].productCategoryId}`
              );
            }
          });
      }
    },

    async getCartNum() {
      if (window.sessionStorage.getItem("token")) {
        let res = await this.$http.post("/api/member/cart/list");
        if (res.data) {
          this.cartNum = res.data.length;
        } else {
          this.cartNum = 0;
        }
      } else {
        this.cartNum = 0;
      }
    },

    memberListShow() {
      this.memberList = true;
    },
    memberListHide() {
      this.memberList = false;
    }
  },

  watch: {
    keyword(curVal, oldVal) {
      console.log(oldVal);
      console.log(curVal);
    }
  }
};
</script>
<style lang="less" scoped>
@bordercolor : #409EFF;
@hotcolor :#ff7836;
#box {
  // 搜索栏固定定位样式
  .isFixed {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background-color: #fff;
    z-index: 99;
    box-shadow: 4px 4px 4px #e3e3e3;
  }
  // 搜索栏下方的盒子增加200px上边距
  .top200 {
    padding-top: 140px;
  }

  #header {
    padding: 0;
    .top {
      border-bottom: 1px solid #dedede;
      background-color: #f2f2f2;
      .top-menu {
        height: 40px;
        line-height: 40px;
        .enter {
          float: right;
          ul {
            display: flex;
            li {
              justify-content: center;
              margin-left: 15px;
              &.please_login {
                a {
                  color: #409eff;
                  font-weight: bold;
                }
              }
              &.free_registration {
                a {
                  font-weight: bold;
                  color: #666666;
                }
              }
              &.vip {
                position: relative;
                .member_list {
                  width: 160px;
                  background: #fff;
                  padding-bottom: 8px;
                  border: 1px solid #e5e5e5;
                  position: absolute;
                  top: 40px;
                  right: 0;
                  z-index: 999;
                  margin: 0;
                  dl {
                    margin: 10px 0 0 15px;
                    width: 100%;
                    text-align: center;
                    dd {
                      width: 40%;
                      float: left;
                      line-height: 26px;
                      i {
                        margin: 0 10px;
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }

    .searchBox {
      .sch_bd {
        width: 489px;
        height: 42px;
        display: flex;
        position: relative;
        .search {
          width: 444px;
          height: 36px;
          border: 2px solid @bordercolor;
          border-right: none;
          padding-left: 10px;
        }
        .searchBtn {
          flex: 1;
          border-radius: 0;
          i {
            font-size: 20px;
          }
        }
      }
    }

    .logo_wraper {
      // height: 103px;
      margin-bottom: 20px;
      padding: 20px 0 10px 0;
      .logo {
        a {
          display: block;
          width: 385px;
          height: 57px;
        }
      }

      .sch_hot {
        margin-top: 10px;
        a {
          margin: 4px;
          color: @hotcolor;
          &:nth-child(6) {
            color: #5d5d5d;
          }
          &:nth-child(7) {
            color: #5d5d5d;
          }
        }
      }

      .search_list {
        width: 400px;
        background-color: #fff;
        border: 1px solid #eee;
        box-shadow: 2px 2px 2px #999;
        position: absolute;
        left: 5px;
        top: 40px;
        z-index: 999;
        li {
          width: 100%;
          line-height: 30px;
          box-sizing: border-box;
          padding: 0px 10px;
          display: flex;
          justify-content: space-between;
          &:hover {
            background-color: #87cefa;
          }
          span {
            i {
              color: #409eff;
            }
          }
        }
      }

      .shopping-cart {
        text-align: right;
        a {
          .item {
            margin-right: 10px;
            i {
              font-size: 40px;
              color: @bordercolor;
            }
          }
        }
      }
    }
    .nav {
      border-bottom: 2px solid @bordercolor;
      .nav-box {
        display: flex;
        .sort {
          width: 240px;
          height: 50px;
          line-height: 50px;
          font-size: 18px;
          font-weight: 700;
          background-color: @bordercolor;
          padding-left: 10px;
          border-radius: 4px 4px 0 0;
          .classify {
            color: #fff;
          }
        }

        .snav {
          flex: 1;
          height: 50px;
          ul {
            display: flex;
            li {
              flex: 1;
              text-align: center;
              a {
                display: flex;
                justify-content: center;
                align-items: center;
                height: 50px;
                font-size: 16px;
                color: #444;
                font-weight: 600;
                &:hover {
                  color: #409eff;
                }
              }
            }
          }
        }
      }
    }

    .cart_head,
    .pay_head {
      padding: 30px 0;
      .el-row {
        display: flex;
        justify-content: space-between;
        align-items: center;
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
      }
    }
  }

  #main {
    padding: 0px;
    overflow-y: hidden;
  }

  #footer {
    padding: 0;
    .long {
      background-color: #e3e3e3;
    }
    .slogan {
      border-bottom: 1px solid #e3e3e3;
      height: 106px;
      padding-top: 50px;
      .list-box {
        display: flex;
        justify-content: center;
        & > div:nth-child(1) {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background-color: @bordercolor;
          text-align: center;
          line-height: 50px;
          margin-top: 6px;
          span {
            font-size: 26px;
            color: #fff;
          }
        }

        & > div:nth-child(2) {
          margin-left: 5px;
          h5 {
            font-size: 18px;
            color: #565656;
            margin-bottom: 15px;
          }
          p {
            font-size: 10px;
            color: #9a9a9a;
            margin-top: 5px;
          }
        }
      }
    }
    // 指南
    .guide {
      margin-top: 28px;
      .guide-box {
        .guide-list {
          width: 122px;
          margin-left: 100px;
          &:nth-of-type(1) {
            width: 156px;
          }
          li {
            margin-bottom: 18px;
            h5 {
              color: #444;
              font-size: 14px;
              margin-bottom: 30px;
            }
            a {
              font-size: 12px;
              color: #444;
            }
          }
        }
      }
    }

    // 友情链接
    .friendlink {
      border-top: 1px solid #e3e3e3;
    }

    // 底部导航栏
    .tabbar {
      height: 24px;
      background-color: #5e5e5e;
      margin-top: 28px;
      padding: 8px 0;
      ul {
        display: flex;
        justify-content: center;
        li {
          color: #d7d7d7;
          margin: 6px 6px;
          a {
            color: #d7d7d7;
          }
        }
      }
    }

    // 版权模块
    .copyright {
      ul {
        &:nth-of-type(1),
        &:nth-of-type(2) {
          display: flex;
          justify-content: center;
          li {
            margin: 14px;
            a {
              line-height: 20px;
            }
          }
        }

        &:nth-of-type(2) {
          li {
            a {
              img {
                vertical-align: middle;
              }
            }
          }
        }
      }

      p {
        text-align: center;
      }

      span {
        display: block;
        text-align: center;
        margin-top: 15px;
        a {
          img {
            height: 60px;
          }
        }
      }
    }
  }
}
</style>