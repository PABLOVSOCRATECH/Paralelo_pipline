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
    
    // before(function(){
    //     cy.fixture('datos2').then(function(data){
    //         //this.data=data No funciona 
    //         globalThis.data=data // ESTA ES UNA MEJOR VARIABLE QUE LA ANTERIOR
    //     })
    // })
    before(function(){
        cy.fixture("").as("Datos_json") // El Alias
    })


    it("Test Uno Cargando desde json 2", () =>{
        let tiempo=2000
        cy.visit('https://demoqa.com/text-box')
        cy.title().should('eq','ToolsQA')
        cy.wait(tiempo)

        cy.get("@Datos_json").then((data)=>{ //hay que poner @para que funcione (@datos_json)?

            cy.get('#userName').should('be.visible').type(data.nombre)
            cy.wait(tiempo)
            cy.get('#userEmail').should('be.visible').type(data.email)
            cy.wait(tiempo)
            cy.get('#currentAddress').should('be.visible').type(data.dir1)
            cy.wait(tiempo)
            cy.get('#permanentAddress').should('be.visible').type(data.dir2)
            cy.wait(tiempo)
            cy.get('#submit').should('be.visible').click({force:true})
            cy.wait(tiempo)
            
        })

       

        })
})