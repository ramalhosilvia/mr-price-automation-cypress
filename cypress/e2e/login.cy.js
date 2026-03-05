
import { LoginPage } from "../pages/LoginPage";
import users from '../fixtures/users.json';


const user = users[0].email;
const password = users[0].password;


describe('Login', () => {
  const loginPage = new LoginPage();


  it('TC-001: Go to Notion', () => {

    loginPage.visit();

  });


  it.only('TC-002: Login form validation', () => {

    // loginPage.InvalidEmail(password)
    // //user ou email?????
    // loginPage.InvalidPassword(user)
    // loginPage.FormEmpty(user)

    loginPage.FormatEmail(password)


  })

  it('TC-003: Log in successfully', () => {

    loginPage.login(user, password);

  });



});

