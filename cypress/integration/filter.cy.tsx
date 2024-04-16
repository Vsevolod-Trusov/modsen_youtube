it('input in search field and search films', () => {
  cy.visit('http://localhost:3000');
  cy.get(
    '#root > div > div.sc-ckdEwu.gHLEoN > div > div.sc-ppzwM.gWhySw > div.sc-hiTDLB.sc-ejCKsa.hEdcYG.ipIfxf > div > input',
  );
  cy.get(
    '#root > div > div.sc-ckdEwu.gHLEoN > div > div.sc-ppzwM.gWhySw > div.sc-hiTDLB.sc-ejCKsa.hEdcYG.ipIfxf > div > button',
  ).click();
  cy.get(
    '#root > div > div.sc-egTsrv.kVigRO > div > div[class="sc-eDLKkx bdWGNr"]',
  ).should('have.length', 5);
});
