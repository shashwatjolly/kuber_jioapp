const softkeyCallback = {
    // left: leftsoft,
    center: centersoft,
    right: rightsoft
};

// function leftsoft() {
// 	console.log("Click hai");
// 	input = document.activeElement;
// 	temp="";
// 	input.value = input.value.substr(0, input.value.length-1);
// }

function centersoft() {
	var ele = document.getElementById('tog');
	if(ele.type=="checkbox") {
		if(ele.checked==false) ele.checked=true;
		else ele.checked=false;
		Toggle();
		console.log(ele);
		// if(ele.name=="usertype") usertypetemp=ele.value;
		// else if(ele.name="servicetype") servicetypetemp=ele.value;
	}
	ele = document.getElementById('pay');
	window.location.href = "JioMoney.html";
}

function rightsoft() {
	const url = "https://testpg.rpay.co.in/reliance-webpay/v1.0/jiopayments";
	fetch(url, {
	    method : "POST",
	    body: new FormData(document.getElementById("payform")),
	    // -- or --
	    // body : JSON.stringify({
	        // user : document.getElementById('user').value,
	        // ...
	    // })
	}).then(
	    response => response.text() // .json(), etc.
	    // same as function(response) {return response.text();}
	).then(
	    html => console.log(html)
	);
	console.log(response);
}

function handleKeyDown(evt) {
    switch (evt.key) {
        // case 'SoftLeft':
        //     // Action case press left key
        //     softkeyCallback.left();
        // break;

        case 'SoftRight':
            // Action case press right key
            softkeyCallback.right();
        break;

        case 'Enter':
            // Action case press center key
            softkeyCallback.center();
        break;
    }
};

document.addEventListener('keydown', handleKeyDown);

