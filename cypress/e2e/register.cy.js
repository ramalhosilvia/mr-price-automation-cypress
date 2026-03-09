import { Register, RegisterPage } from "../pages/RegisterPage";

describe('Register', () => {
    const register = new RegisterPage();

    it('Form validation ', () => {
        register.visit();
        register.formValidation();
        register.firstNameValidation();
        register.lastNameValidation();
        register.emailValidation();
        register.passwordValidation();
    });

});
