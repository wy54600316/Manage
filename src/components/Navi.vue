<!-- 左侧导航面板 -->
<template>
  <nav class="manage-nav">
    <div class="nav-item">
      <a v-link="{'path': '/team/basic'}" v-bind:class="{'focus': $route.path.indexOf('team') != -1 || $route.path == '/'}">
        <img class="nav-icon" src="./../assets/img/i-team.png">
        <div class="nav-title">团队</div>
      </a>
      <ul class="sub-item" v-show="$route.path.indexOf('team') != -1 || $route.path == '/'" transition="expand">
        <li><a v-link="{'path': '/team/basic'}" v-bind:class="{'focus': $route.path.indexOf('/team/basic') != -1 || $route.path == '/'}">基本信息</a></li>
        <li><a v-link="{'path': '/team/setting'}" v-bind:class="{'focus': $route.path.indexOf('/team/setting') != -1}">团队设置</a></li>
      </ul>
    </div>
    <div class="nav-item">
      <a v-link="{'path': '/org/ha'}" v-bind:class="{'focus': $route.path.indexOf('org') != -1}">
        <img class="nav-icon" src="./../assets/img/i-org.png">
        <div class="nav-title">组织</div>
      </a>
      <ul class="sub-item" v-show="$route.path.indexOf('org') != -1" transition="expand">
        <li><a v-link="{'path': '/org/ha'}" v-bind:class="{'focus': $route.path.indexOf('/org/ha') != -1}">ha</a></li>
        <li><a v-link="{'path': '/org/hei'}" v-bind:class="{'focus': $route.path.indexOf('/org/hei') != -1}">hei</a></li>
      </ul>
    </div>
    <div class="nav-item">
      <a v-link="{'path': '/app'}" v-bind:class="{'focus': $route.path.indexOf('app') != -1}">
        <img class="nav-icon" src="./../assets/img/i-application.png">
        <div class="nav-title">应用</div>
      </a>
    </div>
    <div class="nav-item">
      <a v-link="{'path': '/pubacc/ha'}" v-bind:class="{'focus': $route.path.indexOf('pubacc') != -1}">
        <img class="nav-icon" src="./../assets/img/i-pub.png">
        <div class="nav-title">公共号</div>
      </a>
      <ul class="sub-item" v-show="$route.path.indexOf('pubacc') != -1" transition="expand">
        <li><a v-link="{'path': '/pubacc/ha'}" v-bind:class="{'focus': $route.path.indexOf('/pubacc/ha') != -1}">ha</a></li>
        <li><a v-link="{'path': '/pubacc/hei'}" v-bind:class="{'focus': $route.path.indexOf('/pubacc/hei') != -1}">hei</a></li>
        <li><a v-link="{'path': '/pubacc/ha1'}" v-bind:class="{'focus': $route.path.indexOf('/pubacc/ha1') != -1}">ha1</a></li>
        <li><a v-link="{'path': '/pubacc/hei1'}" v-bind:class="{'focus': $route.path.indexOf('/pubacc/hei1') != -1}">hei1</a></li>
        <li><a v-link="{'path': '/pubacc/ha2'}" v-bind:class="{'focus': $route.path.indexOf('/pubacc/ha2') != -1}">ha2</a></li>
        <li><a v-link="{'path': '/pubacc/hei2'}" v-bind:class="{'focus': $route.path.indexOf('/pubacc/hei2') != -1}">hei2</a></li>
        <li><a v-link="{'path': '/pubacc/ha3'}" v-bind:class="{'focus': $route.path.indexOf('/pubacc/ha3') != -1}">ha3</a></li>
        <li><a v-link="{'path': '/pubacc/hei3'}" v-bind:class="{'focus': $route.path.indexOf('/pubacc/hei3') != -1}">hei3</a></li>
        <li><a v-link="{'path': '/pubacc/ha4'}" v-bind:class="{'focus': $route.path.indexOf('/pubacc/ha4') != -1}">ha4</a></li>
        <li><a v-link="{'path': '/pubacc/hei4'}" v-bind:class="{'focus': $route.path.indexOf('/pubacc/hei4') != -1}">hei4</a></li>
        <li><a v-link="{'path': '/pubacc/ha5'}" v-bind:class="{'focus': $route.path.indexOf('/pubacc/ha5') != -1}">ha5</a></li>
        <li><a v-link="{'path': '/pubacc/hei5'}" v-bind:class="{'focus': $route.path.indexOf('/pubacc/hei5') != -1}">hei5</a></li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  data () {
    return {
      data: {
      }
    }
  },
  methods: {
  }
}
</script>

<style lang="less" scoped>
@mainColor: #3CBAFF;
@fontColor: #3D464A;

.manage-nav{
  padding: 20px 0;
  a{
    font-size: 12px;
    color: @fontColor;
  }

  .nav-item {
    > a{
      position: relative;
      display: block;
      padding: 13px 19px;
      font-size: 14px;

      .nav-icon{
        width: 20px;
        height: 20px;
        vertical-align: middle;
      }
      .nav-title{
        display: inline-block;
        margin-left: 10px;
      }

      &:after{
        position: absolute;
        content: '';
        top: 18px;
        right: 20px;
        width: 0;
        height: 0;
        border-left: 7px solid transparent;
        border-right: 7px solid transparent;
        border-top: 8px solid #98A0AA;
        transition: .3s;
      }
      &.focus:after{
        transform: rotate(-180deg);
      }
    }

    .sub-item{
      position: relative;

      li{
        a{
          position: relative;
          display: block;
          padding: 15px 0 15px 53px;
          font-size: 12px;
          background-color: #F5F8FA;

          &.focus{
            background-color: #F1F3F7;
            color: @mainColor;

            &:before{
              position: absolute;
              content: '';
              top: 0;
              bottom: 0;
              left: 0;
              width: 5px;
              background-color: @mainColor;
            }
          }

          &:hover{
            background-color: #F1F3F7;
          }
        }
      } 
    }
  }

  .expand-transition {
    transition: all .3s ease;
    height: initial;
    overflow: hidden;
    opacity: 1;
  }
  .expand-enter, .expand-leave {
    height: 0;
    opacity: 0;
  }
}
</style>
