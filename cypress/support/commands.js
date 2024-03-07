const baseurl = 'https://jr-safety.webo.dev/';

Cypress.Commands.add('homePage', () => {
    cy.viewport(1366, 768)

    cy.visit(baseurl)
})

Cypress.Commands.add('websiteLogin', () => {
    cy.viewport(1366, 768)
    cy.visit(baseurl + 'my-account/')
    cy.get('#username').should('exist').type('deepak.baral@intuji.com')
    cy.get('#password').should('exist').type('Deepak@123')
    cy.get('.woocommerce-button').click()
})


Cypress.Commands.add('product', () => {
    const product = [

        '/0-75kg-abe-dry-chemical-powder-fire-extinguisher'

    ]

    return {
        product: product,
        baseurl: baseurl + 'product/',
    }
})

//this is to assert all the tost message
Cypress.Commands.add('assertToastMessage', (expectedText) => {
    cy.get('.Toastify__toast-body > :nth-child(2)')
        .should('exist')
        .and('contain.text', expectedText)
})

//chcckpout msg assertion
Cypress.Commands.add('checkoutMsg', (text) => {
    cy.get('.bg-white').should('contain.text', text)
})

//redirection cosutm command

Cypress.Commands.add('redirection', (path) => {
    cy.viewport(1366, 768)
    cy.visit(baseurl + path)
    cy.wait(2000)
})

//path assertion
Cypress.Commands.add('pathAssertion', (path) => {
    cy.location('pathname').should('equal', path)
})

//current time
Cypress.Commands.add('todaysDate', () => {
    //for time
    const dayjs = require('dayjs')
    const todaysDate = dayjs().format('MMM D YYYY')

    return {
        todaysDate: todaysDate,
    }
})
