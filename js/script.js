// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

setInterval(function () {
	printQuote();
}, 180000); // every 30 seconds

var quotes = [
		{
			quote: 'My home is in Heaven. I\'m just traveling through this world.',
			source: 'Billy Graham',
			citation: '',
			year: '',
			tags: 'Faith'
		},
		{
			quote: 'Worry and worship cannot exist in the same space. One always displaces the other. Choose worship.',
			source: 'Louie Giglio',
			citation: '',
			year: '',
			tags: 'Faith'
		},
		{
			quote: 'If only we knew what was happening when we pray, we would never cease to pray.',
			source: 'Louie Giglio',
			citation: 'Twitter',
			year: '2012',
			tags: 'Faith'
		},
		{
			quote: 'Our greatest fear should not be of failure but of succeeding at things in life that don\'t really matter',
			source: 'Francis Chan',
			citation: 'Crazy Love',
			year: '2008',
			tags: 'Faith'
		},
		{
			quote: 'Darkness cannot drive out darkness; only light can do that. Hate cannot drive out hate; only love can do that',
			source: 'Martin Luther King, Jr.',
			citation: '',
			year: '',
			tags: 'Faith'
		},
		{
			quote: 'It does not matter how long you live, but how well you do it.',
			source: 'Martin Luther King, Jr.',
			citation: '',
			year: '',
			tags: 'Faith'
		},
		{
			quote: 'Right now you are in training for a trail you\'re not yet in. Public victory comes from private discipline.',
			source: 'Levi Lusko',
			citation: 'Through the Eyers of a Lion: Facin gImpossible Pain, Finding Incredible Power',
			year: '',
			tags: 'Faith'
		}
];

var previousRandomNumber;

function getRandomQuote() {
	// get random index of quotes array
	var randomNumber = Math.floor(Math.random() * quotes.length);

	// it's best if we don't display the same one twice in row, so we'll continue to generate a random number until it's new
	while (randomNumber == previousRandomNumber) {
		randomNumber = Math.floor(Math.random() * quotes.length);
	}
	// once we find a unique number we'll set it to our previous number for next time
	previousRandomNumber = randomNumber;

	return quotes[randomNumber];
}

function printQuote() {
	var quote = getRandomQuote();
	var printedQuote = '<p class="quote">' + quote.quote + '</p><p class="source">' + quote.source;

	// check if quote citation exists and if it does we'll include it
	if (quote.citation !== '') printedQuote += ' <span class="citation">' + quote.citation + '</span>';

	// check if quote year exists and if it does we'll include it
	if (quote.year !== '') printedQuote += ' <span class="year">' + quote.year + '</span>';
	printedQuote += '</p>';

	// change background color
	changeBackgroundColor();

	// insert quote into html quote box
	document.getElementById('quote-box').innerHTML = printedQuote;
}

function changeBackgroundColor() {
	var randomColor = "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);});
	document.body.style.background = randomColor;
}
