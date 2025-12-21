import "./Resume.css";

//Need these css files to render pdfs with accessability annotations
import "react-pdf/dist/Page/TextLayer.css";
import "react-pdf/dist/Page/AnnotationLayer.css";
import { pdfjs, Document, Page } from "react-pdf";
import ResumeFile from "/src/assets/2025 Resume2.pdf";
import { useState } from "react";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url,
).toString();

const Resume = () => {
  const pagesize = 2;
  const [index, setIndex] = useState(1);
  const ChangePage = () => {
    var newindex = index + 1;
    if (newindex > pagesize) {
      newindex = 1;
    }
    setIndex(newindex);
  };
  return (
    <>
      <Document file={ResumeFile}>
        <Page pageNumber={index} />
        <button onClick={ChangePage}>Change Page</button>
      </Document>
      <h1>A Shiny Piece of Paper</h1>
      <a
        href={ResumeFile}
        // download="PDF-Document"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button>Download my resume!</button>
      </a>
    </>
  );
};

export default Resume;
