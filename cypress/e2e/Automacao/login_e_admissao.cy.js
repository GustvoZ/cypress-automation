/// <reference types="Cypress"/>

it('Excluir equipe 1', () => {
    cy.clearAllSessionStorage
    cy.login_teste('mamlabs@mamlabs.com.br','pqpqpqla') 
    cy.wait(5000)
    cy.visit("https://marqhr-backoffice-dev.azurewebsites.net/people-analytics")
    cy.log()


});