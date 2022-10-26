/** POP up modal with the result */
const showModal = (content) => {
  const modal = document.createElement("dialog");
  modal.setAttribute(
    "style",
    `
      border: none;
      top:150px;
      border-radius:20px;
      background-color:white;
      position: fixed; box-shadow: 0px 12px 48px rgba(29, 5, 64, 0.32);
      overflow-x: hidden;
      overflow-y: auto;
      `
  );
  modal.innerHTML = `
  <h1 style="text-align:center !important; font-size: 36px !important; font-weight: 600 !important; margin: 0 !important; padding: 1rem 0 !important;">Response Content</h1>
  <p id="popup-content"; style="height:100% !important;font-size:20px !important">${content}</p>
      <div style="position:absolute; top:0px; right:5px;">
      <button id="ext-closing-button"><svg id="ext-closing-button-svg" style="width:30px;height:30px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" class="w-6 h-6">
      <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z" clip-rule="evenodd" />
    </svg>
  
    </button>
      </div>`;
  document.body.appendChild(modal);
  const dialog = document.querySelector("dialog");
  dialog.showModal();
  dialog.querySelector("button").addEventListener("click", () => {
    dialog.close();
  });
};