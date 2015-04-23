$(function(){

//EXTENDIENDO LA FUNCION CONTAINS PARA HACERLO CASE-INSENSITIVE
  $.extend($.expr[":"], {
"containsIN": function(elem, i, match, array) {
return (elem.textContent || elem.innerText || "").toLowerCase().indexOf((match[3] || "").toLowerCase()) >= 0;
}
});
//-------------------------------------------------------------

    // INICIA GENERACION DE BUSQUEDA
            $(".rs-search").bind("keyup", function(evt){
                //console.log($(this).val().trim());
                if(evt.type == 'keyup')
                {
                    $(".rs-table tr:containsIN('"+$(this).val().trim()+"')").css('display','table-row');
                    $(".rs-table tr:not(:containsIN('"+$(this).val().trim()+"'))").css('display','none');
                    $(".rs-table tr[class='rs-no']").css('display','table-row');
                    if($(this).val().trim() === '')
                    {
                        $(".rs-table tr").css('display','table-row');
                    }
                }

            });
        // TERMINA GENERACION DE BUSQUEDA
});