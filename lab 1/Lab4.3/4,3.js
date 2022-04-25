function Random(min, max) 
{
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min)) + min
};

// exercise 1
let marks = [];

for (let i = 1; i <= 5; i++) {
    marks.push(Random(1, 6))
}
alert(marks);

let average = 0
marks.forEach(el => average += el)
average /= 5
alert(average);

marks = marks.sort((a, b) => b - a)
alert(marks);

switch(marks[4])
{
    case 1:
        alert("Одиничник")
        break;
    case 2:
        alert("Двійочник")
        break; 
    case 3:
        alert("Трійочник")
        break; 
    case 4:
        alert("Хорошист")
        break; 
    case 5:
        alert("Відмінни")
        break; 
};

// 2
let customers = []
for (let i = 1; i <= 7; i++) {
    customers.push(Random(1, 101))
};

alert(customers.filter(el => el >= 20));
alert(Math.min(customers));
alert(Math.max(customers));
alert(customers.reduce((previousValue, currentValue) => previousValue + currentValue, 0));
alert(customers[5]);
alert(customers[6]);

// 3
let name = prompt("Name to count: ", "");
let names = [];
for (let i = 0; i < 5; i++)
{
    names.push(prompt("Name:", ""))
};

let num = 0
for (let i = 0; i < 5; i++)
{
    if (names[o] == name)
    {
        num ++
    }
};

/*5 
let mood = [
    { 
        mood:"Веселий",
        url:"https://w7.pngwing.com/pngs/180/962/png-transparent-smiley-emoticon-smiley-miscellaneous-smiley-desktop-wallpaper-thumbnail.png "
    },
    {
       mood:"Сумний",
       url:"https://w7.pngwing.com/pngs/222/140/png-transparent-sad-emoticon-iphone-emoji-sadness-smiley-emoticon-emoji-face-electronics-face-emoji-face-thumbnail.png "
    }
]

document.getElementById("number").onchange = () =>
{
    let Mood = document.getElementById("number").value
    document.getElementById("img").innerHTML = `<img src="${mood[Mood-1].url}">`
}
*/