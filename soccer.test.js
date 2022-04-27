const x = require("./soccer");

// {
//     "MatchNumber": 2,
//     "RoundNumber": 1,
//     "DateUtc": "2021-08-14 11:30:00Z",
//     "Location": "Old Trafford",
//     "HomeTeam": "Man Utd",
//     "AwayTeam": "Leeds",
//     "Group": null,
//     "HomeTeamScore": 5,
//     "AwayTeamScore": 1
// },

test("Test : Interrogate properties of this JSON feed", () => 
{
    for(let [k, v] of Object.entries(x))
    {
        for( let [k1, v1] of Object.entries(v))
        {
            if(k1 == "HomeTeam" || k1 == "AwayTeam" || k1 == "Location")
            {
                expect(v1).not.toBeUndefined();
                expect(v1).toBeDefined();
                expect(v1).toBeTruthy(); // (not false, 0, ”, null, undefined, NaN)
                expect(typeof v1).toBe("string"); // .toBe method tests for exact (===) equality
                expect(v1).not.toMatch("Derby");
            }
            else if( (k1 == "HomeTeamScore" && v1 != null) || (k1 == "AwayTeamScore" && v1 != null))
            {
                expect(v1).toEqual(expect.any(Number))
                expect(typeof v1).toBe("number"); 
                expect(v1).toBeGreaterThan(-1)
                expect(v1).toBeGreaterThanOrEqual(0);
                expect(v1).toBeLessThan(39);
                expect(v1).toBeLessThanOrEqual(38)
                expect(0.2 + 0.1).toBeCloseTo(0.3, 5) // Still need to understand this better 
            }
            else if(k1 == "RoundNumber")
            {
                expect(v1).toBeTruthy();
                expect(typeof v1).toBe("number");
                expect(v1).toBeGreaterThanOrEqual(1);
                expect(v1).toBeLessThan(39);
            }
            else if(k1 == "MatchNumber")
            {
                expect(v1).toBeTruthy();
                expect(typeof v1).toBe("number");
                expect(v1).toBeGreaterThanOrEqual(0);
                expect(v1).toBeLessThan(381);
            }
            else if(k1 == "Group")
            {
                expect(v1).toBeFalsy();
                expect(v1).toBeNull();
            }
        }
    }
})
