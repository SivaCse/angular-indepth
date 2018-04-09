import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators} from '@angular/forms';
import { CustomValidators } from './custom-validators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  status = ['Stable', 'Critical', 'Finished'];
  signUpForm: FormGroup;

  ngOnInit(){
    this.signUpForm = new FormGroup({
      'projectName': new FormControl(null, [Validators.required], CustomValidators.forbiddenProjectName2.bind(this)),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'status': new FormControl('Stable')
    });
  }

  onSubmit(){
    console.log(this.signUpForm.value);
  }

}
