var taux= 23;
//// les champs de saisie avec apl function
    document.querySelector("#cham1").addEventListener("input",function(){
        formule_brut(document.querySelector("#cham1").value);
        console.log(document.querySelector("#cham2").value);
        formule_net( taux);
    })
//une seule case a coché doit étre coché 
//les case a coché 

// le taux change selon le statut coché 
function test_statut(){
    
if (document.getElementById("Check1").checked== true) {
    taux=25.5;
    formule_net(taux);
    document.getElementById("Check2").checked = false;
    document.getElementById("Check3").checked = false;
    document.getElementById("Check4").checked = false;
    document.getElementById("Check5").checked = false;

}else if (document.getElementById("Check2").checked == true) {
    taux=1;
    formule_net(taux);
    document.getElementById("Check1").checked = false;
    document.getElementById("Check3").checked = false;
    document.getElementById("Check4").checked = false;
    document.getElementById("Check5").checked = false;

}else if (document.getElementById("Check3").checked == true) {
    taux=50;
    formule_net(taux);
    document.getElementById("Check2").checked = false;
    document.getElementById("Check1").checked = false;
    document.getElementById("Check4").checked = false;
    document.getElementById("Check5").checked = false;

}else if (document.getElementById("Check4").checked == true) {
    taux=45;
    formule_net(taux);
    document.getElementById("Check2").checked = false;
    document.getElementById("Check3").checked = false;
    document.getElementById("Check1").checked = false;
    document.getElementById("Check5").checked = false;

}else if (document.getElementById("Check5").checked == true) {
    taux=25;
    formule_net(taux);
    document.getElementById("Check2").checked = false;
    document.getElementById("Check3").checked = false;
    document.getElementById("Check4").checked = false;
    document.getElementById("Check1").checked = false;

}
}
//changer l'affichage dans le boutton bnt2 + quand je cheked le message change de donnée
document.getElementById("Check1").addEventListener("click",function(){
    document.getElementById("btn2").innerHTML = ("Taux % :"+taux);
    document.getElementById("message").innerHTML = ('Vous gagnier un salaire net mensuel de '+document.querySelector("#cham4").value+'£ ce qui représente un salaire brut mensuel de '+document.querySelector("#cham3").value+'£');
    var calc=(document.querySelector("#cham1").value)-(document.querySelector("#cham2").value);
    document.getElementById("message2").innerHTML = ('Si le taux de charges est dans la moyenne soit '+taux+'%, la différence entre le brut et le net sera de '+calc+'£ chaque mois'); 
})
document.getElementById("Check2").addEventListener("click",function(){
    document.getElementById("btn2").innerHTML = ("Taux % :"+taux);
    document.getElementById("message").innerHTML = ('Vous gagnier un salaire net mensuel de '+document.querySelector("#cham4").value+'£ ce qui représente un salaire brut mensuel de '+document.querySelector("#cham3").value+'£');
    var calc=(document.querySelector("#cham1").value)-(document.querySelector("#cham2").value);
    document.getElementById("message2").innerHTML = ('Si le taux de charges est dans la moyenne soit '+taux+'%, la différence entre le brut et le net sera de '+calc+'£ chaque mois'); 
})
document.getElementById("Check3").addEventListener("click",function(){
    document.getElementById("btn2").innerHTML = ("Taux % :"+taux);
    document.getElementById("message").innerHTML = ('Vous gagnier un salaire net mensuel de '+document.querySelector("#cham4").value+'£ ce qui représente un salaire brut mensuel de '+document.querySelector("#cham3").value+'£');
    var calc=(document.querySelector("#cham1").value)-(document.querySelector("#cham2").value);
    document.getElementById("message2").innerHTML = ('Si le taux de charges est dans la moyenne soit '+taux+'%, la différence entre le brut et le net sera de '+calc+'£ chaque mois'); 
})
document.getElementById("Check4").addEventListener("click",function(){
    document.getElementById("btn2").innerHTML = ('Taux % :'+taux);
    document.getElementById("message").innerHTML = ('Vous gagnier un salaire net mensuel de '+document.querySelector("#cham4").value+'£ ce qui représente un salaire brut mensuel de '+document.querySelector("#cham3").value+'£');
    var calc=(document.querySelector("#cham1").value)-(document.querySelector("#cham2").value);
    document.getElementById("message2").innerHTML = ('Si le taux de charges est dans la moyenne soit '+taux+'%, la différence entre le brut et le net sera de '+calc+'£ chaque mois'); 
})
document.getElementById("Check5").addEventListener("click",function(){
    document.getElementById("btn2").innerHTML = ('Taux % :'+taux);
    document.getElementById("message").innerHTML = ('Vous gagnier un salaire net mensuel de '+document.querySelector("#cham4").value+'£ ce qui représente un salaire brut mensuel de '+document.querySelector("#cham3").value+'£');
    var calc=(document.querySelector("#cham1").value)-(document.querySelector("#cham2").value);
    document.getElementById("message2").innerHTML = ('Si le taux de charges est dans la moyenne soit '+taux+'%, la différence entre le brut et le net sera de '+calc+'£ chaque mois'); 
})
//message quand je saisie un nombre dans input cham1
document.getElementById("cham1").addEventListener("input",function(){
    document.getElementById("message").innerHTML = ('Vous gagnier un salaire net mensuel de '+document.querySelector("#cham4").value+'£ ce qui représente un salaire brut mensuel de '+document.querySelector("#cham3").value+'£');
    var calc=(document.querySelector("#cham1").value)-(document.querySelector("#cham2").value);
    document.getElementById("message2").innerHTML = ('Si le taux de charges est dans la moyenne soit '+taux+'%, la différence entre le brut et le net sera de '+calc+'£ chaque mois'); 
});

//le salaire annuel brut sera saisie par l'utulisateur
// 2 function de calcule brut et net 
function formule_brut(val) {
    document.querySelector("#cham3").value = val/12;
    document.querySelector("#cham5").value=document.querySelector("#cham3").value/22;
    document.querySelector("#cham7").value=document.querySelector("#cham5").value/7;
    console.log(taux);
}
function formule_net(taux) {
    document.querySelector("#cham2").value= document.querySelector("#cham1").value-(document.querySelector("#cham1").value*taux)/100;
    document.querySelector("#cham4").value= document.querySelector("#cham3").value-(document.querySelector("#cham3").value*taux)/100;
    document.querySelector("#cham6").value= document.querySelector("#cham5").value-(document.querySelector("#cham5").value*taux)/100;
    document.querySelector("#cham8").value= document.querySelector("#cham7").value-(document.querySelector("#cham7").value*taux)/100;
console.log(taux);
}
// bouton smic
document.getElementById("btn1").addEventListener("click",function(){
    document.querySelector("#cham1").value=17.496;
    document.querySelector("#cham2").value=13.476 ;
    document.querySelector("#cham3").value=1.458 ;
    document.querySelector("#cham4").value=1.123 ;
    document.querySelector("#cham5").value=67.23;
    document.querySelector("#cham6").value=51.82 ;
    document.querySelector("#cham7").value=9.61;
    document.querySelector("#cham8").value=7.4;
    document.getElementById("message").innerHTML = ('Vous gagnier un salaire net mensuel de 1 123 £ ce qui représente un salaire brut mensuel de 1 458£');
    document.getElementById("message2").innerHTML = ('Si le taux de charges est dans la moyenne soit 23 %, la différence entre le brut et le net sera de 335 000 £ chaque mois'); 
    // les options seron verouillet 
    /*document.getElementById("Check1").checked = false;
    document.getElementById("Check2").checked = false;
    document.getElementById("Check3").checked = false;
    document.getElementById("Check4").checked = false;
    document.getElementById("Check5").checked = false;
*/
});



