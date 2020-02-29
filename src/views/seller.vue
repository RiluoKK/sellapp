<template>
  <div id="sellerInfo">
    <div class="sellerInfo">
      <div class="sellerScore">
        <p>{{seller.data.name}}</p>
        <p>
          <img src="../assets/img/star36_on@2x.png" alt />
          <img src="../assets/img/star36_on@2x.png" alt />
          <img src="../assets/img/star36_on@2x.png" alt />
          <img src="../assets/img/star36_on@2x.png" alt />
          <img src="../assets/img/star36_off@2x.png" alt />
          <span>({{seller.data.ratingCount}})</span>
          <span>月售{{seller.data.sellCount}}单</span>
        </p>
      </div>
      <div class="favorite">
        <Icon class="heart" size="34" color="red" type="md-heart" />
        <p>已收藏</p>
      </div>
    </div>
    <div class="shopInfor">
      <div>
        <p>起送价</p>
        <p>
          <span>
            <span>{{seller.data.minPrice}}</span>元
          </span>
        </p>
      </div>
      <div>
        <p>商家配送</p>
        <p>
          <span>
            <span>{{seller.data.deliveryPrice}}</span>元
          </span>
        </p>
      </div>
      <div>
        <p>平均配送时间</p>
        <p>
          <span>
            <span>{{seller.data.deliveryTime}}</span>分钟
          </span>
        </p>
      </div>
    </div>
    <div class="shopBrand">
      <p>公告与活动</p>
      <p>{{seller.data.bulletin}}</p>
      <p>{{seller.data.supports[0].description}}</p>
      <p>{{seller.data.supports[1].description}}</p>
      <p>{{seller.data.supports[2].description}}</p>
      <p>{{seller.data.infos[0]}}</p>
      <p>{{seller.data.supports[2].description}}</p>
      <p>{{seller.data.supports[2].description}}</p>
      <p>{{seller.data.supports[2].description}}</p>
    </div>
    <div class="shopImg">
      <p>商家实景</p>
      <div>
        <img :src="seller.data.pics[1]" alt />
        <img :src="seller.data.pics[2]" alt />
        <img :src="seller.data.pics[3]" alt />
      </div>
    </div>
    <div class="shopInfo">
      <p>{{seller.data.infos[0]}}</p>
      <p>{{seller.data.infos[1]}}</p>
      <p>{{seller.data.infos[2]}}</p>
      <p>{{seller.data.infos[3]}}</p>
    </div>
  </div>
</template>

<script>
import { getSeller } from "../api/apis";
export default {
  data() {
    return {
      seller: {},
      allprice: 0
    };
  },
  created() {
    getSeller().then(res => {
      this.seller = JSON.parse(JSON.stringify(res.data));
    });
  }
};
</script>

<style lang="less" scoped>
#sellerInfo {
  .sellerInfo {
    z-index: 10;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid rgb(221, 221, 221);
    .sellerScore {
      flex: 8;
      p {
        display: flex;
        padding: 10px;
        &:nth-child(2) {
          img {
            display: inline-block;
            width: 18px;
            height: 18px;
          }
          span {
            height: 18px;
            line-height: 18px;
            display: inline-block;
            margin: 0 10px;
          }
        }
      }
    }
    .favorite {
      flex: 2;
      margin: auto;

      .heart {
        display: block;
        width: auto;
        margin: 0 auto;
      }
      p {
        font-size: 12px;
        text-align: center;
      }
    }
  }
  .shopInfor {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    div {
      padding: 20px;
      p {
        text-align: center;
        span {
          span {
            font-size: 24px;
          }
        }
      }
    }
  }
  .shopBrand {
    margin-top: 20px;
    p {
      padding: 10px;
      font-size: 16px;
      &:nth-child(1) {
        color: black;
        font-size: 18px;
        font-weight: bold;
      }
      &:not(:nth-child(1)) {
        margin: 0 10px;
      }
      &:nth-child(2) {
        color: red;
      }
    }
  }
  .shopImg {
    margin-top: 20px;
    width: 100%;
    p {
      padding: 10px;
      color: black;
      font-size: 18px;
      font-weight: bold;
    }
    div {
      margin: 10px;
      display: flex;
      justify-content: space-around;
      img {
        width: 30%;
      }
    }
  }
  .shopInfo {
    margin-top: 20px;
    margin-bottom: 100px;
    p {
      padding: 20px;
    }
  }
}
</style>