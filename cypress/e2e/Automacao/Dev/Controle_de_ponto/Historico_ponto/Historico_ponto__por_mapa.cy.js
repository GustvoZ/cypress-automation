/// <reference types="cypress" />



context('Teste E2E - Acessando Historico de ponto por mapa', () => {
    
    //Acessa o site e faz o login
    it('Historico de ponto por colaborador', () => {
        
        cy.login_teste_dev('mamlabs@mamlabs.com.br','pqpqpqla')
        cy.wait(5000)
        // Aqui começa a parte de abrir o menu lateral
        cy.get('.content-sidebar-menu > #leftMenuNew').click()
        cy.wait(1500)
        cy.get('.content-sidebar-menu').contains("Menu").click()
        cy.wait(1000)
        cy.contains('Menu').click()
        cy.wait(1000)
        cy.get('#menu4').click()
        cy.wait(1000)
        cy.get('#subMenu4 > .content-sub-menu > :nth-child(6) > a').click()
        cy.wait(1000)
        cy.get('.content-items-list > :nth-child(3) > .ng-binding').click()
        cy.wait(1000)
        cy.get('#selectTeam > .btn').click()
        cy.wait(1000)
        cy.get('.active > .ng-binding').click()
        cy.wait(1000)
        cy.get('.ng-isolate-scope > .default-primary-btn').click()
        


        
        


    });
});