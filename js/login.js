function login() {
    var username = $("#usrn_input").val();
    var password = $("#pssw_input").val();
    var usrn_err = $("#usrn_err");
    var pssw_err = $("#pssw_err");

    if ((username != '') && (password != '')) {
        //console.log("allright");
        usrn_err.html("");
        pssw_err.html("");
    } else {
        if ((username == '') && (password != '')) {
            //console.log("no pass");
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
}
