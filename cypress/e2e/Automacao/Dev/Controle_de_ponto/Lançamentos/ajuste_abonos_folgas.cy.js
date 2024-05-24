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
        cy.get('#btnSearchAdjustmentsReport > .default-primary-btn').click()
        cy.wait(1000)
        //verificar se tem a palavra Total de horas na pagina
        cy.contains('Total de horas')
        cy.get(':nth-child(3) > .ng-isolate-scope > .form-group > .nya-bs-select').click()
        cy.get(':nth-child(3) > .ng-isolate-scope > .form-group > .nya-bs-select > .open > .dropdown-menu > :nth-child(1) > .ng-binding').click()
        cy.get('#selectTeam > .btn').click()
        cy.get('#selectTeam > .open > .dropdown-menu > :nth-child(3) > .ng-binding').click()
        cy.get('#btnSearchAdjustmentsReport > .default-primary-btn').click()
        cy.wait(1000)
        cy.contains(/Total de horas | Nenhum dado para visualização aqui/)
        // usando o contains da for ali em cima eu posso buscar por mais de 1 palavra na mesma sentença
        cy.get('#selectTeam > .btn').click()
        cy.get('#selectTeam > .open > .dropdown-menu > :nth-child(1) > .ng-binding').click()
        cy.get(':nth-child(5) > .ng-isolate-scope > .form-group > .nya-bs-select > .btn').click()
        cy.get(':nth-child(5) > .ng-isolate-scope > .form-group > .nya-bs-select > .open > .dropdown-menu > :nth-child(2) > .ng-binding').click()
        cy.get('#btnSearchAdjustmentsReport > .default-primary-btn').click() // este é um click em botão de pesquisar
        cy.wait(1000)
        cy.contains(/Total de horas | Nenhum dado para visualização aqui/)
        cy.get(':nth-child(5) > .ng-isolate-scope > .form-group > .nya-bs-select > .btn').click()
        cy.get(':nth-child(5) > .ng-isolate-scope > .form-group > .nya-bs-select > .open > .dropdown-menu > :nth-child(1) > .ng-binding').click()
        // outro filtro agora
        cy.get(':nth-child(6) > .ng-isolate-scope > .form-group > .nya-bs-select > .btn').click()
        cy.get(':nth-child(6) > .ng-isolate-scope > .form-group > .nya-bs-select > .open > .dropdown-menu > :nth-child(2) > .ng-binding').click()
        cy.get('#btnSearchAdjustmentsReport > .default-primary-btn').click() // este é um click em botão de pesquisar
        cy.wait(1000)
        cy.contains(/Total de horas | Nenhum dado para visualização aqui/)
        cy.get(':nth-child(6) > .ng-isolate-scope > .form-group > .nya-bs-select > .btn').click() // abre o filtro
        cy.get(':nth-child(6) > .ng-isolate-scope > .form-group > .nya-bs-select > .open > .dropdown-menu > :nth-child(3) > .ng-binding').click()
        cy.get('#btnSearchAdjustmentsReport > .default-primary-btn').click() // este é um click em botão de pesquisar
        cy.wait(1000)
        cy.contains(/Total de horas | Nenhum dado para visualização aqui/)
        cy.get(':nth-child(6) > .ng-isolate-scope > .form-group > .nya-bs-select > .btn').click() // abre o filtro
        cy.get(':nth-child(6) > .ng-isolate-scope > .form-group > .nya-bs-select > .open > .dropdown-menu > :nth-child(3) > .ng-binding').click()
        cy.get('#btnSearchAdjustmentsReport > .default-primary-btn').click() // este é um click em botão de pesquisar
        cy.wait(1000)
        cy.contains(/Total de horas | Nenhum dado para visualização aqui/)
        cy.get(':nth-child(6) > .ng-isolate-scope > .form-group > .nya-bs-select > .btn').click() // abre o filtro
        cy.get(':nth-child(6) > .ng-isolate-scope > .form-group > .nya-bs-select > .open > .dropdown-menu > :nth-child(4) > .ng-binding').click()
        cy.get('#btnSearchAdjustmentsReport > .default-primary-btn').click() // este é um click em botão de pesquisar
        cy.wait(1000)
        cy.contains(/Total de horas | Nenhum dado para visualização aqui/)
        cy.get(':nth-child(6) > .ng-isolate-scope > .form-group > .nya-bs-select > .btn').click() // abre o filtro
        cy.get(':nth-child(6) > .ng-isolate-scope > .form-group > .nya-bs-select > .open > .dropdown-menu > :nth-child(5) > .ng-binding').click()
        cy.get('#btnSearchAdjustmentsReport > .default-primary-btn').click() // este é um click em botão de pesquisar
        cy.wait(1000)
        cy.contains(/Total de horas | Nenhum dado para visualização aqui/)
        cy.get(':nth-child(6) > .ng-isolate-scope > .form-group > .nya-bs-select > .btn').click()
        cy.get(':nth-child(6) > .ng-isolate-scope > .form-group > .nya-bs-select > .open > .dropdown-menu > :nth-child(1) > .ng-binding').click()
        cy.get(':nth-child(7) > .ng-isolate-scope > .form-group > .nya-bs-select > .btn').click()
        cy.get('#btnSearchAdjustmentsReport > .default-primary-btn').click()
        cy.wait(1000)
        cy.contains(/Total de horas | Nenhum dado para visualização aqui/)
        cy.get(':nth-child(7) > .ng-isolate-scope > .form-group > .nya-bs-select > .btn').click()
        cy.get(':nth-child(7) > .ng-isolate-scope > .form-group > .nya-bs-select > .open > .dropdown-menu > :nth-child(2) > .ng-binding').click()
        cy.get('#btnSearchAdjustmentsReport > .default-primary-btn').click() // este é um click em botão de pesquisar
        cy.wait(1000)
        cy.contains(/Total de horas | Nenhum dado para visualização aqui/)
        cy.get(':nth-child(7) > .ng-isolate-scope > .form-group > .nya-bs-select > .btn').click()
        cy.get(':nth-child(7) > .ng-isolate-scope > .form-group > .nya-bs-select > .open > .dropdown-menu > :nth-child(3) > .ng-binding').click()
        cy.get('#btnSearchAdjustmentsReport > .default-primary-btn').click() // este é um click em botão de pesquisar
        cy.wait(1000)
        cy.contains(/Total de horas | Nenhum dado para visualização aqui/)
        cy.get(':nth-child(7) > .ng-isolate-scope > .form-group > .nya-bs-select > .btn').click()
        cy.get(':nth-child(7) > .ng-isolate-scope > .form-group > .nya-bs-select > .open > .dropdown-menu > :nth-child(4) > .ng-binding').click()
        cy.get('#btnSearchAdjustmentsReport > .default-primary-btn').click() // este é um click em botão de pesquisar
        cy.wait(1000)
        cy.contains(/Total de horas | Nenhum dado para visualização aqui/)
        cy.get(':nth-child(7) > .ng-isolate-scope > .form-group > .nya-bs-select > .btn').click()
        cy.get(':nth-child(7) > .ng-isolate-scope > .form-group > .nya-bs-select > .open > .dropdown-menu > :nth-child(1) > .ng-binding').click()
        cy.wait(1000)
        cy.contains(/Total de horas | Nenhum dado para visualização aqui/)
        cy.get(':nth-child(8) > .ng-isolate-scope > .form-group > .nya-bs-select > .btn').click()
        cy.get('#btnSearchAdjustmentsReport > .default-primary-btn').click()
        cy.wait(1000)
        cy.contains(/Total de horas | Nenhum dado para visualização aqui/)







    });
});

