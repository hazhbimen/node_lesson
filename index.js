'use strict';

const fs = require('fs').promises;

const url = './users.json';

readJson(url);

async function readJson(url) {
    try {
        const data = await fs.readFile(url, 'utf-8');
        console.log(data);
        await fs.writeFile('./textFile', data);
    } catch (e) {
        throw e;
    }
}


console.log('asdasdasd');












/* function addRandomProperty(data) {
    const maleArray = [true, false, 'another'];
    return data.map((user) => {
        const item = maleArray[Math.floor(Math.random() * maleArray.length)];
        return user.male = item;
    });
} */


