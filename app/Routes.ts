// import PDFMerger from "@app/Controllers/Api/V1/PdfMerger/PdfMerger";
// import multer from "multer";

import Home from "./Controllers/Home/Home";
import { IRoute } from "./Helpers/ExpandRouter";

const Routes: () => IRoute[] = () => {
  return [
    // {
    //   path: "/",
    //   method: "get",
    //   children: [
    //     {
    //       path: "/api",
    //       children: [
    //         {
    //           path: "/v1",
    //           children: [
    //             {
    //               path: "/merge-pdf",
    //               method: "post",
    //               middleware: [
    //                 multer({
    //                   storage: multer.diskStorage({
    //                     destination: (_req, _file, cb) =>
    //                       cb(null, "./public/uploads/"),
    //                     filename: (_req, file, cb) =>
    //                       cb(
    //                         null,
    //                         file.originalname + "-" + Date.now() + ".pdf"
    //                       ),
    //                   }),
    //                 }).array("pdfFiles"),
    //               ],
    //               controller: PDFMerger,
    //             },
    //           ],
    //         },
    //       ],
    //     },
    //   ],
    // },
    {
      path: "/*",
      method: "get",
      controller: Home,
    },
  ];
};

export default Routes;
