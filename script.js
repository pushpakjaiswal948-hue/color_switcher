


const allBtn = document.querySelectorAll('.btnbox button')
// console.log(allBtn);

allBtn.forEach((btn) => {
    btn.style.backgroundColor = btn.innerHTML;

    btn.addEventListener('click', (e) => {
        document.body.style.backgroundColor = e.target.innerHTML;
    })
})


console.log(Math.random())
console.log(Math.random() * 10)
console.log(Math.random() * 10 + 10)
console.log(Math.random() * 100 + 100)