import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

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
      'projectName': new FormControl(null, [Validators.required], this.forbiddenProjectName2),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'status': new FormControl('Stable')
    });
  }

  onSubmit(){
    console.log(this.signUpForm);
  }

  forbiddenProjectName(control: FormControl): {[s:string] : boolean} {
    if(control.value === 'Test'){
      return {'forbiddenName': true};
    }
  }

  forbiddenProjectName2(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if(control.value === 'Anna'){
          resolve({'forbiddenName': true});
        }
        resolve(null);
      }, 1000);
    });
    return promise;
  }

}
