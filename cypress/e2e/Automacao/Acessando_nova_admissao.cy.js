/// <reference types="Cypress"/>

describe('Teste E2E - Realizando login e tentandoa acessar nova admissão online', () => {
      it.only('Deve realizar o login com sucesso', () => {
        cy.clearAllLocalStorage
        cy.login_teste('mamlabs@mamlabs.com.br','pqpqpqla') 
        cy.wait(1500)
        //cy.get('.content-sidebar-menu > #leftMenuNew').click()
        cy.wait(1500)
        cy.get('.content-sidebar-menu').contains("Menu").click()
        cy.wait(1500)
        //cy.contains('Menu').click()
        cy.wait(1500)
        cy.get('#menu6 > .ng-binding').click({ force: true})
        cy.wait(1500)
        cy.get('#subMenu6 > .content-sub-menu > :nth-child(3) > a > .ng-binding').click()
        //cy.visit(/)

    });
});
