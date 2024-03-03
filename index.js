const numbers = [];

//с помощью цикла заполнить массив целыми числами от -10 до 10 включительно 
for (let i = -10; i <= 10; i++){
    numbers.push(i);
}
console.log(`Заполненный массив: ${numbers}`);

//с помощью циклов выполнить следующие операции
//удалить все отрицательыне числа 

for(let i = 0; i < numbers.length; i++){
    if(numbers[i] < 0){
        numbers.splice(i, 1);
        i--;
    }
}
console.log(`Массив без отрицательных чисел: ${numbers}`);

//возвести каждое число в квадрат 

for(i = 0; i < numbers.length; i++){
    numbers[i] = numbers[i] ** 2;
}
console.log(`Каждое число возведено в квадрат: ${numbers}`);

//отсортировать в порядке убывния

numbers.sort((a,b) => b-a);
console.log(`Числа отсортированы в порядке убывания: ${numbers}`);
