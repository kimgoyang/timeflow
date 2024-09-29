// JavaScript로 이메일을 삽입
document.addEventListener('DOMContentLoaded', function() {
    // 서버에서 받은 이메일 정보 (예시)
    var userEmail = 'example@example.com'; // 서버에서 동적으로 설정할 값

    // success-message 요소를 선택하여 내용 변경
    var successMessage = document.getElementById('success-message');
    successMessage.innerHTML = userEmail + '<br>임시 비밀번호를 전송하였습니다.';
});
