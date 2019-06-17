<template>
  <div id="history">
    <!-- 购买历史 -->
    <div class="member-title">
      <h3>购买历史</h3>
    </div>
    <!-- 搜索 -->
    <div class="search">
      <div class="kind">
        <span>商品类别：</span>
        <el-select placeholder="请选择">
          <el-option></el-option>
        </el-select>
      </div>
      <div class="number">
        <span>商品编号：</span>
        <el-input></el-input>
      </div>
      <div class="keyword">
        <span>关键字：</span>
        <el-input></el-input>
      </div>
      <div class="time">
        <span>购买时间：</span>
        <el-date-picker
          type="daterange"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
        ></el-date-picker>
      </div>
      <el-button type="primary">查询</el-button>
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
  </div>
</template>
<script>
export default {
   data() {
    return {
      value: "",
      currentPage4: 1
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
#history {
  .search {
    display: flex;
    margin: 20px 0;
    &>div {
      margin-right: 30px;
    }
    .kind {
      .el-input {
        width: 130px;
      }
    }
    .el-input {
      width: 72px;
    }
    .el-input__inner {
      width: 100%;
      height: 30px;
      line-height: 30px;
      .el-range-separator {
        height: 30px;
        line-height: 30px;
      }
    }
    .el-input__icon {
      height: 30px;
      line-height: 30px;
    }

    .time {
      .el-input__inner {
        width: 280px;
      }
    }
    .el-button {
      padding: 6px 14px;
    }
  }
  .pages {
    text-align: right;
  }
}
</style>