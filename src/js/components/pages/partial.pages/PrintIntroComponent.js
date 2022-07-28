import React from 'react';

export default class PrintIntroComponent extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className='block
                                block__flush-top
                                block__padded-bottom
                                block__border-bottom
                                u-hide-on-print'>
          <h2 className='h1'>Print or save</h2>
          <ol className='h2'>
            <li>Print this summary or save as a PDF.</li>
            <li>When you’re finished, close this window and return to the review.</li>
          </ol>
          <h3>To save as a PDF:</h3>
          <p><strong>Windows users</strong></p>
          <ul>
            <li>Open the print menu by pressing Ctrl+P.</li>
            <li>Under the “Printer” drop-down menu, select “Microsoft Print to PDF” or “Save as PDF.” (The exact wording may vary by browser.)</li>
            <li>Click “Print.”</li>
            <li>When prompted, choose where you want to save the file.</li>
            <li>If you're on an older version of Windows that does not have the built-in Microsoft Print to PDF printer, the Google Chrome browser provides its own “Save as PDF” option.</li>
          </ul>
          <p><strong>Mac users</strong></p>
          <ul>
            <li>Open the print menu by pressing Command+P.</li>
            <li>From the PDF drop-down menu (in the lower-left corner), choose “Save as PDF.” (In Chrome you may be able to skip this step and select “Open PDF in Preview.”)</li>
            <li>When prompted, choose where you want to save the file.</li>
          </ul>
          <p className='u-mt30'><em>These instructions won’t be included in your file.</em></p>
        </div>
      </React.Fragment>
    );
  }
}
