document.getElementById('edit-btn').addEventListener('click', function() {
    let inputs = document.querySelectorAll('.profile-input');
    inputs.forEach(input => {
        input.disabled = false;  // Enable input fields
    });
    document.getElementById('save-btn').disabled = false;  // Enable save button
});

document.getElementById('save-btn').addEventListener('click', function() {
    let inputs = document.querySelectorAll('.profile-input');
    inputs.forEach(input => {
        input.disabled = true;  // Disable input fields after saving
    });
    document.getElementById('save-btn').disabled = true;  // Disable save button
});
