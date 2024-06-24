document.getElementById('trailer-btn').addEventListener('click', function() {
    document.getElementById('overlay').style.display = 'block';
    document.getElementById('highlightSection').classList.add('active');
});

document.getElementById('cancelBtn').addEventListener('click', function() {
    document.getElementById('overlay').style.display = 'none';
    document.getElementById('highlightSection').classList.remove('active');
});



document.getElementById('trailer-btn').addEventListener('click', function() {
    videoFrame.setAttribute('src', 'https://www.youtube.com/embed/cwwdPuIqGfc?start=1&vq=hd1080&autoplay=1');
    document.getElementById('videoFrame').play();
});

document.getElementById('cancelBtn').addEventListener('click', function() {
    videoFrame.setAttribute('src', '');
    document.getElementById('videoFrame').pause();
});

