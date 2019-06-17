<template>
  <div>
    <router-view v-if="isRouterAlive"></router-view>
  </div>
</template>
<script>
export default {
  provide() {
    return {
      reload: this.reload
    };
  },
  data() {
    return {
      isRouterAlive: true
    };
  },
  methods: {
    reload() {
      this.isRouterAlive = false;
      this.$nextTick(function() {
        this.isRouterAlive = true;
      });
    }
  },
  created() {
    // 解决页面刷新时得不到vuex数据
    localStorage.getItem("userMsg") &&
      this.$store.replaceState(JSON.parse(localStorage.getItem("userMsg")));

    //在页面刷新时将vuex里的信息保存到localStorage里
    window.addEventListener("beforeunload", () => {
      localStorage.setItem("userMsg", JSON.stringify(this.$store.state));
    });
  }
};
</script>
<style>
</style>