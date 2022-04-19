let n = 5

function Random(min, max) 
{
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min)) + min
}

let old = Array() 
for (let i = 1; i <= 5; i++)
{
    old.push(Random(1, 11))
}
alert(old)
let last = old.reverse()[0]
alert(`the last nmber is: ${last}`)

let New = Array()
for (let i = 1; i <= 5; i++)
{
    New.push(Random(last+1, last+11))
}
alert(New)