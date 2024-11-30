/// <reference types='cypress'/>

describe.apply('Reqres API Testing', ()=>{
    it('Get API Testing', ()=>{
        cy.request('https://reqres.in/api/users/23')
        .then((Response)=>{
            expect(Response.status).to.eq(404)
            expect(Response.body).to.not.be.null
        })
    })
})