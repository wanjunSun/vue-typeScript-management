<template>
  <div style="height:100vh;">  
      <Row style="height:100vh;">
        <Col :span="4" style="height:100vh;background-color:#50596e">
            <Menu style='width:100%'></Menu>
        </Col> 
        <Col :span="20">
            <Row>
                <Col :span='24'></Col>
                <Col :span='24'>
                    <router-view></router-view>
                </Col>
            </Row>
        </Col> 
      </Row>
  </div>
</template>

<script lang="ts">
import {Component,Vue} from "vue-property-decorator";
import Menu from '@/components/Menu.vue';
@Component({
    components:{
        Menu
    }
})
export default class Home extends Vue {
  isCollapsed:boolean=false;
  mounted() {
  }
}
</script>

<style lang="less" scoped>
</style>