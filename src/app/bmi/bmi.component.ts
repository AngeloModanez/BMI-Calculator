import { Component } from '@angular/core';
import { inject, TemplateRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-bmi',
  templateUrl: './bmi.component.html',
  styleUrl: './bmi.component.css',
})
export class BmiComponent {
  private modalService = inject(NgbModal);

  age: any = '';
  weight: any = '';
  height: any = '';
  name: any = '';
  bmi: any;

  // error: string = 'ERROR: FILL THE FORM'
  // openCleanError(content: TemplateRef<any>) {
  //   if (this.weight == '' && this.height == ''){
  //     this.modalService.open(content, { backdropClass: 'light-blue-backdrop' });
  //   } else{
  //     this.height = '';
  //     this.weight = '';
  //   }
  // }

  clean() {
    this.height = '';
    this.weight = '';
  }

  calcBmi(bmi: number, content: TemplateRef<any>) {
    this.modalService.open(content, { backdropClass: 'light-blue-backdrop' });
    if (this.name == '' || this.weight == '' || this.height == '')
      this.bmi = 'ERROR: PLEASE FILL THE FORM';

    if (this.height > 5) {
      this.height = this.height / 100;
    }
    bmi = this.weight / (this.height * this.height);

    switch (true) {
      case bmi < 16:
        this.bmi = bmi.toFixed(1) + 'kg/m2 (Severe Thinness)';
        break;
      case bmi < 17:
        this.bmi = bmi.toFixed(1) + 'kg/m2 (Moderate Thinness)';
        break;
      case bmi < 18.5:
        this.bmi = bmi.toFixed(1) + 'kg/m2 (Mild Thinness)';
        break;
      case bmi < 25:
        this.bmi = bmi.toFixed(1) + 'kg/m2 (Nomal)';
        break;
      case bmi < 30:
        this.bmi = bmi.toFixed(1) + 'kg/m2 (Overweight)';
        break;
      case bmi < 35:
        this.bmi = bmi.toFixed(1) + 'kg/m2 (Obese Class I)';
        break;
      case bmi < 40:
        this.bmi = bmi.toFixed(1) + 'kg/m2 (Obese Class II)';
        break;
      case bmi >= 40:
        this.bmi = bmi.toFixed(1) + 'kg/m2 (Obese Class III)';
        break;
    }
  }
}
