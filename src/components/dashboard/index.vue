<style lang="less" scoped>
@import url("../../less/dashboard/index.less");
</style>

<template>
  <div class="statistics-body">
    <Row
      type="flex"
      justify="space-around"
      class="code-row-bg"
    >
      <Col
        :span="4"
        v-for="(item, index) in listList"
        :key="index"
        class="statistics-tag"
      >
      <div
        class="tage-left"
        :style="{backgroundColor:item.color}"
      >
        <Icon
          :type="item.icon"
          :size="40"
          color="#fff"
          class="statistics-icone"
        />
      </div>
      <div
        class="tage-right"
        :style="{borderColor:item.color}"
      >
        <p class="tage-font">{{item.numb}}</p>
        <p class="tage-font-name">{{item.name}}</p>
      </div>
      </Col>
    </Row>
    <Row :gutter='16'>
      <Col :span="12">
      <div class="statistics-chart">
        <div
          ref="chartLine"
          :style="{width: '99%', height: '300px'}"
        ></div>
      </div>
      </Col>
      <Col :span="12">
      <div class="statistics-chart">
        <div
          ref="lineChart"
          :style="{width: '99%', height: '300px'}"
        ></div>
      </div>
      </Col>
      <Col
        :span="24"
        style="margin-top:10px;"
      >
      <div class="statistics-chart">
        <div
          ref='histogram'
          :style="{width: '99%', height: '500px'}"
        ></div>
      </div>
      </Col>
    </Row>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class statistics extends Vue {
  listList: Array<object> = [
    { numb: 80, name: "新增用户", icon: "md-person-add", color: "#3787ff" },
    {
      numb: 412,
      name: "累计点击",
      icon: "ios-locate-outline",
      color: "#7DB500"
    },
    { numb: 40, name: "新增问答", icon: "ios-chatbubbles", color: "#F99713" },
    { numb: 121, name: "分享统计", icon: "ios-link-outline", color: "#E54028" },
    { numb: 48, name: "新增互动", icon: "md-contacts", color: "#E46CBB" },
    { numb: 99, name: "新增页面", icon: "ios-copy-outline", color: "#87318C" }
  ];
  /**
   * @author: 青稞
   * @description: 生成饼图、线图
   * @param {type}
   * @return:
   * @Date: 2019-06-14 22:21:01
   */
  drawChart() {
    let chart1 = this.$echarts.init(this.$refs.chartLine);
    let option = {
      title: {
        text: "某站点用户访问来源",
        subtext: "纯属虚构",
        left: "left"
      },
      tooltip: {
        trigger: "item",
        formatter: "{a} <br/>{b} : {c} ({d}%)"
      },
      legend: {
        orient: "horizontal",
        right: "top",
        align: "auto",
        data: ["直接访问", "邮件营销", "联盟广告", "视频广告", "搜索引擎"]
      },
      series: [
        {
          name: "访问来源",
          type: "pie",
          radius: "55%",
          center: ["50%", "60%"],
          data: [
            { value: 335, name: "直接访问" },
            { value: 310, name: "邮件营销" },
            { value: 234, name: "联盟广告" },
            { value: 135, name: "视频广告" },
            { value: 1548, name: "搜索引擎" }
          ],
          itemStyle: {
            emphasis: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: "rgba(0, 0, 0, 0.5)"
            }
          }
        }
      ]
    };

    chart1.setOption(option, true);
    // 结束饼图
    let lineC = this.$echarts.init(this.$refs.lineChart);
    let lineOption = {
      title: {
        text: "折线图堆叠"
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            label: {
                backgroundColor: '#6a7985'
            }
        }
      },
      legend: {
        data: ["邮件营销", "联盟广告", "视频广告", "直接访问", "搜索引擎"]
      },
      grid: {
        left: "3%",
        right: "4%",
        bottom: "3%",
        containLabel: true
      },
      toolbox: {
        feature: {
          saveAsImage: {},
          restore: {},
          dataView: {},
          magicType: { type: ["line", "bar"] }
        }
      },
      xAxis: {
        type: "category",
        boundaryGap: false,
        data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"]
      },
      yAxis: {
        type: "value"
      },
      series: [
        {
          name: "邮件营销",
          type: "line",
          stack: "总量",
          areaStyle: {},
          data: [120, 132, 101, 134, 90, 230, 210]
        },
        {
          name: "联盟广告",
          type: "line",
          stack: "总量",
          areaStyle: {},
          data: [220, 182, 191, 234, 290, 330, 310]
        },
        {
          name: "视频广告",
          type: "line",
          stack: "总量",
          areaStyle: {},
          data: [150, 232, 201, 154, 190, 330, 410]
        },
        {
          name: "直接访问",
          type: "line",
          stack: "总量",
          areaStyle: {},
          data: [320, 332, 301, 334, 390, 330, 320]
        },
        {
          name: "搜索引擎",
          type: "line",
          stack: "总量",
          areaStyle: {},
          data: [820, 932, 901, 934, 1290, 1330, 1320]
        }
      ]
    };
    lineC.setOption(lineOption, true);
    this.drawHistogram();
  }

  drawHistogram() {
    let histogramC = this.$echarts.init(this.$refs.histogram);
    let option = {
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "cross",
          crossStyle: {
            color: "#999"
          }
        }
      },
      toolbox: {
        feature: {
          dataView: { show: true, readOnly: false },
          magicType: { show: true, type: ["line", "bar"] },
          restore: { show: true },
          saveAsImage: { show: true }
        }
      },
      legend: {
        data: ["蒸发量", "降水量", "平均温度"]
      },
      xAxis: [
        {
          type: "category",
          data: [
            "1月",
            "2月",
            "3月",
            "4月",
            "5月",
            "6月",
            "7月",
            "8月",
            "9月",
            "10月",
            "11月",
            "12月"
          ],
          axisPointer: {
            type: "shadow"
          }
        }
      ],
      yAxis: [
        {
          type: "value",
          name: "水量",
          min: 0,
          max: 250,
          interval: 50,
          axisLabel: {
            formatter: "{value} ml"
          }
        },
        {
          type: "value",
          name: "温度",
          min: 0,
          max: 25,
          interval: 5,
          axisLabel: {
            formatter: "{value} °C"
          }
        }
      ],
      series: [
        {
          name: "蒸发量",
          type: "bar",
          data: [
            2.0,
            4.9,
            7.0,
            23.2,
            25.6,
            76.7,
            135.6,
            162.2,
            32.6,
            20.0,
            6.4,
            3.3
          ]
        },
        {
          name: "降水量",
          type: "bar",
          data: [
            2.6,
            5.9,
            9.0,
            26.4,
            28.7,
            70.7,
            175.6,
            182.2,
            48.7,
            18.8,
            6.0,
            2.3
          ]
        },
        {
          name: "平均温度",
          type: "line",
          yAxisIndex: 1,
          data: [
            2.0,
            2.2,
            3.3,
            4.5,
            6.3,
            10.2,
            20.3,
            23.4,
            23.0,
            16.5,
            12.0,
            6.2
          ]
        }
      ]
    };

    histogramC.setOption(option, true);
  }
  mounted() {
    this.drawChart();
  }
}
</script>
