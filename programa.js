document.getElementById('calculate').addEventListener('click', function(){
    debugger
    
    const av1 =document.getElementById('av1').value
    const av2 =document.getElementById('av2').value
    const av3 =document.getElementById('av3').value
    const avt = document.getElementById('avt').value

    if(av1 > 10 || av1 < 0 || av2 > 10 || av2 < 0 || av3 > 10 || av3 < 0 || avt > 10 || avt <0){
    alert("Digite um valor de 0 a 10")
    location.reload()

    }

    const total = ((av1 *25) + (av2*25) + (av3*20) + (avt*30)) / 100
   
    document.getElementById('total').innerHTML = (total)
});




