import { MyAccountPage } from "../pages/MyAccountPage";
import users from '../fixtures/users.json';


const user = users[0].email;
const password = users[0].password;


describe('My account', () => {
    const myAccountPage = new MyAccountPage();


    it('TC-001: ', () => {
        myAccountPage.visit();
        myAccountPage.login(user, password);
        myAccountPage.validatePage();
        myAccountPage.addAddress();

    });





});
