(async function (){
    let results = await fetch('http://127.0.0.1:3001/api/recipes')
    console.log(results)
}())