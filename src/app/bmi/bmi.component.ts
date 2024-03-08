import { Component } from '@angular/core';

@Component({
  selector: 'app-bmi',
  templateUrl: './bmi.component.html',
  styleUrl: './bmi.component.css',
})
export class BmiComponent {
  weight: any;
  height: any;
  bmi: any;
  msg: string = '';

  calcBmi(bmi: number) {
    this.height = this.height / 100;
    bmi = this.weight / (this.height * this.height);

    if (bmi < 16) {
      this.msg = 'Severe Thinness ' + bmi.toFixed(1);
    } else if (bmi >= 16 && bmi < 17) {
      this.msg = 'Moderate Thinness ' + bmi.toFixed(1);
    } else if (bmi >= 17 && bmi < 18.5) {
      this.msg = 'Mild Thinness ' + bmi.toFixed(1);
    } else if (bmi >= 18.5 && bmi < 25) {
      this.msg = 'Normal ' + bmi.toFixed(1);
    } else if (bmi >= 25 && bmi < 30) {
      this.msg = 'Overweight ' + bmi.toFixed(1);
    } else if (bmi >= 30 && bmi < 35) {
      this.msg = 'Obese Class I ' + bmi.toFixed(1);
    } else if (bmi >= 35 && bmi < 40) {
      this.msg = 'Obese Class II ' + bmi.toFixed(1);
    } else if (bmi >= 40) {
      this.msg = 'Obese Class III ' + bmi.toFixed(1);
    }
  }
}
