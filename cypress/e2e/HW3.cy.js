/// <reference types="cypress"/>

beforeEach(() => {
    cy.viewport(1280, 768);
    cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com');
    cy.get('[alt="Material Dark Theme"]').click();
    cy.get('[title="Modal & Overlays"]').click();
    cy.get('[title="Toastr"]').click();

    // cy.get('div:nth-child(1) > div.form-group > nb-select > button').click()
    // cy.get('#nb-option-25').click();  //перед каждым тестом
})


    const params = [
    {arg: ['The best toast ', 'Chears', '4000'], expected: ['The best toast ', 'Chears', 4000]}]
    

    
    params.forEach(({arg, expected}) => {  
        it("top-left - success", () => 
        {cy.get('div.form-group [name="title"]').clear().type(arg[0]).should('contain.value', expected[0]);
         cy.get('div.form-group [name="content"]').clear().type(arg[1]).should('contain.value', expected[1]);
        cy.get('[name="timeout"]').clear().type(arg[2]).should('contain.value', expected[2]);
    
    cy.get('div:nth-child(1) > div.form-group > nb-select > button').click()
    cy.get('#nb-option-25').click();
    cy.get('div:nth-child(2) > div.form-group > nb-select > button').click();
    cy.get('#nb-option-33').click();
    cy.get('.appearance-filled.status-basic').click();
    cy.get('nb-toastr').then(tile => {
     
        expect(tile).to.have.css('background-color')
        .and('eq', 'rgb(96, 175, 32)');
        expect(tile).to.have.class('status-success');
        expect(tile).to.have.class('title subtitle')
        .and('have.value', 'The best toast ' )
        expect(tile).to.have.class('message')
        .and('have.value', 'Chears')
        expect(tile).to.have.html('[data-name="checkmark"]');
    })
        
    })

})
    
    
