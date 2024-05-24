/// <reference types="Cypress"/>

describe('Teste E2E - Realizando login e tentandoa acessar nova admissão online', () => {
      it.only('Deve realizar o login com sucesso', () => {
        //cy.clearAllLocalStorage
        //cy.clearAllCookies
       cy.clearAllLocalStorage
        cy.login_teste_dev('mamlabs@mamlabs.com.br','pqpqpqla') 
        cy.wait(5000)
        cy.visit('https://marqhr-backoffice-dev.azurewebsites.net/sobreaviso/')
        cy.get('#subMenu4 > .content-sub-menu > :nth-child(3) > a').click({ force: true }) // isto funcionou (amen)
        cy.wait(2000)
        cy.get('.onCall > .MuiButton-contained').click()
        cy.get('[data-id="0265B10D192C47BEBE617AE813BA7DF1"] > .MuiDataGrid-cellCheckbox > .MuiButtonBase-root > .PrivateSwitchBase-input').click()
        cy.get('.css-37axwu > .MuiButton-contained').click()
        cy.wait(1000)
        cy.get('.css-u5qqyq > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root').click()

        //cy.visit(/)
    });
});

