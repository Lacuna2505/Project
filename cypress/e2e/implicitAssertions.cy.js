///<reference types="cypress"/>

/// проверки 

  it('passes', () => {
    cy.visit('http://localhost:8080/commands/assertions')

    cy.get('.table.table-bordered.assertion-table tr').eq(3) ///4 элемент(строчка) отсчет от 0
    .should('have.class', 'success')

    cy.get('.table.table-bordered.assertion-table tr').eq(3) ///имеет атрибут с названием класс
    .should('have.attr', 'class')

    cy.get('.table.table-bordered.assertion-table tr td').eq(3)
    .should('have.text', 'Column content')   ///проверка что текст есть

    cy.get('.table.table-bordered.assertion-table tr td').eq(3)
    .should('have.html', 'Column content')    ///проверка что текст есть

    cy.get('.table.table-bordered.assertion-table tr td').eq(3)
    .should('contain', 'Column content')    ///проверка что текст есть или его часть

    cy.get('.table.table-bordered.assertion-table tr td').eq(3)
    .should('include.text', 'Column content')    ///проверка что текст есть или его часть
    
    cy.get('.table.table-bordered.assertion-table tr td').eq(3)
    .should('not.contain', 'gfmd') /// что нет такого текста и чего-то еще(символа, окна и тд)

    cy.get('.table.table-bordered.assertion-table tr th').eq(5)
    .should('contain', '3') /// что там есть текст 3

    cy.get('.table.table-bordered.assertion-table tr th').eq(5)  
    .invoke('text')      //докопаться до элемента
    .then(parseFloat)  //переделали стрингу в интеджер
    .should('be.greaterThan', 2);  //проверили,что там текст больше 2

    cy.get('.table.table-bordered.assertion-table tr th').eq(5)  
    .invoke('text')      //докопаться до элемента
    .then(parseFloat)  //переделали стрингу в интеджер
    .should('eq', 3);  //проверили,что там текст равен 3

    cy.visit('http://localhost:8080/commands/querying');
    cy.get('#inputName').type('Hello')
    .should('have.value', 'Hello');   //проверка,что написалось слово привет

    cy.visit('http://localhost:8080/commands/assertions')
    cy.get('.table.table-bordered.assertion-table tr td').eq(5)
    .should('have.css', 'background-color') // проверка что есть такой css парметр бекграунд 
    .and('eq', 'rgb(223, 240, 216)');       //  и есть цвет 

    cy.get('.table.table-bordered.assertion-table tr td').eq(5)
    .should('be.visible'); // что элемент видимый

    cy.get('a[data-toggle="dropdown"]').click();
    cy.get('.dropdown-menu li').should('have.length', 17) // проверка,что в списке 17 полей
  })

  
