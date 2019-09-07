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
for (i=0;i<rows;i++)
        {   for(j=0; j<rows; j++)
                result[i][j]= parseInt(result[i][j]);
        }

function matrix( rows, cols)
{
    var arr = [];
    for(var i=0; i < rows; i++)
    {
        arr.push([]);
        arr[i].push( new Array(cols));
    }
  
  return arr;
  }


var p,u=0;
var nearv=[50];
var t=matrix(rows,3);
var mincost=0;
for(i=2;i<rows;i++)
{
    nearv[i]=1;
}
nearv[1]=0;
for(i=1;i<rows;i++)
{
    let min=999;
    for(j=1;j<rows;j++)
    {    p= nearv[j];
        if(nearv[j]!=0 && result[j][p]<min)
        {
            min=result[j][nearv[j]];
            u=j;
        }
        
    }
    t[i][1]=u;
    t[i][2]=nearv[u];
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
t.splice(rows - 1, 1);
for(i=0;i<rows-1;i++)
    t[i].splice(0,1);
console.log(t);