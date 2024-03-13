import { Component } from '@angular/core';
import { inject, TemplateRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { clear } from 'console';

@Component({
  selector: 'app-bmi',
  templateUrl: './bmi.component.html',
  styleUrl: './bmi.component.css',
})
export class BmiComponent {
  private modalService = inject(NgbModal);

  weight: any;
  height: any;
  name: string = '';
  imgPath: string = '';
  bmi: any;

  clean() {
    this.weight = null;
    this.height = null;
    this.name = '';
    this.imgPath = '';
  }

  calcBmi(bmi: number, content: TemplateRef<any>) {
    this.modalService.open(content, { backdropClass: 'light-blue-backdrop' });
    if (this.name == '' || this.weight == null || this.height == null ) {
      this.bmi = 'ERROR: PLEASE FILL THE FORM';
      this.imgPath = '';
    }

    if (this.height > 5) this.height = this.height / 100;

    bmi = this.weight / (this.height * this.height);

    switch (true) {
      case bmi < 16:
        this.bmi = bmi.toFixed(1) + 'kg/m2 (Severe Thinness)';
        this.imgPath = '../assets/bmiimg/severethinness.png';
        break;
      case bmi < 17:
        this.bmi = bmi.toFixed(1) + 'kg/m2 (Moderate Thinness)';
        this.imgPath = '../assets/bmiimg/moderatethinness.png';
        break;
      case bmi < 18.5:
        this.bmi = bmi.toFixed(1) + 'kg/m2 (Mild Thinness)';
        this.imgPath = '../assets/bmiimg/mildthinness.png';
        break;
      case bmi < 25:
        this.bmi = bmi.toFixed(1) + 'kg/m2 (Nomal)';
        this.imgPath = '../assets/bmiimg/normal.png';
        break;
      case bmi < 30:
        this.bmi = bmi.toFixed(1) + 'kg/m2 (Overweight)';
        this.imgPath = '../assets/bmiimg/overweight.png';
        break;
      case bmi < 35:
        this.bmi = bmi.toFixed(1) + 'kg/m2 (Obese Class I)';
        this.imgPath = '../assets/bmiimg/obeseclassI.png';
        break;
      case bmi < 40:
        this.bmi = bmi.toFixed(1) + 'kg/m2 (Obese Class II)';
        this.imgPath = '../assets/bmiimg/obeseclassII.png';
        break;
      case bmi >= 40:
        this.bmi = bmi.toFixed(1) + 'kg/m2 (Obese Class III)';
        this.imgPath = '../assets/bmiimg/obeseclassIII.png';
        break;
    }
  }
}
