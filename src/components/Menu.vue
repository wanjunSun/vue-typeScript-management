<template>
  <div style="width:100%;height:100%">
    <Menu width="auto" theme="light" accordion style="height:100%">
      <template v-for="(item, index) in meunItem" >
        <template v-if="item.children && item.children.length !== 1">
          <Submenu :name="index">
            <template slot="title">
              <Icon :type="item.meta.icon" size="25"/>
              {{item.meta.title}}
            </template>
            <MenuItem
              :name="index+'-'+i"
              :to="child.path"
              v-for="(child, i) in item.children"
            >
              <Icon :type="child.meta.icon" size="25"/>
              {{child.meta.title}}
            </MenuItem>
          </Submenu>
        </template>
        <template v-else>
          <MenuItem
            :name="i"
            :to="child.path"
            v-for="(child, i) in item.children"
          >
            <Icon :type="child.meta.icon" size="25"/>
            {{child.meta.title}}
          </MenuItem>
        </template>
      </template>
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
    for (let i = 3; i < menus.length; i++) {
      if(menus[i].name != 'login' || menus[i].name != 'home'){
        menusList.push(menus[i]);
      }
    }
    return menusList;
  }
}
</script>
