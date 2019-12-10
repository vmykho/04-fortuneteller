// JavaScript Document
document.getElementById("company").innerHTML = "Fortune Teller";
document.getElementById("slogan").innerHTML = "I know it all";

var mm;

function mynumb(x){
	n = Math.random();
	n = n * x;
	n = Math.floor(n);
	n = n + 1;
	return n;
}//end function

var month = mynumb(12);

var day = mynumb(30);

var event = mynumb(5)


switch(month){
	case 1:
	monthname="January";
	break;
	case 2:
	monthname="February";
	break;
	case 3:
	monthname="March";
	break;
	case 4:
	monthname="April";
	break;
	case 5:
	monthname="May";
	break;
	case 6:
	monthname="June";
	break;
	case 7:
	monthname="July";
	break;
	case 8:
	monthname="August";
	break;
	case 9:
	monthname="September";
	break;
	case 10:
	monthname="October";
	break;
	case 11:
	monthname="November";
	break;
	case 12:
	monthname="December";
	break;
}

switch(event){
	case 1:
	forstate="adopt a new family member.";
	break;
	case 2:
	forstate="see a long lost friend.";
	break;
	case 3:
	forstate="make a profitable investment.";
	break;
	case 4:
	forstate="get a frightening news.";
	break;
	case 5:
	forstate="loose your sanity.";
	break;
}

console.log(month);
console.log(day);
console.log(event);
console.log(monthname);
console.log(forstate);

document.getElementById("fortune").innerHTML = "On "+ monthname + " " + day + ", " + forstate;