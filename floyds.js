var input=document.getElementById("textfile");           
input.addEventListener("change", function(){
    var rows,i,k,j;
    let fs = require('fs');
    let all = fs.readFileSync('textfile', "utf8");  
    all = all.trim();
    let lines = all.split("\r\n");
    rows= lines.length;
    let result=[];
    for (let i = 0; i < rows; ++i) 
    {   
        let tokens = lines[i].split(' ');
        result.push(tokens);
    }
    for (i=0;i<rows;i++)
            {   for(j=0; j<rows; j++)
                    result[i][j]= parseInt(result[i][j]);
            }
    for(k=0;k<rows;k++)
    {
        for(i=0;i<rows;i++)
        {
            for(j=0;j<rows;j++)
            {
                if(result[i][j]>result[i][k]+result[k][j])
                    result[i][j]=result[i][k]+result[k][j];
            }
        }
    }
    document.getElementById("output").innerHTML=result

})