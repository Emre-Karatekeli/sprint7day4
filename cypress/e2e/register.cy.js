import { errorMessages } from '../../src/components/Register';

/* describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:5173/')
  })
}) Orjinalde bu vardı sildik*/


describe('Register Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/')
  })
  describe('Error Messages', () => {
    it('name input throws error for 2 characters', () => {
      //Arrange
      //Act
      cy.get("[data-cy='ad-input']").type('em')
      //Assert
      cy.contains(errorMessages.ad)
    })
    it('surname input throws error for 2 characters', () => {
      //Arrange
      //Act
      cy.get("[data-cy='soyad-input']").type('ka')
      //Assert
      cy.contains(errorMessages.soyad)
    })
    it('email input throws error for emre@wit.', () => {
      //Arrange
      //Act
      cy.get("[data-cy='email-input']").type('emre@wit.')
      //Assert
      cy.contains(errorMessages.email)
    })
    it('Password input throws error for 1234', () => {
      //Arrange
      //Act
      cy.get("[data-cy='password-input']").type('1234')
      //Assert
      cy.contains(errorMessages.password)
    })
    it('Button is disabled for unvalidated inputs.', () => {
      //Arrange
      //Act
      cy.get("[data-cy='password-input']").type('1234')
      //Assert
      cy.get('[data-cy="submit-button"]').should("be.disabled");
    })
  })
  describe('Form inputs invalidated', () => {
    it('button enabled for validated inputs', () => {
      //Arrange
      //Act
      cy.get("[data-cy='ad-input']").type('emre')
      cy.get("[data-cy='soyad-input']").type('karatekeli')
      cy.get("[data-cy='email-input']").type('emre@wit.com.tr')
      cy.get("[data-cy='password-input']").type('1234Aa&kam')
      //Assert
      cy.get('[data-cy="submit-button"]').should("not.be.disabled");
    })
  })
    it('submits form on validated inputs', () => {
      //Arrange
      //Act
      cy.get("[data-cy='ad-input']").type('emre')
      cy.get("[data-cy='soyad-input']").type('karatekeli')
      cy.get("[data-cy='email-input']").type('emre@wit.com.tr')
      cy.get("[data-cy='password-input']").type('1234Aa&kam')
      cy.get('[data-cy="submit-button"]').click();
      //Assert
      cy.get('[data-cy="response-message"]').should("be.visible")
    })

})  