import { Component } from '@angular/core';

@Component({
  selector: 'app-bmi',
  templateUrl: './bmi.component.html',
  styleUrl: './bmi.component.css'
})
export class BmiComponent {
  weight: any = '';
  height: any = '';
  bmi: number = 0;

  bmicalc() {
    this.bmi = (this.weight / (this.height * this.height));
  }
}
