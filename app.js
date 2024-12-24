let input=prompt("what would you like to do?");
const todos=['Collect Eggs','Clean Litter Box'];
while(input!=='quit' && input!=='q'){
    if(input==='list'){
        console.log('**********')
        for(let i=0;i<todos.length;i++){
            console.log(`${i}: ${todos[i]}`);
        }
        console.log('**********')
    }else if(input==='new'){
        const newTodo=prompt('ok,what would you like to do?');
        todos.push(newTodo);
        console.log(`${newTodo} added to the list`)
    }else if(input==='delete'){
        const ind=parseInt(prompt("enter index to delete"));
        if(!Number.isNan(ind)){
        const deleted=todos.splice(ind,1);
        console.log(`Ok, deleted ${deleted[0]}`);
        }else{
            console.log('Unknown index')
        }
    }
    input=prompt("what would you like to do?")
}
console.log("YOU QUIT THE APP!");