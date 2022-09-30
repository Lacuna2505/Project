/// <reference types="cypress"/>

it("Изучение локаторов css", () => {
    cy.visit('https://sanitarskyi-cypress-g2.herokuapp.com/commands/querying');
    //локатор css по названию тега
    cy.get('nav');

    //локатор css по названию атрибута
    cy.get('[placeholder]');

    //локатор по названию атрибута со значением
    cy.get('[placeholder="Email"]');

    //поиска элемента по айди
    cy.get('#query-btn');
    cy.get('[id="query-btn"]');

    //поиск элемента со значением класса 
    cy.get('.btn-default');
    cy.get('[class="btn btn-default"]');
    cy.get('.btn.btn-default');

    cy.get('.nav.navbar-nav.pull-right');

    //поиск элемента по названию тега и названию атрибута
    cy.get('input[placeholder]');

    //поиск элемента по названию тега и названию атрибута cо значением 
    cy.get('input[placeholder="Email"]');
})

    it("Изучение локаторов css", () => {
        cy.visit('https://rozetka.com.ua/');

    //поиск тега с 2 атрибутами
    cy.get('div[class="tile_inner"] [data-goods-id="347871891]');

    //поиск по дочернему элементу
    cy.get('rz-sidebar-fat-menu > div > ul > li');
    cy.get('rz-sidebar-fat-menu li');

})

it("Изучение локаторов css", () => {
    cy.visit('https://automationteststore.com/');
    cy.get('#featured div.col-md-3.col-sm-6.col-xs-12');

    //поиск по первой части значения атрибута
    cy.get('a[title^="BeneFit"]');

    //поиск  по всему значению атрибута
    cy.get('a[title*="Girl"]');

    //поиск  по последней части значения атрибута
    cy.get('a > img[src$=".jpg"]');

    //поиск первого элемента среди похожих
    cy.get('#featured div.col-md-3.col-sm-6.col-xs-12:first-of-type');

    //поиск последнего элемента среди похожих
    cy.get('#featured div.col-md-3.col-sm-6.col-xs-12:last-of-type');

    //поиск 4 элемента среди похожих
    cy.get('#featured div.col-md-3.col-sm-6.col-xs-12:nth-child(4'));

    //поиск элемента по тексту, что находится в середине тега
    cy.get('a:contains("Skinsheen")');

})
    
    
    
