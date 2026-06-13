import WordProcessordefault from './document-editor/default.vue'; 
import WordProcessorbinduitodocument from './document-editor/bindui-to-document.vue'; 
import WordProcessoraiwritingassists from './document-editor/ai-writing-assists.vue'; 
import WordProcessoraismarteditors from './document-editor/ai-smart-editors.vue'; 
import WordProcessormailmerge from './document-editor/mail-merge.vue'; 
import WordProcessorcomments from './document-editor/comments.vue'; 
import WordProcessortrackchanges from './document-editor/track-changes.vue'; 
import WordProcessorspellcheck from './document-editor/spell-check.vue'; 
import WordProcessordocumentprotection from './document-editor/document-protection.vue'; 
import WordProcessorribboncustomization from './document-editor/ribbon-customization.vue'; 
import WordProcessorcustomcontextmenu from './document-editor/custom-context-menu.vue'; 
import WordProcessorautosave from './document-editor/auto-save.vue'; 
import WordProcessortoolbarcustomization from './document-editor/toolbar-customization.vue'; 
import WordProcessorcolorpickercustomization from './document-editor/color-picker-customization.vue'; 
import WordProcessorrighttoleft from './document-editor/right-to-left.vue'; 
import WordProcessorprint from './document-editor/print.vue'; 
import WordProcessoradvancedexporting from './document-editor/advanced-exporting.vue'; 
import WordProcessortableofcontents from './document-editor/table-of-contents.vue'; 
import WordProcessornotes from './document-editor/notes.vue'; 
import WordProcessorautoshapes from './document-editor/autoshapes.vue'; 
import WordProcessorweblayout from './document-editor/web-layout.vue'; 
import WordProcessorruler from './document-editor/ruler.vue'; 
import WordProcessorheadingnavigation from './document-editor/heading-navigation.vue'; 
import WordProcessorcharacterformatting from './document-editor/character-formatting.vue'; 
import WordProcessorparagraphformatting from './document-editor/paragraph-formatting.vue'; 
import WordProcessorstyles from './document-editor/styles.vue'; 
import WordProcessorbulletsandnumbering from './document-editor/bullets-and-numbering.vue'; 
import WordProcessorlinksandbookmarks from './document-editor/links-and-bookmarks.vue'; 
import WordProcessortableformatting from './document-editor/table-formatting.vue'; 
import WordProcessorsectionformatting from './document-editor/section-formatting.vue'; 
import WordProcessorheadersandfooters from './document-editor/headers-and-footers.vue'; 
import WordProcessorformfields from './document-editor/form-fields.vue'; 
import WordProcessormultiplecolumns from './document-editor/multiple-columns.vue'; 
import WordProcessorchart from './document-editor/chart.vue'; 
export default [{path: '/', redirect: '/tailwind3/document-editor/default.html'},{ path: '/:theme/document-editor/default.html', component: WordProcessordefault, meta: {"eCompName":"Word Processor","eSampleName":"Default Functionalities","eCategoryName":"DocumentEditor"} }
,{ path: '/:theme/document-editor/bindui-to-document.html', component: WordProcessorbinduitodocument, meta: {"eCompName":"Word Processor","eSampleName":"Bind UI To Document","eCategoryName":"DocumentEditor"} }
,{ path: '/:theme/document-editor/ai-writing-assists.html', component: WordProcessoraiwritingassists, meta: {"eCompName":"Word Processor","eSampleName":"Writing Assist","eCategoryName":"Smart AI Solutions"} }
,{ path: '/:theme/document-editor/ai-smart-editors.html', component: WordProcessoraismarteditors, meta: {"eCompName":"Word Processor","eSampleName":"Smart Editor","eCategoryName":"Smart AI Solutions"} }
,{ path: '/:theme/document-editor/mail-merge.html', component: WordProcessormailmerge, meta: {"eCompName":"Word Processor","eSampleName":"Mail Merge","eCategoryName":"Mail Merge"} }
,{ path: '/:theme/document-editor/comments.html', component: WordProcessorcomments, meta: {"eCompName":"Word Processor","eSampleName":"Comments","eCategoryName":"Review"} }
,{ path: '/:theme/document-editor/track-changes.html', component: WordProcessortrackchanges, meta: {"eCompName":"Word Processor","eSampleName":"Track Changes","eCategoryName":"Review"} }
,{ path: '/:theme/document-editor/spell-check.html', component: WordProcessorspellcheck, meta: {"eCompName":"Word Processor","eSampleName":"Spell Checking","eCategoryName":"Review"} }
,{ path: '/:theme/document-editor/document-protection.html', component: WordProcessordocumentprotection, meta: {"eCompName":"Word Processor","eSampleName":"Document Protection","eCategoryName":"Security"} }
,{ path: '/:theme/document-editor/ribbon-customization.html', component: WordProcessorribboncustomization, meta: {"eCompName":"Word Processor","eSampleName":"Ribbon Customization","eCategoryName":"Customization"} }
,{ path: '/:theme/document-editor/custom-context-menu.html', component: WordProcessorcustomcontextmenu, meta: {"eCompName":"Word Processor","eSampleName":"Custom Context Menu","eCategoryName":"Customization"} }
,{ path: '/:theme/document-editor/auto-save.html', component: WordProcessorautosave, meta: {"eCompName":"Word Processor","eSampleName":"Auto Save","eCategoryName":"Customization"} }
,{ path: '/:theme/document-editor/toolbar-customization.html', component: WordProcessortoolbarcustomization, meta: {"eCompName":"Word Processor","eSampleName":"Toolbar Customization","eCategoryName":"Customization"} }
,{ path: '/:theme/document-editor/color-picker-customization.html', component: WordProcessorcolorpickercustomization, meta: {"eCompName":"Word Processor","eSampleName":"Color Picker Customization","eCategoryName":"Customization"} }
,{ path: '/:theme/document-editor/right-to-left.html', component: WordProcessorrighttoleft, meta: {"eCompName":"Word Processor","eSampleName":"Right To Left","eCategoryName":"RTL"} }
,{ path: '/:theme/document-editor/print.html', component: WordProcessorprint, meta: {"eCompName":"Word Processor","eSampleName":"Print","eCategoryName":"Exporting"} }
,{ path: '/:theme/document-editor/advanced-exporting.html', component: WordProcessoradvancedexporting, meta: {"eCompName":"Word Processor","eSampleName":"Advanced Exporting","eCategoryName":"Exporting"} }
,{ path: '/:theme/document-editor/table-of-contents.html', component: WordProcessortableofcontents, meta: {"eCompName":"Word Processor","eSampleName":"Table of Contents","eCategoryName":"References"} }
,{ path: '/:theme/document-editor/notes.html', component: WordProcessornotes, meta: {"eCompName":"Word Processor","eSampleName":"Footnotes and Endnotes","eCategoryName":"References"} }
,{ path: '/:theme/document-editor/autoshapes.html', component: WordProcessorautoshapes, meta: {"eCompName":"Word Processor","eSampleName":"Auto Shapes","eCategoryName":"Shapes"} }
,{ path: '/:theme/document-editor/web-layout.html', component: WordProcessorweblayout, meta: {"eCompName":"Word Processor","eSampleName":"Web Layout","eCategoryName":"View"} }
,{ path: '/:theme/document-editor/ruler.html', component: WordProcessorruler, meta: {"eCompName":"Word Processor","eSampleName":"Ruler","eCategoryName":"View"} }
,{ path: '/:theme/document-editor/heading-navigation.html', component: WordProcessorheadingnavigation, meta: {"eCompName":"Word Processor","eSampleName":"Heading Navigation","eCategoryName":"View"} }
,{ path: '/:theme/document-editor/character-formatting.html', component: WordProcessorcharacterformatting, meta: {"eCompName":"Word Processor","eSampleName":"Character Formatting","eCategoryName":"Editing Features"} }
,{ path: '/:theme/document-editor/paragraph-formatting.html', component: WordProcessorparagraphformatting, meta: {"eCompName":"Word Processor","eSampleName":"Paragraph Formatting","eCategoryName":"Editing Features"} }
,{ path: '/:theme/document-editor/styles.html', component: WordProcessorstyles, meta: {"eCompName":"Word Processor","eSampleName":"Styles","eCategoryName":"Editing Features"} }
,{ path: '/:theme/document-editor/bullets-and-numbering.html', component: WordProcessorbulletsandnumbering, meta: {"eCompName":"Word Processor","eSampleName":"Bullets and Numbering","eCategoryName":"Editing Features"} }
,{ path: '/:theme/document-editor/links-and-bookmarks.html', component: WordProcessorlinksandbookmarks, meta: {"eCompName":"Word Processor","eSampleName":"Hyperlinks and Bookmarks","eCategoryName":"Editing Features"} }
,{ path: '/:theme/document-editor/table-formatting.html', component: WordProcessortableformatting, meta: {"eCompName":"Word Processor","eSampleName":"Table Formatting","eCategoryName":"Editing Features"} }
,{ path: '/:theme/document-editor/section-formatting.html', component: WordProcessorsectionformatting, meta: {"eCompName":"Word Processor","eSampleName":"Section Formatting","eCategoryName":"Editing Features"} }
,{ path: '/:theme/document-editor/headers-and-footers.html', component: WordProcessorheadersandfooters, meta: {"eCompName":"Word Processor","eSampleName":"Headers and Footers","eCategoryName":"Editing Features"} }
,{ path: '/:theme/document-editor/form-fields.html', component: WordProcessorformfields, meta: {"eCompName":"Word Processor","eSampleName":"Form Fields","eCategoryName":"Editing Features"} }
,{ path: '/:theme/document-editor/multiple-columns.html', component: WordProcessormultiplecolumns, meta: {"eCompName":"Word Processor","eSampleName":"Multiple Columns","eCategoryName":"Editing Features"} }
,{ path: '/:theme/document-editor/chart.html', component: WordProcessorchart, meta: {"eCompName":"Word Processor","eSampleName":"Chart Preservation","eCategoryName":"Charts"} }
];