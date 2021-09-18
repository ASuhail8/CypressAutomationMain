class HomePage
{

getName(){
    return cy.get("input[name='name']:nth-child(2)")
}

getEmail(){
    return cy.get("input[name='email']")
}

selectGender(){
    return cy.get("#exampleFormControlSelect1")
}

getShopButton(){
    return cy.get('li.nav-item:nth-child(2) a')
}

getTwoWayBinding(){
    return cy.get("input[name='name']:nth-child(1)")
}

getSubmitButton(){
    return cy.get('input.btn.btn-success')
}

getEntrprenaurRadio(){
    return cy.get("#inlineRadio3")
}

getCheckBox(){
    return cy.get("#exampleCheck1")
}

}

export default HomePage;