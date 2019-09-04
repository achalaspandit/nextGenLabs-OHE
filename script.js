var rows;
//function loadTxt(fn) 
    let fs = require('fs');
    let all = fs.readFileSync('sample.txt', "utf8");  // giant string
    all = all.trim();  // strip final crlf in file
    let lines = all.split("\r\n");
    rows= lines.length;
    var result=[];
    for (let i = 0; i < rows; ++i) 
    {   
        let tokens = lines[i].split(' ');
    console.log(tokens);
    result.push(tokens);
    }
    for (i=0;i<rows;i++)
            {   for(j=0; j<rows; j++)
                    result[i][j]= parseInt(result[i][j]);
            }
    console.log(result);
//}
/*function fileinsert()
{
    var x = document.getElementById("textfile");
    if ('files' in x) 
    {
        if (!(x.files.length == '0'))
        {
            var matrix=loadTxt(x,' ');
            
        }
    } 
    document.getElementById("demo").innerHTML = matrix;
}*/