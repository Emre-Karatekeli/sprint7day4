import {errorMessages} from '../../src/components/Register';

/* describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:5173/')
  })
}) Orjinalde bu vardı sildik*/


describe('Register Page', () => {
  describe('Error Messages', () => {
    it('name input throws error for 2 characters', () => {
      //Arrange
      cy.visit('http://localhost:5173/')
      //Act
      cy.get("[data-cy='ad-input']").type('em')
      //Assert
      cy.contains(errorMessages.ad)
    })
    it('surname input throws error for 2 characters', () => {
      //Arrange
      cy.visit('http://localhost:5173/')
      //Act
      cy.get("[data-cy='soyad-input']").type('ka')
      //Assert
      cy.contains(errorMessages.soyad)
    })
    it('email input throws error for emre@wit.', () => {
      //Arrange
      cy.visit('http://localhost:5173/')
      //Act
      cy.get("[data-cy='email-input']").type('emre@wit.')
      //Assert
      cy.contains(errorMessages.email)
    })
    it('Password input throws error for 1234', () => {
      //Arrange
      cy.visit('http://localhost:5173/')
      //Act
      cy.get("[data-cy='password-input']").type('1234')
      //Assert
      cy.contains(errorMessages.password)
    })
    it('Button is disabled for unvalidated inputs.', () => {
      //Arrange
      cy.visit('http://localhost:5173/')
      //Act
      cy.get("[data-cy='password-input']").type('1234')
      //Assert
      cy.contains('[data-cy="submit-button"]').should("be.disabled");
    })
  })

})  