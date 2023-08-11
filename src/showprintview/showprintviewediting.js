import {Plugin} from "@ckeditor/ckeditor5-core";
import ShowPrintViewCommand from "./showprintviewcommand";
import DownloadPdfCommand from "./donwloadpdfcommand";
import DisplayPrintPreview from "./displayprintpreviewcommand";

export default class ShowPrintViewEditing extends Plugin {
  init() {
    this.editor.commands.add('showPrintView', new ShowPrintViewCommand(this.editor));
    this.editor.commands.add('downloadPdf', new DownloadPdfCommand(this.editor));
    this.editor.commands.add('displayPrintPreview', new DisplayPrintPreview(this.editor));
  }
}
