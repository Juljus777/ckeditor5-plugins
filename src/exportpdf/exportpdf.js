import {Plugin} from "@ckeditor/ckeditor5-core";
import ExportPdfEditing from "./exportpdfediting";
import ExportPdfUi from "./exportpdfui";

export default class ExportPdf extends Plugin {
  static get requires() {
    return [ExportPdfEditing, ExportPdfUi];
  }
}
