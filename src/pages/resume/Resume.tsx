import "./Resume.css";

//Need these css files to render pdfs with accessability annotations
import "react-pdf/dist/Page/TextLayer.css";
import "react-pdf/dist/Page/AnnotationLayer.css";
import { pdfjs, Document, Page } from "react-pdf";
import ResumeFile from "/src/assets/2025 Resume2.pdf";
import { useEffect, useState } from "react";
import { IoMdDownload } from "react-icons/io";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url,
).toString();

const Resume = () => {
  const pagesize = 2;
  const [index, setIndex] = useState(1);
  const [pageWidth, setPageWidth] = useState<number>(0);
  const ChangePage = () => {
    var newindex = index + 1;
    if (newindex > pagesize) {
      newindex = 1;
    }
    setIndex(newindex);
  };
  // const handleWindowSizeChange = () => {
  //     const newpagewidth = window.innerWidth < 900 ? window.innerWidth-100: 0;
  //       setPageWidth(newpagewidth);
  //   };

  // const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new ResizeObserver((entries) => {
      var width = entries[0].contentRect.width;
      // console.log("Width: ", width)
      if (width < 920) {
        width -= 100;
      } else {
        width = 0;
      }
      setPageWidth(Math.floor(width));
    });

    observer.observe(document.documentElement);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Document file={ResumeFile}>
        <Page pageNumber={index} width={pageWidth}>
          <a
            href={ResumeFile}
            // download="PDF-Document"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="pdf-download">
              <IoMdDownload />
            </button>
          </a>
        </Page>

        <button onClick={ChangePage}>Change Page</button>
      </Document>
      <h1>A Shiny Piece of Paper</h1>
    </>
  );
};

export default Resume;
