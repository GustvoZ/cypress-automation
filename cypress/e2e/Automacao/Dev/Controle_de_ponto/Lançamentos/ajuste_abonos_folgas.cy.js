/// <reference types="cypress" />



context('Teste E2E - Acessando Ajustes, abonos e folgas', () => {
    
    //Acessa o site e faz o login
    it('Ajustes, abonos e folgas', () => {
        
        cy.login_teste_dev('mamlabs@mamlabs.com.br','pqpqpqla')
        cy.wait(5000)
        //entra na pagina de ajustes
        cy.visit('https://marqponto-backoffice-dev.azurewebsites.net/relatorio-de-ajustes')
        cy.wait(1500)
        //clica botao de pesquisar
        cy.get('#btnSearchAdjustmentsReport > .default-primary-btn').click()
        //clica no botao de filtro
        cy.get(':nth-child(3) > .ng-isolate-scope > .form-group > .nya-bs-select > .btn').click()
        cy.wait(1000)
        //clicar na opçao do filtro
        cy.get(':nth-child(3) > .ng-isolate-scope > .form-group > .nya-bs-select > .open > .dropdown-menu > :nth-child(3) > .ng-binding').click()
        //clica no botão de pesquisar
        cy.get('#btnSearchAdjustmentsReport > .default-primary-btn').click
        //verificar se tem a palavra Total de horas na pagina
        cy.contains('Total de horas')






    });
});

