import "./Resume.css";

//Need these css files to render pdfs with accessability annotations
import "react-pdf/dist/Page/TextLayer.css";
import "react-pdf/dist/Page/AnnotationLayer.css";
import { pdfjs, Document, Page } from "react-pdf";
import ResumeFile from "/src/assets/profile.pdf";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url,
).toString();

const Resume = () => {
  return (
    <>
      <Document file={ResumeFile}>
        <Page pageNumber={1} />
      </Document>
      <h1>A Shiny Piece of Paper</h1>
      <a
        href={ResumeFile}
        download="PDF-Document"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button>Download my resume!</button>
      </a>
    </>
  );
};

export default Resume;
