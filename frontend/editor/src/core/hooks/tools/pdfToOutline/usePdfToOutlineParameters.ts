import { BaseParameters } from "@app/types/parameters";
import {
  BaseParametersHook,
  useBaseParameters,
} from "@app/hooks/tools/shared/useBaseParameters";

export interface PdfToOutlineParameters extends BaseParameters {}

export const defaultParameters: PdfToOutlineParameters = {};

export type PdfToOutlineParametersHook =
  BaseParametersHook<PdfToOutlineParameters>;

export const usePdfToOutlineParameters = (): PdfToOutlineParametersHook =>
  useBaseParameters({
    defaultParameters,
    endpointName: "pdf-to-outline",
  });
