Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});

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

                    // Get and log the initial cart count
                    cy.get('span.bg-secondary').eq(1).then(($element) => {
                        cartItemCount = parseInt($element.text());
                        cy.log('Initial cart count:' + cartItemCount);

                        // Add product to the cart
                        cy.get('.primary-bttn').click();
                        cy.wait(1000);

                        // Assert toast message for successful product addition
                        cy.assertToastMessage('Product added to cart successfully.');
                        cy.wait(1000);

                        // Assert the updated cart count
                        cy.get('span.bg-secondary').eq(1).should('contain', cartItemCount + 1);
                    });
                });
            });

            // Visit the cart page
            cy.get('[href="/cart"]').click();
            cy.wait(2000);

            // Assert the current location is the cart
            cy.location('pathname').should('equal', '/cart');

            // Proceed to checkout
            cy.get('.secondary-bttn').click();
            cy.wait(3000);

            // Assert the current location is the checkout page
            cy.location('pathname').should('equal', '/checkout');
            cy.wait(3000);

            // Assert that the checkout button is initially disabled
            cy.get('.secondary-bttn').should('be.disabled');

            // Check the terms checkbox and assert that the checkout button is enabled
            cy.get('.terms input[type="checkbox"]').check();
            cy.get('.secondary-bttn').should('be.enabled').click();
            cy.wait(3000);

            // Assert the checkout message
            cy.checkoutMsg('Order Placed');

            // Extract and log the order number
            cy.get('span[style="color:#1D1645; font-weight:600"]').invoke('text').then((text) => {
                const orderNumber = text.trim();
                cy.wrap(orderNumber).as('orderNumber');
            });

            // Access the user's account and assert the order number is present
            cy.get('@orderNumber').then((orderNumber) => {
                cy.log(`The order number is: ${orderNumber}`);

                cy.redirection('/my-account');
                cy.get('.item-3 > .flex').click();
                cy.wait(3000);

                // Assert: Order number is present in the client portal
                cy.contains('tr', orderNumber).should('exist');
            });
        });
    });
});
