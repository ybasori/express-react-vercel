import { RequestHandler } from "express";
import PDFMerger from "pdf-merger-js";

const PdfMerger: RequestHandler = async (req, res) => {
  try {
    if (req.files) {
      const totalFile = Number(req.files ? req.files.length : 0);
      const files = [...(req.files as unknown as Express.Multer.File[])];
      const merger = new PDFMerger();
      for (let i: number = 0; i < totalFile; i++) {
        await merger.add(files[i].buffer);
      }
      const mergedPdfBuffer = await merger.saveAsBuffer();

      return res.status(200).json({
        status: "oke",
        data: {
          buffer: mergedPdfBuffer.toString("base64"),
        },
      });
    }
    return res.status(400).json({
      status: "bad",
      data: null,
      error: "no file found",
    });
  } catch (err) {
    return res.status(500).json({
      status: "error",
      data: null,
      error: err,
    });
  }
};
export default PdfMerger;
