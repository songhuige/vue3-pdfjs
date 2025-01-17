import 'pdfjs-dist/legacy/web/pdf_viewer.css';
import { VuePdfPropsType } from './vue-pdf-props';
declare const _default: import("vue").DefineComponent<{
    /**
     * The source of the pdf. Accepts the following types `string | URL | Uint8Array | PDFDataRangeTransport | DocumentInitParameters`
     */
    src: {
        type: (StringConstructor | ObjectConstructor)[];
        required: true;
    };
    /**
     * The page number of the pdf to display.
     */
    page: {
        type: NumberConstructor;
        default: number;
    };
    /**
     * The scale (zoom) of the pdf. Setting this will also disable auto scaling and resizing.
     */
    scale: {
        type: NumberConstructor;
        default: null;
    };
    /**
     * Whether to enable text selection
     */
    enableTextSelection: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * Whether to enable annotations (clickable links)
     */
    enableAnnotations: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {
    props: VuePdfPropsType;
    pdfWrapperRef: import("vue").Ref<HTMLElement | null>;
    parentWrapperRef: import("vue").Ref<HTMLElement | null>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    src?: unknown;
    page?: unknown;
    scale?: unknown;
    enableTextSelection?: unknown;
    enableAnnotations?: unknown;
} & {
    src: string | Record<string, any>;
    page: number;
    scale: number;
    enableTextSelection: boolean;
    enableAnnotations: boolean;
} & {}>, {
    page: number;
    scale: number;
    enableTextSelection: boolean;
    enableAnnotations: boolean;
}>;
export default _default;
