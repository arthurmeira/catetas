let catOpt = document.getElementById('catetoOposto');
let catAdj = document.getElementById('catetoAdjascente');
let btn = document.getElementById('btn');
let hipot = document.getElementById('hipot');


btn.onclick = function () {
    let h = (catOpt.value * catOpt.value) + (catAdj.value * catOpt.value);
    hipot.innerText =  Math.sqrt(h);
}