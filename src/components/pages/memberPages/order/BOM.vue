<template>
  <div id="BOM">
    <!-- BOM管理 -->
    <div class="member-title">
      <h3>BOM管理</h3>
    </div>
    <div class="search">
      <div class="list">
        <span>BOM：</span>
        <el-input></el-input>
      </div>
      <div class="time">
        <span>时间：</span>
        <el-date-picker
          type="daterange"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
        ></el-date-picker>
      </div>
      <el-button type="primary">查询</el-button>
    </div>
    <!-- 表格 -->
    <el-table class="table" border highlight-current-row style="width: 100%">
      <el-table-column type="index" label="序号" width="80"></el-table-column>
      <el-table-column property="name" label="BOM名称" width="420"></el-table-column>
      <el-table-column property="time" label="创建时间" width="280"></el-table-column>
      <el-table-column property="operation" label="操作"></el-table-column>
    </el-table>
    <!-- 分页 -->
    <el-pagination
      class="pages"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage1"
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
      currentPage1: 1
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
#BOM {
  .search {
    display: flex;
    height: 30px;
    line-height: 30px;
    margin: 20px 0;

    .list {
      .el-input {
        width: 250px;
      }
    }
    .el-input__inner {
      width: 100%;
      height: 30px;
      line-height: 30px;
    }
    .time {
      margin-left: 50px;
      .el-input__inner {
        width: 380px;
        height: 30px;
        line-height: 30px;
        .el-input__icon {
          height: 30px;
          line-height: 30px;
        }
        .el-range-separator {
          height: 30px;
          line-height: 30px;
        }
      }
    }
  }
  .el-button {
    margin-left: 10px;
    padding: 4px 20px;
  }
  .table {
    margin-top: 20px;
    border: 1px solid #eee;
    .is-leaf {
      text-align: center;

      .cell {
        font-weight: bold;
        color: #444;
      }
    }
  }
  .pages {
    margin-top: 20px;
    text-align: right;
  }
}
</style>