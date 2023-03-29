//Task 1

let correct = true;
let incorrect = false;
let number = 17;
let nothing = undefined;
let none = null;

console.log(typeof(correct), typeof(incorrect),typeof(number), typeof(nothing), typeof(none) )

//Task 2

let height = 15;
let width = 20;

if (height>width)
{console.log ('big one: ' + height)}
else (console.log('big one: ' + width));


//Task 3

let count = 1;
while (count<=20)
{
    if (count%3 == 0)
    {
        console.log(count)
    }
    count++;
}

//Task 4

let key = true
let documents = true
let pen = true
let apple = false
let orange = true
let shouldGoToWork = null;

if ( key && documents && (orange || apple))
{shouldGoToWork = true;}
else
{shouldGoToWork = false;}

if (shouldGoToWork = true)
{console.log('You can go to work freely!')}
else
{console.log("You can't go to work.")}

//Task 5

let user_number = prompt ("Enter any number", 'number');
if (user_number%15 == 0)
{console.log('FizBuz')}
else if (user_number%5 == 0)
{console.log('Fiz')}
else  if(user_number%3 == 0)
{console.log('Buz')}

//Task 6
let user_age = prompt ("Enter your age", 'age');
if (user_age>18)
{console.log('Попей пивка')}
else if (user_age<18)
{console.log('Пей колу')}

if(user_age>=16 && user_age<=18)
{console.log('Можешь выкурить сигаретку, только маме не говори')}

// Task 7

let  cardinal_direction = prompt ("Enter your favourite cardinal direction", 'maybe east?');
switch(cardinal_direction){
    case 'east':
        {console.log('на восток пойдешь разработчиком станешь')}
    break;
    case 'west':
        {console.log('на запад пойдешь верного друга найдешь')}
    break;
    case 'south':
        {console.log('на юг пойдешь счастье найдешь')}
    break;
    case 'north':
        {console.log('на север пойдешь много денег найдешь')}
    break;
    default:
        {console.log('Please try again')}
}


// Advanced Task 2

let main_number = prompt ("Enter any number", '10');
let minus_number = prompt ("How much do you want to subtract from the number?", '5');
let plus_number = prompt ("How much do you want to add to the number?", '15');
let multiply_number = prompt ("By how much do you want to multiply the number?", '4');
let divide_number = prompt ("By how much do you want to dividce the number?", '5');
let result = ((((main_number - minus_number) + Number(plus_number)) * multiply_number) / divide_number);

//  let result = main_number - minus_number;
//  console.log(result)
//  result =  Number(result) + Number(plus_number);
//  console.log(result)
//  result *= multiply_number;
//  console.log(result)
//  result /= divide_number;

alert(`((((${main_number} - ${minus_number}) + ${plus_number}) * ${multiply_number}) / ${divide_number}) = ${result}`)


// Advanced Task 3

let text = '#'
let count_3 = 1;
while (count_3 < 7)
{
    console.log(text)
    text += '#'
    count_3++;
}