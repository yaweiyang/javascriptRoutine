for (let i = 0; i < 10; ++i) {
    console.log('循环',i);
}

let man = {
    name: 'yangyawei',
    age: 26,
    city: 'Beijing'
};
for (let key in man) {
    console.log('man',key,typeof (key));
}

let names = ['Bart', 'Lisa', 'Adam'];
for (let key in names) {
    console.log('Hello,'+ names[key] + '!');
}

