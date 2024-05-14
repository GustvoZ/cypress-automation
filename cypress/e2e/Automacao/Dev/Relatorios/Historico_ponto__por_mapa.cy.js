/// <reference types="cypress" />



context('Teste E2E - Acessando Historico de ponto por colaborador', () => {
    
    //Acessa o site e faz o login
    it('Historico de ponto por colaborador', () => {
        
        cy.login_teste_dev('mamlabs@mamlabs.com.br','pqpqpqla')
        cy.wait(5000)

        cy.visit('https://marqponto-backoffice-dev.azurewebsites.net/controle-de-ponto-por-mapa/');
        cy.get('.col-12-col-md-12').click();
        cy.get('.info-text').click();
        cy.get('.dropdown-toggle').click();
        cy.get('.dropdown-menu > :nth-child(2) > .ng-binding').click();
        cy.get('.ng-isolate-scope > .default-primary-btn').click();
        
        


    });
});