// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })




Cypress.Commands.add("Texto_visible", (selector,texto,t) => { 
    let tiempo=t
    cy.get(selector).should('be.visible').type(texto)
    cy.wait(tiempo) 
})

Cypress.Commands.add("Texto_visible_xpath", (selector,texto,t) => { 
    let tiempo=t
    cy.xpath(selector).should('be.visible').type(texto)
    cy.wait(tiempo) 

 })

 Cypress.Commands.add("Click", (selector,t) => { 
    let tiempo=t
    cy.get(selector).should('be.visible').click()
    cy.wait(tiempo) 

})

Cypress.Commands.add("Click_force", (selector,t) => { 
    let tiempo=t
    cy.get(selector).should('be.visible').click({force:true})
    cy.wait(tiempo) 

})

Cypress.Commands.add("Click_force_xpath", (selector,t) => { 
    let tiempo=t
    cy.xpath(selector).should('be.visible').click({force:true})
    cy.wait(tiempo) 

})
Cypress.Commands.add("Bloque_ToolsQA", (name,email,dir1,dir2,t) => { 
    let tiempo=t
    cy.get("#userName").should('be.visible').type(name)
    cy.wait(tiempo)
    cy.get("#userEmail").should('be.visible').type(email)
    cy.wait(tiempo)
    cy.get("#currentAddress").should('be.visible').type(dir1)
    cy.wait(tiempo)
    cy.get("#permanentAddress").should('be.visible').type(dir2)
    cy.wait(tiempo)
    cy.get("#submit").should('be.visible').click({force: true})
    cy.wait(tiempo)

})
Cypress.Commands.add("Bloque_ToolsQA_Dos", (name,email,dir1,dir2,t) => { 
    let tiempo=t
    cy.Texto_visible("#userName",name,500)
    cy.Texto_visible("#userEmail",email,2000)
    cy.Texto_visible_xpath("//textarea[contains(@id,'currentAddress')]",dir1,1000)
    cy.Texto_visible_xpath("//textarea[contains(@id,'permanentAddress')]",dir2,1000)
    cy.Click_force_xpath("//button[contains(@id,'submit')]",1000)


})

Cypress.Commands.add("Bloque_Reto_Custom", (name,lastname,email,phone,dir1,city,state,zipcode,web,projectdescript,t) => { 
    let tiempo=t
    cy.get(":nth-child(2) > .inputGroupContainer > .input-group > .form-control").clear().should('be.visible').type(name)
    cy.wait(tiempo)
    cy.get(":nth-child(3) > .inputGroupContainer > .input-group > .form-control").clear().should('be.visible').type(lastname)
    cy.wait(tiempo)
    cy.get(":nth-child(4) > .inputGroupContainer > .input-group > .form-control").clear().should('be.visible').type(email)
    cy.wait(tiempo)
    cy.get(":nth-child(5) > .inputGroupContainer > .input-group > .form-control").clear().should('be.visible').type(phone)
    cy.wait(tiempo)
    cy.get(":nth-child(6) > .inputGroupContainer > .input-group > .form-control").clear().should('be.visible').type(dir1)
    cy.wait(tiempo)
    cy.get(":nth-child(7) > .inputGroupContainer > .input-group > .form-control").clear().should('be.visible').type(city)
    cy.wait(tiempo)
    cy.get(".selectContainer > .input-group > .form-control").should('be.visible').select(state)
    cy.wait(tiempo)
    cy.get(":nth-child(9) > .inputGroupContainer > .input-group > .form-control").clear().should('be.visible').type(zipcode)
    cy.wait(tiempo)
    cy.get(":nth-child(10) > .inputGroupContainer > .input-group > .form-control").clear().should('be.visible').type(web)
    cy.wait(tiempo)
    cy.get(":nth-child(1) > label > input").check().should('be.checked')// hosting en la web 
    cy.wait(tiempo)
    cy.get(":nth-child(12) > .inputGroupContainer > .input-group > .form-control").clear().should('be.visible').type(projectdescript)
    cy.wait(tiempo)
    cy.xpath("//button[@type='submit'][contains(.,'Send')]").should('be.visible').click({force: true})
    cy.wait(tiempo)


    })

    Cypress.Commands.add("Validar_campo", (selector,men,nombre_campo,t) => { //men=mensaje //VALIDAR CAMPO
        cy.get(selector).should("be.visible").then((val)=>{
            let dato=val.text()
            cy.log("el valor del log es: "+dato)
            let mensaje=men
            cy.log(dato)
            expect(dato).to.equal(mensaje)
            if(dato==mensaje){
                cy.log("########################")
                cy.log("El "+nombre_campo +" no es válido")
                cy.log("########################")
            }
         })    
    
    })

    Cypress.Commands.add("Validar_campo2", (selector,men,nombre_campo,t) => { //men=mensaje //VALIDAR CAMPO
        cy.get(selector).should("be.visible").should("contain",men).then((val)=>{
        cy.log("########################")
        cy.log("El "+nombre_campo +" no es válido")
        cy.log("########################")
        })
    })



     
    
    

    





        
        
            
    
     
        
           




        







