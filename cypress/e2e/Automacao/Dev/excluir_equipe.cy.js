/// <reference types="Cypress"/>

describe.only('Excluir equipe', () => {
    it.only('Excluir equipe', () => {
        cy.login_teste_dev('mamlabs@mamlabs.com.br','pqpqpqla') 
        cy.get('.content-sidebar-menu > #leftMenuNew').click()
        cy.get('.content-sidebar-menu').contains("Menu").click()
        cy.wait(1500)
        cy.contains('Menu').click()
        cy.wait(1500)
        cy.get('[ng-show="!searchLeftMenu"]').click({ force: true })
        cy.wait(1500)
        cy.get('#menu8 > .ng-binding').click()
        cy.contains('Parametrizações').click()
        cy.wait(1500)
        cy.get('#subMenu8 > .content-sub-menu > :nth-child(7) > a').click()
        cy.get(':nth-child(19) > .actions > .dropdown > #showAction').click()
        cy.contains('Excluir').click({ force: true })
        cy.get('.btn-secondary').click()

        //cy.get('#menu8 > [ng-click="showLeftMenuNew]').contains("Parametrizações").click({ force: true });
        //cy.get('#menu8 > [ng-show="v.subMenu.length"]').contains("Parametrizações").click()
        //cy.contains('Parametrizações').click()
        //cy.contains('Equipes').click()

        
    });

    it('Excluir equipe 1', () => {
        cy.login_teste_dev('mamlabs@mamlabs.com.br','pqpqpqla') 
        cy.wait(5000)
        cy.visit("https://marqponto-backoffice-dev.azurewebsites.net/lista-de-equipes/")
        cy.get(':nth-child(20) > .actions > .dropdown > #showAction > .fa').click()
        cy.contains('Excluir').click({ force: true })
        cy.get('.btn-secondary').click()
        

        //cy.get('#menu8 > [ng-click="showLeftMenuNew]').contains("Parametrizações").click({ force: true });
        //cy.get('#menu8 > [ng-show="v.subMenu.length"]').contains("Parametrizações").click()
        //cy.contains('Parametrizações').click()

        //cy.contains('Equipes').click()

        
    });


});