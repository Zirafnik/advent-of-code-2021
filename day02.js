const fs = require('fs/promises');

let pos = {
    horizontal: 0,
    depth: 0
}

async function part1() {
    const file = await fs.readFile(`./inputs/day02.txt`);
    let input = file.toString();
    
    //get aray of objects {command, value}
    let commands = input.split('\n').map(command => {
        let arr = command.split(' ');

        return {
            command: arr[0],
            value: parseInt(arr[1])
        }
    })

    //update pos for each command
    commands.forEach(obj => {
        if(obj.command === 'forward') {
            pos.horizontal += obj.value;
        } else if(obj.command === 'down') {
            pos.depth += obj.value;
        } else if(obj.command === 'up') {
            pos.depth -= obj.value;
        }
    })

    return pos.horizontal * pos.depth;
}

part1().then(val => console.log(val));