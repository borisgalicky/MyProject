function login() {
    var username = $("#usrn_input").val();
    var password = $("#pssw_input").val();
    var usrn_err = $("#usrn_err");
    var pssw_err = $("#pssw_err");
    var errors = 0;

    if ((username != '') && (password != '')) {
        usrn_err.html("");
        pssw_err.html("");
    } else {
        errors++;
        if ((username == '') && (password != '')) {
            usrn_err.html("Enter username!");
            pssw_err.html("");
        } if ((username != '') && (password == '')) {
            usrn_err.html("");
            pssw_err.html("Enter password!");
        } if ((username == '') && (password == '')) {
            usrn_err.html("Enter username!");
            pssw_err.html("Enter password!");
        }
    }
    if (errors > 0) {
        return false;
    }
}
