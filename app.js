localStorage.clear();
var user;
var currentIndex;

var config = {
	apiKey: "AIzaSyC_j71A8Gp_teFwKQDcaAc2PU8az_64XLc",
	authDomain: "sawaalsite.firebaseapp.com",
	databaseURL: "https://sawaalsite.firebaseio.com",
	projectId: "sawaalsite",
	storageBucket: "sawaalsite.appspot.com",
	messagingSenderId: "44834842355",
};
firebase.initializeApp(config);

// var selectable='.items';

// const softkeyCallback = {
//     left: function() { console.log('You click on SoftLeft') },
//     center: select(),
//     right: function() { console.log('You click on SoftRight') }
// };

// function select() {
// 	if(document.activeElement.value == )
// }

// window.addEventListener("load", function() {
//   currentIndex = 0;
//   nav(0);

// });

window.addEventListener("load", function() {
//   currentIndex = 0;
//   nav(0);
	 if(localStorage.getItem("Mobile")!=undefined) {
	 	if(localStorage.getItem("UserType")=="provider") window.location.href = "provider.html"
	 	else window.location.href = "consumer.html"
	 }
	 naviBoard.setNavigation('container');

});



document.activeElement.addEventListener("keyup", handleKeyUp);

// function handleKeyDown(e) {
// // 	console.log("Yo");
// 	console.log(e.key);
//   switch(e.key) {
//     case '2':
//       window.dispatchEvent(new KeyboardEvent('keypress',{'key':'a'}));
//       break;
//     case 'ArrowDown':
//       nav(1);
//       break;
//     case 'ArrowRight':
//       nav(1);
//       break;
//     case 'ArrowLeft': 
//       nav(-1);
//       break;
	// case 'SoftLeft':
 //        // Action case press left key
 //        softkeyCallback.left();
 //    break;

 //    case 'SoftRight':
 //        // Action case press right key
 //        softkeyCallback.right();
 //    break;

 //    case 'Enter':
 //        // Action case press center key
 //        softkeyCallback.center();
 //    break;
//   }
// }

function hidefunc() {
	ele = document.getElementById('cons');
	var opts = document.getElementsByName("servicetype");
	var l = opts.length;
	if(ele.checked==true) {
		for(var i=0; i<l; i++) {
			opts[i].style.visibility = "hidden";
		}
	}
	else {
		for(var i=0; i<l; i++) {
			opts[i].style.visibility = "visible";
		}
	}
}

// var letter = document.getElementById("letter");
var usertypetemp="Provider", servicetypetemp="Carpenter";
var input;
var timer;
var pause = 0;
var difTolerance = 700;
var startTime;
var endTime;
var first = true;
var activeKey;
var current;
var lastKey;
var k48 = [" "];
var k49 = [""];
var k50 = ["a","b","c"];
var k51 = ["d","e","f"];
var k52 = ["g","h","i"];
var k53 = ["j","k","l"];
var k54 = ["m","n","o"];
var k55 = ["p","q","r","s"];
var k56 = ["t","u","v"];
var k57 = ["w","x","y","z"];
var temp="";
var no=0;
function setWord(){
// 	input.value = input.value + activeKey[current];
	temp = input.value;
	console.log(activeKey[current]);
	current = 0;
	// letter.innerHTML = "";
}
function checkPause(){
	endTime = new Date().getTime();
	if (endTime - startTime >= difTolerance) {
		clearInterval(timer);		
		setWord();
	}
}
function handleKeyUp(e){
	input = document.activeElement;
	console.log("HEJ", e.target.type);
	if(input.type=="text") {
		if (e.keyCode >= 48 && e.keyCode <= 57) {
			if (e.keyCode != lastKey) {
				// console.log("Kyon");
				// if(endTime - startTime < difTolerance) input.value = input.value + activeKey[current];
				// input.value = activeKey[current];
				// temp = input.value;
				// input.value = input.value + activeKey[current];
				current = 0;
				first = true;
				// input.value = temp + activeKey[current];

			}


			lastKey = e.keyCode;
			clearInterval(timer);
			startTime = new Date().getTime();
			pause = 0;
			timer = setInterval(checkPause, 5);
		}else{
			return false;
		}

		if (e.keyCode === 48) {
			// 0
			// space	
			activeKey = k48;	
		} else if (e.keyCode === 49) {
			// 1
		} else if (e.keyCode === 50) {
			// 2
			// a b c
			activeKey = k50;
		} else if (e.keyCode === 51) {
			// 3
			// d e f
			activeKey = k51;
		} else if (e.keyCode === 52) {
			// 4
			// g h i
			activeKey = k52;
		} else if (e.keyCode === 53) {
			// 5
			// j k l
			activeKey = k53;
		} else if (e.keyCode === 54) {
			// 6
			// m n o
			activeKey = k54;
		} else if (e.keyCode === 55) {
			// 7
			// p q r s
			activeKey = k55;
		} else if (e.keyCode === 56) {
			// 8
			// t u v
			activeKey = k56;	
		} else if (e.keyCode === 57) {
			// 9
			// w x y z
			activeKey = k57;
		}

		if (current < activeKey.length-1) {
			current++;		
		}else{
			current = 0;
		}
		if (first) {
			current = 0;
			first = false;
		}
		input.value = temp + activeKey[current];
	}
	else if(input.type=="number") {
		if (e.keyCode === 48) {
			// 0
			// space	
			no = 0;	
		} else if (e.keyCode === 49) {
			no = 1;
			// 1
		} else if (e.keyCode === 50) {
			// 2
			// a b c
			no = 2;
		} else if (e.keyCode === 51) {
			// 3
			// d e f
			no = 3;
		} else if (e.keyCode === 52) {
			// 4
			// g h i
			no = 4;
		} else if (e.keyCode === 53) {
			// 5
			// j k l
			no = 5;
		} else if (e.keyCode === 54) {
			// 6
			// m n o
			no = 6;
		} else if (e.keyCode === 55) {
			// 7
			// p q r s
			no = 7;
		} else if (e.keyCode === 56) {
			// 8
			// t u v
			no = 8;	
		} else if (e.keyCode === 57) {
			// 9
			// w x y z
			no = 9;
		}
		input.value = input.value + String(no);
	}
}

const softkeyCallback = {
    left: leftsoft,
    center: centersoft,
    right: rightsoft
};

function leftsoft() {
	console.log("Click hai");
	input = document.activeElement;
	temp="";
	input.value = input.value.substr(0, input.value.length-1);
}

function centersoft() {
	var ele = document.activeElement;
	if(ele.type=="radio") {
		ele.checked=true;
		console.log(ele);
		if(ele.name=="usertype") usertypetemp=ele.value;
		else if(ele.name="servicetype") servicetypetemp=ele.value;
	}
}

function rightsoft() {
	var name = document.getElementById("name").value;
	var mob = document.getElementById("mob").value;
	console.log(name);
	console.log(mob);
	console.log(usertypetemp);
	console.log(servicetypetemp);
	localStorage.setItem("Mobile", mob);
	// firebase.database().ref('Users/Providers/').push();
	if(usertypetemp=="Provider") {
		var dict = {"CurrJob":0, "IsFree":true, "Jobs":0, "Latitude":50.483, "Longitude": 34.34, "Mobile":mob, "Name":name, "Prof":servicetypetemp, "Rating":0};
		var tempkey = firebase.database().ref('Users/Providers/').push().key;
		firebase.database().ref('Users/Providers/'+tempkey).set(dict);
		localStorage.setItem("UserType", "provider");
		setTimeout(function() {
			window.location.href = "provider.html";
		}, 5000);
		
	}
	else {
		var dict = {"CurrWorker":0, "Latitude":50.483, "Longitude": 34.34, "Mobile":mob, "Name":name};
		var tempkey = firebase.database().ref('Users/Consumers/').push().key;
		firebase.database().ref('Users/Consumers/'+tempkey).set(dict);
		localStorage.setItem("UserType", "consumer");
		setTimeout(function() {
			window.location.href = "consumer.html";
		}, 5000);
	}
}

function handleKeyDown(evt) {
    switch (evt.key) {
        case 'SoftLeft':
            // Action case press left key
            softkeyCallback.left();
        break;

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