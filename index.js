var stdin = process.stdin;
stdin.setRawMode(true);
stdin.resume();
stdin.setEncoding('utf8');
//🚀
var leftIndicator = 7;
var topIndicator = 7;
var moonLeftIndicator = 10;
var moonTopIndicator = 3;

function prepare(left, top, moonLeft, moonTop) {
    let screenRows = [];
    for (let rowNumber = 0; rowNumber < 15 ; rowNumber++) {
        let row = [];
        for (let columnNumber = 0; columnNumber < 20 ; columnNumber++) {
            
            if (moonLeft == columnNumber && rowNumber == moonTop) { 
                row.push('🌚');
                columnNumber++;
            } else
            if (left == columnNumber && rowNumber == top) {
                row.push('🚀');
                columnNumber++;
            } else {
                if (columnNumber == 19) {
                    row.push('|'); 
                } else if (rowNumber == 0) {
                    row.push('-');
                } else if (rowNumber == 14) {
                    row.push('_');
                }
                else {
                    row.push(' ');
                }
            }
        }
        screenRows.push(row);
    }
    return screenRows;
}

function render(screenRows) {
    let i = 1;
    screenRows.forEach(row => {
        const debugMode = `${i > 9 ? i : '0' + i}`;
        process.stdout.write(`|`);
        row.forEach(col => {
            process.stdout.write(col)
        })
        process.stdout.write('\n')
        i++;
    });
}


console.clear(); 
render(prepare(leftIndicator,topIndicator, moonLeftIndicator, moonTopIndicator));
stdin.on('data', function(key){
    console.clear(); 
    if (key == '\u001B\u005B\u0041') {//up
       topIndicator--;
    }
    if (key == '\u001B\u005B\u0043') {//right
        leftIndicator++; 
    }
    if (key == '\u001B\u005B\u0042') {//down
        topIndicator++;
    }
    if (key == '\u001B\u005B\u0044') {//left
        leftIndicator--;
    }
    render(prepare(leftIndicator,topIndicator, moonLeftIndicator, moonTopIndicator));
    //console.log(leftIndicator)
    if (key == '\u0003') { process.exit(); }    // ctrl-c
});
