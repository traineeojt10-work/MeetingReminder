const monthYearElement = document.getElementById("monthYear") as HTMLDivElement;
const datesElement = document.getElementById("dates_small_c") as HTMLDivElement;
const currentDate = new Date();

function updateCalendar() {
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();

  const firstDay = new Date(currentYear, currentMonth, 1);
  const lastDay = new Date(currentYear, currentMonth + 1, 0);
  const totalDays = lastDay.getDate();
  const firstDayIndex = firstDay.getDay();
  const lastDayIndex = lastDay.getDay();

  const monthYearString = currentDate.toLocaleString("default", {
    month: "long",
    year: "numeric",
  });
  monthYearElement.textContent = monthYearString;

  let datesHTML = "";

  // Previous month filler
  for (let i = firstDayIndex; i > 0; i--) {
    const prevDate = new Date(currentYear, currentMonth, -i + 1);
    datesHTML += `<div class="date_small_c inactive">${prevDate.getDate()}</div>`;
  }

  // Current month days
  for (let i = 1; i <= totalDays; i++) {
    const date = new Date(currentYear, currentMonth, i);
    const activeClass =
      date.toDateString() === new Date().toDateString() ? "active" : "";
    datesHTML += `<div class="date_small_c ${activeClass}">${i}</div>`;
  }

  // Next month filler
  for (let i = 1; i <= 7 - lastDayIndex - 1; i++) {
    const nextDate = new Date(currentYear, currentMonth + 1, i);
    datesHTML += `<div class="date_small_c inactive">${nextDate.getDate()}</div>`;
  }

  // Update DOM once
  datesElement.innerHTML = datesHTML;
  
}

export const initSmallCalendar = () => {
  const prevBtn = document.getElementById("prevBtn") as HTMLButtonElement;
  const nextBtn = document.getElementById("nextBtn") as HTMLButtonElement;

  prevBtn.addEventListener("click", () => {
    currentDate.setMonth(currentDate.getMonth() - 1);
    updateCalendar();
  });

  nextBtn.addEventListener("click", () => {
    currentDate.setMonth(currentDate.getMonth() + 1);
    updateCalendar();
  });
  updateCalendar();
};
