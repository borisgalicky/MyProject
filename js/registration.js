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
    for(let i=0;i<6;i++){
        if(inputs[i] == ''){
            empty+=1;
        }else{
            empty+=0;
        }
    }if(empty==0){
        if(password == passwordconf){
            //vynulovanie všetkých error hlášok
            //console.log("inputs OK, passwords matches!");
            for(let i=0;i<6;i++){
                errors[i].html("");
            }
        }else{
            //vynulovanie všetkých error hlášok okrem hlášky pri confirm password
            for(let i=0;i<5;i++){
                errors[i].html("");
            }
            //console.log("inputs OK but passwords does not match!");
            passwordconf_err.html("Passwords are not matching!");
            return false;
        }
        
    }
    //vypísanie error hlášok ku prázdnym inputom
    else{
        //console.log("not ok");
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