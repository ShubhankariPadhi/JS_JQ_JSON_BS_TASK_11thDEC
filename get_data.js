$(document).ready(function(){
    $("#GET_TABLE").click(function () {
    $.getJSON("Employees.json",function(data){
        var employee_data='';

        $.each(data,function(key,value){
            employee_data +='<tr>';
            employee_data += '<td>'+value.id+'</td>';
            employee_data += '<td>'+value.name+'</td>';
            employee_data += '<td>'+value.type+'</td>';
            employee_data += '<td>'+value.dob+'</td>';
            employee_data += '<td>'+value.experience+'</td>';
            employee_data += '<td>'+value.dateOfJoining+'</td>';
            employee_data += '</tr>';

        });

        $("#emp_table").append(employee_data);

        });
    });


    $("#form_show").hide();


/*////////////////////////add row//////////////////////////////////////////*/


    $("#add_row").click(function () {
    $("#form_show").show();

    $("#add").click(function(){
        var table=document.getElementById("#emp_table");

        $("#emp_table").append(
            "<tr><td>"+$("#eid").val()+'</td>'
            +'<td>'+$("#name").val()+'</td>'
            +'<td>'+$("#type").val()+'</td>'
            +'<td>'+$("#dob").val()+'</td>'
            +'<td>'+$("#experience").val()+'</td>'
            +'<td>'+$("#dateOfJoining").val()+'</td></tr>'

            );



        });
    });


/*//////////////////////////////////// json  /////////////////////////////////////////////////////*/

   /* $.fn.serializeObject = function()
    {
        var o = {};
        var a = this.serializeArray();
        $.each(a, function() {
            if (o[this.name] !== undefined) {
                if (!o[this.name].push) {
                    o[this.name] = [o[this.name]];
                }
                o[this.name].push(this.value || '');
            } else {
                o[this.name] = this.value || '';
            }
        });
        return o;
    };

    $(function() {
        $('form').submit(function() {
            $('#result').text(JSON.stringify($('form').serializeObject()));
            return false;
        });
    });
*/



/*//////////////////////////////remove row ///////////////////////////////////////////////////*/
    $("#remove_row").click(function () {
        $("#form_show").show();

        $("#remove").click(function(){
            var table=document.getElementById("#emp_table");

           /* $("#emp_table").remove($("#eid").val()
                /!*"<tr><td>"+'</td>'
                +'<td>'+$("#name").val()+'</td>'
                +'<td>'+$("#type").val()+'</td>'
                +'<td>'+$("#dob").val()+'</td>'
                +'<td>'+$("#experience").val()+'</td>'
                +'<td>'+$("#dateOfJoining").val()+'</td></tr>'
*!/
            );*/



        });
    });








})

/*
$(document).ready(function(){
$("#add_details").on('submit',function (event) {

   event.preventDefault();
   $.ajax({

       url:"Employees.json",
       method:"POST",
       data:$(this).serialize(),
       dataType:'json',
       beforeSend:function () {
           $("#add").attr('disabled','disabled');
       },
       success:function (data) {
           $("#add").attr('disabled',false);
           if (data.id){
               var html='<tr>';
               html +='<td>'+data.id+'</td>';

               html += '<td>'+data.id+'</td>';
               html += '<td>'+data.name+'</td>';
               html += '<td>'+data.type+'</td>';
               html += '<td>'+data.dob+'</td>';
               html += '<td>'+data.experience+'</td>';
               html += '<td>'+data.dateOfJoining+'</td>';
               html += '</tr>';
               $("#table_data").prepend(html);
               $("#add_details")[0].reset();

           }
       }
   })
});

})*/
