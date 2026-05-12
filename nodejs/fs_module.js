const fs = require("fs");

// create file and write data after 2s

setTimeout(()=> {
    fs.writerFile("sample.txt",)
});


// append file execute after js
setTimeout (()=>{
    fs.appendFile{
        "sample.txt",
        "\n second time data insertion This is sample file creating by node",
        ()=> {
            console.log("******data appended successfully after 3s****");
            
        },
    };

},3000);