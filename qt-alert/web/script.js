document.addEventListener('DOMContentLoaded', () => {
    let progress = 0;
    let activeInterval = null; 
    const progressBar = document.getElementById('progress-bar');
    const notification = document.getElementById('notification');
    const popupSound = document.getElementById('popup-sound');
    const notificationTitle = document.querySelector('.notification-title');
    const notificationText = document.querySelector('.notification-text');
    const notificationIcon = document.querySelector('.notification-icon');
  
    window.addEventListener('message', (event) => {
        if (event.data.action === "start") {
            if (activeInterval !== null) {
                clearInterval(activeInterval);
                notification.style.visibility = 'hidden'; 
                progressBar.style.width = '0%';
            }

            const position = event.data.position || "top-center";
            const progressColor = event.data.progressColor || "white"; 
            const iconColor = event.data.iconColor || "white";  
            const backgroundColor = event.data.backgroundColor || "rgba(0, 0, 0, 0.8)"; 

            const title = event.data.title || "QUANTUM ROLEPLAY"; 
            const text = event.data.text || "Our server will be taken into maintenance tomorrow at 19:00, it is announced to everyone"; 

            notificationTitle.textContent = title;
            notificationText.textContent = text;

            notification.style.backgroundColor = backgroundColor;

            notification.classList.remove('top-center', 'top-left', 'top-right', 'center-left', 'center-right', 'bottom-center', 'center-middle');
            notification.classList.add(position);
            
            notificationIcon.style.color = iconColor;

            progressBar.style.backgroundColor = progressColor;

            popupSound.play();
            notification.style.visibility = 'visible'; 
            
            progress = 0;
            progressBar.style.width = `${progress}%`;

            activeInterval = setInterval(() => {
                progress += 1;

                progressBar.style.width = `${progress}%`;

                if (progress >= 100) {
                    clearInterval(activeInterval);
                    activeInterval = null; 
                    setTimeout(() => {
                        notification.style.visibility = 'hidden'; 
                        progressBar.style.width = '0%'; 
                    }, 1000);
                }
            }, 100);
        }
    });
});
