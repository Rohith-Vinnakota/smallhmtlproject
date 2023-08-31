var text = document.getElementById('input_text');
var result = document.getElementById('result');
function display() {

    result.value = text.value;
}
console.log(result.value);
function Lower() {
    console.log(result.value);
    result.value = result.value.toLowerCase();

}
function Upper() {
    console.log(result.value);

    result.value = result.value.toUpperCase();

}
function underLine() {

    result.style.textDecoration = 'underline';
}
function lineThrough() {
    console.log(result.value);

    result.style.textDecoration = 'line-through';

}