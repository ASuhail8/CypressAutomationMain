/// <reference types="Cypress" />
/// <reference types="Cypress-iframe" />

import 'cypress-iframe'

describe("Frames", function(){
it("Frames test case", function(){

    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

    //To switch to frame
    //download the plugins req and import the iframe package

    cy.frameLoaded('#courses-iframe')
    cy.iframe().find('a[href*="mentorship"]').eq(0).click()
    cy.iframe().find('span.blinkingText').then(function(el){

        const text = el.text()
        expect(text).include('Get Any 4 Courses for FREE')

    })





})
})