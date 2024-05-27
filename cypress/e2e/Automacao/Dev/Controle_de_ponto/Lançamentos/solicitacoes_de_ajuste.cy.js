/// <reference types="cypress" />



context('Teste E2E - Acessando Ajustes, abonos e folgas', () => {
    
    //Acessa o site e faz o login
    it('Ajustes, abonos e folgas', () => {
        
        cy.login_teste_dev('mamlabs@mamlabs.com.br','pqpqpqla')
        cy.wait(6000)
        //entra na pagina de ajustes
        cy.visit('https://marqponto-backoffice-dev.azurewebsites.net/relatorio-de-ajustes')
        cy.wait(1500)
        cy.get('.content-items-list > :nth-child(2) > .ng-binding').click()
        cy.wait(1500)
        cy.get('.ng-isolate-scope > .default-primary-btn').click()
        cy.wait(1500)
        cy.get(':nth-child(3) > .ng-isolate-scope > .form-group > .nya-bs-select > .btn').click() //click para abrir filtro
        cy.get(':nth-child(3) > .ng-isolate-scope > .form-group > .nya-bs-select > .open > .dropdown-menu > :nth-child(2) > .ng-binding').click() // click para escolher opcao no filtro
        cy.get('.ng-isolate-scope > .default-primary-btn').click() // click no botao de pesquisar
        cy.contains(/Aprovado | Reprovado | Nenhum dado para visualização aqui/)
        cy.wait(1500)
        cy.get(':nth-child(3) > .ng-isolate-scope > .form-group > .nya-bs-select > .btn').click() //click para abrir filtro
        cy.get(':nth-child(3) > .ng-isolate-scope > .form-group > .nya-bs-select > .open > .dropdown-menu > :nth-child(3) > .ng-binding').click()
        cy.get('.ng-isolate-scope > .default-primary-btn').click() // click no botao de pesquisar
        cy.contains(/Aprovado | Reprovado | Nenhum dado para visualização aqui/)
        cy.wait(1500)
        cy.get(':nth-child(3) > .ng-isolate-scope > .form-group > .nya-bs-select > .btn').click() //click para abrir filtro
        cy.get(':nth-child(3) > .ng-isolate-scope > .form-group > .nya-bs-select > .open > .dropdown-menu > :nth-child(4) > .ng-binding').click()
        cy.get('.ng-isolate-scope > .default-primary-btn').click() // click no botao de pesquisar
        cy.contains(/Aprovado | Reprovado | Nenhum dado para visualização aqui/)
        cy.wait(1500)
        cy.get(':nth-child(3) > .ng-isolate-scope > .form-group > .nya-bs-select > .btn').click() //click para abrir filtro
        cy.get(':nth-child(3) > .ng-isolate-scope > .form-group > .nya-bs-select > .open > .dropdown-menu > :nth-child(5) > .ng-binding').click()
        cy.get('.ng-isolate-scope > .default-primary-btn').click() // click no botao de pesquisar
        cy.contains(/Aprovado | Reprovado | Nenhum dado para visualização aqui/)
        cy.wait(1500)
        cy.get(':nth-child(3) > .ng-isolate-scope > .form-group > .nya-bs-select > .btn').click() //click para abrir filtro
        cy.get(':nth-child(3) > .ng-isolate-scope > .form-group > .nya-bs-select > .open > .dropdown-menu > :nth-child(1) > .ng-binding').click()
        cy.get('.ng-isolate-scope > .default-primary-btn').click() // click no botao de pesquisar
        cy.contains(/Aprovado | Reprovado | Nenhum dado para visualização aqui/)
        cy.wait(1500)
        // novo filtro
        cy.get('#selectTeam > .btn').click() //abre filtro
        cy.get('.ng-isolate-scope > .default-primary-btn').click() // click em botao de pesquisa
        cy.contains(/Aprovado | Reprovado | Nenhum dado para visualização aqui/)
        cy.wait(1500)
        cy.get('#selectTeam > .btn').click() // abre filtro
        cy.get('#selectTeam > .open > .dropdown-menu > :nth-child(2) > .ng-binding').click()
        cy.get('.ng-isolate-scope > .default-primary-btn').click() // click em botao de pesquisa
        cy.contains(/Aprovado | Reprovado | Nenhum dado para visualização aqui/)
        cy.wait(1500)
        cy.get('#selectTeam > .btn').click() // abre filtro
        cy.get('.dropdown-menu > .active > .ng-binding').click()
        cy.get('.ng-isolate-scope > .default-primary-btn').click() // click em botao de pesquisa
        cy.contains(/Aprovado | Reprovado | Nenhum dado para visualização aqui/)
        cy.wait(1500)
        cy.get('#selectTeam > .btn').click() // abre filtro
        cy.get('#selectTeam > .open > .dropdown-menu > :nth-child(1) > .ng-binding').click()
        cy.get('.ng-isolate-scope > .default-primary-btn').click() // click em botao de pesquisa
        cy.contains(/Aprovado | Reprovado | Nenhum dado para visualização aqui/)
        // novo filtro
        cy.get(':nth-child(5) > .ng-isolate-scope > .form-group > .nya-bs-select > .btn').click() // abre filtro
        cy.get('.ng-isolate-scope > .default-primary-btn').click() // click em botao de pesquisa
        cy.contains(/Aprovado | Reprovado | Nenhum dado para visualização aqui/)
        cy.wait(1500)
        cy.get(':nth-child(5) > .ng-isolate-scope > .form-group > .nya-bs-select > .btn').click() // abre filtro
        cy.get('.ng-isolate-scope > .default-primary-btn').click() // click em botao de pesquisa
        cy.contains(/Aprovado | Reprovado | Nenhum dado para visualização aqui/)
        cy.wait(1500)
        cy.get(':nth-child(5) > .ng-isolate-scope > .form-group > .nya-bs-select > .btn').click() // abre filtro
        cy.get(':nth-child(5) > .ng-isolate-scope > .form-group > .nya-bs-select > .open > .dropdown-menu > :nth-child(3) > .ng-binding').click()
        cy.get('.ng-isolate-scope > .default-primary-btn').click() // click em botao de pesquisa
        cy.contains(/Aprovado | Reprovado | Nenhum dado para visualização aqui/)
        cy.wait(1500)
        cy.get(':nth-child(5) > .ng-isolate-scope > .form-group > .nya-bs-select > .btn').click() // abre filtro
        cy.get(':nth-child(5) > .ng-isolate-scope > .form-group > .nya-bs-select > .open > .dropdown-menu > :nth-child(4) > .ng-binding')
        cy.get('.ng-isolate-scope > .default-primary-btn').click() // click em botao de pesquisa
        cy.contains(/Aprovado | Reprovado | Nenhum dado para visualização aqui/)
        cy.wait(1500)
        cy.get(':nth-child(5) > .ng-isolate-scope > .form-group > .nya-bs-select > .btn').click() // abre filtro
        cy.get(':nth-child(5) > .ng-isolate-scope > .form-group > .nya-bs-select > .open > .dropdown-menu > :nth-child(1) > .ng-binding').click()
        cy.get('.ng-isolate-scope > .default-primary-btn').click() // click em botao de pesquisa
        cy.contains(/Aprovado | Reprovado | Nenhum dado para visualização aqui/)




    });
});
