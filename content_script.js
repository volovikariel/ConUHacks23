function main() {
  const password_field = document.querySelector("input[type='password']");
  if (!password_field) return;
  const is_register_placeholder =
    !password_field.hasAttribute("Autocomplete") ||
    password_field.getAttribute("Autocomplete") !== "true";
  if (!is_register_placeholder) return;

  alert("possible password field found, yay!");
}

main();
