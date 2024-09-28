// دالة لتكبير الشاشة
function openFullscreen() {
    if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
    } else if (document.documentElement.mozRequestFullScreen) { // Firefox
        document.documentElement.mozRequestFullScreen();
    } else if (document.documentElement.webkitRequestFullscreen) { // Chrome, Safari, Opera
        document.documentElement.webkitRequestFullscreen();
    } else if (document.documentElement.msRequestFullscreen) { // IE/Edge
        document.documentElement.msRequestFullscreen();
    }
}

// دالة لتصغير الشاشة
function closeFullscreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.mozCancelFullScreen) { // Firefox
        document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) { // Chrome, Safari, Opera
        document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { // IE/Edge
        document.msExitFullscreen();
    }
}

// تغيير وضعية الشاشة عند الضغط على الزر
document.getElementById('fullscreen-btn').addEventListener('click', function() {
    const icon = this.querySelector('i');
    if (!document.fullscreenElement) {
        openFullscreen(); // تكبير الشاشة
        icon.classList.remove('fa-expand'); // إزالة أيقونة التكبير
        icon.classList.add('fa-compress'); // إضافة أيقونة التصغير
        this.innerHTML = '<i class="fas fa-compress"></i> تصغير الشاشة'; // تعديل النص والأيقونة معًا
    } else {
        closeFullscreen(); // تصغير الشاشة
        icon.classList.remove('fa-compress'); // إزالة أيقونة التصغير
        icon.classList.add('fa-expand'); // إضافة أيقونة التكبير
        this.innerHTML = '<i class="fas fa-expand"></i> تكبير الشاشة'; // تعديل النص والأيقونة معًا
    }
});
// تغيير وضعية الشاشة عند الضغط على الزر
document.getElementById('sound-btn').addEventListener('click', function() {
    const icon = this.querySelector('i');
    if (!document.fullscreenElement) {
        opensound(); // تكبير الشاشة
        icon.classList.remove('fa-volume-up'); // إزالة أيقونة التكبير
        icon.classList.add('fa-volume-mute'); // إضافة أيقونة التصغير
        this.innerHTML = '<i class="fas fa-volume-mute"></i>'; // تعديل النص والأيقونة معًا
    } else {
        closesound(); // تصغير الشاشة
        icon.classList.remove('fa-volume-mute'); // إزالة أيقونة التصغير
        icon.classList.add('fa-volume-up'); // إضافة أيقونة التكبير
        this.innerHTML = '<i class="fas fa-volume-up"></i> '; // تعديل النص والأيقونة معًا
    }
});
