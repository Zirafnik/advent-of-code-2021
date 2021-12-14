const fs = require('fs/promises');

async function part1() {
    const file = await fs.readFile('./inputs/day01.txt');
    let input = file.toString();

    let arr = input.split('\n').map(num => parseInt(num));

    let counter = 0;
    for(let i = 1; i < arr.length; i++) {
        if(arr[i - 1] < arr[i]) {
            counter++;
        }
    }

    return counter;
}

async function part2() {
    const file = await fs.readFile('./inputs/day01.txt');
    let input = file.toString();

    let arr = input.split('\n').map(num => parseInt(num));

    //get sums
    let sums = [];
    for(let i = 0; i < arr.length; i++) {
        let sum = arr[i] + arr[i+1] + arr[i+2];
        sums.push(sum);
    }

    let counter = 0;
    for(let i = 1; i < sums.length; i++) {
        if(sums[i-1] < sums[i]) {
            counter++;
        }
    }

    return counter;
}

part1().then(count => console.log('Part1: ' + count));
part2().then(count => console.log('Part2: ' + count));