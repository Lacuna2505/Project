///<reference types="cypress"/>

const { delay } = require("cypress/types/bluebird");

it('quering elements', () => {
    cy.visit('http://localhost:8080/commands/actions');

    cy.get('#email1', {timeout: 3000}) //кликнет на элемент когда пройдет 3 сек
    .type('Hello')   //вводит текст
    .should('have.value', 'Hello')

    cy.get('#email1')
    .clear()
    .type('S{leftArrow}E{leftArrow}T{rightArrow}{rightArrow}{rightArrow}T', {delay: 300}) // можно буквы вводить как попало и сделать задержку
    .type('{selectAll}{backspace}'); //выбрать все и удалить

    cy.get('textarea [disabled="disabled"]')
    .type('hello', {force: true})  //принудить вписать элемент туда куда нельзя

    cy.get('#password1')
    .focus()    //типа сделали фокус и проверили что рамка стала оранжевой 
    .prev()
    .should('have.attr', 'style')
    .and('eq', 'color: orange;');

    cy.get('#couponCode1')
    .type('text')
    .closest('form')
    .submit();    //можно засабмиттидь форму, кнопку нельзя

    cy.get('.action-form')
    .find('#couponCode1')
    .type('text')
    .closest('form') //ближайшая форма вверх по дом структуре
    .submit()
    .siblings()
    .should('contain', 'Your form has been submitted!')

    cy.get('#action-canvas').click()  //кликает в центр
    cy.get('#action-canvas').click(125, 125)  //кликает по координатам


    cy.get('.label.label-primary').click({multiple: true}); //много нажатий

    cy.get('.btn.btn-lg.btn-primary').click({force: true}); //заставить нажать если что-то мешает

    cy.get('.action-checkboxes [value="checkbox1"]')
    .should('not.be.checked')
    .check()    //зачекать чекбоксы и радиобаттоны
    .should('be.checked')

    cy.get('.action-checkboxes [value="checkbox2"]')
    .should('not.be.checked')
    .should('be.disabled')
    .check({force: true})
    .should('be.checked')
    .should('be.disabled')










})