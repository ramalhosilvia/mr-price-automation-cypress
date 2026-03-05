
//Email is too long (maximum is 255 characters)
// Email can't be blank.
// Password can't be blank.

const TEXTS = {
    FIRST_PAGE_TITTLE: 'Mr PRICE Branded Bargains Online & Instore! – MrPRICE.online',
};

const SELECTORS = {
    LOGIN: 'a[href="javascript:void(0)"]',
    REGISTER: '#customer_register_link',
    CREATE_BUTTON: 'input[value="Create"]',
    FIRST_NAME: '#FirstName',
    LAST_NAME: '#LastName',
    EMAIL: '#Email',
    PASSWORD: '#CreatePassword'
}

export class RegisterPage {
    constructor() {

    }

    visit() {
        cy.visit('/', {
            timeout: 15000,
            failOnStatusCode: false
        })

        cy.title().should('eq', TEXTS.FIRST_PAGE_TITTLE)
    }


    //Aqui é muito repetição de várias linhas

    formValidation() {
        cy.get(SELECTORS.LOGIN).click()
        cy.get(SELECTORS.REGISTER).click()
        cy.url().should('include', '/account/register')
        cy.get(SELECTORS.CREATE_BUTTON).click()
        cy.get('ul').invoke('text').then((text) => {
            expect(text).to.contain('Email can\'t be blank.');
            expect(text).to.contain('Password can\'t be blank.');
        });
    }

    firstNameValidation() {
        cy.get(SELECTORS.LOGIN).click()
        cy.get(SELECTORS.REGISTER).click()
        cy.url().should('include', '/account/register')
        cy.get(SELECTORS.LAST_NAME).type('teste')
        cy.get(SELECTORS.EMAIL).type('Silvia@teste.com')
        cy.get(SELECTORS.PASSWORD).type('Teste@123')
        cy.get(SELECTORS.CREATE_BUTTON).click()
        cy.get('ul').invoke('text').then((text) => {
            expect(text).to.contain('First name can\'t be blank.');
        });

    }

    lastNameValidation() {
        cy.get(SELECTORS.LOGIN).click()
        cy.get(SELECTORS.REGISTER).click()
        cy.url().should('include', '/account/register')
        cy.get(SELECTORS.FIRST_NAME).type('teste')
        cy.get(SELECTORS.EMAIL).type('Silvia@teste.com')
        cy.get(SELECTORS.PASSWORD).type('Teste@123')
        cy.get(SELECTORS.CREATE_BUTTON).click()
        cy.get('ul').invoke('text').then((text) => {
            expect(text).to.contain('Last name can\'t be blank.');
        });

    }

    emailValidation() {
        cy.get(SELECTORS.LOGIN).click()
        cy.get(SELECTORS.REGISTER).click()
        cy.url().should('include', '/account/register')
        cy.get(SELECTORS.FIRST_NAME).type('teste')
        cy.get(SELECTORS.LAST_NAME).type('teste')
        cy.get(SELECTORS.PASSWORD).type('Teste@123')
        cy.get(SELECTORS.CREATE_BUTTON).click()
        cy.get('ul').invoke('text').then((text) => {
            expect(text).to.contain('Email can\'t be blank.');
        });

    }

    passwordValidation() {
        cy.get(SELECTORS.LOGIN).click()
        cy.get(SELECTORS.REGISTER).click()
        cy.url().should('include', '/account/register')
        cy.get(SELECTORS.FIRST_NAME).type('teste')
        cy.get(SELECTORS.LAST_NAME).type('teste')
        cy.get(SELECTORS.EMAIL).type('Silvia@teste.com')
        cy.get(SELECTORS.CREATE_BUTTON).click()
        cy.get('ul').invoke('text').then((text) => {
            expect(text).to.contain('Password can\'t be blank.');
        });
    }

}


