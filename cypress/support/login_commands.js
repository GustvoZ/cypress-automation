/// <reference types="Cypress"/>

Cypress.Commands.add('login_teste',(user,password)=>{
    cy.visit("https://marqponto-backoffice-dev.azurewebsites.net/")
    cy.get('[ng-model="data.email"]').type(user)
    cy.get('[ng-model="data.password"]').type(password)
    cy.get('[ng-if="!loading"]').click()
})