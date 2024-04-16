import { MOCKED_FILM, TEST_IDS } from '../../src/contants';

it('get info abount one film. Compare info about it', () => {
  cy.visit('http://localhost:3000');
  cy.intercept('GET', '/data.json', {
    fixture: '../fixtures/mocked.json',
  }).as('apiCheck');
  cy.wait('@apiCheck');

  cy.get(`[test-id="${TEST_IDS.IMAGE_ID}"]`)
    .invoke('attr', 'src')
    .then((text) => {
      console.log(text);
      expect(text).to.equal(MOCKED_FILM.MOCKED_POSTER_URL);
    });

  cy.get(`[test-id="${TEST_IDS.TITLE_ID}"]`)
    .invoke('text')
    .then((text) => {
      console.log(text);
      expect(text).to.equal(MOCKED_FILM.MOCKED_FILM_TITLE);
    });

  cy.get(`[test-id="${TEST_IDS.AUTHOR_ID}"]`)
    .invoke('text')
    .then((text) => {
      console.log(text);
      expect(text).to.equal(MOCKED_FILM.MOCKED_FILM_AUTHOR);
    });

  cy.get(`[test-id="${TEST_IDS.YEAR_ID}"]`)
    .invoke('text')
    .then((text) => {
      console.log(text);
      expect(text).to.equal(MOCKED_FILM.MOCKED_FILM_YEAR);
    });
});
