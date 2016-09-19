<!-- 团队-基本信息 -->
<template>
  <div class="team-basic">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: '团队-基本信息!'
    }
  }
}
</script>

<style scoped>
.team-basic{
  h1 {
    color: #42b983;
  }
}
</style>
