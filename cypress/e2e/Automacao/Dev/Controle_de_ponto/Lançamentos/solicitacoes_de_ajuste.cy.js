/// <reference types="cypress" />



context('Teste E2E - Acessando Ajustes, abonos e folgas', () => {
    
    //Acessa o site e faz o login
    it('Ajustes, abonos e folgas', () => {
        
        cy.login_teste_dev('mamlabs@mamlabs.com.br','pqpqpqla')
        cy.wait(5000)
        //entra na pagina de ajustes
        cy.visit('https://marqponto-backoffice-dev.azurewebsites.net/relatorio-de-ajustes')
        cy.wait(1500)
        cy.get('.content-items-list > :nth-child(2) > .ng-binding').click()
        cy.wait(1000)
        cy.get('.ng-isolate-scope > .default-primary-btn').click()
        cy.wait(1000)
        cy.get(':nth-child(3) > .ng-isolate-scope > .form-group > .nya-bs-select > .btn').click()
        cy.get(':nth-child(3) > .ng-isolate-scope > .form-group > .nya-bs-select > .open > .dropdown-menu > :nth-child(2) > .ng-binding').click()
        cy.get('.ng-isolate-scope > .default-primary-btn'),click()
        
        cy.contains(/Total de horas | Nenhum dado para visualização aqui/)





    });
});