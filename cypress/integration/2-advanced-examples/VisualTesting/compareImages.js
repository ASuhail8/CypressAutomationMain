describe("compare 2  after downloading", ()=>{

    it.skip("Download and compare images test", ()=>{
        cy.downloadFile(
            "https://i.gadgets360cdn.com/large/dualshock_4_akhil_arora_wm_1596518556872.jpg?downsize=950:*",
            "mydownloads",
            "example.jpg"
        ).then(()=>{
            cy.task("compareImages",{fileName1:"mydownloads/example.jpg", fileName2 : "example.jpg"})
            .then(isMatching=>{
                expect(isMatching).to.be.true

            })

        })


    })

    it("Compare 2 images",()=>{

       cy.task("compareImages",{fileName1:"ExpectedImage.png",fileName2:"3.png"})
       .then(isMatching=>{
           expect(isMatching).to.be.true
       })


    })


})