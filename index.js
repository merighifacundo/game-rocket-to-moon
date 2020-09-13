var stdin = process.stdin;
stdin.setRawMode(true);
stdin.resume();
stdin.setEncoding('utf8');
//🚀
let right,left,top,bottom = 0;

stdin.on('data', function(key){
console.clear(); 
    if (key == '\u001B\u005B\u0041') {
        process.stdout.write('\n'); 
    }
    if (key == '\u001B\u005B\u0043') {
        process.stdout.write(' '); 
    }
    if (key == '\u001B\u005B\u0042') {
        process.stdout.write(' '); 
    }
    if (key == '\u001B\u005B\u0044') {
        process.stdout.write(' '); 
    }
    process.stdout.write('🚀       🌚')
    if (key == '\u0003') { process.exit(); }    // ctrl-c
});
