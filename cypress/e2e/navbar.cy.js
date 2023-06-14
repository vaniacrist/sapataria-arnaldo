describe('Teste da Navbar', function () {

    beforeEach(function() {
        cy.visit('/index.html');
    });
    it('Deve ter a classe .btn-menu ', function () {
        cy.get('div').should('have.class', 'btn-menu');
        
    });

    

    
        it('Deve ter um atributo href válido para cada página',()  => {
       
            cy.get('[data-test=home]').should('have.attr', 'href', './index.html');
    });

});





