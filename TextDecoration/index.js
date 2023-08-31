var text = document.getElementById('input_text');
var result = document.getElementById('result');
 display=() =>{
    result.value = text.value;
}
 Lower=()=> {
    result.style.textDecoration = 'underline';
    result.value = result.value.toLowerCase();
}
 Upper=()=> {
    result.style.textDecoration = 'underline';
    result.value = result.value.toUpperCase();
}
 underLine=()=> {
    result.style.textDecoration = 'underline';
}
 lineThrough=()=> {
    result.style.textDecoration = 'line-through';

}