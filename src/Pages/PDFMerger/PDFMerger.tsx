import Button from "@src/Components/Atoms/Button/Button";
import axios from "axios";
import PdfMerger from "pdf-merger-js/browser";
import React, { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
// import { toast } from "react-toastify";

const PDFMerger = () => {
  const selectFile = useRef<HTMLInputElement>(null);
  const [pdfFiles, setPdfFiles] = useState<File[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  // const [mergedPdfUrl, setMergedPdfUrl] = useState("");

  // eslint-disable-next-line no-unused-vars
  const onMerge = async (cb: (err: unknown, url: string | null) => void) => {
    try {
      const merger = new PdfMerger();

      for (const file of pdfFiles) {
        await merger.add(file);
      }

      const mergedPdf = await merger.saveAsBlob();
      const url = URL.createObjectURL(mergedPdf);

      cb(null, url);
    } catch (err) {
      cb(err, null);
    }
  };

  const onSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    setIsLoading(true);
    onMerge((err, url) => {
      if (!err) {
        axios({
          url: url as string,
          method: "GET",
          responseType: "blob",
        }).then((response) => {
          const href = URL.createObjectURL(response.data);

          const link = document.createElement("a");
          link.href = href;
          link.setAttribute(
            "download",
            (url as string).split("/")[(url as string).split("/").length - 1]
          );
          document.body.appendChild(link);
          link.click();

          document.body.removeChild(link);
          URL.revokeObjectURL(href);
          toast.success("Downloading!");
        });
      } else {
        toast.error("something went wrong!");
      }

      setIsLoading(false);
    });

    // const fd = new FormData();

    // pdfFiles.forEach((item) => {
    //   fd.append(`pdfFiles`, item);
    // });

    // axios
    //   .post("/api/v1/merge-pdf", fd)
    //   .then((res) => {
    //     setIsLoading(false);
    //     axios({
    //       url: res.data.data.file,
    //       method: "GET",
    //       responseType: "blob",
    //     }).then((response) => {
    //       const href = URL.createObjectURL(response.data);

    //       const link = document.createElement("a");
    //       link.href = href;
    //       link.setAttribute(
    //         "download",
    //         res.data.data.file.split("/")[
    //           res.data.data.file.split("/").length - 1
    //         ]
    //       );
    //       document.body.appendChild(link);
    //       link.click();

    //       document.body.removeChild(link);
    //       URL.revokeObjectURL(href);
    //     });
    //     toast.success("Your file is ready!");
    //   })
    //   .catch(() => {
    //     setIsLoading(false);
    //     toast.error("Something went wrong!");
    //   });
  };
  useEffect(() => {
    document.title = "Webivert - PDF Merger";
  }, []);

  return (
    <>
      <div className="container">
        <h1 className="title">Merge PDF files</h1>
        <form className="columns" onSubmit={onSubmit}>
          <div className="column is-3">
            <Button type="button" onClick={() => selectFile?.current?.click()}>
              Select PDF files
            </Button>
            <input
              multiple
              type="file"
              ref={selectFile}
              style={{ display: "none" }}
              accept="application/pdf"
              value={undefined}
              defaultValue={undefined}
              onChange={(e) => {
                if (e.currentTarget.files) {
                  let files: File[] = [];
                  for (let i = 0; i < e.currentTarget.files.length; i++) {
                    files = [...files, e.currentTarget.files[i]];
                  }
                  setPdfFiles([...pdfFiles, ...files]);
                }
              }}
            />
          </div>
          <div className="column is-offset-7 is-2">
            <Button
              disabled={pdfFiles.length < 1 || isLoading}
              type="submit"
              color="primary"
              loading={isLoading}
            >
              Merge & Download
            </Button>
          </div>
        </form>
        <div className="columns is-multiline">
          {pdfFiles.map((pdf, idx) => (
            <div className="column is-one-third" key={`pdf-${idx}`}>
              <div className=" tile box">
                <div className="">
                  <embed
                    src={URL.createObjectURL(pdf)}
                    width="100%"
                    height="400"
                  />
                  <br />
                  <Button
                    onClick={() =>
                      setPdfFiles([
                        ...pdfFiles.filter((_item, number) => number !== idx),
                      ])
                    }
                  >
                    Remove
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default PDFMerger;
