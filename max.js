let arr=[-3, 5, 1, 3, 2, 10];
let max=arr[0];
let index=0;
for(let i=0;i<arr.length;i++){
    if(arr[i]>max){
        max=arr[i];
        index=i;
    }
}
alert("Max = "+max+" at position "+index);