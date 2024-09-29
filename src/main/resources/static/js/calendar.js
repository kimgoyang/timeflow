// 모든 메뉴 아이템을 가져옵니다.
const menuItems = document.querySelectorAll('.menu-item');

// 이미지 경로 설정 (선택 상태, 비선택 상태)
const imagePaths = {
    home: {
        selected: '/static/assets/calendar/calendar_home_blue.png',
        unselected: '/static/assets/calendar/calendar_home_white.png'
    },
    chat: {
        selected: '/static/assets/calendar/calendar_chat_blue.png',
        unselected: '/static/assets/calendar/calendar_chat_white.png'
    },
    mypage: {
        selected: '/static/assets/calendar/calendar_user_icon_blue.png',
        unselected: '/static/assets/calendar/calendar_user_icon_white.png'
    },
    settings: {
        selected: '/static/assets/calendar/calendar_settings_icon_blue.png',
        unselected: '/static/assets/calendar/calendar_settings_icon_white.png'
    }
};

// 페이지가 로드될 때 기본으로 홈 버튼을 선택된 상태로 설정합니다.
window.onload = function () {
    const homeButton = document.querySelector('.menu-item.home');
    homeButton.classList.add('selected'); // 홈 버튼에 selected 클래스 추가
    const icon = homeButton.querySelector('img');
    icon.src = imagePaths['home'].selected; // 홈 버튼 이미지를 선택된 상태로 변경
};

// 각 버튼에 클릭 이벤트를 추가합니다.
menuItems.forEach(item => {
    item.addEventListener('click', function () {
        // 먼저 모든 아이템에서 selected 클래스를 제거하고, 비선택 이미지로 변경합니다.
        menuItems.forEach(menu => {
            menu.classList.remove('selected');
            const icon = menu.querySelector('img');
            const menuType = menu.classList[1]; // home, chat, mypage, settings 중 하나
            icon.src = imagePaths[menuType].unselected; // 비선택 이미지로 변경
        });

        // 클릭한 아이템에만 selected 클래스를 추가하고, 선택 이미지로 변경합니다.
        this.classList.add('selected');
        const icon = this.querySelector('img');
        const menuType = this.classList[1]; // home, chat, mypage, settings 중 하나
        icon.src = imagePaths[menuType].selected; // 선택 이미지로 변경

        // 설정 버튼이 클릭된 경우 로그아웃 버튼 보이기
        const logoutButton = document.getElementById('logout-button');
        if (this.classList.contains('settings')) {
            logoutButton.style.display = 'block'; // 로그아웃 버튼 보이기
        } else {
            logoutButton.style.display = 'none'; // 다른 버튼 클릭 시 숨김
        }
    });
});


// fullcalendar
document.addEventListener('DOMContentLoaded', function () {
    var calendarEl = document.getElementById('calendar');

    var calendar = new FullCalendar.Calendar(calendarEl, {
        dayCellContent: function(e) {
            e.dayNumberText = e.dayNumberText.replace('일', "");
        },

        initialView: 'dayGridMonth',
        locale: "ko",
        headerToolbar: {
            left: 'dayGridMonth,timeGridWeek,timeGridDay',
            center: 'prev,title,next',
            right: 'today'
        },
        customButtons: {
            searchButton: {
                text: '🔍',
                click: function () {
                    alert('검색 버튼 클릭됨!');
                }
            }
        },
        // 필요에 따라 초기 날짜 설정 등 추가 옵션을 설정할 수 있습니다.
    });

    calendar.render();

    // 뷰 버튼 스타일 적용 (일간, 주간, 월간)
    var updateViewButtons = function (currentView) {
        var viewButtons = document.querySelectorAll('.fc-dayGridMonth-button, .fc-timeGridWeek-button, .fc-timeGridDay-button');
        viewButtons.forEach(function (button) {
            if (button.classList.contains('fc-' + currentView + '-button')) {
                button.style.backgroundColor = '#4F4E4E';
                button.style.color = 'white';
            } else {
                button.style.backgroundColor = '#CACACA';
                button.style.color = 'black';
            }
        });
    };

    // 뷰가 변경될 때마다 이벤트 처리
    calendar.on('viewDidMount', function (info) {
        updateViewButtons(info.view.type);
    });

    updateViewButtons('dayGridMonth'); // 초기 뷰를 월간으로 설정

});

//설정버튼
// 페이지가 로드될 때 로그아웃 버튼 숨기기
document.addEventListener("DOMContentLoaded", function() {
    const logoutButton = document.getElementById('logout-button');
    logoutButton.style.display = 'none'; // 기본적으로 숨김
});