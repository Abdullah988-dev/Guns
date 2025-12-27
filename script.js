// ✅ Load old weapons
let Allweapon = JSON.parse(localStorage.getItem("weapon")) || [];

// ✅ ADD RIFLE
function AddRifle() {
  let name = document.getElementById("gunName").value;
  let image = document.getElementById("gunImage").value;
  let shortDesc = document.getElementById("shortDesc").value;
  let longDesc = document.getElementById("longDesc").value;
  let video = document.getElementById("videoUrl").value;

  // ✅ unique id (delete ke liye)
  let newWeapon = {
    id: Date.now(),
    name,
    image,
    shortDesc,
    longDesc,
    video
  };

  Allweapon.push(newWeapon);
  localStorage.setItem("weapon", JSON.stringify(Allweapon));

  showWeapons();

  // ✅ SUCCESS ALERT
  alert("Gun added successfully");

  // ✅ CLEAR INPUTS
  document.getElementById("gunName").value = "";
  document.getElementById("gunImage").value = "";
  document.getElementById("shortDesc").value = "";
  document.getElementById("longDesc").value = "";
  document.getElementById("videoUrl").value = "";

  // ✅ MODAL CLOSE
  let modalEl = document.getElementById("AddRifleModal");
  let modal = bootstrap.Modal.getOrCreateInstance(modalEl);
  modal.hide();
}

// ✅ SHOW WEAPONS
function showWeapons() {
  let output = document.getElementById("output");

  Allweapon.forEach(weapon => {
    output.innerHTML += `
      <div class="card mb-3" style="width: 18rem;">
        <img src="${weapon.image}" class="card-img-top">
        <div class="card-body">
          <h5 class="card-title">${weapon.name}</h5>
          <p class="card-text">${weapon.shortDesc}</p>
          <small>${weapon.longDesc}</small><br><br>
          <a href="${weapon.video}" target="_blank" class="btn btn-primary btn-sm">Watch Video</a>
          <button class="btn btn-danger btn-sm ms-2" onclick="deleteWeapon(${weapon.id})">
            Delete
          </button>
        </div>
      </div>
    `;
  });
}

// ✅ DELETE WEAPON
function deleteWeapon(id) {
  Allweapon = Allweapon.filter(weapon => weapon.id !== id);
  localStorage.setItem("weapon", JSON.stringify(Allweapon));
  showWeapons();

  // ✅ DELETE ALERT
  alert("Gun removed successfully");
}

// ✅ PAGE LOAD
showWeapons();

function GunSearch() {

  let searchgun = document.getElementById("GunSearch").value.toLowerCase();

  let filterG11 = Allweapon.filter(weapon =>
    weapon.name.toLowerCase().includes(searchgun)|
    ""
  );

  let output = document.getElementById("output");
  output.innerHTML = "";

  filterG11.forEach(weapon => {
    output.innerHTML += `
      <div class="card mb-3" style="width: 18rem;">
        <img src="${weapon.image}" class="card-img-top">
        <div class="card-body">
          <h5 class="card-title">${weapon.name}</h5>
          <p class="card-text">${weapon.shortDesc}</p>
          <small>${weapon.longDesc}</small><br><br>
          <a href="${weapon.video}" target="_blank" class="btn btn-primary btn-sm">Watch Video</a>
          <button class="btn btn-danger btn-sm ms-2" onclick="deleteWeapon(${weapon.id})">
            Delete
          </button>
        </div>
      </div>
    `;
  });
}

document.getElementById("GunSearch").addEventListener("input", GunSearch);

