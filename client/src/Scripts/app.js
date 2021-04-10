//IIFE -  Immediately Invoked Function Expression
(function(){
	function Start(): void
	{
		console.log('App started...');
	}

	window.addEventListener('load', Start);
})();