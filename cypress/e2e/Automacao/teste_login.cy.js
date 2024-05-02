/// <reference types="Cypress"/>

describe('Teste funcional de login 1', () => {
    it('Deve realizar o login com sucesso', () => {
        cy.login_teste_dev('mamlabs@mamlabs.com.br','pqpqpqla') 
        cy.contains('#leftMenuNew > small').click()
    });

/// fiz nada aqui testei o commit só pra ver



 
// Aqui é um modelo de login 
it('Deve realizar o login com sucesso 2', () => {
        cy.visit("https://marqponto-backoffice-dev.azurewebsites.net/")
        cy.get('[ng-model="data.email"]').type("mamlabs@mamlabs.com.br")
        cy.get('[ng-model="data.password"]').type("pqpqpqla")
        cy.get('[ng-if="!loading"]').click()
        cy.get(':nth-child(1) > .col-sm-4 > .col-12 > .content-title > h4').should('contain','Tarefas pendentes')
    });

});