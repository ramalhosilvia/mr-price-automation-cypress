
import { LoginPage } from "../pages/LoginPage";
import users from '../fixtures/users.json';


const user = users[0].email;
const password = users[0].password;


describe('Login', () => {
  const loginPage = new LoginPage();


  it('Visit first page', () => {

    loginPage.visit();

  });


  it.only('Login form validation', () => {

    loginPage.InvalidEmail(password)
    loginPage.InvalidPassword(user)
    loginPage.FormEmpty(user)

    loginPage.FormatEmail(password)


  })

  it('Log in successfully', () => {

    loginPage.login(user, password);

  });



});

