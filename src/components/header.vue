<template>
  <div class="hedaer-body">
    <Breadcrumb style="display:inline-block;">
      <BreadcrumbItem
        v-for="(item, index) in pathLink"
        :key="index"
      >
        <a
          style="color: #fff;"
          @click.prevent="handleLink(item)"
        >{{item.meta.title}}</a>
      </BreadcrumbItem>
    </Breadcrumb>
    <div class="hedaer-other">
      <div class="header-scanner">
        <Icon
          :type="iconType"
          :size="20"
          @click="fullScreen"
          color='#fff'
        />
      </div>
      <Dropdown trigger="click">
        <div class="header-Avatar">
          <img src="../assets/头像.jpg">
          <Icon
            type="ios-arrow-down"
            class="header-icon"
            color='#fff'
          ></Icon>
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
import { Component, Vue, Watch } from "vue-property-decorator";
import { requestFullScreen, exitFullScreen } from "../utils/utils";
@Component
export default class myHeader extends Vue {
  iconType: string = "ios-expand";
  pathLink: Array<object> = [{}];
  fullScreen() {
    if (this.iconType === "ios-expand") {
      this.iconType = "ios-contract";
      requestFullScreen();
    } else {
      this.iconType = "ios-expand";
      exitFullScreen();
    }
  }
  //监听
  @Watch("$route")
  private changeRouter(val: Route, oldVal: Route) {
    this.getBreadcrumb();
  }
  created() {
    this.getBreadcrumb();
  }
  getBreadcrumb() {
    let matched: any = this.$route.matched.filter(item => item.name);
    const first = matched[0];
    if (first && first.name !== "home")
      matched = [{ path: "/home", meta: { title: "首页" } }].concat(matched);

    this.pathLink = matched.filter((item: any) => item.meta && item.meta.title);
  }
  handleLink(item: any) {
    const { redirect, path } = item;
    if (path == "/home") this.$router.push("/home");
  }
}
</script>

<style lang="less" scoped>
@import url("../less/header.less");
</style>