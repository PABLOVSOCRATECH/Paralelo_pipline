
describe ("Bienvenido al curso de Cypress Modulo sección 1", () =>{

    it("Mi primer Test -> Hola mundo", () =>{
        cy.log("Hola Mundo")
        cy.wait(1500)
    })

    it("Segundo test -> campo name", () =>{
        cy.visit("https://testingqarvn.com.es/datos-personales/")
        cy.get("#wsf-1-field-21").type("Pablo")
                
        
    })

})//Cierre de describe