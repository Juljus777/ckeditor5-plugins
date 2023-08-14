import {Plugin} from "@ckeditor/ckeditor5-core";
import ShowPrintPreviewCommand from "./showprintpreviewcommand";

export default class ShowPrintPreviewEditing extends Plugin {
  init() {
    this.editor.commands.add('showPrintPreview', new ShowPrintPreviewCommand(this.editor));
  }
}
