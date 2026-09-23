const kgtogmconverter=(input:string | number):string |number |undefined=>{
if(typeof input ==='number'){
    return input *1000
}
else if (typeof input ==="string"){
    const [value]=input.split("")
    return `converted output is:${Number(input)*1000}`
}
}
const result1=kgtogmconverter(1)