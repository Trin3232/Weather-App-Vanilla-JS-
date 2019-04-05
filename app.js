window.addEventListener('load', ()=> {
	let lat;
	let long; 

	let timezonelocation = document.querySelector(".timezone-location");
	let tempdescrip = document.querySelector(".temp-descrip");
	let tempdegree = document.querySelector(".temp-degree");

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
					const { temperature } = data.currently;
					const { summary } = data.minutely;
					// Elements for the API
					
					timezonelocation.textContent = data.timezone;
					tempdescrip.textContent = summary;
					tempdegree.textContent  = temperature;
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