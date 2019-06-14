<template>
  <div style="width:100%;height:100%">
     <Menu width='auto' theme='light' accordion  style="height:100%">
        <Submenu name="1">
            <template slot="title">
                <Icon type="ios-paper" />
                内容管理
            </template>
            <MenuItem name="1-1">文章管理</MenuItem>
            <MenuItem name="1-2">评论管理</MenuItem>
            <MenuItem name="1-3">举报管理</MenuItem>
        </Submenu>
    </Menu>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class myNav extends Vue {
  //computed
  get menu(){
      console.log(this.$router);
      return {}
  }
}
</script>
