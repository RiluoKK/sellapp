<template>
  <div id="Ratings">
    <div class="score1">
      <p>{{seller.data.score}}</p>
    </div>
    <div class="score2"></div>
  </div>
</template>

<script>
import { getRatings, getSeller } from "../api/apis";
export default {
  data() {
    return {
      seller: {},
      Ratings: {}
    };
  },
  created() {
    getSeller().then(res => {
      this.seller = JSON.parse(JSON.stringify(res.data));
      console.log(this.seller);
    });
    getRatings().then(res => {
      this.Ratings = JSON.parse(JSON.stringify(res.data));
      console.log(this.Ratings);
    });
  }
};
</script>

<style lang="less" scoped></style>
