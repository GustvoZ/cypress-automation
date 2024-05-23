/// <reference types="cypress" />



context('Teste E2E - Acessando Historico de ponto por data', () => {
    
    //Acessa o site e faz o login
    
        it('Historico de ponto por data', () => {
            //cy.clearCookies()
        cy.login_teste_dev('mamlabs@mamlabs.com.br','pqpqpqla')
        cy.wait(1500)
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
        // aqui ja terminou de clicar na pagina do relatorio de Historico de ponto no menu lateral
        cy.get('.ng-isolate-scope > .default-primary-btn').click()
        cy.wait(1000)
        cy.get(':nth-child(3) > .ng-isolate-scope > .form-group > .nya-bs-select > .btn').click()
        cy.wait(1000)
        cy.get(':nth-child(3) > .ng-isolate-scope > .form-group > .nya-bs-select > .open > .dropdown-menu > :nth-child(3) > .ng-binding').click()
        cy.wait(1000)
        cy.get('.ng-isolate-scope > .default-primary-btn').click() //botão de pesquisar
        cy.wait(1000)
        cy.get(':nth-child(5) > .ng-isolate-scope > .form-group > .nya-bs-select > .btn').click()
        cy.wait(1000)
        cy.get(':nth-child(5) > .ng-isolate-scope > .form-group > .nya-bs-select > .open > .dropdown-menu > :nth-child(2) > .ng-binding').click()
        cy.wait(1000)
        cy.get('.ng-isolate-scope > .default-primary-btn').click() //botão de pesquisar
        cy.wait(1000)
        cy.get(':nth-child(6) > .ng-isolate-scope > .form-group > .nya-bs-select > .btn').click()
        cy.wait(1000)
        cy.get(':nth-child(6) > .ng-isolate-scope > .form-group > .nya-bs-select > .open > .dropdown-menu > :nth-child(2) > .ng-binding').click()
        cy.get('.ng-isolate-scope > .default-primary-btn').click() //botão de pesquisar
        cy.wait(1000)
        cy.get(':nth-child(7) > .ng-isolate-scope > .form-group > .nya-bs-select > .btn').click()
        cy.wait(1000)
        cy.get(':nth-child(7) > .ng-isolate-scope > .form-group > .nya-bs-select > .open > .dropdown-menu > :nth-child(5) > .ng-binding').click()
        cy.get('.ng-isolate-scope > .default-primary-btn').click() //botão de pesquisar
        

    });
});


