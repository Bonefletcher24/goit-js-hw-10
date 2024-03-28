import { fetchBreeds, fetchCatByBreed } from "./cat-api";

const breedSelectEl = document.querySelector(".breed-select");
const catInfoEl = document.querySelector(".cat-info");
const loaderEl = document.querySelector(".loader");
const errorEl = document.querySelector(".error");

errorEl.classList.add("is-hidden");

function chooseBreed() {

    fetchBreeds().then((data) => {
			loaderEl.classList.replace("loader", "is-hidden");

			let optionsMarkup = data.map(({ name, id }) => {
				return `<option value=${id}>${name}</option>`;
//<option value={catId} >Cat Name</option>
			});
			breedSelectEl.insertAdjacentHTML("beforeend", optionsMarkup);
			breedSelectEl.classList.remove("is-hidden");
		})
		.catch(onError);
}

chooseBreed();

breedSelectEl.addEventListener("change", (e) => {

	loaderEl.classList.replace("is-hidden", "loader");

	catInfoEl.classList.add("is-hidden");

	let breedId = e.target.value;
	fetchCatByBreed(breedId)
		.then((data) => {
			const { url, breeds } = data[0];
			const { name, description, temperament } = breeds[0];

			catInfoEl.innerHTML = `
            <img src='${url}' alt='{name}' width="400"/>
            <div class='box'>
                <h2>${name}</h2>
                <p>${description}</p>
                <p>${temperament}</p>
            </div>
        `;
			catInfoEl.classList.remove("is-hidden");
			loaderEl.classList.add("is-hidden");
		})
		.catch(onError);
});

function onError() {
	errorEl.classList.remove("is-hidden");

	breedSelectEl.classList.add("is-hidden");
}