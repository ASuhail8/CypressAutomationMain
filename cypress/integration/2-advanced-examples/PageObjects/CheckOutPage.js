class CheckoutPage
{

getCountry(){
    return cy.get('#country')
}

getCheckbox(){
    return cy.get('#checkbox2')
}

getPurchaseButton(){
    return cy.get("input[type='submit']")
}

getSuccessMessage(){
    return cy.get('.alert')
}

}
export default CheckoutPage;