/// <reference types="cypress"/>

beforeEach(() => {
    cy.viewport(1280, 768);
    cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com');
    cy.get('[alt="Material Dark Theme"]').click();
    cy.get('[title="Modal & Overlays"]').click();
    cy.get('[title="Toastr"]').click();

    cy.get('div:nth-child(1) > div.form-group > nb-select > button').click()//перед каждым тестом
})

it("top-left", () => {
    // const params = [
    // {arg: ['The best toast ', 'Chears'], expected: ['The best toast ', 'Chears']},
    // {arg: ['Lina', 'hello@gmail.com'], expected: ['Lina', 'hello@gmail.com']}

    
    cy.get('[value="top-left"]').click();
    cy.get('div.form-group [name="title"]').type(arg[0]);
    cy.get('div.form-group [name="content"]').type(arg[1]);
    cy.get('div:nth-child(2) > div.form-group > nb-select > button')
   
// const params = [
//     {arg: ['Vlada ', 'lala@gmail.com'], expected: ['Vlada ', 'lala@gmail.com']},
//     {arg: ['Lina', 'hello@gmail.com'], expected: ['Lina', 'hello@gmail.com']}
// ]
// params.forEach(({arg, expected}) => {
//     cy.get('[class="col-md-12"] [placeholder="Jane Doe"]').clear().type(arg[0]);
//     cy.get('[class="col-md-12"] [placeholder="Jane Doe"]').should('contain.value', expected[0]);
//     cy.get('[class="col-md-12"] [placeholder="Email"]').clear().type(arg[1]);
//     cy.get('[class="col-md-12"] [placeholder="Email"]').should('contain.value', expected[1]);
//     cy.get('nb-card.inline-form-card [type="submit"]').click();
// })
})