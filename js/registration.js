function register() {
    var firstname = $("#fn_input").val();
    var lastname = $("#ln_input").val();
    var email = $("#mail_input").val();
    var username = $("#username_input").val();
    var password = $("#password_input").val();
    var passwordconf = $("#passwordconf_input").val();
    var fn_err = $("#fn_err");
    var ln_err = $("#ln_err");
    var email_err = $("#mail_err");
    var username_err = $("#username_err");
    var password_err = $("#password_err");
    var passwordconf_err = $("#passwordconf_err");
    var errors = 0;
    var fn_rgx = new RegExp('^[a-zA-ZáäčďéěíľĺňóôřšťůúýžÁÄČĎÉĚÍĽĹŇÓÔŘŠŤŮÚÝŽ]{2,}([ ]{1})?' +
        '([a-zA-ZáäčďéěíľĺňóôřšťůúýžÁÄČĎÉĚÍĽĹŇÓÔŘŠŤŮÚÝŽ]{2,})?$');
    var ln_rgx = new RegExp('^[a-zA-ZáäčďéěíľĺňóôřšťůúýžÁÄČĎÉĚÍĽĹŇÓÔŘŠŤŮÚÝŽ]{2,}([ -]{1})?' +
        '([a-zA-ZáäčďéěíľĺňóôřšťůúýžÁÄČĎÉĚÍĽĹŇÓÔŘŠŤŮÚÝŽ]{2,})?$');
    var em_rgx = new RegExp('[a-z0-9.\-_]{3,64}[@]{1}[a-z]{3,64}[.]{1}[a-z]{2,}');

    var fn_res = firstname.match(fn_rgx);
    var ln_res = lastname.match(ln_rgx);
    var em_res = email.match(em_rgx);
    for (var i = 1; i < 6; i++) {
        switch (i) {
            case 1:
                if (firstname == '') {
                    fn_err.html('Enter first name!');
                    errors++;
                } else {
                    if (fn_res == null) {
                        fn_err.html('Invalid first name!');
                        errors++;
                    } else {
                        fn_err.html('');
                    }
                }
                break;

            case 2:
                if (lastname == '') {
                    ln_err.html('Enter last name!');
                    errors++;
                } else {
                    if (ln_res == null) {
                        ln_err.html('Invalid last name!');
                        errors++;
                    } else {
                        ln_err.html('');
                    }
                }
                break;

            case 3:
                if (email == '') {
                    email_err.html('Enter e-mail!');
                    errors++;
                } else {
                    if (em_res == null) {
                        email_err.html('Invalid e-mail!');
                        errors++;
                    } else {
                        email_err.html('');
                    }
                }
                break;

            case 4:
                if (username == '') {
                    username_err.html('Enter username!');
                    errors++;
                } else {
                    if ((username.length > 5) && (username.length < 31)) {
                        username_err.html('');
                    } if (username.length < 6) {
                        username_err.html('Too short username!');
                        errors++;
                    } if (username.length > 30) {
                        username_err.html('Too long username!');
                        errors++;
                    }
                }
                break;

            case 5:
                if (password == '') {
                    password_err.html('Enter password!');
                    passwordconf_err.html('');
                    errors++;
                } else {
                    if ((password.length > 5) && (password.length < 31)) {
                        if (password == passwordconf) {
                            password_err.html('');
                            passwordconf_err.html('');
                        } else {
                            password_err.html('');
                            passwordconf_err.html('Passwords are not matching!');
                            errors++;
                        }
                    } if (password.length < 6) {
                        password_err.html('Too short password!');
                        passwordconf_err.html('');
                        errors++;
                    } if (password.length > 30) {
                        password_err.html('Too long password!');
                        passwordconf_err.html('');
                        errors++;
                    }
                }
                break;
        }
    }
    //ak nastane čo i len 1 error, formulár sa neodošle na server
    if (errors > 0) {
        return false;
    }
}