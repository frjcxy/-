<template>
  <div id="myticket">
    <!-- 我的优惠券 -->
    <div class="member-title">
      <h3>我的优惠券</h3>
    </div>
    <div class="dropdown">
      <span>优惠券状态：</span>
      <el-dropdown trigger="click">
        <span class="el-dropdown-link">
          未使用
          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>未使用</el-dropdown-item>
          <el-dropdown-item>已使用</el-dropdown-item>
          <el-dropdown-item>已过期</el-dropdown-item>
          <el-dropdown-item>全部</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <el-button>查询</el-button>
    </div>
    <div class="ticket">
      <ul>
        <li>
          <div class="top">
            <h3>20</h3>
            <p>[ 新人专享 ] 20元全品类优惠券</p>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div class="bottom">
            <p>
              有效期：
              <i>2019-05-10 - 2019-05-25</i>
            </p>
            <p>新人199元大礼包</p>
            <p>使用金额不限</p>
            <button>立即选购</button>
          </div>
        </li>
        <li>
          <div class="top">
            <h3>20</h3>
            <p>[ 新人专享 ] 20元全品类优惠券</p>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div class="bottom">
            <p>
              有效期：
              <i>2019-05-10 - 2019-05-25</i>
            </p>
            <p>新人199元大礼包</p>
            <p>使用金额不限</p>
            <button>立即选购</button>
          </div>
        </li>
        <li>
          <div class="top">
            <h3>20</h3>
            <p>[ 新人专享 ] 20元全品类优惠券</p>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div class="bottom">
            <p>
              有效期：
              <i>2019-05-10 - 2019-05-25</i>
            </p>
            <p>新人199元大礼包</p>
            <p>使用金额不限</p>
            <button>立即选购</button>
          </div>
        </li>
        <li>
          <div class="top">
            <h3>20</h3>
            <p>[ 新人专享 ] 20元全品类优惠券</p>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div class="bottom">
            <p>
              有效期：
              <i>2019-05-10 - 2019-05-25</i>
            </p>
            <p>新人199元大礼包</p>
            <p>使用金额不限</p>
            <button>立即选购</button>
          </div>
        </li>
      </ul>
      <div class="pages">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage4"
          :page-sizes="[100, 200, 300, 400]"
          :page-size="100"
          layout="total, sizes, prev, pager, next, jumper"
          :total="400"
        ></el-pagination>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      currentPage4: 4
    };
  },
  methods: {
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
#myticket {
  .dropdown {
    padding: 10px 0;
    .el-dropdown {
      padding: 2px 5px;
      border: 1px solid #ccc;
    }
    .el-button {
      padding: 4px 10px;
      margin-left: 5px;
    }
  }

  .ticket {
    ul {
      margin-top: 10px;
      li {
        display: inline-block;
        margin: 0 3px;
        width: 234px;
        height: 351px;
        text-align: center;
        .top {
          width: 100%;
          height: 140px;
          background-color: #70c2f1;
          position: relative;
          h3 {
            font-size: 60px;
            line-height: 70px;
            font-weight: bold;
            color: #fff;
            padding-top: 20px;
          }
          p {
            color: #fff;
            font-size: 14px;
          }
          span {
            width: 14px;
            height: 14px;
            background-color: #fff;
            border-radius: 50%;
            position: absolute;
            bottom: -7px;
            &:nth-of-type(1) {
              left: 14px;
            }
            &:nth-of-type(2) {
              left: 42px;
            }
            &:nth-of-type(3) {
              left: 70px;
            }
            &:nth-of-type(4) {
              left: 98px;
            }
            &:nth-of-type(5) {
              left: 126px;
            }
            &:nth-of-type(6) {
              left: 154px;
            }
            &:nth-of-type(7) {
              left: 182px;
            }
            &:nth-of-type(8) {
              left: 210px;
            }
          }
        }
        .bottom {
          p {
            &:nth-of-type(1) {
              padding: 20px 0;
              i {
                color: #999;
              }
            }
            &:nth-of-type(2) {
              line-height: 24px;
            }
          }

          button {
            border: 1px solid #70c2f1;
            color: #70c2f1;
            padding: 6px 34px;
            border-radius: 20px;
            background-color: #fff;
            margin-top: 20px;
            &:hover {
              color: #fff;
              background-color: #70c2f1;
            }
          }
        }
      }
    }
  }

  .pages {
      text-align: right;
    ul {
      margin-top: 0;
      .number {
        width: 30px;
        height: 30px;
        text-align: center;
        line-height: 30px;
        border: 1px solid #c0c4cc;
      }
    }
  }
}
</style>