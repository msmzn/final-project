/// <reference types="cypress"/>

describe('Reqres API Testing', ()=>{
    it('POSt API Testing', ()=>{
        cy.request({
            method: 'POST',
            url: 'https://reqres.in/api/register',
            body: {
                "email": "eve.holt@reqres.in",
                "password": "pistol"
            }
        })
        .then((response)=>{
            expect(response.status).to.eq(200)
            expect(response.body).to.not.be.null
        })
    })
})