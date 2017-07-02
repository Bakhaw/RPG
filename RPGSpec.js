describe("game", function() {

   beforeEach(function() {
     game = new Game();
   });
   it("Créer son personnage", function() {
     game.personnage("Elementaliste", "Semuno", 5000, true, "Glace");
     expect(game.classe).toEqual("Elementaliste");
     expect(game.nom).toEqual("Semuno");
     expect(game.vie).toEqual(5000);
     expect(game.inventaire).toEqual(true);
     expect(game.element).toEqual("Glace");

   });

     it("Créer ses stats de base", function() {
       game.stats(20, 5, 5, 5, 1);
       expect(game.int).toEqual(20);
       expect(game.dex).toEqual(5);
       expect(game.for).toEqual(5);
       expect(game.def).toEqual(5);
       expect(game.lvl).toEqual(1);
     });

     it("Créer une arène", function() {
       game.arene("12 places", "4 combattants", "arène de Glace");
       expect(game.places).toEqual("12 places");
       expect(game.combattants).toEqual("4 combattants");
       expect(game.type).toEqual("arène de Glace");
     });

 });
