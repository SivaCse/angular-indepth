import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  subscriptions = ["Basic", "Advanced", "Pro"];
  defaultSelection= 'Advanced';
  @ViewChild('f') signUpForm: NgForm;

  onSubmit(form: NgForm){
    console.log(this.signUpForm.value);
  }
}
