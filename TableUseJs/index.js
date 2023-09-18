var arr=
[
    {
        id:1,
        name:'rohith',
        age:20
    },
    {
        id:2,
        name:'Mahi',
        age:13

    },
    {
        id:3,
        name:'Vamsi',
        age:40

    },
];
var tbl=document.createElement('table');
var tbrows=document.createElement('tr');
var content=Object.keys(arr[0]); /* to print the keys in Object */
/* create table head */
for(var key of content){
var headcell=document.createElement('th');
headcell.textContent=key;
tbrows.appendChild(headcell);
}
tbl.appendChild(tbrows); 
/* create table data  */      
for(var data of arr){   
    var tdrow=document.createElement('tr');
    for(var key of content){
        var tdcontent=document.createElement('td');
        tdcontent.textContent=data[key];
        tdrow.appendChild(tdcontent);
    }
    tbl.appendChild(tdrow);
}
document.body.appendChild(tbl);
tbl.setAttribute('class','tablename');