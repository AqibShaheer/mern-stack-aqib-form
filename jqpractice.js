$(function(){
    $("#submit").click(handleform)
});

function handleform(e){
    var namecheck = $("#name").val();
    if(!namecheck)
    {
        $("#name").addClass("error");
        
        e.preventDefault();
        return;
    }
    if (namecheck.length < 5) {
        $("#name").after('<p class="wrongname wrong" style="color:red">Please enter more than 5 characters</p>')
    }

    var emailcheck = $("#email").val();
    if(!emailcheck)
    {
        $("#email").addClass("error");
        e.preventDefault();
        return;
    }


    var passwordcheck = $("#password").val();
    if(!emailcheck)
    {
        $("#password").addClass("error");
        e.preventDefault();
        return;
    }

    if (passwordcheck.length < 5) {
        $("#password").after('<p class="wrongpassword wrong" style="color:red">Please enter more than 5 characters</p>')
    }

    var confirmpasswordcheck = $("#confirmpassword").val();
    if(!confirmpasswordcheck)
    {
        $("#confirmpassword").addClass("error");
        e.preventDefault();
        return;
    }

    if(passwordcheck != confirmpasswordcheck){
        $("#confirmpassword").after('<p class="wrongpasswordmatch wrong" style="color:red">Passwords do not match</p>')
        e.preventDefault();
    }
}
