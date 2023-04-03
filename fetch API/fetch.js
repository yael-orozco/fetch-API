let cts;

function requestCode(){
    let login = document.getElementById('login').value;
    let date = new Date();
    cts = date.getTime();
    let scriptURL = document.getElementById('url').value + '?user=' + login + '&timestamp=' + cts;
    let response;
    let decodedResponse;

    fetch(scriptURL).then(res => {
        response = res;
        return res.text()
    }).then(data => {
            if (response.status >= 400) { // Server or client error from HTTP
                alert("request error (" + response.statusText + "): " + data);
            } else {
                alert("Success!")
                decodedResponse = atob(data);
                console.log(decodedResponse);
                document.getElementById("code").value = decodedResponse;
                document.getElementById("login2").value = login;
        }
    })
}

function testAPI(){
    let secretCode = document.getElementById("code").value;
    let scriptURL = document.getElementById('url').value;

    fetch(scriptURL, {
        method: 'POST',
        headers: {
            'Authorization': 'Bearer ' + secretCode
        }
    })
}