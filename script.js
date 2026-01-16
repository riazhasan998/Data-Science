const alertForm = document.querySelector("#alert-form");
const alertMessage = document.querySelector("#alert-message");

if (alertForm) {
  alertForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(alertForm);
    const name = formData.get("name");
    const domain = formData.get("domain") || "your field";

    alertMessage.textContent = `Thanks ${name}! We'll send ${domain} conference alerts to your inbox.`;
    alertForm.reset();
  });
}
