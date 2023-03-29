var expect = require('chai').expect;
var Pirate = require('../exercises/pirate');

describe('Pirate', function() {

  it('should be a function', function() {
    expect(Pirate).to.be.a("function")
  });

  it('should instantiate our good friend, Pirate', function() {
    var pirate = new Pirate();
    expect(pirate).to.be.an('object')
  });

  it('should have a name', function() {
    var pirate = new Pirate('Blackbeard');
    expect(pirate.name).to.eq('Blackbeard')
  });

  it('should be a scallywag by default', function() {
    var pirate = new Pirate('JeffBeard');
    expect(pirate.name).to.eq('JeffBeard');
    expect(pirate.job).to.eq('Scallywag');
  });

  it('should be a cook if passed into argument', function() {
    var pirate = new Pirate('HoraceBeard', 'cook');
    expect(pirate.job).to.eq('cook');
  });

  it('should not be cursed by default', function() {
    var pirate = new Pirate('SteveBeard', 'cook');
    expect(pirate.cursed).to.eq(false);
  });

  it('should become cursed after 3 heinous acts', function() {
    var pirate = new Pirate('JoshBeard', 'cook');

    expect(pirate.cursed).to.eq(false);
    pirate.commitHeinousAct();
    expect(pirate.cursed).to.eq(false);
    pirate.commitHeinousAct();

    pirate.commitHeinousAct();
  });

  it('should be able to rob ships', function() {
    var pirate = new Pirate('JeffBeard');
    expect(pirate.robShip()).to.eq('YAARRR!');
  });

  it('should start with a booty of 0', function() {
    var pirate = new Pirate('JeffBeard');
    expect(pirate.booty).to.eq(0);
  });

  it('should have a booty of 100 after robShip()', function() {
    var pirate = new Pirate('JeffBeard');
    expect(pirate.booty).to.eq(0);

    pirate.robShip();
    expect(pirate.booty).to.eq(100);
  });
});
