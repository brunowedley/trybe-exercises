n = 5;

for(let linha = 1; linha <= n ; linha+=1){
  let output = "";
  for(let col = 1; col <= n; col +=1){
    if(col <= (n-linha)){
      output += " ";
    } else {
      output += "*";
    }
  }
  console.log(output);
}