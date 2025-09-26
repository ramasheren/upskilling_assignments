var contacts = [];

var nameIp = document.getElementById("nameIp");
var emailIp = document.getElementById("emailIp");
var phoneIp = document.getElementById("phoneIp");
var noteIp = document.getElementById("noteIp");

function addContact() {
  var contact = {
    name: nameIp.value,
    email: emailIp.value,
    phone: phoneIp.value,
    note: noteIp.value,
  };

  contacts.push(contact);
  var container = "";

  for (var i = 0; i < contacts.length; i++) {
    container += `
            <tr>
                <td>${i + 1}</td>
                <td>${contacts[i].name}</td>
                <td>${contacts[i].email}</td>
                <td>${contacts[i].phone}</td>
                <td>${contacts[i].note}</td>
            </tr>
        `;
  }

  document.getElementById("tableB").innerHTML = container;
  document.getElementById('contactForm').reset();
}
