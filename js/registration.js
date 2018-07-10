function register(){
    let firstname = $("#fn_input").val();
    let lastname = $("#ln_input").val();
    let email = $("#mail_input").val();
    let username = $("#username_input").val();
    let password = $("#password_input").val();
    let fn_err = $("#fn_err");
    let ln_err = $("#ln_err");
    let email_err = $("#mail_err");
    let username_err = $("#username_err");
    let password_err = $("#password_err");
    let inputs = new Array(firstname,lastname,email,username,password);
    let errors = new Array(fn_err,ln_err,email_err,username_err,password_err);
    let empty=0;
    for(let i=0;i<5;i++){
        if(inputs[i] == ''){
            empty+=1;
        }else{
            empty+=0;
        }
    }if(empty==0){
        console.log("ok");
        for(let i=0;i<5;i++){
            errors[i].html("");
        }
    $.ajax({
        type: 'POST',
        url: url,
        dataType: 'json',
        contentType: "application/json; charset=utf-8",
        data:JSON.stringify({
            'FirstName': firstname,
            'LastName': lastname,
            'Login': username,
            'Email': email,
            'Password': password
        }),
        success: function(){
            console.log("new user registered!");
            console.log(data);
        },
        error: function(){
            console.log("new user not registered!");
            console.log(data);
        }
        });
    }else{
        console.log("not ok");
        for(let i=0;i<5;i++){
            if(inputs[i] == ''){
                errors[i].html("Enter value!");
            }else{
                errors[i].html("");
            }
        }
    } 
}