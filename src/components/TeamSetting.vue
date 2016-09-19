<!-- 团队-团队设置 -->
<template>
  <div class="team-setting">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      msg: '团队-团队设置!'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.team-setting{
  h1 {
    color: #42b983;
  }
}
</style>
