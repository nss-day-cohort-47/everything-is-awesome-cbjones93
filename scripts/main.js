console.log("hello beautiful")
import { loadLegos, useLegos } from './legos/LegoData.js'
import { makeLegoList } from './legos/LegoList.js';

const navElement = document.querySelector("nav");

navElement.addEventListener("click", (event) => {
	if (event.target.id === "showRed") {
		filterLegos("Red")
	} else if (event.target.id === "showAll") {
		makeLegoList(useLegos())
	}
})

navElement.addEventListener("click", (event) => {
	if (event.target.id === "showGreen") {
		filterLegos("Green")
	} else if (event.target.id === "showAll") {
		makeLegoList(useLegos())
	}
})

const filterLegos = (whatFilter) => {
	const filterArray = useLegos().filter(singleLego => {
		if (singleLego.LegoName.includes(whatFilter)) {
			return singleLego;
		}
	})
	makeLegoList(filterArray);
}



navElement.addEventListener("change", event => {
	if (event.target.id === "brickMaterials") {
		const materialValue = (event.target.value)
		console.log(`User wants to see bricks with a material of ${materialValue}`)
		showFilteredMaterials(materialValue);
	}
})
const showFilteredMaterials = (materialValue) => {
	const filteredMaterial = useLegos().filter(singleLego => {
		if (singleLego.Material === materialValue) {
			return singleLego
		}
	})
	makeLegoList(filteredMaterial);
}

navElement.addEventListener('keypress', event => {
	if (event.key === 'Enter' && event.target.id === "mySearch") {
		const legoValue = document.querySelector("input[name='searchBox']").value
		console.log(`user wants to see `, legoValue)
		showFilteredSearch(legoValue);
	}
})

const showFilteredSearch = (searchValue) => {
	const filteredSearch = useLegos().filter(singleLego => {
		if (singleLego.LegoId === searchValue) {
			return singleLego
		} else {
			console.log("Invalid Id")
			document.getElementById("all-legos").innerHTML = "<p> Invalid ID </p>"
		}
	})
	makeLegoList(filteredSearch);
}



const startEIA = () => {
	loadLegos()
		.then(legoArray => {
			makeLegoList(legoArray)
		})

}
startEIA();