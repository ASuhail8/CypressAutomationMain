/// <reference types="Cypress" />


describe("CHeckboxes", function(){

it("Check box Tc", function(){

cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

// TO select single checkboxes
cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1')
cy.get('#checkBoxOption1').uncheck().should('not.be.checked')

//To select multiple checkboxes

cy.get("input[type='checkbox']").check(['option2','option3']).should('be.checked')

// To deselect multiple checkboxes

cy.get("input[type='checkbox']").uncheck(['option2','option3']).should('not.be.checked')


// To handle static dropdowns


cy.get('select').select('option3').should('have.value','option3')


// to handle dynamic dropdown.

cy.get('#autocomplete').type('ind')

cy.wait(2000)

cy.get('.ui-menu-item div').each(($el,index,$list) => {

if($el.text()=="India"){

    $el.click()
  
}
})
//verify dropdown selected
cy.get('#autocomplete').should('have.value','India')


// visible invisible element


cy.get('#displayed-text').should('be.visible')
cy.get('#hide-textbox').click()
cy.get('#displayed-text').should('not.be.visible')

//Radio buttons

cy.get("input[value='radio1']").check().should('be.checked')

})
})