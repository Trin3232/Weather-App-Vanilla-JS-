window.addEventListener('load', ()=> {
	let lat;
	let long; 

	const timezonelocation = document.querySelector(".timezone-location");
	const tempdescrip = document.querySelector(".temp-descrip");
	const tempsection = document.querySelector(".temp-section");
	const tempspan = document.querySelector(".temp-section span");
	const tempdegree = document.querySelector(".temp-degree");

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
					const { temperature, icon } = data.currently;
					const { summary } = data.minutely;
					// Elements for the API
					
					timezonelocation.textContent = data.timezone;
					tempdescrip.textContent = summary;
					tempdegree.textContent  = temperature;
					 
					// Set Icons
					
					setIcons(icon, document.querySelector(".icon"));

					//  Temperature F to C formula

					let celsius = (temperature -32) * (5 / 9);

					// Change Temp from F to C....
					
					tempsection.addEventListener("click", () => {
					  if (tempspan.textContent === "F") {
							 tempspan.textContent = "C";
							 tempdegree.textContent = Math.floor(celsius);
						} else { 
							tempspan.textContent = "F";
							tempdegree.textContent = temperature;
						}
					});
			  });
		});
	}

	// Get the id of the canvas & what type of icon to display

	function setIcons( icon, iconID ) {
		const skycons = new Skycons({color: "#ffffff" });

		// We are replacing ever line with and underscore instead when getting icons & making it uppercase

		const currentIcon = icon.replace(/-/g, "_").toUpperCase();
		skycons.play();
		return skycons.set(iconID, Skycons[currentIcon]);
	}
});

// Change year text

let d = new Date();
let update_year_text = document.getElementById("update-year-text");
if (update_year_text != null) {
	update_year_text.innerHTML = d.getFullYear();
}