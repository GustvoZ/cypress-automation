/// <reference types="cypress" />

context('Gerando cpf aleatorio', () => {
    
    //Acessa o site e faz o login
    
        it('Deve realizar o login com sucesso', () => {
            cy.clearCookies()
        cy.login_teste_dev('mamlabs@mamlabs.com.br','pqpqpqla') 
              
        cy.get('.content-search-employee > group-input-auto-complete.ng-isolate-scope > .form-group > .ng-isolate-scope > .angucomplete-holder > #_value').type("cpf")
        

    });
});