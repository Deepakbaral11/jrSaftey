describe('Counting Total Product', () => {
    context('count product', () => {
        it('count product', () => {
            // Login to the website
            cy.websiteLogin();
            // cy.get('#menu-bar > .header--nav > :nth-child(1) > :nth-child(3) > a').click({ force: true });
            // cy.get('#menu-bar nav ul > li:nth-child(3) > a').click({ force: true });
            cy.get('#menu-bar nav ul > li:nth-child(3) > a').click({ multiple: true, force: true });
            let totalCount = 0;

            function processPage() {
                cy.get('.products-list .product-type-simple').should('have.length.greaterThan', 0).then((categories) => {
                    // Log the total number of product category cards on the current page
                    cy.log(`Total Number of Product Category Cards: ${categories.length}`);
                    totalCount += categories.length;

                    // Click the "Next" button if available
                    cy.get('.next > img').then((nextButton) => {
                        if (nextButton.length > 0) {
                            cy.get('.next > img').click();
                            // Recursively process the next page
                            processPage();
                        } else {
                            // Log the total number of products when no more pages are available
                            cy.log('Total number of products: ' + totalCount);
                        }
                    });
                });
            }

            // Start processing the first page
            processPage();
        });
    });
});
