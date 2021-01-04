$("input.tr_clone_add").live('click', function(){
    var new_row = $("#new-row-model tbody").clone();
    $("#table-data tbody").append(new_row.html());
});