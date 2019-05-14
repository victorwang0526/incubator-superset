import { t } from '@superset-ui/translation';

export default {
  controlPanelSections: [
    {
      label: t('Query'),
      expanded: true,
      controlSetRows: [
        ['metrics'],
        ['groupby'],
        ['order_by_cols'],
        ['row_limit', 'filter_nulls'],
      ],
    },
  ],
};
