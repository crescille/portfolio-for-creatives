document.addEventListener("DOMContentLoaded", () => {
  const cursor = document.createElement("div");
  cursor.id = "cursor";
  cursor.innerHTML = `<span class="more info">view</span>`;
  document.body.appendChild(cursor);

  document.addEventListener("mousemove", (e) => {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
  });

  document.querySelectorAll("[data-cursor-title]").forEach((el) => {
    el.addEventListener("mouseenter", () => {
      cursor.classList.add("hovering");
    });
    el.addEventListener("mouseleave", () => {
      cursor.classList.remove("hovering");
    });
  });
});