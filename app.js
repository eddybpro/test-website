const section = document.querySelector('section');
const form = document.querySelector('.form')
const btn = document.querySelector('.btn')
const inputs = document.querySelectorAll('input');
const arr = [
    'moroccan dirham',
    'white',
    'bargain',
    'mint tea',
    'november 18th',
    'islam',
    'france',
    'march 2, 1956',
    'spanish',
    'couscous',
]

let result = 0;

btn.addEventListener('click',()=>{
    inputs.forEach(input=>{
        for (let i = 0; i < arr.length; i++) {
            if (input.checked && input.value == arr[i] ) {
                result++;
            }
        }
    })
    setTimeout(showResult(result),200)
})

function showResult(num){
    form.style.display = 'none'
    section.innerHTML=`
    <button class="back-btn" id="back">
        <i class="fa-solid fa-arrow-left"></i>
    </button>
    <div class='container'>
        <p>Your Grade is: ${num}/10</p>
        <i class="${num >= 5?'fa-solid fa-check':'fa-solid fa-xmark'}"></i>
    </div>`
    section.classList.add('flex');

    section.addEventListener('click',(e)=>{
        if (e.target.id == 'back') {
            location.reload()
        }
    })
}















