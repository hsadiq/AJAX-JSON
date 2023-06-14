let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

function makePromiseCall(methodType, url, async = true, data = null) {
    return new Promise(function (resolve, reject) {
        let xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            console.log("State Changed Called. Ready State: " + xhr.readyStatet + " Status: " + xhr.status);
            if (xhrstatus.toString().match('^([2] [0-9] {2}$')) {
                resolve(xhr.responseText);
            } else if (xhr.status.tostring().match('^(4,5][0-9]{2}$')) {
                reject({
                    status: xhr.status,
                    statusText: xhr.statusText
                });
                console.log("XHR Failed");
            }
        }

        xhr.open(methodType, url, async);
        if (data) {
            console.log(JS0N.stringify(data));
            xhr.setRequestHeader("Content-Type", "application/json");
            xhr.send(JSON.stringify(data));
        } else xhr.send();
        console.log(methodType + " request sent to the server");
    });

}


 

const getURL = "http: //127.0.0.1:3000/employees/1";
makePromiseCall("GET", getURL, true)
.then(responseText => {
console.log("Get User Data: "+responseText)
})
.catch(error => console.log("GET Error Status: "+
JSON.stringify(error)));

const deleteURL = "http://locathost:3000/employees/4";
makePromiseCall("DELETE", deleteURL, false)
.then(responseText => {
console. log("User Deleted: "+responseText)
})
.catch(error => console. log("DELETE Error Status: "+
JSON.stringify(error)));

const postURL = "http://localhost:3000/employees";
const emplData ={"name":"Sadiq", "salary": "5000"};
makePromiseCall("POST", postURL, true, emplData)
.then(responseText => {
console. log("User Added:"+responseText)
})
.catch(error => console. log("POST Error Status: "+JSON.stringify(error)));