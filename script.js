let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let array = numbers;
function randomNum() {

    document.getElementById('number').style.display = 'block';

    let random_number = array[Math.floor(Math.random() * array.length)]
    let number_index = array.indexOf(random_number);
    array.splice(number_index, 1);
    document.getElementById('randomNum').innerText = random_number;
    if (array.length === 0) {
        if(confirm('Do you want to restart the function?')) {
            array = numbers;
        }
    }
}
