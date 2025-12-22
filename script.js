
function AddRifle() {
  let name = document.getElementById("gunName").value;
  let image = document.getElementById("gunImage").value;
  let shortDesc = document.getElementById("shortDesc").value;
  let longDesc = document.getElementById("longDesc").value;
  let video = document.getElementById("videoUrl").value;

  document.getElementById("output").innerHTML = `
    <div class="card mb-3" style="width: 18rem;">
      <img src="${image}" class="card-img-top">
      <div class="card-body">
        <h5 class="card-title">${name}</h5>
        <p class="card-text">${shortDesc}</p>
        <small>${longDesc}</small><br>
        <a href="${video}" target="_blank">Watch Video</a>
      </div>
    </div>
  `;
}

