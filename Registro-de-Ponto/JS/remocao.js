var remove = document.querySelectorAll("#TbHorario");
remove.forEach(function(TbHorario){
TbHorario.addEventListener("dblclick", function(){
confirm("Desejar excluir os Registros?")

    this.remove();
});

});