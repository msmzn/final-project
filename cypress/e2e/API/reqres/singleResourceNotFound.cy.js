/// <reference types="cypress"/>

describe('Reqres API Testing', ()=>{
    it('Get API Testing', ()=>{
        cy.request('https://reqres.in/api/unknow/23')
        .then((response)=>{
            expect(response.status).to.eq(404)
            expect(response.body).to.not.be.null
        })
    })
})