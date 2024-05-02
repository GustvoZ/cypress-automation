/// <reference types="cypress" />

context('Teste E2E - Acessando Historico de ponto por dataa', () => {
    
    //Acessa o site e faz o login
    
        it('Historico de ponto', () => {
            //cy.clearCookies()
        cy.login_teste_dev('mamlabs@mamlabs.com.br','pqpqpqla')
        cy.wait(1500)
        cy.get('.content-sidebar-menu > #leftMenuNew').click()
        cy.wait(1500)
        cy.get('.content-sidebar-menu').contains("Menu").click()
        cy.wait(1000)
        cy.contains('Menu').click()
        cy.wait(1000)
        cy.get('#menu4').click()
        cy.wait(500)
        cy.get('#subMenu4 > .content-sub-menu > :nth-child(6) > a').click()
        cy.wait(500)
        cy.get('.ng-isolate-scope > .default-primary-btn').click()


    });
});


