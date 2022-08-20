///<reference types="Cypress"/> 
//para que funcionen los comandos
import 'cypress-file-upload';
import 'cypress-xpath'
import 'cypress-plugin-tab'
require('@4tw/cypress-drag-drop')
require('cypress-xpath')
require( 'cypress-plugin-tab')

//para que funcionen los comandos
Cypress.on('uncaught:exception', (err, runnable) => {
    return false
})


describe ("  ", () =>{

    it(" ", () =>{
        let tiempo=2000
        cy.visit("")
        cy.title().should("eq","")
        cy.wait(tiempo)
    })

  
    })

//Cierre de describe