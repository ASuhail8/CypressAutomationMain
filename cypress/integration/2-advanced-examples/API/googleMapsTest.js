
describe("Google Maps API Test", ()=> {
var place_id = "";
var url = Cypress.env('rahulUrlProd');

it("Add Place API", function(){
cy.log(url)
cy.fixture('google').then((myFixture)=>{
cy.request({

    method : 'POST',
    url : url+'/maps/api/place/add/json/qaclick123',
    body: myFixture.body

}).then((res)=>{
    cy.log(JSON.stringify(res.body))
    expect(res.status).to.eq(200)
    expect(res.isOkStatusCode).to.be.true
    place_id = res.body.place_id
    cy.log(place_id)
})
})
    

})

it("Get Place API", function(){
    cy.request({
        'method' : 'GET',
        'url' : url+'/maps/api/place/get/json',
        'qs' : {
            'key' : 'qaclick123',
            'place_id' : place_id
        }

    }).then((res) =>{
        expect(res.status).to.eq(200)
        expect(res.body).has.property('name', 'Suhail house')

    })
})


 it("Update Place API", function(){
    cy.request({

        'method' : 'PUT',
        'url' : url+'/maps/api/place/update/json',
        'qs': {
            'key' : 'qaclick123'
        },
        'body' : {
                "place_id": place_id, 
                "address":"Suhail Summer walk, India",
                "key":"qaclick123" 
        }
    }).then((res)=>{

        expect(res.status).to.eq(200)
        expect(res.body).has.property('msg','Address successfully updated')
        cy.log(res)
    })

})

it("Validate Get Place API after updating the address", function(){
    cy.request({
        'method' : 'GET',
        'url' : url+'/maps/api/place/get/json',
        'qs' : {
            'key' : 'qaclick123',
            'place_id' : place_id
        }

    }).then((res) =>{
        expect(res.status).to.eq(200)
        expect(res.body).has.property('address', 'Suhail Summer walk, India')

    })


})

})