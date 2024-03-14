const $ = (id) => { return document.getElementById(id); }
const submit = (e) => {
    e.preventDefault();
    const form = {
        'ID': $('id').value,
        'Name': $('name').value,
        'Extension': $('ext').value,
        'Email': $('email').value,
        'Department': $('department').value
    }
    for (const i in form) { console.log(`${i}:`, form[i]); }
}
$('empForm').addEventListener('submit', submit);
