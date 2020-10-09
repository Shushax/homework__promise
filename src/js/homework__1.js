import json from './parser';
import read from './reader';

export default class GameSavingLoader {

    static load() {
        return new Promise((resolve, reject) => {
            const data = read();
            resolve(data);
            }).then((data) => {
                const value = json(data);
                return value;
            }).then((value) => {
                return value; // ??? value или ???
            });
    }
}