/// <reference types="cypress"/>

describe('Reqres API Testing', ()=>{
    it('POST API Testing', ()=>{
        cy.request({
            method: 'POST',
            url: 'https://reqres.in/api/login',
            body: {
                "email": "peter@klaven"
            }
        })
        .then((response)=>{
            expect(response.status).to.eq(400)
            expect(response.body).to.not.be.null
        })
    })
})