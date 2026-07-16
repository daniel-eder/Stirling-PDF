import { Textarea } from "@mantine/core";
import { useTranslation } from "react-i18next";
import { PdfToOutlineParameters } from "@app/hooks/tools/pdfToOutline/usePdfToOutlineParameters";

interface PdfToOutlineSettingsProps {
  parameters: PdfToOutlineParameters;
  onParameterChange: <K extends keyof PdfToOutlineParameters>(
    key: K,
    value: PdfToOutlineParameters[K],
  ) => void;
  disabled?: boolean;
}

const PdfToOutlineSettings = ({
  parameters,
  onParameterChange,
  disabled = false,
}: PdfToOutlineSettingsProps) => {
  const { t } = useTranslation();

  return (
    <Textarea
      label={t("pdfToOutline.guidance.label", "AI Guidance (optional)")}
      placeholder={t(
        "pdfToOutline.guidance.placeholder",
        "e.g. Focus on chapter headings and ignore page numbers",
      )}
      description={t(
        "pdfToOutline.guidance.description",
        "Provide additional context for the AI outline generation (max 1000 characters)",
      )}
      value={parameters.guidance}
      onChange={(e) => onParameterChange("guidance", e.currentTarget.value)}
      disabled={disabled}
      autosize
      minRows={3}
      maxRows={6}
      maxLength={1000}
    />
  );
};

export default PdfToOutlineSettings;
