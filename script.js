
    const lessons = [
        { id: 1, subject: 'ІНФОРМАТИКА', link: 'https://meet.google.com/wkj-dxhp-wss' },
        { id: 2, subject: 'ТЕХНОЛОГІЇ', link: 'https://meet.google.com/hyr-akbe-jdm' },
        { id: 3, subject: 'ЗБД', link: 'https://meet.google.com/hyr-akbe-jdm' },
        { id: 4, subject: 'МУЗИКА', link: 'https://meet.google.com/apg-mqth-rkj' },
        { id: 5, subject: 'ПОЛЬСЬКА МОВА', link: 'https://meet.google.com/ffw-dzia-szq' },
        { id: 6, subject: 'АНГЛІЙСЬКА МОВА', link: 'https://meet.google.com/irj-azmm-biz' },
        { id: 7, subject: 'ПІДПРИЄМНИЦТВО', link: 'https://meet.google.com/sun-zyrg-tcb' },
        { id: 8, subject: 'ЗАРУБІЖНА ЛІТЕРАТУРА', link: 'https://meet.google.com/bxx-oxhy-xqj' },
        { id: 9, subject: 'УКРАЇНСЬКА МОВА (2 ГРУПА)', link: 'https://meet.google.com/wmd-kqoy-qbw' },
{ id: 10, subject: 'ІСТОРІЯ', link: 'https://meet.google.com/hsa-dphb-msr' },
        { id: 11, subject: 'АЛГЕБРА', link: 'https://meet.google.com/ywa-ctyv-itm' },
        { id: 12, subject: 'ГЕОМЕТРІЯ', link: 'https://meet.google.com/sxq-njwb-wob' },
        { id: 13, subject: 'БІОЛОГІЯ', link: 'https://meet.google.com/bzw-gbrz-cgo' },
        { id: 14, subject: 'ХИМІЯ', link: 'https://meet.google.com/hna-vpda-sph' },
        { id: 15, subject: 'УКРАЇНСЬКА ЛІТЕРАТУРА', link: 'https://meet.google.com/wmd-kqoy-qbw' },
        { id: 16, subject: 'ГЕОГРАФІЯ', link: 'https://meet.google.com/wvg-bsba-mna' },
        { id: 17, subject: 'ГРОМАДЯНСЬКА ОСВІТА', link: 'https://meet.google.com/sun-zyrg-tcb' }
    ];
document.addEventListener('DOMContentLoaded', function() {
    const lessonsContainer = document.getElementById('lessons');
    lessons.forEach(lesson => {
        const card = document.createElement('div');
        card.className = 'lesson-card';
        card.innerHTML = `
            <div class="card-glow"></div>
            <div class="lesson-status">
                <div class="status-badge">
                    <div class="status-dot-card"></div>
                    <span>STANDBY</span>
                </div>
                <span class="channel-id">CHANNEL_${String(lesson.id).padStart(2, '0')}</span>
            </div>
            <h3 class="lesson-title">${lesson.subject}</h3>
            ${lesson.id === 9 ? `
            <button class="enter-btn" onclick="showLessonModal('${lesson.subject}', '${lesson.link}')">
                <span>ПІДКЛЮЧИТИСЯ</span>
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                </svg>
            </button>
            ` : `
            <a href="${lesson.link}" target="_blank" rel="noopener noreferrer" class="enter-btn">
<span>ПІДКЛЮЧИТИСЯ</span>
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                </svg>
            </a>
            `}
`;
        
        card.addEventListener('mouseenter', () => {
            card.querySelector('.status-badge span').textContent = 'CONNECTING...';
        });
        card.addEventListener('mouseleave', () => {
            card.querySelector('.status-badge span').textContent = 'STANDBY';
        });
        if (lesson.id !== 9) {
            card.addEventListener('click', () => {
                window.open(lesson.link, '_blank');
            });
        }
lessonsContainer.appendChild(card);
    });

    function updateClock() {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds}`;
    }
    setInterval(updateClock, 1000);
    updateClock();
    const onlineCount = Math.floor(Math.random() * 3) + 25;
    document.getElementById('online-count').textContent = `${onlineCount}/28`;
setInterval(() => {
        if (Math.random() > 0.85) {
            const cards = document.querySelectorAll('.lesson-card');
            const randomCard = cards[Math.floor(Math.random() * cards.length)];
            randomCard.classList.add('micro-glitch');
            setTimeout(() => {
                randomCard.classList.remove('micro-glitch');
            }, 100);
        }
    }, 4000);

    function triggerGlitch() {
        const glitch = document.querySelector('.glitch');
        const glitchRed = document.querySelector('.glitch-red');
        const glitchDark = document.querySelector('.glitch-dark');
        
        glitch.style.animation = 'none';
        glitchRed.style.animation = 'none';
        glitchDark.style.animation = 'none';
        
        void glitch.offsetWidth;
        
        glitch.style.textShadow = `-4px 0 #dc2626, 4px 0 #7f1d1d, 0 0 40px rgba(220, 38, 38, 0.8)`;
        glitchRed.style.opacity = '0.8';
        glitchRed.style.transform = 'translate(-5px, 2px)';
        glitchDark.style.opacity = '0.7';
        glitchDark.style.transform = 'translate(5px, -2px)';
        
        setTimeout(() => {
            glitch.style.textShadow = '';
            glitch.style.animation = '';
            glitchRed.style.opacity = '';
            glitchRed.style.transform = '';
            glitchRed.style.animation = '';
            glitchDark.style.opacity = '';
            glitchDark.style.transform = '';
            glitchDark.style.animation = '';
        }, 300);
    }
    setInterval(() => {
        if (Math.random() > 0.7) {
            triggerGlitch();
        }
    }, 5000);

    function showLessonModal(subject, link) {
        const modal = document.createElement('div');
        modal.className = 'lesson-modal';
        modal.innerHTML = `
            <div class="modal-content">
                <div class="modal-header">
                    <h3>${subject}</h3>
                    <button class="close-btn">&times;</button>
                </div>
                <div class="modal-body">
                    <iframe src="${link}" frameborder="0" allowfullscreen></iframe>
                </div>
            </div>
        `;
        document.body.appendChild(modal);

        const closeBtn = modal.querySelector('.close-btn');
        closeBtn.addEventListener('click', () => {
            document.body.removeChild(modal);
        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                document.body.removeChild(modal);
            }
        });
    }
});
