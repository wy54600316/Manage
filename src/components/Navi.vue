<!-- 左侧导航面板 -->
<template>
  <nav class="manage-nav">
    <div class="nav-item" v-for="item of navitems" track-by="$index">
      <a v-link="{'path': item.link}" v-bind:class="{'focus': $route.path.indexOf(item.preRoute) != -1}">
        <img class="nav-icon" :src="item.img">
        <div class="nav-title">{{item.title}}</div>
      </a>
      <ul v-if="item.subitems" v-show="$route.path.indexOf(item.preRoute) != -1" 
        class="sub-item" transition="expand">
        <li v-for="subitem of item.subitems"><a v-link="{'path': subitem.link}" v-bind:class="{'focus': $route.path == subitem.link}">{{subitem.title}}</a></li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  data () {
    return {
      navitems: [
        { /* 团队 */
          img: require('./../assets/img/i-team.png'),
          title: '团队',
          link: '/team/basic',
          preRoute: '/team', // 一级路由,此处用于聚焦导航的一级菜单
          subitems: [
            {
              title: '团队概况',
              link: '/team/basic'
            },
            {
              title: '团队信息',
              link: '/team/setting'
            }
          ]
        },
        { /* 组织 */
          img: require('./../assets/img/i-org.png'),
          title: '组织',
          link: '/org/ha',
          preRoute: '/org',
          subitems: [
            {
              title: 'ha',
              link: '/org/ha'
            },
            {
              title: 'hei',
              link: '/org/hei'
            }
          ]
        },
        { /* 应用 */
          img: require('./../assets/img/i-application.png'),
          title: '应用',
          link: '/app/ha',
          preRoute: '/app',
          subitems: [
            {
              title: 'ha',
              link: '/app/ha'
            },
            {
              title: 'hei',
              link: '/app/hei'
            }
          ]
        },
        { /* 公共号 */
          img: require('./../assets/img/i-pub.png'),
          title: '公共号',
          link: '/pubacc/a',
          preRoute: '/pubacc',
          subitems: [
            {
              title: 'a',
              link: '/pubacc/a'
            },
            {
              title: 'b',
              link: '/pubacc/b'
            }
          ]
        }
      ]
    }
  },
  methods: {
  }
}
</script>

<style lang="less" scoped>
@import './../assets/less/cloudhub.ui.less';

.manage-nav{
  padding: 20px 0;
  a{
    font-size: 12px;
    color: @font-dark-lighter;
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
        .caret-down(7px, #98A0AA);
        transition: .3s;
      }
      &.focus:after{
        .rotate(180deg);
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
            color: @bg-blue-lighter;

            &:before{
              position: absolute;
              content: '';
              top: 0;
              bottom: 0;
              left: 0;
              width: 5px;
              background-color: @bg-blue-lighter;
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
    height: initial;
    opacity: 1;
  }
  .expand-enter, .expand-leave {
    height: 0;
    opacity: 0;
  }
}
</style>
