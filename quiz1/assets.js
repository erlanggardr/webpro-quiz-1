// next prev buttons for photo galleries
const galleries = {
  papuma: ["../assets/papuma.png", "../assets/papuma1.png", "../assets/papuma2.png"],
  gambir: ["../assets/kebun-teh-gambir.png", "../assets/gambir1.jpg", "../assets/gambir2.jpg"],
  puslitkoka: ["../assets/puslitkoka.png", "../assets/puslitkoka1.jpg", "../assets/puslitkoka2.jpg"]
};

const indices = { papuma: 0, gambir: 0, puslitkoka: 0 };

function showPhoto(place) {
  const img = document.getElementById(place + "Photo");
  if (img) {
    img.src = galleries[place][indices[place]];
  }
}

function nextPhoto(place) {
  indices[place] = (indices[place] + 1) % galleries[place].length;
  showPhoto(place);
}

function prevPhoto(place) {
  indices[place] = (indices[place] - 1 + galleries[place].length) % galleries[place].length;
  showPhoto(place);
}

document.addEventListener('DOMContentLoaded', function() {
  showPhoto('papuma');
  showPhoto('gambir'); 
  showPhoto('puslitkoka');
});
