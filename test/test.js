var Connection = require("../native").Connection;
var assert = require('assert');

describe('Connection', function () {
    describe('basics', function () {
        var conn = new Connection();
        it('should transact', function () {
            var input = "[]";
            assert.equal(conn.transact(input), 0x10000000 + 1);
        });
        it('should query', function () {
            var input = "[:find ?x ?ident :where [?x :db/ident ?ident]]";
            assert.equal(conn.query(input), 37);
        });
        it('should close', function () {
            assert.equal(conn.close(), "Not implemented");
        });
    });
    describe('with data', function () {
        var conn = new Connection();
        it('should transact (1)', function () {
            var input = `[
            {:db/ident :movie/title
            :db/valueType :db.type/string
            :db/cardinality :db.cardinality/one}

            {:db/ident :movie/year
            :db/valueType :db.type/long
            :db/cardinality :db.cardinality/one}

            {:db/ident :movie/director
            :db/valueType :db.type/ref
            :db/cardinality :db.cardinality/many}

            {:db/ident :movie/sequel
            :db/valueType :db.type/ref
            :db/cardinality :db.cardinality/one}

            {:db/ident :movie/cast
            :db/valueType :db.type/ref
            :db/cardinality :db.cardinality/many}

            {:db/ident :person/name
            :db/valueType :db.type/string
            :db/cardinality :db.cardinality/one}

            {:db/ident :person/born
            :db/valueType :db.type/string
            :db/cardinality :db.cardinality/one}

            {:db/ident :person/death
            :db/valueType :db.type/string
            :db/cardinality :db.cardinality/one}

            {:db/ident :fixture/trivia
            :db/valueType :db.type/string
            :db/cardinality :db.cardinality/many}
        ]`;
            assert.equal(conn.transact(input), 0x10000000 + 1);
        });
        it('should transact (2)', function () {
            var input = `[
                {:db/id -100
                :person/name "James Cameron"
                :person/born "1954-08-16"}

                {:db/id -101
                :person/name "Arnold Schwarzenegger"
                :person/born "1947-07-30"}

                {:db/id -102
                :person/name "Linda Hamilton"
                :person/born "1956-09-26"}

                {:db/id -103
                :person/name "Michael Biehn"
                :person/born "1956-07-31"}

                {:db/id -104
                :person/name "Ted Kotcheff"
                :person/born "1931-04-07"}

                {:db/id -105
                :person/name "Sylvester Stallone"
                :person/born "1946-07-06"}

                {:db/id -106
                :person/name "Richard Crenna"
                :person/born "1926-11-30"
                :person/death "2003-01-17"}

                {:db/id -107
                :person/name "Brian Dennehy"
                :person/born "1938-07-09"}

                {:db/id -108
                :person/name "John McTiernan"
                :person/born "1951-01-08"}

                {:db/id -109
                :person/name "Elpidia Carrillo"
                :person/born "1961-08-16"}

                {:db/id -110
                :person/name "Carl Weathers"
                :person/born "1948-01-14"}

                {:db/id -111
                :person/name "Richard Donner"
                :person/born "1930-04-24"}

                {:db/id -112
                :person/name "Mel Gibson"
                :person/born "1956-01-03"}

                {:db/id -113
                :person/name "Danny Glover"
                :person/born "1946-07-22"}

                {:db/id -114
                :person/name "Gary Busey"
                :person/born "1944-07-29"}

                {:db/id -115
                :person/name "Paul Verhoeven"
                :person/born "1938-07-18"}

                {:db/id -116
                :person/name "Peter Weller"
                :person/born "1947-06-24"}

                {:db/id -117
                :person/name "Nancy Allen"
                :person/born "1950-06-24"}

                {:db/id -118
                :person/name "Ronny Cox"
                :person/born "1938-07-23"}

                {:db/id -119
                :person/name "Mark L. Lester"
                :person/born "1946-11-26"}

                {:db/id -120
                :person/name "Rae Dawn Chong"
                :person/born "1961-02-28"}

                {:db/id -121
                :person/name "Alyssa Milano"
                :person/born "1972-12-19"}

                {:db/id -122
                :person/name "Bruce Willis"
                :person/born "1955-03-19"}

                {:db/id -123
                :person/name "Alan Rickman"
                :person/born "1946-02-21"}

                {:db/id -124
                :person/name "Alexander Godunov"
                :person/born "1949-11-28"
                :person/death "1995-05-18"}

                {:db/id -125
                :person/name "Robert Patrick"
                :person/born "1958-11-05"}

                {:db/id -126
                :person/name "Edward Furlong"
                :person/born "1977-08-02"}

                {:db/id -127
                :person/name "Jonathan Mostow"
                :person/born "1961-11-28"}

                {:db/id -128
                :person/name "Nick Stahl"
                :person/born "1979-12-05"}

                {:db/id -129
                :person/name "Claire Danes"
                :person/born "1979-04-12"}

                {:db/id -130
                :person/name "George P. Cosmatos"
                :person/born "1941-01-04"
                :person/death "2005-04-19"}

                {:db/id -131
                :person/name "Charles Napier"
                :person/born "1936-04-12"
                :person/death "2011-10-05"}

                {:db/id -132
                :person/name "Peter MacDonald"}

                {:db/id -133
                :person/name "Marc de Jonge"
                :person/born "1949-02-16"
                :person/death "1996-06-06"}

                {:db/id -134
                :person/name "Stephen Hopkins"}

                {:db/id -135
                :person/name "Ruben Blades"
                :person/born "1948-07-16"}

                {:db/id -136
                :person/name "Joe Pesci"
                :person/born "1943-02-09"}

                {:db/id -137
                :person/name "Ridley Scott"
                :person/born "1937-11-30"}

                {:db/id -138
                :person/name "Tom Skerritt"
                :person/born "1933-08-25"}

                {:db/id -139
                :person/name "Sigourney Weaver"
                :person/born "1949-10-08"}

                {:db/id -140
                :person/name "Veronica Cartwright"
                :person/born "1949-04-20"}

                {:db/id -141
                :person/name "Carrie Henn"}

                {:db/id -142
                :person/name "George Miller"
                :person/born "1945-03-03"}

                {:db/id -143
                :person/name "Steve Bisley"
                :person/born "1951-12-26"}

                {:db/id -144
                :person/name "Joanne Samuel"}

                {:db/id -145
                :person/name "Michael Preston"
                :person/born "1938-05-14"}

                {:db/id -146
                :person/name "Bruce Spence"
                :person/born "1945-09-17"}

                {:db/id -147
                :person/name "George Ogilvie"
                :person/born "1931-03-05"}

                {:db/id -148
                :person/name "Tina Turner"
                :person/born "1939-11-26"}

                {:db/id -149
                :person/name "Sophie Marceau"
                :person/born "1966-11-17"}

                {:db/id -200
                :movie/title "The Terminator"
                :movie/year 1984
                :movie/director -100
                :movie/cast [-101
                            -102
                            -103]
                :movie/sequel -207}
                {:db/id -201
                :movie/title "First Blood"
                :movie/year 1982
                :movie/director -104
                :movie/cast [-105
                            -106
                            -107]
                :movie/sequel -209}

                {:db/id -202
                :movie/title "Predator"
                :movie/year 1987
                :movie/director -108
                :movie/cast [-101
                            -109
                            -110]
                :movie/sequel -211}

                {:db/id -203
                :movie/title "Lethal Weapon"
                :movie/year 1987
                :movie/director -111
                :movie/cast [-112
                            -113
                            -114]
                :movie/sequel -212}

                {:db/id -204
                :movie/title "RoboCop"
                :movie/year 1987
                :movie/director -115
                :movie/cast [-116
                            -117
                            -118]}

                {:db/id -205
                :movie/title "Commando"
                :movie/year 1985
                :movie/director -119
                :movie/cast [-101
                            -120
                            -121]
                :fixture/trivia "In 1986, a sequel was written with an eye to having
                John McTiernan direct. Schwarzenegger wasn't interested in reprising
                the role. The script was then reworked with a new central character,
                eventually played by Bruce Willis, and became Die Hard"}

                {:db/id -206
                :movie/title "Die Hard"
                :movie/year 1988
                :movie/director -108
                :movie/cast [-122
                            -123
                            -124]}

                {:db/id -207
                :movie/title "Terminator 2: Judgment Day"
                :movie/year 1991
                :movie/director -100
                :movie/cast [-101
                            -102
                            -125
                            -126]
                :movie/sequel -208}

                {:db/id -208
                :movie/title "Terminator 3: Rise of the Machines"
                :movie/year 2003
                :movie/director -127
                :movie/cast [-101
                            -128
                            -129]}

                {:db/id -209
                :movie/title "Rambo: First Blood Part II"
                :movie/year 1985
                :movie/director -130
                :movie/cast [-105
                            -106
                            -131]
                :movie/sequel -210}

                {:db/id -210
                :movie/title "Rambo III"
                :movie/year 1988
                :movie/director -132
                :movie/cast [-105
                            -106
                            -133]}

                {:db/id -211
                :movie/title "Predator 2"
                :movie/year 1990
                :movie/director -134
                :movie/cast [-113
                            -114
                            -135]}

                {:db/id -212
                :movie/title "Lethal Weapon 2"
                :movie/year 1989
                :movie/director -111
                :movie/cast [-112
                            -113
                            -136]
                :movie/sequel -213}

                {:db/id -213
                :movie/title "Lethal Weapon 3"
                :movie/year 1992
                :movie/director -111
                :movie/cast [-112
                            -113
                            -136]}

                {:db/id -214
                :movie/title "Alien"
                :movie/year 1979
                :movie/director -137
                :movie/cast [-138
                            -139
                            -140]
                :movie/sequel -215}

                {:db/id -215
                :movie/title "Aliens"
                :movie/year 1986
                :movie/director -100
                :movie/cast [-139
                            -141
                            -103]}

                {:db/id -216
                :movie/title "Mad Max"
                :movie/year 1979
                :movie/director -142
                :movie/cast [-112
                            -143
                            -144]
                :movie/sequel -217}

                {:db/id -217
                :movie/title "Mad Max 2"
                :movie/year 1981
                :movie/director -142
                :movie/cast [-112
                            -145
                            -146]
                :movie/sequel -218}

                {:db/id -218
                :movie/title "Mad Max Beyond Thunderdome"
                :movie/year 1985
                :movie/director [-142
                                -147]
                :movie/cast [-112
                            -148]}

                {:db/id -219
                :movie/title "Braveheart"
                :movie/year 1995
                :movie/director [-112]
                :movie/cast [-112
                            -149]}
            ]`;

            conn.transact(input);
        });
        it('should query (1)', function () {
            var input = "[:find ?x ?ident :where [?x :db/ident ?ident]]";
            assert.equal(conn.query(input), 46);
        });
        it('should query (2)', function () {
            var input = `
                [:find ?e
                :where
                [?e :person/name "James Cameron"]]`;
            assert.equal(conn.query(input), '1'); // TODO: this isn't right
        });

        it('should close', function () {
            assert.equal(conn.close(), "Not implemented");
        });

    });
});

