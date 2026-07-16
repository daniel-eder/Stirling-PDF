import { useTranslation } from "react-i18next";
import { createToolFlow } from "@app/components/tools/shared/createToolFlow";
import PdfToOutlineSettings from "@app/components/tools/pdfToOutline/PdfToOutlineSettings";
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
    steps: [
      {
        title: t(
          "pdfToOutline.guidance.stepTitle",
          "Additional Prompt Guidance",
        ),
        isCollapsed: base.settingsCollapsed,
        onCollapsedClick: base.hasResults
          ? base.handleSettingsReset
          : undefined,
        content: (
          <PdfToOutlineSettings
            parameters={base.params.parameters}
            onParameterChange={base.params.updateParameter}
            disabled={base.endpointLoading}
          />
        ),
      },
    ],
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
