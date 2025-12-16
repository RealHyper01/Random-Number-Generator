const rng = document.getElementById("rng")
const label = document.getElementById("label_rng")
const min = document.getElementById("min")
const max = document.getElementById("max")
let num  
let Min
let Max

min.addEventListener("input", function(){
        Min = min.value -1
})

max.addEventListener("input", function(){
        Max = max.value 
})


rng.onclick = function(){
    num = Math.floor(Math.random() * (Max - Min) + Min) +1
    label.textContent = num
}