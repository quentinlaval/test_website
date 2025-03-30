document.addEventListener("DOMContentLoaded", function () {
    const events = [
        { "date": "2025-04-10", "auteur": "Alice Dupont", "sujet": "Conférence Web", "lien": "conference.html" },
        { "date": "2025-04-15", "auteur": "Bob Martin", "sujet": "Atelier JavaScript", "lien": "atelier-js.html" }
    ];
    generateCalendar(events);
});

function generateCalendar(events) {
    const calendar = document.getElementById("calendar");
    const currentMonth = new Date().getMonth();
    const currentYear = new Date().getFullYear();
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

    for (let day = 1; day <= daysInMonth; day++) {
        const dateStr = `${currentYear}-${String(currentMonth + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
        const dayDiv = document.createElement("div");
        dayDiv.classList.add("day");
        dayDiv.textContent = day;

        const event = events.find(e => e.date === dateStr);
        if (event) {
            dayDiv.classList.add("highlight");
            dayDiv.addEventListener("click", () => {
                window.location.href = event.lien;
            });
        }

        calendar.appendChild(dayDiv);
    }
}
