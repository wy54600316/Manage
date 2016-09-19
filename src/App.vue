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
        <router-view></router-view>
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

export default {
  components: {
    Top, Navi
  }
}
</script>

<style lang="less">
*{
  margin: 0;
  padding: 0;
}
html {
  height: 100%;
}
body {
  /*display: flex;
  align-items: flex-start;
  justify-content: center;*/
  height: 100%;
  overflow: hidden;
  font-family: MicrosoftYaHei, Helvetica, sans-serif;
  background-color: #fff;
}
a {
  color: #42b983;
  text-decoration: none;
}
::-webkit-scrollbar {
  overflow: visible;
  width: 6px;
  height: 16px;
}
::-webkit-scrollbar-button {
  width: 0;
  height: 0;
}
::-webkit-scrollbar-corner {
  background: transparent;
}
::-webkit-scrollbar-thumb {
  min-height: 28px;
  padding: 100px 0 0;
  border: solid transparent;
  border-width: 1px;
  background-color: rgba(138,153,170,.6);
  background-clip: padding-box;
  border-radius: 3px;
}
::-webkit-scrollbar-track {
  background-color: transparent;
}
::-webkit-scrollbar-track-piece {
    background-color: transparent;
}

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
    background-color: #3CBAFF;
  }
  .main-content {
    position: relative;
    height: 100%;
    padding-top: 60px;
    overflow: hidden;

    .main-left {
      float: left;
      width: 230px;
      height: 100%;
      border-right: 1px solid #dcdcdc;
      overflow: auto;
    }
    .main-right {
      width: auto;
      height: 100%;
      overflow-x: hidden;
      overflow-y: auto;
    }
  }
}
</style>
