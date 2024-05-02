/// <reference types="Cypress"/>

describe('Teste E2E - Realizando login e tentandoa acessar nova admissão online', () => {
      it.only('Deve realizar o login com sucesso', () => {
        //cy.clearAllLocalStorage
        //cy.clearAllCookies
        cy.login_teste_dev('mamlabs@mamlabs.com.br','pqpqpqla') 
        cy.wait(2500)
        cy.get('.content-sidebar-menu > #leftMenuNew').click()
        cy.wait(2500)
        cy.get('.content-sidebar-menu').contains("Menu").click()
        cy.wait(2500)
        cy.contains('Menu').click()
        cy.wait(2500)
        cy.get('#menu6 > .ng-binding').click()
        cy.wait(3500)
        cy.get('#subMenu6 > .content-sub-menu > :nth-child(3) > a').click()

        //cy.visit(/)
    });
});

