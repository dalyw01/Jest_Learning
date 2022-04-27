const x = require("./soccer");

test("Test : Spit out all the home teams and verify they are strings", () => 
{
    for(let [k, v] of Object.entries(x))
    {
        for( let [k1, v1] of Object.entries(v))
        {
            if(k1 == "HomeTeam")
            {
                console.log(k1 + "<->" + v1);
                expect(v1).toBeTruthy();
                expect(typeof v1).toBe("string");
                expect(v1).not.toMatch("Derby");
            }
            if(k1 == "RoundNumber")
            {
                console.log(k1 + "<->" + v1);
                expect(v1).toBeGreaterThanOrEqual(1);
                expect(v1).toBeLessThan(39);
            }
        }
    }
})
