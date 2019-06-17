<template>
  <div id="after-sales">
    <!-- 售后服务 -->
    <div class="member-title">
      <h3>售后服务</h3>
    </div>
    <div class="search">
      <el-input placeholder="请输入订单编号进行查询"></el-input> 
      <el-button type="primary">查询</el-button>
    </div>
     <!-- 表格 -->
    <el-table class="table" border highlight-current-row style="width: 100%">
      <el-table-column property="serialNumber" label="序号" width="80"></el-table-column>
      <el-table-column property="orderNumber " label="订单号" width="120"></el-table-column>
      <el-table-column property="类型 " label="退款类型" width="120"></el-table-column>
      <el-table-column property="time" label="申请时间" width="150"></el-table-column>
      <el-table-column property="way" label="退款方式" width="120"></el-table-column>
      <el-table-column property="sum" label="退款金额" width="120"></el-table-column>
      <el-table-column property="status" label="退款状态" width="150"></el-table-column>
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
export default {};
</script>
<style lang="less" scope>
#after-sales {
  .search {
    margin: 20px 0;
    .el-input {
      width: 200px;
      height: 30px;
      .el-input__inner {
        width: 100%;
        height: 100%;
        line-height: 30px;
      }
    }
    .el-button {
      padding: 7px 15px;
    }
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