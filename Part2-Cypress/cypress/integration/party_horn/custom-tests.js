describe('Party Horn Tests', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/Part2-Cypress');
  });

  it('First Test', () => {
    expect(true).to.equal(true);
  });

  it('Slider changes when volume input changes', () => {
    cy.get('#volume-number').clear().type('75');
    cy.get('#volume-slider').then(($el) => {
      expect($el).to.have.value(75);
    });
  });

  it('Volume input changes when slider changes', () => {
    cy.get('#volume-slider').invoke('val', 33).trigger('input');
    cy.get('#volume-number').then(($el) => {
      expect($el).to.have.value(33);
    });
  });

  it('Audio element changes when slider changes', () => {
    cy.get('#volume-slider').invoke('val', 33).trigger('input');
    cy.get('#horn-sound').then(($el) => {
      expect($el).to.have.prop('volume', 0.33);
    });
  });

  it('Image/sound source changes on party horn', () => {
    cy.get('#radio-party-horn').click();
    cy.get('#sound-image').then(($el) => {
      expect($el).to.have.attr('src', "./assets/media/images/party-horn.svg");
    });
    cy.get('#horn-sound').then(($el) => {
      expect($el).to.have.attr('src', "./assets/media/audio/party-horn.mp3");
    });
  });

  it('Volume changes when increasing volume', () => {
    cy.get('#volume-number').clear().type('25');
    cy.get('#volume-image').then(($el) => {
      expect($el).to.have.attr('src', "./assets/media/icons/volume-level-1.svg");
    });
    cy.get('#volume-number').clear().type('50');
    cy.get('#volume-image').then(($el) => {
      expect($el).to.have.attr('src', "./assets/media/icons/volume-level-2.svg");
    });
    cy.get('#volume-number').clear().type('75');
    cy.get('#volume-image').then(($el) => {
      expect($el).to.have.attr('src', "./assets/media/icons/volume-level-3.svg");
    });
  });

  it('Honk button disabled when textbox empty/non-number', () => {
    cy.get('#volume-number').clear();
    cy.get('#honk-btn').then(($el) => {
      expect($el).to.have.prop('disabled', true);
    });
    cy.get('#volume-number').clear().type('e');
    cy.get('#honk-btn').then(($el) => {
      expect($el).to.have.prop('disabled', true);
    });
  });

  it('Error shown when number outside range is given', () => {
    cy.get('#volume-number').clear().type('120').trigger('input');
    cy.get('#volume-number:invalid').should('have.length', 1);

    cy.get('#volume-number').clear().type('-20').trigger('input');
    cy.get('#volume-number:invalid').should('have.length', 1);
  });
});