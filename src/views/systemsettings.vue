<!--
 * @Description: 系统设置
 * @Author: 青稞
 * @Date: 2019-06-16 12:00:46
 * @LastEditors: 青稞
 * @LastEditTime: 2019-06-16 12:21:43
 -->
 <style lang="less" scoped>
@import url("../less/systemsettings.less");
</style>
 
<template>
  <div>
    <div class='system-button'>
      <Button
        type="info"
        size="large"
        @click="exportData"
      >
        <Icon type="ios-download-outline"></Icon> 导出表格数据
      </Button>
    </div>
    <Table
      :data="tableData1"
      :columns="tableColumns1"
      stripe
      ref="table"
    ></Table>
    <div style="margin: 10px;overflow: hidden">
      <div style="float: right;">
        <Page
          :total="100"
          :current="1"
          @on-change="changePage"
        ></Page>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({})
export default class system extends Vue {
  tableData1: any = this.mockTableData1();
  tableColumns1: any = [
    {
      title: "Name",
      key: "name"
    },
    {
      title: "Status",
      key: "status",
      render: (h: any, params: any) => {
        const row = params.row;
        const color =
          row.status === 1 ? "primary" : row.status === 2 ? "success" : "error";
        const text =
          row.status === 1 ? "Working" : row.status === 2 ? "Success" : "Fail";

        return h(
          "Tag",
          {
            props: {
              type: "dot",
              color: color
            }
          },
          text
        );
      }
    },
    {
      title: "Portrayal",
      key: "portrayal",
      render: (h: any, params: any) => {
        return h(
          "Poptip",
          {
            props: {
              trigger: "hover",
              title: params.row.portrayal.length + "portrayals",
              placement: "bottom"
            }
          },
          [
            h("Tag", params.row.portrayal.length),
            h(
              "div",
              {
                slot: "content"
              },
              [
                h(
                  "ul",
                  this.tableData1[params.index].portrayal.map(item => {
                    return h(
                      "li",
                      {
                        style: {
                          textAlign: "center",
                          padding: "4px"
                        }
                      },
                      item
                    );
                  })
                )
              ]
            )
          ]
        );
      }
    },
    {
      title: "People",
      key: "people",
      render: (h: any, params: any) => {
        return h(
          "Poptip",
          {
            props: {
              trigger: "hover",
              title: params.row.people.length + "customers",
              placement: "bottom"
            }
          },
          [
            h("Tag", params.row.people.length),
            h(
              "div",
              {
                slot: "content"
              },
              [
                h(
                  "ul",
                  this.tableData1[params.index].people.map(item => {
                    return h(
                      "li",
                      {
                        style: {
                          textAlign: "center",
                          padding: "4px"
                        }
                      },
                      item.n + "：" + item.c + "People"
                    );
                  })
                )
              ]
            )
          ]
        );
      }
    },
    {
      title: "Sampling Time",
      key: "time",
      render: (h: any, params: any) => {
        return h("div", "Almost" + params.row.time + "days");
      }
    },
    {
      title: "Updated Time",
      key: "update",
      render: (h, params) => {
        return h("div", this.formatDate(this.tableData1[params.index].update));
      }
    }
  ];
  /**
   * @author: 青稞
   * @description: 数据随机
   * @param {type}
   * @return:
   * @Date: 2019-06-16 12:18:13
   */

  mockTableData1() {
    let data = [];
    for (let i = 0; i < 10; i++) {
      data.push({
        name: "Business" + Math.floor(Math.random() * 100 + 1),
        status: Math.floor(Math.random() * 3 + 1),
        portrayal: ["City", "People", "Cost", "Life", "Entertainment"],
        people: [
          {
            n: "People" + Math.floor(Math.random() * 100 + 1),
            c: Math.floor(Math.random() * 1000000 + 100000)
          },
          {
            n: "People" + Math.floor(Math.random() * 100 + 1),
            c: Math.floor(Math.random() * 1000000 + 100000)
          },
          {
            n: "People" + Math.floor(Math.random() * 100 + 1),
            c: Math.floor(Math.random() * 1000000 + 100000)
          }
        ],
        time: Math.floor(Math.random() * 7 + 1),
        update: new Date()
      });
    }
    return data;
  }
  /**
   * @author: 青稞
   * @description: 时间格式化
   * @param {type}
   * @return:
   * @Date: 2019-06-16 12:17:47
   */
  formatDate(date: any) {
    const y = date.getFullYear();
    let m = date.getMonth() + 1;
    m = m < 10 ? "0" + m : m;
    let d = date.getDate();
    d = d < 10 ? "0" + d : d;
    return y + "-" + m + "-" + d;
  }
  changePage() {
    // The simulated data is changed directly here, and the actual usage scenario should fetch the data from the server
    this.tableData1 = this.mockTableData1();
  }
  /**
   * @author: 青稞
   * @description: 导出数据
   * @param {type}
   * @return:
   * @Date: 2019-06-16 12:17:27
   */
  exportData() {
    this.$refs.table.exportCsv({
      filename: "Custom data"
    });
  }
}
</script>
