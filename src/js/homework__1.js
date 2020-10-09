import json from './parser';
import read from './reader';

export default class GameSavingLoader {

    static load() {
        return new Promise((resolve, reject) => {
            const data = read();
            const value = json(data);
            resolve(value);
        }).then((value) => {
            return value;
        })
    }
}