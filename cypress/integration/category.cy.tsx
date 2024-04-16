import { TEST_IDS } from '../../src/contants';

it('click on category button get films', () => {
  cy.visit('http://localhost:3000');
  cy.get(`[test-id="${TEST_IDS.CATEGORY_ID}"]`).eq(5).click();
  cy.get(`[test-id="${TEST_IDS.FILM_ITEM_ID}"]`).should('have.length', 3);
});
