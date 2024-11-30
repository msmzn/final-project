/// <reference types="cypress"/>

describe('Reqres API Testing', ()=>{
    it('PUT API Testing', ()=>{
        cy.request({
            method: 'PUT',
            url: 'https://reqres.in/api/users/2',
            body: {
                "name": "morpheus",
                "job": "zion resident"
            }
        })
        .then((response)=>{
            expect(response.status).to.eq(200)
            expect(response.body).to.have.property('name', 'morpheus');
            expect(response.body).to.have.property('job', 'zion resident');
        })
    })
})