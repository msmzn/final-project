/// <reference types="cypress"/>

describe('Reqres API Testing', ()=>{
    it('DELETE API Testing', ()=>{
        cy.request({
            method: 'DELETE',
            url: 'https://reqres.in/api/users/2',
        })
        .then((response)=>{
            expect(response.status).to.eq(204)
            expect(response.body).to.not.be.null
        })
    })
})