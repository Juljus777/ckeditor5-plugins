import {Command } from "@ckeditor/ckeditor5-core";

export default class ShowPrintViewCommand extends Command {
  constructor(editor) {
    super(editor);
  }

  execute() {
    const CLASS_NAME = "show_print_view";
    const view = this.editor.editing.view;
    view.change(writer => {
      for (const root of view.document.roots) {
        if (!root.hasClass(CLASS_NAME)) {
          writer.addClass(CLASS_NAME, root);
        } else {
          writer.removeClass(CLASS_NAME, root);
        }
      }
    })
  }
}
