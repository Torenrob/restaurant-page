import { Loader } from "@googlemaps/js-api-loader";
import { pageElement } from "./menu";

export default function contactPage() {
	const content = document.getElementById("content");
	let map = document.createElement("div");
	map.setAttribute("id", "map");
	const loader = new Loader({
		apiKey: "AIzaSyCj3Uvw24dSbtQjMCVmbtSrFeK337CiFmI",
		version: "weekly",
	});
	loader.load().then(async () => {
		const { Map } = await google.maps.importLibrary("maps");

		map = new Map(document.getElementById("map"), {
			center: { lat: 33.68825373074092, lng: -84.43233453106664 },
			zoom: 8,
		});
	});

	const phoneAndLoc = pageElement(
		"span",
		null,
		"phoneAndLoc",
		"Phone: 404-924-5881<br><br>Address: 2473 N. Bayard St<br>&emsp;&emsp;&emsp;&nbsp;&nbsp;&nbsp;East Point, GA 30344"
	);

	content.append(phoneAndLoc, map);
}
