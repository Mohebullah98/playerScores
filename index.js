let Input= ["aPlayer,2", "bPlayer,1", "aPlayer,1", "cPlayer,5", "dPlayer,2", "ePlayer,1", "bPlayer,2", "dPlayer,1"];
 function scorePlayers(arr,k){
  let result=[];
  let result2=[];
   //Calculate player scores and store them with names
  let players = arr.reduce((acc,current,index)=>{
    let name, score;
	    let arr2=current.split(",");
	    if(acc.has(arr2[0])){
	    const exists = acc.get(arr2[0]);
	    name = arr2[0];
	    score =parseInt(exists.score)+ parseInt(arr2[1]);
	   }
	    else{
	    name = arr2[0];
	    score=parseInt(arr2[1]);
	 }
	 return acc.set(name,{name,score});
	 },new Map());
   //move player scores to results array
	   players.forEach((stats,name)=>{
	   result.push(stats);
	 })
   //sort results based on score first, if scores are same then sort based off of alphabetical order
	   result.sort((a,b)=>{
	    if(a.score<b.score) return 1;
	    if(a.score>b.score) return -1;
	    if(a.score==b.score){
	      if(a.name<b.name) return -1;
	      if(a.name>b.came) return 1;
	      return 0;
	 }
	 }) //push only top k results into return array
	  for(let i=0;i<k;i++){
	    result2.push(result[i]);
	 }
	 return result2;
	 }
	
	 console.log(scorePlayers(Input,3));
