import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
        <button kendoButton *ngIf="!opened" (click)="open()">Open dialog</button>
        <kendo-dialog title="Please confirm" *ngIf="opened" (close)="close('cancel')" [minWidth]="250" [width]="450">
            <p style="margin: 30px; text-align: center;">Are you sure you want to continue?</p>
            
            <kendo-stacklayout [gap]="15" [orientation]="'horizontal'">
            <p>{{name}}</p>
            <kendo-dropdownlist [data]="listItems"> </kendo-dropdownlist>
            <kendo-textbox></kendo-textbox>
            <button>Find</button>
            </kendo-stacklayout>
            
            <kendo-grid
            [kendoGridBinding]="gridView"
            kendoGridSelectBy="id"
            [pageSize]="20"
            [pageable]="true"
            [height]="500"
            [columnMenu]="{ filter: true }"
            >
            </kendo-grid>
            <kendo-dialog-actions>
                <button kendoButton (click)="close('yes')" themeColor="primary">Select</button>
            </kendo-dialog-actions>
        </kendo-dialog>
    `,
})
export class AppComponent {
  public gridView: any = [{ 'tile': 'Hello', field: 'World' }];

  public opened = true;

  public name = 'Package Code';

  public listItems: Array<string> = [
    'X-Small',
    'Small',
    'Medium',
    'Large',
    'X-Large',
    '2X-Large',
  ];

  public close(status: string): void {
    console.log(`Dialog result: ${status}`);
    this.opened = false;
  }

  public open(): void {
    this.opened = true;
  }
}
