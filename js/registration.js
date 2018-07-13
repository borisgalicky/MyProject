function register(){
    let firstname = $("#fn_input").val();
    let lastname = $("#ln_input").val();
    let email = $("#mail_input").val();
    let username = $("#username_input").val();
    let password = $("#password_input").val();
    let passwordconf = $("#passwordconf_input").val();
    let fn_err = $("#fn_err");
    let ln_err = $("#ln_err");
    let email_err = $("#mail_err");
    let username_err = $("#username_err");
    let password_err = $("#password_err");
    let passwordconf_err = $("#passwordconf_err");
    let inputs = new Array(firstname,lastname,email,username,password,passwordconf);
    let errors = new Array(fn_err,ln_err,email_err,username_err,password_err,passwordconf_err);
    let empty=0;
    //zisťovanie počtu prázdnch inputov
    for(let i=0;i<6;i++){
        if(inputs[i] == ''){
            empty+=1;
        }else{
            empty+=0;
        }
    }if(empty==0){
        if(password == passwordconf){
            if((password.length>5) && (password.length<31)){
                //vynulovanie všetkých error hlášok
                for(let i=0;i<6;i++){
                    errors[i].html("");
                }
            }if(password.length<6){
                password_err.html("Too short password!");
                passwordconf_err.html("");
                return false;
            }if(password.length>30){
                password_err.html("Too long password!");
                passwordconf_err.html("");
                return false;
            }
        }else{
            //vynulovanie všetkých error hlášok okrem hlášky pri confirm password
            for(let i=0;i<5;i++){
                errors[i].html("");
            }
            passwordconf_err.html("Passwords are not matching!");
            return false;
        }
    }
    //vypísanie error hlášok ku prázdnym inputom
    else{
        for(let i=0;i<6;i++){
            if(inputs[i] == ''){
                errors[i].html("Enter value!");
            }else{
                errors[i].html("");
            }
        }
        return false;
    }
}