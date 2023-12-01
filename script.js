// title变字
document.addEventListener('DOMContentLoaded', function () {
    var titleElement = document.getElementById('dynamicTitle');
    var idleMessages = ['Welcome!😊', 'Explore 🎨', 'Read My Stories👁️👄👁️', 'Have 💃🕺💃🕺FUN!','💩💩💩'];

    var currentIndex = 0;

    function changeTitle() {
        titleElement.textContent = idleMessages[currentIndex];
        currentIndex = (currentIndex + 1) % idleMessages.length;
    }

    setInterval(changeTitle, 3000); // 3000 milliseconds (3 seconds) interval
});
