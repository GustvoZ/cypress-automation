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






    });
});