import GameSavingLoader from '../homework__1';

test('load', () => {
    const data = { "id": 9,
                   "created": 1546300800,
                   "userInfo": { 
                       "id":1,
                       "name":"Hitman",
                       "level":10,
                       "points":2000 
                    } 
                } 
    return expect(GameSavingLoader.load()).resolves.toEqual(data);
});