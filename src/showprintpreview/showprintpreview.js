import {Plugin} from "@ckeditor/ckeditor5-core";
import ShowPrintPreviewUi from "./showprintpreviewui";
import ShowPrintPreviewEditing from "./showprintpreviewediting";

export default class ShowPrintPreview extends Plugin {
  static get requires() {
    return [ShowPrintPreviewUi, ShowPrintPreviewEditing];
  }
}
