<template>
  <!-- <div id="catalog"> -->
    <div class="parent">
      <!-- <div class="child" v-for="(item,index) in $store.state.secondCategoryData" :key="index"> -->
      <!-- <h4>
          <a href="javascript:;">{{item.name}}</a>
        </h4>
        <ul>
          <li v-for="it in item.pmsProductCategories" :key="it.id">
            <a href="javascript:;">{{it.name}}</a>
          </li>
      </ul>-->
      <div class="child">1</div>
      <div class="child">2</div>
      <div class="child">3</div>
      <div class="child">4</div>
      <div class="child">5</div>
      <div class="child">6</div>
      <div class="child">7</div>
      <div class="child">8</div>
      <div class="child">9</div>
      <div class="child">10</div>
      <div class="child">11</div>
      <div class="child">12</div>
    </div>
  <!-- </div> -->
</template>
<script>
export default {
  data() {
    return {};
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
      console.log(this.$store.state.secondCategoryData);
    }
  }
};
</script>
<style lang="less" scope>
// .catalog {
  .parent {
    width: 100%;
    margin-top: 20px;
    -moz-column-count: 4;
    -webkit-column-count: 4;
    column-count: 4;
    .child {
      margin-bottom: 30px;
      -moz-page-break-inside: avoid;
      -webkit-column-break-inside: avoid;
      break-inside: avoid;
      color: #fff;
      &:nth-of-type(1) {
        height: 100px;
        background: #eee;
      }
      &:nth-of-type(2) {
        height: 120px;
        background: #ccc;
      }
      &:nth-of-type(3) {
        height: 140px;
        background: #ddd;
      }
      &:nth-of-type(4) {
        height: 160px;
        background: #666;
      }
      &:nth-of-type(5) {
        height: 180px;
        background: #444;
      }
      &:nth-of-type(6) {
        height: 200px;
        background: #555;
      }
      &:nth-of-type(7) {
        height: 220px;
        background: #666;
      }
      &:nth-of-type(8) {
        height: 240px;
        background: #777;
      }
      &:nth-of-type(9) {
        height: 240px;
        background: #777;
      }
      &:nth-of-type(10) {
        height: 240px;
        background: #777;
      }
      &:nth-of-type(11) {
        height: 240px;
        background: #777;
      }
      &:nth-of-type(12) {
        height: 240px;
        background: #777;
      }

      // h4 {
      //   a {
      //     color: #0093e5;
      //     font-size: 14px;
      //   }
      // }
    }
  // }
}
</style>
