import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Observable } from 'rxjs/Observable';


export class CustomValidators {
  static forbiddenProjectName(control: FormControl): {[s:string] : boolean} {
    if(control.value === 'Test'){
      return {'forbiddenName': true};
    }
  }

  static forbiddenProjectName2(control: FormControl): Promise<any> | Observable<any> {
    // binding this of the calling class and works
    console.log(this.status);
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
