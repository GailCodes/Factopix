const buttonEl = document.querySelector("button")
const factTextEl = document.querySelector("p")
const imageEl = document.querySelector("img")
const imageLoadingEl = document.getElementById("image-loading")

async function main() {
	buttonEl.onclick = async () => { await updateFactAndImage() }
	await updateFactAndImage()
}

async function updateFactAndImage() {
	showLoadingStates(true)
	factTextEl.textContent = await getRandomFact()
	imageEl.src = await getRandomImage()
	showLoadingStates(false)
}

async function showLoadingStates(loading) {
	if (loading) {
		buttonEl.textContent = "Loading..."
		imageEl.classList.add("hidden")
		imageLoadingEl.classList.remove("hidden")
	} else {
		imageLoadingEl.classList.add("hidden")
		imageEl.classList.remove("hidden")
		buttonEl.textContent = "Genarete"
	}
}

async function getRandomImage() {
	const res = await fetch("https://picsum.photos/300/300")
	return res.url
}

async function getRandomFact() {
	const res = await fetch("https://uselessfacts.jsph.pl/api/v2/facts/random?language=en")
	const resJson = await res.json()

	return resJson.text
}

main()
