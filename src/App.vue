<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { isMobleOrPc } from "./utils/utils";
@Component
export default class app extends Vue {
  mounted() {
    // if (isMobleOrPc()) {
    //   var width = window.screen.width;
    //   window.document.getElementsByTagName("html")[0].style.fontSize =
    //     width / 7.5 + "px";
    //   // this.$router.push("/phoneHomeView");
    // }
    // else this.$router.push("/homeView");
  }
}
</script>


<style lang="less">
body,
div {
  margin: 0;
  padding: 0;
}
</style>
