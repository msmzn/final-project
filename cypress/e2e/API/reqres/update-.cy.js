/// <reference types="cypress"/>

describe('Reqres API Testing', ()=>{
    it('PATCH API Testing', ()=>{
        cy.request({
            method: 'PATCH',
            url: 'https://reqres.in/api/users/2',
            body: {
                "name": "morpheus",
                "job": "leader"
            }
        })
        .then((response)=>{
            expect(response.status).to.eq(200)
            expect(response.body).to.have.property('name', 'morpheus');
            expect(response.body).to.have.property('job', 'leader');
        })
    })
})