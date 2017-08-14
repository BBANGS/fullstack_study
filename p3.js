//if문 #1
x=5;
if(1<=x || x<10){
  console.log("x is 1 to 10");
} else if(10<=x || x<20){
  console.log("x is 10 to 20");
} else{
  console.log("x<1 or x<=20");
}

x="a";
switch (x) {
  case "a":
    console.log("aaa");
    break;
  case "b":
    console.log("bbb");
    break;
  default:
    console.log("wrong message");
}

//for문
arr = [];
for(a=0;a<100;a++){
  arr[a]=10*a;
}
for(i=0;i<arr.length; i++){
  arr[i] += (i+1)*10;
}
for(i=0;i<arr.length; i++){
  console.log(arr[i]);
}
