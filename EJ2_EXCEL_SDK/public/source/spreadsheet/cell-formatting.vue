<template>
  <div class="control-section">
    <div id="spreadsheet-cell-format">
      <ejs-spreadsheet ref="spreadsheet" :sheets="sheets" :showRibbon="false" :showFormulaBar="false" :created="createdHandler" :beforeCellRender="beforeCellRender"></ejs-spreadsheet>
    </div>
    <!-- custom code start -->
    <div id="action-description">
      <p>
        This sample demonstrates the <a target="_blank" href="https://help.syncfusion.com/document-processing/excel/spreadsheet/vue/overview">Spreadsheet</a> cell formatting feature by applying different styles to a
          range of cells.
      </p>
    </div>
    <div id="description">
        <p>
            Cell formatting allows you to highlight cell data that appears in the Spreadsheet. It can be enabled
            or disabled using the <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/api/spreadsheet/#allowcellformatting">allowCellFormatting</a> property.
        </p>
        <p>
            In this sample, gridlines are hidden using the showGridLines property and the styles are
            applied using the style property and <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/api/spreadsheet/#cellFormat">cellFormat</a> method.
        </p>
        <p>
            Additionally, <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/api/spreadsheet/#richtext">rich text</a> formatting
            like subscript and superscript are applied to emphasize parts of the data, improving readability and presentation.
        </p>
        <p>
            To improve performance, <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/api/spreadsheet/index-default#suspendrefresh">suspendRefresh</a> method
            is invoked before applying formatting, which temporarily pauses UI rendering while updates are made.
            After all formatting is completed, <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/api/spreadsheet/index-default#resumerefresh">resumeRefresh</a> method
            is invoked to render all changes at once, ensuring smoother performance.
        </p>
        <p>
            More information about cell formatting can be found in this
            <a target="_blank" href="https://help.syncfusion.com/document-processing/excel/spreadsheet/vue/formatting#text-and-cell-formatting">
              documentation</a> section.
        </p>
    </div>
    <!-- custom code end -->
  </div>
</template>
<!-- custom code start -->
<style>
    #spreadsheet-cell-format {
      height: 550px;
    }
    #sb-content .e-spreadsheet .e-tab .e-tab-text {
      display: inherit;
    }
</style>
<!-- custom code end -->
<script>
import { SpreadsheetComponent, getFormatFromType } from "@syncfusion/ej2-vue-spreadsheet";
import * as dataSource from "./cell-format-data.json";

export default {
   components: {
    'ejs-spreadsheet': SpreadsheetComponent
   }, 
   data: () => {
      return {
          sheets: [{
              name: 'Order Details',
              ranges: [{ dataSource: dataSource.orderDetails }],
              columns:  [{ width: 80 }, { width: 130 }, { width: 180 }, { width: 90 }, { width: 160 }, { width: 80 },
                  { width: 100 }, { width: 130 }, { width: 80 }],
              rows: [{
                  height: 36,
                  //Applying cell formatting through cell binding
                  cells: [{ style: { textAlign: 'right' } }, { style: { textIndent: '2pt' } }, { style: { textAlign: 'center' }}, { style: { textAlign: 'right' } },
                      { style: { textIndent: '2pt' } }, { index: 6, style: { textAlign: 'right' } },
                      { index: 8, style: { textAlign: 'center' } }, { index: 9, style: { textAlign: 'right' } }] }, { height: 42 }, { height: 42 }, { height: 42 }, { height: 42 }, { height: 42 },
                      { height: 42 }, { height: 42 }, { height: 42 }, { height: 42 }, { height: 42 }, { height: 42 }, { height: 42 }, { height: 42 },
                      { height: 42 }, { height: 42 }],
                  showGridLines: false
              }]
      }
  },
  methods: {
    createdHandler: function() {
        // Temporarily suspends UI rendering to batch model updates for better performance.
        this.$refs.spreadsheet.suspendRefresh();
        //Applying cell formatting dynamically using cellFormat method.
        this.$refs.spreadsheet.cellFormat({ fontWeight: 'bold', backgroundColor: '#4b5366', color: '#ffffff', fontSize: '12pt' }, 'A1:J1');
        this.$refs.spreadsheet.cellFormat({ fontWeight: 'bold', textIndent: '2pt' }, 'B2:B16');
        this.$refs.spreadsheet.cellFormat({ fontStyle: 'italic', textIndent: '2pt' }, 'E2:E16');
        this.$refs.spreadsheet.cellFormat({ textIndent: '2pt' }, 'F1:F16');
        this.$refs.spreadsheet.cellFormat({ textIndent: '2pt' }, 'G1:G16');
        this.$refs.spreadsheet.cellFormat({ textAlign: 'center', fontWeight: 'bold' }, 'I2:I16');
        this.$refs.spreadsheet.cellFormat({ fontFamily: 'Helvetica New', verticalAlign: 'middle' }, 'A1:J16');
        //Applying border to a range
        this.$refs.spreadsheet.setBorder({ border: '1px solid #e0e0e0' }, 'A1:J16', 'Outer');
        this.$refs.spreadsheet.setBorder({ border: '1px solid #e0e0e0' }, 'A2:J15', 'Horizontal');
        // Applying a short date format to a range.
        this.$refs.spreadsheet.numberFormat('m/d/yyyy', 'D2:D16');
        // Applying currency format to a range.
        this.$refs.spreadsheet.numberFormat('$#,##0.00', 'J2:J16');
        // Applying subscript and superscript format.
        this.$refs.spreadsheet.updateCell({ richText: [
                { text: 'Mineral Water H' },
                { text: '2', style: { verticalAlign: 'sub' } },
                { text: 'O' }
            ] }, 'C2');
        this.$refs.spreadsheet.updateCell({ richText: [
                { text: 'Energy Supplement C' },
                { text: '6', style: { verticalAlign: 'sub' } },
                { text: 'H' },
                { text: '12', style: { verticalAlign: 'sub' } },
                { text: 'O' },
                { text: '6', style: { verticalAlign: 'sub' } }
            ] }, 'C4');
        this.$refs.spreadsheet.updateCell({ richText: [
                { text: 'Refrigerant Gas CO' },
                { text: '2', style: { verticalAlign: 'sub' } }
            ] }, 'C6');
        this.$refs.spreadsheet.updateCell({ richText: [
                { text: 'Water Purifier H' },
                { text: '2', style: { verticalAlign: 'sub' } },
                { text: 'O System' }
            ] }, 'C10');
        this.$refs.spreadsheet.updateCell({ richText: [
                { text: 'n' },
                { text: 'o', style: { verticalAlign: 'super' } },
                { text: ' 59 rue de l Abbaye' }
            ] }, 'E2');
        this.$refs.spreadsheet.updateCell({ richText: [
                { text: '2' },
                { text: 'e', style: { verticalAlign: 'super' } },
                { text: ' rue du Commerce' }
            ] }, 'E5');
        this.$refs.spreadsheet.updateCell({ richText: [
                { text: '22' },
                { text: 'nd', style: { verticalAlign: 'super' } },
                { text: ' Carrera con Ave. Carlos Soublette' }
            ] }, 'E11');
        this.$refs.spreadsheet.updateCell({ richText: [
                { text: '6' },
                { text: 'th', style: { verticalAlign: 'super' } },
                { text: ' street, Kirchgasse' }
            ] }, 'E12');
        this.$refs.spreadsheet.updateCell({ richText: [
                { text: '101 4' },
                { text: 'th', style: { verticalAlign: 'super' } },
                { text: ' Street, San Francisco' }
            ] }, 'E16');
        // Resumes rendering and applies all queued UI updates at once.
        this.$refs.spreadsheet.resumeRefresh();
    },
    beforeCellRender: function(args) {
       if (this.applyCellFormat()) {
            if (args.cell && args.cell.value) {
                //Applying cell formatting before rendering the particular cell
                switch (args.cell.value) {
                    case 'Delivered':
                        this.$refs.spreadsheet.cellFormat({ color: '#10c469', textDecoration: 'line-through' }, args.address);
                        break;
                    case 'Shipped':
                        this.$refs.spreadsheet.cellFormat({ color: '#62c9e8' }, args.address);
                        break;
                    case 'Pending':
                        this.$refs.spreadsheet.cellFormat({ color: '#FFC107', textDecoration: 'underline' }, args.address);
                        break;
                    case 'Cancelled':
                        this.$refs.spreadsheet.cellFormat({ color: '#ff5b5b' }, args.address);
                        break;
                }
            }
      }
    },
    applyCellFormat: function() {
      return !this.$refs.spreadsheet.ej2Instances.isOpen && this.$refs.spreadsheet.ej2Instances.sheets[this.$refs.spreadsheet.ej2Instances.activeSheetIndex].name === 'Order Details';
    }
  }
}
</script>