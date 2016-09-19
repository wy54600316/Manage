/**
 * 路由配置
 */
export default function (router) {
  router.map({
    '/': {
      component: require('./components/TeamBasic.vue')
    },
    '/team/basic': {
      component: require('./components/TeamBasic.vue')
    },
    '/team/setting': {
      component: require('./components/TeamSetting.vue')
    }
  })
}
