<template>
  <div v-cloak>
    <!-- 首页 -->
    <el-row id="index" v-cloak>
      <el-col :span="5">
        <div class="grid-content bg-purple left-menu">
          <div class="sidebar" v-show="tabShow">
            <!-- 左侧商品分类 -->
            <ul class="sidebar-list">
              <li
                v-for="item in $store.state.setCategoryData"
                :key="item.id"
                @mouseover="mouseOver(item.oneId)"
                @mouseleave="mouseLeave(item.oneId)"
              >
                <!-- 一级分类 -->
                <a href="javascript:;" class="first" :class="seen===item.oneId?'active':''">
                  <i class="el-icon-s-operation"></i>
                  {{item.oneName}}
                </a>
                <div class="second" v-show="seen === item.oneId">
                  <div class="category_box" v-for="it in item.productCategoriesTwo" :key="it.twoId">
                    <!-- 二级分类 -->
                    <router-link class="title" :to="`/shopping/listdetails/${it.id}`" v-model="it.id">{{it.twoName}} &nbsp;&nbsp; ></router-link>
                    <ul>
                      <li v-for="i in it.productCategoriesThree" :key="i.id">
                        <!-- 三级分类 -->
                        <router-link :to="`/shopping/listdetails/${i.id}`">{{i.name}}</router-link>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <a href="https://www.szlcsc.com/oversea/intro.html" class="advertising" target="_blank">
            <img
              class="catalog_img"
              src="https://alimg.szlcsc.com/upload/public/index/source/20190308/A409709A763414743E7C657AD68BE44A.jpg"
            >
          </a>
        </div>
      </el-col>
      <el-col :span="19" class="right-main">
        <div class="grid-content bg-purple-light">
          <el-row class="swipe-box">
            <!-- 轮播图 -->
            <el-col :span="17">
              <div class="grid-content bg-purple swipe">
                <el-carousel height="370px">
                  <el-carousel-item v-for="(item,index) in swiperList" :key="index">
                    <router-link :to="{path:'/shopping/particulars',query: { id: item.id }}">
                      <img :src="item.pic" alt>
                    </router-link>
                  </el-carousel-item>
                </el-carousel>
              </div>
            </el-col>
            <!-- 右侧新闻公告栏 -->
            <el-col :span="6" class="news">
              <div class="grid-content bg-purple-light">
                <template>
                  <el-tabs v-model="activeName" @tab-click="handleClick">
                    <el-tab-pane label="公告" name="first">公告</el-tab-pane>
                    <el-tab-pane label="新闻" name="second">新闻</el-tab-pane>
                    <el-tab-pane label="更多>"></el-tab-pane>
                  </el-tabs>
                </template>
                <div class="notice">
                  <ul>
                    <li>
                      <a href="#">
                        <p>
                          积分商城
                          <i class="el-icon-date"></i>
                        </p>
                        <p>兑换京东E卡等</p>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <p>
                          积分商城
                          <i class="el-icon-date"></i>
                        </p>
                        <p>兑换京东E卡等</p>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <p>
                          积分商城
                          <i class="el-icon-date"></i>
                        </p>
                        <p>兑换京东E卡等</p>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <p>
                          积分商城
                          <i class="el-icon-date"></i>
                        </p>
                        <p>兑换京东E卡等</p>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </el-col>
          </el-row>
          <!-- <div class="new-recommend">
            <ul>
              <li>
                <span>
                  <h4>精选专题</h4>
                  <a href="#">更多></a>
                </span>
                <div class="recommend-box">
                  <el-carousel height="135px" :interval="3000">
                    <el-carousel-item v-for="(item,index) in subjectData1" :key="index">
                      <a href="#" class="click-single">
                        <img :src="item.pic" alt>
                        <span>
                          <a href="#">{{item.title}}</a>
                          <p>{{item.description}}</p>
                        </span>
                      </a>
                    </el-carousel-item>
                  </el-carousel>
                </div>
              </li>
              <li>
                <span>
                  <h4>家电专题</h4>
                  <a href="#">更多></a>
                </span>
                <div class="recommend-box">
                  <el-carousel height="135px" :interval="3100">
                    <el-carousel-item v-for="(item,index) in subjectData2" :key="index">
                      <a href="#" class="click-single">
                        <img :src="item.pic" alt>
                        <span>
                          <a href="#">{{item.title}}</a>
                          <p>{{item.description}}</p>
                        </span>
                      </a>
                    </el-carousel-item>
                  </el-carousel>
                </div>
              </li>
              <li>
                <span>
                  <h4>美食专题</h4>
                  <a href="#">更多></a>
                </span>
                <div class="recommend-box">
                  <el-carousel height="135px" :interval="3200">
                    <el-carousel-item v-for="(item,index) in subjectData3" :key="index">
                      <a href="#" class="click-single">
                        <img :src="item.pic" alt>
                        <span>
                          <a href="#">{{item.title}}</a>
                          <p>{{item.description}}</p>
                        </span>
                      </a>
                    </el-carousel-item>
                  </el-carousel>
                </div>
              </li>
              <li>
                <span>
                  <h4>数码专题</h4>
                  <a href="#">更多></a>
                </span>
                <div class="recommend-box">
                  <el-carousel height="135px" :interval="3300">
                    <el-carousel-item v-for="(item,index) in subjectData4" :key="index">
                      <a href="#" class="click-single">
                        <img :src="item.pic" alt>
                        <span>
                          <a href="#">{{item.title}}</a>
                          <p>{{item.description}}</p>
                        </span>
                      </a>
                    </el-carousel-item>
                  </el-carousel>
                </div>
              </li>
            </ul>
          </div> -->
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      // 精选专题
      pageSize: 4,
      pageNum: 4,
      // subjectData1: [],
      // subjectData2: [],
      // subjectData3: [],
      // subjectData4: [],
      // 轮播图
      swiperList: [],
      activeName: "first",
      activeIndex: "1",
      activeIndex2: "1",
      tabShow: true,
      seen: -1
    };
  },

  // vue的钩子
  created() {
    this.swiperData();
    this.seen = false;
    // this.getSubjectData();
    this.getCategoryData();
  },

  methods: {
    handleClick(tab, event) {},
    // 获取轮播图的数据
    async swiperData() {
      let res = await this.$http.get("/api/home/content");
      this.swiperList = res.data.advertiseList;
    },

    // 获取分类数据
    async getCategoryData(){
      let res =await this.$http.get('/api/home/getCategory')
      console.log(res);
      
      this.$store.state.setCategoryData = res.data
    },

    // 鼠标移入移出事件
    mouseOver(id) {
      this.seen = id;
    },
    // 移出
    mouseLeave() {
      this.seen = false;
    },

    // 获取专题
    // async getSubjectData() {
    //   let res1 = await this.$http.get(
    //     "/api/home/subjectList?cateId=1&pageSize=4&pageNum=1"
    //   );
    //   let res2 = await this.$http.get(
    //     "/api/home/subjectList?cateId=2&pageSize=4&pageNum=1"
    //   );
    //   let res3 = await this.$http.get(
    //     "/api/home/subjectList?cateId=3&pageSize=4&pageNum=1"
    //   );
    //   let res4 = await this.$http.get(
    //     "/api/home/subjectList?cateId=4&pageSize=4&pageNum=1"
    //   );
    //   this.subjectData1 = res1.data;
    //   this.subjectData2 = res2.data;
    //   this.subjectData3 = res3.data;
    //   this.subjectData4 = res4.data;
    // }
  }
};
</script>
<style lang="less" scoped>
@menuBgc: #409eff;
#index {
  // 菜单栏
  .left-menu {
    width: 240px;
    .sidebar {
      width: 240px;
      height: 640px;
      background-color: #0fa0ec;
      .sidebar-list {
        padding-top: 15px;
        font-size: 14px;
        height: 38px;
        li {
          position: relative;
          // 一级分类
          .first {
            display: block;
            width: 240px;
            height: 40px;
            line-height: 40px;
            color: #fff;
            i {
              padding: 0 10px 0 20px;
            }
          }
          .active {
              color: #0fa0ec;
              background-color: #fff;
            }
          // 二级分类
          .second {
            z-index: 999;
            width: 460px;
            padding: 30px 20px;
            background-color: #fff;
            box-shadow: 5px 5px 5px #888888;
            position: absolute;
            left: 240px;
            top: -10px;
            .category_box {
              width: 100%;
              .title {
                display: block;
                height: 44px;
                color: #0fa0ec;
                font-size: 10px;
                font-weight: 700;
                line-height: 44px;
                border-bottom: 1px solid #ccc;
              }

              ul {
                padding-top: 10px;
                li {
                  display: inline-block;
                  word-wrap: break-word;
                  word-break: normal;
                  a {
                    font-size: 10px;
                    color: #666;
                    line-height: 30px;
                    &:hover {
                      color: #0fa0ec;
                    }
                    &::after {
                      content: "|";
                      color: #666;
                      padding: 0 20px;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }

    .advertising {
      display: block;
      width: 240px;
      height: 140px;
      margin-top: 30px;
    }
  }

  // 右侧主体部分
  .right-main {
    margin-top: 10px;
    .swipe-box {
      .swipe {
        // background-color: red;
        img {
          display: block;
          width: 100%;
          height: 100%;
        }
      }
    }
    // 公告新闻栏
    .news {
      margin-left: 10px;
      height: 370px;
      position: relative;
      .notice {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        ul {
          text-align: center;
          li {
            margin: 1px;
            display: inline-block;
            a {
              display: block;
              width: 100px;
              height: 50px;
              background-color: rgb(43, 14, 14);
              text-align: center;
              color: #fff;
              p {
                &:nth-of-type(1) {
                  font-size: 14px;
                  line-height: 30px;
                }
              }
            }
          }
        }
      }
    }

    // 新品推荐
    .new-recommend {
      ul {
        li {
          width: 425px;
          height: 205px;
          display: inline-block;
          margin: 15px;
          span {
            display: flex;
            justify-content: space-between;
            padding: 18px 15px 0;
            h4 {
              font-size: 16px;
              font-weight: bold;
              color: @menuBgc;
            }
            a {
              font-size: 14px;
              color: #999;
            }
          }

          .recommend-box {
            height: 171px;
            & > div {
              height: 100%;
            }
            .click-single {
              display: flex;
              img {
                width: 144px;
                height: 96px;
                text-align: center;
                margin-top: 20px;
              }

              & > span {
                flex: 1;
                font-size: 14px;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 3;
                overflow: hidden;
                padding: 0 20px;
                a {
                  font-size: 14px;
                  font-weight: bold;
                  color: #000;
                  line-height: 50px;
                  overflow: hidden;
                  text-overflow: ellipsis;
                  white-space: nowrap;
                  display: block;
                }
                p {
                  line-height: 20px;
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