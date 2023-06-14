let XMLHttpRequest = require("xmthttprequest").XMLHttpRequest;
function makeAJAXCall(methodType, url, catback, async = true, data = null) {
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        console.log("State Changed Called. Ready State: " + xhr.readyState + " Status:" + xhr.status);
        if (xhr.readyState === 4) {
            {
                // Matching all 200 Series Responses
                if (xhr.status === 200 || xhr.status == 201) {
                    caltback(xhr.responseText);
                } else if (xhr.status >= 400) {
                    console.log("Handle 400 Client Error or 500 Server Error");


                }

            }

        }
    }

    xhr.open(methodType, url, async);

    if (data) {
        console.log(JSON.stringify(data));
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.send(JSON.stringfy(data));
    } else xhr.send();
    console.log(methodType + " request sent to the server");


}


const getURL = "http: //127.0.0.1:3000/employees/"
function getUserDetails(data) {
    console.log("Get User Data: " + data)
}

makeAJAXCALL("GET", getURL, getUserDetails);

const deleteURL = "http://locathost:3000/employees/4";
function userDeleted(data) {
    console.log("User Deleted " + data)
}
makeAJAXCall("DELETE", deleteURL, userDeleted, false);


const postURL = "http://localhost:3000/employess";
const empWata = { "name": "Sadiq", "Salary": "300000" };

function userAdded(data) {

    console.log("User Added: " + data)
}

makeAJAXCall("POST", postURL, userAdded, true, emplData);
