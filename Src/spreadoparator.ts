const getuse=(input:string | null)=>{
    if(input){
        console.log( `form db:${input}`)
    }
    else{
        console.log('Form db: all user');
    }
}
getuser(null)