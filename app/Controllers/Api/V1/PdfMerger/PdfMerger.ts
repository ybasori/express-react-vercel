import { RequestHandler } from "express";
import { unlinkSync } from "fs";
import PDFMerger from "pdf-merger-js";

const PdfMerger: RequestHandler = async (req, res) => {
  try {
    const mergedFile = `/uploads/merged-${Date.now()}.pdf`;
    if (req.files) {
      const totalFile = Number(req.files ? req.files.length : 0);
      const files = [...(req.files as unknown as Express.Multer.File[])];
      const merger = new PDFMerger();
      for (let i: number = 0; i < totalFile; i++) {
        await merger.add(files[i].path);
      }
      await merger.save(`./public${mergedFile}`);

      for (let i: number = 0; i < totalFile; i++) {
        unlinkSync(files[i].path);
      }
    }
    return res.status(200).json({
      status: "oke",
      data: {
        file: mergedFile,
      },
    });
  } catch (err) {
    return res.status(400).json({
      status: "error",
      data: null,
      error: err,
    });
  }

  // return res.status(200).json({
  //   status: "oke",
  //   data: null,
  // });
};
export default PdfMerger;
