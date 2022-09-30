it("name", () => {
    cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com');
    cy.get('[alt="Material Dark Theme"]').click(); //Select the theme
    //Open the form
    cy.get('span.menu-title.ng-tns-c141-9').click(); //Forms
    cy.get('span.menu-title.ng-tns-c141-11').click(); //Form layouts

    cy.contains('nb-card', 'Using the Grid').find('[for="inputEmail1"]').should('contain', 'Email');
    cy.contains('nb-card', 'Using the Grid').find('[for="inputPassword2"]').should('contain', 'Password');


    //let usingTheGridForm = cy.contains('nb-card', 'Using the Grid');

    //usingTheGridForm.find('[for="inputEmail1"]').should('contain', 'Email');
    //usingTheGridForm.find('[for="inputPassword2"]').should('contain', 'Password'); не работает в сайпресе но может будет в рабочем


    cy.contains('nb-card', 'Using the Grid').then((form) => {
        form.find('[for="inputEmail1"]').should('contain', 'Email');
        form.find('[for="inputPassword2"]').should('contain', 'Password');
    })

})