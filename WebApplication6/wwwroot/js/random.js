const changeButton = document.querySelector('#quoteBtn');
const choosenQuote = document.querySelector('#choosenQuote');
var source = document.querySelector('#source');
var twitterBtn = document.querySelector('#twitterBtn')
var url = "http://google.com";
var text;



changeButton.addEventListener('click', () => {

	// var rnd = Math.floor(Math.random() * quotes.length);
	// choosenQuote.innerText = quotes[rnd].quote;
	// source.innerText = " - " + quotes[rnd].source;
	
	 fetch('http://api.quotable.io/random')
		.then(response => response.json())
		.then(result => {
			console.log(result);
			choosenQuote.innerText = ' \" ' + result.content + '  \" \n';
			source.innerText = " - " + result.author;
			console.log(choosenQuote.innerText);
		})
	console.log("Butona bastin");
	

})
twitterBtn.addEventListener('click', () => {
	const textToShare = document.querySelector("#choosenQuote").innerText;
	const sourceToShare = document.querySelector("#source").innerText;
	//  window.open('http://twitter.com/share?&text='+text, '', 'left=0,top=0,width=550,height=450,personalbar=0,toolbar=0,scrollbars=0,resizable=0');
	window.open("https://twitter.com/intent/tweet?&text=" + textToShare + ' \n ' + sourceToShare, 'left=0,top=0,width=550,height=450,personalbar=0,toolbar=0,scrollbars=0,resizable=0')

})