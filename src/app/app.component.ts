import { Component, ViewChild } from '@angular/core';
import { SelectableSettings } from '@progress/kendo-angular-grid';
import { DataBindingDirective } from '@progress/kendo-angular-grid';

@Component({
  selector: 'my-app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
})
export class AppComponent {
  @ViewChild(DataBindingDirective) dataBinding: DataBindingDirective;

  public gridView: any = [];

  public gridData: any = [
    {
      'Package Code': '101',
      Description: 'one on one very long test',
      'Unit Price': '$17.18',
      'GL Account': '01000',
      'Account Description': 'test',
    },
    {
      'Package Code': '102',
      Description: 'one on t00',
      'Unit Price': '$50.00',
      'GL Account': '',
      'Account Description': '',
    },
    {
      'Package Code': '102B',
      Description: 'one on two bee',
      'Unit Price': '$50.00',
      'GL Account': '',
      'Account Description': '',
    },
    {
      'Package Code': '105',
      Description: 'one on five',
      'Unit Price': '$0.00',
      'GL Account': '',
      'Account Description': '',
    },

    {
      'Package Code': '110',
      Description: 'one hundred 10',
      'Unit Price': '$0.00',
      'GL Account': '01000',
      'Account Description': 'test',
    },
    {
      'Package Code': '111',
      Description: 'One Hundred Eleven',
      'Unit Price': '$111.00',
      'GL Account': '',
      'Account Description': '',
    },
    {
      'Package Code': '112',
      Description: 'one on12',
      'Unit Price': '$0.00',
      'GL Account': '',
      'Account Description': '',
    },
    {
      'Package Code': '115',
      Description: 'one on five',
      'Unit Price': '$0.00',
      'GL Account': '',
      'Account Description': '',
    },
  ];

  public opened = true;

  public name = 'Package Code';

  public selectedValue: any = '>=';

  public listItems: Array<string> = [
    '<',
    '<=',
    '=',
    '<>',
    '>=',
    '>',
    'begins',
    'ends',
    'between',
    'matches',
  ];

  public mySelection: string[] = [];

  public selectableSettings: SelectableSettings = {
    enabled: true,
    mode: 'single',
  };

  public close(status: string): void {
    console.log(`Dialog result: ${status}`);
    this.opened = false;
  }

  public open(): void {
    this.opened = true;
  }

  public findPressed() {
    console.log('PRESSED!');
    this.gridView = this.gridData;
    this.dataBinding.skip = 0;
  }
}
