/* ==========================================================
   NOOH – Living Elevated | Know Your Team
   ========================================================== */

(function () {
  "use strict";

  /* ---------- Employee data ----------
     To add a real photograph later, set the `photo` field,
     e.g. photo: "images/asif-ali.jpg". Leave it empty for a black area. */
  const employees = [
    { name: "Mr.Asif Ali",       designation: "Founder",             department: "Leadership",           leader: true,  photo: "/images/asifali.png" },
    { name: "Mr.Kapil Verma",    designation: "Co-Founder",          department: "Leadership",           leader: true,  photo: "/images/kapil-verma.png" },
    
    { name: "Jyoti Agrawal",  designation: "Project Coordinator", department: "Project Coordination", leader: false, photo: "/images/Jyoti.jpeg" },
    { name: "Gaurav Kumar",   designation: "HR Executive",        department: "Human Resources",      leader: false, photo: "/images/gaurav.jpeg" },
    { name: "Anjali Gupta",   designation: "Web Developer",       department: "Web Development",      leader: false, photo: "/images/anjali-gupta.jpeg" },
    { name: "Deepak Singh",   designation: "Sales Coordinator",   department: "Sales",                leader: false, photo: "/images/deepak.jpeg" },
    { name: "Heena",          designation: "Sales Coordinator",   department: "Sales",                leader: false, photo: "/images/Heena.jpeg" },
    { name: "Nidhi Rathore",  designation: "Sales Coordinator",   department: "Sales",                leader: false, photo: "/images/nidh.jpeg" },
    { name: "Anjali Kumari",  designation: "Executive Assistant", department: "Executive Assistance", leader: false, photo: "/images/anjali-kumari.jpeg" },
    { name: "Muskan Pal",     designation: "Executive Assistant", department: "Executive Assistance", leader: false, photo: "/images/muskan.jpeg" },
    { name: "Alisha Sinha",   designation: "Sales Coordinator",   department: "Sales",                leader: false, photo: "/images/alisha-sinha.jpeg" }
  ];

  const ALL = "All Departments";

  /* ---------- DOM references ---------- */
  const searchInput      = document.getElementById("searchInput");
  const departmentFilter = document.getElementById("departmentFilter");
  const leadershipGrid   = document.getElementById("leadershipGrid");
  const teamGrid         = document.getElementById("teamGrid");
  const leadershipSection = document.getElementById("leadershipSection");
  const teamSection      = document.getElementById("teamSection");
  const emptyState       = document.getElementById("emptyState");
  const resultCount      = document.getElementById("resultCount");
  const footerYear       = document.getElementById("footerYear");

  /* ---------- Build one profile card (safe DOM methods only) ---------- */
  function createCard(person) {
    const card = document.createElement("article");
    card.className = "profile-card" + (person.leader ? " profile-card--leader" : "");

    // Photo area: always rendered, black by default
    const photo = document.createElement("div");
    photo.className = "profile-card__photo";
    photo.setAttribute("role", "img");
    photo.setAttribute("aria-label", "Photo of " + person.name + " (to be added)");

    if (person.photo) {
      const img = document.createElement("img");
      img.src = person.photo;
      img.alt = person.name;
      photo.removeAttribute("role");
      photo.removeAttribute("aria-label");
      photo.appendChild(img);
    }

    const body = document.createElement("div");
    body.className = "profile-card__body";

    const name = document.createElement("h3");
    name.className = "profile-card__name";
    name.textContent = person.name;

    const role = document.createElement("p");
    role.className = "profile-card__role";
    role.textContent = person.designation;

    body.append(name, role);
    card.append(photo, body);
    return card;
  }

  /* ---------- Render a list of people into a grid ---------- */
  function renderGrid(grid, people) {
    grid.replaceChildren(...people.map(createCard));
  }

  /* ---------- Apply search + department filter together ---------- */
  function getFilteredEmployees() {
    const query = searchInput.value.trim().toLowerCase();
    const department = departmentFilter.value;

    return employees.filter(function (person) {
      const matchesDepartment = department === ALL || person.department === department;
      const matchesSearch =
        query === "" ||
        person.name.toLowerCase().includes(query) ||
        person.designation.toLowerCase().includes(query);
      return matchesDepartment && matchesSearch;
    });
  }

  /* ---------- Update the page ---------- */
  function update() {
    const results = getFilteredEmployees();
    const leaders = results.filter(function (p) { return p.leader; });
    const team    = results.filter(function (p) { return !p.leader; });

    renderGrid(leadershipGrid, leaders);
    renderGrid(teamGrid, team);

    // Hide sections that have no matching members
    leadershipSection.hidden = leaders.length === 0;
    teamSection.hidden = team.length === 0;
    emptyState.hidden = results.length !== 0;

    const total = employees.length;
    resultCount.textContent =
      "Showing " + results.length + " of " + total + " team member" + (total === 1 ? "" : "s");
  }

  /* ---------- Events ---------- */
  searchInput.addEventListener("input", update);
  departmentFilter.addEventListener("change", update);

  /* ---------- Init ---------- */
  footerYear.textContent = new Date().getFullYear();
  update();
})();
