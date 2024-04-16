import { TEST_IDS } from '../../src/contants';

it('input in search field and search films', () => {
  cy.visit('http://localhost:3000');
  cy.get(`[test-id="${TEST_IDS.SEARCH_INPUT_ID}"]`).eq(0).type('as');
  cy.get(`[test-id="${TEST_IDS.SEARCH_BUTTON_ID}"]`).eq(0).click();
  cy.get(`[test-id="${TEST_IDS.FILM_ITEM_ID}"]`).should('have.length', 5);
});
