/// <reference types="cypress"/>


// before(() => { //делает это перед тестом например если первый тест это авторизация

// })

beforeEach(() => {
    cy.visit('https://google.com/');  //перед каждым тестом
})

// after(() => {
//     cy.log('This is log from after method') // после последнего теста
// })

// afterEach(() => {
//     cy.log('This is log from afterEach method')
// })

describe('Test suit for google', () => {
    describe('Positive scenarios',{retries:2}, () => { // можно повторы засунуть в сьют и сработает там где зафейлился
        it.skip("Пошук в гугл 1", () => { //тест не запустится изза скипа
            cy.get('input.gLFyf.gsfi').clear().type('Cypress');
        })
        
        it("Пошук в гугл 2", () => {
            cy.get('input.gLFyf.gsfi').clear().type('Cypress');
        })
        
        it("Пошук в гугл 3",{retries:2}, () => { //две попытки если чет не срабатывает с первого раза
            cy.get('input.gLFyf.gsfi').clear().type('Cypress');
        })
        
        it("Пошук в гугл 4", () => {
            cy.get('input.gLFyf.gsfi').clear().type('Cypress');
        })
    })
    
    describe('Negative scenarios', () => {
        it("Пошук в гугл 1", () => {
            cy.get('input.gLFyf.gsfi').clear().type('Cypress');
        })
        
        it("Пошук в гугл 2", () => {
            cy.get('input.gLFyf.gsfi').clear().type('Cypress');
        })
        
        it.only("Пошук в гугл 3", () => { ///только этот тест запустится изза онли
            cy.get('input.gLFyf.gsfi').clear().type('Cypress');
        })
        
        it.skip("Пошук в гугл 4", () => {
            cy.get('input.gLFyf.gsfi').clear().type('Cypress');
        })
    })
})