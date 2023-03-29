var expect = require('chai').expect;
var Wizard = require('../exercises/wizard');

describe('Wizard', function() {

  it('should be a function', function() {
    expect(Wizard).to.be.a('function');
  });

  it('should have a name', function() {
    var wizard = new Wizard({name: 'Jhun'});
    expect(wizard.name).to.eq('Jhun');
  });

  it('should have a beard by default', function() {
    var wizard = new Wizard({name: 'Jhun'});
    expect(wizard.bearded).to.eq(true);
  });

  it('should not always be bearded', function() {
    var wizard = new Wizard({name: 'Jhun', bearded: false});
    expect(wizard.bearded).to.eq(false);
  });

  it('should have root powers', function() {
    var wizard = new Wizard({name: 'Jhun', bearded: false});
    expect(wizard.incantation('chown lumos')).to.eq('CHOWN LUMOS');
  });

  it('should has lots of root powers', function() {
    var wizard = new Wizard({name: 'Jhun', bearded: false});
    expect(wizard.incantation('Expecto Patronum')).to.eq('EXPECTO PATRONUM');
  });

  it('should start rested', function() {
    let wizard = new Wizard({name: 'Jhun'})
    expect(wizard.rested).to.eq(true);
  });

  it('should be able to cast spells', function() {
    let wizard = new Wizard({name: 'Jhun'})
    expect(wizard.cast()).to.eq('MAGIC BULLET');
  });

  it('should only be able to cast 3 spells', function() {
    // create wizard
    let wizard = new Wizard({name: 'Jhun'})
    // assert isRested is true
    expect(wizard.rested).to.eq(true)
    // cast()
    wizard.cast()
    // assert isRested is true
    expect(wizard.rested).to.eq(true)
    // cast()
    wizard.cast()
    // assert isRested is true
    expect(wizard.rested).to.eq(true)
    // cast()
    wizard.cast()
    // assert isRested is true
    // assert isRested is false
    expect(wizard.rested).to.eq(false)
    // assert cast() returns 'I SHALL NOT CAST!'
    expect(wizard.cast()).to.eq('I SHALL NOT CAST!')
  });
});
