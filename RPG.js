var Game = function() {
  this.personnage = function(classe, nom, vie, inventaire, element) {
    this.classe = classe;
    this.nom = nom;
    this.vie = vie;
    this.inventaire = inventaire;
    this.element = element;
  };

  this.stats = function(int, dex, force, def, lvl) {
    this.int = int;
    this.dex = dex;
    this.for = force;
    this.def = def;
    this.lvl = lvl;
  };

  this.arene = function(places, combattants, type) {
    this.places = places;
    this.combattants = combattants;
    this.type = type;
  }
};
