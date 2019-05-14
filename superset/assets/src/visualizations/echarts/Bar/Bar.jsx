import React from 'react';
import ReactEcharts from 'echarts-for-react';
import PropTypes from 'prop-types';

const propTypes = {
    data: PropTypes.array,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
};

class BarChartComponent extends React.PureComponent {

    getOption(data) {

        return {
            color: ['#388BFF', '#05C3FA', '#F6931C', '#FFD52E'],
            tooltip: {
                trigger: 'axis',
            },
            legend: {
                top: '8%',
                data: [['Salary']],
            },
            grid: {
                top: '20%',
                left: '3%',
                right: '4%',
                bottom: '5%',
                containLabel: true,
            },
            yAxis: [{
                type: 'value',
                axisLabel: {
                    show: true,
                    interval: 'auto',
                    formatter: '{value} ',
                },
                splitLine: {
                    show: true,
                    lineStyle: {
                        type: 'dashed',
                    },
                },
                show: true,
            }],
            xAxis: [{
                type: 'category',
                axisLabel: {
                    interval: 0,
                    show: true,
                    splitNumber: 15,
                    textStyle: {
                        fontSize: 10,
                        color: '#000',
                    },
                },
                data: data.map(d => d.emp_no),
            }],
            series: [{
                    name: 'Salary',
                    type: 'bar',
                    stack: 'sum',
                    barWidth: '20px',
                    data: data.map(d => d['SUM(salary)']),
                },
            ],
        };
    }

    render() {
        const {
            data,
            width,
            height,
          } = this.props;

        return (
          <ReactEcharts
            option={this.getOption(data)}
            style={{ height, width }}
            className="react_for_echarts"
          />
        );
    }
}

BarChartComponent.propTypes = propTypes;

export default BarChartComponent;
