<template>
  <div id="agent">
    <!-- 代付订单 -->
    <div class="member-title">
      <h3>代付订单</h3>
    </div>
    <!-- 表格 -->
    <el-table class="table" border highlight-current-row style="width: 100%">
      <el-table-column type="index" label="序号" width="80"></el-table-column>
      <el-table-column property="inviter" label="邀请方" width="160"></el-table-column>
      <el-table-column property="number" label="订单编号" width="160"></el-table-column>
      <el-table-column property="money" label="订单金额" width="160"></el-table-column>
      <el-table-column property="status" label="订单状态" width="160"></el-table-column>
      <el-table-column property="time" label="代付时间" width="150"></el-table-column>
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
#agent {
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