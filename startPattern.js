//         *
//       *   *
//     *   *   *
//   *   *   *   *
// *   *   *   *   *

function startPattern1(n){
    for(let i=1;i<=n;i++){
      let str="";
      for(let j=1;j<=n-i;j++){
        str=str+" "; 
      }
      for(let k=1;k<=i;k++){
        str=str+" *";
      }
      console.log(str);
    }
}

// *
// * *
// * * *
// * * * *
// * * * * *

function startPattern2(n){
    for(let i=1;i<=n;i++){
        let str="";
        for(let j=1;j<=i;j++){
            str=str+"* ";
        }
        console.log(str);
    }
}

//       *
//     * *
//   * * *
// * * * *

function startPattern3(n){
    for(let i=1;i<=n;i++){
        let str="";
        for(let j=1;j<=n-i;j++){
            str=str+" ";
        }
        for(let k=1;k<=i;k++){
            str=str+"*";
        }
        console.log(str);
    }
}