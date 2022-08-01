
const interpret = function(command) {
    let parseResult = "";
    let arrIndex = 0;
    while(arrIndex <= command.length-1){
        if(command[arrIndex] === "G"){
            parseResult += "G";
        }
        if(command[arrIndex] === "(" && command[arrIndex + 1] === ")"){
           parseResult += "o";
        }
        if(command[arrIndex] === "(" && command[arrIndex + 1] === "a" && command[arrIndex + 2] === "l" 
        && command[arrIndex + 3] === ")"){
            parseResult += "al";
        }
        arrIndex++;
        
    }
    
    return parseResult;
    
};

