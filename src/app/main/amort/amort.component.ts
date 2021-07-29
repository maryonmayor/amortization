import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-amort',
  templateUrl: './amort.component.html',
  styleUrls: ['./amort.component.css']
})
export class AmortComponent implements OnInit {
  monthlyPayment:number = 0;
  showMonthlyPayment:boolean = false;
  constructor() { }

  ngOnInit(): void {
    console.log(this.showMonthlyPayment);
  }

  amortForm = new FormGroup( {
    years : new FormControl(),
    interest : new FormControl(),
    loanAmount : new FormControl()
  });
  

  

  private computeAmort(years:number, interest:number,loanAmount:number) {
    console.log(years, interest, loanAmount);
    var months:number = years * 12;
    var interestInDecimal:number = interest / 100;
    var monthlyInterest:number = interestInDecimal / 12;
    var temp1:number = 1 + monthlyInterest;
    months = -Math.abs(months);
    var temp2:number = Math.pow(temp1, months);
    var temp3:number = -Math.abs(temp2) + 1;

    this.monthlyPayment =  loanAmount/(temp3/monthlyInterest);
    this.monthlyPayment = Math.round(this.monthlyPayment * 100) / 100;
    if ( this.monthlyPayment > 0 )
      this.showMonthlyPayment = true;
    console.log(monthlyInterest, temp3/monthlyInterest, this.monthlyPayment, months,interestInDecimal);
  }

  onSubmit() {  
    this.computeAmort(this.amortForm.value.years,
    this.amortForm.value.interest,this.amortForm.value.loanAmount);


    console.log(this.amortForm.value.interest)
  }
  

}
