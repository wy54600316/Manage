<!-- 底部组件 -->
<template>
  <footer class="footer">
    <div class="cell">
      <a href="//www.yunzhijia.com/home/?m=open&a=about" target="_blank">关于云之家</a> ｜ 
      <a href="http://www.yunzhijia.com/" target="_blank">关于部落</a> ｜ 
      <a href="//www.yunzhijia.com/home/?m=open&a=caseList" target="_blank">客户案例</a> ｜ 
      <a href="//blog.yunzhijia.com/" target="_blank">官方博客</a> ｜ 
      <a href="//www.yunzhijia.com/home/?m=open&a=download" target="_blank">客户端下载</a>
      &nbsp;&nbsp; © 1993-2016 金蝶国际软件集团有限公司版权所有 &nbsp;&nbsp; 
      <a href="http://www.miitbeian.gov.cn/state/outPortal/loginPortal.action" target="_blank">粤ICP备05041751号</a>
    </div>
  </footer>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>
<style lang="less" scoped>
.footer{
  display: table;
  position: relative;
  width: 100%;
  height: 63px;
  text-align: center;
  background-color: #F5F8FA;
  overflow: hidden;

  .cell{
    display: table-cell;
    vertical-align: middle;
    color: #98A0AA;
    font-size: 12px;
    a{
      color: #98A0AA;
      &:hover{
        text-decoration: underline;
      }
    }
  }
  &:before{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background-color: #DCDCDC;
    transform: scaleY(.5);
  }
}
</style>
