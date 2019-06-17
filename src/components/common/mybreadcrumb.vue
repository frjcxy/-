<template>
  <el-breadcrumb separator-class="el-icon-arrow-right" class="my-breadcrumb">
    <el-breadcrumb-item :to="{ path: '/'  }">首页</el-breadcrumb-item>
    <!-- <el-breadcrumb-item>{{this.crumbData.name}}</el-breadcrumb-item> -->
    <!-- <el-breadcrumb-item >{{this.crumbSecondData}}</el-breadcrumb-item> -->
  </el-breadcrumb>
</template>

<script>
export default {
  // 对外暴露的可以设置的属性
  data() {
    return {
      crumbData: "",
    };
  },
  created() {
    this.getCrumbsData();
  },
  methods: {
    getCrumbsData() {
      let id = this.$route.params.id;
      this.crumbData = this.$store.state.tabData[id-1];
    },
    

  }
};
</script>

<style>
</style>
