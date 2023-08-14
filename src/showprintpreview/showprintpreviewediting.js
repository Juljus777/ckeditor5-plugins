import {Plugin} from "@ckeditor/ckeditor5-core";
import ShowPrintPreviewCommand from "./showprintpreviewcommand";
import DownloadPdfCommand from "./downloadpdfcommand";

export default class ShowPrintPreviewEditing extends Plugin {
  init() {
    this.editor.commands.add('showPrintPreview', new ShowPrintPreviewCommand(this.editor));
    this.editor.commands.add('downloadPdf', new DownloadPdfCommand(this.editor));
  }
}
