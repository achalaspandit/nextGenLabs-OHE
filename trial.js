var rows,i,k,j;
let fs = require('fs');
let all = fs.readFileSync('sample.txt', "utf8");  
all = all.trim();
let lines = all.split("\r\n");
rows= lines.length;
let result=[];
for (let i = 0; i < rows; ++i) 
{   
    let tokens = lines[i].split(' ');
    result.push(tokens);
}
function matrix( rows, cols){

    var arr = [];
  
    // Creates all lines:
    for(var i=0; i < rows; i++){
  
        // Creates an empty line
        arr.push([]);
  
        // Adds cols to the empty line:
        arr[i].push( new Array(cols));
    
        
    }
  
  return arr;
  }
for (i=0;i<rows;i++)
        {   for(j=0; j<rows; j++)
                result[i][j]= parseInt(result[i][j]);
        }
var p,u=0;
var nearv=[50];
var t=matrix(rows,3);
var mincost=0;
for(i=1;i<rows;i++)
{
    nearv[i]=1;
}
nearv[0]=0;
for(i=0;i<rows;i++)
{
    let min=999;
    for(j=0;j<rows;j++)
    {    p= nearv[j];
        if(nearv[j]!=0 && result[j][p]<min)
        {
            min=result[j][nearv[j]];
            u=j;
        }
        
    }
    t[i][1]=++u;
    t[i][2]=++nearv[u];
    t[i][3]=min;
    mincost+=min;
    nearv[u]=0;
    for(k=0;k<rows;k++)
    {
        if(nearv[k]!=0&&result[k][nearv[k]]>result[k][u])
        {
            nearv[k]=u;
        }
    }
}
console.log(t);