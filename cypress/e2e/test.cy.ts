describe('is header exist', () => {
  it('passes', () => {
    cy.visit("http://localhost:3000/");
    cy.get('[data-testid="cypress-header"]').should("exist");
  })
})

describe("add post button work correct", () => {
  it('passes', () =>{
    cy.visit("http://localhost:3000/")
    cy.get('[data-testid="cypress-header-burger"]').click();
    cy.get('[data-testid="cypress-header-burger-add-post-button"]').click();
    cy.get('[data-testid="cypress-header-burger"]').click();
  })
})

describe("redirect to post L works", () => {
  it('passes', () =>{
    cy.visit("http://localhost:3000/")
    cy.get('[data-testid="cypress-post-L"]').click();
  })
})