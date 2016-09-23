<!-- 团队-基本信息 -->
<template>
  <div class="team-basic">
    <auth-guide v-if="showGuide" v-on:close-dialog="closeGuide()"></auth-guide>
    <div class="group-layer">
      <div class="auth-info">
        <div class="group-name">{{groupInfo.groupName}} <i :class="{'auth-icon': groupInfo.isAuth, 'service-icon': groupInfo.hasService}"></i></div>
        <div class="auth-status">
          <span class="status">认证状态：{{groupInfo.isAuth ? '已认证' : '未认证'}}{{groupInfo.hasService ? ',享受标服特权' : ''}}</span> 
          <span class="btn auth-btn" v-if="!groupInfo.isAuth" @click="openGuide()">如何认证企业</span>
        </div>
        <!-- 未认证 -->
        <div class="des" v-if="!groupInfo.isAuth">(认证后企业将获得免费电话（500分钟/人月）、名称专用权等认证特权，快到手机端申请吧!)</div>
        <!-- 已认证未购买标服 -->
        <div class="des" v-if="groupInfo.isAuth && !groupInfo.hasService">恭喜您的团队已获得免费电话、名称专用权等认证特权！<br>购买标准运营服务，享受企业闪屏、专属客户经理、专享在线课程、月度运营报告等标服特权，拨打4008-308-110进行了解。</div>
        <!-- 已购买标服 -->
        <div class="des" v-if="groupInfo.isAuth && groupInfo.hasService">恭喜您的团队已获得免费电话、名称专用权等认证特权！并获得企业闪屏、专属客户经理、专享在线课程、月度运营报告等标服特权。</div>
      </div>
      <div class="reg-info">
        <div>注册ID：{{groupInfo.regId}}</div>
        <div>注册时间：{{groupInfo.regTime}}</div>
      </div>
    </div>
    <ul class="data-list">
      <li class="list-item">
        <div class="item-pie">
          <svg class="pie" viewBox="0 0 32 32"><circle r="16" cx="16" cy="16"></circle></svg>
        </div>
        <div class="item-title">团队总人数</div>
        <div class="item-subtitle"><i class="circle point"></i> 已激活人数：<span class="txt">900人</span></div>
        <div class="item-subtitle"><i class="circle unpoint"></i> 未激活人数：<span class="txt">100人</span></div>
        <div class="btn item-btn">短信提醒未激活人员</div>
      </li>
      <li class="list-item">
        <div class="item-pie">
          <svg class="pie" viewBox="0 0 32 32"><circle r="16" cx="16" cy="16"></circle></svg>
        </div>
        <div class="item-title">团队总个数</div>
        <div class="item-subtitle"><i class="circle point"></i> 已设置负责人的部门数：<span class="txt">7人</span></div>
        <div class="item-subtitle"><i class="circle unpoint"></i> 未设置负责人的部门数：<span class="txt">3人</span></div>
        <div class="btn item-btn">设置负责人</div>
      </li>
      <li class="list-item">
        <div class="item-empty"><span>更多数据，敬请期待...</span></div>
      </li>
    </ul>
  </div>
</template>

<script>
import AuthGuide from './AuthGuide'

export default {
  data () {
    return {
      groupInfo: {
        regId: '123456',
        regTime: '2016-08-08',
        groupName: '金蝶国际软件集团有限公司',
        isAuth: false, // 是否认证
        hasService: false, // 是否购买标服
        dept: {}
      },
      showGuide: false
    }
  },
  methods: {
    openGuide: function () { // 打开认证引导
      this.showGuide = true
    },
    closeGuide: function () { // 认证引导窗口回调
      this.showGuide = false
    }
  },
  components: {
    AuthGuide
  }
}
</script>

<style lang="less" scoped>
@import './../assets/less/cloudhub.ui.less';

.team-basic{
  .group-layer {
    .auth-info{
      display: inline-block;
      width: calc(~'100% - 160px');
      height: auto;
      
      .group-name{
        font-size: 16px;
        color: @font-dark-lighter;

        .auth-icon{
          display: inline-block;
          width: 19px;
          height: 19px;
          vertical-align: bottom;
          background: url(./../assets/img/i-auth.png) no-repeat;
          &.service-icon{
            background-image: url(./../assets/img/i-service.png);
          }
        }
      }
      .auth-status{
        height: 40px;
        .status{
          font-size: 14px;
          color: @bg-blue-lighter;
          line-height: 40px;
        }
        .auth-btn{
          padding-left: 0;
          padding-right: 0;
          width: 96px;
          margin-left: 16px;
          border-radius: 23px;
        }
      }
      .des{
        font-size: 12px;
        color: #98A0AA;
        line-height: 21px;
      }
    }
    .reg-info{
      float: right;
      width: 130px;
      height: auto;
      font-size: 12px;
      color: #98A0AA;
      text-align: right;
      line-height: 20px;
    }
  }

  .data-list{
    padding-top: 100px;
    overflow: hidden;

    > li {
      float: left;
      margin: 0 90px 60px 90px;
      width: auto;
      height: auto;
      font-size: 12px;
      text-align: center;

      .item-pie{
        width: 180px;
        height: 180px;
        border: 1px solid @bg-blue-lighter;
        border-radius: 50%;
        overflow: hidden;

        .pie{
          background-color: @bg-blue-lighter;
          opacity: .4;
          transform: rotate(-90deg);
          border-radius: 50%;

          circle{
            fill: transparent;
            stroke: @white;
            stroke-width: 32;
            stroke-dasharray: 10 100;
            transition: .3s;
          }
        }
      }
      .item-title{
        margin-top: 29px;
        margin-bottom: 10px;
        font-size: 14px;
        color: @font-dark-lighter;
      }
      .item-subtitle{
        margin-bottom: 5px;
        color: #98A0AA;

        .circle{
          position: relative;
          display: inline-block;
          width: 10px;
          height: 10px;
          border: 1px solid @bg-blue-lighter;
          border-radius: 50%;
          vertical-align: middle;
        }
        .point:after{
          position: absolute;
          content: '';
          left: 0;
          right: 0;
          top: 0;
          bottom: 0;
          background-color: @bg-blue-lighter;
          opacity: .4;
        }
        .unpoint{

        }
        .txt{
          color: @bg-blue-lighter;
        }
      }
      .item-btn{
        margin: 21px auto;
        padding-left: 0;
        padding-right: 0;
        width: 160px;
      }
      .item-empty{
        position: relative;
        display: table;
        width: 180px;
        height: 180px;
        border: 1px solid @bg-blue-lighter;
        border-radius: 50%;
        overflow: hidden;

        span{
          display: table-cell;
          color: #98A0AA;
          vertical-align: middle;
        }
        &:after{
          content: '';
          position: absolute;
          left: 0;
          right: 0;
          top: 0;
          bottom: 0;
          background-color: @bg-blue-lighter;
          opacity: .1;
        }
      }
    }
  }
}
</style>
