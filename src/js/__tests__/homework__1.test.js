import GameSavingLoader from '../homework__1';

test('load', () => {
    return expect(GameSavingLoader.load().resolves.toBe())
});