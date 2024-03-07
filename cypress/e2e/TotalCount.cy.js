Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});

describe('Counting Total Product', () => {
    context('count product', () => {
        it('count product', () => {
            // Login to the website
            cy.websiteLogin();

    

            // Click on the "View All Categories" link with force
            cy.get('#12387 .subMenu a[title="View All Categories"]').click({ force: true });

            // Wait for some time (if needed)
            cy.wait(2000);
            let totalCount;
            // Check if product category cards are present
            cy.get('.categories-lists .product-category-card').should('have.length.greaterThan', 0).then((categories) => {
                // Log the total number of product category cards
                cy.log(`Total Number of Product Category Cards: ${categories.length}`);
                totalCount=categories.length
            cy.get('.next > img').click();
            cy.get('.categories-lists .product-category-card').should('have.length.greaterThan', 0).then((categories) => {
                cy.log(`Total Number of Product Category Cards: ${categories.length}`);
                totalCount+=categories.length
                cy.log(totalCount)


            });
        });
    });
    });
});

