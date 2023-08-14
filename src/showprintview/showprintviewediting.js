import {Plugin} from "@ckeditor/ckeditor5-core";
import ShowPrintViewCommand from "./showprintviewcommand";
import DownloadPdfCommand from "./downloadpdfcommand";

export default class ShowPrintViewEditing extends Plugin {
  init() {
    this.editor.commands.add('showPrintView', new ShowPrintViewCommand(this.editor));
    this.editor.commands.add('downloadPdf', new DownloadPdfCommand(this.editor));
  }
}
