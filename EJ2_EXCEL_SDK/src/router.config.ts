import Spreadsheetdefault from './spreadsheet/default.vue'; 
import Spreadsheetformula from './spreadsheet/formula.vue'; 
import Spreadsheetprotectsheet from './spreadsheet/protect-sheet.vue'; 
import Spreadsheetfreezepanes from './spreadsheet/freeze-panes.vue'; 
import Spreadsheetdatavalidation from './spreadsheet/data-validation.vue'; 
import Spreadsheethyperlink from './spreadsheet/hyperlink.vue'; 
import Spreadsheetaismartspreadsheets from './spreadsheet/ai-smart-spreadsheets.vue'; 
import Spreadsheetcelldatabinding from './spreadsheet/cell-data-binding.vue'; 
import Spreadsheetremotedatabinding from './spreadsheet/remote-data-binding.vue'; 
import Spreadsheetcellformatting from './spreadsheet/cell-formatting.vue'; 
import Spreadsheetnumberformatting from './spreadsheet/number-formatting.vue'; 
import Spreadsheetconditionalformatting from './spreadsheet/conditional-formatting.vue'; 
import Spreadsheetsortingandfiltering from './spreadsheet/sorting-and-filtering.vue'; 
import Spreadsheetchart from './spreadsheet/chart.vue'; 
import Spreadsheetimage from './spreadsheet/image.vue'; 
import Spreadsheetcelltemplate from './spreadsheet/cell-template.vue'; 
import Spreadsheetcomment from './spreadsheet/comment.vue'; 
import Spreadsheetnotes from './spreadsheet/notes.vue'; 
import Spreadsheetprint from './spreadsheet/print.vue'; 
export default [{path: '/', redirect: '/tailwind3/spreadsheet/default.html'},{ path: '/:theme/spreadsheet/default.html', component: Spreadsheetdefault, meta: {"eCompName":"Spreadsheet","eSampleName":"Default Functionalities","eCategoryName":"Spreadsheet"} }
,{ path: '/:theme/spreadsheet/formula.html', component: Spreadsheetformula, meta: {"eCompName":"Spreadsheet","eSampleName":"Formula","eCategoryName":"Spreadsheet"} }
,{ path: '/:theme/spreadsheet/protect-sheet.html', component: Spreadsheetprotectsheet, meta: {"eCompName":"Spreadsheet","eSampleName":"Protection","eCategoryName":"Spreadsheet"} }
,{ path: '/:theme/spreadsheet/freeze-panes.html', component: Spreadsheetfreezepanes, meta: {"eCompName":"Spreadsheet","eSampleName":"Freeze Panes","eCategoryName":"Spreadsheet"} }
,{ path: '/:theme/spreadsheet/data-validation.html', component: Spreadsheetdatavalidation, meta: {"eCompName":"Spreadsheet","eSampleName":"Data Validation","eCategoryName":"Spreadsheet"} }
,{ path: '/:theme/spreadsheet/hyperlink.html', component: Spreadsheethyperlink, meta: {"eCompName":"Spreadsheet","eSampleName":"Hyperlink","eCategoryName":"Spreadsheet"} }
,{ path: '/:theme/spreadsheet/ai-smart-spreadsheets.html', component: Spreadsheetaismartspreadsheets, meta: {"eCompName":"Spreadsheet","eSampleName":"Smart Spreadsheet","eCategoryName":"Smart AI Solutions"} }
,{ path: '/:theme/spreadsheet/cell-data-binding.html', component: Spreadsheetcelldatabinding, meta: {"eCompName":"Spreadsheet","eSampleName":"Cell Data Binding","eCategoryName":"Data Binding"} }
,{ path: '/:theme/spreadsheet/remote-data-binding.html', component: Spreadsheetremotedatabinding, meta: {"eCompName":"Spreadsheet","eSampleName":"Remote Data Binding","eCategoryName":"Data Binding"} }
,{ path: '/:theme/spreadsheet/cell-formatting.html', component: Spreadsheetcellformatting, meta: {"eCompName":"Spreadsheet","eSampleName":"Cell Formatting","eCategoryName":"Formatting"} }
,{ path: '/:theme/spreadsheet/number-formatting.html', component: Spreadsheetnumberformatting, meta: {"eCompName":"Spreadsheet","eSampleName":"Number Formatting","eCategoryName":"Formatting"} }
,{ path: '/:theme/spreadsheet/conditional-formatting.html', component: Spreadsheetconditionalformatting, meta: {"eCompName":"Spreadsheet","eSampleName":"Conditional Formatting","eCategoryName":"Formatting"} }
,{ path: '/:theme/spreadsheet/sorting-and-filtering.html', component: Spreadsheetsortingandfiltering, meta: {"eCompName":"Spreadsheet","eSampleName":"Sorting and Filtering","eCategoryName":"Data Analysis"} }
,{ path: '/:theme/spreadsheet/chart.html', component: Spreadsheetchart, meta: {"eCompName":"Spreadsheet","eSampleName":"Chart","eCategoryName":"Data Visualization"} }
,{ path: '/:theme/spreadsheet/image.html', component: Spreadsheetimage, meta: {"eCompName":"Spreadsheet","eSampleName":"Image","eCategoryName":"Illustrations"} }
,{ path: '/:theme/spreadsheet/cell-template.html', component: Spreadsheetcelltemplate, meta: {"eCompName":"Spreadsheet","eSampleName":"Cell Template","eCategoryName":"Templates"} }
,{ path: '/:theme/spreadsheet/comment.html', component: Spreadsheetcomment, meta: {"eCompName":"Spreadsheet","eSampleName":"Comment","eCategoryName":"Review"} }
,{ path: '/:theme/spreadsheet/notes.html', component: Spreadsheetnotes, meta: {"eCompName":"Spreadsheet","eSampleName":"Notes","eCategoryName":"Review"} }
,{ path: '/:theme/spreadsheet/print.html', component: Spreadsheetprint, meta: {"eCompName":"Spreadsheet","eSampleName":"Print","eCategoryName":"Printing"} }
];