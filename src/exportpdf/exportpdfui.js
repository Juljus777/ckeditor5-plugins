import {Plugin} from "@ckeditor/ckeditor5-core";
import {ButtonView, ContextualBalloon} from "@ckeditor/ckeditor5-ui";
import icon from "./icons/exportPDF.svg";
import ExportPdfView from "./exportpdfview";
import {pdfGeneratorDefaults} from "./pdfGeneratorDefaults";

export default class ExportPdfUi extends Plugin {
  init() {
    const {editor} = this;

    this._balloon = this.editor.plugins.get(ContextualBalloon);
    this.pdfView = this._createPdfView();

    editor.ui.componentFactory.add('exportPdf', locale => {
      const view = new ButtonView();
      const command = this.editor.commands.get('exportPdfCommand');

      view.set({
        label: "Export PDF",
        tooltip: true,
        icon,
      })

      this.listenTo(view, 'execute', () => {
        if (editor.config.get('pdf.userControllableValues')) {
          this._showUI();
        } else {
          editor.execute('exportPdfCommand');
          editor.editing.view.focus();
        }
      })

      return view;
    })
  }

  _createPdfView() {
    const editor = this.editor;
    const pdfView = new ExportPdfView(editor.locale);

    this.listenTo(pdfView, 'submit', () => {
      const values = pdfView.getInputValues();
      editor.execute('exportPdfCommand', values);
      this._hideUI();
    })

    this.listenTo(pdfView, 'cancel', () => {
      this._hideUI();
    })

    return pdfView;
  }

  _showUI() {
    const {editor} = this;

    this._balloon.add({
      view: this.pdfView,
    })

    this.pdfView.pageWidthView.fieldView.element.value = editor.config.get('pdf.format')[0] || pdfGeneratorDefaults.format[0];
    this.pdfView.pageHeightView.fieldView.element.value = editor.config.get('pdf.format')[1] || pdfGeneratorDefaults.format[1];
    this.pdfView.pageXPaddingView.fieldView.element.value = editor.config.get('pdf.xPadding') || pdfGeneratorDefaults.xPadding,
    this.pdfView.pageYPaddingView.fieldView.element.value = editor.config.get('pdf.yPadding') || pdfGeneratorDefaults.yPadding,

    this.pdfView.focus();
  }

  _hideUI() {
    this._balloon.remove(this.pdfView);
    this.editor.editing.view.focus();
  }
}
