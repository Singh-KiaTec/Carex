import { AbstractControl } from '@angular/forms';
export class PasswordValidation {

    static MatchPassword(AC: AbstractControl) {
        let password = AC.get('password').value; // to get value in input tag
        let confirmPassword = AC.get('confirmPassword').value; // to get value in input tag

        let hasNumber = new RegExp(/\d/);
        let hasUpper = new RegExp(/[A-Z]/);
        let hasLower = new RegExp(/[a-z]/);
        // console.log('Num, Upp, Low', hasNumber, hasUpper, hasLower);
        const valid = hasNumber && hasUpper && hasLower;

        if (password != confirmPassword) {
            AC.get('confirmPassword').setErrors({ MatchPassword: true });
        }

        if (hasNumber.test(password) == false) {
            AC.get('password').setErrors({ Numbers: true });
        }
        if (hasLower.test(password) == false) {
            AC.get('password').setErrors({ Lower: true });
        }
        if (hasUpper.test(password) == false) {
            AC.get('password').setErrors({ Upper: true });
        }
        if (password && password.length < 8) {
            AC.get('password').setErrors({ long: true });
        }



        if (hasNumber.test(password) && hasUpper.test(password) && hasLower.test(password) && (password.length >= 8) && (password == confirmPassword)) {
            return false;
        }

    }
    static cprValidator(AC: AbstractControl) {
        let cprnummner = AC.get('cprnummner').value; // to get value in input tag
        //  let validformat = '/[0-9]{6}\-[0-9]{4}$/';
        let cprformat = new RegExp(/^[0-9]{10}$/); //new RegExp("/[0-9]{6}\-[0-9]{4}$/");
        if (cprformat.test(cprnummner) == false) {
            // if (cprnummner==''||cprnummner==null||cprnummner==undefined) {
            AC.get('cprnummner').setErrors({ cprValidator: true })
        } else {
            return false;
        }
    }
}