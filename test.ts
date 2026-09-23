function add(num1:number, num2:number):number{
    return num1 + num2;
}
const addrow=(num1: number, num2: number): number=>num1 + num2
add (2,"2")

// object=>function =>method
const pooruser={
    name:'mezba',
    balance:0,
    addBalance(value:number):number{
        const totalbanlance= this.balance+value;
        return totalbanlance;
    }
}
pooruser.addBalance

const arr:number[]=[1,4,6]
const sqArray =arr.map((elem:number):number=>elem*elem)