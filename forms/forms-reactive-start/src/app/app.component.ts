import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  genders = ['male', 'female'];
  signUpForm: FormGroup;

  ngOnInit(){
    // build this as per the structure in template
    this.signUpForm = new FormGroup({
      // to avoid issues during minification and since this is used in htl wrap it in ''
      'username': new FormControl(null, Validators.required),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'gender': new FormControl('male')
    });
  }

  onSubmit(){
    console.log(this.signUpForm);
  }
}
