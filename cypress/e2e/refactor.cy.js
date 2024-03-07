// describe('Counting Total Product', () => {
//     context('count product', () => {
//         it('count product', () => {
//             // Login to the website
//             cy.websiteLogin();
//             // cy.get('#menu-bar > .header--nav > :nth-child(1) > :nth-child(3) > a').click({ force: true });
//             // cy.get('#menu-bar nav ul > li:nth-child(3) > a').click({ force: true });
//             cy.get('#menu-bar nav ul > li:nth-child(3) > a').click({ multiple: true, force: true });
//             let totalCount = 0;

//             function processPage() {
//                 cy.get('.products-list .product-type-simple').should('have.length.greaterThan', 0).then((categories) => {
//                     // Log the total number of product category cards on the current page
//                     cy.log(`Total Number of Product Category Cards: ${categories.length}`);
//                     totalCount += categories.length;

//                     // Click the "Next" button if available
//                     cy.get('.next > img').then((nextButton) => {
//                         if (nextButton.length > 0) {
//                             cy.get('.next > img').click();
//                             // Recursively process the next page
//                             processPage();
//                         } else {
//                             // Log the total number of products when no more pages are available
//                             cy.log('Total number of products: ' + totalCount);
//                         }
//                     });
//                 });
//             }

//             // Start processing the first page
//             processPage();
//         });
//     });
// });
// ---------------
// describe('Counting Total Product', () => {
//     context('count product', () => {
//         it('count product', () => {
//             // Login to the website
//             cy.websiteLogin();
//             cy.get('#menu-bar nav ul > li:nth-child(3) > a').click({ multiple: true, force: true });

//             let totalCount = 0;

//             function processPage() {
//                 cy.get('.products-list .product-type-simple').should('have.length.greaterThan', 0).then((categories) => {
//                     // Log the total number of product category cards on the current page
//                     cy.log(`Total Number of Product Category Cards: ${categories.length}`);
//                     totalCount += categories.length;

//                     // Click the "Next" button if available
//                     cy.get('.next > img', { timeout: 10000 }).then((nextButton) => {
//                         if (nextButton.length > 0) {
//                             cy.get('.next > img').click();
//                             // Recursively process the next page
//                             processPage();
//                         } else {
//                             // Log the total number of products when no more pages are available
//                             cy.log('Total number of products: ' + totalCount);
//                         }
//                     }, (error) => {
//                         // Handle the case when the "Next" button is not found within the timeout
//                         cy.log('Next button not found. Total number of products: ' + totalCount);
//                     });
//                 });
//             }

//             // Start processing the first page
//             processPage();
//         });
//     });
// });
// ------------------


// describe('Counting Total Product', () => {
//     context('count product', () => {
//         it('count product', () => {
//             // Login to the website
//             cy.websiteLogin();
//             cy.get('#menu-bar nav ul > li:nth-child(3) > a').click({ multiple: true, force: true });

//             let totalCount = 0;

//             function processPage() {
//                 cy.get('.products-list .product-type-simple').should('have.length.greaterThan', 0).then((categories) => {
//                     // Log the total number of product category cards on the current page
//                     cy.log(`Total Number of Product Category Cards: ${categories.length}`);
//                     totalCount += categories.length;

//                     // Click the "Next" button if available
//                     cy.get('.next > img', { timeout: 15000 }).should('be.visible').then((nextButton) => {
//                         if (nextButton) {
//                             cy.get('.next > img').click();
//                             // Recursively process the next page
//                             processPage();
//                         } else {
//                             // Log the total number of products when no more pages are available
//                             cy.log('Total number of products: ' + totalCount);
//                         }
//                     }).catch(() => {
//                         // Handle any error during the cy.get('.next > img') call
//                         cy.log('Error while trying to find the "Next" button. Total number of products: ' + totalCount);
//                     });
//                 });
//             }

//             // Start processing the first page
//             processPage();
//         });
//     });
// });

describe('Counting Total Product', () => {
    context('count product', () => {
        it('count product', () => {
            // Login to the website
            cy.websiteLogin();
            cy.get('#menu-bar nav ul > li:nth-child(3) > a').click({ multiple: true, force: true });

            let totalCount = 0;

            function processPage() {
                cy.get('.products-list .product-type-simple').should('have.length.greaterThan', 0).then((categories) => {
                    // Log the total number of product category cards on the current page
                    cy.log(`Total Number of Product Category Cards: ${categories.length}`);
                    totalCount += categories.length;

                    // Click the "Next" button if available
                    cy.get('.next > img', { timeout: 15000 }).should('be.visible').then(() => {
                        cy.get('.next > img').click();
                        // Recursively process the next page
                        processPage();
                    }).catch(() => {
                        // Log the total number of products when no more pages are available
                        cy.log('Total number of products: ' + totalCount);
                    });
                });
            }

            // Start processing the first page
            processPage();
        });
    });
});
