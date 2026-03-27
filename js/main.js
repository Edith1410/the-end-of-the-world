document.querySelector("#US").addEventListener("click", infoUS);
function infoUS() {
  console.log("infoUS");
  document.querySelector(".info-text h2").textContent = "United States";
  document.querySelector(".placeholder").textContent =
    "What will happen in the US?";
  document.querySelector("#efficiency").textContent =
    "Yellow Stone will become the worlds largest active vulcano, exploding into big parts of lava which will slolwy turn the entire state of Wyoming into ash. Hawaii will be completely destroyed by massive volcanic eruptions caused by Earth's crust shifting due to extreme core heating ";
  document.querySelector("#requirement").textContent =
    "Los angeles will have earthquakes to the magnitude of 10.9 because the earths crust is becoming unstable and in the end it will sink into the pacific ocean. The entire North American continent will be left broken and submerged underwater.";
}

document.querySelector("#center").addEventListener("click", infoCenter);
function infoCenter() {
  console.log("infoCenter");
  document.querySelector(".info-text h2").textContent = "The earths center";
  document.querySelector(".placeholder").textContent =
    "What is happening to the earths core?";
  document.querySelector("#efficiency").textContent =
    "the Earth's crust will become totally unstable and undergo a cataclysmic `Earth Crust Displacement` caused by neutrinos from solar flares heating the planet´s core ";
  document.querySelector("#requirement").textContent =
    "This instability will cause tectonic plates to buckle, shift thousands of kilometers, and create massive earthquakes, volcanic eruptions, and 1,500-meter-high tsunamis, leading to global flooding and the destruction of most continents.";
}

document.querySelector("#Asien").addEventListener("click", infoAsien);
function infoAsien() {
  console.log("infoAsien");
  document.querySelector(".info-text h2").textContent = "Asia";
  document.querySelector(".placeholder").textContent =
    "What will happen in Asia?";
  document.querySelector("#efficiency").textContent =
    "The Himalayas in China has been chosen as the secret site for building the `Arks`—massive vessels designed to save humanity—due to their extreme height and remote location. ";
  document.querySelector("#requirement").textContent =
    "While the continent will be devastated by earthquakes, the final blow will come when a mega-tsunami, rising over 1,500 meters, sweeps across the region, submerging it and the newly built Ark facilities.";
}

document.querySelector("#EU").addEventListener("click", infoEU);
function infoEU() {
  console.log("infoEU");
  document.querySelector(".info-text h2").textContent = "Europa";
  document.querySelector(".placeholder").textContent =
    "What will happen in Europa?";
  document.querySelector("#efficiency").textContent =
    "The United Kingdom is hit by massive earthquakes, leading to riots and the cancellation of the Olympic Games. The nation is ultimately submerged and rendered uninhabitable.";
  document.querySelector("#requirement").textContent =
    "A massive earthquake with magnitude 9.1, will strike Rome. This will cause the catastrophic collapse of St. Peter's Basilica which will destruct the Vatican and the surrounding area.";
}

document.querySelector("#afrika").addEventListener("click", infoAfrika);
function infoAfrika() {
  console.log("infoAfrika");
  document.querySelector(".info-text h2").textContent = "Africa";
  document.querySelector(".placeholder").textContent =
    "What will happen in Africa?";
  document.querySelector("#efficiency").textContent =
    "Africa will be mostly spared from the catastrophic flooding, earthquakes, and volcanic eruptions that devastate the rest of the world.";
  document.querySelector("#requirement").textContent =
    "The Drakensberg Mountains will become the tallest mountain range in the world, and large parts of the Horn of Africa will be submerged. Africa will be the only continent to fully remain above water, serving as the refuge for the ~400,000 human survivors. ";
}
