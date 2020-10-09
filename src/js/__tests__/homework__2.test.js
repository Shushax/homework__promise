import GameSavingLoader from '../homework__2';

test('load__2', async () => {
    const data = { "id": 9,
                   "created": 1546300800,
                   "userInfo": { 
                       "id":1,
                       "name":"Hitman",
                       "level":10,
                       "points":2000 
                    } 
                } 
    await expect(GameSavingLoader.load()).resolves.toEqual(data);
})