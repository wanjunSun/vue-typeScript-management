<template>
  <div style="height:100vh;">  
      <Row style="height:100vh;">
        <Col :span="4" style="height:100vh;">
            <Menu></Menu>
        </Col> 
        <Col :span="20">
            <Row >
                <Col :span='24'>
                    <myHeader></myHeader>
                </Col>
                <Col :span='24' style="padding: 10px; height: calc(100vh - 50px);;overflow: auto;">
                    <router-view v-if="this.$store.state.isRead" ></router-view>
                    <Spin size="large" fix v-else></Spin>
                </Col>  
            </Row>
        </Col> 
      </Row>
  </div>
</template>

<script lang="ts">
import {Component,Vue} from "vue-property-decorator";
import Menu from '@/components/Menu.vue';
import myHeader from '@/components/header.vue';
@Component({
    components:{
        Menu,
        myHeader
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