import {Command } from "@ckeditor/ckeditor5-core";

export default class ShowPrintViewCommand extends Command {
  constructor(editor) {
    super(editor);
  }

  execute(element) {
    window.print();
  }
}
