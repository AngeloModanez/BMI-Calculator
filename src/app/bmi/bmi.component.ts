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
    bmi = this.weight / (this.height * this.height);

    if (bmi < 16) {
      this.msg = 'BMI = ' + bmi.toFixed(1) + 'kg/m2 (Severe Thinness)';
    } else if (bmi >= 16 && bmi < 17) {
      this.msg = 'BMI = ' + bmi.toFixed(1) + 'kg/m2 (Moderate Thinness)';
    } else if (bmi >= 17 && bmi < 18.5) {
      this.msg = 'BMI = ' + bmi.toFixed(1) + 'kg/m2 (Mild Thinness)';
    } else if (bmi >= 18.5 && bmi < 25) {
      this.msg = 'BMI = ' + bmi.toFixed(1) + ' kg/m2 (Normal)';
    } else if (bmi >= 25 && bmi < 30) {
      this.msg = 'BMI = ' + bmi.toFixed(1) + 'kg/m2 (Overweight)';
    } else if (bmi >= 30 && bmi < 35) {
      this.msg = 'BMI = ' + bmi.toFixed(1) + 'kg/m2 (Obese Class I)';
    } else if (bmi >= 35 && bmi < 40) {
      this.msg = 'BMI = ' + bmi.toFixed(1) + 'kg/m2 (Obese Class II)';
    } else if (bmi >= 40) {
      this.msg = 'BMI = ' + bmi.toFixed(1) + 'kg/m2 (Obese Class III)';
    }
  }
}
