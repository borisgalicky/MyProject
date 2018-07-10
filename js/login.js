let url = "http://localhost:5000";

function login() {
    let username = $("#usrn_input").val();
    let password = $("#pssw_input").val();
    let usrn_err = $("#usrn_err");
    let pssw_err = $("#pssw_err");

    if((username != '')&&(password != '')){
        //console.log("allright");
        usrn_err.html("");
        pssw_err.html("");
        $.ajax({
        type: 'GET',
        url: url,
        dataType: 'json',
        contentType: "application/json; charset=utf-8",
        data:JSON.stringify({
            'login': username,
            'password': password
        }),
        success: function(){
            console.log("data sent to server!");
            console.log(data);
        },
        error: function(){
            console.log("error with sending to server!");
            console.log(data);
        }
        });
    }else{
        if((username == '')&&(password != '')){
            console.log("no pass");
            usrn_err.html("Enter username!");
            pssw_err.html("");
        }if((username != '')&&(password == '')){
            usrn_err.html("");
            pssw_err.html("Enter password!");
        }if((username == '')&&(password == '')){
            usrn_err.html("Enter username!");
            pssw_err.html("Enter password!");
        }
    }
}
