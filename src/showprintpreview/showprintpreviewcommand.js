import {Command } from "@ckeditor/ckeditor5-core";

export default class ShowPrintPreviewCommand extends Command {
  constructor(editor) {
    super(editor);
  }

  execute(element) {
    window.print();
  }
}
