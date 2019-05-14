import { Preset } from '@superset-ui/core';
import BarChartPlugin from '../echarts/Bar/BarChartPlugin';

export default class EchartsChartPreset extends Preset {
    constructor() {
        super({
            name: 'Echart charts',
            plugins: [
                new BarChartPlugin().configure({ key: 'echarts_bar' }),
            ],
        });
    }
}
