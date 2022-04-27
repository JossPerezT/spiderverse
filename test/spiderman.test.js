const Spiderman = require("./../app/spiderman")

describe ("Unit Tests for Spiderman class", () =>{
    test ('Case 1. Create an spiderman object', () =>{
        // Aqui vamos a escribir el código que queremos usar tal cual 
        // Queremos poder instanciar un objeto Spiderman co esta información 
        const andrewGarfield = new Spiderman ("Spiderman Sony", 31, "Andrew Garfield", 2, "Sony")
        
        // Validamos que el código funcione de la forma esperada
        expect(andrewGarfield.name).toBe("Spiderman Sony")
        expect(andrewGarfield.age).toBe(31)
        expect(andrewGarfield.actor).toBe("Andrew Garfiel")
        expect(andrewGarfield.movies).toBe(2)
        expect(andrewGarfield.studio).toBe("Sony")
    })
})
