//----------SVG背景移動-------------//
let targetX1 = 576.637528852983;
let targetY1 = 326.2998352050781;
let targetX2 = 219.11641207608307;
let targetY2 = 215.27907492897725;

function calculateAvoidingPosition(mousePos, currentPos) {
    const distance = 100;
    const direction = mousePos > currentPos ? 1 : -1;

    if (Math.abs(mousePos - currentPos) < distance) {
        return currentPos + direction * distance;
    } else {
        return mousePos;
    }
}

function easeInOutQuart(t) {
    return t < 0.5 ? 8 * t * t * t * t : 1 - Math.pow(-2 * t + 2, 4) / 2;
}

function updatePositions() {
    const circle1 = document.getElementById("ellipse1");
    const currentX1 = circle1.cx.baseVal.value;
    const currentY1 = circle1.cy.baseVal.value;

    const circle2 = document.getElementById("ellipse2");
    const currentX2 = circle2.cx.baseVal.value;
    const currentY2 = circle2.cy.baseVal.value;

    // 計算目標位置
    targetX1 = calculateAvoidingPosition(currentX1 + 1, targetX1);
    targetY1 = calculateAvoidingPosition(currentY1 + 1, targetY1);

    targetX2 = calculateAvoidingPosition(currentX2 - 1, targetX2);
    targetY2 = calculateAvoidingPosition(currentY2 - 1, targetY2);

    // 使用簡單的線性插值實現動畫效果並套用ease-in-out函數
    const easing = 0.1;
    const newX1 = currentX1 + easeInOutQuart(easing) * (targetX1 - currentX1);
    const newY1 = currentY1 + easeInOutQuart(easing) * (targetY1 - currentY1);

    const newX2 = currentX2 + easeInOutQuart(easing) * (targetX2 - currentX2);
    const newY2 = currentY2 + easeInOutQuart(easing) * (targetY2 - currentY2);

    circle1.setAttribute("cx", newX1);
    circle1.setAttribute("cy", newY1);

    circle2.setAttribute("cx", newX2);
    circle2.setAttribute("cy", newY2);
}

function animate() {
    updatePositions();
    requestAnimationFrame(animate);
}

document.addEventListener("mousemove", function(e) {
    const xPos = e.clientX / window.innerWidth * 800;
    const yPos = e.clientY / window.innerHeight * 450;

    targetX1 = calculateAvoidingPosition(xPos, targetX1);
    targetY1 = calculateAvoidingPosition(yPos, targetY1);

    targetX2 = calculateAvoidingPosition(800 - xPos, targetX2);
    targetY2 = calculateAvoidingPosition(450 - yPos, targetY2);
});

animate();

//--------dark&bright mode切換-----------//
const body = document.body;
const modeToggle = document.getElementById('mode-toggle');
const svgIcon = modeToggle.querySelector('svg');

function toggleDarkMode() {
    body.classList.toggle('dark-mode');
}

function updateLocalStorage() {
    localStorage.setItem('darkMode', body.classList.contains('dark-mode') ? 'enabled' : 'disabled');
}

function handleModeToggle() {
    toggleDarkMode();
    updateLocalStorage();
}

// 檢查用戶之前的模式選擇
if (localStorage.getItem('darkMode') === 'enabled') {
    toggleDarkMode();
}

// 監聽切換按鈕的點擊事件
modeToggle.addEventListener('click', handleModeToggle);

let isDarkMode = false;

modeToggle.addEventListener('click', () => {
    isDarkMode = !isDarkMode;

    // 根據 isDarkMode 狀態添加或移除 dark-mode 類
    body.classList.toggle('dark-mode', isDarkMode);

    // 根據 isDarkMode 狀態添加或移除 SVG 的 rotate 類
    svgIcon.classList.toggle('rotate', isDarkMode);

    updateLocalStorage();
});

//-----------Scroll To Discover--------------//
document.addEventListener('DOMContentLoaded', function () {
    var scrollToDiscover = document.getElementById('scroll-to-discover');

    scrollToDiscover.addEventListener('click', function () {
        // 获取要滚动到的目标元素，例如下面的 discover-section
        var targetElement = document.getElementById('discover-section');

        // 获取目标元素相对于视口的位置
        var rect = targetElement.getBoundingClientRect();

        // 计算滚动目标位置
        var scrollTarget = rect.top + window.scrollY;

        // 使用 smooth 滚动效果
        window.scrollTo({
            top: scrollTarget,
            behavior: 'smooth'
        });
    });
});

  
  //-----------画面缩小list响应式动作-----------//
  document.addEventListener('DOMCont,baoqentLoaded', function () {
    var hamburgerMenu = document.getElementById('hamburger-menu');
    var navList = document.querySelector('.nav-list');

    hamburgerMenu.addEventListener('click', function () {
        // 切换新的导航栏的 "active" 类
        navList.classList.toggle('active');
    });
});

