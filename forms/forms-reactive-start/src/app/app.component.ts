import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators, FormArray } from "@angular/forms";
import { Observable } from "rxjs/Observable";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  genders = ["male", "female"];
  signUpForm: FormGroup;
  forbiddenUsernames = ["Chris", "Anna"];

  ngOnInit() {
    // build this as per the structure in template
    this.signUpForm = new FormGroup({
      // to avoid issues during minification and since this is used in html wrap it in ''
      userData: new FormGroup({
        // the reason we bind(this) here is coz, this code will be executed by angular and will not know about this
        // 'username': new FormControl('default user', [Validators.required, this.forbiddenNames.bind(this)]),
        username: new FormControl(null, [
          Validators.required,
          this.forbiddenNames.bind(this)
        ]),
        email: new FormControl(
          null,
          [Validators.required, Validators.email],
          this.forbiddenEmails
        )
      }),
      gender: new FormControl("male"),
      hobbies: new FormArray([])
    });

    // we can subscribe to statuschanges and value changes which are observables two hooks

    // this.signUpForm.valueChanges.subscribe(
    //   (value) => {
    //     console.log(value);
    //   }
    // );

    this.signUpForm.statusChanges.subscribe(value => {
      console.log(value);
    });

    // we can setValue and patchValue like TD
    // this.signUpForm.setValue({
    //   'userData': {
    //     'username': 'Max',
    //     'email': 'max@test.com'
    //   },
    //   'gender': 'male',
    //   'hobbies': []
    // });

    this.signUpForm.patchValue({
      userData: {
        username: "Max23",
        email: "max@test.com"
      }
    });
  }

  onSubmit() {
    console.log(this.signUpForm);
    // reset will will clear even default set radio button if want to set, use the js object notation
    this.signUpForm.reset({
      gender: "male"
    });
  }

  onAddHobby() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.signUpForm.get("hobbies")).push(control);
  }

  forbiddenNames(control: FormControl): { [s: string]: boolean } {
    if (this.forbiddenUsernames.indexOf(control.value) !== -1) {
      return { nameIsForbidden: true };
    }
    // null or nothing should be returned not {'nameIsForbidden': false}
    return null;
  }

  // Async Validators
  forbiddenEmails(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === "test@test.com") {
          resolve({ emailIsForbidden: true });
        } else {
          resolve(null);
        }
      }, 1500);
    });
    return promise;
  }
} // class end
