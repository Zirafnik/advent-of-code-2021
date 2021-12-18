const fs = require('fs/promises');

async function part1() {
    const file = await fs.readFile('./inputs/day03.txt');
    let data = file.toString().split('\n');

    let gamma = '';
    let epsilon = '';
    //get gamma & epsilon binary
    for(let i = 0; i < data[0].length; i++) {
        let bin = [0, 0];
        for(let j = 0; j < data.length; j++) {
            let charNum = data[j][i];

            if(charNum === '1') {
                bin[1]++;
            } else {
                bin[0]++;
            }        
        }

        if(bin[1] > bin[0]) {
            gamma += '1';
            epsilon += '0';
        } else {
            gamma += '0';
            epsilon += '1';
        }
    }
    console.log(gamma);
    console.log(epsilon);
    return parseInt(gamma, 2) * parseInt(epsilon, 2);
}

async function part2() {
    const file = await fs.readFile('./inputs/day03.txt');
    let data = file.toString().split('\n');

    let oxygenGenerator = '';
    let co2Scrubber = '';

    let lifeSupport = parseInt(oxygenGenerator, 2) * parseInt(co2Scrubber, 2);

    


}

part1().then(val => console.log(val));