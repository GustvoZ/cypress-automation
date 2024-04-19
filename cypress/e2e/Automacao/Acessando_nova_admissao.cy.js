/// <reference types="Cypress"/>

describe('Teste E2E - Realizando login e tentandoa acessar nova admissão online', () => {
    it.only('Deve realizar o login com sucesso', () => {
        cy.login_teste('mamlabs@mamlabs.com.br','pqpqpqla') 
        cy.get(':nth-child(1) > .col-sm-4 > .col-12 > .content-title > h4').should('contain','Tarefas pendentes')
        cy.get('#leftMenuNew > span').click()

        cy.get('#menu6').dblclick()
        

    });
});
