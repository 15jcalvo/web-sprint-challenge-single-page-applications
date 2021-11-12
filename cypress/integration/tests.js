describe('Pizza order form', () => {
    it('function check', () => {
        expect(true).to.equal(true)
    })
    
    //fresh state
    beforeEach(() => {
        cy.visit('http://localhost:3000/pizza')
    })
    
    //helpers
    const nameInput = () => cy.get('input[name=name]');
    const specialInput = () => cy.get('input[name=special]');

    it('Name input test', () => {
        nameInput().type('name input test');
        nameInput().should('be.value', 'name input test')
    })
    it('Special instructions input test', () => {
        specialInput().type('special instructions input test');
        specialInput().should('be.value', 'special instructions input test')
    })
})