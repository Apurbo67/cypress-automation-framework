describe('Saucedemo Login Tests', () => {

  beforeEach(() => {
    cy.visit('https://www.saucedemo.com')
  })

  it('should login with valid credentials', () => {
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()
    cy.url().should('include', '/inventory')
  })

  it('should show error with invalid credentials', () => {
    cy.get('[data-test="username"]').type('wrong_user')
    cy.get('[data-test="password"]').type('wrong_pass')
    cy.get('[data-test="login-button"]').click()
    cy.get('[data-test="error"]').should('be.visible')
  })

  it('should not allow empty login', () => {
    cy.get('[data-test="login-button"]').click()
    cy.get('[data-test="error"]').should('contain', 'Username is required')
  })

})