import { useTranslation } from "react-i18next";
import {
  defineSingleFileTool,
  useToolOperation,
} from "@app/hooks/tools/shared/useToolOperation";
import {
  fileOnlyMapping,
  objectToFormData,
  type ToolEndpoint,
} from "@app/hooks/tools/shared/toolApiMapping";
import { createStandardErrorHandler } from "@app/utils/toolErrorHandler";
import {
  defaultParameters,
  PdfToOutlineParameters,
} from "@app/hooks/tools/pdfToOutline/usePdfToOutlineParameters";

const ENDPOINT = "/api/v1/convert/pdf/outline" satisfies ToolEndpoint;
const { toApiParams, fromApiParams } = fileOnlyMapping();

export const buildPdfToOutlineFormData = (
  _parameters: PdfToOutlineParameters,
  file: File,
): FormData => objectToFormData(toApiParams(), { fileInput: file });

export const pdfToOutlineOperationConfig = defineSingleFileTool({
  buildFormData: buildPdfToOutlineFormData,
  toApiParams,
  fromApiParams,
  operationType: "pdfToOutline",
  endpoint: ENDPOINT,
  defaultParameters,
});

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
