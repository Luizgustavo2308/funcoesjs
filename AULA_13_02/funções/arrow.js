const messag = () => {
    console.log("flash");
}
messag();

const messag2 = (messag) => {
    console.log(messag);
}
messag2("nao ha ferrolho, nem porta que se feche diante do meu altar");


const increment = n => n + 1;

const increment2 = n => {return n + 1}



console.log(increment(1));
console.log(increment2(2));


