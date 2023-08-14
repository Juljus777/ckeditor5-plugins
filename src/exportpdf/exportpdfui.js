import {Plugin} from "@ckeditor/ckeditor5-core";
import {ButtonView} from "@ckeditor/ckeditor5-ui";
import icon from "./icons/exportPDF.svg";

export default class ExportPdfUi extends Plugin {
  init() {
    const {editor} = this;

    editor.ui.componentFactory.add('exportPdf', locale => {
      const view = new ButtonView();
      const command = this.editor.commands.get('exportPdfCommand');

      view.set({
        label: "Export PDF",
        tooltip: true,
        icon,
      })

      this.listenTo(view, 'execute', () => {
        editor.execute('exportPdfCommand');
        editor.editing.view.focus();
      })

      return view;
    })
  }
}
