import PDFViewerdefault from './pdfviewer/default.vue'; 
import PDFViewerreadonly from './pdfviewer/read-only.vue'; 
import PDFViewerdocumentlist from './pdfviewer/document-list.vue'; 
import PDFViewermultiformatviewer from './pdfviewer/multi-format-viewer.vue'; 
import PDFViewerorganizepages from './pdfviewer/organize-pages.vue'; 
import PDFViewerredaction from './pdfviewer/redaction.vue'; 
import PDFViewercustomtoolbar from './pdfviewer/custom-toolbar.vue'; 
import PDFViewercustomcontextmenu from './pdfviewer/custom-context-menu.vue'; 
import PDFViewerrighttoleft from './pdfviewer/right-to-left.vue'; 
import PDFViewerformfilling from './pdfviewer/form-filling.vue'; 
import PDFViewerformdesigner from './pdfviewer/form-designer.vue'; 
import PDFVieweresigningformdesigner from './pdfviewer/esigning-form-designer.vue'; 
import PDFVieweresigningpdfforms from './pdfviewer/esigning-pdf-forms.vue'; 
import PDFViewerannotations from './pdfviewer/annotations.vue'; 
import PDFViewerprogrammaticoperations from './pdfviewer/programmatic-operations.vue'; 
import PDFViewerhandwritten from './pdfviewer/hand-written.vue'; 
import PDFViewerinvisibledigitalsignature from './pdfviewer/invisible-digital-signature.vue'; 
import PDFViewervisibledigitalsignature from './pdfviewer/visible-digital-signature.vue'; 
export default [{path: '/', redirect: '/tailwind3/pdfviewer/default.html'},{ path: '/:theme/pdfviewer/default.html', component: PDFViewerdefault, meta: {"eCompName":"PDF Viewer","eSampleName":"Default Functionalities","eCategoryName":"PDF Viewer"} }
,{ path: '/:theme/pdfviewer/read-only.html', component: PDFViewerreadonly, meta: {"eCompName":"PDF Viewer","eSampleName":"Read-Only","eCategoryName":"Document Security"} }
,{ path: '/:theme/pdfviewer/document-list.html', component: PDFViewerdocumentlist, meta: {"eCompName":"PDF Viewer","eSampleName":"Document List","eCategoryName":"File Management"} }
,{ path: '/:theme/pdfviewer/multi-format-viewer.html', component: PDFViewermultiformatviewer, meta: {"eCompName":"PDF Viewer","eSampleName":"Multi-Format Viewer","eCategoryName":"File Management"} }
,{ path: '/:theme/pdfviewer/organize-pages.html', component: PDFViewerorganizepages, meta: {"eCompName":"PDF Viewer","eSampleName":"Organize Pages","eCategoryName":"Editor"} }
,{ path: '/:theme/pdfviewer/redaction.html', component: PDFViewerredaction, meta: {"eCompName":"PDF Viewer","eSampleName":"Redaction","eCategoryName":"Editor"} }
,{ path: '/:theme/pdfviewer/custom-toolbar.html', component: PDFViewercustomtoolbar, meta: {"eCompName":"PDF Viewer","eSampleName":"Toolbar","eCategoryName":"Customization"} }
,{ path: '/:theme/pdfviewer/custom-context-menu.html', component: PDFViewercustomcontextmenu, meta: {"eCompName":"PDF Viewer","eSampleName":"Context Menu","eCategoryName":"Customization"} }
,{ path: '/:theme/pdfviewer/right-to-left.html', component: PDFViewerrighttoleft, meta: {"eCompName":"PDF Viewer","eSampleName":"Right To Left","eCategoryName":"Localization"} }
,{ path: '/:theme/pdfviewer/form-filling.html', component: PDFViewerformfilling, meta: {"eCompName":"PDF Viewer","eSampleName":"Form Filling","eCategoryName":"PDF Form"} }
,{ path: '/:theme/pdfviewer/form-designer.html', component: PDFViewerformdesigner, meta: {"eCompName":"PDF Viewer","eSampleName":"Form Designer","eCategoryName":"PDF Form"} }
,{ path: '/:theme/pdfviewer/esigning-form-designer.html', component: PDFVieweresigningformdesigner, meta: {"eCompName":"PDF Viewer","eSampleName":"eSigning Form Designer","eCategoryName":"PDF Form"} }
,{ path: '/:theme/pdfviewer/esigning-pdf-forms.html', component: PDFVieweresigningpdfforms, meta: {"eCompName":"PDF Viewer","eSampleName":"eSigning PDF Forms","eCategoryName":"PDF Form"} }
,{ path: '/:theme/pdfviewer/annotations.html', component: PDFViewerannotations, meta: {"eCompName":"PDF Viewer","eSampleName":"Annotations","eCategoryName":"Annotation"} }
,{ path: '/:theme/pdfviewer/programmatic-operations.html', component: PDFViewerprogrammaticoperations, meta: {"eCompName":"PDF Viewer","eSampleName":"Programmatic Operations","eCategoryName":"Annotation"} }
,{ path: '/:theme/pdfviewer/hand-written.html', component: PDFViewerhandwritten, meta: {"eCompName":"PDF Viewer","eSampleName":"Handwritten Signature","eCategoryName":"Signature"} }
,{ path: '/:theme/pdfviewer/invisible-digital-signature.html', component: PDFViewerinvisibledigitalsignature, meta: {"eCompName":"PDF Viewer","eSampleName":"Invisible Digital Signature","eCategoryName":"Signature"} }
,{ path: '/:theme/pdfviewer/visible-digital-signature.html', component: PDFViewervisibledigitalsignature, meta: {"eCompName":"PDF Viewer","eSampleName":"Visible Digital Signature","eCategoryName":"Signature"} }
];