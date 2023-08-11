import {Plugin} from "@ckeditor/ckeditor5-core";
import ShowPrintViewUi from "./showprintviewui";
import ShowPrintViewEditing from "./showprintviewediting";



export default class ShowPrintView extends Plugin {
  static get requires() {
    return [ShowPrintViewUi, ShowPrintViewEditing];
  }
}
