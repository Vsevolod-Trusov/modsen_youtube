it('input in search field and search films', () => {
  cy.visit('http://localhost:3000');
  cy.get(
    '#root > div > div.sc-egTsrv.kVigRO > div > div[class="sc-eDLKkx bdWGNr"]',
  ).should('have.length', 16);
});
