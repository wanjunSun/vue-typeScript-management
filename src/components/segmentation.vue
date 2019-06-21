<template>
  <div class="demo-split">
    <Split v-model="split3">
      <div slot="left" class="demo-split-pane no-padding">
        <Split v-model="split4" mode="vertical">
          <div slot="top" class="demo-split-pane">Top Pane</div>
          <div slot="bottom" class="demo-split-pane">Bottom Pane</div>
        </Split>
      </div>
      <div slot="right" class="demo-split-pane">Right Pane</div>
    </Split>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class segmen extends Vue {
  split3: number = 0.5;
  split4: number = 0.5;
}
</script>
<style lang='less'>
.demo-split {
  height: 500px;
  border: 1px solid #dcdee2;
}
.demo-split-pane {
  padding: 10px;
}
.demo-split-pane.no-padding {
  height: 500px;
  padding: 0;
  .top-pane {
    background-color: #00ff4e;
  }
  .bottom-pane {
    background-color: #00ffd0;
  }
}
.right-pane {
background-color: #ffc800;
}
</style>