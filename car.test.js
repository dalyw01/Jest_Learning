const x = require("./car");

const car1 = new x.Car('Volkswagen' , 'Golf'  , 1993 , true);
const car2 = new x.Car('Honda'      , 'Civic' , 1993 , true);
const car3 = new x.Car('Toyota'     , 'Prius' , 1999 , false);

test("Testing of car", () => {
    expect(car1.make).toBe("Volkswagen");
    expect(car2.make).toBe("Honda");
    expect(car3.make).toBe("Toyota");
    expect(typeof car1.make).toBe("string")
    expect(typeof car2.make).toBe("string")
    expect(typeof car2.make).toBe("string")
});

test("Testing of car name is a string", () => {
    expect(typeof car1.make).toBe("string")
    expect(typeof car2.make).toBe("string")
    expect(typeof car3.make).toBe("string")
});

test("Car working state is declared", () => {
    expect(typeof car1.working).toBe("boolean")
    expect(typeof car2.working).toBe("boolean")
    expect(typeof car3.working).toBe("boolean")
});

test("Testing of car year is within the correct range", () => {
    expect(typeof car1.year).toBe("number")
    expect(typeof car2.year).toBe("number")
    expect(typeof car3.year).toBe("number")
    expect(car1.year).toBeGreaterThanOrEqual(1900);
    expect(car1.year).toBeLessThan(2023);
    expect(car2.year).toBeGreaterThanOrEqual(1900);
    expect(car2.year).toBeLessThan(2023);
    expect(car3.year).toBeGreaterThanOrEqual(1900);
    expect(car3.year).toBeLessThan(2023);
});
