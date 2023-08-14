import {Plugin} from "@ckeditor/ckeditor5-core";
import ExportPdfCommand from "./exportpdfcommand";

export default class ExportPdfEditing extends Plugin {
  init() {
    this.editor.commands.add('exportPdfCommand', new ExportPdfCommand(this.editor));
  }
}
