/// <reference types="Cypress"/>

describe.only('Teste funcional de login', () => {
    it.only('Deve realizar o login com sucesso', () => {
        cy.login_teste('mamlabs@mamlabs.com.br','pqpqpqla') 
        cy.contains('#leftMenuNew > small').click()
    });





    it('Deve realizar o login com sucesso', () => {
        cy.visit("https://marqponto-backoffice-dev.azurewebsites.net/")
        cy.get('[ng-model="data.email"]').type("mamlabs@mamlabs.com.br")
        cy.get('[ng-model="data.password"]').type("pqpqpqla")
        cy.get('[ng-if="!loading"]').click()
        cy.get(':nth-child(1) > .col-sm-4 > .col-12 > .content-title > h4').should('contain','Tarefas pendentes')
    });

    it('Deve realizar o login com sucesso', () => {
        cy.visit("https://marqponto-backoffice-dev.azurewebsites.net/")
        cy.get('[ng-model="data.email"]').type("mamlabs@mamlabs.com.br")
        cy.get('[ng-model="data.password"]').type("pqpqpqla")
        cy.get('[ng-if="!loading"]').click()
        cy.get(':nth-child(1) > .col-sm-4 > .col-12 > .content-title > h4').should('contain','Tarefas pendentes')
    });
});