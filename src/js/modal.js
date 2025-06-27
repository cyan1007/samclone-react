function initModal() {
  const modalWrap = document.querySelector(".modal-wrap");
  const modalMenuBtn = document.querySelector(".modal-menu-btn");
  const modalCloseBtn = document.querySelector(".modal-close-btn");
  const modalDepth2List = document.querySelectorAll(".modal-submenu > li");
  const modalDepth3List = document.querySelectorAll(".modal-submenu > li > ul");

  let isDepth3Active = false;
  let activeDepth2 = null;

  if (!modalWrap || !modalMenuBtn || !modalCloseBtn) {
    console.warn("Modal DOM 요소가 누락되었습니다.");
    return;
  }

  modalMenuBtn.addEventListener("click", (e) => {
    e.preventDefault();
    document.documentElement.style.overflowY = "hidden";
    modalWrap.style.right = 0;
  });

  modalCloseBtn.addEventListener("click", () => {
    modalWrap.style.right = "-100%";
    document.documentElement.style.overflowY = "auto";
  });

  modalDepth2List.forEach((depth2) => {
    depth2.addEventListener("click", (e) => {
      e.preventDefault();

      const depth3 = depth2.querySelector("ul");
      const depth3Height = depth3?.scrollHeight || 0;

      if (activeDepth2 && activeDepth2 !== depth2) {
        const activeDepth3 = activeDepth2.querySelector("ul");
        isDepth3Active = false;
        activeDepth2.classList.remove("open");
        if (activeDepth3) activeDepth3.style.height = 0;
      }

      isDepth3Active = !isDepth3Active;

      if (isDepth3Active) {
        depth2.classList.add("open");
        if (depth3) depth3.style.height = `${depth3Height}px`;
        activeDepth2 = depth2;
      } else {
        depth2.classList.remove("open");
        if (depth3) depth3.style.height = 0;
        activeDepth2 = null;
      }
    });
  });

  modalDepth3List.forEach((depth3) => {
    depth3.addEventListener("click", (e) => {
      e.stopPropagation();
    });
  });
}

export default initModal;
