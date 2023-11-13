describe('Tests de l\'application Poker Range', () => {
  it('Ajout de joueurs jusqu\'au min, puis jusqu’au max', () => {
    cy.visit('http://localhost:8080/');
    cy.get('#player-6').should('exist');
    cy.get('#remove-player-btn').click();
    cy.get('#player-6').should('not.exist');
    cy.get('#player-5').should('exist');
    cy.get('#remove-player-btn').click();
    cy.get('#player-5').should('not.exist');
    cy.get('#player-4').should('exist');
    cy.get('#remove-player-btn').click();
    cy.get('#player-4').should('not.exist');
    cy.get('#player-3').should('exist');
    cy.get('#remove-player-btn').should('be.disabled')
    cy.get('#add-player-btn').click();
    cy.get('#player-4').should('exist');
    cy.get('#add-player-btn').click();
    cy.get('#player-5').should('exist');
    cy.get('#add-player-btn').click();
    cy.get('#player-6').should('exist');
    cy.get('#add-player-btn').should('be.disabled')
  })
})