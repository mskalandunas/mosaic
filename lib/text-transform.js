'use strict';

const fs   = require('fs');

export function transform(file) {
    fs.readFileSync(file, 'utf8', (err, data) => {
        if (err) console.log(err);

        return data;
    });
}
