Cypress.on('uncaught:exception', (err, runnable) => {
    return false
  })
  describe('verify the parts', ()=> {
    it('verify the parts ', () => {
             cy.login()
        cy.wait(2000)
        cy.url().then((url) => {
        cy.log('Current URL:', url)
        cy.url().should('include', 'https://fortus.webo.dev/account')
        cy.debug()
        cy.wait(2000)
        cy.get(':nth-child(1) > .flex > .ml-sz-12').click()
        cy.wait(2000)
        cy.get('#search-oem').type("01")
        cy.wait(1000)
        cy.get('.item').contains('WASHER').click()
        cy.wait(1000)
        cy.log('Current URL:', url)
        cy.url().should('include', 'https://fortus.webo.dev/product/washer-m30-1008')
         })
        })
      })