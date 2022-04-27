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
                expect(v1).toBeTruthy();
                expect(typeof v1).toBe("string"); // .toBe method tests for exact (===) equality
                expect(v1).not.toMatch("Derby");
            }
            if(k1 == "HomeTeamScore" || k1 == "AwayTeamScore")
            {
                //expect(typeof v1).toBe("number");
                // expect(v1).toBeGreaterThanOrEqual(-1);
                // expect(v1).toBeLessThan(39);
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
