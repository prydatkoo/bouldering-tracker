const forms = document.getElementById("climb-form");
const list = document.getElementById("climb-list");

const gradeClass = (grade) => {
  if (grade === "V1 / Green") return "grade-green";
  if (grade === "V2 / Yellow") return "grade-yellow";
  if (grade === "V3 / Blue") return "grade-blue";
  if (grade === "V4 / Red") return "grade-red";
  if (grade === "V5 / Grey") return "grade-grey";
  if (grade === "V6 / Black") return "grade-black";
  return "grade-default";
};

async function loadClimbs() {
  const res = await fetch("/api/climbs");
  const climbs = await res.json();

  list.innerHTML = "";
  climbs.forEach((c) => {
    const li = document.createElement("li");
    li.innerHTML = `${c.name} <span class="grade-badge ${gradeClass(c.grade)}">${c.grade}</span>`;
    list.appendChild(li);
  });
}

forms.addEventListener("submit", async (e) => {
  e.preventDefault();

  const formData = new FormData(forms);

  await fetch("/api/climbs", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: formData.get("name"),
      grade: formData.get("grade"),
    }),
  });

  forms.reset();
  loadClimbs();
});

loadClimbs();
