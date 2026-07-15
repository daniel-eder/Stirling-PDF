import { useTranslation } from "react-i18next";
import {
  ToolType,
  useToolOperation,
} from "@app/hooks/tools/shared/useToolOperation";
import { createStandardErrorHandler } from "@app/utils/toolErrorHandler";
import {
  defaultParameters,
  PdfToOutlineParameters,
} from "@app/hooks/tools/pdfToOutline/usePdfToOutlineParameters";

export const buildPdfToOutlineFormData = (
  _parameters: PdfToOutlineParameters,
  file: File,
): FormData => {
  const formData = new FormData();
  formData.append("fileInput", file);
  return formData;
};

export const pdfToOutlineOperationConfig = {
  toolType: ToolType.singleFile,
  buildFormData: buildPdfToOutlineFormData,
  operationType: "pdfToOutline",
  endpoint: "/api/v1/convert/pdf/outline",
  defaultParameters,
} as const;

export const usePdfToOutlineOperation = () => {
  const { t } = useTranslation();

  return useToolOperation<PdfToOutlineParameters>({
    ...pdfToOutlineOperationConfig,
    getErrorMessage: createStandardErrorHandler(
      t(
        "pdfToOutline.error.failed",
        "An error occurred while generating the table of contents.",
      ),
    ),
  });
};
