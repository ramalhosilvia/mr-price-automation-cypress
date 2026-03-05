import {
    generateInvalidEmail,
    generateValidEmail,
    generateEmail
} from '../support/utils/data-generators'


const TEXTS = {
    FIRST_PAGE_TITTLE: 'Mr PRICE Branded Bargains Online & Instore! – MrPRICE.online',
    TITLE_DASHBOARD_PAGE: 'Account – MrPRICE.online',
};

const SELECTORS = {
    LOGIN: 'a[href="javascript:void(0)"]',
    EMAIL: '#CustomerEmail',
    PASSWORD: '#CustomerPassword',
    SIGN_IN_BUTTON: 'input[value="Sign In"]',
    LOGIN_BUTTON: 'button[type="submit"]',

    URL_DASHBOARD_PAGE: '/account',
    ERROR_MESSAGE: '.flash.error',
    PAGE_TITLE: 'h2'
}


export class LoginPage {
    constructor() {

    }


    visit() {
        cy.visit('/', {
            timeout: 15000,
            failOnStatusCode: false
        })

        cy.title().should('eq', TEXTS.FIRST_PAGE_TITTLE)
    }

    login = (email, password) => {
        cy.visit('', {
            timeout: 100000,
            failOnStatusCode: false,
        })

        cy.get(SELECTORS.LOGIN).click()
        cy.get(SELECTORS.EMAIL).type(email)
        cy.get(SELECTORS.PASSWORD).type(password)
        cy.get(SELECTORS.SIGN_IN_BUTTON).click();
        cy.title().should('eq', TEXTS.TITLE_DASHBOARD_PAGE)
        cy.url().should('include', SELECTORS.URL_DASHBOARD_PAGE)
    }



    InvalidEmail = (password) => {
        cy.visit('', {
            timeout: 100000,
            failOnStatusCode: false,
        })

        cy.get(SELECTORS.LOGIN).click()
        cy.get(SELECTORS.EMAIL).type(generateInvalidEmail())
        cy.get(SELECTORS.PASSWORD).type(password)
        cy.get(SELECTORS.SIGN_IN_BUTTON).click();
        cy.contains('Incorrect email or password.').should('be.visible');
        cy.url().should('include', '/account/login')

    }

    InvalidPassword = (password) => {
        cy.visit('', {
            timeout: 100000,
            failOnStatusCode: false,
        })

        cy.get(SELECTORS.LOGIN).click()
        cy.get(SELECTORS.EMAIL).type(generateInvalidEmail())
        cy.get(SELECTORS.PASSWORD).type(password)
        cy.get(SELECTORS.SIGN_IN_BUTTON).click();
        cy.contains('Incorrect email or password.').should('be.visible');
        cy.url().should('include', '/account/login')

    }

    FormEmpty = () => {
        cy.visit('', {
            timeout: 100000,
            failOnStatusCode: false,
        })

        cy.get(SELECTORS.LOGIN).click()
        cy.get(SELECTORS.SIGN_IN_BUTTON).click();
        cy.contains('Incorrect email or password.').should('be.visible');
    }





    FormatEmail = (password) => {
        cy.visit('', {
            timeout: 100000,
            failOnStatusCode: false,
        })

        cy.get(SELECTORS.LOGIN).click()
        cy.get(SELECTORS.EMAIL).type(generateEmail())
        cy.get(SELECTORS.PASSWORD).type(password)
        cy.get(SELECTORS.SIGN_IN_BUTTON).click();
        cy.get('#CustomerEmail').then(($input) => {
            const validationMessage = $input[0].validationMessage;
            expect(validationMessage).to.include('email');
            expect(validationMessage).to.include('Please include an \'@\' in the email address');
        });

    }
}