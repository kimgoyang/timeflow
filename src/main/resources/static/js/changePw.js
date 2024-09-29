// script.js
document.getElementById('confirm-password').addEventListener('input', function() {
    const newPassword = document.getElementById('new-password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    const message = document.getElementById('password-message');

    if (newPassword === confirmPassword) {
        message.textContent = '비밀번호가 일치합니다.';
        message.className = 'match';
    } else {
        message.textContent = '비밀번호가 일치하지 않습니다.';
        message.className = 'no-match';
    }
});
