// início do desafio, boa sorte pra mim...

alert('bem vindo ao meu desafio, espero que goste do resultado 😀');

//exercise 01
console.log('exercice 01 ⬇️' );

let day = "day"

if( day == "day" ) {
    console.log( 'clear');
}
else if (day != "day") {
    console.log('is from night');
}
 
//exercice 02
console.log('exercice 02 ⬇️' );

let pairNumbers = 0;
for(let pairNumbers = 0; pairNumbers <=20; pairNumbers +=2) {
    console.log(pairNumbers);
}

//exercice 03
console.log('exercice 03 ⬇️' );

function color (one, two, three){
    console.log( 'My favorite colors: ' + one + two + three);
}
color('blue ', 'black ', 'red')

//exercice 04
console.log('exercice 04 ⬇️' );

function myNameIs (name){
    console.log('My name is ' + name );
}
myNameIs('Pietro')

//exercice 05
console.log('exercice 05 ⬇️' );

function myTastes (name, years, music){
    console.log('My name is '+ name + ', my age is '+ years + ' , my favorite music is' + music);    
}
myTastes('Pietro ', 17, ' arde outra vez' )

//exercice 06
console.log('exercice 06 ⬇️' );

function motherTastes (film, music){
    console.log('My favorite film is ' + film + ' and my favorite music is ' + music);    
}  
motherTastes ('mãos talentosas', 'mais uma vez')   

//exercice 07
console.log('exercice 07 ⬇️' );

function tripleResult (tripleTheValue){
    console.log(tripleTheValue * 3);
}
tripleResult (5)

//exercice 08
console.log('exercice 08 ⬇️' );

function iTastes (food){
    if(food == 'lasagna'){
    console.log(true);
    }
    else{
    console.log(false);    
    }
} 
iTastes ('lasagna')

//exercice 09
console.log('exercice 09 ⬇️' );

let book = ['A Cabana', 'Anne', 'O Alquimista', 'A Ponte de Haven', 'O Código da Inteligência']
    console.log(book);

//exercice 10
console.log('exercice 10 ⬇️' );

series = ['La Casa de Papel', 'Loki', 'Stranger Things']
series.unshift('Lupin');
    console.log(series);

//exercice 11
console.log('exercice 11 ⬇️' );

series = ['La Casa de Papel', 'Loki', 'Stranger Things']
series.pop();
    console.log(series);

//exercice 12
console.log('exercice 12 ⬇️' );

series = ['La Casa de Papel', 'Loki', 'Stranger Things']
series.push('Bom dia Verônica', 'You');
    console.log(series);

//exercice 13
console.log('exercice 13 ⬇️' );

series = ['La Casa de Papel', 'Loki', 'Stranger Things']
series.shift();
    console.log(series);

//exercice 14
console.log('exercice 14 ⬇️' );

let numbers = [7,5,6,3,8,9,2,1,4]
    console.log(numbers.sort());

//exercice 15
console.log('exercice 15 ⬇️' );

aboutMe = {
    name:'Pietro Candido da Silva dos Santos',
    years: 17,
    skills: 'multi instrumentista'
}
    console.log(aboutMe);

//exercice 16
console.log('exercice 16 ⬇️' );

aboutMe = {
    name:'Pietro Candido da Silva dos Santos',
    years: 17,
    skills: 'multi instrumentista'
}
    aboutMe.myBookFavorite ='O Rio';
    console.log(aboutMe);

//exercice 17
console.log('exercice 17 ⬇️' );

aboutMe = {
    name:'Pietro Candido da Silva dos Santos',
    years: 17,
    skills: 'multi instrumentista'
}
    aboutMe.myBookFavorite ='O Rio';
    console.log(aboutMe);
    delete aboutMe.skills;
    console.log(aboutMe);

//exercice 18
console.log('exercice 18 ⬇️' );

console.log('todos os exercícios estão sendo printados pra facilitar a visualização, espero que esteje gostando dos resultados até aqui!!! 😉')

//exercice 19
console.log('exercice 19 ⬇️' );

let register = [

    //person 1
    {
    name: 'Josivaldo',
    years: 78,
    telephone: '99234-7679',
    friends: ['Jéssica', 'Beto', 'Alan', 'Flores']
    },
    
    //person 2
    {
    name: 'Maria',
    years: 40,
    telephone: '98327-9956',
    friends: ['Mel', 'Cândido', 'Pedro', 'Rute']
    },

    //person 3
    {
    name: 'Isabella',
    years: 20,
    telephone: '94651-4034',
    friends: ['Linda', 'Patricia', 'Daniel', 'Laura']
    }, 

    //person 4
    {
    name: 'Fhabrychyo',
    years: 18,
    telephone:'95648-7397',
    friends: ['Pietro', 'Gabriel', 'Bianca', 'Breno']
    }, 

    //person 5
    {
    name: 'Renan Sampaio',
    years: 24,
    telephone:'99864-2625',
    friends: ['Cacau Santos', 'Jhour Bayron', 'Eli Soares', 'Leonardo Gonçalves']
    },
    
    ];
    console.log(register);

    //exercice 20
    console.log('exercice 20 ⬇️' );

    for (let i = 0; i < register.length; i++) {
        console.log(register[i].name + ": friends - " + register[i].friends[0]);
    }