///<reference types="Cypress"/>

import 'cypress-file-upload'
import 'cypress-xpath'
import 'cypress-plugin-tab'
require('@4tw/cypress-drag-drop')
require('cypress-xpath')
require( 'cypress-plugin-tab')
Cypress.on('uncaught:exception', (err, runnable) => {
    return false
})


describe("Carga por fixtures", () =>{
    
    before(function(){
        cy.fixture('datos2').then(function(data){
            //this.data=data No funciona 
            globalThis.data=data // ESTA ES UNA MEJOR VARIABLE QUE LA ANTERIOR
        })
    })


    it("Test Uno Cargando desde json", () =>{
        let tiempo=2000
        cy.visit('https://demoqa.com/text-box')
        cy.title().should('eq','ToolsQA')
        cy.wait(tiempo)
        cy.get('#userName').should('be.visible').type(data.nombre)
        cy.get('#userEmail').should('be.visible').type(data.email)
        cy.get('#currentAddress').should('be.visible').type(data.dir1)
        cy.get('#permanentAddress').should('be.visible').type(data.dir2)
        cy.get('#submit').should('be.visible').click({force:true})
        cy.wait(tiempo)
        


        })
})