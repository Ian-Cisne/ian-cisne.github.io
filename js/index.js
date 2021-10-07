$("document").ready(function(){
    var child = $(".card").last();

    $("#aniadir").click(function(){
        child.clone().appendTo("#container-principal");
    });
    $("#eliminar").click(function(){
        $("#container-principal").children()[0].remove();
    });
})