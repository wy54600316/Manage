<!-- 头部组件（组织名称、用户信息、登录/登出） -->
<template>
  <header class="header">
    <img class="logo" src="./../assets/img/logo.png">
    <span class="head-title"> {{ title }} &middot; <span class="sub-title">{{ subtitle }}</span></span>
    <div class="exit-btn">退出</div>
    <div class="user-info">{{ userName }}</div>
  </header>
</template>

<script>
export default {
  data () {
    return {
      title: '金蝶国际软件集团有限中心',
      subtitle: '管理中心',
      userName: 'admin'
    }
  }
}
</script>

<style lang="less" scoped>
.header{
  position: relative;
  padding: 0 22px;

  .logo {
    margin-top: 11px;
    margin-right: 16px;
    width: 38px;
    height: 38px;
    vertical-align: middle;
  }
  .head-title {
    position: absolute;
    margin-top: 20px;
    font-size: 18px;
    color: #fff;
    letter-spacing: 0px;

    .sub-title{
      font-size: 14px;
    }
  }
  .user-info{
    float: right;
    display: inline-block;
    margin-top: 17px;
    font-size: 16px;
    color: #fff;
    line-height: 2;
  }
  .exit-btn{
    float: right;
    display: inline-block;
    margin-top: 17px;
    margin-left: 16px;
    padding: 8px 18px;
    font-size: 12px;
    color: #3CBAFF;
    background-color: #fff;
    border-radius: 71px;
    cursor: pointer;
  }
}
</style>
