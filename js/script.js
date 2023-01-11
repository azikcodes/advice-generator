const button =document.querySelector('button'),
			adviceId=document.querySelector('span'),
			adviceInner=document.querySelector('.advice');

fetchApi = async()=>{
	await fetch('https://api.adviceslip.com/advice')
		.then(response => response.json())
		.then(json => {
			adviceId.innerHTML = '#' + json.slip.id
			adviceInner.innerHTML = `"${json.slip.advice}"`
			console.log(json.slip);
		})

}
button.addEventListener('click', fetchApi)
