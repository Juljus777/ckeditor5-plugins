import {Plugin} from "@ckeditor/ckeditor5-core";
import {ButtonView} from "@ckeditor/ckeditor5-ui";
import ShowPrintViewCommand from "./showprintviewcommand";

export default class ShowPrintViewUi extends Plugin {
  init() {
    const {editor} = this;
    editor.ui.componentFactory.add('showPrintViewButton', locale => {
      const view = new ButtonView();
      const command = editor.commands.get('showPrintView');

      view.set({
        label: 'Show print button',
        tooltip: true,
        withText: true,
      });

      view.bind('isOn').to(command);
      view.bind('isEnabled').to(command);

      this.listenTo(view, 'execute', () => {
        editor.execute('showPrintView');
        editor.editing.view.focus();
      })

      return view;
    });

    editor.ui.componentFactory.add('downloadPdf', locale => {
      const view = new ButtonView();
      const command = editor.commands.get('downloadPdf'); // @TODO Button states

      view.set({
        label: 'Download PDF',
        withText: true,
        tooltip: true,
      })

      this.listenTo(view, 'execute', () => {
        editor.execute('downloadPdf');
        editor.editing.view.focus();
      })

      return view;
    })

    editor.ui.componentFactory.add('displayPrintPreview', locale => {
      const view = new ButtonView();
      const command = editor.commands.get('displayPrintPreview'); // @TODO Button states

      view.set({
        label: 'Display print preview',
        withText: true,
        tooltip: true,
      })

      view.listenTo(view, 'execute', () => {
        editor.execute('displayPrintPreview');
        editor.editing.view.focus(); // @TODO Focus the actual preview element instead
      })

      return view;
    })
  }
}
