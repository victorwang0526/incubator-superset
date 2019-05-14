export default function transformProps(chartProps) {
    const {
      width,
      height,
      rawFormData,
      payload,
      setControlValue,
      onAddFilter,
      setTooltip,
    } = chartProps;

    return {
      formData: rawFormData,
      data: payload.data,
      setControlValue,
      width,
      height,
      onAddFilter,
      setTooltip,
    };
  }
