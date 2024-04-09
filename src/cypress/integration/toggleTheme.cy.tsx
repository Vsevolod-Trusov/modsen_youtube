it('click on toggle theme', () => {
  cy.visit('http://localhost:3000');
  cy.get('label[class="sc-fHejqy IkTjd"]').click();
});
