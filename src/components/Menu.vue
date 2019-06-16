<template>
  <div style="width:100%;height:100%">
    <Menu
      width='auto'
      theme='light'
      accordion
      style="height:100%"
    >
      <Submenu
        :name="index"
        v-for="(item, index) in meunItem"
        :key="index"
      >
        <template slot="title">
          <Icon
            :type="item.meta.icon"
            size='25'
          />
          {{item.meta.title}}
        </template>
        <MenuItem
          :name="index+'-'+i"
          :to='child  .path'
          v-for="(child, i) in item.children"
          :key="i"
        >
        <Icon
          :type="child.meta.icon"
          size='25'
        />
        {{child.meta.title}}
        </MenuItem>
      </Submenu>
    </Menu>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class myNav extends Vue {
  mounted() {}
  //computed
  get meunItem() {
    let [menus, menusList]: any = [this.$router.options.routes, []];
    menusList = [menus[3]];
    return menusList;
  }
}
</script>
