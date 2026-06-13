<template>
    <div>
        <ejs-spreadsheet ref="spreadsheet" id="spreadsheet" :height="'708px'" :openUrl="'https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/open'" :saveUrl="'https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/save'"
            :created="onCreated" :enableAIAssist="true" :aiAssistSettings="aiAssistSettings" :promptRequest="onPromptRequest">
            <e-sheets>
                <e-sheet :name="'Gross Pay'" :ranges="ranges" :rows="rows" :columns="columns"></e-sheet>
            </e-sheets>
        </ejs-spreadsheet>
    </div>
</template>

<script>
import { defineComponent } from 'vue';
import { SpreadsheetComponent, SheetsDirective, SheetDirective, RangesDirective, RangeDirective, RowsDirective, RowDirective, CellsDirective, CellDirective, ColumnsDirective, ColumnDirective, AIAssist } from '@syncfusion/ej2-vue-spreadsheet';
import { grossPay } from './data-source';

export default defineComponent({
    name: 'App',
    components: {
        'ejs-spreadsheet': SpreadsheetComponent,
        'e-sheets': SheetsDirective,
        'e-sheet': SheetDirective,
        'e-ranges': RangesDirective,
        'e-range': RangeDirective,
        'e-rows': RowsDirective,
        'e-row': RowDirective,
        'e-cells': CellsDirective,
        'e-cell': CellDirective,
        'e-columns': ColumnsDirective,
        'e-column': ColumnDirective
    },
    data() {
        let requestUrl = 'Enter your AI SERVICE URL' + '/api/AIAssist/Chat';
        /* custom code start */
        requestUrl = 'https://document.syncfusion.com/web-services/ej2-documents-ai-service/api/AIAssist/Chat';
        /* custom code end */

        return {
            /* custom code start */
            visitorId: null,
            /* custom code end */
            ranges: [{ dataSource: grossPay, startCell: 'A3' }],
            rows: [
                { cells: [{ value: 'Gross Pay Calculation', style: { fontSize: '20pt', fontWeight: 'bold', textAlign: 'center', backgroundColor: '#B3FFB3', verticalAlign: 'middle' } }] },
                { index: 13, cells: [{ index: 7, value: 'Total Gross', style: { border: '1px solid #A6A6A6', textAlign: 'center', verticalAlign: 'middle', fontWeight: 'bold' } }, { index: 8, formula: '=Sum(I4:I13)', format: '$#,##0.00', style: { border: '1px solid #A6A6A6', textAlign: 'center', verticalAlign: 'middle', fontWeight: 'bold' } }] }
            ],
            columns: [{ width: 88 }, { width: 120 }, { width: 106 }, { width: 98 }, { width: 110 }, { width: 110 }, { width: 110 }, { width: 98 }, { width: 130 }],
            aiAssistSettings: {
                requestUrl: requestUrl,
                placeholder: 'Ask the AI about this sheet.',
                promptSuggestions: [
                    'Generate report',
                    'Analyze this dataset and summarize',
                    'Highlight important values in this sheet'
                ]
            }
        };
    },
    mounted() {
        /* custom code start */
        const generateId = async () => {
            const id = await this.fingerPrint();
            this.visitorId = id;
        };
        generateId();
        /* custom code end */
    },
    provide: {
        // Inject the AI Assist module into the Spreadsheet component for enabling AI features.
        spreadsheet: [AIAssist]
    },
    methods: {
        /* custom code start */
        async fingerPrint() {
            try {
                const canvas = document.createElement('canvas');
                canvas.width = 600;
                canvas.height = 300;
                canvas.style.display = 'none';
                document.body.appendChild(canvas);
                const ctx = canvas.getContext('2d');
                if (!ctx) {
                    throw new Error('Canvas context not available');
                }
                const size = 24;
                const diamondSize = 28;
                const gap = 4;
                const startX = 30;
                const startY = 30;
                const blue = '#1A3276';
                const orange = '#F28C00';
                const colorMap = [
                    ['blue', 'blue', 'diamond'],
                    ['blue', 'orange', 'blue'],
                    ['blue', 'blue', 'blue']
                ];
                const drawSquare = (x, y, color) => {
                    ctx.fillStyle = color;
                    ctx.fillRect(x, y, size, size);
                };
                const drawDiamond = (centerX, centerY, size, color) => {
                    ctx.fillStyle = color;
                    ctx.beginPath();
                    ctx.moveTo(centerX, centerY - size / 2);
                    ctx.lineTo(centerX + size / 2, centerY);
                    ctx.lineTo(centerX, centerY + size / 2);
                    ctx.lineTo(centerX - size / 2, centerY);
                    ctx.closePath();
                    ctx.fill();
                };
                for (let row = 0; row < 3; row++) {
                    for (let col = 0; col < 3; col++) {
                        const type = colorMap[row][col];
                        const x = startX + col * (size + gap);
                        const y = startY + row * (size + gap);
                        if (type === 'blue') {
                            drawSquare(x, y, blue);
                        } else if (type === 'orange') {
                            drawSquare(x, y, orange);
                        } else if (type === 'diamond') {
                            drawDiamond(x + size / 2, y + size / 2, diamondSize, orange);
                        }
                    }
                }
                ctx.font = '20px Arial';
                ctx.fillStyle = blue;
                ctx.textBaseline = 'middle';
                ctx.fillText('Syncfusion', startX + 3 * (size + gap) + 20, startY + size + gap);
                ctx.globalCompositeOperation = 'multiply';
                ctx.fillStyle = 'rgb(255,0,255)';
                ctx.beginPath(); ctx.arc(50, 200, 50, 0, Math.PI * 2); ctx.fill();
                ctx.fillStyle = 'rgb(0,255,255)';
                ctx.beginPath(); ctx.arc(100, 200, 50, 0, Math.PI * 2); ctx.fill();
                ctx.fillStyle = 'rgb(255,255,0)';
                ctx.beginPath(); ctx.arc(75, 250, 50, 0, Math.PI * 2); ctx.fill();
                ctx.fillStyle = 'rgb(255,0,255)';
                ctx.beginPath();
                ctx.arc(200, 200, 75, 0, Math.PI * 2, true);
                ctx.arc(200, 200, 25, 0, Math.PI * 2, true);
                ctx.fill('evenodd');
                const sha256 = async (str) => {
                    const encoder = new TextEncoder();
                    const data = encoder.encode(str);
                    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
                    const hashArray = Array.from(new Uint8Array(hashBuffer));
                    return hashArray.map((b) => ('0' + b.toString(16)).slice(-2)).join('');
                };
                const visitorID = await sha256(canvas.toDataURL());
                document.body.removeChild(canvas);
                return visitorID;
            } catch (error) {
                return null;
            }
        },
        /* custom code end */

        onCreated() {
            const spreadsheet = this.$refs.spreadsheet.ej2Instances;
            if (!spreadsheet) {
                return;
            }
            spreadsheet.merge('A1:I2');
            spreadsheet.setBorder({ border: '1px solid #A6A6A6' }, 'A1:I13');
            spreadsheet.cellFormat({ textAlign: 'center', verticalAlign: 'middle' }, 'A3:I13');
            spreadsheet.cellFormat({ backgroundColor: '#B3FFB3', fontWeight: 'bold' }, 'A3:I3');
            spreadsheet.numberFormat('$#,##0.00', 'H4:I13');
            spreadsheet.wrap('H3:I3');
            spreadsheet.addDataValidation({ type: 'Time', operator: 'LessThan', value1: '9:00:00 AM', ignoreBlank: false }, 'E4:E13');
            spreadsheet.addDataValidation({ type: 'Time', operator: 'LessThan', value1: '6:00:00 PM', ignoreBlank: false }, 'F4:F13');
            spreadsheet.addDataValidation({ type: 'WholeNumber', operator: 'LessThan', value1: '10', ignoreBlank: false }, 'G4:G13');
            spreadsheet.addDataValidation({ type: 'WholeNumber', operator: 'LessThan', value1: '250', ignoreBlank: false }, 'H4:H13');
            spreadsheet.addDataValidation({ type: 'WholeNumber', operator: 'LessThan', value1: '300', ignoreBlank: false }, 'I4:I13');
        },

        onPromptRequest(args) {
            // You can handle custom logic, such as adding headers or modifying request data, here.
            /* custom code start */
            if (args.requestData) {
                if (this.visitorId) {
                    args.requestData.body.visitorId = this.visitorId;
                }
            }
            /* custom code end */
        }
    }
});
</script>