import {Command} from "@ckeditor/ckeditor5-core";
import { jsPDF } from "jspdf";
import {pdfGeneratorDefaults} from "./pdfGeneratorDefaults";

export default class DownloadPdfCommand extends Command {
  constructor(editor) {
    super(editor);
  }

  execute() {
    const format = this.editor.config.get("pdf.format") || pdfGeneratorDefaults.format;
    const orientation = this.editor.config.get("pdf.orientation") || pdfGeneratorDefaults.orientation;
    const xPadding = this.editor.config.get("pdf.xPadding") || pdfGeneratorDefaults.xPadding;
    const yPadding = this.editor.config.get("pdf.yPadding") || pdfGeneratorDefaults.yPadding;
    const unit = this.editor.config.get("pdf.unit") || pdfGeneratorDefaults.unit;

    let pdf = new jsPDF({
      orientation,
      unit,
      format,
      compress: pdfGeneratorDefaults.compress
    });

    const editorRoot = this.editor.editing.view.getDomRoot();

    editorRoot.className = "";

    pdf.html(this.editor.editing.view.getDomRoot(), {
      callback: function (pdf) {
        pdf.save()
      },
      x: 0,
      y: 0,
      margin: [yPadding, xPadding, yPadding, xPadding],
      autoPaging: "text",
    });

    return true;
  }
}
