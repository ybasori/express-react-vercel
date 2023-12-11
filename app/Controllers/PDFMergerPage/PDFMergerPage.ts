import { RequestHandler } from "express";

const PDFMergerPage: RequestHandler = (_req, res) => {
  res.send(`<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>PDF Merger</title>
      <link rel="canonical" href="https://web.webivert.com/pdf-merger">
      <meta name="author" content="web.webivert.com">
      <meta name="description" content="Select multiple PDF files and merge them in seconds. Merge &amp; combine PDF files online, easily and free.">
      <meta name="keywords" content="Merge PDF, split PDF, combine PDF, extract PDF, compress PDF, convert PDF, Word to PDF, Excel to PDF, Powerpoint to PDF, PDF to JPG, JPG to PDF">
      <meta property="og:site_name" content="Webivert - Online tools for PDF">
      <meta property="og:title" content="Merge PDF files online. Free service to merge PDF">
      <meta property="og:description" content="Select multiple PDF files and merge them in seconds. Merge &amp; combine PDF files online, easily and free.">
      <meta property="og:type" content="website">
    </head>
    <body>
      <div id="root"></div>
      <script src="/assets/js/app.bundle.js"></script>
      <script src="/assets/js/runtime.bundle.js"></script>
    </body>
  </html>
  `);
};

export default PDFMergerPage;
