import { jqxGridComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid';
import { Component, Input, ViewChild } from '@angular/core';



@Component({
    selector: 'jqxgrid-viewer',
    templateUrl: 'jqxgrid.html'
})
export class JqxgridComponent {

    private source: any;
    private dataAdapter: any;
    private columns: any[];
    private columngroups: any[];
    @ViewChild('gridReference') dataGrid: jqxGridComponent;

    constructor() { }


    //    @Input() content: string;
    ngOnInit() {

        this.createGrid();
    }
    ngAfterViewInit() {
        //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
        //Add 'implements AfterViewInit' to the class.

        $('.jqx-filter-input').attr("placeholder", "søg");

   
       
    }
    createGrid() {
        var data = new Array();
        var Sundhedsforløb =
            [
                "Rådgivningslinjen", "Aalborg test", "Test"
            ];
        var Dato =
            [
                "23-05-2018", "21-04-2017", "18-03-2017"
            ];
        var Minesundhedsrapporter =
            [
                "<img style='height: 2em; width: 2em; margin-left: 2em;' src='/assets/icon/pdf.png'/>", "<img style='height: 2em; width: 2em; margin-left: 2em;' src='/assets/icon/pdf.png'/>", "<img style='height: 2em; width: 2em; margin-left: 2em;' src='/assets/icon/pdf.png'/>"];

        for (var i = 0; i < Sundhedsforløb.length; i++) {
            var row = {};
            row["Sundhedsforløb"] = Sundhedsforløb[Math.floor(Math.random() * Sundhedsforløb.length)];
            row["Dato"] = Dato[Math.floor(Math.random() * Dato.length)];
            row["Minesundhedsrapporter"] = Minesundhedsrapporter[Math.floor(Math.random() * Minesundhedsrapporter.length)]
            data[i] = row;
        }
        this.source =
            {
                datatype: 'array',
                datafields: [
                    {
                        name: 'Sundhedsforløb', type: 'string'
                    },
                    { name: 'Dato', type: 'string' },
                    { name: 'Minesundhedsrapporter', type: 'string' }
                ],
                localdata: data
            };

        this.dataAdapter = new jqx.dataAdapter(this.source);
        var localization: any = {};
        localization.filtervalue = "Search";
        localization.filterstring = "Search";

        this.columns =
            [
                {
                    text: 'Sundheds forløb', datafield: 'Sundhedsforløb', width: 120
                },
                { text: 'Dato', datafield: 'Dato', width: 'auto'},
                { text: 'Mine sundhedsrapporter', datafield: 'Minesundhedsrapporter', width: 'auto' }
            ];

            let settings = {
                width: '100%'
            };
            setTimeout(() => {
                 this.dataGrid.createWidget(settings);
            }, 500);
    }
}
