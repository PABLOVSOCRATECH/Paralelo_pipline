///<reference types="Cypress"/>

import 'cypress-file-upload'
import 'cypress-xpath'
import 'cypress-plugin-tab'
import { constant } from 'lodash'
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
    // before(function(){
    //     cy.fixture("datos2").as("Datos_json") // El Alias
    // })


    it("Reto Carga por fixture", () =>{
      

    cy.fixture("datos3").then( tesdata =>{
        tesdata.forEach(data => {
            const d_nombre=data.nombre
            const d_email=data.email
            const d_dir1=data.dir1
            const d_dir2=data.dir2

            let tiempo=500
            cy.visit('https://demoqa.com/text-box')
            cy.title().should('eq','ToolsQA')
            cy.wait(tiempo)

            cy.get('#userName').should('be.visible').type(d_nombre)
            cy.wait(tiempo)
            cy.get('#userEmail').should('be.visible').type(d_email)
            cy.wait(tiempo)
            cy.get('#currentAddress').should('be.visible').type(d_dir1)
            cy.wait(tiempo)
            cy.get('#permanentAddress').should('be.visible').type(d_dir2)
            cy.wait(tiempo)
            cy.get('#submit').should('be.visible').click({force: true})
            cy.wait(tiempo)


        })

    })

    })
})

        
            
        
