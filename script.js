const btn_add = document.querySelector('.btn_blue');
const btn_null = document.querySelector('.btn_red');
const counterText = document.querySelector('.counter');
const DEFAULT_VALUE = 0;
let counter = DEFAULT_VALUE;

render(counter);

btn_add.addEventListener('click', function() {
    counter += 1;
    render(counter);
});

btn_null.addEventListener('click', function() {
    counter = DEFAULT_VALUE;
    render(counter);
})

function render(counter) {
    counterText.innerText = counter;
}
