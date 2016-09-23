<!-- 主面板结构 -->
<template>
  <div class="app">
    <div class="top-content">
      <Top></Top>
    </div>
    <div class="main-content">
      <div class="main-left">
        <Navi></Navi>
      </div>
      <div class="main-right">
        <div class="wrapper">
          <router-view></router-view>
        </div>
        <Foot></Foot>
      </div>
    </div>
    <!-- <p>
      <a v-link="{ path: '/hello' }">go to hello</a>
      <a v-link="{ path: '/world' }">go to world</a>
    </p> -->
  </div>
</template>

<script>
import Top from './components/Top'
import Navi from './components/Navi'
import Foot from './components/Foot'

export default {
  components: {
    Top, Navi, Foot
  }
}
</script>

<style lang="less">
@import './assets/less/cloudhub.ui.less';
@import "./assets/less/base.less";
@import "./assets/less/scrollbar.less";
@import "./assets/less/utility.less";
@import "./assets/less/btn.less";

.app {
  height: 100%;

  .top-content {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 60px;
    overflow: hidden;
    z-index: 999;
    background-color: @bg-blue-lighter;
  }
  .main-content {
    position: relative;
    height: calc(~'100% - 60px'); /*减掉头部高度*/
    padding-top: 60px;
    overflow: hidden;

    .main-left {
      float: left;
      width: 230px;
      height: 100%;
      border-right: 1px solid #dcdcdc;
      overflow-x: hidden;
      overflow-y: auto;
    }
    .main-right {
      width: auto;
      height: 100%;
      overflow-x: hidden;
      overflow-y: auto;

      .wrapper {
        padding: 40px 50px;
        min-height: calc(~'100% - 63px - 40px * 2'); /*减掉底部组件的高度及padding*/
      }
    }
  }
}
</style>
