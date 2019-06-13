<template>
  <div class="login-body">
    <div class="login-input">
      <h1 class="logn-title">vue-typeScript管理系统</h1>
      <Form :model="formInline">
        <FormItem>
          <Input type="text" size='large' v-model="formInline.user" placeholder="请随便输入">
            <Icon type="ios-person-outline" slot="prepend"></Icon>
          </Input>
        </FormItem>
        <FormItem>
          <Input type="password" size='large' v-model="formInline.password" placeholder="请随便输入">
            <Icon type="ios-lock-outline" slot="prepend"></Icon>
          </Input>
        </FormItem>
      </Form>
      <div class="login-btn">
        <Button type="info" @click="handleSubmit" long>登 录</Button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {Component,Vue} from "vue-property-decorator";

@Component({})
export default class Login extends Vue {
  formInline: any = {
    user: "",
    password: ""
  };
  
  /**
   * @author: 孙万俊
   * @description: 登录验证
   * @param {null}
   * @return:
   * @Date: 2019-06-13 13:46:33
   */
  handleSubmit() {
    if (this.formInline.user == "") {
      this.$Message.warning("请输入账号!");
    } else if (this.formInline.password == "") {
      this.$Message.warning("请输入密码!");
    } else {
      this.$router.push("/home");
    }
  }
  mounted() {
  }
}
</script>

<style lang="less" scoped>
@import url("../less/login.less");
</style>