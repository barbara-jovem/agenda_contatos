const form = document.getElementById("form-activities");
const emjFriend = '<img src="./emojis/happiness.png" alt="Emoji sorrindo" />';
const emjFamily = '<img src="./emojis/home.png" alt="Emoji casa" />';
const emjWork = '<img src="./emojis/briefcase.png" alt="Emoji work" />';
const emjFavorite = '<img src="./emojis/love.png" alt="Emoji favoritos" />';
let line = ""; // Renomeado de 'lines' para 'line'
const contacts = [];
const phones = [];

form.addEventListener("submit", function (e) {
  e.preventDefault();
  if (validateForm()) {
    addLine();
    updateTable();
  }
});

function addLine() {
  const inputNameContact = document.getElementById("name-contact");
  const inputPhoneNumber = document.getElementById("number-phone");
  const typeContact = document.getElementsByName("type-contact");

  if (contacts.includes(inputNameContact.value)) {
    alert(`O contato ${inputNameContact.value} já foi inserido`);
  } else {
    contacts.push(inputNameContact.value);
    phones.push(inputPhoneNumber.value);

    let emoji = "";
    if (typeContact[0].checked) {
      emoji = emjFriend;
    } else if (typeContact[1].checked) {
      emoji = emjFamily;
    } else if (typeContact[2].checked) {
      emoji = emjWork;
    } else if (typeContact[3].checked) {
      emoji = emjFavorite;
    }

    let row = "<tr>"; 
    row += `<td>${inputNameContact.value}</td>`;
    row += `<td>${inputPhoneNumber.value}</td>`;
    row += `<td>${emoji}</td>`;
    row += "</tr>";

    line += row; 
  }

  inputNameContact.value = "";
  inputPhoneNumber.value = "";
}

function updateTable() {
  const tableBody = document.querySelector("tbody");
  tableBody.innerHTML = line; 
}

function validateForm() {
  const inputPhoneNumber = document.getElementById("number-phone");
  const maxLength = 12;
  if (inputPhoneNumber.value.length > maxLength) {
    alert('Digite um número de telefone válido');
    return false;
  }
  return true;
}
