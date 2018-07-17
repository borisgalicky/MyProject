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
    let em_rgx = new RegExp('^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@(('+
    '\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$');
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
        if(firstname.length>0){
            if(fn_res==null){
                fn_err.html('Invalid first name!');
                console.log('First name wrong!');
                return false;
                
            }else{
                fn_err.html('');
                console.log('First name OK');
                return false;
            }
        }
        if(lastname.length>0){
            if(ln_res==null){
                ln_err.html('Invalid last name!');
                console.log('Last name wrong!');
                return false;
            }else{
                ln_err.html('');
                console.log('Last name OK');
                return false;
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
        return false; //stopne odosielanie formulára
    }
}