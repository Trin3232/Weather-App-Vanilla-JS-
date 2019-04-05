window.addEventListener('load', ()=> {
	let lat;
	let long;
	
	if(navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(locate => {
		  lat = locate.coords.latitude;
			long = locate.coords.longitude;
			
      const proxy = "https://cors-anywhere.herokuapp.com/";
			const api = `${proxy}https://api.darksky.net/forecast/f0aa5b94daaa286dfd17d5c88dfdeb0c/${lat},${long}`;

			fetch(api)
				.then(resp =>{
					return resp.json();
				})
				.then(data => {
					console.log(data);

					let = data.currently.temparture;
					let = data.currently.summary;
			  });
		});
	}	
});

/*else{
	h2.textContent = "Hey please allow loaction on you browser, thank you!"
}*/
// Change year text

let d = new Date();
let update_year_text = document.getElementById("update-year-text");
if (update_year_text != null) {
	update_year_text.innerHTML = d.getFullYear();
}