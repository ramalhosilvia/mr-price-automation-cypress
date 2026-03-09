
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


export class MyAccountPage {
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

    validatePage = () => {
        cy.url().should('include', 'https://www.mrprice.online/account')

    }

    addAddress = () => {
        cy.get('a[href="/account/addresses"]').click();
        cy.contains('button', 'Add a New Address').click();
        cy.get('#AddressFirstNameNew').type('First Name');
        cy.get('#AddressLastNameNew').type('Last Name');
        cy.get('#AddressCompanyNew').type('Company ');
        cy.get('#AddressAddress1New').type('Address 1');
        cy.get('#AddressAddress2New').type('Address 2');
        cy.get('#AddressCityNew').type('City');
        cy.get('#AddressCountryNew').select('Ireland');
        cy.get('#AddressProvinceNew').type('Limerick');
        cy.get('#AddressZipNew').type('VH CODE');
        cy.get('#AddressPhoneNew').type('123456789');
        cy.get('input[value="Add Address"]').click();

    }


}

