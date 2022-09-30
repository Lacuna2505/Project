///<reference types="cypress"/>

/// проверки неочевидные 

it('passes', () => {
    cy.visit('http://localhost:8080/commands/assertions')

    cy.get('.table.table-bordered.assertion-table tr').eq(3).then(field => {

        expect(field).to.have.class('success');
        expect(field).to.have.attr('class');
        //expect(cell).to.have.text('Column content');
        //expect(cell).to.have.html('Column content');
        //expect(cell).to.have.contain('Column content');
        expect(field).to.not.contain('clasdfasfasfass');

        expect(field.attr('class')).to.eq('')
        expect(field.attr('class')).to.equal('')
        expect(field.attr('class')).to.equals('')

        expect(field.attr('class')).to.eql('')
        expect(field.attr('class')).to.eqls('')
        
    })

    const obj = {
        key:'Vlada',
        keyObj: {
            key2: '1'
        }
    }

    const obj2 = {
        key:'Vlada',
        keyObj: {
            key2: '1'
        }
    }

    // expect(obj).to.eq(obj2);
    // expect(obj).to.equal(obj2);
    // expect(obj).to.equals(obj2);

    expect(obj).to.eql(obj2);
    expect(obj).to.eqls(obj2);

    const obj3 = obj;

    expect(obj).to.eq(obj3);
    expect(obj).to.equal(obj3);
    expect(obj).to.equals(obj3);

    expect(obj).to.eql(obj3);
    expect(obj).to.eqls(obj3);


    cy.get('.table.table-bordered.assertion-table tr th').eq(5).then(cell => {  //cell это любое название того,что мы ищем 
        expect(cell).to.contain('3');
        expect(perseFloat(cell.text())).to.be.greaterThen(2);

    })

})