import { TEST_IDS } from '../../src/contants';

it('click on toggle theme', () => {
  cy.visit('http://localhost:3000');
  cy.get(`[test-id="${TEST_IDS.TOGGLE_THEME_BUTTON_ID}"]`).click();
});
