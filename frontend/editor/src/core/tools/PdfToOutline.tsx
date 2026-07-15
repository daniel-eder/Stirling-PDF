import { useTranslation } from "react-i18next";
import { createToolFlow } from "@app/components/tools/shared/createToolFlow";
import { usePdfToOutlineParameters } from "@app/hooks/tools/pdfToOutline/usePdfToOutlineParameters";
import { usePdfToOutlineOperation } from "@app/hooks/tools/pdfToOutline/usePdfToOutlineOperation";
import { useBaseTool } from "@app/hooks/tools/shared/useBaseTool";
import { BaseToolProps, ToolComponent } from "@app/types/tool";

const PdfToOutline = (props: BaseToolProps) => {
  const { t } = useTranslation();
  const base = useBaseTool(
    "pdfToOutline",
    usePdfToOutlineParameters,
    usePdfToOutlineOperation,
    props,
  );

  return createToolFlow({
    files: {
      selectedFiles: base.selectedFiles,
      isCollapsed: base.hasResults,
    },
    steps: [],
    executeButton: {
      text: t("pdfToOutline.submit", "Generate Table of Contents"),
      isVisible: !base.hasResults,
      loadingText: t("pdfToOutline.loading", "Analyzing document..."),
      onClick: base.handleExecute,
      endpointEnabled: base.endpointEnabled,
      paramsValid: base.params.validateParameters(),
    },
    review: {
      isVisible: base.hasResults,
      operation: base.operation,
      title: t("pdfToOutline.results.title", "Generated Table of Contents"),
      onFileClick: base.handleThumbnailClick,
      onUndo: base.handleUndo,
    },
  });
};

PdfToOutline.tool = () => usePdfToOutlineOperation;

export default PdfToOutline as ToolComponent;
