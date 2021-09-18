describe('Simple Get api test', () => {

it("get_api_request", ()=>{

    cy.request('https://rahulshettyacademy.com/maps/api/place/get/json?key=qaclick123&place_id=32ed6950636d774b394e85aea208037d')
    .then(res =>{

        expect(res.status).equal(200);
        expect(res.body.location).has.property('longitude','33.427362')
    })


})

it("mocking apis", function(){

    cy.request('https://reqres.in/api/users') // Get request
    cy.intercept('GET', 'https://reqres.in/api/users',{'name':'suhail'}).then((res)=>{

    console.log(JSON.stringify(res));

    })

})

it("Trying configuration ", ()=>{

    cy.request({
        method : 'GET',
        url : Cypress.env('rahulUrlProd')+'/maps/api/place/get/json',
        qs : {
          "key" : "qaclick123",
          "place_id" : "32ed6950636d774b394e85aea208037d"
        }
    }).then(response =>{
        expect(response.isOkStatusCode).to.be.true
    })




})
})