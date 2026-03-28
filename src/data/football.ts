import type { Player } from '../types';

export const footballPlayers: Player[] = [
    {
        id: 'f-1',
        name: 'Lionel Messi',
        birthDate: '1987-06-24',
        sport: 'football',
        category: 'active',
        clubs: [
            { name: 'FC Barcelone', years: '2004-2021' },
            { name: 'Paris Saint-Germain', years: '2021-2023' },
            { name: 'Inter Miami CF', years: '2023-2026' }
        ]
    },
    {
        id: 'f-2',
        name: 'Cristiano Ronaldo',
        birthDate: '1985-02-05',
        sport: 'football',
        category: 'active',
        clubs: [
            { name: 'Sporting CP', years: '2002-2003' },
            { name: 'Manchester United', years: '2003-2009' },
            { name: 'Real Madrid', years: '2009-2018' },
            { name: 'Juventus FC', years: '2018-2021' },
            { name: 'Manchester United', years: '2021-2022' },
            { name: 'Al-Nassr FC', years: '2023-2026' }
        ]
    },
    {
        id: 'f-3',
        name: 'Karim Benzema',
        birthDate: '1987-12-19',
        sport: 'football',
        category: 'active',
        clubs: [
            { name: 'Olympique Lyonnais', years: '2004-2009' },
            { name: 'Real Madrid', years: '2009-2023' },
            { name: 'Al-Ittihad Club', years: '2023-2026' }
        ]
    },
    {
        id: 'f-4',
        name: 'Luka Modrić',
        birthDate: '1985-09-09',
        sport: 'football',
        category: 'active',
        clubs: [
            { name: 'Dinamo Zagreb', years: '2003-2008' },
            { name: 'Zrinjski Mostar', years: '2003-2004' },
            { name: 'Inter Zaprešić', years: '2004-2005' },
            { name: 'Tottenham Hotspur', years: '2008-2012' },
            { name: 'Real Madrid', years: '2012-2026' }
        ]
    },
    {
        id: 'f-5',
        name: 'Kaká',
        birthDate: '1982-04-22',
        sport: 'football',
        category: 'historical',
        clubs: [
            { name: 'São Paulo FC', years: '2001-2003' },
            { name: 'AC Milan', years: '2003-2009' },
            { name: 'Real Madrid', years: '2009-2013' },
            { name: 'AC Milan', years: '2013-2014' },
            { name: 'Orlando City SC', years: '2014-2017' },
            { name: 'São Paulo FC', years: '2014-2014' }
        ]
    },
    {
        id: 'f-6',
        name: 'Fabio Cannavaro',
        birthDate: '1973-09-13',
        sport: 'football',
        category: 'historical',
        clubs: [
            { name: 'SSC Napoli', years: '1992-1995' },
            { name: 'Parma AC', years: '1995-2002' },
            { name: 'Inter Milan', years: '2002-2004' },
            { name: 'Juventus FC', years: '2004-2006' },
            { name: 'Real Madrid', years: '2006-2009' },
            { name: 'Juventus FC', years: '2009-2010' },
            { name: 'Al-Ahli Club', years: '2010-2011' }
        ]
    },
    {
        id: 'f-7',
        name: 'Ronaldinho',
        birthDate: '1980-03-21',
        sport: 'football',
        category: 'historical',
        clubs: [
            { name: 'Grêmio FBPA', years: '1998-2001' },
            { name: 'Paris Saint-Germain', years: '2001-2003' },
            { name: 'FC Barcelone', years: '2003-2008' },
            { name: 'AC Milan', years: '2008-2011' },
            { name: 'CR Flamengo', years: '2011-2012' },
            { name: 'Atlético Mineiro', years: '2012-2014' },
            { name: 'Querétaro FC', years: '2014-2015' },
            { name: 'Fluminense FC', years: '2015-2015' }
        ]
    },
    {
        id: 'f-8',
        name: 'Ousmane Dembélé',
        birthDate: '1997-05-15',
        sport: 'football',
        category: 'active',
        clubs: [
            { name: 'Stade Rennais', years: '2015-2016' },
            { name: 'Borussia Dortmund', years: '2016-2017' },
            { name: 'FC Barcelone', years: '2017-2023' },
            { name: 'Paris Saint-Germain', years: '2023-2026' }
        ]
    },
    {
        id: 'f-9',
        name: 'Rodri',
        birthDate: '1996-06-22',
        sport: 'football',
        category: 'active',
        clubs: [
            { name: 'Villarreal CF', years: '2015-2018' },
            { name: 'Atlético de Madrid', years: '2018-2019' },
            { name: 'Manchester City', years: '2019-2026' }
        ]
    },
    {
        id: 'f-10',
        name: 'Andriy Shevchenko',
        birthDate: '1976-09-29',
        sport: 'football',
        category: 'historical',
        clubs: [
            { name: 'Dynamo Kiev', years: '1994-1999' },
            { name: 'AC Milan', years: '1999-2006' },
            { name: 'Chelsea FC', years: '2006-2009' },
            { name: 'AC Milan', years: '2008-2009' },
            { name: 'Dynamo Kiev', years: '2009-2012' }
        ]
    },
    {
        id: 'f-11',
        name: 'Pavel Nedvěd',
        birthDate: '1972-08-30',
        sport: 'football',
        category: 'historical',
        clubs: [
            { name: 'Dukla Prague', years: '1991-1992' },
            { name: 'Sparta Prague', years: '1992-1996' },
            { name: 'Lazio Rome', years: '1996-2001' },
            { name: 'Juventus FC', years: '2001-2009' }
        ]
    },
    {
        id: 'f-12',
        name: 'Ronaldo',
        birthDate: '1976-09-22',
        sport: 'football',
        category: 'historical',
        clubs: [
            { name: 'Cruzeiro EC', years: '1993-1994' },
            { name: 'PSV Eindhoven', years: '1994-1996' },
            { name: 'FC Barcelone', years: '1996-1997' },
            { name: 'Inter Milan', years: '1997-2002' },
            { name: 'Real Madrid', years: '2002-2007' },
            { name: 'AC Milan', years: '2007-2008' },
            { name: 'SC Corinthians', years: '2009-2011' }
        ]
    },
    {
        id: 'f-13',
        name: 'Michael Owen',
        birthDate: '1979-12-14',
        sport: 'football',
        category: 'historical',
        clubs: [
            { name: 'Liverpool FC', years: '1996-2004' },
            { name: 'Real Madrid', years: '2004-2005' },
            { name: 'Newcastle United', years: '2005-2009' },
            { name: 'Manchester United', years: '2009-2012' },
            { name: 'Stoke City', years: '2012-2013' }
        ]
    },
    {
        id: 'f-14',
        name: 'Luís Figo',
        birthDate: '1972-11-04',
        sport: 'football',
        category: 'historical',
        clubs: [
            { name: 'Sporting CP', years: '1989-1995' },
            { name: 'FC Barcelone', years: '1995-2000' },
            { name: 'Real Madrid', years: '2000-2005' },
            { name: 'Inter Milan', years: '2005-2009' }
        ]
    },
    {
        id: 'f-15',
        name: 'Rivaldo',
        birthDate: '1972-04-19',
        sport: 'football',
        category: 'historical',
        clubs: [
            { name: 'Santa Cruz FC', years: '1991-1992' },
            { name: 'Mogi Mirim EC', years: '1992-1994' },
            { name: 'SC Corinthians', years: '1993-1994' },
            { name: 'SE Palmeiras', years: '1994-1996' },
            { name: 'Deportivo La Corogne', years: '1996-1997' },
            { name: 'FC Barcelone', years: '1997-2002' },
            { name: 'AC Milan', years: '2002-2004' },
            { name: 'Cruzeiro EC', years: '2004-2004' },
            { name: 'Olympiakos', years: '2004-2007' },
            { name: 'AEK Athènes', years: '2007-2008' },
            { name: 'FC Bunyodkor', years: '2008-2010' },
            { name: 'São Paulo FC', years: '2011-2011' },
            { name: 'Kabuscorp SCP', years: '2012-2012' },
            { name: 'São Caetano', years: '2013-2013' },
            { name: 'Mogi Mirim EC', years: '2014-2015' }
        ]
    },
    {
        id: 'f-16',
        name: 'Zinedine Zidane',
        birthDate: '1972-06-23',
        sport: 'football',
        category: 'historical',
        clubs: [
            { name: 'AS Cannes', years: '1989-1992' },
            { name: 'Girondins de Bordeaux', years: '1992-1996' },
            { name: 'Juventus FC', years: '1996-2001' },
            { name: 'Real Madrid', years: '2001-2006' }
        ]
    },
    {
        id: 'f-17',
        name: 'Matthias Sammer',
        birthDate: '1967-09-05',
        sport: 'football',
        category: 'historical',
        clubs: [
            { name: 'Dynamo Dresde', years: '1985-1990' },
            { name: 'VfB Stuttgart', years: '1990-1992' },
            { name: 'Inter Milan', years: '1992-1993' },
            { name: 'Borussia Dortmund', years: '1993-1998' }
        ]
    },
    {
        id: 'f-18',
        name: 'George Weah',
        birthDate: '1966-10-01',
        sport: 'football',
        category: 'historical',
        clubs: [
            { name: 'Mighty Barrolle', years: '1985-1986' },
            { name: 'Invincible Eleven', years: '1986-1987' },
            { name: 'Tonnerre Yaoundé', years: '1987-1988' },
            { name: 'AS Monaco', years: '1988-1992' },
            { name: 'Paris Saint-Germain', years: '1992-1995' },
            { name: 'AC Milan', years: '1995-2000' },
            { name: 'Chelsea FC', years: '2000-2000' },
            { name: 'Manchester City', years: '2000-2000' },
            { name: 'Olympique de Marseille', years: '1999-2001' },
            { name: 'Al-Jazira Club', years: '2001-2003' }
        ]
    },
    {
        id: 'f-19',
        name: 'Hristo Stoichkov',
        birthDate: '1966-02-08',
        sport: 'football',
        category: 'historical',
        clubs: [
            { name: 'CSKA Sofia', years: '1984-1990' },
            { name: 'FC Barcelone', years: '1990-1995' },
            { name: 'Parme AC', years: '1995-1996' },
            { name: 'FC Barcelone', years: '1996-1998' },
            { name: 'CSKA Sofia', years: '1998-1998' },
            { name: 'Al-Nassr FC', years: '1998-1998' },
            { name: 'Kashiwa Reysol', years: '1998-1999' },
            { name: 'Chicago Fire', years: '2000-2002' },
            { name: 'D.C. United', years: '2003-2003' }
        ]
    },
    {
        id: 'f-20',
        name: 'Roberto Baggio',
        birthDate: '1967-02-18',
        sport: 'football',
        category: 'historical',
        clubs: [
            { name: 'Vicence Calcio', years: '1982-1985' },
            { name: 'ACF Fiorentina', years: '1985-1990' },
            { name: 'Juventus FC', years: '1990-1995' },
            { name: 'AC Milan', years: '1995-1997' },
            { name: 'Bologne FC', years: '1997-1998' },
            { name: 'Inter Milan', years: '1998-2000' },
            { name: 'Brescia Calcio', years: '2000-2004' }
        ]
    },
    {
        id: 'f-21',
        name: 'Marco van Basten',
        birthDate: '1964-10-31',
        sport: 'football',
        category: 'historical',
        clubs: [
            { name: 'Ajax Amsterdam', years: '1981-1987' },
            { name: 'AC Milan', years: '1987-1995' }
        ]
    },
    {
        id: 'f-22',
        name: 'Jean-Pierre Papin',
        birthDate: '1963-11-05',
        sport: 'football',
        category: 'historical',
        clubs: [
            { name: 'Valenciennes FC', years: '1984-1985' },
            { name: 'Club Bruges KV', years: '1985-1986' },
            { name: 'Olympique de Marseille', years: '1986-1992' },
            { name: 'AC Milan', years: '1992-1994' },
            { name: 'Bayern Munich', years: '1994-1996' },
            { name: 'Girondins de Bordeaux', years: '1996-1998' },
            { name: 'EA Guingamp', years: '1998-1998' }
        ]
    },
    {
        id: 'f-23',
        name: 'Lothar Matthäus',
        birthDate: '1961-03-21',
        sport: 'football',
        category: 'historical',
        clubs: [
            { name: 'Borussia Mönchengladbach', years: '1979-1984' },
            { name: 'Bayern Munich', years: '1984-1988' },
            { name: 'Inter Milan', years: '1988-1992' },
            { name: 'Bayern Munich', years: '1992-2000' },
            { name: 'MetroStars', years: '2000-2000' }
        ]
    },
    {
        id: 'f-24',
        name: 'Ruud Gullit',
        birthDate: '1962-09-01',
        sport: 'football',
        category: 'historical',
        clubs: [
            { name: 'HFC Haarlem', years: '1979-1982' },
            { name: 'Feyenoord Rotterdam', years: '1982-1985' },
            { name: 'PSV Eindhoven', years: '1985-1987' },
            { name: 'AC Milan', years: '1987-1994' },
            { name: 'UC Sampdoria', years: '1993-1994' },
            { name: 'AC Milan', years: '1994-1994' },
            { name: 'UC Sampdoria', years: '1994-1995' },
            { name: 'Chelsea FC', years: '1995-1998' }
        ]
    },
    {
        id: 'f-25',
        name: 'Igor Belanov',
        birthDate: '1960-09-25',
        sport: 'football',
        category: 'historical',
        clubs: [
            { name: 'SKA Odessa', years: '1979-1980' },
            { name: 'Tchernomorets Odessa', years: '1981-1984' },
            { name: 'Dynamo Kiev', years: '1985-1989' },
            { name: 'Borussia Mönchengladbach', years: '1989-1990' },
            { name: 'Eintracht Brunswick', years: '1991-1995' },
            { name: 'Tchernomorets Odessa', years: '1995-1996' },
            { name: 'Metalurh Marioupol', years: '1996-1997' }
        ]
    },
    {
        id: 'f-26',
        name: 'Michel Platini',
        birthDate: '1955-06-21',
        sport: 'football',
        category: 'historical',
        clubs: [
            { name: 'AS Nancy-Lorraine', years: '1972-1979' },
            { name: 'AS Saint-Étienne', years: '1979-1982' },
            { name: 'Juventus FC', years: '1982-1987' }
        ]
    },
    {
        id: 'f-27',
        name: 'Paolo Rossi',
        birthDate: '1956-09-23',
        sport: 'football',
        category: 'historical',
        clubs: [
            { name: 'Juventus FC', years: '1973-1975' },
            { name: 'Calcio Côme', years: '1975-1976' },
            { name: 'Vicence Calcio', years: '1976-1979' },
            { name: 'AC Pérouse', years: '1979-1980' },
            { name: 'Juventus FC', years: '1981-1985' },
            { name: 'AC Milan', years: '1985-1986' },
            { name: 'Hellas Vérone', years: '1986-1987' }
        ]
    },
    {
        id: 'f-28',
        name: 'Karl-Heinz Rummenigge',
        birthDate: '1955-09-25',
        sport: 'football',
        category: 'historical',
        clubs: [
            { name: 'Bayern Munich', years: '1974-1984' },
            { name: 'Inter Milan', years: '1984-1987' },
            { name: 'Servette FC', years: '1987-1989' }
        ]
    },
    {
        id: 'f-29',
        name: 'Kevin Keegan',
        birthDate: '1951-02-14',
        sport: 'football',
        category: 'historical',
        clubs: [
            { name: 'Scunthorpe United', years: '1968-1971' },
            { name: 'Liverpool FC', years: '1971-1977' },
            { name: 'Hambourg SV', years: '1977-1980' },
            { name: 'Southampton FC', years: '1980-1982' },
            { name: 'Newcastle United', years: '1982-1984' },
            { name: 'Blacktown City FC', years: '1985-1985' }
        ]
    },
    {
        id: 'f-30',
        name: 'Allan Simonsen',
        birthDate: '1952-12-15',
        sport: 'football',
        category: 'historical',
        clubs: [
            { name: 'Vejle BK', years: '1971-1972' },
            { name: 'Borussia Mönchengladbach', years: '1972-1979' },
            { name: 'FC Barcelone', years: '1979-1982' },
            { name: 'Charlton Athletic', years: '1982-1983' },
            { name: 'Vejle BK', years: '1983-1989' }
        ]
    },
    {
        id: 'f-31',
        name: 'Franz Beckenbauer',
        birthDate: '1945-09-11',
        sport: 'football',
        category: 'historical',
        clubs: [
            { name: 'Bayern Munich', years: '1964-1977' },
            { name: 'New York Cosmos', years: '1977-1980' },
            { name: 'Hambourg SV', years: '1980-1982' },
            { name: 'New York Cosmos', years: '1983-1983' }
        ]
    },
    {
        id: 'f-32',
        name: 'Oleg Blokhine',
        birthDate: '1952-11-05',
        sport: 'football',
        category: 'historical',
        clubs: [
            { name: 'Dynamo Kiev', years: '1969-1988' },
            { name: 'Vorwärts Steyr', years: '1988-1989' },
            { name: 'Aris Limassol', years: '1989-1990' }
        ]
    },
    {
        id: 'f-33',
        name: 'Johan Cruyff',
        birthDate: '1947-04-25',
        sport: 'football',
        category: 'historical',
        clubs: [
            { name: 'Ajax Amsterdam', years: '1964-1973' },
            { name: 'FC Barcelone', years: '1973-1978' },
            { name: 'Los Angeles Aztecs', years: '1979-1979' },
            { name: 'Washington Diplomats', years: '1980-1980' },
            { name: 'Levante UD', years: '1981-1981' },
            { name: 'Washington Diplomats', years: '1981-1981' },
            { name: 'Ajax Amsterdam', years: '1981-1983' },
            { name: 'Feyenoord Rotterdam', years: '1983-1984' }
        ]
    },
    {
        id: 'f-34',
        name: 'Gerd Müller',
        birthDate: '1945-11-03',
        sport: 'football',
        category: 'historical',
        clubs: [
            { name: 'TSV Nördlingen', years: '1963-1964' },
            { name: 'Bayern Munich', years: '1964-1979' },
            { name: 'Fort Lauderdale Strikers', years: '1979-1981' }
        ]
    },
    {
        id: 'f-35',
        name: 'Gianni Rivera',
        birthDate: '1943-08-18',
        sport: 'football',
        category: 'historical',
        clubs: [
            { name: 'Alexandrie Calcio', years: '1959-1960' },
            { name: 'AC Milan', years: '1960-1979' }
        ]
    },
    {
        id: 'f-36',
        name: 'George Best',
        birthDate: '1946-05-22',
        sport: 'football',
        category: 'historical',
        clubs: [
            { name: 'Manchester United', years: '1963-1974' },
            { name: 'Jewish Guild', years: '1974-1974' },
            { name: 'Dunstable Town', years: '1974-1974' },
            { name: 'Stockport County', years: '1975-1975' },
            { name: 'Cork Celtic', years: '1975-1976' },
            { name: 'Los Angeles Aztecs', years: '1976-1976' },
            { name: 'Fulham FC', years: '1976-1977' },
            { name: 'Los Angeles Aztecs', years: '1977-1978' },
            { name: 'Fulham FC', years: '1977-1978' },
            { name: 'Fort Lauderdale Strikers', years: '1978-1979' },
            { name: 'Hibernian FC', years: '1979-1980' },
            { name: 'San Jose Earthquakes', years: '1980-1981' },
            { name: 'AFC Bournemouth', years: '1983-1983' },
            { name: 'Brisbane Lions', years: '1983-1983' },
            { name: 'Tobermore United', years: '1984-1984' }
        ]
    },
    {
        id: 'f-37',
        name: 'Flórián Albert',
        birthDate: '1941-09-15',
        sport: 'football',
        category: 'historical',
        clubs: [
            { name: 'Ferencváros TC', years: '1958-1974' }
        ]
    },
    {
        id: 'f-38',
        name: 'Bobby Charlton',
        birthDate: '1937-10-11',
        sport: 'football',
        category: 'historical',
        clubs: [
            { name: 'Manchester United', years: '1956-1973' },
            { name: 'Preston North End', years: '1973-1975' },
            { name: 'Waterford United', years: '1976-1976' }
        ]
    },
    {
        id: 'f-39',
        name: 'Eusébio',
        birthDate: '1942-01-25',
        sport: 'football',
        category: 'historical',
        clubs: [
            { name: 'Sporting de Lourenço Marques', years: '1957-1960' },
            { name: 'Benfica Lisbonne', years: '1960-1975' },
            { name: 'Boston Minutemen', years: '1975-1975' },
            { name: 'CF Monterrey', years: '1975-1976' },
            { name: 'Toronto Metros-Croatia', years: '1976-1976' },
            { name: 'Beira-Mar', years: '1976-1977' },
            { name: 'Las Vegas Quicksilvers', years: '1977-1977' },
            { name: 'União de Tomar', years: '1977-1978' },
            { name: 'New Jersey Americans', years: '1978-1979' }
        ]
    },
    {
        id: 'f-40',
        name: 'Denis Law',
        birthDate: '1940-02-24',
        sport: 'football',
        category: 'historical',
        clubs: [
            { name: 'Huddersfield Town', years: '1956-1960' },
            { name: 'Manchester City', years: '1960-1961' },
            { name: 'Torino FC', years: '1961-1962' },
            { name: 'Manchester United', years: '1962-1973' },
            { name: 'Manchester City', years: '1973-1974' }
        ]
    },
    {
        id: 'f-41',
        name: 'Lev Yachine',
        birthDate: '1929-10-22',
        sport: 'football',
        category: 'historical',
        clubs: [
            { name: 'Dynamo Moscou', years: '1950-1970' }
        ]
    },
    {
        id: 'f-42',
        name: 'Josef Masopust',
        birthDate: '1931-02-09',
        sport: 'football',
        category: 'historical',
        clubs: [
            { name: 'ZSJ Technomat Teplice', years: '1950-1952' },
            { name: 'Dukla Prague', years: '1952-1968' },
            { name: 'Crossing Molenbeek', years: '1968-1970' }
        ]
    },
    {
        id: 'f-43',
        name: 'Omar Sívori',
        birthDate: '1935-10-02',
        sport: 'football',
        category: 'historical',
        clubs: [
            { name: 'River Plate', years: '1954-1957' },
            { name: 'Juventus FC', years: '1957-1965' },
            { name: 'SSC Napoli', years: '1965-1968' }
        ]
    },
    {
        id: 'f-44',
        name: 'Luis Suárez',
        birthDate: '1935-05-02',
        sport: 'football',
        category: 'historical',
        clubs: [
            { name: 'Deportivo La Corogne', years: '1953-1954' },
            { name: 'FC Barcelone', years: '1954-1961' },
            { name: 'Inter Milan', years: '1961-1970' },
            { name: 'Sampdoria Gênes', years: '1970-1973' }
        ]
    },
    {
        id: 'f-45',
        name: 'Alfredo Di Stéfano',
        birthDate: '1926-07-04',
        sport: 'football',
        category: 'historical',
        clubs: [
            { name: 'River Plate', years: '1945-1949' },
            { name: 'CA Huracán', years: '1946-1946' },
            { name: 'Millonarios FC', years: '1949-1953' },
            { name: 'Real Madrid', years: '1953-1964' },
            { name: 'RCD Espanyol', years: '1964-1966' }
        ]
    },
    {
        id: 'f-46',
        name: 'Raymond Kopa',
        birthDate: '1931-10-13',
        sport: 'football',
        category: 'historical',
        clubs: [
            { name: 'Angers SCO', years: '1949-1951' },
            { name: 'Stade de Reims', years: '1951-1956' },
            { name: 'Real Madrid', years: '1956-1959' },
            { name: 'Stade de Reims', years: '1959-1967' }
        ]
    },
    {
        id: 'f-47',
        name: 'Stanley Matthews',
        birthDate: '1915-02-01',
        sport: 'football',
        category: 'historical',
        clubs: [
            { name: 'Stoke City', years: '1932-1947' },
            { name: 'Blackpool FC', years: '1947-1961' },
            { name: 'Stoke City', years: '1961-1965' }
        ]
    },
    {
        id: 'f-48',
        name: 'Guillaume Warmuz',
        birthDate: '1970-05-22',
        sport: 'football',
        category: 'historical',
        clubs: [
            { name: 'Olympique de Marseille', years: '1989-1990' },
            { name: 'Louhans-Cuiseaux FC', years: '1990-1992' },
            { name: 'RC Lens', years: '1992-2003' },
            { name: 'Arsenal FC', years: '2003-2003' },
            { name: 'Borussia Dortmund', years: '2003-2005' },
            { name: 'AS Monaco', years: '2005-2007' }
        ]
    },
    {
        id: 'f-49',
        name: 'Jean-Guy Wallemme',
        birthDate: '1967-08-10',
        sport: 'football',
        category: 'historical',
        clubs: [
            { name: 'RC Lens', years: '1986-1998' },
            { name: 'Coventry City', years: '1998-1998' },
            { name: 'FC Sochaux-Montbéliard', years: '1999-1999' },
            { name: 'AS Saint-Étienne', years: '1999-2001' },
            { name: 'RC Lens', years: '2001-2002' }
        ]
    },
    {
        id: 'f-50',
        name: 'Anto Drobnjak',
        birthDate: '1968-09-21',
        sport: 'football',
        category: 'historical',
        clubs: [
            { name: 'Jedinstvo Bijelo Polje', years: '1986-1990' },
            { name: 'Budućnost Podgorica', years: '1990-1992' },
            { name: 'Étoile rouge de Belgrade', years: '1992-1994' },
            { name: 'SC Bastia', years: '1994-1997' },
            { name: 'RC Lens', years: '1997-1998' },
            { name: 'Gamba Osaka', years: '1998-1999' },
            { name: 'FC Sochaux-Montbéliard', years: '1999-2001' },
            { name: 'FC Martigues', years: '2001-2002' }
        ]
    },
    {
        id: 'f-51',
        name: 'Fernando Morientes',
        birthDate: '1976-04-05',
        sport: 'football',
        category: 'historical',
        clubs: [
            { name: 'Albacete Balompié', years: '1993-1995' },
            { name: 'Real Saragosse', years: '1995-1997' },
            { name: 'Real Madrid', years: '1997-2005' },
            { name: 'AS Monaco', years: '2003-2004' },
            { name: 'Liverpool FC', years: '2005-2006' },
            { name: 'Valence CF', years: '2006-2009' },
            { name: 'Olympique de Marseille', years: '2009-2010' },
            { name: 'Santa Ana', years: '2015-2015' }
        ]
    },
    {
        id: 'f-52',
        name: 'Ludovic Giuly',
        birthDate: '1976-07-10',
        sport: 'football',
        category: 'historical',
        clubs: [
            { name: 'Olympique Lyonnais', years: '1994-1998' },
            { name: 'AS Monaco', years: '1998-2004' },
            { name: 'FC Barcelone', years: '2004-2007' },
            { name: 'AS Rome', years: '2007-2008' },
            { name: 'Paris Saint-Germain', years: '2008-2011' },
            { name: 'AS Monaco', years: '2011-2012' },
            { name: 'FC Lorient', years: '2012-2013' },
            { name: 'Monts d\'Or Azergues', years: '2013-2016' }
        ]
    },
    {
        id: 'f-53',
        name: 'Dado Pršo',
        birthDate: '1974-11-05',
        sport: 'football',
        category: 'historical',
        clubs: [
            { name: 'Hajduk Split', years: '1991-1992' },
            { name: 'Pazinka Pazin', years: '1992-1993' },
            { name: 'FC Rouen', years: '1993-1995' },
            { name: 'Stade raphaëlois', years: '1995-1996' },
            { name: 'AS Monaco', years: '1996-2004' },
            { name: 'AC Ajaccio', years: '1997-1999' },
            { name: 'Rangers FC', years: '2004-2007' }
        ]
    },
    {
        id: 'f-54',
        name: 'Patrice Evra',
        birthDate: '1981-05-15',
        sport: 'football',
        category: 'historical',
        clubs: [
            { name: 'Marsala Calcio', years: '1998-1999' },
            { name: 'AC Monza', years: '1999-2000' },
            { name: 'OGC Nice', years: '2000-2002' },
            { name: 'AS Monaco', years: '2002-2006' },
            { name: 'Manchester United', years: '2006-2014' },
            { name: 'Juventus FC', years: '2014-2017' },
            { name: 'Olympique de Marseille', years: '2017-2017' },
            { name: 'West Ham United', years: '2018-2018' }
        ]
    },
    {
        id: 'f-55',
        name: 'Cris',
        birthDate: '1977-06-03',
        sport: 'football',
        category: 'historical',
        clubs: [
            { name: 'SC Corinthians', years: '1995-1998' },
            { name: 'Cruzeiro EC', years: '1999-2004' },
            { name: 'Bayer Leverkusen', years: '2003-2003' },
            { name: 'Olympique Lyonnais', years: '2004-2012' },
            { name: 'Galatasaray SK', years: '2012-2013' },
            { name: 'Grêmio FBPA', years: '2013-2013' },
            { name: 'Vasco da Gama', years: '2013-2014' }
        ]
    },
    {
        id: 'f-56',
        name: 'Juninho Pernambucano',
        birthDate: '1975-01-30',
        sport: 'football',
        category: 'historical',
        clubs: [
            { name: 'Sport Recife', years: '1993-1994' },
            { name: 'Vasco da Gama', years: '1995-2001' },
            { name: 'Olympique Lyonnais', years: '2001-2009' },
            { name: 'Al-Gharafa SC', years: '2009-2011' },
            { name: 'Vasco da Gama', years: '2011-2012' },
            { name: 'New York Red Bulls', years: '2013-2013' },
            { name: 'Vasco da Gama', years: '2013-2014' }
        ]
    },
    {
        id: 'f-57',
        name: 'Lisandro López',
        birthDate: '1983-03-02',
        sport: 'football',
        category: 'historical',
        clubs: [
            { name: 'Racing Club', years: '2003-2005' },
            { name: 'FC Porto', years: '2005-2009' },
            { name: 'Olympique Lyonnais', years: '2009-2013' },
            { name: 'Al-Gharafa SC', years: '2013-2015' },
            { name: 'SC Internacional', years: '2015-2015' },
            { name: 'Racing Club', years: '2016-2021' },
            { name: 'Atlanta United', years: '2021-2021' },
            { name: 'Racing Club', years: '2021-2021' },
            { name: 'Sarmiento Junín', years: '2022-2023' }
        ]
    },
    {
        id: 'f-58',
        name: 'Grégory Coupet',
        birthDate: '1972-12-31',
        sport: 'football',
        category: 'historical',
        clubs: [
            { name: 'AS Saint-Étienne', years: '1993-1997' },
            { name: 'Olympique Lyonnais', years: '1997-2008' },
            { name: 'Atlético de Madrid', years: '2008-2009' },
            { name: 'Paris Saint-Germain', years: '2009-2011' }
        ]
    },
    {
        id: 'f-59',
        name: 'Sidney Govou',
        birthDate: '1979-07-27',
        sport: 'football',
        category: 'historical',
        clubs: [
            { name: 'Olympique Lyonnais', years: '1999-2010' },
            { name: 'Panathinaïkos', years: '2010-2011' },
            { name: 'Évian Thonon Gaillard', years: '2011-2013' },
            { name: 'Olympique Lyonnais B', years: '2013-2014' },
            { name: 'FC Monts d\'Or Azergues', years: '2014-2015' },
            { name: 'FC Miami City', years: '2015-2015' }
        ]
    },
    {
        id: 'f-60',
        name: 'Steven Gerrard',
        birthDate: '1980-05-30',
        sport: 'football',
        category: 'historical',
        clubs: [
            { name: 'Liverpool FC', years: '1998-2015' },
            { name: 'LA Galaxy', years: '2015-2016' }
        ]
    },
    {
        id: 'f-61',
        name: 'Vladimír Šmicer',
        birthDate: '1973-05-24',
        sport: 'football',
        category: 'historical',
        clubs: [
            { name: 'Slavia Prague', years: '1992-1996' },
            { name: 'RC Lens', years: '1996-1999' },
            { name: 'Liverpool FC', years: '1999-2005' },
            { name: 'Girondins de Bordeaux', years: '2005-2007' },
            { name: 'Slavia Prague', years: '2007-2009' }
        ]
    },
    {
        id: 'f-62',
        name: 'Xabi Alonso',
        birthDate: '1981-11-25',
        sport: 'football',
        category: 'historical',
        clubs: [
            { name: 'Real Sociedad', years: '1999-2004' },
            { name: 'SD Eibar', years: '2000-2001' },
            { name: 'Liverpool FC', years: '2004-2009' },
            { name: 'Real Madrid', years: '2009-2014' },
            { name: 'Bayern Munich', years: '2014-2017' }
        ]
    },
    {
        id: 'f-63',
        name: 'Fabien Barthez',
        birthDate: '1971-06-28',
        sport: 'football',
        category: 'historical',
        clubs: [
            { name: 'Toulouse FC', years: '1990-1992' },
            { name: 'Olympique de Marseille', years: '1992-1995' },
            { name: 'AS Monaco', years: '1995-2000' },
            { name: 'Manchester United', years: '2000-2004' },
            { name: 'Olympique de Marseille', years: '2004-2006' },
            { name: 'FC Nantes', years: '2006-2007' }
        ]
    },
    {
        id: 'f-64',
        name: 'Basile Boli',
        birthDate: '1967-01-02',
        sport: 'football',
        category: 'historical',
        clubs: [
            { name: 'AJ Auxerre', years: '1982-1990' },
            { name: 'Olympique de Marseille', years: '1990-1994' },
            { name: 'Glasgow Rangers', years: '1994-1995' },
            { name: 'AS Monaco', years: '1995-1996' },
            { name: 'Urawa Red Diamonds', years: '1996-1997' }
        ]
    },
    {
        id: 'f-65',
        name: 'Abedi Pelé',
        birthDate: '1964-11-05',
        sport: 'football',
        category: 'historical',
        clubs: [
            { name: 'Real Tamale United', years: '1978-1982' },
            { name: 'Al-Sadd SC', years: '1982-1983' },
            { name: 'FC Zurich', years: '1983-1984' },
            { name: 'AS Dragons FC de l\'Ouémé', years: '1984-1984' },
            { name: 'Chamois Niortais', years: '1986-1987' },
            { name: 'FC Mulhouse', years: '1987-1987' },
            { name: 'Olympique de Marseille', years: '1987-1993' },
            { name: 'Lille OSC', years: '1988-1990' },
            { name: 'Olympique Lyonnais', years: '1993-1994' },
            { name: 'Torino FC', years: '1994-1996' },
            { name: 'TSV 1860 Munich', years: '1996-1998' },
            { name: 'Al-Aïn FC', years: '1998-2000' }
        ]
    },
    {
        id: 'f-66',
        name: 'Didier Deschamps',
        birthDate: '1968-10-15',
        sport: 'football',
        category: 'historical',
        clubs: [
            { name: 'FC Nantes', years: '1985-1989' },
            { name: 'Olympique de Marseille', years: '1989-1994' },
            { name: 'Girondins de Bordeaux', years: '1990-1991' },
            { name: 'Juventus FC', years: '1994-1999' },
            { name: 'Chelsea FC', years: '1999-2000' },
            { name: 'Valence CF', years: '2000-2001' }
        ]
    },
    {
        id: 'f-67',
        name: 'Rudi Völler',
        birthDate: '1960-04-13',
        sport: 'football',
        category: 'historical',
        clubs: [
            { name: 'Kickers Offenbach', years: '1977-1980' },
            { name: 'TSV 1860 Munich', years: '1980-1982' },
            { name: 'Werder Brême', years: '1982-1987' },
            { name: 'AS Rome', years: '1987-1992' },
            { name: 'Olympique de Marseille', years: '1992-1994' },
            { name: 'Bayer Leverkusen', years: '1994-1996' }
        ]
    },
    {
        id: 'f-68',
        name: 'Ole Gunnar Solskjær',
        birthDate: '1973-02-26',
        sport: 'football',
        category: 'historical',
        clubs: [
            { name: 'Clausenengen FK', years: '1990-1994' },
            { name: 'Molde FK', years: '1994-1996' },
            { name: 'Manchester United', years: '1996-2007' }
        ]
    },
    {
        id: 'f-69',
        name: 'Teddy Sheringham',
        birthDate: '1966-04-02',
        sport: 'football',
        category: 'historical',
        clubs: [
            { name: 'Millwall FC', years: '1983-1991' },
            { name: 'Aldershot FC', years: '1985-1985' },
            { name: 'Djurgårdens IF', years: '1985-1985' },
            { name: 'Nottingham Forest', years: '1991-1992' },
            { name: 'Tottenham Hotspur', years: '1992-1997' },
            { name: 'Manchester United', years: '1997-2001' },
            { name: 'Tottenham Hotspur', years: '2001-2003' },
            { name: 'Portsmouth FC', years: '2003-2004' },
            { name: 'West Ham United', years: '2004-2007' },
            { name: 'Colchester United', years: '2007-2008' }
        ]
    },
    {
        id: 'f-70',
        name: 'David Beckham',
        birthDate: '1975-05-02',
        sport: 'football',
        category: 'historical',
        clubs: [
            { name: 'Manchester United', years: '1992-2003' },
            { name: 'Preston North End', years: '1995-1995' },
            { name: 'Real Madrid', years: '2003-2007' },
            { name: 'LA Galaxy', years: '2007-2012' },
            { name: 'AC Milan', years: '2009-2009' },
            { name: 'AC Milan', years: '2010-2010' },
            { name: 'Paris Saint-Germain', years: '2013-2013' }
        ]
    },
    {
        id: 'f-71',
        name: 'Laurent Blanc',
        birthDate: '1965-11-19',
        sport: 'football',
        category: 'historical',
        clubs: [
            { name: 'Montpellier HSC', years: '1983-1991' },
            { name: 'SSC Naples', years: '1991-1992' },
            { name: 'Nîmes Olympique', years: '1992-1993' },
            { name: 'AS Saint-Étienne', years: '1993-1995' },
            { name: 'AJ Auxerre', years: '1995-1996' },
            { name: 'FC Barcelone', years: '1996-1997' },
            { name: 'Olympique de Marseille', years: '1997-1999' },
            { name: 'Inter Milan', years: '1999-2001' },
            { name: 'Manchester United', years: '2001-2003' }
        ]
    },
    {
        id: 'f-72',
        name: 'Youri Djorkaeff',
        birthDate: '1968-03-09',
        sport: 'football',
        category: 'historical',
        clubs: [
            { name: 'Grenoble Foot 38', years: '1984-1989' },
            { name: 'RC Strasbourg', years: '1989-1990' },
            { name: 'AS Monaco', years: '1990-1995' },
            { name: 'Paris Saint-Germain', years: '1995-1996' },
            { name: 'Inter Milan', years: '1996-1999' },
            { name: 'FC Kaiserslautern', years: '1999-2002' },
            { name: 'Bolton Wanderers', years: '2002-2004' },
            { name: 'Blackburn Rovers', years: '2004-2004' },
            { name: 'New York Red Bulls', years: '2005-2006' }
        ]
    },
    {
        id: 'f-73',
        name: 'Kylian Mbappé',
        birthDate: '1998-12-20',
        sport: 'football',
        category: 'active',
        clubs: [
            { name: 'AS Monaco', years: '2015-2017' },
            { name: 'Paris Saint-Germain', years: '2017-2024' },
            { name: 'Real Madrid', years: '2024-2026' }
        ]
    },
    {
        id: 'f-74',
        name: 'Antoine Griezmann',
        birthDate: '1991-03-21',
        sport: 'football',
        category: 'active',
        clubs: [
            { name: 'Real Sociedad', years: '2009-2014' },
            { name: 'Atlético de Madrid', years: '2014-2019' },
            { name: 'FC Barcelone', years: '2019-2021' },
            { name: 'Atlético de Madrid', years: '2021-2026' }
        ]
    },
    {
        id: 'f-75',
        name: 'N\'Golo Kanté',
        birthDate: '1991-03-29',
        sport: 'football',
        category: 'active',
        clubs: [
            { name: 'US Boulogne', years: '2012-2013' },
            { name: 'SM Caen', years: '2013-2015' },
            { name: 'Leicester City', years: '2015-2016' },
            { name: 'Chelsea FC', years: '2016-2023' },
            { name: 'Al-Ittihad Club', years: '2023-2025' },
            { name: 'Fenerbahçe SK', years: '2025-2026' }
        ]
    },
    {
        id: 'f-76',
        name: 'Hugo Lloris',
        birthDate: '1986-12-26',
        sport: 'football',
        category: 'active',
        clubs: [
            { name: 'OGC Nice', years: '2005-2008' },
            { name: 'Olympique Lyonnais', years: '2008-2012' },
            { name: 'Tottenham Hotspur', years: '2012-2023' },
            { name: 'Los Angeles FC', years: '2024-2026' }
        ]
    },
    {
        id: 'f-77',
        name: 'Raphaël Varane',
        birthDate: '1993-04-25',
        sport: 'football',
        category: 'historical',
        clubs: [
            { name: 'RC Lens', years: '2010-2011' },
            { name: 'Real Madrid', years: '2011-2021' },
            { name: 'Manchester United', years: '2021-2024' },
            { name: 'Côme 1907', years: '2024-2024' }
        ]
    },
    {
        id: 'f-78',
        name: 'Gaizka Mendieta',
        birthDate: '1974-03-27',
        sport: 'football',
        category: 'historical',
        clubs: [
            { name: 'CD Castellón', years: '1991-1992' },
            { name: 'Valence CF', years: '1992-2001' },
            { name: 'Lazio Rome', years: '2001-2004' },
            { name: 'FC Barcelone', years: '2002-2003' },
            { name: 'Middlesbrough FC', years: '2003-2008' }
        ]
    },
    {
        id: 'f-79',
        name: 'Santiago Cañizares',
        birthDate: '1969-12-18',
        sport: 'football',
        category: 'historical',
        clubs: [
            { name: 'Real Madrid', years: '1988-1998' },
            { name: 'Real Madrid B', years: '1989-1990' },
            { name: 'Elche CF', years: '1990-1991' },
            { name: 'CP Mérida', years: '1991-1992' },
            { name: 'Celta Vigo', years: '1992-1994' },
            { name: 'Valence CF', years: '1998-2008' }
        ]
    },
    {
        id: 'f-80',
        name: 'Claudio López',
        birthDate: '1974-07-17',
        sport: 'football',
        category: 'historical',
        clubs: [
            { name: 'Estudiantes de La Plata', years: '1990-1992' },
            { name: 'Racing Club', years: '1992-1996' },
            { name: 'Valence CF', years: '1996-2000' },
            { name: 'Lazio Rome', years: '2000-2004' },
            { name: 'Club América', years: '2004-2006' },
            { name: 'Racing Club', years: '2007-2007' },
            { name: 'Kansas City Wizards', years: '2008-2009' },
            { name: 'Colorado Rapids', years: '2010-2010' }
        ]
    },
    {
        id: 'f-81',
        name: 'Raúl González',
        birthDate: '1977-06-27',
        sport: 'football',
        category: 'historical',
        clubs: [
            { name: 'Atlético de Madrid', years: '1990-1992' },
            { name: 'Real Madrid', years: '1992-2010' },
            { name: 'Schalke 04', years: '2010-2012' },
            { name: 'Al-Sadd SC', years: '2012-2014' },
            { name: 'New York Cosmos', years: '2014-2015' }
        ]
    },
    {
        id: 'f-82',
        name: 'Iker Casillas',
        birthDate: '1981-05-20',
        sport: 'football',
        category: 'historical',
        clubs: [
            { name: 'Real Madrid', years: '1999-2015' },
            { name: 'FC Porto', years: '2015-2020' }
        ]
    },
    {
        id: 'f-83',
        name: 'Sergio Ramos',
        birthDate: '1986-03-30',
        sport: 'football',
        category: 'active',
        clubs: [
            { name: 'Séville FC', years: '2003-2005' },
            { name: 'Real Madrid', years: '2005-2021' },
            { name: 'Paris Saint-Germain', years: '2021-2023' },
            { name: 'Séville FC', years: '2023-2024' },
            { name: 'San Diego FC', years: '2025-2026' }
        ]
    },
    {
        id: 'f-84',
        name: 'Emilio Butragueño',
        birthDate: '1963-07-22',
        sport: 'football',
        category: 'historical',
        clubs: [
            { name: 'Real Madrid Castilla', years: '1982-1984' },
            { name: 'Real Madrid', years: '1984-1995' },
            { name: 'Atlético Celaya', years: '1995-1998' }
        ]
    },
    {
        id: 'f-85',
        name: 'Andrés Iniesta',
        birthDate: '1984-05-11',
        sport: 'football',
        category: 'historical',
        clubs: [
            { name: 'FC Barcelone', years: '2002-2018' },
            { name: 'Vissel Kobe', years: '2018-2023' },
            { name: 'Emirates Club', years: '2023-2024' }
        ]
    },
    {
        id: 'f-86',
        name: 'Xavi Hernández',
        birthDate: '1980-01-25',
        sport: 'football',
        category: 'historical',
        clubs: [
            { name: 'FC Barcelone', years: '1998-2015' },
            { name: 'Al-Sadd SC', years: '2015-2019' }
        ]
    },
    {
        id: 'f-87',
        name: 'Carles Puyol',
        birthDate: '1978-04-13',
        sport: 'football',
        category: 'historical',
        clubs: [
            { name: 'FC Barcelone', years: '1999-2014' }
        ]
    },
    {
        id: 'f-88',
        name: 'Samuel Eto\'o',
        birthDate: '1981-03-10',
        sport: 'football',
        category: 'historical',
        clubs: [
            { name: 'Real Madrid', years: '1997-2000' },
            { name: 'CD Leganés', years: '1997-1998' },
            { name: 'RCD Espanyol', years: '1999-1999' },
            { name: 'RCD Majorque', years: '2000-2004' },
            { name: 'FC Barcelone', years: '2004-2009' },
            { name: 'Inter Milan', years: '2009-2011' },
            { name: 'Anzhi Makhachkala', years: '2011-2013' },
            { name: 'Chelsea FC', years: '2013-2014' },
            { name: 'Everton FC', years: '2014-2015' },
            { name: 'Sampdoria Gênes', years: '2015-2015' },
            { name: 'Antalyaspor', years: '2015-2018' },
            { name: 'Konyaspor', years: '2018-2018' },
            { name: 'Qatar SC', years: '2018-2019' }
        ]
    },
    {
        id: 'f-89',
        name: 'Pep Guardiola',
        birthDate: '1971-01-18',
        sport: 'football',
        category: 'historical',
        clubs: [
            { name: 'FC Barcelone', years: '1990-2001' },
            { name: 'Brescia Calcio', years: '2001-2002' },
            { name: 'AS Rome', years: '2002-2003' },
            { name: 'Brescia Calcio', years: '2003-2003' },
            { name: 'Al-Ahli SC', years: '2003-2005' },
            { name: 'Dorados de Sinaloa', years: '2005-2006' }
        ]
    },
    {
        id: 'f-90',
        name: 'Marco Materazzi',
        birthDate: '1973-08-19',
        sport: 'football',
        category: 'historical',
        clubs: [
            { name: 'FC Messine', years: '1990-1991' },
            { name: 'Tor di Quinto', years: '1991-1992' },
            { name: 'Marsala Calcio', years: '1993-1994' },
            { name: 'AS Trapani', years: '1994-1995' },
            { name: 'AC Pérouse', years: '1995-1998' },
            { name: 'Carpi FC', years: '1996-1997' },
            { name: 'Everton FC', years: '1998-1999' },
            { name: 'AC Pérouse', years: '1999-2001' },
            { name: 'Inter Milan', years: '2001-2011' },
            { name: 'Chennaiyin FC', years: '2014-2015' }
        ]
    },
    {
        id: 'f-91',
        name: 'Peter Shilton',
        birthDate: '1949-09-18',
        sport: 'football',
        category: 'historical',
        clubs: [
            { name: 'Leicester City', years: '1966-1974' },
            { name: 'Stoke City', years: '1974-1977' },
            { name: 'Nottingham Forest', years: '1977-1982' },
            { name: 'Southampton FC', years: '1982-1987' },
            { name: 'Derby County', years: '1987-1992' },
            { name: 'Plymouth Argyle', years: '1992-1995' },
            { name: 'Wimbledon FC', years: '1995-1995' },
            { name: 'Bolton Wanderers', years: '1995-1995' },
            { name: 'Coventry City', years: '1995-1996' },
            { name: 'West Ham United', years: '1996-1996' },
            { name: 'Leyton Orient', years: '1996-1997' }
        ]
    },
    {
        id: 'f-92',
        name: 'Diego Maradona',
        birthDate: '1960-10-30',
        sport: 'football',
        category: 'historical',
        clubs: [
            { name: 'Argentinos Juniors', years: '1976-1981' },
            { name: 'Boca Juniors', years: '1981-1982' },
            { name: 'FC Barcelone', years: '1982-1984' },
            { name: 'SSC Naples', years: '1984-1991' },
            { name: 'Séville FC', years: '1992-1993' },
            { name: 'Newell\'s Old Boys', years: '1993-1994' },
            { name: 'Boca Juniors', years: '1995-1997' }
        ]
    },
    {
        id: 'f-93',
        name: 'Yoann Gourcuff',
        birthDate: '1986-07-11',
        sport: 'football',
        category: 'historical',
        clubs: [
            { name: 'FC Lorient', years: '2001-2001' },
            { name: 'Stade Rennais', years: '2001-2006' },
            { name: 'AC Milan', years: '2006-2008' },
            { name: 'Girondins de Bordeaux', years: '2008-2010' },
            { name: 'Olympique Lyonnais', years: '2010-2015' },
            { name: 'Stade Rennais', years: '2015-2018' },
            { name: 'Dijon FCO', years: '2018-2019' }
        ]
    },
    {
        id: 'f-94',
        name: 'Marouane Chamakh',
        birthDate: '1984-01-10',
        sport: 'football',
        category: 'historical',
        clubs: [
            { name: 'Girondins de Bordeaux', years: '2002-2010' },
            { name: 'Arsenal FC', years: '2010-2013' },
            { name: 'West Ham United', years: '2013-2013' },
            { name: 'Crystal Palace', years: '2013-2016' },
            { name: 'Cardiff City', years: '2016-2017' }
        ]
    },
    {
        id: 'f-95',
        name: 'Ulrich Ramé',
        birthDate: '1972-09-19',
        sport: 'football',
        category: 'historical',
        clubs: [
            { name: 'Angers SCO', years: '1991-1997' },
            { name: 'Girondins de Bordeaux', years: '1997-2011' },
            { name: 'CS Sedan Ardennes', years: '2011-2013' }
        ]
    },
    {
        id: 'f-96',
        name: 'David Villa',
        birthDate: '1981-12-03',
        sport: 'football',
        category: 'historical',
        clubs: [
            { name: 'Sporting Gijón', years: '2001-2003' },
            { name: 'Real Saragosse', years: '2003-2005' },
            { name: 'Valence CF', years: '2005-2010' },
            { name: 'FC Barcelone', years: '2010-2013' },
            { name: 'Atlético de Madrid', years: '2013-2014' },
            { name: 'Melbourne City', years: '2014-2014' },
            { name: 'New York City FC', years: '2015-2018' },
            { name: 'Vissel Kobe', years: '2019-2020' }
        ]
    },
    {
        id: 'f-97',
        name: 'Sergio Busquets',
        birthDate: '1988-07-16',
        sport: 'football',
        category: 'active',
        clubs: [
            { name: 'FC Barcelone', years: '2008-2023' },
            { name: 'Inter Miami CF', years: '2023-2026' }
        ]
    },
    {
        id: 'f-98',
        name: 'Gerard Piqué',
        birthDate: '1987-02-02',
        sport: 'football',
        category: 'historical',
        clubs: [
            { name: 'Manchester United', years: '2004-2008' },
            { name: 'Real Saragosse', years: '2006-2007' },
            { name: 'FC Barcelone', years: '2008-2022' }
        ]
    },
    {
        id: 'f-99',
        name: 'Ryan Giggs',
        birthDate: '1973-11-29',
        sport: 'football',
        category: 'historical',
        clubs: [
            { name: 'Manchester United', years: '1990-2014' }
        ]
    },
    {
        id: 'f-100',
        name: 'Paul Scholes',
        birthDate: '1974-11-16',
        sport: 'football',
        category: 'historical',
        clubs: [
            { name: 'Manchester United', years: '1993-2011' },
            { name: 'Manchester United', years: '2012-2013' }
        ]
    }
];