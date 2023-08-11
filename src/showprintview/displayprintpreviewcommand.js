import {Command} from "@ckeditor/ckeditor5-core";

export default class DisplayPrintPreview extends Command {
  constructor(editor) {
    super(editor);
  }

  execute() {
    // @TODO Create a DOM element here that houses the generated print preview
    // @TODO Generate the pages
    // @TODO Add inputs here as well, so the user could change the padding, format etc values on the fly?
    // ^ Probably causes awful performance, depends how the pages are generated
  }
}

function createPrintPreviewWrapper() {
  // @TODO create the print preview wrapper --- Return a dom element
}

function createPrintPage() {
  // @TODO create print page based off of configuration values
}

