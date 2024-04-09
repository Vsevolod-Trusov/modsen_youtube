it('click on category button get films', () => {
  cy.visit('http://localhost:3000');
  cy.wait(2000);
  cy.xpath('/html/body/div/div/div[1]/div/div[2]/div/button[6]').click();
  cy.wait(2000);
  cy.get(
    '#root > div > div.sc-egTsrv.kVigRO > div > div[class="sc-eDLKkx bdWGNr"]',
  ).should('have.length', 3);
});
