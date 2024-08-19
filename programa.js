document.getElementById('calculate').addEventListener('click', function(){
    debugger
    
    const av1 =document.getElementById('av1').value
    const av2 =document.getElementById('av2').value
    const avt = document.getElementById('avt').value

    if(av1 > 10 || av1 < 0 || av2 > 10 || av2 < 0 || avt > 10 || avt <0){
    alert("Digite um valor de 0 a 10")
    location.reload()

    }

    const total = ((av1 *25) + (av2*25) + (avt*50) / 100
   
    document.getElementById('total').innerHTML = (total)
});




