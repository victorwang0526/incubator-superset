import { ChartMetadata, ChartPlugin } from '@superset-ui/chart';
import { t } from '@superset-ui/translation';
import thumbnail from './images/thumbnail.png';
import transformProps from '../transformProps';

const metadata = new ChartMetadata({
    name: t('echart bar'),
    description: '',
    credits: [''],
    thumbnail,
});

export default class BarChartPlugin extends ChartPlugin {
    constructor() {
        super({
            metadata,
            loadChart: () => import('./Bar'),
            transformProps,
        });
    }
}
