const arr=[
    {name:"Amit Kumar",age:30, gender:'Male'},
    {name:"Satish Kumar",age:25, gender:'Male'},
    {name:"Nisha Kumari",age:26, gender:'Female'},
    {name:"Priya Ranjan",age:30, gender:'Female'},
    {name:"Alok Kumar",age:24, gender:'Male'},
], key='gender';

function groupByKey(arr,key){
    const result={};
    for(let i=0;i<arr.length;i++){
        const groupByKey=arr[i][key];
        if(!result[groupByKey]){
            result[groupByKey]=[];
        }
        result[groupByKey].push(arr[i]);
    }
    console.log(result);
}
 groupByKey(arr,key);