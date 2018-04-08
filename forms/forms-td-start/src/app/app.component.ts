import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('f') signUpForm: NgForm;
  defaultSelection = 'pet';
  answer='';
  genders=['male','female'];
  user = {
    username: '',
    email: '',
    secretQuestion: '',
    answer: '',
    gender: ''
  };
  submitted=false;

  // we set values using two way binding, there is another way to do using the form here
  suggestUserName() {
    const suggestedName = 'Superuser';
    // this below will set the value of complete form
    // this.signUpForm.setValue({});


    // 1st approach => not better coz once again click on the button will clear all fields
    // this.signUpForm.setValue({
    //   // console log the form and copy paste the structure
    //   userData: {
    //     username: suggestedName,
    //     email: ''
    //   },
    //   secret: 'pet',
    //   questionAnswer: '',
    //   gender: 'male'
    // });

    //2nd approach to override specific attrs
    // setValue => override whole form
    // patchValue => olu specific parts of form
    // patchValue oly available on form, even setValue is available on this
    this.signUpForm.form.patchValue({
      userData: {
          username: suggestedName
        },
    })
  }

  // // 1st approach
  // onSubmit(form: NgForm){
  //   //form: ElementRef => we get the dom element refference
  //   console.log(form);
  // }

  // 2nd approach
  onSubmit(){
    console.log(this.signUpForm);
    this.submitted = true;
    this.user.username = this.signUpForm.value.userData.username;
    this.user.email = this.signUpForm.value.userData.email;
    this.user.secretQuestion = this.signUpForm.value.secret;
    this.user.answer = this.signUpForm.value.questionAnswer;
    this.user.gender = this.signUpForm.value.gender;

    // to reset the form
    this.signUpForm.reset();
  }
}
