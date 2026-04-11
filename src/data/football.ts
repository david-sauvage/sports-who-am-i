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
            { name: 'São Paulo FC', years: '2014' }
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
            { name: 'Flamengo', years: '2011-2012' },
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
        name: 'Andriy Chevtchenko',
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
            { name: 'SS Lazio', years: '1996-2001' },
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
            { name: 'Chelsea FC', years: '2000' },
            { name: 'Manchester City', years: '2000' },
            { name: 'Olympique de Marseille', years: '2000-2001' },
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
            { name: 'Parma AC', years: '1995-1996' },
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
            { name: 'UC Sampdoria', years: '1970-1973' }
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
            { name: 'SSC Napoli', years: '1991-1992' },
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
            { name: 'SS Lazio', years: '2001-2004' },
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
            { name: 'SS Lazio', years: '2000-2004' },
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
            { name: 'UC Sampdoria', years: '2015-2015' },
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
            { name: 'SSC Napoli', years: '1984-1991' },
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
    },
    {
        id: 'f-101',
        name: 'Nándor Hidegkuti',
        birthDate: '1922-03-03',
        sport: 'football',
        category: 'historical',
        clubs: [
            { name: 'Elektromos FC', years: '1940-1943' },
            { name: 'Herminamezei AC', years: '1943-1945' },
            { name: 'MTK Budapest', years: '1945-1958' }
        ]
    },
    {
        id: 'f-102',
        name: 'Gyula Grosics',
        birthDate: '1926-02-04',
        sport: 'football',
        category: 'historical',
        clubs: [
            { name: 'Dorogi AC', years: '1945-1947' },
            { name: 'MATEOSZ MSE', years: '1947-1950' },
            { name: 'Budapest Honvéd', years: '1950-1957' },
            { name: 'Tatabánya SC', years: '1957-1962' }
        ]
    },
    {
        id: 'f-103',
        name: 'Ferenc Puskás',
        birthDate: '1927-04-01',
        sport: 'football',
        category: 'historical',
        clubs: [
            { name: 'Budapest Honvéd', years: '1943-1956' },
            { name: 'Real Madrid', years: '1958-1966' }
        ]
    },
    {
        id: 'f-104',
        name: 'John Terry',
        birthDate: '1980-12-07',
        sport: 'football',
        category: 'historical',
        clubs: [
            { name: 'Chelsea FC', years: '1998-2017' },
            { name: 'Nottingham Forest', years: '2000' },
            { name: 'Aston Villa', years: '2017-2018' }
        ]
    },
    {
        id: 'f-105',
        name: 'Philipp Lahm',
        birthDate: '1983-11-11',
        sport: 'football',
        category: 'historical',
        clubs: [
            { name: 'Bayern Munich', years: '2002-2003' },
            { name: 'VfB Stuttgart', years: '2003-2005' },
            { name: 'Bayern Munich', years: '2005-2017' }
        ]
    },
    {
        id: 'f-106',
        name: 'Rio Mavuba',
        birthDate: '1984-03-08',
        sport: 'football',
        category: 'historical',
        clubs: [
            { name: 'Girondins de Bordeaux', years: '2003-2007' },
            { name: 'Villarreal CF', years: '2007-2008' },
            { name: 'Lille OSC', years: '2008-2017' },
            { name: 'Sparta Prague', years: '2017-2018' },
            { name: 'FCE Mérignac-Arlac', years: '2018-2019' }
        ]
    },
    {
        id: 'f-107',
        name: 'Eden Hazard',
        birthDate: '1991-01-07',
        sport: 'football',
        category: 'historical',
        clubs: [
            { name: 'Lille OSC', years: '2007-2012' },
            { name: 'Chelsea FC', years: '2012-2019' },
            { name: 'Real Madrid', years: '2019-2023' }
        ]
    },
    {
        id: 'f-108',
        name: 'Moussa Sow',
        birthDate: '1986-01-19',
        sport: 'football',
        category: 'historical',
        clubs: [
            { name: 'Stade Rennais', years: '2004-2010' },
            { name: 'CS Sedan Ardennes', years: '2007-2008' },
            { name: 'Lille OSC', years: '2010-2012' },
            { name: 'Fenerbahçe SK', years: '2012-2015' },
            { name: 'Al-Ahli Dubaï', years: '2015-2017' },
            { name: 'Fenerbahçe SK', years: '2016-2017' },
            { name: 'Bursaspor', years: '2018-2018' },
            { name: 'Shabab Al-Ahli', years: '2018-2019' },
            { name: 'Gaziantep FK', years: '2019-2019' },
            { name: 'Ümraniyespor', years: '2020-2021' }
        ]
    },
    {
        id: 'f-109',
        name: 'Johan Neeskens',
        birthDate: '1951-09-15',
        sport: 'football',
        category: 'historical',
        clubs: [
            { name: 'RCH Heemstede', years: '1968-1970' },
            { name: 'Ajax Amsterdam', years: '1970-1974' },
            { name: 'FC Barcelone', years: '1974-1979' },
            { name: 'New York Cosmos', years: '1979-1984' },
            { name: 'FC Groningue', years: '1984-1985' },
            { name: 'South Florida Sun', years: '1985-1986' },
            { name: 'FC Baar', years: '1987-1990' },
            { name: 'FC Zoug', years: '1990-1991' }
        ]
    },
    {
        id: 'f-110',
        name: 'Alain Giresse',
        birthDate: '1952-08-02',
        sport: 'football',
        category: 'historical',
        clubs: [
            { name: 'Girondins de Bordeaux', years: '1970-1986' },
            { name: 'Olympique de Marseille', years: '1986-1988' }
        ]
    },
    {
        id: 'f-111',
        name: 'Jean Tigana',
        birthDate: '1955-06-23',
        sport: 'football',
        category: 'historical',
        clubs: [
            { name: 'CA Toulon', years: '1975-1978' },
            { name: 'Olympique Lyonnais', years: '1978-1981' },
            { name: 'Girondins de Bordeaux', years: '1981-1989' },
            { name: 'Olympique de Marseille', years: '1989-1991' }
        ]
    },
    {
        id: 'f-112',
        name: 'Luis Fernandez',
        birthDate: '1959-10-02',
        sport: 'football',
        category: 'historical',
        clubs: [
            { name: 'Paris Saint-Germain', years: '1978-1986' },
            { name: 'Racing Club de Paris', years: '1986-1989' },
            { name: 'AS Cannes', years: '1989-1993' }
        ]
    },
    {
        id: 'f-113',
        name: 'Lamine Yamal', birthDate: '2007-07-13', sport: 'football', category: 'active',
        clubs: [
            { name: 'FC Barcelone', years: '2023-' }
        ]
    },
    {
        id: 'f-114', name: 'Vitinha', birthDate: '2000-02-13', sport: 'football', category: 'active',
        clubs: [
            { name: 'FC Porto', years: '2020-2022' },
            { name: 'Wolverhampton Wanderers', years: '2020-2021' },
            { name: 'Paris Saint-Germain', years: '2022-' }
        ]
    },
    {
        id: 'f-115', name: 'Mohamed Salah', birthDate: '1992-06-15', sport: 'football', category: 'active',
        clubs: [
            { name: 'Al Mokawloon Al Arab', years: '2010-2012' },
            { name: 'FC Bâle', years: '2012-2014' },
            { name: 'Chelsea FC', years: '2014-2016' },
            { name: 'Fiorentina', years: '2015' },
            { name: 'AS Rome', years: '2015-2017' },
            { name: 'Liverpool FC', years: '2017-' }
        ]
    },
    {
        id: 'f-116', name: 'Raphinha', birthDate: '1996-12-14', sport: 'football', category: 'active',
        clubs: [
            { name: 'Vitória Guimarães', years: '2016-2018' },
            { name: 'Sporting CP', years: '2018-2019' },
            { name: 'Stade Rennais', years: '2019-2020' },
            { name: 'Leeds United', years: '2020-2022' },
            { name: 'FC Barcelone', years: '2022-' }
        ]
    },
    {
        id: 'f-117', name: 'Achraf Hakimi', birthDate: '1998-11-04', sport: 'football', category: 'active',
        clubs: [
            { name: 'Real Madrid', years: '2017-2020' },
            { name: 'Borussia Dortmund', years: '2018-2020' },
            { name: 'Inter Milan', years: '2020-2021' },
            { name: 'Paris Saint-Germain', years: '2021-' }
        ]
    },
    {
        id: 'f-118', name: 'Cole Palmer', birthDate: '2002-05-06', sport: 'football', category: 'active',
        clubs: [
            { name: 'Manchester City', years: '2020-2023' },
            { name: 'Chelsea FC', years: '2023-' }
        ]
    },
    {
        id: 'f-119', name: 'Gianluigi Donnarumma', birthDate: '1999-02-25', sport: 'football', category: 'active',
        clubs: [
            { name: 'AC Milan', years: '2015-2021' },
            { name: 'Paris Saint-Germain', years: '2021-' }
        ]
    },
    {
        id: 'f-120', name: 'Nuno Mendes', birthDate: '2002-06-19', sport: 'football', category: 'active',
        clubs: [
            { name: 'Sporting CP', years: '2020-2022' },
            { name: 'Paris Saint-Germain', years: '2021-' }
        ]
    },
    {
        id: 'f-121', name: 'Pedri', birthDate: '2002-11-25', sport: 'football', category: 'active',
        clubs: [
            { name: 'Las Palmas', years: '2019-2020' },
            { name: 'FC Barcelone', years: '2020-' }
        ]
    },
    {
        id: 'f-122', name: 'Khvicha Kvaratskhelia', birthDate: '2001-02-12', sport: 'football', category: 'active',
        clubs: [
            { name: 'Dinamo Tbilissi', years: '2017-2018' },
            { name: 'FC Roustavi', years: '2018-2019' },
            { name: 'Lokomotiv Moscou', years: '2019' },
            { name: 'Rubin Kazan', years: '2019-2022' },
            { name: 'Dinamo Batoumi', years: '2022' },
            { name: 'SSC Napoli', years: '2022-2025' },
            { name: 'Paris Saint-Germain', years: '2025-' }
        ]
    },
    {
        id: 'f-123', name: 'Harry Kane', birthDate: '1993-07-28', sport: 'football', category: 'active',
        clubs: [
            { name: 'Tottenham Hotspur', years: '2011-2023' },
            { name: 'Leyton Orient', years: '2011' },
            { name: 'Millwall FC', years: '2012' },
            { name: 'Norwich City', years: '2012-2013' },
            { name: 'Leicester City', years: '2013' },
            { name: 'Bayern Munich', years: '2023-' }
        ]
    },
    {
        id: 'f-124', name: 'Désiré Doué', birthDate: '2005-06-03', sport: 'football', category: 'active',
        clubs: [
            { name: 'Stade Rennais', years: '2022-2024' },
            { name: 'Paris Saint-Germain', years: '2024-' }
        ]
    },
    {
        id: 'f-125', name: 'Viktor Gyökeres', birthDate: '1998-06-04', sport: 'football', category: 'active',
        clubs: [
            { name: 'IF Brommapojkarna', years: '2015-2017' },
            { name: 'Brighton & Hove Albion', years: '2018-2021' },
            { name: 'FC Sankt Pauli', years: '2019-2020' },
            { name: 'Swansea City', years: '2020-2021' },
            { name: 'Coventry City', years: '2021-2023' },
            { name: 'Sporting CP', years: '2023-2025' },
            { name: 'Arsenal FC', years: '2025-' }
        ]
    },
    {
        id: 'f-126', name: 'Vinícius Júnior', birthDate: '2000-07-12', sport: 'football', category: 'active',
        clubs: [
            { name: 'Flamengo', years: '2017-2018' },
            { name: 'Real Madrid', years: '2018-' }
        ]
    },
    {
        id: 'f-127', name: 'Robert Lewandowski', birthDate: '1988-08-21', sport: 'football', category: 'active',
        clubs: [
            { name: 'Znicz Pruszków', years: '2006-2008' },
            { name: 'Lech Poznań', years: '2008-2010' },
            { name: 'Borussia Dortmund', years: '2010-2014' },
            { name: 'Bayern Munich', years: '2014-2022' },
            { name: 'FC Barcelone', years: '2022-' }
        ]
    },
    {
        id: 'f-128', name: 'Scott McTominay', birthDate: '1996-12-08', sport: 'football', category: 'active',
        clubs: [
            { name: 'Manchester United', years: '2017-2024' },
            { name: 'SSC Napoli', years: '2024-' }
        ]
    },
    {
        id: 'f-129', name: 'João Neves', birthDate: '2004-09-27', sport: 'football', category: 'active',
        clubs: [
            { name: 'Benfica Lisbonne', years: '2022-2024' },
            { name: 'Paris Saint-Germain', years: '2024-' }
        ]
    },
    {
        id: 'f-130', name: 'Lautaro Martínez', birthDate: '1997-08-22', sport: 'football', category: 'active',
        clubs: [
            { name: 'Racing Club', years: '2015-2018' },
            { name: 'Inter Milan', years: '2018-' }
        ]
    },
    {
        id: 'f-131', name: 'Serhou Guirassy', birthDate: '1996-03-12', sport: 'football', category: 'active',
        clubs: [
            { name: 'Stade Lavallois', years: '2013-2015' },
            { name: 'Lille OSC', years: '2015-2016' },
            { name: 'AJ Auxerre', years: '2016' },
            { name: 'FC Cologne', years: '2016-2019' },
            { name: 'Amiens SC', years: '2019-2020' },
            { name: 'Stade Rennais', years: '2020-2023' },
            { name: 'VfB Stuttgart', years: '2022-2024' },
            { name: 'Borussia Dortmund', years: '2024-' }
        ]
    },
    {
        id: 'f-132', name: 'Alexis Mac Allister', birthDate: '1998-12-24', sport: 'football', category: 'active',
        clubs: [
            { name: 'Argentinos Juniors', years: '2016-2019' },
            { name: 'Brighton & Hove Albion', years: '2019-2023' },
            { name: 'Argentinos Juniors', years: '2019' },
            { name: 'Boca Juniors', years: '2019-2020' },
            { name: 'Liverpool FC', years: '2023-' }
        ]
    },
    {
        id: 'f-133', name: 'Jude Bellingham', birthDate: '2003-06-29', sport: 'football', category: 'active',
        clubs: [
            { name: 'Birmingham City', years: '2019-2020' },
            { name: 'Borussia Dortmund', years: '2020-2023' },
            { name: 'Real Madrid', years: '2023-' }
        ]
    },
    {
        id: 'f-134', name: 'Fabián Ruiz', birthDate: '1996-04-03', sport: 'football', category: 'active',
        clubs: [
            { name: 'Real Betis', years: '2014-2018' },
            { name: 'Elche CF', years: '2017' },
            { name: 'SSC Napoli', years: '2018-2022' },
            { name: 'Paris Saint-Germain', years: '2022-' }
        ]
    },
    {
        id: 'f-135', name: 'Denzel Dumfries', birthDate: '1996-04-18', sport: 'football', category: 'active',
        clubs: [
            { name: 'Sparta Rotterdam', years: '2014-2017' },
            { name: 'SC Heerenveen', years: '2017-2018' },
            { name: 'PSV Eindhoven', years: '2018-2021' },
            { name: 'Inter Milan', years: '2021-' }
        ]
    },
    {
        id: 'f-136', name: 'Erling Haaland', birthDate: '2000-07-21', sport: 'football', category: 'active',
        clubs: [
            { name: 'Bryne FK', years: '2016' },
            { name: 'Molde FK', years: '2017-2018' },
            { name: 'RB Salzbourg', years: '2019-2020' },
            { name: 'Borussia Dortmund', years: '2020-2022' },
            { name: 'Manchester City', years: '2022-' }
        ]
    },
    {
        id: 'f-137', name: 'Declan Rice', birthDate: '1999-01-14', sport: 'football', category: 'active',
        clubs: [
            { name: 'West Ham United', years: '2017-2023' },
            { name: 'Arsenal FC', years: '2023-' }
        ]
    },
    {
        id: 'f-138', name: 'Virgil van Dijk', birthDate: '1991-07-08', sport: 'football', category: 'active',
        clubs: [
            { name: 'FC Groningue', years: '2011-2013' },
            { name: 'Celtic FC', years: '2013-2015' },
            { name: 'Southampton FC', years: '2015-2018' },
            { name: 'Liverpool FC', years: '2018-' }
        ]
    },
    {
        id: 'f-139', name: 'Florian Wirtz', birthDate: '2003-05-03', sport: 'football', category: 'active',
        clubs: [
            { name: 'Bayer Leverkusen', years: '2020-2025' },
            { name: 'Liverpool FC', years: '2025-' }
        ]
    },
    {
        id: 'f-140', name: 'Michael Olise', birthDate: '2001-12-12', sport: 'football', category: 'active',
        clubs: [
            { name: 'Reading FC', years: '2019-2021' },
            { name: 'Crystal Palace', years: '2021-2024' },
            { name: 'Bayern Munich', years: '2024-' }
        ]
    },
    {
        id: 'f-141', name: 'Phil Foden', birthDate: '2000-05-28', sport: 'football', category: 'active',
        clubs: [
            { name: 'Manchester City', years: '2017-' }
        ]
    },
    {
        id: 'f-142', name: 'Dani Olmo', birthDate: '1998-05-07', sport: 'football', category: 'active',
        clubs: [
            { name: 'Dinamo Zagreb', years: '2014-2020' },
            { name: 'RB Leipzig', years: '2020-2024' },
            { name: 'FC Barcelone', years: '2024-' }
        ]
    },
    {
        id: 'f-143', name: 'Nico Williams', birthDate: '2002-07-12', sport: 'football', category: 'active',
        clubs: [
            { name: 'Athletic Bilbao', years: '2021-' }
        ]
    },
    {
        id: 'f-144', name: 'Granit Xhaka', birthDate: '1992-09-27', sport: 'football', category: 'active',
        clubs: [
            { name: 'FC Bâle', years: '2010-2012' },
            { name: 'Borussia Mönchengladbach', years: '2012-2016' },
            { name: 'Arsenal FC', years: '2016-2023' },
            { name: 'Bayer Leverkusen', years: '2023-2025' },
            { name: 'Sunderland AFC', years: '2025-' }
        ]
    },
    {
        id: 'f-145', name: 'Martin Ødegaard', birthDate: '1998-12-17', sport: 'football', category: 'active',
        clubs: [
            { name: 'Strømsgodset IF', years: '2014' },
            { name: 'Real Madrid', years: '2015-2021' },
            { name: 'SC Heerenveen', years: '2017-2018' },
            { name: 'Vitesse Arnhem', years: '2018-2019' },
            { name: 'Real Sociedad', years: '2019-2020' },
            { name: 'Arsenal FC', years: '2021-' }
        ]
    },
    {
        id: 'f-146', name: 'Hakan Çalhanoğlu', birthDate: '1994-02-08', sport: 'football', category: 'active',
        clubs: [
            { name: 'Karlsruher SC', years: '2011-2013' },
            { name: 'Hambourg SV', years: '2013-2014' },
            { name: 'Bayer Leverkusen', years: '2014-2017' },
            { name: 'AC Milan', years: '2017-2021' },
            { name: 'Inter Milan', years: '2021-' }
        ]
    },
    {
        id: 'f-147', name: 'Bukayo Saka', birthDate: '2001-09-05', sport: 'football', category: 'active',
        clubs: [
            { name: 'Arsenal FC', years: '2018-' }
        ]
    },
    {
        id: 'f-148', name: 'William Saliba', birthDate: '2001-03-24', sport: 'football', category: 'active',
        clubs: [
            { name: 'AS Saint-Étienne', years: '2018-2019' },
            { name: 'Arsenal FC', years: '2019-' },
            { name: 'AS Saint-Étienne', years: '2019-2020' },
            { name: 'OGC Nice', years: '2021' },
            { name: 'Olympique de Marseille', years: '2021-2022' }
        ]
    },
    {
        id: 'f-149', name: 'Mats Hummels', birthDate: '1988-12-16', sport: 'football', category: 'active',
        clubs: [
            { name: 'Bayern Munich', years: '2007-2009' },
            { name: 'Borussia Dortmund', years: '2008-2016' },
            { name: 'Bayern Munich', years: '2016-2019' },
            { name: 'Borussia Dortmund', years: '2019-2024' },
            { name: 'AS Rome', years: '2024-' }
        ]
    },
    {
        id: 'f-150', name: 'Kevin De Bruyne', birthDate: '1991-06-28', sport: 'football', category: 'active',
        clubs: [
            { name: 'KRC Genk', years: '2008-2012' },
            { name: 'Chelsea FC', years: '2012-2014' },
            { name: 'Werder Brême', years: '2012-2013' },
            { name: 'VfL Wolfsburg', years: '2014-2015' },
            { name: 'Manchester City', years: '2015-' }
        ]
    },
    {
        id: 'f-151', name: 'Julián Álvarez', birthDate: '2000-01-31', sport: 'football', category: 'active',
        clubs: [
            { name: 'River Plate', years: '2018-2022' },
            { name: 'Manchester City', years: '2022-2024' },
            { name: 'Atlético de Madrid', years: '2024-' }
        ]
    },
    {
        id: 'f-152', name: 'Victor Osimhen', birthDate: '1998-12-29', sport: 'football', category: 'active',
        clubs: [
            { name: 'VfL Wolfsburg', years: '2017-2019' },
            { name: 'Charleroi SC', years: '2018-2019' },
            { name: 'Lille OSC', years: '2019-2020' },
            { name: 'SSC Napoli', years: '2020-2024' },
            { name: 'Galatasaray SK', years: '2024-' }
        ]
    },
    {
        id: 'f-153', name: 'Bernardo Silva', birthDate: '1994-08-10', sport: 'football', category: 'active',
        clubs: [
            { name: 'Benfica Lisbonne', years: '2013-2015' },
            { name: 'AS Monaco', years: '2014-2017' },
            { name: 'Manchester City', years: '2017-' }
        ]
    },
    {
        id: 'f-154', name: 'İlkay Gündoğan', birthDate: '1990-10-24', sport: 'football', category: 'active',
        clubs: [
            { name: 'FC Nuremberg', years: '2009-2011' },
            { name: 'Borussia Dortmund', years: '2011-2016' },
            { name: 'Manchester City', years: '2016-2023' },
            { name: 'FC Barcelone', years: '2023-2024' },
            { name: 'Manchester City', years: '2024-2025' },
            { name: 'Galatasaray SK', years: '2025-' }
        ]
    },
    {
        id: 'f-155', name: 'Sadio Mané', birthDate: '1992-04-10', sport: 'football', category: 'active',
        clubs: [
            { name: 'FC Metz', years: '2011-2012' },
            { name: 'RB Salzbourg', years: '2012-2014' },
            { name: 'Southampton FC', years: '2014-2016' },
            { name: 'Liverpool FC', years: '2016-2022' },
            { name: 'Bayern Munich', years: '2022-2023' },
            { name: 'Al-Nassr FC', years: '2023-' }
        ]
    },
    {
        id: 'f-156', name: 'Thibaut Courtois', birthDate: '1992-05-11', sport: 'football', category: 'active',
        clubs: [
            { name: 'KRC Genk', years: '2009-2011' },
            { name: 'Atlético de Madrid', years: '2011-2014' }, // Prêt de Chelsea
            { name: 'Chelsea FC', years: '2014-2018' },
            { name: 'Real Madrid', years: '2018-' }
        ]
    },
    {
        id: 'f-157', name: 'Riyad Mahrez', birthDate: '1991-02-21', sport: 'football', category: 'active',
        clubs: [
            { name: 'Quimper Kerfeunteun FC', years: '2009-2010' },
            { name: 'Le Havre AC', years: '2010-2014' },
            { name: 'Leicester City', years: '2014-2018' },
            { name: 'Manchester City', years: '2018-2023' },
            { name: 'Al-Ahli FC', years: '2023-' }
        ]
    },
    {
        id: 'f-158', name: 'Fabinho', birthDate: '1993-10-23', sport: 'football', category: 'active',
        clubs: [
            { name: 'Rio Ave FC', years: '2012-2015' },
            { name: 'Real Madrid', years: '2012-2013' },
            { name: 'AS Monaco', years: '2013-2018' },
            { name: 'Liverpool FC', years: '2018-2023' },
            { name: 'Al-Ittihad Club', years: '2023-' }
        ]
    },
    {
        id: 'f-159', name: 'Trent Alexander-Arnold', birthDate: '1998-10-07', sport: 'football', category: 'active',
        clubs: [
            { name: 'Liverpool FC', years: '2016-2025' },
            { name: 'Real Madrid', years: '2025-' }
        ]
    },
    {
        id: 'f-160', name: 'Joshua Kimmich', birthDate: '1995-02-08', sport: 'football', category: 'active',
        clubs: [
            { name: 'RB Leipzig', years: '2013-2015' },
            { name: 'Bayern Munich', years: '2015-' }
        ]
    },
    {
        id: 'f-161', name: 'Hidetoshi Nakata', birthDate: '1977-01-22', sport: 'football', category: 'historical',
        clubs: [
            { name: 'Bellmare Hiratsuka', years: '1995-1998' },
            { name: 'AC Pérouse', years: '1998-2000' },
            { name: 'AS Rome', years: '2000-2001' },
            { name: 'Parma AC', years: '2001-2004' },
            { name: 'Bologne FC', years: '2004' },
            { name: 'ACF Fiorentina', years: '2004-2006' },
            { name: 'Bolton Wanderers', years: '2005-2006' }
        ]
    },
    {
        id: 'f-162', name: 'Samir Nasri', birthDate: '1987-06-26', sport: 'football', category: 'historical',
        clubs: [
            { name: 'Olympique de Marseille', years: '2004-2008' },
            { name: 'Arsenal FC', years: '2008-2011' },
            { name: 'Manchester City', years: '2011-2017' },
            { name: 'Séville FC', years: '2016-2017' },
            { name: 'Antalyaspor', years: '2017-2018' },
            { name: 'West Ham United', years: '2018-2019' },
            { name: 'RSC Anderlecht', years: '2019-2020' }
        ]
    },
    {
        id: 'f-163', name: 'David Trezeguet', birthDate: '1977-10-15', sport: 'football', category: 'historical',
        clubs: [
            { name: 'CA Platense', years: '1994-1995' },
            { name: 'AS Monaco', years: '1995-2000' },
            { name: 'Juventus FC', years: '2000-2010' },
            { name: 'Hércules Alicante', years: '2010-2011' },
            { name: 'Baniyas SC', years: '2011' },
            { name: 'River Plate', years: '2012-2014' },
            { name: 'Newell\'s Old Boys', years: '2013-2014' },
            { name: 'FC Pune City', years: '2014' }
        ]
    },
    {
        id: 'f-164', name: 'Sylvain Wiltord', birthDate: '1974-05-10', sport: 'football', category: 'historical',
        clubs: [
            { name: 'Stade Rennais', years: '1993-1997' },
            { name: 'Girondins de Bordeaux', years: '1997-2000' },
            { name: 'Arsenal FC', years: '2000-2004' },
            { name: 'Olympique Lyonnais', years: '2004-2007' },
            { name: 'Stade Rennais', years: '2007-2009' },
            { name: 'Olympique de Marseille', years: '2009' },
            { name: 'FC Metz', years: '2010' },
            { name: 'FC Nantes', years: '2011-2012' }
        ]
    },
    {
        id: 'f-165', name: 'Éric Cantona', birthDate: '1966-05-24', sport: 'football', category: 'historical',
        clubs: [
            { name: 'AJ Auxerre', years: '1983-1988' },
            { name: 'FC Martigues', years: '1985-1986' },
            { name: 'Olympique de Marseille', years: '1988-1989' },
            { name: 'Girondins de Bordeaux', years: '1989' },
            { name: 'Montpellier HSC', years: '1989-1990' },
            { name: 'Olympique de Marseille', years: '1990-1991' },
            { name: 'Nîmes Olympique', years: '1991-1992' },
            { name: 'Leeds United', years: '1992' },
            { name: 'Manchester United', years: '1992-1997' }
        ]
    },
    {
        id: 'f-166', name: 'Romelu Lukaku', birthDate: '1993-05-13', sport: 'football', category: 'active',
        clubs: [
            { name: 'RSC Anderlecht', years: '2009-2011' },
            { name: 'Chelsea FC', years: '2011-2014' },
            { name: 'West Bromwich Albion', years: '2012-2013' },
            { name: 'Everton FC', years: '2013-2017' },
            { name: 'Manchester United', years: '2017-2019' },
            { name: 'Inter Milan', years: '2019-2021' },
            { name: 'Chelsea FC', years: '2021-2024' },
            { name: 'Inter Milan', years: '2022-2023' },
            { name: 'AS Rome', years: '2023-2024' },
            { name: 'SSC Napoli', years: '2024-' }
        ]
    },
    {
        id: 'f-167', name: 'Neymar Jr', birthDate: '1992-02-05', sport: 'football', category: 'active',
        clubs: [
            { name: 'Santos FC', years: '2009-2013' },
            { name: 'FC Barcelone', years: '2013-2017' },
            { name: 'Paris Saint-Germain', years: '2017-2023' },
            { name: 'Al-Hilal FC', years: '2023-2025' },
            { name: 'Santos FC', years: '2025-' }
        ]
    },
    {
        id: 'f-168', name: 'Edin Džeko', birthDate: '1986-03-17', sport: 'football', category: 'active',
        clubs: [
            { name: 'FK Željezničar Sarajevo', years: '2003-2005' },
            { name: 'FK Teplice', years: '2005-2007' },
            { name: 'Ústí nad Labem', years: '2005' },
            { name: 'VfL Wolfsburg', years: '2007-2011' },
            { name: 'Manchester City', years: '2011-2016' },
            { name: 'AS Rome', years: '2015-2021' },
            { name: 'Inter Milan', years: '2021-2023' },
            { name: 'Fenerbahçe SK', years: '2023-2025' },
            { name: 'ACF Fiorentina', years: '2025-2026' },
            { name: 'FC Schalke 04', years: '2026-' }
        ]
    },
    {
        id: 'f-169', name: 'Miroslav Klose', birthDate: '1978-06-09', sport: 'football', category: 'historical',
        clubs: [
            { name: 'FC 08 Homburg', years: '1998-1999' },
            { name: 'FC Kaiserslautern', years: '1999-2004' },
            { name: 'Werder Brême', years: '2004-2007' },
            { name: 'Bayern Munich', years: '2007-2011' },
            { name: 'SS Lazio', years: '2011-2016' }
        ]
    },
    {
        id: 'f-170', name: 'Luis Suárez', birthDate: '1987-01-24', sport: 'football', category: 'active',
        clubs: [
            { name: 'Nacional', years: '2005-2006' },
            { name: 'FC Groningue', years: '2006-2007' },
            { name: 'Ajax Amsterdam', years: '2007-2011' },
            { name: 'Liverpool FC', years: '2011-2014' },
            { name: 'FC Barcelone', years: '2014-2020' },
            { name: 'Atlético de Madrid', years: '2020-2022' },
            { name: 'Nacional', years: '2022' },
            { name: 'Grêmio Porto Alegre', years: '2023' },
            { name: 'Inter Miami', years: '2024-' }
        ]
    },
    {
        id: 'f-171', name: 'Zlatan Ibrahimović', birthDate: '1981-10-03', sport: 'football', category: 'historical',
        clubs: [
            { name: 'Malmö FF', years: '1999-2001' },
            { name: 'Ajax Amsterdam', years: '2001-2004' },
            { name: 'Juventus FC', years: '2004-2006' },
            { name: 'Inter Milan', years: '2006-2009' },
            { name: 'FC Barcelone', years: '2009-2010' },
            { name: 'AC Milan', years: '2010-2012' },
            { name: 'Paris Saint-Germain', years: '2012-2016' },
            { name: 'Manchester United', years: '2016-2018' },
            { name: 'LA Galaxy', years: '2018-2019' },
            { name: 'AC Milan', years: '2020-2023' }
        ]
    },
    {
        id: 'f-172', name: 'Edinson Cavani', birthDate: '1987-02-14', sport: 'football', category: 'active',
        clubs: [
            { name: 'Danubio FC', years: '2005-2007' },
            { name: 'Palerme FC', years: '2007-2010' },
            { name: 'SSC Napoli', years: '2010-2013' },
            { name: 'Paris Saint-Germain', years: '2013-2020' },
            { name: 'Manchester United', years: '2020-2022' },
            { name: 'Valence CF', years: '2022-2023' },
            { name: 'Boca Juniors', years: '2023-' }
        ]
    },
    {
        id: 'f-173', name: 'Olivier Giroud', birthDate: '1986-09-30', sport: 'football', category: 'active',
        clubs: [
            { name: 'Grenoble Foot 38', years: '2005-2008' },
            { name: 'Istres FC', years: '2007-2008' },
            { name: 'Tours FC', years: '2008-2010' },
            { name: 'Montpellier HSC', years: '2010-2012' },
            { name: 'Arsenal FC', years: '2012-2018' },
            { name: 'Chelsea FC', years: '2018-2021' },
            { name: 'AC Milan', years: '2021-2024' },
            { name: 'Los Angeles FC', years: '2024-2025' },
            { name: 'Lille OSC', years: '2025-' }
        ]
    },
    {
        id: 'f-174', name: 'Gabriel Batistuta', birthDate: '1969-02-01', sport: 'football', category: 'historical',
        clubs: [
            { name: 'Newell\'s Old Boys', years: '1988-1989' },
            { name: 'River Plate', years: '1989-1990' },
            { name: 'Boca Juniors', years: '1990-1991' },
            { name: 'ACF Fiorentina', years: '1991-2000' },
            { name: 'AS Rome', years: '2000-2003' },
            { name: 'Inter Milan', years: '2003' },
            { name: 'Al-Arabi SC', years: '2003-2005' }
        ]
    },
    {
        id: 'f-175', name: 'Dimitar Berbatov', birthDate: '1981-01-30', sport: 'football', category: 'historical',
        clubs: [
            { name: 'CSKA Sofia', years: '1998-2001' },
            { name: 'Bayer Leverkusen', years: '2001-2006' },
            { name: 'Tottenham Hotspur', years: '2006-2008' },
            { name: 'Manchester United', years: '2008-2012' },
            { name: 'Fulham FC', years: '2012-2014' },
            { name: 'AS Monaco', years: '2014-2015' },
            { name: 'PAOK Salonique', years: '2015-2016' },
            { name: 'Kerala Blasters', years: '2017-2018' }
        ]
    },
    {
        id: 'f-176', name: 'Alexis Sánchez', birthDate: '1988-12-19', sport: 'football', category: 'active',
        clubs: [
            { name: 'Cobreloa', years: '2005-2006' },
            { name: 'Udinese Calcio', years: '2006-2011' },
            { name: 'Colo-Colo', years: '2006-2007' },
            { name: 'River Plate', years: '2007-2008' },
            { name: 'FC Barcelone', years: '2011-2014' },
            { name: 'Arsenal FC', years: '2014-2018' },
            { name: 'Manchester United', years: '2018-2020' },
            { name: 'Inter Milan', years: '2019-2022' },
            { name: 'Olympique de Marseille', years: '2022-2023' },
            { name: 'Inter Milan', years: '2023-2024' },
            { name: 'Udinese Calcio', years: '2024-2025' },
            { name: 'Séville FC', years: '2025-' }
        ]
    },
    {
        id: 'f-177', name: 'Radamel Falcao', birthDate: '1986-02-10', sport: 'football', category: 'active',
        clubs: [
            { name: 'River Plate', years: '2004-2009' },
            { name: 'FC Porto', years: '2009-2011' },
            { name: 'Atlético de Madrid', years: '2011-2013' },
            { name: 'AS Monaco', years: '2013-2019' },
            { name: 'Manchester United', years: '2014-2015' },
            { name: 'Chelsea FC', years: '2015-2016' },
            { name: 'Galatasaray SK', years: '2019-2021' },
            { name: 'Rayo Vallecano', years: '2021-2024' },
            { name: 'Millonarios FC', years: '2024-' }
        ]
    },
    {
        id: 'f-178', name: 'Davor Šuker', birthDate: '1968-01-01', sport: 'football', category: 'historical',
        clubs: [
            { name: 'NK Osijek', years: '1984-1989' },
            { name: 'Dinamo Zagreb', years: '1989-1991' },
            { name: 'Séville FC', years: '1991-1996' },
            { name: 'Real Madrid', years: '1996-1999' },
            { name: 'Arsenal FC', years: '1999-2000' },
            { name: 'West Ham United', years: '2000-2001' },
            { name: 'TSV 1860 Munich', years: '2001-2003' }
        ]
    },
    {
        id: 'f-179', name: 'Alexander Frei', birthDate: '1979-07-15', sport: 'football', category: 'historical',
        clubs: [
            { name: 'FC Bâle', years: '1997-1998' },
            { name: 'FC Thoune', years: '1998-1999' },
            { name: 'FC Lucerne', years: '1999-2000' },
            { name: 'Servette FC', years: '2000-2003' },
            { name: 'Stade Rennais', years: '2003-2006' },
            { name: 'Borussia Dortmund', years: '2006-2009' },
            { name: 'FC Bâle', years: '2009-2013' }
        ]
    },
    {
        id: 'f-180', name: 'Hakan Şükür', birthDate: '1971-09-01', sport: 'football', category: 'historical',
        clubs: [
            { name: 'Sakaryaspor', years: '1987-1990' },
            { name: 'Bursaspor', years: '1990-1992' },
            { name: 'Galatasaray SK', years: '1992-1995' },
            { name: 'Torino FC', years: '1995' },
            { name: 'Galatasaray SK', years: '1995-2000' },
            { name: 'Inter Milan', years: '2000-2001' },
            { name: 'Parma AC', years: '2002' },
            { name: 'Blackburn Rovers', years: '2002-2003' },
            { name: 'Galatasaray SK', years: '2003-2008' }
        ]
    },
    {
        id: 'f-181',
        name: 'Toni Kroos',
        birthDate: '1990-01-04',
        sport: 'football',
        category: 'historical',
        clubs: [
            { name: 'Bayern Munich', years: '2007-2009' },
            { name: 'Bayer Leverkusen', years: '2009-2010' },
            { name: 'Bayern Munich', years: '2010-2014' },
            { name: 'Real Madrid', years: '2014-2024' }
        ]
    },
    {
        id: 'f-182',
        name: 'Seydou Keita',
        birthDate: '1980-01-16',
        sport: 'football',
        category: 'historical',
        clubs: [
            { name: 'Olympique de Marseille', years: '1999-2000' },
            { name: 'FC Lorient', years: '2000-2002' },
            { name: 'RC Lens', years: '2002-2007' },
            { name: 'Séville FC', years: '2007-2008' },
            { name: 'FC Barcelone', years: '2008-2012' },
            { name: 'Dalian Aerbin', years: '2012-2013' },
            { name: 'Valence CF', years: '2014' },
            { name: 'AS Rome', years: '2014-2016' },
            { name: 'El Jaish SC', years: '2016-2017' }
        ]
    },
    {
        id: 'f-183',
        name: 'Pelé',
        birthDate: '1940-10-23',
        sport: 'football',
        category: 'historical',
        clubs: [
            { name: 'Santos FC', years: '1956-1974' },
            { name: 'New York Cosmos', years: '1975-1977' }
        ]
    },
    {
        id: 'f-184',
        name: 'Garrincha',
        birthDate: '1933-10-28',
        sport: 'football',
        category: 'historical',
        clubs: [
            { name: 'Botafogo FR', years: '1953-1965' },
            { name: 'SC Corinthians', years: '1966' },
            { name: 'Atlético Junior', years: '1968' },
            { name: 'Flamengo', years: '1968-1969' },
            { name: 'Olaria AC', years: '1972' }
        ]
    },
    {
        id: 'f-185',
        name: 'Zico',
        birthDate: '1953-03-03',
        sport: 'football',
        category: 'historical',
        clubs: [
            { name: 'Flamengo', years: '1971-1983' },
            { name: 'Udinese Calcio', years: '1983-1985' },
            { name: 'Flamengo', years: '1985-1989' },
            { name: 'Kashima Antlers', years: '1991-1994' }
        ]
    },
    {
        id: 'f-186',
        name: 'Pablo Aimar',
        birthDate: '1979-11-03',
        sport: 'football',
        category: 'historical',
        clubs: [
            { name: 'River Plate', years: '1996-2001' },
            { name: 'Valence CF', years: '2001-2006' },
            { name: 'Real Saragosse', years: '2006-2008' },
            { name: 'Benfica Lisbonne', years: '2008-2013' },
            { name: 'Johor Darul Ta\'zim', years: '2013-2014' },
            { name: 'River Plate', years: '2015' },
            { name: 'Estudiantes de Río Cuarto', years: '2018' }
        ]
    },
    {
        id: 'f-187',
        name: 'Javier Saviola',
        birthDate: '1981-12-11',
        sport: 'football',
        category: 'historical',
        clubs: [
            { name: 'River Plate', years: '1998-2001' },
            { name: 'FC Barcelone', years: '2001-2004' },
            { name: 'AS Monaco', years: '2004-2005' },
            { name: 'Séville FC', years: '2005-2006' },
            { name: 'FC Barcelone', years: '2006-2007' },
            { name: 'Real Madrid', years: '2007-2009' },
            { name: 'Benfica Lisbonne', years: '2009-2012' },
            { name: 'Málaga CF', years: '2012-2013' },
            { name: 'Olympiakos', years: '2013-2014' },
            { name: 'Hellas Vérone', years: '2014-2015' },
            { name: 'River Plate', years: '2015-2016' }
        ]
    },
    {
        id: 'f-188',
        name: 'Romário',
        birthDate: '1966-01-29',
        sport: 'football',
        category: 'historical',
        clubs: [
            { name: 'Vasco da Gama', years: '1985-1988' },
            { name: 'PSV Eindhoven', years: '1988-1993' },
            { name: 'FC Barcelone', years: '1993-1995' },
            { name: 'Flamengo', years: '1995-1996' },
            { name: 'Valence CF', years: '1996-1997' },
            { name: 'Flamengo', years: '1997-1999' },
            { name: 'Vasco da Gama', years: '1999-2002' },
            { name: 'Fluminense', years: '2002-2004' },
            { name: 'Al-Sadd', years: '2003' },
            { name: 'Vasco da Gama', years: '2005-2006' },
            { name: 'Miami FC', years: '2006-2007' },
            { name: 'Adelaide United', years: '2006' },
            { name: 'Vasco da Gama', years: '2007' },
            { name: 'Fluminense', years: '2007-2008' },
            { name: 'América-RJ', years: '2009' },
            { name: 'América-RJ', years: '2024' },
        ]
    },
    {
        id: 'f-189',
        name: 'Bebeto',
        birthDate: '1964-02-16',
        sport: 'football',
        category: 'historical',
        clubs: [
            { name: 'Vitória SC', years: '1982' },
            { name: 'Flamengo', years: '1983-1989' },
            { name: 'Vasco da Gama', years: '1989-1992' },
            { name: 'Deportivo La Corogne', years: '1992-1996' },
            { name: 'Flamengo', years: '1996' },
            { name: 'Séville FC', years: '1997' },
            { name: 'Vitória SC', years: '1997' },
            { name: 'Cruzeiro EC', years: '1997' },
            { name: 'Botafogo FR', years: '1998-1999' },
            { name: 'Toros Neza', years: '1999' },
            { name: 'Kashima Antlers', years: '2000' },
            { name: 'Vitória SC', years: '2000' },
            { name: 'Vasco da Gama', years: '2001' },
            { name: 'Al-Ittihad', years: '2002' }
        ]
    },
    {
        id: 'f-190',
        name: 'Adriano',
        birthDate: '1982-02-17',
        sport: 'football',
        category: 'historical',
        clubs: [
            { name: 'Flamengo', years: '2000-2001' },
            { name: 'Inter Milan', years: '2001-2002' },
            { name: 'Fiorentina', years: '2002' },
            { name: 'Parma AC', years: '2002-2004' },
            { name: 'Inter Milan', years: '2004-2009' },
            { name: 'São Paulo FC', years: '2008-2009' },
            { name: 'Flamengo', years: '2009-2010' },
            { name: 'AS Rome', years: '2010-2011' },
            { name: 'Corinthians', years: '2011-2012' },
            { name: 'Flamengo', years: '2012-2014' },
            { name: 'Atlético Paranaense', years: '2014' },
            { name: 'Miami United FC', years: '2016' }
        ]
    },
    {
        id: 'f-191',
        name: 'Thomas Müller',
        birthDate: '1989-09-13',
        sport: 'football',
        category: 'active',
        clubs: [
            { name: 'Bayern Munich', years: '2008-2025' },
            { name: 'Vancouver Whitecaps', years: '2025-' }
        ]
    },
    {
        id: 'f-192',
        name: 'Franck Ribéry',
        birthDate: '1983-04-07',
        sport: 'football',
        category: 'historical',
        clubs: [
            { name: 'US Boulogne', years: '2000-2002' },
            { name: 'Olympique d\'Alès', years: '2002-2003' },
            { name: 'Stade Brestois', years: '2003-2004' },
            { name: 'FC Metz', years: '2004-2005' },
            { name: 'Galatasaray SK', years: '2005' },
            { name: 'Olympique de Marseille', years: '2005-2007' },
            { name: 'Bayern Munich', years: '2007-2019' },
            { name: 'ACF Fiorentina', years: '2019-2021' },
            { name: 'US Salernitana', years: '2021-2022' }
        ]
    },
    {
        id: 'f-193',
        name: 'Arjen Robben',
        birthDate: '1984-01-23',
        sport: 'football',
        category: 'historical',
        clubs: [
            { name: 'FC Groningue', years: '2000-2002' },
            { name: 'PSV Eindhoven', years: '2002-2004' },
            { name: 'Chelsea FC', years: '2004-2007' },
            { name: 'Real Madrid', years: '2007-2009' },
            { name: 'Bayern Munich', years: '2009-2019' },
            { name: 'FC Groningue', years: '2020-2021' }
        ]
    },
    {
        id: 'f-194',
        name: 'Diego Godín',
        birthDate: '1986-02-16',
        sport: 'football',
        category: 'historical',
        clubs: [
            { name: 'CA Cerro', years: '2003-2006' },
            { name: 'Club Nacional', years: '2006-2007' },
            { name: 'Villarreal CF', years: '2007-2010' },
            { name: 'Atlético de Madrid', years: '2010-2019' },
            { name: 'Inter Milan', years: '2019-2020' },
            { name: 'Cagliari Calcio', years: '2020-2022' },
            { name: 'Atlético Mineiro', years: '2022' },
            { name: 'Vélez Sarsfield', years: '2022-2023' },
            { name: 'Porongos', years: '2024' }
        ]
    },
    {
        id: 'f-195',
        name: 'Ángel Di María',
        birthDate: '1988-02-14',
        sport: 'football',
        category: 'active',
        clubs: [
            { name: 'Rosario Central', years: '2005-2007' },
            { name: 'Benfica Lisbonne', years: '2007-2010' },
            { name: 'Real Madrid', years: '2010-2014' },
            { name: 'Manchester United', years: '2014-2015' },
            { name: 'Paris Saint-Germain', years: '2015-2022' },
            { name: 'Juventus FC', years: '2022-2023' },
            { name: 'Benfica Lisbonne', years: '2023-2025' },
            { name: 'Rosario Central', years: '2025-' }
        ]
    },
    {
        id: 'f-196',
        name: 'Miralem Pjanić',
        birthDate: '1990-04-02',
        sport: 'football',
        category: 'historical',
        clubs: [
            { name: 'FC Metz', years: '2007-2008' },
            { name: 'Olympique Lyonnais', years: '2008-2011' },
            { name: 'AS Rome', years: '2011-2016' },
            { name: 'Juventus FC', years: '2016-2020' },
            { name: 'FC Barcelone', years: '2020-2022' },
            { name: 'Beşiktaş JK', years: '2021-2022' },
            { name: 'Sharjah FC', years: '2022-2024' },
            { name: 'CSKA Moscou', years: '2024-2025' }
        ]
    },
    {
        id: 'f-197',
        name: 'Carlos Tévez',
        birthDate: '1984-02-05',
        sport: 'football',
        category: 'historical',
        clubs: [
            { name: 'Boca Juniors', years: '2001-2004' },
            { name: 'SC Corinthians', years: '2005-2006' },
            { name: 'West Ham United', years: '2006-2007' },
            { name: 'Manchester United', years: '2007-2009' },
            { name: 'Manchester City', years: '2009-2013' },
            { name: 'Juventus FC', years: '2013-2015' },
            { name: 'Boca Juniors', years: '2015-2016' },
            { name: 'Shanghai Shenhua', years: '2017' },
            { name: 'Boca Juniors', years: '2018-2021' }
        ]
    },
    {
        id: 'f-198',
        name: 'Isco',
        birthDate: '1992-04-21',
        sport: 'football',
        category: 'active',
        clubs: [
            { name: 'Valence CF', years: '2010-2011' },
            { name: 'Málaga CF', years: '2011-2013' },
            { name: 'Real Madrid', years: '2013-2022' },
            { name: 'Séville FC', years: '2022' },
            { name: 'Real Betis', years: '2023-' }
        ]
    },
    {
        id: 'f-199',
        name: 'Pedro',
        birthDate: '1987-07-28',
        sport: 'football',
        category: 'active',
        clubs: [
            { name: 'FC Barcelone', years: '2008-2015' },
            { name: 'Chelsea FC', years: '2015-2020' },
            { name: 'AS Rome', years: '2020-2021' },
            { name: 'SS Lazio', years: '2021-' }
        ]
    },
    {
        id: 'f-200',
        name: 'Frank Lampard',
        birthDate: '1978-06-20',
        sport: 'football',
        category: 'historical',
        clubs: [
            { name: 'West Ham United', years: '1995-2001' },
            { name: 'Swansea City', years: '1995-1996' },
            { name: 'Chelsea FC', years: '2001-2014' },
            { name: 'Manchester City', years: '2014-2015' },
            { name: 'New York City FC', years: '2015-2016' }
        ]
    }

]