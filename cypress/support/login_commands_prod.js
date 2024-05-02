/// <reference types="Cypress"/>

Cypress.Commands.add('login_teste_prod',(user,password)=>{
    cy.visit("https://app.marqponto.com.br/")
    cy.get('[ng-model="data.email"]').type(user)
    cy.get('[ng-model="data.password"]').type(password)
    cy.get('[ng-if="!loading"]').click()
})