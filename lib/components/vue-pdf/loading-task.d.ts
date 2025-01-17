import { DocumentInitParameters, PDFDataRangeTransport, PDFDocumentLoadingTask } from 'pdfjs-dist/types/src/display/api';
export declare const createLoadingTask: (src: string | URL | Uint8Array | PDFDataRangeTransport | DocumentInitParameters) => PDFDocumentLoadingTask;
