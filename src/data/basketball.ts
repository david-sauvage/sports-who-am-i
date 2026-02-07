import type { Player } from '../types';

export const basketballPlayers: Player[] = [
    // Legends
    {
        id: 'b-1', name: 'Michael Jordan', birthDate: '1963-02-17', sport: 'basketball', category: 'historical',
        clubs: [{ name: 'Chicago Bulls', years: '1984-1998' }, { name: 'Washington Wizards', years: '2001-2003' }]
    },
    {
        id: 'b-2', name: 'LeBron James', birthDate: '1984-12-30', sport: 'basketball', category: 'active',
        clubs: [{ name: 'Cleveland Cavaliers', years: '2003-2010' }, { name: 'Miami Heat', years: '2010-2014' }, { name: 'Cleveland Cavaliers', years: '2014-2018' }, { name: 'LA Lakers', years: '2018-' }]
    },
    {
        id: 'b-3', name: 'Kobe Bryant', birthDate: '1978-08-23', sport: 'basketball', category: 'historical',
        clubs: [{ name: 'LA Lakers', years: '1996-2016' }]
    },
    {
        id: 'b-4', name: 'Shaquille O\'Neal', birthDate: '1972-03-06', sport: 'basketball', category: 'historical',
        clubs: [{ name: 'Orlando Magic', years: '1992-1996' }, { name: 'LA Lakers', years: '1996-2004' }, { name: 'Miami Heat', years: '2004-2008' }, { name: 'Phoenix Suns', years: '2008-2009' }, { name: 'Cleveland Cavaliers', years: '2009-2010' }, { name: 'Boston Celtics', years: '2010-2011' }]
    },
    {
        id: 'b-5', name: 'Magic Johnson', birthDate: '1959-08-14', sport: 'basketball', category: 'historical',
        clubs: [{ name: 'LA Lakers', years: '1979-1991' }, { name: 'LA Lakers', years: '1996' }]
    },
    {
        id: 'b-6', name: 'Larry Bird', birthDate: '1956-12-07', sport: 'basketball', category: 'historical',
        clubs: [{ name: 'Boston Celtics', years: '1979-1992' }]
    },
    {
        id: 'b-7', name: 'Kareem Abdul-Jabbar', birthDate: '1947-04-16', sport: 'basketball', category: 'historical',
        clubs: [{ name: 'Milwaukee Bucks', years: '1969-1975' }, { name: 'LA Lakers', years: '1975-1989' }]
    },
    {
        id: 'b-8', name: 'Wilt Chamberlain', birthDate: '1936-08-21', sport: 'basketball', category: 'historical',
        clubs: [{ name: 'Philadelphia Warriors', years: '1959-1965' }, { name: 'Philadelphia 76ers', years: '1965-1968' }, { name: 'LA Lakers', years: '1968-1973' }]
    },
    {
        id: 'b-9', name: 'Tim Duncan', birthDate: '1976-04-25', sport: 'basketball', category: 'historical',
        clubs: [{ name: 'San Antonio Spurs', years: '1997-2016' }]
    },
    {
        id: 'b-10', name: 'Hakeem Olajuwon', birthDate: '1963-01-21', sport: 'basketball', category: 'historical',
        clubs: [{ name: 'Houston Rockets', years: '1984-2001' }, { name: 'Toronto Raptors', years: '2001-2002' }]
    },
    {
        id: 'b-11', name: 'Tony Parker', birthDate: '1982-05-17', sport: 'basketball', category: 'historical',
        clubs: [{ name: 'Paris Racing', years: '1999-2001' }, { name: 'San Antonio Spurs', years: '2001-2018' }, { name: 'Charlotte Hornets', years: '2018-2019' }]
    },
    {
        id: 'b-12', name: 'Dirk Nowitzki', birthDate: '1978-06-19', sport: 'basketball', category: 'historical',
        clubs: [{ name: 'DJK Würzburg', years: '1994-1998' }, { name: 'Dallas Mavericks', years: '1998-2019' }]
    },

    // Modern Stars
    {
        id: 'b-13', name: 'Stephen Curry', birthDate: '1988-03-14', sport: 'basketball', category: 'active',
        clubs: [{ name: 'Golden State Warriors', years: '2009-' }]
    },
    {
        id: 'b-14', name: 'Kevin Durant', birthDate: '1988-09-29', sport: 'basketball', category: 'active',
        clubs: [{ name: 'Seattle/OKC', years: '2007-2016' }, { name: 'Golden State Warriors', years: '2016-2019' }, { name: 'Brooklyn Nets', years: '2019-2023' }, { name: 'Phoenix Suns', years: '2023-' }]
    },
    {
        id: 'b-15', name: 'Giannis Antetokounmpo', birthDate: '1994-12-06', sport: 'basketball', category: 'active',
        clubs: [{ name: 'Filathlitikos', years: '2011-2013' }, { name: 'Milwaukee Bucks', years: '2013-' }]
    },
    {
        id: 'b-16', name: 'Luka Dončić', birthDate: '1999-02-28', sport: 'basketball', category: 'active',
        clubs: [{ name: 'Real Madrid', years: '2015-2018' }, { name: 'Dallas Mavericks', years: '2018-' }]
    },
    {
        id: 'b-17', name: 'Nikola Jokić', birthDate: '1995-02-19', sport: 'basketball', category: 'active',
        clubs: [{ name: 'Mega Basket', years: '2012-2015' }, { name: 'Denver Nuggets', years: '2015-' }]
    },
    {
        id: 'b-18', name: 'Joel Embiid', birthDate: '1994-03-16', sport: 'basketball', category: 'active',
        clubs: [{ name: 'Philadelphia 76ers', years: '2014-' }]
    },
    {
        id: 'b-19', name: 'James Harden', birthDate: '1989-08-26', sport: 'basketball', category: 'active',
        clubs: [{ name: 'OKC Thunder', years: '2009-2012' }, { name: 'Houston Rockets', years: '2012-2021' }, { name: 'Brooklyn Nets', years: '2021-2022' }, { name: 'Philadelphia 76ers', years: '2022-2023' }, { name: 'LA Clippers', years: '2023-' }]
    },
    {
        id: 'b-20', name: 'Kawhi Leonard', birthDate: '1991-06-29', sport: 'basketball', category: 'active',
        clubs: [{ name: 'San Antonio Spurs', years: '2011-2018' }, { name: 'Toronto Raptors', years: '2018-2019' }, { name: 'LA Clippers', years: '2019-' }]
    },
    {
        id: 'b-21', name: 'Russell Westbrook', birthDate: '1988-11-12', sport: 'basketball', category: 'active',
        clubs: [{ name: 'OKC Thunder', years: '2008-2019' }, { name: 'Houston Rockets', years: '2019-2020' }, { name: 'Washington Wizards', years: '2020-2021' }, { name: 'LA Lakers', years: '2021-2023' }, { name: 'LA Clippers', years: '2023-' }]
    },
    {
        id: 'b-22', name: 'Chris Paul', birthDate: '1985-05-06', sport: 'basketball', category: 'active',
        clubs: [{ name: 'New Orleans Hornets', years: '2005-2011' }, { name: 'LA Clippers', years: '2011-2017' }, { name: 'Houston Rockets', years: '2017-2019' }, { name: 'OKC Thunder', years: '2019-2020' }, { name: 'Phoenix Suns', years: '2020-2023' }, { name: 'Golden State Warriors', years: '2023-2024' }, { name: 'San Antonio Spurs', years: '2024-' }]
    },
    {
        id: 'b-23', name: 'Damian Lillard', birthDate: '1990-07-15', sport: 'basketball', category: 'active',
        clubs: [{ name: 'Portland Trail Blazers', years: '2012-2023' }, { name: 'Milwaukee Bucks', years: '2023-' }]
    },
    {
        id: 'b-24', name: 'Anthony Davis', birthDate: '1993-03-11', sport: 'basketball', category: 'active',
        clubs: [{ name: 'New Orleans Pelicans', years: '2012-2019' }, { name: 'LA Lakers', years: '2019-' }]
    },
    {
        id: 'b-25', name: 'Kyrie Irving', birthDate: '1992-03-23', sport: 'basketball', category: 'active',
        clubs: [{ name: 'Cleveland Cavaliers', years: '2011-2017' }, { name: 'Boston Celtics', years: '2017-2019' }, { name: 'Brooklyn Nets', years: '2019-2023' }, { name: 'Dallas Mavericks', years: '2023-' }]
    },
    {
        id: 'b-26', name: 'Jimmy Butler', birthDate: '1989-09-14', sport: 'basketball', category: 'active',
        clubs: [{ name: 'Chicago Bulls', years: '2011-2017' }, { name: 'Minnesota Timberwolves', years: '2017-2018' }, { name: 'Philadelphia 76ers', years: '2018-2019' }, { name: 'Miami Heat', years: '2019-' }]
    },
    {
        id: 'b-27', name: 'Jayson Tatum', birthDate: '1998-03-03', sport: 'basketball', category: 'active',
        clubs: [{ name: 'Boston Celtics', years: '2017-' }]
    },
    {
        id: 'b-28', name: 'Victor Wembanyama', birthDate: '2004-01-04', sport: 'basketball', category: 'active',
        clubs: [{ name: 'Nanterre 92', years: '2019-2021' }, { name: 'ASVEL', years: '2021-2022' }, { name: 'Metropolitans 92', years: '2022-2023' }, { name: 'San Antonio Spurs', years: '2023-' }]
    },
    {
        id: 'b-29', name: 'Rudy Gobert', birthDate: '1992-06-26', sport: 'basketball', category: 'active',
        clubs: [{ name: 'Cholet', years: '2010-2013' }, { name: 'Utah Jazz', years: '2013-2022' }, { name: 'Minnesota Timberwolves', years: '2022-' }]
    },
    {
        id: 'b-30', name: 'Paul George', birthDate: '1990-05-02', sport: 'basketball', category: 'active',
        clubs: [{ name: 'Indiana Pacers', years: '2010-2017' }, { name: 'OKC Thunder', years: '2017-2019' }, { name: 'LA Clippers', years: '2019-2024' }, { name: 'Philadelphia 76ers', years: '2024-' }]
    },
    // Icons
    {
        id: 'b-31', name: 'Charles Barkley', birthDate: '1963-02-20', sport: 'basketball', category: 'historical',
        clubs: [{ name: 'Philadelphia 76ers', years: '1984-1992' }, { name: 'Phoenix Suns', years: '1992-1996' }, { name: 'Houston Rockets', years: '1996-2000' }]
    },
    {
        id: 'b-32', name: 'Karl Malone', birthDate: '1963-07-24', sport: 'basketball', category: 'historical',
        clubs: [{ name: 'Utah Jazz', years: '1985-2003' }, { name: 'LA Lakers', years: '2003-2004' }]
    },
    {
        id: 'b-33', name: 'John Stockton', birthDate: '1962-03-26', sport: 'basketball', category: 'historical',
        clubs: [{ name: 'Utah Jazz', years: '1984-2003' }]
    },
    {
        id: 'b-34', name: 'Scottie Pippen', birthDate: '1965-09-25', sport: 'basketball', category: 'historical',
        clubs: [{ name: 'Chicago Bulls', years: '1987-1998' }, { name: 'Houston Rockets', years: '1999' }, { name: 'Portland Trail Blazers', years: '1999-2003' }, { name: 'Chicago Bulls', years: '2003-2004' }]
    },
    {
        id: 'b-35', name: 'Dennis Rodman', birthDate: '1961-05-13', sport: 'basketball', category: 'historical',
        clubs: [{ name: 'Detroit Pistons', years: '1986-1993' }, { name: 'San Antonio Spurs', years: '1993-1995' }, { name: 'Chicago Bulls', years: '1995-1998' }, { name: 'LA Lakers', years: '1999' }, { name: 'Dallas Mavericks', years: '2000' }]
    },
    {
        id: 'b-36', name: 'David Robinson', birthDate: '1965-08-06', sport: 'basketball', category: 'historical',
        clubs: [{ name: 'San Antonio Spurs', years: '1989-2003' }]
    },
    {
        id: 'b-37', name: 'Patrick Ewing', birthDate: '1962-08-05', sport: 'basketball', category: 'historical',
        clubs: [{ name: 'New York Knicks', years: '1985-2000' }, { name: 'Seattle SuperSonics', years: '2000-2001' }, { name: 'Orlando Magic', years: '2001-2002' }]
    },
    {
        id: 'b-38', name: 'Reggie Miller', birthDate: '1965-08-24', sport: 'basketball', category: 'historical',
        clubs: [{ name: 'Indiana Pacers', years: '1987-2005' }]
    },
    {
        id: 'b-39', name: 'Jason Kidd', birthDate: '1973-03-23', sport: 'basketball', category: 'historical',
        clubs: [{ name: 'Dallas Mavericks', years: '1994-1996' }, { name: 'Phoenix Suns', years: '1996-2001' }, { name: 'New Jersey Nets', years: '2001-2008' }, { name: 'Dallas Mavericks', years: '2008-2012' }, { name: 'New York Knicks', years: '2012-2013' }]
    },
    {
        id: 'b-40', name: 'Steve Nash', birthDate: '1974-02-07', sport: 'basketball', category: 'historical',
        clubs: [{ name: 'Phoenix Suns', years: '1996-1998' }, { name: 'Dallas Mavericks', years: '1998-2004' }, { name: 'Phoenix Suns', years: '2004-2012' }, { name: 'LA Lakers', years: '2012-2015' }]
    },
    {
        id: 'b-41', name: 'Allen Iverson', birthDate: '1975-06-07', sport: 'basketball', category: 'historical',
        clubs: [{ name: 'Philadelphia 76ers', years: '1996-2006' }, { name: 'Denver Nuggets', years: '2006-2008' }, { name: 'Detroit Pistons', years: '2008-2009' }, { name: 'Memphis Grizzlies', years: '2009' }, { name: 'Philadelphia 76ers', years: '2009-2010' }]
    },
    {
        id: 'b-42', name: 'Vince Carter', birthDate: '1977-01-26', sport: 'basketball', category: 'historical',
        clubs: [{ name: 'Toronto Raptors', years: '1998-2004' }, { name: 'New Jersey Nets', years: '2004-2009' }, { name: 'Orlando Magic', years: '2009-2010' }, { name: 'Phoenix Suns', years: '2010-2011' }, { name: 'Dallas Mavericks', years: '2011-2014' }, { name: 'Memphis Grizzlies', years: '2014-2017' }, { name: 'Sacramento Kings', years: '2017-2018' }, { name: 'Atlanta Hawks', years: '2018-2020' }]
    },
    {
        id: 'b-43', name: 'Tracy McGrady', birthDate: '1979-05-24', sport: 'basketball', category: 'historical',
        clubs: [{ name: 'Toronto Raptors', years: '1997-2000' }, { name: 'Orlando Magic', years: '2000-2004' }, { name: 'Houston Rockets', years: '2004-2010' }]
    },
    {
        id: 'b-44', name: 'Paul Pierce', birthDate: '1977-10-13', sport: 'basketball', category: 'historical',
        clubs: [{ name: 'Boston Celtics', years: '1998-2013' }, { name: 'Brooklyn Nets', years: '2013-2014' }, { name: 'Washington Wizards', years: '2014-2015' }, { name: 'LA Clippers', years: '2015-2017' }]
    },
    {
        id: 'b-45', name: 'Ray Allen', birthDate: '1975-07-20', sport: 'basketball', category: 'historical',
        clubs: [{ name: 'Milwaukee Bucks', years: '1996-2003' }, { name: 'Seattle SuperSonics', years: '2003-2007' }, { name: 'Boston Celtics', years: '2007-2012' }, { name: 'Miami Heat', years: '2012-2014' }]
    },
    {
        id: 'b-46', name: 'Kevin Garnett', birthDate: '1976-05-19', sport: 'basketball', category: 'historical',
        clubs: [{ name: 'Minnesota Timberwolves', years: '1995-2007' }, { name: 'Boston Celtics', years: '2007-2013' }, { name: 'Brooklyn Nets', years: '2013-2015' }, { name: 'Minnesota Timberwolves', years: '2015-2016' }]
    },
    {
        id: 'b-47', name: 'Dwight Howard', birthDate: '1985-12-08', sport: 'basketball', category: 'historical',
        clubs: [{ name: 'Orlando Magic', years: '2004-2012' }, { name: 'LA Lakers', years: '2012-2013' }, { name: 'Houston Rockets', years: '2013-2016' }, { name: 'Atlanta Hawks', years: '2016-2017' }, { name: 'Charlotte Hornets', years: '2017-2018' }, { name: 'Washington Wizards', years: '2018-2019' }, { name: 'LA Lakers', years: '2019-2020' }, { name: 'Philadelphia 76ers', years: '2020-2021' }, { name: 'LA Lakers', years: '2021-2022' }]
    },
    {
        id: 'b-48', name: 'Pau Gasol', birthDate: '1980-07-06', sport: 'basketball', category: 'historical',
        clubs: [{ name: 'Barcelona', years: '1998-2001' }, { name: 'Memphis Grizzlies', years: '2001-2008' }, { name: 'LA Lakers', years: '2008-2014' }, { name: 'Chicago Bulls', years: '2014-2016' }, { name: 'San Antonio Spurs', years: '2016-2019' }, { name: 'Milwaukee Bucks', years: '2019' }, { name: 'Barcelona', years: '2021' }]
    },
    {
        id: 'b-49', name: 'Carmelo Anthony', birthDate: '1984-05-29', sport: 'basketball', category: 'historical',
        clubs: [{ name: 'Denver Nuggets', years: '2003-2011' }, { name: 'New York Knicks', years: '2011-2017' }, { name: 'OKC Thunder', years: '2017-2018' }, { name: 'Houston Rockets', years: '2018-2019' }, { name: 'Portland Trail Blazers', years: '2019-2021' }, { name: 'LA Lakers', years: '2021-2022' }]
    },
    {
        id: 'b-50', name: 'Dwyane Wade', birthDate: '1982-01-17', sport: 'basketball', category: 'historical',
        clubs: [{ name: 'Miami Heat', years: '2003-2016' }, { name: 'Chicago Bulls', years: '2016-2017' }, { name: 'Cleveland Cavaliers', years: '2017-2018' }, { name: 'Miami Heat', years: '2018-2019' }]
    },
    // Batch 3
    {
        id: 'b-51', name: 'Clyde Drexler', birthDate: '1962-06-22', sport: 'basketball', category: 'historical',
        clubs: [{ name: 'Portland Trail Blazers', years: '1983-1995' }, { name: 'Houston Rockets', years: '1995-1998' }]
    },
    {
        id: 'b-52', name: 'Isiah Thomas', birthDate: '1961-04-30', sport: 'basketball', category: 'historical',
        clubs: [{ name: 'Detroit Pistons', years: '1981-1994' }]
    },
    {
        id: 'b-53', name: 'James Worthy', birthDate: '1961-02-27', sport: 'basketball', category: 'historical',
        clubs: [{ name: 'LA Lakers', years: '1982-1994' }]
    },
    {
        id: 'b-54', name: 'Dominique Wilkins', birthDate: '1960-01-12', sport: 'basketball', category: 'historical',
        clubs: [{ name: 'Atlanta Hawks', years: '1982-1994' }, { name: 'LA Clippers', years: '1994' }, { name: 'Boston Celtics', years: '1994-1995' }, { name: 'Panathinaikos', years: '1995-1996' }, { name: 'San Antonio Spurs', years: '1996-1997' }, { name: 'Bologna', years: '1997-1998' }, { name: 'Orlando Magic', years: '1999' }]
    },
    {
        id: 'b-55', name: 'Gary Payton', birthDate: '1968-07-23', sport: 'basketball', category: 'historical',
        clubs: [{ name: 'Seattle SuperSonics', years: '1990-2003' }, { name: 'Milwaukee Bucks', years: '2003' }, { name: 'LA Lakers', years: '2003-2004' }, { name: 'Boston Celtics', years: '2004-2005' }, { name: 'Miami Heat', years: '2005-2007' }]
    },
    {
        id: 'b-56', name: 'Shawn Kemp', birthDate: '1969-11-26', sport: 'basketball', category: 'historical',
        clubs: [{ name: 'Seattle SuperSonics', years: '1989-1997' }, { name: 'Cleveland Cavaliers', years: '1997-2000' }, { name: 'Portland Trail Blazers', years: '2000-2002' }, { name: 'Orlando Magic', years: '2002-2003' }]
    },
    {
        id: 'b-57', name: 'Manu Ginóbili', birthDate: '1977-07-28', sport: 'basketball', category: 'historical',
        clubs: [{ name: 'Estudiantes Bahía', years: '1995-1998' }, { name: 'Viola Reggio Calabria', years: '1998-2001' }, { name: 'Virtus Bologna', years: '2001-2002' }, { name: 'San Antonio Spurs', years: '2002-2018' }]
    },
    {
        id: 'b-58', name: 'Yao Ming', birthDate: '1980-09-12', sport: 'basketball', category: 'historical',
        clubs: [{ name: 'Shanghai Sharks', years: '1997-2002' }, { name: 'Houston Rockets', years: '2002-2011' }]
    },
    {
        id: 'b-59', name: 'Chris Bosh', birthDate: '1984-03-24', sport: 'basketball', category: 'historical',
        clubs: [{ name: 'Toronto Raptors', years: '2003-2010' }, { name: 'Miami Heat', years: '2010-2016' }]
    },
    {
        id: 'b-60', name: 'Klay Thompson', birthDate: '1990-02-08', sport: 'basketball', category: 'active',
        clubs: [{ name: 'Golden State Warriors', years: '2011-2024' }, { name: 'Dallas Mavericks', years: '2024-' }]
    },
    {
        id: 'b-61', name: 'Draymond Green', birthDate: '1990-03-04', sport: 'basketball', category: 'active',
        clubs: [{ name: 'Golden State Warriors', years: '2012-' }]
    },
    {
        id: 'b-62', name: 'DeMar DeRozan', birthDate: '1989-08-07', sport: 'basketball', category: 'active',
        clubs: [{ name: 'Toronto Raptors', years: '2009-2018' }, { name: 'San Antonio Spurs', years: '2018-2021' }, { name: 'Chicago Bulls', years: '2021-2024' }, { name: 'Sacramento Kings', years: '2024-' }]
    },
    {
        id: 'b-63', name: 'Blake Griffin', birthDate: '1989-03-16', sport: 'basketball', category: 'historical',
        clubs: [{ name: 'LA Clippers', years: '2009-2018' }, { name: 'Detroit Pistons', years: '2018-2021' }, { name: 'Brooklyn Nets', years: '2021-2022' }, { name: 'Boston Celtics', years: '2022-2023' }]
    },
    {
        id: 'b-64', name: 'Derrick Rose', birthDate: '1988-10-04', sport: 'basketball', category: 'historical',
        clubs: [{ name: 'Chicago Bulls', years: '2008-2016' }, { name: 'New York Knicks', years: '2016-2017' }, { name: 'Cleveland Cavaliers', years: '2017-2018' }, { name: 'Minnesota Timberwolves', years: '2018-2019' }, { name: 'Detroit Pistons', years: '2019-2021' }, { name: 'New York Knicks', years: '2021-2023' }, { name: 'Memphis Grizzlies', years: '2023-2024' }]
    },
    {
        id: 'b-65', name: 'Paul Gasol', birthDate: '1980-07-06', sport: 'basketball', category: 'historical',
        clubs: [{ name: 'Barcelona', years: '1998-2001' }, { name: 'Memphis Grizzlies', years: '2001-2008' }, { name: 'LA Lakers', years: '2008-2014' }, { name: 'Chicago Bulls', years: '2014-2016' }, { name: 'San Antonio Spurs', years: '2016-2019' }, { name: 'Milwaukee Bucks', years: '2019' }]
    },
    {
        id: 'b-66', name: 'Marc Gasol', birthDate: '1985-01-29', sport: 'basketball', category: 'historical',
        clubs: [{ name: 'Barcelona', years: '2003-2006' }, { name: 'Girona', years: '2006-2008' }, { name: 'Memphis Grizzlies', years: '2008-2019' }, { name: 'Toronto Raptors', years: '2019-2020' }, { name: 'LA Lakers', years: '2020-2021' }, { name: 'Girona', years: '2021-2024' }]
    },
    {
        id: 'b-67', name: 'Anthony Edwards', birthDate: '2001-08-05', sport: 'basketball', category: 'active',
        clubs: [{ name: 'Minnesota Timberwolves', years: '2020-' }]
    },
    {
        id: 'b-68', name: 'Shai Gilgeous-Alexander', birthDate: '1998-07-12', sport: 'basketball', category: 'active',
        clubs: [{ name: 'LA Clippers', years: '2018-2019' }, { name: 'OKC Thunder', years: '2019-' }]
    },
    {
        id: 'b-69', name: 'Devin Booker', birthDate: '1996-10-30', sport: 'basketball', category: 'active',
        clubs: [{ name: 'Phoenix Suns', years: '2015-' }]
    },
    {
        id: 'b-70', name: 'Donovan Mitchell', birthDate: '1996-09-07', sport: 'basketball', category: 'active',
        clubs: [{ name: 'Utah Jazz', years: '2017-2022' }, { name: 'Cleveland Cavaliers', years: '2022-' }]
    },
    // Batch 4 (71-100)
    {
        id: 'b-71', name: 'Bill Russell', birthDate: '1934-02-12', sport: 'basketball', category: 'historical',
        clubs: [{ name: 'Boston Celtics', years: '1956-1969' }]
    },
    {
        id: 'b-72', name: 'Jerry West', birthDate: '1938-05-28', sport: 'basketball', category: 'historical',
        clubs: [{ name: 'LA Lakers', years: '1960-1974' }]
    },
    {
        id: 'b-73', name: 'Oscar Robertson', birthDate: '1938-11-24', sport: 'basketball', category: 'historical',
        clubs: [{ name: 'Cincinnati Royals', years: '1960-1970' }, { name: 'Milwaukee Bucks', years: '1970-1974' }]
    },
    {
        id: 'b-74', name: 'Elgin Baylor', birthDate: '1934-09-16', sport: 'basketball', category: 'historical',
        clubs: [{ name: 'LA Lakers', years: '1958-1971' }]
    },
    {
        id: 'b-75', name: 'Bob Cousy', birthDate: '1928-08-09', sport: 'basketball', category: 'historical',
        clubs: [{ name: 'Boston Celtics', years: '1950-1963' }]
    },
    {
        id: 'b-76', name: 'John Havlicek', birthDate: '1940-04-08', sport: 'basketball', category: 'historical',
        clubs: [{ name: 'Boston Celtics', years: '1962-1978' }]
    },
    {
        id: 'b-77', name: 'George Mikan', birthDate: '1924-06-18', sport: 'basketball', category: 'historical',
        clubs: [{ name: 'Minneapolis Lakers', years: '1947-1956' }]
    },
    {
        id: 'b-78', name: 'Bob Pettit', birthDate: '1932-12-12', sport: 'basketball', category: 'historical',
        clubs: [{ name: 'St. Louis Hawks', years: '1954-1965' }]
    },
    {
        id: 'b-79', name: 'Rick Barry', birthDate: '1944-03-28', sport: 'basketball', category: 'historical',
        clubs: [{ name: 'San Francisco Warriors', years: '1965-1967' }, { name: 'Oakland Oaks', years: '1968-1969' }, { name: 'Golden State Warriors', years: '1972-1978' }, { name: 'Houston Rockets', years: '1978-1980' }]
    },
    {
        id: 'b-80', name: 'Willis Reed', birthDate: '1942-06-25', sport: 'basketball', category: 'historical',
        clubs: [{ name: 'New York Knicks', years: '1964-1974' }]
    },
    {
        id: 'b-81', name: 'Alonzo Mourning', birthDate: '1970-02-08', sport: 'basketball', category: 'historical',
        clubs: [{ name: 'Charlotte Hornets', years: '1992-1995' }, { name: 'Miami Heat', years: '1995-2002' }, { name: 'New Jersey Nets', years: '2003-2004' }, { name: 'Miami Heat', years: '2005-2008' }]
    },
    {
        id: 'b-82', name: 'Dikembe Mutombo', birthDate: '1966-06-25', sport: 'basketball', category: 'historical',
        clubs: [{ name: 'Denver Nuggets', years: '1991-1996' }, { name: 'Atlanta Hawks', years: '1996-2001' }, { name: 'Philadelphia 76ers', years: '2001-2002' }, { name: 'New Jersey Nets', years: '2002-2003' }, { name: 'New York Knicks', years: '2003-2004' }, { name: 'Houston Rockets', years: '2004-2009' }]
    },
    {
        id: 'b-83', name: 'Grant Hill', birthDate: '1972-10-05', sport: 'basketball', category: 'historical',
        clubs: [{ name: 'Detroit Pistons', years: '1994-2000' }, { name: 'Orlando Magic', years: '2000-2007' }, { name: 'Phoenix Suns', years: '2007-2012' }, { name: 'LA Clippers', years: '2012-2013' }]
    },
    {
        id: 'b-84', name: 'Penny Hardaway', birthDate: '1971-07-18', sport: 'basketball', category: 'historical',
        clubs: [{ name: 'Orlando Magic', years: '1993-1999' }, { name: 'Phoenix Suns', years: '1999-2004' }, { name: 'New York Knicks', years: '2004-2006' }, { name: 'Miami Heat', years: '2007' }]
    },
    {
        id: 'b-85', name: 'Chris Webber', birthDate: '1973-03-01', sport: 'basketball', category: 'historical',
        clubs: [{ name: 'Golden State Warriors', years: '1993-1994' }, { name: 'Washington Bullets', years: '1994-1998' }, { name: 'Sacramento Kings', years: '1998-2005' }, { name: 'Philadelphia 76ers', years: '2005-2007' }]
    },
    {
        id: 'b-86', name: 'Peja Stojaković', birthDate: '1977-06-09', sport: 'basketball', category: 'historical',
        clubs: [{ name: 'PAOK', years: '1994-1998' }, { name: 'Sacramento Kings', years: '1998-2006' }, { name: 'Indiana Pacers', years: '2006' }, { name: 'New Orleans Hornets', years: '2006-2010' }, { name: 'Toronto Raptors', years: '2010-2011' }, { name: 'Dallas Mavericks', years: '2011' }]
    },
    {
        id: 'b-87', name: 'Steve Kerr', birthDate: '1965-09-27', sport: 'basketball', category: 'historical',
        clubs: [{ name: 'Phoenix Suns', years: '1988-1989' }, { name: 'Cleveland Cavaliers', years: '1989-1992' }, { name: 'Chicago Bulls', years: '1993-1998' }, { name: 'San Antonio Spurs', years: '1999-2001' }, { name: 'Portland Trail Blazers', years: '2001-2002' }, { name: 'San Antonio Spurs', years: '2002-2003' }]
    },
    {
        id: 'b-88', name: 'Robert Horry', birthDate: '1970-08-25', sport: 'basketball', category: 'historical',
        clubs: [{ name: 'Houston Rockets', years: '1992-1996' }, { name: 'LA Lakers', years: '1997-2003' }, { name: 'San Antonio Spurs', years: '2003-2008' }]
    },
    {
        id: 'b-89', name: 'Ben Wallace', birthDate: '1974-09-10', sport: 'basketball', category: 'historical',
        clubs: [{ name: 'Washington Wizards', years: '1996-1999' }, { name: 'Orlando Magic', years: '1999-2000' }, { name: 'Detroit Pistons', years: '2000-2006' }, { name: 'Chicago Bulls', years: '2006-2008' }, { name: 'Cleveland Cavaliers', years: '2008-2009' }, { name: 'Detroit Pistons', years: '2009-2012' }]
    },
    {
        id: 'b-90', name: 'Trae Young', birthDate: '1998-09-19', sport: 'basketball', category: 'active',
        clubs: [{ name: 'Atlanta Hawks', years: '2018-' }]
    },
    {
        id: 'b-91', name: 'Ja Morant', birthDate: '1999-08-10', sport: 'basketball', category: 'active',
        clubs: [{ name: 'Memphis Grizzlies', years: '2019-' }]
    },
    {
        id: 'b-92', name: 'Zion Williamson', birthDate: '2000-07-06', sport: 'basketball', category: 'active',
        clubs: [{ name: 'New Orleans Pelicans', years: '2019-' }]
    },
    {
        id: 'b-93', name: 'Bam Adebayo', birthDate: '1997-07-18', sport: 'basketball', category: 'active',
        clubs: [{ name: 'Miami Heat', years: '2017-' }]
    },
    {
        id: 'b-94', name: 'De\'Aaron Fox', birthDate: '1997-12-20', sport: 'basketball', category: 'active',
        clubs: [{ name: 'Sacramento Kings', years: '2017-' }]
    },
    {
        id: 'b-95', name: 'Domantas Sabonis', birthDate: '1996-05-03', sport: 'basketball', category: 'active',
        clubs: [{ name: 'Unicaja', years: '2012-2016' }, { name: 'OKC Thunder', years: '2016-2017' }, { name: 'Indiana Pacers', years: '2017-2022' }, { name: 'Sacramento Kings', years: '2022-' }]
    },
    {
        id: 'b-96', name: 'Pascal Siakam', birthDate: '1994-04-02', sport: 'basketball', category: 'active',
        clubs: [{ name: 'Toronto Raptors', years: '2016-2024' }, { name: 'Indiana Pacers', years: '2024-' }]
    },
    {
        id: 'b-97', name: 'Brandon Ingram', birthDate: '1997-09-02', sport: 'basketball', category: 'active',
        clubs: [{ name: 'LA Lakers', years: '2016-2019' }, { name: 'New Orleans Pelicans', years: '2019-' }]
    },
    {
        id: 'b-98', name: 'Jaylen Brown', birthDate: '1996-10-24', sport: 'basketball', category: 'active',
        clubs: [{ name: 'Boston Celtics', years: '2016-' }]
    },
    {
        id: 'b-99', name: 'Jamal Murray', birthDate: '1997-02-23', sport: 'basketball', category: 'active',
        clubs: [{ name: 'Denver Nuggets', years: '2016-' }]
    },
    {
        id: 'b-100', name: 'LaMelo Ball', birthDate: '2001-08-22', sport: 'basketball', category: 'active',
        clubs: [{ name: 'Illawarra Hawks', years: '2019-2020' }, { name: 'Charlotte Hornets', years: '2020-' }]
    }
];
