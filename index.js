//var nome = document.querySelector("#exampleInputName");
//nome.value = "Felippe de Barros Ribeiro";
//nome.style.color = "blue";

var fields = document.querySelectorAll("#form-user-create [name]");
var user = {};

fields.forEach(function(field, index){

    if(field.name == "gender") {

        if(field.checked) {
            user.gender = field.value;  

        }
        

    } else {
        user[field.name] = field.nodeValue;
    }
    //console.log(field);
    //console.log(index);
    //console.log(field.name);
    //console.log(field.id, field.name, field.value, index);

});

console.log(user);