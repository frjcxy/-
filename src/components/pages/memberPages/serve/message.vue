<template>
  <div id="message">
    <!-- 系统信息 -->
    <div class="member-title">
      <h3>系统信息</h3>
    </div>
    <div class="btn">
      <div class="btn-left">
        <a href="#">
          <i class="el-icon-s-comment"></i>未读消息
        </a>
        <a href="#">
          <i class="el-icon-s-comment"></i>已读消息
        </a>
        <a href="#">
          <i class="el-icon-s-comment"></i>全部消息
        </a>
      </div>
      <div class="btn-right">
        <a href="#">标为已读</a>
      </div>
    </div>
    <!-- 表格 -->
    <el-table ref="multipleTable" class="table" border tooltip-effect="dark" style="width: 100%">
      <el-table-column type="selection" width="200"></el-table-column>
      <el-table-column prop="title" label="信息标题" width="300"></el-table-column>
      <el-table-column prop="status" label="状态" width="100"></el-table-column>
      <el-table-column prop="time" label="发送时间" show-overflow-tooltip></el-table-column>
    </el-table>
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
#message {
  .btn {
    margin: 10px 0;
    display: flex;
    justify-content: space-between;
    .btn-left {
      a {
        margin-right: 5px;
      }
    }
    a {
      display: inline-block;
      border: 1px solid #dedede;
      padding: 4px 10px;
      &:hover {
        color: #ff7800;
      }
      i {
        font-size: 16px;
        line-height: 16px;
        color: #ff7800;
      }
    }
  }

  .table {
    margin: 20px 0;
    .cell {
      font-weight: bold;
      color: #444;
    }
    .is-leaf {
      text-align: center;
    }
  }
  .pages {
    text-align: right;
  }
}
</style>