<template>
  <div class="wrapper">
    <header>
      <div class="header-left">
        <span><i class="icon iconfont icon-leftArrow"></i> {{ $dayjs(new Date()).format('YYYY-MM-DD hh:mm') }} 星期{{ $dayjs(new Date()).day() }}<i class="icon iconfont icon-rightArrow"></i></span>
      </div>
      <div class="header-title">门店数据信息管理</div>
    </header>
    <div class="container">
      <div class="left">
        <div class="left-content">
          <div class="title">
            <div class="icon"></div>
            <div class="title-content">客流统计</div>
          </div>
          <PeopleCount/>
        </div>
        <div class="left-content">
          <div class="title">
            <div class="icon"></div>
            <div class="title-content">营业额统计</div>
          </div>
          <SalesAmount/>
        </div>
      </div>
      <div class="center">
        <Map/>
      </div>
      <div class="right">
        <div class="right-content">
          <div class="title">
            <div class="icon"></div>
            <div class="title-content">收银汇总</div>
          </div>
          <SalesPayCount/>
        </div>
        <div class="right-content">
          <div class="title">
            <div class="icon"></div>
            <div class="title-content">项目钟数统计</div>
          </div>
          <ItemCountZhong/>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

import Map from '@/components/Map/Map'
import PeopleCount from '@/components/PeopleCount/PeopleCount'
import SalesPayCount from '@/components/SalesPayCount/SalesPayCount'
import SalesAmount from '@/components/SalesAmount/SalesAmount'
import ItemCountZhong from '@/components/ItemCountZhong/ItemCountZhong'

export default {
  components: {
    ItemCountZhong,
    SalesAmount,
    SalesPayCount,
    PeopleCount,
    Map
  },
  data () {
    return {}
  }
}
</script>
<style lang="scss" scoped>
@import "~@/shared/helper.scss";

.wrapper {
  header {
    margin: 0 auto;
    height: px(88);
    font-size: px(32);
    color: #fff;
    display: flex;
    justify-content: center;

    .header-left {
      margin-left: px(-520);
      width: px(520);
      height: px(88);
      background: url("../../assets/images/header-left.png") no-repeat;
      background-size: cover;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;

    }

    .header-title {
      background: url("../../assets/images/tittle.png") no-repeat;
      width: px(736);
      background-size: cover;
      line-height: px(88);
    }
  }

  .container {
    display: flex;
    flex: 1;

    .title {
      height: px(57);
      width: px(368);
      background-image: linear-gradient(270deg, rgba(0, 101, 167, 0.00) 0%, #00356E 100%);
      border-radius: 16px 0 0 0;
      margin-left: px(4);
      display: flex;
      align-items: center;

      .title-content {
        color: #fff;
        font-size: px(24);
      }

      .icon {
        margin: 0 px(16);
        width: px(24);
        height: px(24);
        background: url("../../assets/images/arrow.png") no-repeat;
        background-size: cover;
      }
    }

    .left {
      display: flex;
      flex-direction: column;

      .left-content {
        margin: px(24);
        width: px(640);
        height: px(436);
        //border:1px solid green;
        background: url("../../assets/images/square.png") no-repeat;
        background-size: cover;
      }
    }

    .center {
      width: px(1108);
    }

    .right {
      .right-content {
        margin: px(24);
        width: px(640);
        height: px(436);
        //border:1px solid green;
        background: url("../../assets/images/square.png") no-repeat;
        background-size: cover;
      }
    }
  }
}
</style>
