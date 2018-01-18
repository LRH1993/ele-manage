<template>
    <div class="line_container">
      <div id="line" style="width: 90%; height: 450px"></div>
    </div>
</template>

<script type="text/ecmascript-6">
    import echarts from 'echarts/lib/echarts'
    import  'echarts/lib/bar'
    import 'echarts/lib/line'
    import 'echarts/lib/component/title'
    import 'echarts/lib/component/legend'
    import 'echarts/lib/component/toolbox'
    import 'echarts/lib/component/markPoint'
    import 'echarts/lib/component/tooltip'
    export default {
      mounted:function () {
        this.myChart = echarts.init(document.getElementById('line'));
        this.initData();
      },
      props:['sevenDate','sevenDay'],
      methods:{
        initData(){
          const colors = ['#5793f3', '#675bba', '#d14a61'];
          const option = {
            color:colors,
            title:{
              text:'走势图',
              subtext:''
            },
            tooltip:{
              trigger:'axis'
            },
            legend:{
              data:['新注册用户', '新增订单', '新增管理员']
            },
            toolbox:{
              show:true,
              feature:{
                dataZoom:{
                  yAxisIndex:'none'
                },
                dataView:{},
                magicType:{type:['bar','line']},
                restore:{}
              }
            },
            xAxis:{
              type:'category',
              data:this.sevenDay,
              boundaryGap:false
            },
            yAxis:[
              {
                type:'value',
                name:'用户',
                min:0,
                max:200,
                position:left,
                axisLine:{
                  lineStyle:{
                    color:'#999'
                  }
                },
                axisLabel:{
                  formatter:'{value}'
                }
              },
              {
                type:'value',
                name:'订单',
                min:0,
                max:200,
                position:right,
                axisLine:{
                  lineStyle:{
                    color:'#999'
                  }
                },
                axisLabel:{
                  formatter:'{value}'
                }
              }
            ],
            series:[
              {
                name:'新注册用户',
                type:'line',
                data:this.senvenDate[0],
                yAxisIndex:0,
                markPoint:{
                  data:[
                    {type:'max',name:'最大值'},
                    {type:'min',name:'最小值'}
                  ]
                }
              },
              {
                name:'新增订单',
                type:'line',
                data:this.senvenDate[1],
                yAxisIndex:1,
                markPoint:{
                  data:[
                    {type:'max',name:'最大值'},
                    {type:'min',name:'最小值'}
                  ]
                }
              },
              {
                name:'新增管理员',
                type:'line',
                data:this.senvenDate[2],
                yAxisIndex:0,
                markPoint:{
                  data:[
                    {type:'max',name:'最大值'},
                    {type:'min',name:'最小值'}
                  ]
                }
              }
            ]

          };
          this.myChart.setOption(option);
        }
      },
      watch:{
        sevenDate:function () {
          this.initData();
        },
        sevenDay:function () {
          this.initData();
        }
      }
    }
</script>
