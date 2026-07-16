import { useTranslation } from "react-i18next";
import {
  defineSingleFileTool,
  useToolOperation,
} from "@app/hooks/tools/shared/useToolOperation";
import {
  objectToFormData,
  type ToolEndpoint,
  type ToolApiParams,
} from "@app/hooks/tools/shared/toolApiMapping";
import { createStandardErrorHandler } from "@app/utils/toolErrorHandler";
import {
  defaultParameters,
  PdfToOutlineParameters,
} from "@app/hooks/tools/pdfToOutline/usePdfToOutlineParameters";

const ENDPOINT = "/api/v1/convert/pdf/outline" satisfies ToolEndpoint;
type ApiParams = ToolApiParams[typeof ENDPOINT];

const toApiParams = (params: PdfToOutlineParameters): ApiParams => ({
  guidance: params.guidance || undefined,
});

const fromApiParams = (params: ApiParams): Partial<PdfToOutlineParameters> => ({
  guidance: params.guidance ?? "",
});

export const buildPdfToOutlineFormData = (
  parameters: PdfToOutlineParameters,
  file: File,
): FormData => objectToFormData(toApiParams(parameters), { fileInput: file });

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
