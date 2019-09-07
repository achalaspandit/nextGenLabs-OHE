var reader = new FileReader();
function readText(that){

    if(that.files && that.files[0]){
        var reader = new FileReader();
        reader.onload = function (e) {  
            var all=e.target.result;
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
            for(i=0;i<rows;i++)
                for(j=0;j<rows;j++)
                    if(i==j)
                            result[i][j]=0;
            document.getElementById('output').innerHTML= result;
        };
        reader.readAsText(that.files[0]);
    }
    } 