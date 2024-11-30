/// <reference types="cypress"/>

describe('Reqres API Testing', ()=>{
    it('POST API Testing', ()=>{
        cy.request({
            method: 'POST',
            url: 'https://reqres.in/api/login',
            body: {
                "email": "eve.holt@reqres.in",
                "password": "cityslicka"
            }
        })
        .then((response)=>{
            expect(response.status).to.eq(200)
            expect(response.body).to.not.be.null
        })
    })
})