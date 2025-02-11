
// 10.	Wite a program to print pattern.
// 1  
// 1 2  
// 1 2 3  
// 1 2 3 4  
// 1 2 3 4 5  


function pattern(rows) {
    let pattern = "";

    for (let i=1; i<= rows ;i++){
        for (let j = 1;j <= i; j++) {
            pattern += j + " ";
        }
        pattern += "\n";  
    }
    console.log(pattern);
}
pattern(5);