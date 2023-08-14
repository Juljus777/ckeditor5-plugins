import {Plugin} from "@ckeditor/ckeditor5-core";
import {ButtonView} from "@ckeditor/ckeditor5-ui";
import './styles.css';
import printPreviewIcon from "./icons/printPreview.svg";
import exportPdf from "./icons/exportPDF.svg";

export default class ShowPrintPreviewUi extends Plugin {
  init() {
    const {editor} = this;
    editor.ui.componentFactory.add('showPrintPreview', locale => {
      const view = new ButtonView();
      const command = editor.commands.get('showPrintPreview');

      view.set({
        label: 'Show print preview',
        tooltip: true,
        icon: printPreviewIcon
      });

      view.bind('isOn').to(command);
      view.bind('isEnabled').to(command);

      this.listenTo(view, 'execute', (event) => {
        editor.execute('showPrintPreview', event.source.element);
        editor.editing.view.focus();
      })

      return view;
    });

    editor.ui.componentFactory.add('downloadPdf', locale => {
      const view = new ButtonView();
      const command = editor.commands.get('downloadPdf'); // @TODO Button states

      view.set({
        label: 'Download PDF',
        tooltip: true,
        icon: exportPdf,
      })

      this.listenTo(view, 'execute', () => {
        editor.execute('downloadPdf');
        editor.editing.view.focus();
      })

      return view;
    })
  }
}
