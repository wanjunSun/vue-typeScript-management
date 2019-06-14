<template>
  <div class="hedaer-body">
    <Breadcrumb style="display:inline-block;">
      <BreadcrumbItem to="/pagehome"><span style="color: #fff;">首页</span></BreadcrumbItem>
      <BreadcrumbItem to="/pagehome"><span style="color: #fff;">首页</span></BreadcrumbItem>
      <BreadcrumbItem to="/pagehome"><span style="color: #fff;">首页</span></BreadcrumbItem>
    </Breadcrumb>
    <div class="hedaer-other">
      <div class="header-scanner">
        <Icon :type="iconType" :size="20" @click="fullScreen" color='#fff'/>
      </div>
      <Dropdown trigger="click">
        <div class="header-Avatar">
          <img src="../assets/头像.jpg">
          <Icon type="ios-arrow-down" class="header-icon"  color='#fff'></Icon>
        </div>
        <DropdownMenu slot="list">
          <DropdownItem>个 人 中 心</DropdownItem>
          <DropdownItem divided>退 出</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import {requestFullScreen,exitFullScreen} from '../utils/utils';
@Component
export default class myHeader extends Vue {
  iconType: string = "ios-expand";
  fullScreen() {
    if (this.iconType === "ios-expand") {
      this.iconType = "ios-contract";
      requestFullScreen();
    } else {
      this.iconType = "ios-expand";
      exitFullScreen();
    }
  }
  mounted() {}
}
</script>

<style lang="less" scoped>
@import url("../less/header.less");
</style>