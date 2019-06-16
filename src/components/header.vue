<template>
  <div class="hedaer-body">
    <Modal
      title="通知"
      v-model="infoModal"
      :mask-closable="false"
      :width='300'
      :transition-names="['ease', 'fade']"
    >
      <ul class="header-moder-message">
        <li><strong>更新了<i>面包屑导航</i></strong> </li>
        <li><strong>更新了<i>左侧菜单栏</i></strong> </li>
      </ul>
      <div slot="footer">
        <Button
          @click="infoModal=false"
          type="success"
        >已 阅</Button>
      </div>
    </Modal>
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
      <Dropdown
        trigger="click"
        @on-click='dropMenu'
      >
        <div class="header-Avatar">
          <img src="../assets/头像.jpg">
          <Icon
            type="ios-arrow-down"
            class="header-icon"
            color='#fff'
          ></Icon>
        </div>
        <DropdownMenu slot="list">
          <DropdownItem name='0'>通 知</DropdownItem>
          <DropdownItem
            divided
            name='1'
          >刷 新</DropdownItem>
          <DropdownItem name='2'>退 出</DropdownItem>
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
  infoModal: boolean = false;
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

  //mounted
  /**
   * @author: 青稞
   * @description: 面包屑导航配置
   * @param {type}
   * @return:
   * @Date: 2019-06-16 11:12:06
   */
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
  /**
   * @author: 青稞
   * @description: 关于下拉菜单点击
   * @param {name:0设置 1刷新 2退出}
   * @return:
   * @Date: 2019-06-16 11:13:00
   */
  dropMenu(name: string) {
    switch (name) {
      case "0":
        this.infoModal = true;
        break;
      case "1":
        this.$store.commit("pageReload");
        break;
      case "2":
        this.$router.push("/login");
        break;
      default:
        break;
    }
  }
}
</script>

<style lang="less" scoped>
@import url("../less/header.less");
</style>