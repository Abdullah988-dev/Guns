const Allweapon = JSON.parse(localStorage.getItem("weapon")) || [];

function AddRifle() {
  let name = document.getElementById("gunName").value;
  let image = document.getElementById("gunImage").value;
  let shortDesc = document.getElementById("shortDesc").value;
  let longDesc = document.getElementById("longDesc").value;
  let video = document.getElementById("videoUrl").value;

  Allweapon.push({
    name,
    image,
    shortDesc,
    longDesc,
    video
  });

  localStorage.setItem("weapon", JSON.stringify(Allweapon));
  showWeapons();

  document.getElementById("name").value="";
  document.getElementById("image").value="";
  document.getElementById("shortDesc").value="";
  document.getElementById("longDesc").value="";
  document.getElementById("video").value="";

}

function showWeapons() {
  document.getElementById("output").innerHTML = "";

  Allweapon.forEach(weapon => {
    document.getElementById("output").innerHTML += `
      <div class="card mb-3" style="width: 18rem;">
        <img src="${weapon.image}" class="card-img-top">
        <div class="card-body">
          <h5 class="card-title">${weapon.name}</h5>
          <p class="card-text">${weapon.shortDesc}</p>
          <small>${weapon.longDesc}</small><br>
          <a href="${weapon.video}" target="_blank" class=" btn btn-primary">Watch Video</a>
        </div>
      </div>
    `;
  });
}

showWeapons();
