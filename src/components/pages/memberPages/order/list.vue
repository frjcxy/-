<template>
  <div id="list">
    <!-- 订单管理 -->
    <div class="member-title">
      <h3>订单管理</h3>
    </div>
    <div class="order-search">
      <div class="search">
        <span>订单号/BOM标识：</span>
        <el-input></el-input>
        <span class="keyword">关键字：</span>
        <el-input placeholder="商品编号/型号/名称/目录"></el-input>
        <el-button type="primary">查询</el-button>
        <span class="advanced isshow">
          高级筛选
          <a href="javascript:;" @click="advanced">
            <i :class="btnIsShow?'el-icon-arrow-up':'el-icon-arrow-down'"></i>
          </a>
        </span>
        <span class="educe isshow">
          导出对账明细
          <a href="javascript:;" @click="exportDetail">
            <i :class="statusIsShow?'el-icon-arrow-up':'el-icon-arrow-down'"></i>
          </a>
        </span>
      </div>
    </div>
    <div class="state">
      <div class="time">
        <span>购买时间：</span>
        <el-date-picker
          type="daterange"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
        ></el-date-picker>
        <el-button type="primary" class="export" v-show="btnIsShow">导出</el-button>
      </div>
      <div class="status_box" v-show="statusIsShow">
        <div class="order-status">
          <span>订单状态：</span>
          <el-select placeholder="请选择" value="1">
            <el-option></el-option>
          </el-select>
        </div>
        <div class="pay-status">
          <span>支付状态：</span>
          <el-select placeholder="请选择" value="1">
            <el-option></el-option>
          </el-select>
        </div>
      </div>
    </div>
    <div class="no-orders">
      <!-- 无订单 -->
      <span>
        您暂时没有订单哦，赶紧去
        <router-link to="/shopping/index">选购元器件</router-link>吧！
      </span>
      <!-- 有订单 -->
      <ul class="order_form">
        <li v-for="(item,index) in orderData" :key="index">
          <div class="list_title">
            <div class="title_left">
              <span>{{item.omsOrder.createTime | formatTime}}</span>
              <span>
                订单编号：
                <a href="javascript:;">{{item.omsOrder.orderSn}}</a>
              </span>
            </div>
            <div class="title_right">
              <a href="javascript:;" @click="addLogoVisible=true">{{textarea}}</a>
              <a
                href="javascript:;"
                @click="confirmDeletion(item.omsOrderItem.orderSn)"
                class="el-icon-delete"
              ></a>
            </div>
          </div>
          <div class="list_content">
            <el-row>
              <el-col :span="2">
                <div class="grid-content bg-purple list_img">
                  <img :src="item.omsOrderItem.productPic" alt>
                </div>
              </el-col>
              <el-col :span="6">
                <div class="grid-content bg-purple-light list_name">
                  <p>{{item.omsOrderItem.productName}}</p>
                  <p>
                    <a href="javascript:;">TC444464</a>/10uf（106
                  </p>
                  <p>编号：{{item.omsOrderItem.productSn}}</p>
                </div>
              </el-col>
              <el-col :span="4">
                <div class="grid-content bg-purple list_num">
                  <p>{{item.omsOrderItem.productQuantity}}个</p>
                  <p>{{item.omsOrderItem.productPrice}}元/个</p>
                  <p>￥{{item.omsOrder.payAmount-item.omsOrder.freightAmount}}</p>
                </div>
              </el-col>
              <el-col :span="5">
                <div class="grid-content bg-purple-light list_total_prices">
                  <p>
                    <el-tooltip class="item" effect="light" placement="left">
                      <div slot="content">
                        {{item.omsOrder.memberUsername}}
                        <br>
                        地址 : {{item.omsOrder.receiverProvince+item.omsOrder.receiverCity+item.omsOrder.receiverRegion+item.omsOrder.receiverDetailAddress}}
                        <br>
                        电话号码 : {{item.omsOrder.contactPhone}}
                      </div>
                      <span>
                        root
                        <i class="el-icon-s-custom"></i>
                      </span>
                    </el-tooltip>
                  </p>
                  <p>合计： ￥{{item.omsOrder.payAmount}}元</p>
                  <p>
                    （含运费
                    <i>{{item.omsOrder.freightAmount}}</i> 元）
                  </p>
                  <p v-text="item.omsOrder.status===0?'未付款':'已付款'"></p>
                </div>
              </el-col>
              <el-col :span="4">
                <div class="grid-content bg-purple list_logistics">
                  <p>等待付款</p>
                  <p>
                    <el-tooltip class="item" effect="light" placement="left">
                      <div slot="content">
                        <el-timeline>
                          <el-timeline-item timestamp="2018/4/12" placement="top">
                            <el-card>
                              <h4>更新 Github 模板</h4>
                              <p>2018/4/12 20:46</p>
                            </el-card>
                          </el-timeline-item>
                          <el-timeline-item timestamp="2018/4/3" placement="top">
                            <el-card>
                              <h4>更新 Github 模板</h4>
                              <p>2018/4/3 20:46</p>
                            </el-card>
                          </el-timeline-item>
                          <el-timeline-item timestamp="2018/4/2" placement="top">
                            <el-card>
                              <h4>更新 Github 模板</h4>
                              <p>2018/4/2 20:46</p>
                            </el-card>
                          </el-timeline-item>
                          <el-timeline-item timestamp="2018/4/2" placement="top">
                            <el-card>
                              <h4>更新 Github 模板</h4>
                              <p>2018/4/2 20:46</p>
                            </el-card>
                          </el-timeline-item>
                          <el-timeline-item timestamp="2018/4/2" placement="top">
                            <el-card>
                              <h4>更新 Github 模板</h4>
                              <p>2018/4/2 20:46</p>
                            </el-card>
                          </el-timeline-item>
                          <el-timeline-item timestamp="2018/4/2" placement="top">
                            <el-card>
                              <h4>更新 Github 模板</h4>
                              <p>2018/4/2 20:46</p>
                            </el-card>
                          </el-timeline-item>
                        </el-timeline>
                      </div>
                      <span>进度跟踪</span>
                    </el-tooltip>
                  </p>
                </div>
              </el-col>
              <el-col :span="3">
                <div class="grid-content bg-purple-light list_operation">
                  <p>
                    <a href="javascript:;">剩余1天23时59分</a>
                  </p>
                  <p>
                    <el-button type="warning">付款</el-button>
                  </p>
                  <p>
                    <a href="javascript:;">找人代付</a>
                  </p>
                  <p>
                    <a href="javascript:;">取消订单</a>
                  </p>
                </div>
              </el-col>
            </el-row>
          </div>
        </li>
      </ul>
    </div>
    <!-- 分页 -->
    <el-pagination
      class="pages"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage4"
      :page-sizes="[100, 200, 300, 400]"
      :page-size="100"
      layout="total, sizes, prev, pager, next, jumper"
      :total="400"
    ></el-pagination>
    <!-- 添加BOM 标识弹框 -->
    <el-dialog title="SO190666664--BOM标识" :visible.sync="addLogoVisible" width="25%">
      <span class="dialog-content">
        <p>您对此订单添加备注，是方便您自己辨识和日后查找</p>
        <p>注意：此备注不是给我商城工作人员的备注，千万别误解。</p>
        <el-input
          type="textarea"
          :rows="2"
          maxlength="20"
          placeholder="请输入BOM标识备注：（20个字符以内）"
          v-model="textarea"
        ></el-input>
      </span>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" size="mini" @click="addLogoVisible=false">保存</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      // 订单数据
      orderData: [],
      value: "",
      currentPage4: 1,
      btnIsShow: false,
      statusIsShow: false,
      addLogoVisible: false, //添加BOM 标识弹框
      textarea: "添加BOM标识"
    };
  },
  created() {
    this.getOrderData();
  },
  methods: {
    //获取订单
    async getOrderData() {
      let res = await this.$http.get(`/api/member/order/orderlist?status=6`);
      console.log(res);

      this.orderData = res.data;
    },

    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    //高级筛选
    advanced() {
      this.btnIsShow = !this.btnIsShow;
    },
    exportDetail() {
      this.statusIsShow = !this.statusIsShow;
    },

    //删除确认框
    confirmDeletion(num) {
      this.$confirm("您确定删除该订单吗？", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
        center: true
      })
        .then(async () => {
          let res = await this.$http.get(
            `/api/member/order/removeOrderById?orderSn=${num}`
          );
          console.log(res);

          this.$message({
            type: "success",
            message: "删除成功!"
          });
          this.getOrderData();
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    }
  }
};
</script>
<style lang="less" scope>
// 用户信息文字提示
.el-tooltip__popper {
  width: 360px;
  line-height: 24px;
  padding: 20px;
  .el-timeline {
    height: 300px;
    overflow-y: auto;
    .el-card__body {
      padding: 10px;
    }
  }
}
.el-tooltip__popper.is-light {
  border: 1px solid #888;
}
#list {
  .order-search {
    display: flex;
    margin: 20px 0;
    .keyword {
      margin-left: 20px;
    }
    .el-input {
      width: 200px;
      .el-input__inner {
        width: 100%;
        height: 30px;
        line-height: 30px;
      }
    }
    .el-button {
      padding: 6px 14px;
      margin-left: 20px;
    }
    .isshow {
      margin-left: 40px;
      a {
        i {
          border: 1px solid #dedede;
          padding: 4px;
        }
      }
    }
  }

  .state {
    display: flex;
    .time {
      margin-left: 50px;
      .el-input__inner {
        width: 300px;
        height: 30px;
        line-height: 30px;
        margin-right: 10px;
        .el-input__icon {
          height: 30px;
          line-height: 30px;
        }
        .el-range-separator {
          height: 30px;
          line-height: 30px;
        }
      }
      .export {
        padding: 5px 10px;
        border-radius: 0;
      }
    }

    .el-input {
      width: 120px;
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
    .status_box {
      display: flex;
      .order-status {
        margin-left: 40px;
      }
      .pay-status {
        margin-left: 20px;
      }
    }
  }

  .no-orders {
    text-align: center;
    margin: 30px 0 20px 0;
    // 无订单
    span {
      a {
        text-decoration: underline;
        color: #0bf;
      }
    }
    //有订单
    .order_form {
      li {
        border: 1px solid #eee;
        .list_title {
          width: 100%;
          line-height: 40px;
          box-sizing: border-box;
          padding: 0 15px;
          background-color: #eee;
          display: flex;
          justify-content: space-between;
          .title_left {
            span {
              &:nth-last-of-type(1) {
                margin-left: 40px;
                a {
                  color: #0093e6;
                }
              }
            }
          }
          .title_right {
            a {
              &:nth-of-type(1) {
                margin-right: 40px;
                text-decoration: underline;
              }
              &:nth-of-type(2) {
                font-size: 18px;
              }
            }
          }
        }
        .list_content {
          padding: 15px 20px;
          .el-row {
            text-align: left;
            p {
              line-height: 24px;
            }
            .list_img {
              img {
                width: 50px;
                height: 50px;
              }
            }
            .list_name {
              a {
                color: #0093e6;
              }
            }
            .list_num {
              color: #9a9a9a;
            }
            .list_total_prices {
              text-align: center;
              p {
                &:nth-last-of-type(1),
                &:nth-last-of-type(2) > i {
                  color: #f00;
                }
              }
            }
            .list_logistics {
              text-align: center;
              p {
                &:nth-of-type(1) {
                  color: #9a9a9a;
                }
              }
            }
            .list_operation {
              text-align: center;
              .el-button {
                padding: 4px 20px;
              }
            }
          }
        }
      }
    }
  }
  .pages {
    text-align: right;
  }

  // BOM弹框
  .el-dialog {
    border: 4px solid #eee;
    .el-dialog__body {
      padding-bottom: 10px;
      .dialog-content {
        font-size: 12px;
        line-height: 24px;
        p {
          &:nth-last-of-type(1) {
            color: #f00;
          }
        }
        .el-textarea {
          margin-top: 10px;
          font-size: 12px;
        }
      }
    }
    .el-dialog__footer {
      .dialog-footer {
        display: flex;
        justify-content: center;
      }
    }
  }
}
</style>