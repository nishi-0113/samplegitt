// プロパティーはキーと値のペアで構成されている
// メソッドはオブジェクトがプロパティとして持っている関数のこと

const obj = {
    text: function () {
        console.log("a")
    }
}
obj.text();

function num(x) {
    const result = x + 1
    console.log(result);
};
num(4);

function num1(x, y) {
    const result = x + y
    console.log(result);
};
num1(5, 9);


function fruit(name, price) {
    const result = name + "の値段は" + price + "円です。"
    return result;
};
const fruits = fruit("apple", 250);
console.log(fruits);



function addTax(price, func) {
    // priceは値段
    // funcは実行する関数名
    // 税込み価格を計算して四捨五入して整数にしている(スコープ内でしか参照できません。)
    const taxPrice = Math.round(price * 1.10);
    func(taxPrice);
}

// トマトの税込み価格をコンソールに表示させる処理
function tomato(taxPrice) {
    console.log(`トマトの税込み価格${taxPrice}円`);
}
// 玉ねぎの税込み価格をコンソールに表示させる処理
function onion(taxPrice) {
    console.log(`玉ねぎの税込み価格は${taxPrice}円です。`);
}

const tomatoPrice = 230;
const onionPrice = 100;

addTax(tomatoPrice, tomato);
addTax(onionPrice, onion);