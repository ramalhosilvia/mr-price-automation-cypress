import {
    generateInvalidEmail,
    generateValidEmail,
    generatePassword,
} from '../support/utils/data-generators'


const TEXTS = {
    FIRST_PAGE_TITTLE: 'Mr PRICE Branded Bargains Online & Instore! – MrPRICE.online',
    TITLE_DASHBOARD_PAGE: 'Account – MrPRICE.online',
    INCORRECT_CREDENTIAL_MESSAGE: 'Incorrect email or password.',
    INCORRECT_INPUT_MESSAGE: 'Please include an \'@\' in the email address',
    EMAIL: 'email',
    URL_LOGIN: '/account/login',
    RESET_PASSWORD_TITLE: 'Reset your password',
    RESET_PASSWORD_TEXT: 'We will send you an email to reset your password.',
    RESET_SUCCESSFUL_TEXT: 'We\'ve sent you an email with a link to update your password.'
};

const SELECTORS = {
    LOGIN: 'a[href="javascript:void(0)"]',
    EMAIL: '#CustomerEmail',
    PASSWORD: '#CustomerPassword',
    SIGN_IN_BUTTON: 'input[value="Sign In"]',
    LOGIN_BUTTON: 'button[type="submit"]',
    URL_DASHBOARD_PAGE: '/account',
    ERROR_MESSAGE: '.flash.error',
    FORGOT_PASSWORD_BUTTON: '#RecoverPassword',
    RECOVER_EMAIL_INPUT: '#RecoverEmail',
    RESET_PASSWORD_FORM: '#RecoverPasswordForm',
    RESET_PASSWORD_TITLE: 'h3',
    RESET_PASSWORD_TEXT: '.mb-4',
    FORGOT_PASSWORD_SUBMIT: 'input[value="Submit"]',
    RESET_SUCCESSFUL_TEXT: '#ResetSuccess'
}


export class LoginPage {
    constructor() {

    }

    visit() {
        cy.visit('/', {
            timeout: 15000,
            failOnStatusCode: false
        })

        cy.title().should('eq', TEXTS.FIRST_PAGE_TITTLE);
    }

    login = (email, password) => {
        cy.visit('', {
            timeout: 100000,
            failOnStatusCode: false,
        })

        cy.get(SELECTORS.LOGIN).click();
        cy.get(SELECTORS.EMAIL).type(email);
        cy.get(SELECTORS.PASSWORD).type(password);
        cy.get(SELECTORS.SIGN_IN_BUTTON).click();
        cy.title().should('eq', TEXTS.TITLE_DASHBOARD_PAGE);
        cy.url().should('include', SELECTORS.URL_DASHBOARD_PAGE);
    }

    validateUnregisteredEmail = (password) => {
        cy.visit('', {
            timeout: 100000,
            failOnStatusCode: false,
        })
        cy.get(SELECTORS.LOGIN).click();
        cy.get(SELECTORS.EMAIL).type(generateValidEmail());
        cy.get(SELECTORS.PASSWORD).type(password);
        cy.get(SELECTORS.SIGN_IN_BUTTON).click();
        cy.contains(TEXTS.INCORRECT_CREDENTIAL_MESSAGE).should('be.visible');
        cy.url().should('include', TEXTS.URL_LOGIN);
    }

    invalidPassword = (email) => {
        cy.visit('', {
            timeout: 100000,
            failOnStatusCode: false,
        })

        cy.get(SELECTORS.LOGIN).click();
        cy.get(SELECTORS.EMAIL).type(email);
        cy.get(SELECTORS.PASSWORD).type(generatePassword());
        cy.get(SELECTORS.SIGN_IN_BUTTON).click();
        cy.contains(TEXTS.INCORRECT_CREDENTIAL_MESSAGE).should('be.visible');
        cy.url().should('include', TEXTS.URL_LOGIN);
    }

    formEmpty = () => {
        cy.visit('', {
            timeout: 100000,
            failOnStatusCode: false,
        })

        cy.get(SELECTORS.LOGIN).click();
        cy.get(SELECTORS.SIGN_IN_BUTTON).click();
        cy.contains(TEXTS.INCORRECT_CREDENTIAL_MESSAGE).should('be.visible');
    }


    formatEmail = (password) => {
        cy.visit('', {
            timeout: 100000,
            failOnStatusCode: false,
        })

        cy.get(SELECTORS.LOGIN).click();
        cy.get(SELECTORS.EMAIL).type(generateInvalidEmail());
        cy.get(SELECTORS.PASSWORD).type(password);
        cy.get(SELECTORS.SIGN_IN_BUTTON).click();
        cy.get(SELECTORS.EMAIL).then(($input) => {
            const validationMessage = $input[0].validationMessage;
            expect(validationMessage).to.include(TEXTS.EMAIL);
            expect(validationMessage).to.include(TEXTS.INCORRECT_INPUT_MESSAGE);
        });
    }

    forgotPassword = () => {
        cy.visit('', {
            timeout: 100000,
            failOnStatusCode: false,
        })
        cy.get(SELECTORS.LOGIN).click();
        cy.get(SELECTORS.FORGOT_PASSWORD_BUTTON).click();
        cy.get(SELECTORS.RESET_PASSWORD_FORM).within(() => {
            cy.get(SELECTORS.RESET_PASSWORD_TITLE).should('contain', TEXTS.RESET_PASSWORD_TITLE);
            cy.get(SELECTORS.RESET_PASSWORD_TEXT).should('contain', TEXTS.RESET_PASSWORD_TEXT);
        });
        cy.get(SELECTORS.RECOVER_EMAIL_INPUT).should('be.visible').type(generateValidEmail());
        cy.get(SELECTORS.FORGOT_PASSWORD_SUBMIT).click();
        cy.get(SELECTORS.RESET_SUCCESSFUL_TEXT).should('eq', TEXTS.RESET_SUCCESSFUL_TEXT);
    }

}