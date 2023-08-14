// app.js

import {ClassicEditor} from '@ckeditor/ckeditor5-editor-classic';
import {Bold, Italic} from '@ckeditor/ckeditor5-basic-styles';
import {Essentials} from '@ckeditor/ckeditor5-essentials';
import {Heading} from '@ckeditor/ckeditor5-heading';
import {List} from '@ckeditor/ckeditor5-list';
import {Paragraph} from '@ckeditor/ckeditor5-paragraph';
import {ShowBlocks} from '@ckeditor/ckeditor5-show-blocks';
import Timestamp from './src/timestamp/timestamp';
import Abbrevation from "./src/abbrevation/abbrevation";
import CKEditorInspector from '@ckeditor/ckeditor5-inspector';
import ShowPrintPreview from "./src/showprintpreview/showprintpreview";
import ExportPdf from "./src/exportpdf/exportpdf";

ClassicEditor
  .create(document.querySelector('#editor'), {
    plugins: [Essentials, Paragraph, Heading, List, Bold, Italic, Timestamp, Abbrevation, ShowBlocks, ShowPrintPreview, ExportPdf],
    toolbar: ['heading', 'bold', 'italic', 'numberedList', 'bulletedList', 'timestamp', '|', 'abbreviation', 'showBlocks', 'showPrintPreview', 'exportPdf'],
    pdf: {
      format: [794, 1123],
      orientation: "portrait",
      unit: "px",
      xPadding: 20,
      yPadding: 40,
      userControllableValues: true,
    }
  })
  .then(editor => {
    CKEditorInspector.attach(editor)
  })
  .catch(error => {
    console.error(error.stack);
  });
