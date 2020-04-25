const coffeMachine = [
    {
        name: 'Tea',
        price: 100
    },
    {
        name: 'Coffe',
        price: 500
    }
];

const c = coffeMachine.map(item => item.name);
localStorage.setItem('drinkNames', JSON.stringify(c));
if (localStorage.getItem('all')!= undefined){
    all = JSON.parse(localStorage.getItem('all'));
    out();
}
function Main() {
    let choice = document.getElementById("drinks").value;
    let pay = document.getElementById("cash").value;
    let sum;
    for (let item of coffeMachine) {
        if (choice == item.name) {
            sum = pay - item.price
        }
    };
    const all = coffeMachine.find(item => item.name === choice);
    all.change = sum;
    localStorage.setItem("all", JSON.stringify(all));
    out();
};
document.getElementById("btn").onclick = Main;
function out() {
    let out = '';
    for (let key in all) {
        out += key + "_" + all[key] + "<br>";
        if (all.change < 0) {
            alert("Մուտքագրված գումարը բավարար չէ գնումնեեր կատարելու համար");
            break;
        }
    }
    document.getElementById('out').innerHTML = out;
};

