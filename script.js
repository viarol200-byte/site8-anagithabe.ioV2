// Lessons Data
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

// Clock Update
function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds}`;
}

// Render Lessons
function renderLessons() {
    const grid = document.getElementById('lessons-grid');
    
    lessons.forEach((lesson, index) => {
        const card = document.createElement('div');
        card.className = 'lesson-card';
        card.style.animationDelay = `${index * 0.05}s`;
        
        card.innerHTML = `
            <div class="lesson-status">
                <div class="status-badge">
                    <div class="status-dot-card"></div>
                    <span class="status-text">STANDBY</span>
                </div>
                <span class="channel-id">CHANNEL_${String(lesson.id).padStart(2, '0')}</span>
            </div>
            <h3 class="lesson-title">${lesson.subject}</h3>
            <a href="${lesson.link}" target="_blank" rel="noopener noreferrer" class="enter-btn">
                <span>ПІДКЛЮЧИТИСЯ</span>
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                </svg>
            </a>
        `;
        
        card.addEventListener('mouseenter', () => {
            card.querySelector('.status-text').textContent = 'CONNECTING...';
        });
        
        card.addEventListener('mouseleave', () => {
            card.querySelector('.status-text').textContent = 'STANDBY';
        });
        
        grid.appendChild(card);
    });
}

// System Modal Functions
async function openSystemModal() {
    const modal = document.getElementById('system-modal');
    const output = document.getElementById('console-output');
    modal.classList.add('active');
    output.innerHTML = '<div class="console-cursor"></div>';
    
    const logs = [
        '> INITIALIZING SYSTEM DIAGNOSTICS...',
        '> ESTABLISHING SECURE CONNECTION...',
        '> LOCATING SERVER NODE...',
        '> COORDINATES: 48°28′00″ N, 35°01′05″ E',
        '> LOCATION: Центр міста Дніпро',
        '> FETCHING IP ADDRESS...',
    ];
    
    for (let i = 0; i < logs.length; i++) {
        await sleep(400);
        const line = document.createElement('div');
        line.className = 'console-line';
        line.textContent = logs[i];
        line.style.animationDelay = '0s';
        output.insertBefore(line, output.querySelector('.console-cursor'));
    }
    
    try {
        const response = await fetch('https://api.ipify.org?format=json');
        const data = await response.json();
        
        await sleep(400);
        addConsoleLine(output, `> IP ADDRESS: ${data.ip}`);
        
        await sleep(400);
        addConsoleLine(output, '> CONNECTION SECURED');
        
        await sleep(400);
        addConsoleLine(output, '> SYSTEM STATUS: OPERATIONAL');
    } catch (error) {
        await sleep(400);
        addConsoleLine(output, '> ERROR: UNABLE TO FETCH IP');
    }
}

function addConsoleLine(output, text) {
    const line = document.createElement('div');
    line.className = 'console-line';
    line.textContent = text;
    line.style.animationDelay = '0s';
    output.insertBefore(line, output.querySelector('.console-cursor'));
}

function closeSystemModal() {
    document.getElementById('system-modal').classList.remove('active');
}

// IP Modal Functions
async function openIpModal() {
    const modal = document.getElementById('ip-modal');
    const display = document.getElementById('ip-display');
    modal.classList.add('active');
    display.textContent = 'FETCHING...';
    
    try {
        const response = await fetch('https://api.ipify.org?format=json');
        const data = await response.json();
        display.textContent = data.ip;
    } catch (error) {
        display.textContent = 'ACCESS_DENIED';
    }
}

function closeIpModal() {
    document.getElementById('ip-modal').classList.remove('active');
}

// Utility
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Security - Disable right click and keyboard shortcuts
document.addEventListener('contextmenu', (e) => e.preventDefault());

document.addEventListener('keydown', (e) => {
    // Disable F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U
    if (e.key === 'F12' || 
        (e.ctrlKey && e.shiftKey && e.key === 'I') ||
        (e.ctrlKey && e.shiftKey && e.key === 'J') ||
        (e.ctrlKey && e.key === 'u')) {
        e.preventDefault();
    }
});

// Click outside modal to close
document.getElementById('system-modal').addEventListener('click', (e) => {
    if (e.target.id === 'system-modal') {
        closeSystemModal();
    }
});

document.getElementById('ip-modal').addEventListener('click', (e) => {
    if (e.target.id === 'ip-modal') {
        closeIpModal();
    }
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    updateClock();
    setInterval(updateClock, 1000);
    renderLessons();
});
