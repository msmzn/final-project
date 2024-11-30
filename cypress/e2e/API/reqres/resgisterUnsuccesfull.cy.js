/// <reference types="cypress"/>

describe('Reqres API Testing', ()=>{
    it('POST API Testing', ()=>{
        cy.request({
            method: 'POST',
            url: 'https://reqres.in/api/register',
            body: {
                "email": "sydney@fife"
            }
        })
        .then((response)=>{
            expect(response.status).to.eq(400)
            expect(response.body).to.not.be.null
        })
    })
})