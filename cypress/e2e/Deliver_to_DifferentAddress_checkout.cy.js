Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});

const { faker } = require('@faker-js/faker');
const fName=faker.person.firstName();
const LName=faker.person.lastName();

//const email=`deepak.baral+${fName}@intuji.com`
// const email=faker.internet.email();
const email=faker.internet.email();

//const email= faker.email.email();
const address= 'Kirtipur';

const phone='2 9876 5432';
const company=faker.company.name();
const message="This is test message generated for testing purpouse. Please ignore this message"

describe('Customer checkout', () => {
    context('cart checkout', () => {
        it('cart checkout', () => {
            // Login to the website
            cy.websiteLogin();

            // Initialize cartItemCount variable
            let cartItemCount;

            // Wait for 2 seconds
            cy.wait(2000);

            // Loop through each product
            cy.product().then((product) => {
                product.product.forEach((products) => {
                    // Visit each product's page
                    cy.visit(product.baseurl + products);
                    cy.wait(2000);

                    // Add product to the cart
                    cy.get('.single_add_to_cart_button').click();
                    cy.wait(3000);

                   


                });
                cy.visit("https://jr-safety.webo.dev/cart/")
                    cy.get('.left_nav > :nth-child(2) > a').click();
                    cy.wait(2000)
                    //cy.get(':nth-child(2) > a > .nav_left_text')
                    cy.get('.checkout-button').click();
                    cy.wait(2000)

                    

                    // cy.get('#billing_address_1').clear().type("Perth")
                    // cy.get('#billing_city').clear().type('NSW')

                    // cy.get('#billing_postcode').clear().type('11166')
                    // cy.wait(1000)
                    //cy.get('#place_order').click();
                    // cy.wait(2000)

                    cy.get('#ship-to-different-address-checkbox').click()
                    
                    cy.get('#billing_first_name').clear().type(fName)
                    cy.get('#billing_last_name').clear().type(LName)

                    cy.wait(1000)
                    cy.get('#billing_address_1').clear().type("Nepal")
                    cy.get('#billing_city').clear().type(address)
                    cy.get('#billing_email').clear().type(email)


                    cy.get('#billing_postcode').clear().type('15920')
                
                    cy.get('#place_order').click();

                  

                    cy.wait(1000)
                    cy.get('[class="order-id"]').invoke("text").then((order_id)=>{
                    cy.get('.view-order').click()
                    cy.get('.order-number').should('have.text', order_id.replace(/[^\d]/g, ''));    
                    
                    })
                    

 
                    
            });
        });
    });
});
