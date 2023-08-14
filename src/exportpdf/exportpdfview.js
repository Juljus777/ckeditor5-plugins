import {ButtonView, createLabeledInputText, LabeledFieldView, submitHandler, View} from "@ckeditor/ckeditor5-ui";
import {icons} from "@ckeditor/ckeditor5-core";

export default class exportPdfView extends View {
  constructor(locale) {
    super(locale);

    this.pageHeightView = this._createInput("Page height");
    this.pageWidthView = this._createInput("Page width");
    this.pageXPaddingView = this._createInput("Page horizontal padding");
    this.pageYPaddingView = this._createInput("Page vertical padding");
    // this.pageOrientationView = this._createSelectInput("Orientation");
    // this.pageUnitView = this._createSelectInput("Units");
    // this.pageCompressionView = this._createCheckbox("Compress output");

    this.saveButtonView = this._createSaveButton();
    this.cancelButtonView = this._createCancelButton();

    this.childViews = this.createCollection([
      this.pageHeightView,
      this.pageWidthView,
      this.pageXPaddingView,
      this.pageYPaddingView,
      // this.pageOrientationView,
      // this.pageUnitView,
      // this.pageCompressionView,
      this.saveButtonView,
      this.cancelButtonView,
    ]);

    this.setTemplate({
      tag: 'form',
      attributes: {
        class: ['ck', 'ck-exportpdf-form'],
        tabindex: '-1',
      },
      children: this.childViews
    })
  }

  render() {
    super.render();

    submitHandler({
      view: this,
    })
  }

  destroy() {
    super.destroy();
  }

  focus() {
    this.pageHeightView.focus();
  }

  _createInput(label) {
    const labeledInput = new LabeledFieldView(this.locale, createLabeledInputText);

    labeledInput.label = label;

    return labeledInput;
  }

  _createButton(label, icon, className) {
    const button = new ButtonView()

    button.set( {
      label,
      icon,
      tooltip: true,
      withText: !icon,
      class: className,
    })

    return button;
  }

  _createSelectInput(label) {

  }

  _createCheckbox(label) {

  }

  _createCancelButton() {
    const cancelButtonView = this._createButton('Cancel', icons.cancel, 'ck-button-cancel');
    cancelButtonView.delegate('execute').to(this, 'cancel');
    return cancelButtonView;
  }

  _createSaveButton() {
    const submitButtonView = this._createButton("Export pdf", false,'ck-button-export_pdf');
    submitButtonView.type = 'submit';
    return submitButtonView;
  }

  getInputValues() {
    return {
      x: this.pageWidthView.fieldView.element.value,
      y: this.pageHeightView.fieldView.element.value,
      xPadding: this.pageXPaddingView.fieldView.element.value,
      yPadding: this.pageYPaddingView.fieldView.element.value,
    }
  }
}
