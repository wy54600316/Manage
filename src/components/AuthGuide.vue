<!-- 认证导航 -->
<template>
  <div class="guide-dialog">
    <div class="mask-dimmer"></div>
    <div class="dialog">
      <div class="dialog-wrapper">
        <div class="dialog-header">
          <ul class="dialog-title">
            <li :class="{'focus': focusPos === 1}" @click="switchStep(1)"><span class="num">1</span><span>进入企业认证 &middot;&middot;&middot;&middot;&middot;&middot;</span></li>
            <li :class="{'focus': focusPos === 2}" @click="switchStep(2)"><span class="num">2</span><span>选择团队类型，填写企业资料 &middot;&middot;&middot;&middot;&middot;&middot;</span></li>
            <li :class="{'focus': focusPos === 3}" @click="switchStep(3)"><span class="num">3</span><span>上传申请材料</span></li>
          </ul>
          <span class="dialog-close" @click="done()"></span>
        </div>
        <div class="dialog-content">
          <div class="des">企业认证成功后可获得免费电话（500分钟/人月）、名称专用权等认证特权，请在云之家移动端进行认证申请。</div>
          <div class="item step-1" v-show="focusPos == 1" transition="expand">
            <img class="" src="./../assets/img/auth-guide/step-1.png">
            <div class="guide-des"><span class="des-t">进入企业认证：</span>打开［我］模块，点击［企业认证］进入企业认证页面，点击［申请认证］。</div>
          </div>
          <div class="item step-2" v-show="focusPos == 2" transition="expand">
            <img class="" src="./../assets/img/auth-guide/step-2.png">
            <div class="guide-des"><span class="des-t">选择团队类型，填写企业资料：</span>团队类型分为：企业、政府／事业单位、其他组织根据指引进行填写。</div>
          </div>
          <div class="item step-3" v-show="focusPos == 3" transition="expand">
            <img class="3" src="./../assets/img/auth-guide/step-3.png">
            <div class="guide-des"><span class="des-t">上传申请材料：</span>根据不同团队类型上传企业基本资料，提交审核。审核结果将有云之家消息通知你。<span class="des-t">需准备的材料：</span>企业：企业工商营业执照、组织机构代码证、申请人手持身份证照政府／事业单位：组织机构代码证、申请人手持身份张照其他组织：组织机构代码证、申请人手持身份张照</div>
          </div>
        </div>
        <div class="dialog-footer">
          <div class="btn  done-btn" v-show="focusPos == 3" @click="done()">完成</div>
          <div class="btn next-btn" v-show="focusPos < 3" @click="switchStep('plus')">下一步</div>
          <div class="btn cancel-btn pre-btn" v-show="focusPos > 1" @click="switchStep('minus')">上一步</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      focusPos: 1
    }
  },
  methods: {
    switchStep: function (flag) {
      if (typeof flag === 'number') {
        this.focusPos = flag
      } else if (flag === 'plus') {
        // 下一步
        this.focusPos < 3 ? this.focusPos++ : this.focusPos
      } else {
        // 上一步
        this.focusPos > 1 ? this.focusPos-- : this.focusPos
      }
    },
    done: function () {
      // 完成
      this.$dispatch('close-dialog', {})
    }
  }
}
</script>
<style lang="less" scoped>
@import './../assets/less/cloudhub.ui.less';

@bodyWidth: 700px;
@headHeight: 40px;
@footHeight: 50px;

.dialog{
  .dialog-wrapper{
    position: relative;
    margin: 50vh auto 0;
    width: @bodyWidth;
    height: 464px;
    background-color: @white;
    border-radius: 4px;
    overflow: hidden;
    .translateY(-50%);
    .box-shadow(0px 1px 10px 0px @dialog-box-shadow);

    .dialog-header{
      position: relative;
      height: @headHeight;
      background-color: @bg-blue-lighter;

      .dialog-title{
        display: table;
        height: 100%;
        color: @white;

        li{
          display: table-cell;
          padding-left: 10px;
          padding-right: 10px;
          vertical-align: middle;
          cursor: pointer;
          opacity: .6;

          span{
            display: inline-block;
            &.num{
              margin-right: 6px;
              height: 17px;
              width: 17px;
              color: @font-blue-lighter;
              text-align: center;
              background-color: @white;
              border-radius: 50%;
            }
          }
          &.focus, &:hover{
            opacity: 1;
          }
        }
      }
      .dialog-close{
        position: absolute;
        display: inline-block;
        right: 10px;
        top: 10px;
        width: 20px;
        height: 20px;
        background: url(./../assets/img/i-close.png) no-repeat;
        cursor: pointer;
      }
    }
    .dialog-content{
      position: relative;
      padding-left: 15px;
      padding-right: 15px;
      height: calc(~'100% - '@headHeight~' - '@footHeight);
      overflow: hidden;

      > .des{
        padding-top: 24px;
        color: @font-blue-lighter;
        text-align: center;
      }
      .item{
        width: @bodyWidth - 30px;
        height: 320px;
        .transition(.3s);

        img{
          float: left;
        }
        div.guide-des{
          display: table-cell;
          padding-right: 50px;
          width: auto;
          height: inherit;
          vertical-align: middle;
          line-height: 24px;

          .des-t{
            display: block;
            margin-top: 17px;
            margin-bottom: 6px;
            font-size: 14px;
            color: @font-blue-lighter;
          }
        }
        &.step-1{
          img{
            margin-top: 40px;
            margin-left: 50px;
            width: 347px;
            height: 267px;
          }
        }
        &.step-2{
          img{
            margin: 40px 50px 0 115px;
            width: 183px;
            height: 257px;
          }
        }
        &.step-3{
          img{
            margin: 40px 40px 0 70px;
            width: 181px;
            height: 254px;
          }
        }
        &.expand-transition {
          height: 320px;
        }
      }
    }
    .dialog-footer{
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: @footHeight;

      .btn{
        float: right;
        margin-top: 5px;
        margin-right: 16px;
      }
    }
  }
}
</style>
