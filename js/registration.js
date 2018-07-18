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
    let empty = 0;
    let fn_rgx = new RegExp('^[a-zA-ZáäčďéěíľĺňóôřšťůúýžÁÄČĎÉĚÍĽĹŇÓÔŘŠŤŮÚÝŽ]{2,}([ ]{1})?'+
    '([a-zA-ZáäčďéěíľĺňóôřšťůúýžÁÄČĎÉĚÍĽĹŇÓÔŘŠŤŮÚÝŽ]{2,})?$');
    let ln_rgx = new RegExp('^[a-zA-ZáäčďéěíľĺňóôřšťůúýžÁÄČĎÉĚÍĽĹŇÓÔŘŠŤŮÚÝŽ]{2,}([ -]{1})?'+
    '([a-zA-ZáäčďéěíľĺňóôřšťůúýžÁÄČĎÉĚÍĽĹŇÓÔŘŠŤŮÚÝŽ]{2,})?$');
    let em_rgx = new RegExp('[a-z.]{3,64}[@][a-z]{3,64}[.][a-z]{2,}');

    //zisťovanie počtu prázdnch inputov
    for(let i=0;i<6;i++){
        if(inputs[i] == ''){
            empty+=1;
        }else{
            empty+=0;
        }
    }if(empty==0){
        let fn_res = firstname.match(fn_rgx);
        let ln_res = lastname.match(ln_rgx);
        let em_res = email.match(em_rgx);
        passwordconf_err.html('');
        for(let i=0;i<5;i++){
            switch(i){
                case 1:
                if(fn_res==null){
                    fn_err.html('Invalid first name!');
                }else{
                    fn_err.html('');
                }
                case 2:
                if(ln_res==null){
                    ln_err.html('Invalid last name!');
                }else{
                    ln_err.html('');
                }
                case 3:
                if(em_res==null){
                    email_err.html('Invalid e-mail!');
                }else{
                    email_err.html('');
                }
                case 4:
                if((username.length>5)&&(username.length<31)){
                    username_err.html('');
                }if(username.length<6){
                    username_err.html('Too short username!');
                }if(username.length>30){
                    username_err.html('Too long username!');
                }
                case 5:
                if((password.length>5)&&(password.length<31)){
                    if(password==passwordconf){
                        password_err.html('');
                        passwordconf_err.html('');
                    }else{
                        password_err.html('');
                        passwordconf_err.html('Passwords are not matching!');
                    }
                }if(password.length<6){
                    password_err.html('Too short password!');
                    passwordconf_err.html('');
                }if(password.length>30){
                    password_err.html('Too long password!');
                    passwordconf_err.html('');
                }
            }   
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
        return false; //stopne odosielanie formulára s prázdnymi inputmi
    }
}