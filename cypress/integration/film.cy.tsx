import { MOCKED_FILM, TEST_IDS } from '../../src/contants';

it('get info abount one film. Compare info about it', () => {
  cy.visit('https://vsevolod-trusov.github.io/modsen_youtube/');
  cy.intercept('GET', 'https://imdb-top-100-movies.p.rapidapi.com/', {
    fixture: '../fixtures/mocked.json',
  }).as('apiCheck');
  cy.wait('@apiCheck');

  cy.get(`[data-test-id="${TEST_IDS.IMAGE_ID}"]`)
    .invoke('attr', 'src')
    .then((text) => {
      console.log(text);
      expect(text).to.equal(MOCKED_FILM.MOCKED_POSTER_URL);
    });

  cy.get(`[data-test-id="${TEST_IDS.TITLE_ID}"]`)
    .invoke('text')
    .then((text) => {
      console.log(text);
      expect(text).to.equal(MOCKED_FILM.MOCKED_FILM_TITLE);
    });

  cy.get(`[data-test-id="${TEST_IDS.AUTHOR_ID}"]`)
    .invoke('text')
    .then((text) => {
      console.log(text);
      expect(text).to.equal(MOCKED_FILM.MOCKED_FILM_AUTHOR);
    });

  cy.get(`[data-test-id="${TEST_IDS.YEAR_ID}"]`)
    .invoke('text')
    .then((text) => {
      console.log(text);
      expect(text).to.equal(MOCKED_FILM.MOCKED_FILM_YEAR);
    });
});
