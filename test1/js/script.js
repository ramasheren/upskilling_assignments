  document.querySelectorAll("input[name=tab]").forEach(tab => {
    tab.addEventListener("change", () => {
      document.querySelectorAll(".tab-content .content").forEach(c => c.classList.add("d-none"));
      document.querySelector(`.tab-content .content[data-tab="${tab.id.replace('tab','')}"]`).classList.remove("d-none");
    });
  });