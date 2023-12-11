import multer from "multer";

import PDFMerger from "./Controllers/Api/V1/PdfMerger/PdfMerger";
import Home from "./Controllers/Home/Home";
import { IRoute } from "./Helpers/ExpandRouter";

const Routes: () => IRoute[] = () => {
  return [
    {
      path: "/",
      method: "get",
      children: [
        {
          path: "/api",
          children: [
            {
              path: "/v1",
              children: [
                {
                  path: "/merge-pdf",
                  method: "post",
                  middleware: [
                    multer({
                      storage: multer.memoryStorage(),
                    }).array("pdfFiles"),
                  ],
                  controller: PDFMerger,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      path: "/*",
      method: "get",
      controller: Home,
    },
  ];
};

export default Routes;
