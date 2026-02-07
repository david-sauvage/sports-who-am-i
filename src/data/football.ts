import type { Player } from '../types';

export const footballPlayers: Player[] = [
    // Legends
    {
        id: 'f-1', name: 'Zinedine Zidane', birthDate: '1972-06-23', sport: 'football',
        clubs: [{ name: 'AS Cannes', years: '1989-1992' }, { name: 'Bordeaux', years: '1992-1996' }, { name: 'Juventus', years: '1996-2001' }, { name: 'Real Madrid', years: '2001-2006' }]
    },
    {
        id: 'f-2', name: 'Pelé', birthDate: '1940-10-23', sport: 'football',
        clubs: [{ name: 'Santos', years: '1956-1974' }, { name: 'New York Cosmos', years: '1975-1977' }]
    },
    {
        id: 'f-3', name: 'Diego Maradona', birthDate: '1960-10-30', sport: 'football',
        clubs: [{ name: 'Argentinos Juniors', years: '1976-1981' }, { name: 'Boca Juniors', years: '1981-1982' }, { name: 'Barcelona', years: '1982-1984' }, { name: 'Napoli', years: '1984-1991' }, { name: 'Sevilla', years: '1992-1993' }]
    },
    {
        id: 'f-4', name: 'Johan Cruyff', birthDate: '1947-04-25', sport: 'football',
        clubs: [{ name: 'Ajax', years: '1964-1973' }, { name: 'Barcelona', years: '1973-1978' }, { name: 'Los Angeles Aztecs', years: '1979-1980' }, { name: 'Feyenoord', years: '1983-1984' }]
    },
    {
        id: 'f-5', name: 'Michel Platini', birthDate: '1955-06-21', sport: 'football',
        clubs: [{ name: 'Nancy', years: '1972-1979' }, { name: 'Saint-Étienne', years: '1979-1982' }, { name: 'Juventus', years: '1982-1987' }]
    },
    {
        id: 'f-6', name: 'Ronaldo Nazário', birthDate: '1976-09-18', sport: 'football',
        clubs: [{ name: 'Cruzeiro', years: '1993-1994' }, { name: 'PSV', years: '1994-1996' }, { name: 'Barcelona', years: '1996-1997' }, { name: 'Inter Milan', years: '1997-2002' }, { name: 'Real Madrid', years: '2002-2007' }, { name: 'AC Milan', years: '2007-2008' }, { name: 'Corinthians', years: '2009-2011' }]
    },
    {
        id: 'f-7', name: 'Ronaldinho', birthDate: '1980-03-21', sport: 'football',
        clubs: [{ name: 'Grêmio', years: '1998-2001' }, { name: 'PSG', years: '2001-2003' }, { name: 'Barcelona', years: '2003-2008' }, { name: 'AC Milan', years: '2008-2011' }, { name: 'Flamengo', years: '2011-2012' }]
    },
    {
        id: 'f-8', name: 'Thierry Henry', birthDate: '1977-08-17', sport: 'football',
        clubs: [{ name: 'Monaco', years: '1994-1999' }, { name: 'Juventus', years: '1999' }, { name: 'Arsenal', years: '1999-2007' }, { name: 'Barcelona', years: '2007-2010' }, { name: 'New York Red Bulls', years: '2010-2014' }]
    },
    {
        id: 'f-9', name: 'Zlatan Ibrahimović', birthDate: '1981-10-03', sport: 'football',
        clubs: [{ name: 'Malmö FF', years: '1999-2001' }, { name: 'Ajax', years: '2001-2004' }, { name: 'Juventus', years: '2004-2006' }, { name: 'Inter Milan', years: '2006-2009' }, { name: 'Barcelona', years: '2009-2011' }, { name: 'AC Milan', years: '2010-2012' }, { name: 'PSG', years: '2012-2016' }, { name: 'Man Utd', years: '2016-2018' }, { name: 'LA Galaxy', years: '2018-2019' }, { name: 'AC Milan', years: '2020-2023' }]
    },
    {
        id: 'f-10', name: 'Andrés Iniesta', birthDate: '1984-05-11', sport: 'football',
        clubs: [{ name: 'Barcelona', years: '2002-2018' }, { name: 'Vissel Kobe', years: '2018-2023' }]
    },
    // Modern Stars
    {
        id: 'f-11', name: 'Lionel Messi', birthDate: '1987-06-24', sport: 'football',
        clubs: [{ name: 'Barcelona', years: '2004-2021' }, { name: 'PSG', years: '2021-2023' }, { name: 'Inter Miami', years: '2023-' }]
    },
    {
        id: 'f-12', name: 'Cristiano Ronaldo', birthDate: '1985-02-05', sport: 'football',
        clubs: [{ name: 'Sporting CP', years: '2002-2003' }, { name: 'Man Utd', years: '2003-2009' }, { name: 'Real Madrid', years: '2009-2018' }, { name: 'Juventus', years: '2018-2021' }, { name: 'Man Utd', years: '2021-2022' }, { name: 'Al Nassr', years: '2023-' }]
    },
    {
        id: 'f-13', name: 'Kylian Mbappé', birthDate: '1998-12-20', sport: 'football',
        clubs: [{ name: 'Monaco', years: '2015-2018' }, { name: 'PSG', years: '2017-2024' }, { name: 'Real Madrid', years: '2024-' }]
    },
    {
        id: 'f-14', name: 'Erling Haaland', birthDate: '2000-07-21', sport: 'football',
        clubs: [{ name: 'Molde', years: '2017-2019' }, { name: 'Salzburg', years: '2019-2020' }, { name: 'Dortmund', years: '2020-2022' }, { name: 'Man City', years: '2022-' }]
    },
    {
        id: 'f-15', name: 'Kevin De Bruyne', birthDate: '1991-06-28', sport: 'football',
        clubs: [{ name: 'Genk', years: '2008-2012' }, { name: 'Chelsea', years: '2012-2014' }, { name: 'Wolfsburg', years: '2014-2015' }, { name: 'Man City', years: '2015-' }]
    },
    {
        id: 'f-16', name: 'Luka Modrić', birthDate: '1985-09-09', sport: 'football',
        clubs: [{ name: 'Dinamo Zagreb', years: '2003-2008' }, { name: 'Tottenham', years: '2008-2012' }, { name: 'Real Madrid', years: '2012-' }]
    },
    {
        id: 'f-17', name: 'Karim Benzema', birthDate: '1987-12-19', sport: 'football',
        clubs: [{ name: 'Lyon', years: '2004-2009' }, { name: 'Real Madrid', years: '2009-2023' }, { name: 'Al-Ittihad', years: '2023-' }]
    },
    {
        id: 'f-18', name: 'Robert Lewandowski', birthDate: '1988-08-21', sport: 'football',
        clubs: [{ name: 'Lech Poznań', years: '2008-2010' }, { name: 'Dortmund', years: '2010-2014' }, { name: 'Bayern Munich', years: '2014-2022' }, { name: 'Barcelona', years: '2022-' }]
    },
    {
        id: 'f-19', name: 'Neymar', birthDate: '1992-02-05', sport: 'football',
        clubs: [{ name: 'Santos', years: '2009-2013' }, { name: 'Barcelona', years: '2013-2017' }, { name: 'PSG', years: '2017-2023' }, { name: 'Al Hilal', years: '2023-' }]
    },
    {
        id: 'f-20', name: 'Mohamed Salah', birthDate: '1992-06-15', sport: 'football',
        clubs: [{ name: 'Basel', years: '2012-2014' }, { name: 'Chelsea', years: '2014-2016' }, { name: 'Roma', years: '2016-2017' }, { name: 'Liverpool', years: '2017-' }]
    },
    {
        id: 'f-21', name: 'Sadio Mané', birthDate: '1992-04-10', sport: 'football',
        clubs: [{ name: 'Metz', years: '2011-2012' }, { name: 'Salzburg', years: '2012-2014' }, { name: 'Southampton', years: '2014-2016' }, { name: 'Liverpool', years: '2016-2022' }, { name: 'Bayern Munich', years: '2022-2023' }, { name: 'Al Nassr', years: '2023-' }]
    },
    {
        id: 'f-22', name: 'Sergio Ramos', birthDate: '1986-03-30', sport: 'football',
        clubs: [{ name: 'Sevilla', years: '2004-2005' }, { name: 'Real Madrid', years: '2005-2021' }, { name: 'PSG', years: '2021-2023' }, { name: 'Sevilla', years: '2023-2024' }]
    },
    {
        id: 'f-23', name: 'Manuel Neuer', birthDate: '1986-03-27', sport: 'football',
        clubs: [{ name: 'Schalke 04', years: '2006-2011' }, { name: 'Bayern Munich', years: '2011-' }]
    },
    {
        id: 'f-24', name: 'Gareth Bale', birthDate: '1989-07-16', sport: 'football',
        clubs: [{ name: 'Southampton', years: '2006-2007' }, { name: 'Tottenham', years: '2007-2013' }, { name: 'Real Madrid', years: '2013-2022' }, { name: 'LAFC', years: '2022-2023' }]
    },
    {
        id: 'f-25', name: 'Eden Hazard', birthDate: '1991-01-07', sport: 'football',
        clubs: [{ name: 'Lille', years: '2007-2012' }, { name: 'Chelsea', years: '2012-2019' }, { name: 'Real Madrid', years: '2019-2023' }]
    },
    {
        id: 'f-26', name: 'Toni Kroos', birthDate: '1990-01-04', sport: 'football',
        clubs: [{ name: 'Bayern Munich', years: '2007-2014' }, { name: 'Leverkusen', years: '2009-2010' }, { name: 'Real Madrid', years: '2014-2024' }]
    },
    {
        id: 'f-27', name: 'Harry Kane', birthDate: '1993-07-28', sport: 'football',
        clubs: [{ name: 'Tottenham', years: '2009-2023' }, { name: 'Bayern Munich', years: '2023-' }]
    },
    {
        id: 'f-28', name: 'Virgil van Dijk', birthDate: '1991-07-08', sport: 'football',
        clubs: [{ name: 'Groningen', years: '2011-2013' }, { name: 'Celtic', years: '2013-2015' }, { name: 'Southampton', years: '2015-2018' }, { name: 'Liverpool', years: '2018-' }]
    },
    {
        id: 'f-29', name: 'Antoine Griezmann', birthDate: '1991-03-21', sport: 'football',
        clubs: [{ name: 'Real Sociedad', years: '2009-2014' }, { name: 'Atlético Madrid', years: '2014-2019' }, { name: 'Barcelona', years: '2019-2021' }, { name: 'Atlético Madrid', years: '2021-' }]
    },
    {
        id: 'f-30', name: 'Luis Suárez', birthDate: '1987-01-24', sport: 'football',
        clubs: [{ name: 'Nacional', years: '2005-2006' }, { name: 'Ajax', years: '2007-2011' }, { name: 'Liverpool', years: '2011-2014' }, { name: 'Barcelona', years: '2014-2020' }, { name: 'Atlético Madrid', years: '2020-2022' }, { name: 'Inter Miami', years: '2024-' }]
    },
    // Icons
    {
        id: 'f-31', name: 'Kaká', birthDate: '1982-04-22', sport: 'football',
        clubs: [{ name: 'São Paulo', years: '2001-2003' }, { name: 'AC Milan', years: '2003-2009' }, { name: 'Real Madrid', years: '2009-2013' }, { name: 'AC Milan', years: '2013-2014' }, { name: 'Orlando City', years: '2014-2017' }]
    },
    {
        id: 'f-32', name: 'Xavi', birthDate: '1980-01-25', sport: 'football',
        clubs: [{ name: 'Barcelona', years: '1998-2015' }, { name: 'Al Sadd', years: '2015-2019' }]
    },
    {
        id: 'f-33', name: 'Iker Casillas', birthDate: '1981-05-20', sport: 'football',
        clubs: [{ name: 'Real Madrid', years: '1999-2015' }, { name: 'Porto', years: '2015-2020' }]
    },
    {
        id: 'f-34', name: 'Gianluigi Buffon', birthDate: '1978-01-28', sport: 'football',
        clubs: [{ name: 'Parma', years: '1995-2001' }, { name: 'Juventus', years: '2001-2018' }, { name: 'PSG', years: '2018-2019' }, { name: 'Juventus', years: '2019-2021' }, { name: 'Parma', years: '2021-2023' }]
    },
    {
        id: 'f-35', name: 'Paolo Maldini', birthDate: '1968-06-26', sport: 'football',
        clubs: [{ name: 'AC Milan', years: '1984-2009' }]
    },
    {
        id: 'f-36', name: 'Didier Drogba', birthDate: '1978-03-11', sport: 'football',
        clubs: [{ name: 'Le Mans', years: '1998-2002' }, { name: 'Guingamp', years: '2002-2003' }, { name: 'Marseille', years: '2003-2004' }, { name: 'Chelsea', years: '2004-2012' }, { name: 'Shanghai Shenhua', years: '2012' }, { name: 'Galatasaray', years: '2013-2014' }, { name: 'Chelsea', years: '2014-2015' }, { name: 'Montreal Impact', years: '2015-2016' }]
    },
    {
        id: 'f-37', name: 'Samuel Eto\'o', birthDate: '1981-03-10', sport: 'football',
        clubs: [{ name: 'Mallorca', years: '2000-2004' }, { name: 'Barcelona', years: '2004-2009' }, { name: 'Inter Milan', years: '2009-2011' }, { name: 'Anzhi Makhachkala', years: '2011-2013' }, { name: 'Chelsea', years: '2013-2014' }, { name: 'Everton', years: '2014-2015' }]
    },
    {
        id: 'f-38', name: 'Frank Lampard', birthDate: '1978-06-20', sport: 'football',
        clubs: [{ name: 'West Ham', years: '1995-2001' }, { name: 'Chelsea', years: '2001-2014' }, { name: 'Man City', years: '2014-2015' }, { name: 'New York City FC', years: '2015-2016' }]
    },
    {
        id: 'f-39', name: 'Steven Gerrard', birthDate: '1980-05-30', sport: 'football',
        clubs: [{ name: 'Liverpool', years: '1998-2015' }, { name: 'LA Galaxy', years: '2015-2016' }]
    },
    {
        id: 'f-40', name: 'Wayne Rooney', birthDate: '1985-10-24', sport: 'football',
        clubs: [{ name: 'Everton', years: '2002-2004' }, { name: 'Man Utd', years: '2004-2017' }, { name: 'Everton', years: '2017-2018' }, { name: 'DC United', years: '2018-2020' }, { name: 'Derby County', years: '2020-2021' }]
    },
    {
        id: 'f-41', name: 'Andrea Pirlo', birthDate: '1979-05-19', sport: 'football',
        clubs: [{ name: 'Brescia', years: '1995-1998' }, { name: 'Inter Milan', years: '1998-2001' }, { name: 'AC Milan', years: '2001-2011' }, { name: 'Juventus', years: '2011-2015' }, { name: 'New York City FC', years: '2015-2017' }]
    },
    {
        id: 'f-42', name: 'Fabio Cannavaro', birthDate: '1973-09-13', sport: 'football',
        clubs: [{ name: 'Napoli', years: '1992-1995' }, { name: 'Parma', years: '1995-2002' }, { name: 'Inter Milan', years: '2002-2004' }, { name: 'Juventus', years: '2004-2006' }, { name: 'Real Madrid', years: '2006-2009' }, { name: 'Juventus', years: '2009-2010' }]
    },
    {
        id: 'f-43', name: 'Luís Figo', birthDate: '1972-11-04', sport: 'football',
        clubs: [{ name: 'Sporting CP', years: '1989-1995' }, { name: 'Barcelona', years: '1995-2000' }, { name: 'Real Madrid', years: '2000-2005' }, { name: 'Inter Milan', years: '2005-2009' }]
    },
    {
        id: 'f-44', name: 'David Beckham', birthDate: '1975-05-02', sport: 'football',
        clubs: [{ name: 'Man Utd', years: '1992-2003' }, { name: 'Real Madrid', years: '2003-2007' }, { name: 'LA Galaxy', years: '2007-2012' }, { name: 'AC Milan', years: '2009' }, { name: 'PSG', years: '2013' }]
    },
    {
        id: 'f-45', name: 'Raúl', birthDate: '1977-06-27', sport: 'football',
        clubs: [{ name: 'Real Madrid', years: '1994-2010' }, { name: 'Schalke 04', years: '2010-2012' }, { name: 'Al Sadd', years: '2012-2014' }, { name: 'New York Cosmos', years: '2014-2015' }]
    },
    {
        id: 'f-46', name: 'Carles Puyol', birthDate: '1978-04-13', sport: 'football',
        clubs: [{ name: 'Barcelona', years: '1999-2014' }]
    },
    {
        id: 'f-47', name: 'Roberto Carlos', birthDate: '1973-04-10', sport: 'football',
        clubs: [{ name: 'Palmeiras', years: '1993-1995' }, { name: 'Inter Milan', years: '1995-1996' }, { name: 'Real Madrid', years: '1996-2007' }, { name: 'Fenerbahçe', years: '2007-2009' }, { name: 'Corinthians', years: '2010-2011' }]
    },
    {
        id: 'f-48', name: 'Cafu', birthDate: '1970-06-07', sport: 'football',
        clubs: [{ name: 'São Paulo', years: '1989-1994' }, { name: 'Zaragoza', years: '1994-1995' }, { name: 'Palmeiras', years: '1995-1997' }, { name: 'Roma', years: '1997-2003' }, { name: 'AC Milan', years: '2003-2008' }]
    },
    {
        id: 'f-49', name: 'Rivaldo', birthDate: '1972-04-19', sport: 'football',
        clubs: [{ name: 'Palmeiras', years: '1994-1996' }, { name: 'Deportivo', years: '1996-1997' }, { name: 'Barcelona', years: '1997-2002' }, { name: 'AC Milan', years: '2002-2004' }, { name: 'Olympiacos', years: '2004-2007' }]
    },
    {
        id: 'f-50', name: 'Dennis Bergkamp', birthDate: '1969-05-10', sport: 'football',
        clubs: [{ name: 'Ajax', years: '1986-1993' }, { name: 'Inter Milan', years: '1993-1995' }, { name: 'Arsenal', years: '1995-2006' }]
    },
    // Batch 3
    {
        id: 'f-51', name: 'Alessandro Del Piero', birthDate: '1974-11-09', sport: 'football',
        clubs: [{ name: 'Padova', years: '1991-1993' }, { name: 'Juventus', years: '1993-2012' }, { name: 'Sydney FC', years: '2012-2014' }, { name: 'Delhi Dynamos', years: '2014' }]
    },
    {
        id: 'f-52', name: 'Francesco Totti', birthDate: '1976-09-27', sport: 'football',
        clubs: [{ name: 'Roma', years: '1993-2017' }]
    },
    {
        id: 'f-53', name: 'Ryan Giggs', birthDate: '1973-11-29', sport: 'football',
        clubs: [{ name: 'Man Utd', years: '1990-2014' }]
    },
    {
        id: 'f-54', name: 'Paul Scholes', birthDate: '1974-11-16', sport: 'football',
        clubs: [{ name: 'Man Utd', years: '1993-2011' }, { name: 'Man Utd', years: '2012-2013' }]
    },
    {
        id: 'f-55', name: 'Philipp Lahm', birthDate: '1983-11-11', sport: 'football',
        clubs: [{ name: 'Bayern Munich', years: '2002-2017' }, { name: 'Stuttgart', years: '2003-2005' }]
    },
    {
        id: 'f-56', name: 'Thomas Müller', birthDate: '1989-09-13', sport: 'football',
        clubs: [{ name: 'Bayern Munich', years: '2008-' }]
    },
    {
        id: 'f-57', name: 'Bastian Schweinsteiger', birthDate: '1984-08-01', sport: 'football',
        clubs: [{ name: 'Bayern Munich', years: '2002-2015' }, { name: 'Man Utd', years: '2015-2017' }, { name: 'Chicago Fire', years: '2017-2019' }]
    },
    {
        id: 'f-58', name: 'Arjen Robben', birthDate: '1984-01-23', sport: 'football',
        clubs: [{ name: 'Groningen', years: '2000-2002' }, { name: 'PSV', years: '2002-2004' }, { name: 'Chelsea', years: '2004-2007' }, { name: 'Real Madrid', years: '2007-2009' }, { name: 'Bayern Munich', years: '2009-2019' }, { name: 'Groningen', years: '2020-2021' }]
    },
    {
        id: 'f-59', name: 'Franck Ribéry', birthDate: '1983-04-07', sport: 'football',
        clubs: [{ name: 'Metz', years: '2004-2005' }, { name: 'Galatasaray', years: '2005' }, { name: 'Marseille', years: '2005-2007' }, { name: 'Bayern Munich', years: '2007-2019' }, { name: 'Fiorentina', years: '2019-2021' }, { name: 'Salernitana', years: '2021-2022' }]
    },
    {
        id: 'f-60', name: 'Sergio Busquets', birthDate: '1988-07-16', sport: 'football',
        clubs: [{ name: 'Barcelona', years: '2008-2023' }, { name: 'Inter Miami', years: '2023-' }]
    },
    {
        id: 'f-61', name: 'Gerard Piqué', birthDate: '1987-02-02', sport: 'football',
        clubs: [{ name: 'Man Utd', years: '2004-2008' }, { name: 'Zaragoza', years: '2006-2007' }, { name: 'Barcelona', years: '2008-2022' }]
    },
    {
        id: 'f-62', name: 'Dani Alves', birthDate: '1983-05-06', sport: 'football',
        clubs: [{ name: 'Bahia', years: '2001-2002' }, { name: 'Sevilla', years: '2002-2008' }, { name: 'Barcelona', years: '2008-2016' }, { name: 'Juventus', years: '2016-2017' }, { name: 'PSG', years: '2017-2019' }, { name: 'São Paulo', years: '2019-2021' }, { name: 'Barcelona', years: '2021-2022' }, { name: 'UNAM', years: '2022-2023' }]
    },
    {
        id: 'f-63', name: 'Marcelo', birthDate: '1988-05-12', sport: 'football',
        clubs: [{ name: 'Fluminense', years: '2005-2006' }, { name: 'Real Madrid', years: '2007-2022' }, { name: 'Olympiacos', years: '2022-2023' }, { name: 'Fluminense', years: '2023-' }]
    },
    {
        id: 'f-64', name: 'Thiago Silva', birthDate: '1984-09-22', sport: 'football',
        clubs: [{ name: 'Fluminense', years: '2006-2009' }, { name: 'AC Milan', years: '2009-2012' }, { name: 'PSG', years: '2012-2020' }, { name: 'Chelsea', years: '2020-2024' }, { name: 'Fluminense', years: '2024-' }]
    },
    {
        id: 'f-65', name: 'Zico', birthDate: '1953-03-03', sport: 'football',
        clubs: [{ name: 'Flamengo', years: '1971-1983' }, { name: 'Udinese', years: '1983-1985' }, { name: 'Flamengo', years: '1985-1989' }, { name: 'Kashima Antlers', years: '1991-1994' }]
    },
    {
        id: 'f-66', name: 'Sérgio Agüero', birthDate: '1988-06-02', sport: 'football',
        clubs: [{ name: 'Independiente', years: '2003-2006' }, { name: 'Atlético Madrid', years: '2006-2011' }, { name: 'Man City', years: '2011-2021' }, { name: 'Barcelona', years: '2021' }]
    },
    {
        id: 'f-67', name: 'David Silva', birthDate: '1986-01-08', sport: 'football',
        clubs: [{ name: 'Valencia', years: '2004-2010' }, { name: 'Eibar', years: '2004-2005' }, { name: 'Celta', years: '2005-2006' }, { name: 'Man City', years: '2010-2020' }, { name: 'Real Sociedad', years: '2020-2023' }]
    },
    {
        id: 'f-68', name: 'Vincent Kompany', birthDate: '1986-04-10', sport: 'football',
        clubs: [{ name: 'Anderlecht', years: '2003-2006' }, { name: 'Hamburg', years: '2006-2008' }, { name: 'Man City', years: '2008-2019' }, { name: 'Anderlecht', years: '2019-2020' }]
    },
    {
        id: 'f-69', name: 'Yaya Touré', birthDate: '1983-05-13', sport: 'football',
        clubs: [{ name: 'Olympiacos', years: '2005-2006' }, { name: 'Monaco', years: '2006-2007' }, { name: 'Barcelona', years: '2007-2010' }, { name: 'Man City', years: '2010-2018' }, { name: 'Olympiacos', years: '2018' }]
    },
    {
        id: 'f-70', name: 'Patrick Vieira', birthDate: '1976-06-23', sport: 'football',
        clubs: [{ name: 'Cannes', years: '1994-1995' }, { name: 'AC Milan', years: '1995-1996' }, { name: 'Arsenal', years: '1996-2005' }, { name: 'Juventus', years: '2005-2006' }, { name: 'Inter Milan', years: '2006-2010' }, { name: 'Man City', years: '2010-2011' }]
    },
    // Batch 4 (71-100)
    {
        id: 'f-71', name: 'George Best', birthDate: '1946-05-22', sport: 'football',
        clubs: [{ name: 'Man Utd', years: '1963-1974' }, { name: 'Fulham', years: '1976-1977' }]
    },
    {
        id: 'f-72', name: 'Bobby Charlton', birthDate: '1937-10-11', sport: 'football',
        clubs: [{ name: 'Man Utd', years: '1956-1973' }]
    },
    {
        id: 'f-73', name: 'Eusébio', birthDate: '1942-01-25', sport: 'football',
        clubs: [{ name: 'Benfica', years: '1960-1975' }]
    },
    {
        id: 'f-74', name: 'Gerd Müller', birthDate: '1945-11-03', sport: 'football',
        clubs: [{ name: 'Bayern Munich', years: '1964-1979' }]
    },
    {
        id: 'f-75', name: 'Marco van Basten', birthDate: '1964-10-31', sport: 'football',
        clubs: [{ name: 'Ajax', years: '1981-1987' }, { name: 'AC Milan', years: '1987-1995' }]
    },
    {
        id: 'f-76', name: 'Ruud Gullit', birthDate: '1962-09-01', sport: 'football',
        clubs: [{ name: 'Feyenoord', years: '1982-1985' }, { name: 'PSV', years: '1985-1987' }, { name: 'AC Milan', years: '1987-1993' }, { name: 'Sampdoria', years: '1993-1994' }, { name: 'Chelsea', years: '1995-1998' }]
    },
    {
        id: 'f-77', name: 'Lev Yashin', birthDate: '1929-10-22', sport: 'football',
        clubs: [{ name: 'Dynamo Moscow', years: '1950-1970' }]
    },
    {
        id: 'f-78', name: 'Ferenc Puskás', birthDate: '1927-04-01', sport: 'football',
        clubs: [{ name: 'Budapest Honvéd', years: '1943-1955' }, { name: 'Real Madrid', years: '1958-1966' }]
    },
    {
        id: 'f-79', name: 'Alfredo Di Stéfano', birthDate: '1926-07-04', sport: 'football',
        clubs: [{ name: 'River Plate', years: '1945-1949' }, { name: 'Millonarios', years: '1949-1953' }, { name: 'Real Madrid', years: '1953-1964' }, { name: 'Espanyol', years: '1964-1966' }]
    },
    {
        id: 'f-80', name: 'Garrincha', birthDate: '1933-10-28', sport: 'football',
        clubs: [{ name: 'Botafogo', years: '1953-1965' }]
    },
    {
        id: 'f-81', name: 'Hugo Lloris', birthDate: '1986-12-26', sport: 'football',
        clubs: [{ name: 'Nice', years: '2005-2008' }, { name: 'Lyon', years: '2008-2012' }, { name: 'Tottenham', years: '2012-2024' }, { name: 'LAFC', years: '2024-' }]
    },
    {
        id: 'f-82', name: 'Olivier Giroud', birthDate: '1986-09-30', sport: 'football',
        clubs: [{ name: 'Grenoble', years: '2005-2008' }, { name: 'Tours', years: '2008-2010' }, { name: 'Montpellier', years: '2010-2012' }, { name: 'Arsenal', years: '2012-2018' }, { name: 'Chelsea', years: '2018-2021' }, { name: 'AC Milan', years: '2021-2024' }, { name: 'LAFC', years: '2024-' }]
    },
    {
        id: 'f-83', name: 'Ángel Di María', birthDate: '1988-02-14', sport: 'football',
        clubs: [{ name: 'Rosario Central', years: '2005-2007' }, { name: 'Benfica', years: '2007-2010' }, { name: 'Real Madrid', years: '2010-2014' }, { name: 'Man Utd', years: '2014-2015' }, { name: 'PSG', years: '2015-2022' }, { name: 'Juventus', years: '2022-2023' }, { name: 'Benfica', years: '2023-' }]
    },
    {
        id: 'f-84', name: 'Edinson Cavani', birthDate: '1987-02-14', sport: 'football',
        clubs: [{ name: 'Palermo', years: '2007-2010' }, { name: 'Napoli', years: '2010-2013' }, { name: 'PSG', years: '2013-2020' }, { name: 'Man Utd', years: '2020-2022' }, { name: 'Valencia', years: '2022-2023' }, { name: 'Boca Juniors', years: '2023-' }]
    },
    {
        id: 'f-85', name: 'Radamel Falcao', birthDate: '1986-02-10', sport: 'football',
        clubs: [{ name: 'River Plate', years: '2005-2009' }, { name: 'Porto', years: '2009-2011' }, { name: 'Atlético Madrid', years: '2011-2013' }, { name: 'Monaco', years: '2013-2019' }, { name: 'Galatasaray', years: '2019-2021' }, { name: 'Rayo Vallecano', years: '2021-2024' }]
    },
    {
        id: 'f-86', name: 'Alexis Sánchez', birthDate: '1988-12-19', sport: 'football',
        clubs: [{ name: 'Udinese', years: '2006-2011' }, { name: 'Barcelona', years: '2011-2014' }, { name: 'Arsenal', years: '2014-2018' }, { name: 'Man Utd', years: '2018-2020' }, { name: 'Inter Milan', years: '2019-2022' }, { name: 'Marseille', years: '2022-2023' }, { name: 'Inter Milan', years: '2023-' }]
    },
    {
        id: 'f-87', name: 'Arturo Vidal', birthDate: '1987-05-22', sport: 'football',
        clubs: [{ name: 'Colo-Colo', years: '2005-2007' }, { name: 'Leverkusen', years: '2007-2011' }, { name: 'Juventus', years: '2011-2015' }, { name: 'Bayern Munich', years: '2015-2018' }, { name: 'Barcelona', years: '2018-2020' }, { name: 'Inter Milan', years: '2020-2022' }]
    },
    {
        id: 'f-88', name: 'James Rodríguez', birthDate: '1991-07-12', sport: 'football',
        clubs: [{ name: 'Banfield', years: '2008-2010' }, { name: 'Porto', years: '2010-2013' }, { name: 'Monaco', years: '2013-2014' }, { name: 'Real Madrid', years: '2014-2020' }, { name: 'Bayern Munich', years: '2017-2019' }, { name: 'Everton', years: '2020-2021' }, { name: 'São Paulo', years: '2023-2024' }, { name: 'Rayo Vallecano', years: '2024-' }]
    },
    {
        id: 'f-89', name: 'Mesut Özil', birthDate: '1988-10-15', sport: 'football',
        clubs: [{ name: 'Schalke 04', years: '2006-2008' }, { name: 'Werder Bremen', years: '2008-2010' }, { name: 'Real Madrid', years: '2010-2013' }, { name: 'Arsenal', years: '2013-2021' }, { name: 'Fenerbahçe', years: '2021-2022' }]
    },
    {
        id: 'f-90', name: 'Mats Hummels', birthDate: '1988-12-16', sport: 'football',
        clubs: [{ name: 'Bayern Munich', years: '2007-2009' }, { name: 'Dortmund', years: '2009-2016' }, { name: 'Bayern Munich', years: '2016-2019' }, { name: 'Dortmund', years: '2019-2024' }, { name: 'Roma', years: '2024-' }]
    },
    {
        id: 'f-91', name: 'Romelu Lukaku', birthDate: '1993-05-13', sport: 'football',
        clubs: [{ name: 'Anderlecht', years: '2009-2011' }, { name: 'Chelsea', years: '2011-2014' }, { name: 'Everton', years: '2014-2017' }, { name: 'Man Utd', years: '2017-2019' }, { name: 'Inter Milan', years: '2019-2021' }, { name: 'Chelsea', years: '2021-2022' }, { name: 'Inter Milan', years: '2022-2023' }, { name: 'Roma', years: '2023-2024' }, { name: 'Napoli', years: '2024-' }]
    },
    {
        id: 'f-92', name: 'Thibaut Courtois', birthDate: '1992-05-11', sport: 'football',
        clubs: [{ name: 'Genk', years: '2009-2011' }, { name: 'Chelsea', years: '2011-2018' }, { name: 'Atlético Madrid', years: '2011-2014' }, { name: 'Real Madrid', years: '2018-' }]
    },
    {
        id: 'f-93', name: 'Jan Oblak', birthDate: '1993-01-07', sport: 'football',
        clubs: [{ name: 'Olimpija Ljubljana', years: '2009-2010' }, { name: 'Benfica', years: '2010-2014' }, { name: 'Atlético Madrid', years: '2014-' }]
    },
    {
        id: 'f-94', name: 'Alisson Becker', birthDate: '1992-10-02', sport: 'football',
        clubs: [{ name: 'Internacional', years: '2013-2016' }, { name: 'Roma', years: '2016-2018' }, { name: 'Liverpool', years: '2018-' }]
    },
    {
        id: 'f-95', name: 'Roberto Firmino', birthDate: '1991-10-02', sport: 'football',
        clubs: [{ name: 'Figueirense', years: '2009-2011' }, { name: 'Hoffenheim', years: '2011-2015' }, { name: 'Liverpool', years: '2015-2023' }, { name: 'Al-Ahli', years: '2023-' }]
    },
    {
        id: 'f-96', name: 'Casemiro', birthDate: '1992-02-23', sport: 'football',
        clubs: [{ name: 'São Paulo', years: '2010-2013' }, { name: 'Real Madrid', years: '2013-2022' }, { name: 'Porto', years: '2014-2015' }, { name: 'Man Utd', years: '2022-' }]
    },
    {
        id: 'f-97', name: 'Marquinhos', birthDate: '1994-05-14', sport: 'football',
        clubs: [{ name: 'Corinthians', years: '2012' }, { name: 'Roma', years: '2012-2013' }, { name: 'PSG', years: '2013-' }]
    },
    {
        id: 'f-98', name: 'Marco Verratti', birthDate: '1992-11-05', sport: 'football',
        clubs: [{ name: 'Pescara', years: '2008-2012' }, { name: 'PSG', years: '2012-2023' }, { name: 'Al-Arabi', years: '2023-' }]
    },
    {
        id: 'f-99', name: 'Giorgio Chiellini', birthDate: '1984-08-14', sport: 'football',
        clubs: [{ name: 'Livorno', years: '2000-2004' }, { name: 'Fiorentina', years: '2004-2005' }, { name: 'Juventus', years: '2005-2022' }, { name: 'LAFC', years: '2022-2023' }]
    },
    {
        id: 'f-100', name: 'Leonardo Bonucci', birthDate: '1987-05-01', sport: 'football',
        clubs: [{ name: 'Inter Milan', years: '2005-2007' }, { name: 'Bari', years: '2009-2010' }, { name: 'Juventus', years: '2010-2017' }, { name: 'AC Milan', years: '2017-2018' }, { name: 'Juventus', years: '2018-2023' }, { name: 'Union Berlin', years: '2023-2024' }, { name: 'Fenerbahçe', years: '2024' }]
    }
];
