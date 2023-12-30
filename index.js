let arr = [
    { name: "user1", age: 28 ,isVerified :true}, // arr[0]
    { name: "user2", age: 25 ,isVerified :false}, // arr[1]
    { name: "user3", age: 38 ,isVerified :true}, // arr[2]
    { name: "user4", age: 25 ,isVerified :true}, // arr[3]
  ];
  
  function filterArray() {
    let tempArr = [];  // temp array 
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].isVerified === true || arr[i].age < 30) { 
          // true                         //true 
        tempArr.push(arr[i]);
      }
    }
    return tempArr;
  }
  
  // console.log(arr);
  let VerfiedUserwithAgelessthan30  = filterArray();
  console.log(VerfiedUserwithAgelessthan30,"Verfied User with Age less than 30");
  