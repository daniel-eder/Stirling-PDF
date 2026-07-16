package stirling.software.SPDF.model.api.converters;

import lombok.Data;
import lombok.EqualsAndHashCode;

import stirling.software.common.model.api.PDFFile;

@Data
@EqualsAndHashCode(callSuper = true)
public class PdfToOutlineRequest extends PDFFile {

    private String guidance;
}
