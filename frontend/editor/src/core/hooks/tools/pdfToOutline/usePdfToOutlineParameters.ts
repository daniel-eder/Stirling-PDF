import { BaseParameters } from "@app/types/parameters";
import {
  BaseParametersHook,
  useBaseParameters,
} from "@app/hooks/tools/shared/useBaseParameters";

export interface PdfToOutlineParameters extends BaseParameters {
  guidance: string;
}

export const defaultParameters: PdfToOutlineParameters = {
  guidance: "",
};

export type PdfToOutlineParametersHook =
  BaseParametersHook<PdfToOutlineParameters>;

export const usePdfToOutlineParameters = (): PdfToOutlineParametersHook =>
  useBaseParameters({
    defaultParameters,
    endpointName: "pdf-to-outline",
  });
