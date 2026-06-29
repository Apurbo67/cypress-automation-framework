// cypress/e2e/login.cy.js

import LoginPage from '../pages/LoginPage'

describe('Saucedemo Login Tests', () => {

  const loginPage = new LoginPage()

  beforeEach(() => {
    loginPage.visit()
  })

  it('should login with valid credentials', () => {
    loginPage.login('standard_user', 'secret_sauce')
    cy.url().should('include', '/inventory')
  })

  it('should show error with invalid credentials', () => {
    loginPage.login('wrong_user', 'wrong_pass')
    loginPage.getErrorMessage().should('be.visible')
  })

  it('should not allow empty login', () => {
    loginPage.clickLogin()
    loginPage.getErrorMessage().should('contain', 'Username is required')
  })

})