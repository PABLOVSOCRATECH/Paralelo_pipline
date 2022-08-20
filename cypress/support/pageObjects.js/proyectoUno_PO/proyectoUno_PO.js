class ProyectoUno_Po{

    visitHome(){ 
        let tiempo=1000
        Cypress.config("defaultCommandTimeout",15000)
        before(() =>{
            cy.visit("https://demo.anhtester.com/input-form-demo.html"),
            cy.title().should('eq','Selenium Easy - Input Form Demo with Validations')
            cy.wait(tiempo)
        })
    }

    SeccionUno(name,lastname,email,t){
        let tiempo=t
        cy.get(":nth-child(2) > .inputGroupContainer > .input-group > .form-control").clear().should('be.visible').type(name)
        cy.screenshot("Campo nombre")
        //cy.wait(tiempo)
        cy.get(":nth-child(3) > .inputGroupContainer > .input-group > .form-control").clear().should('be.visible').type(lastname)
        cy.wait(tiempo)
        cy.get(":nth-child(4) > .inputGroupContainer > .input-group > .form-control").clear().should('be.visible').type(email)
        cy.wait(tiempo)

    }

    SeccionDos(phone,dir1,city,state,t){
        let tiempo=t
        cy.get(":nth-child(5) > .inputGroupContainer > .input-group > .form-control").clear().should('be.visible').type(phone)
        cy.wait(tiempo)
        cy.get(":nth-child(6) > .inputGroupContainer > .input-group > .form-control").clear().should('be.visible').type(dir1)
        cy.wait(tiempo)
        cy.get(":nth-child(7) > .inputGroupContainer > .input-group > .form-control").clear().should('be.visible').type(city)
        cy.wait(tiempo)
        cy.get(".selectContainer > .input-group > .form-control").should('be.visible').select(state)


    }

    SeccionTres(zipcode,web,projectdescript,t){
        let tiempo=t
        cy.get(":nth-child(9) > .inputGroupContainer > .input-group > .form-control").clear().should('be.visible').type(zipcode)
        cy.wait(tiempo)
        cy.get(":nth-child(10) > .inputGroupContainer > .input-group > .form-control").clear().should('be.visible').type(web)
        cy.wait(tiempo)
        cy.get(":nth-child(1) > label > input").check().should('be.checked')// hosting en la web 
        cy.wait(tiempo)
        cy.get(":nth-child(12) > .inputGroupContainer > .input-group > .form-control").clear().should('be.visible').type(projectdescript)
        cy.wait(tiempo)
        cy.xpath("//button[@type='submit'][contains(.,'Send')]").should('be.visible').click({force: true})



        
    }
} //final
export default ProyectoUno_Po // LINEA PARA EXPORTAR CÓDIGO