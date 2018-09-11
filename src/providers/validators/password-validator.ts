import { AbstractControl } from '@angular/forms';
export class PasswordValidation {

    static MatchPassword(AC: AbstractControl) {
        let password = AC.get('password').value; // to get value in input tag
        let confirmPassword = AC.get('confirmPassword').value; // to get value in input tag
        if (password != confirmPassword) {
            console.log('false');
            AC.get('confirmPassword').setErrors({ MatchPassword: true })
        } else {
            console.log('true');
            return null
        }
    }
    static cprValidator(AC: AbstractControl) {
        let cprnummner = AC.get('cprnummner').value; // to get value in input tag
      //  let validformat = '/[0-9]{6}\-[0-9]{4}$/';
     let cprformat =  new RegExp(/^[0-9]{10}$/); //new RegExp("/[0-9]{6}\-[0-9]{4}$/");
      console.log(cprnummner);
     // if (cprformat.test(cprnummner)==false) {
        if (cprnummner==''||cprnummner==null||cprnummner==undefined) {
        console.log('false');
        AC.get('cprnummner').setErrors({ cprValidator: true })
    } else {
        console.log('true');
        return null
    }
    }
}