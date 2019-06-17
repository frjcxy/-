<template>
  <div id="favorite">
    <!-- 我的收藏 -->
    <div class="member-title">
      <h3>我的收藏</h3>
    </div>
    <div class="classify">
      <el-row>
        <el-col :span="4">
          <div class="grid-content bg-purple">
            <span class="find">按分类查找</span>
          </div>
        </el-col>
        <el-col :span="16">
          <div class="grid-content bg-purple-light">
            <ul>
              <li>
                <a href="#" class="all">全部分类（15）</a>
              </li>
              <li>
                <a href="#">
                  占位
                  <i>(0)</i>
                </a>
              </li>
              <li>
                <a href="#">
                  占位
                  <i>(0)</i>
                </a>
              </li>
              <li>
                <a href="#">
                  占位
                  <i>(0)</i>
                </a>
              </li>
              <li>
                <a href="#">
                  占位
                  <i>(0)</i>
                </a>
              </li>
              <li>
                <a href="#">
                  占位
                  <i>(0)</i>
                </a>
              </li>
              <li>
                <a href="#">
                  占位
                  <i>(0)</i>
                </a>
              </li>
            </ul>
          </div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content bg-purple">
            <a href="#">
              更多
              <i class="el-icon-arrow-down"></i>
            </a>
          </div>
        </el-col>
      </el-row>
    </div>
    <!-- 收藏的商品信息 -->
    <div class="commodity-information" v-for="(item,index) in setCollectData" :key="index">
      <el-row>
        <el-col :span="1" class="checkbox">
          <div class="grid-content bg-purple">
            <el-checkbox-group v-model="checkModel" @change="setCheckedModel">
              <el-checkbox :label="item">
                <img :src="item.product.pic" alt>
              </el-checkbox>
            </el-checkbox-group>
          </div>
        </el-col>
        <el-col :span="4" class="img">
          <div class="grid-content bg-purple">
            <img :src="item.product.pic" alt>
          </div>
        </el-col>
        <el-col :span="8" class="message">
          <div class="grid-content bg-purple-light">
            <ul>
              <li>
                <span>商品编号：</span>
                <i>{{item.product.productSn}}</i>
              </li>
              <li>
                <a href="javascript:;">{{item.product.name}}</a>
              </li>
              <li>
                <span>{{item.product.productType}}</span>
                <i></i>
              </li>

              <li>
                <span>收藏时间：</span>
                <i>{{item.collectionTime | formatTime}}</i>
              </li>
            </ul>
          </div>
        </el-col>
        <el-col :span="5" class="tax">
          <div class="grid-content bg-purple">
            <ul>
              <li v-for="it in item.productLadder" :key="it.id">
                <span>{{it.count}}+ ：</span>
                <i>￥{{it.price}}</i>
              </li>
            </ul>
          </div>
        </el-col>
        <el-col :span="6" class="btn">
          <div class="grid-content bg-purple-light">
            <el-button type="warning" plain @click="delCollect(item.product.id)">取消收藏</el-button>
            <el-button type="success" plain @click="buyDialogVisible=true,showDialog(index)">加入购物车</el-button>
          </div>
        </el-col>
      </el-row>
      <!-- 点击加入购物车弹窗 -->
      <el-dialog title="添加购物车" :visible.sync="buyDialogVisible" width="40%">
        <div class="content">
          <div class="left">
            <ul>
              <li>
                <span>商品名称：</span>
                <i>{{singleCommodityProduct.name}}</i>
              </li>
              <li>
                <span>原厂型号：</span>
                <i>{{singleCommodityProduct.productType}}</i>
              </li>
              <li>
                <span>品&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;牌：</span>
                <i>{{singleCommodityProduct.brandName}}</i>
              </li>
              <li>
                <span>封装规格：</span>
                <i>{{singleCommodityProduct.productSpecifications}}</i>
              </li>
              <li>
                <span>现货库存：</span>
                <i>{{singleCommodityProduct.stock}}个</i>
              </li>
            </ul>
          </div>
          <div class="right">
            <ul>
              <li>含增值税</li>
              <li v-for="it in singleProductLadder" :key="it.id">
                <span>{{it.count}}+ :</span>
                <i>￥{{it.price}}</i>
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
                :max="singleCommodityProduct.stock"
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
                {{singleCommodityProduct.unit}}（1{{singleCommodityProduct.unit}}有）
                <i>{{singleCommodityProduct.unitNum}}</i>个
              </span>
            </li>
            <li class="add_shop_cart">
              <el-button type="warning" @click="addToShopCart()">加入购物车</el-button>
            </li>
          </ul>
        </span>
      </el-dialog>
    </div>

    <!-- 全选及分页 -->
    <div class="check-all">
      <el-row>
        <el-col :span="10" class="check-btn">
          <div class="grid-content bg-purple">
            <el-checkbox v-model="checkAll" @change="setCheckedAll">全选</el-checkbox>
            <el-button type="warning" plain @click="delCollectList">取消收藏</el-button>
          </div>
        </el-col>
        <el-col :span="14">
          <div class="grid-content bg-purple-light">
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
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
import moment from "moment";
export default {
  inject: ["reload"],
  data() {
    return {
      // 对话框
      buyDialogVisible: false,
      currentPage4: 4,
      setCollectData: [],
      singleCommodityProduct: {},
      singleProductLadder: [],
      changePrice: 0,
      buyNum: 1,
      // 全选
      checkAll: false,
      checkModel: [],
      selectedGoods: [], //选中的商品
      idArr: []//选中的id
    };
  },
  created() {
    this.getCollectList();
  },
  // 过滤器
  filters: {
    formatTime(value) {
      // 处理时间 并返回 基于moment
      return moment(value).format("YYYY-MM-DD HH:mm:ss");
    }
  },
  methods: {
    // 获取收藏夹列表
    async getCollectList() {
      let res = await this.$http.get("/api/member/collection/listProduct");
       console.log(res);
      this.setCollectData = res.data;
    },

    // 取消收藏
    delCollect(id) {
      this.$confirm("确定要取消收藏？", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(async () => {
          let res = await this.$http.get(
            `/api/member/collection/deleteProduct?productIds=${id}`
          );
          this.$message({
            type: "success",
            message: "删除成功!"
          });
          this.getCollectList();
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },

     // 取消收藏多个
    delCollectList() {
      if (this.checkModel.length <= 0) {
        this.$message({
          type: "warning",
          message: "请勾选要取消收藏的商品！"
        });
      } else {
        this.selectedGoods.forEach(res => {
          console.log(res);
          
          this.idArr.push(res.product.id);
        });
        this.delCollect(this.idArr);
        
      }
    },

    // 商品价格
    howMany() {
      this.singleProductLadder.forEach((pri, index) => {
        if (this.buyNum >= this.singleProductLadder[index].count) {
          this.changePrice = this.singleProductLadder[index].price;
        } else if (this.buyNum <= this.singleProductLadder[0].count) {
          this.changePrice = this.singleProductLadder[0].price;
        }
      });
    },

    //加入购物车弹框
    showDialog(index) {
      this.buyDialogVisible = true;
      this.singleCommodityProduct = this.setCollectData[index].product;
      this.singleProductLadder = this.setCollectData[index].productLadder;
      this.changePrice = this.singleProductLadder[0].price;
    },
    // 加入购物车
    async addToShopCart() {
      this.buyDialogVisible = false;
      let data = {
        brandName: this.singleCommodityProduct.brandName,
        picPath: this.singleCommodityProduct.pic,
        productId: this.singleCommodityProduct.id,
        productName: this.singleCommodityProduct.name,
        productNumber: this.buyNum,
        productPrice: this.changePrice,
        productSn: this.singleCommodityProduct.productSn,
        productSpecifications: this.singleCommodityProduct
          .productSpecifications,
        productType: this.singleCommodityProduct.productType,
        unit: this.singleCommodityProduct.unit,
        unitNum: this.singleCommodityProduct.unitNum,
        stock: this.singleCommodityProduct.stock
      };
      let res = await this.$http.post("/api/member/cart/add", data);
      this.$message({
        type: "success",
        message: "已加入购物车！"
      });
      this.reload(); //刷新当前页
    },

    // 实现多选框全选反选功能
    setCheckedAll(val) {
      this.checkModel = val ? this.setCollectData : [];
      if (this.checkAll) {
        this.setCollectData.forEach(res => {
          this.selectedGoods = this.setCollectData;
        });
      }
    },
    setCheckedModel(value) {
      let checkedCount = value.length;
      this.checkAll = checkedCount === this.setCollectData.length;
      this.selectedGoods = value;
    },
    // 分页
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    }
  }
};
</script>
<style lang="less" scope>
#favorite {
  .classify {
    border: 1px solid #e5e5e5;
    padding: 10px 0;
    .el-col {
      text-align: center;
      line-height: 24px;
      &:nth-of-type(2) {
        text-align: left;
        ul {
          li {
            display: inline-block;
            width: 150px;
            word-break: break-all;
            overflow: auto;
          }
        }
      }

      &:nth-of-type(3) {
        a {
          &:hover {
            color: #0193e6;
            i {
              border: 1px solid #0193e6;
              color: #0193e6;
            }
          }
          i {
            font-weight: bold;
            padding: 4px;
            border: 1px solid #a8a8a8;
          }
        }
      }
    }
    .find {
      padding: 4px 10px;
      background-color: #0193e6;
      color: #fff;
    }
  }

  .commodity-information {
    padding: 20px;
    margin-top: 15px;
    border: 1px solid #e5e5e5;
    .checkbox {
      text-align: center;
      .el-checkbox__input {
        vertical-align: top;
      }
      img {
        display: block;
        width: 80px;
        height: 80px;
      }
    }

    .img {
      text-align: center;
      img {
        width: 80px;
        height: 80px;
      }
    }
    .message {
      ul {
        li {
          line-height: 24px;
          &:nth-of-type(2) {
            a {
              color: #0193e6;
            }
          }

          &:nth-of-type(5) {
            i {
              color: #999;
            }
          }
        }
      }
    }

    .tax {
      ul {
        li {
          line-height: 24px;
          span {
            display: inline-block;
            width: 114px;
            text-align: right;
          }
          i {
            font-weight: bold;
            color: #ff7900;
          }
        }
      }
    }

    .btn {
      margin-top: 50px;
      text-align: center;
    }
  }
  // 本页面按钮公共样式
  .el-button {
    padding: 6px 10px;
  }

  .check-all {
    padding: 20px 20px 20px 33px;
    margin-top: 15px;
    border: 1px solid #e5e5e5;
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