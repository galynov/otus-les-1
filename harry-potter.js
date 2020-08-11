let size = 25;
let field = size * size;
let x = 0;
let y = 0;
let str = '';
for (let len = field; len > 0 ; len--) {
    if (len % size === 0 && len !== field) {
        str += "\n";
        y++;
        x = 0;
    }

    x > y
    ? str += '# ' : str += '. ';

    x++;

}
console.log(str);


/*
 * *___________________________________*
 *          НАЙДЕНЫЕ ЗАКЛИНАНИЯ:
 * 
 * 1) x > y
 * 2) x === y
 * 3) x + y == 24
 * 4) x + y < 30
 * 
 * 6) x < 10 || y < 10
 * 7) x > 15 && y > 15
 * 8) x * y = 0
 * 11) x == 1 || y == 1 || x == 23 || y == 23
 * 
 * 19) x === 24 || y === 24 || y === 0 || x === 0
 * 20) (x + y) % 2 === 0
 * 21) x % (y + 1) == 0
 * 22) (x + y) % 3 == 0
 */