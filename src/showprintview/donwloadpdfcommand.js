import {Command} from "@ckeditor/ckeditor5-core";
import { jsPDF } from "jspdf";

export default class DownloadPdfCommand extends Command {
  constructor(editor) {
    super(editor);
  }

  execute() {
    const format = this.editor.config.get("pdf.format") || [700, 987];
    const orientation = this.editor.config.get("pdf.orientation") || "portrait";
    const xPadding = this.editor.config.get("pdf.xPadding") || 20;
    const yPadding = this.editor.config.get("pdf.yPadding") || 30;
    const unit = this.editor.config.get("pdf.unit") || "px";

    let pdf = new jsPDF({
      orientation,
      unit,
      format,
    });

    const editorRoot = this.editor.editing.view.getDomRoot();
    editorRoot.className = "";

    pdf.html(this.editor.editing.view.getDomRoot(), {
      callback: function (pdf) {
        pdf.save()
      },
      x: xPadding,
      y: yPadding
    });

    return true;
  }
}
