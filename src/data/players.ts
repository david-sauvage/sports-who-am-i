import type { Player } from '../types';

export const players: Player[] = [
    {
        id: '1',
        name: 'Zinedine Zidane',
        birthDate: '1972-06-23',
        sport: 'football',
        clubs: [
            { name: 'AS Cannes', years: '1989-1992' },
            { name: 'Girondins de Bordeaux', years: '1992-1996' },
            { name: 'Juventus', years: '1996-2001' },
            { name: 'Real Madrid', years: '2001-2006' }
        ]
    },
    {
        id: '2',
        name: 'Tony Parker',
        birthDate: '1982-05-17',
        sport: 'basketball',
        clubs: [
            { name: 'Paris Racing', years: '1999-2001' },
            { name: 'San Antonio Spurs', years: '2001-2018' },
            { name: 'ASVEL', years: '2011' },
            { name: 'Charlotte Hornets', years: '2018-2019' }
        ]
    },
    {
        id: '3',
        name: 'Cristiano Ronaldo',
        birthDate: '1985-02-05',
        sport: 'football',
        clubs: [
            { name: 'Sporting CP', years: '2002-2003' },
            { name: 'Manchester United', years: '2003-2009' },
            { name: 'Real Madrid', years: '2009-2018' },
            { name: 'Juventus', years: '2018-2021' },
            { name: 'Manchester United', years: '2021-2022' },
            { name: 'Al Nassr', years: '2023-' }
        ]
    }
];
