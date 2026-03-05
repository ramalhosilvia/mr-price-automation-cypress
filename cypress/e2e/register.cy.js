
import { Register, RegisterPage } from "../pages/RegisterPage";


describe('REgister', () => {
    const register = new RegisterPage();


    it('TC-001: ', () => {

        register.visit();
        register.form();

    });

    it.only('TC-002: ', () => {

        register.visit();
        register.formValidation();
        register.firstNameValidation();
        register.lastNameValidation();
        register.emailValidation();
        register.passwordValidation();

    });




});
