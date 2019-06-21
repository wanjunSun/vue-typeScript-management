<template>
  <div>
    <span>打开方向：&nbsp;</span>
    <i-switch @on-change="changeDrawe">
      <span slot="open">左</span>
      <span slot="close">右</span>
    </i-switch>
    <span>是否使用遮罩层:&nbsp;</span>
    <i-switch @on-change="changeMask">
      <span slot="open">开</span>
      <span slot="close">关</span>
    </i-switch>
    <span>是否开启拖拽:&nbsp;</span>
    <i-switch @on-change="changeDraggable">
      <span slot="open">开</span>
      <span slot="close">关</span>
    </i-switch>
    <Button @click="value2 = true" type="primary">打开</Button>
    <Drawer
      title="窗口"
      :placement="drawerDirection"
      :mask="isShowMask"
      v-model="value2"
      :draggable="isOpenDraggable"
    >
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </Drawer>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class drag extends Vue {
  value2: boolean = false;
  isShowMask: boolean = false;
  isOpenDraggable: boolean = false;
  drawerDirection: string = "right";

  changeDrawe(value: boolean) {
    value
      ? (this.drawerDirection = "left")
      : (this.drawerDirection = "right");
  }
  changeMask(value: boolean) {
    this.isShowMask = value;
  }
  changeDraggable(value: boolean) {
    this.isOpenDraggable = value;
  }
}
</script>
