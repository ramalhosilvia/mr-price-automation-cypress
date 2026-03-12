
import { LoginPage } from "../pages/LoginPage";


const user = Cypress.env('MRPRICE_USER_EMAIL');
const password = Cypress.env('MRPRICE_USER_PASSWORD');


describe('Login', () => {
  const loginPage = new LoginPage();

  it('Visit first page', () => {

    loginPage.visit();

  });


  it('Login form validation', () => {

    loginPage.validateUnregisteredEmail(password)
    loginPage.invalidPassword(user)
    loginPage.formEmpty(user)
    loginPage.formatEmail(password)

  })

  it('Log in successfully', () => {

    loginPage.login(user, password);

  });

  it('Forgot password', () => {

    loginPage.forgotPassword();

  });

});

