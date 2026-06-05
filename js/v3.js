document.addEventListener('DOMContentLoaded', function() {
    
    // 1. ÍCONES (COM BASE64 PARA NÃO QUEBRAR NO CELULAR)
    const ICONS = {
        whatsapp: '<i class="fa-brands fa-whatsapp"></i>',
        instagram: '<i class="fa-brands fa-instagram"></i>',
        telegram: '<i class="fa-brands fa-telegram"></i>',
        heart: '<i class="fa-solid fa-heart"></i>',
        share: '<i class="fa-solid fa-share-nodes"></i>',
        pix: '<img src="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTIyLjA2NTIgNi42ODE0N0wxOS4zMzc4IDMuOTU0MDVDMTguNzY0IDMuMzgwMzEgMTguNzY0IDIuNDUwMTMgMTkuMzM3OCAxLjg3NjM5TDIwLjIzNiAwLjk3ODE1OUMyMS41NDA1IDIuMjgyNjMgMjIuMTkyNyAzLjk4MzUxIDIyLjE5MjcgNS42ODQ0MUMyMi4xOTI3IDcuMzg1MyAyMS41NDA1IDkuMDg2MTggMjAuMjM2IDEwLjM5MDdMMTkuMzM3OCA5LjQ5MjQyQzE4Ljc2NCA4LjkxODY4IDE4Ljc2NCA3Ljk4ODUgMTkuMzM3OCA3LjQxNDc2TDIyLjA2NTIgNC42ODczM0wyMi4wNjUyIDYuNjgxNDdaTTE0LjUyNzMgMTEuMzY5TDE3LjI1NDcgOC42NDE1N0MxNy44Mjg0IDguMDY3ODMgMTguNzU4NiA4LjA2NzgzIDE5LjMzMjMgOC42NDE1N0wyMC4yMzA2IDkuNTM5OEwxNS40MjU1IDE0LjM0NDhMMTAuNjIwNSA5LjUzOThMMTEuNTE4NyA4LjY0MTU3QzEyLjA5MjUgOC4wNjc4MyAxMy4wMjI2IDguMDY3ODMgMTMuNTk2NCA4LjY0MTU3TDE2LjMyMzggMTEuMzY5SDE0LjUyNzNaTTkuNTQ4NSAxMC42MTEyQzguOTc0NzUgMTEuMTg1IDguMDQ0NTcgMTEuMTg1IDcuNDcwODMgMTAuNjExMkw0Ljc0MzQgNy44ODM4NEg2LjczNzUzTDkuNDY0OTYgMTAuNjExMkMxMC4wMzg3IDExLjE4NSAxMC45Njg5IDExLjE4NSAxMS41NDI2IDEwLjYxMTJMMTQuMjcgNy44ODM4NEgxNi4yNjQyTDEzLjUzNjcgMTAuNjExMkMxMi40MzU3IDExLjcxMjIgMTIuNDM1NyAxMy40OTc1IDEzLjUzNjcgMTQuNTk4NUwxNy45ODMgMTkuMDQ0OEwxNy4wODQ3IDE5Ljk0M0MxNi41MTEgMjAuNTE2OCAxNS41ODA4IDIwLjUxNjggMTUuMDA3IDE5Ljk0M0wxMi4yNzk2IDE3LjIxNTZWMTkuMjA5N0wxNS4wMDcgMjEuOTM3MkMxNS41ODA4IDIyLjUxMDkgMTYuNTExIDIyLjUxMDkgMTcuMDg0NyAyMS45MzcyTDE3Ljk4MyAyMS4wMzg5TDE5LjA4NTUgMjIuMTQxNEMxNy4xMzAxIDI0LjA5NjggMTMuOTYwNSAyNC4wOTY4IDEyLjAwNTEgMjIuMTQxNEw3LjU1ODgzIDE3LjY5NTFMMy4xMTI1OCAyMi4xNDE0QzEuMTU3MiAyNC4wOTY4IC0yLjAxMjQxIDI0LjA5NjggLTMuOTY3NzggMjIuMTQxNEwxLjk4MTM0IDE2LjE5MjNMLTMuOTY3NzggMTAuMjQzMkMtMi4wMTI0MSA4LjI4NzggLTIuMDEyNDEgNS4xMTgyNCAtMy45Njc3OCAzLjE2Mjg3TDEuOTgxMzQgLTIuNzg2MjFMNy45MzA0NSAzLjE2Mjg3QzkuODg1ODIgMS4yMDc1IDEzLjA1NTQgMS4yMDc1IDE1LjAxMDggMy4xNjI4N0wyMC45NTk5IC0yLjc4NjIxQzIyLjkxNTMgLTAuODMwODM5IDI2LjA4NDkgLTAuODMwODM5IDI4LjA0MDIgLTIuNzg2MjFMMjIuMDkxMSAzLjE2Mjg3QzI0LjA0NjUgNS4xMTgyNCAyNC4wNDY1IDguMjg3OCAyMi4wOTExIDEwLjI0MzJMMjguMDQwMiAxNi4xOTIzQzI2LjA4NDkgMTguMTQ3NiAyMi45MTUzIDE4LjE0NzYgMjAuOTU5OSAxNi4xOTIzTDE1LjAxMDggMjIuMTQxNEwxMC41NjQ2IDE3LjY5NTFMMTMuMjkyIDE0Ljk2NzdDMTMuODY1NyAxNC4zOTM5IDEzLjg2NTcgMTMuNDYzNyAxMy4yOTIgMTQuOTY3N0wxMC41NjQ2IDE3LjY5NTFMNi4xMTgzMyAxMy4yNDg4TDguODQ1NzYgMTAuNTIxNEM5LjQxOTUgOS45NDc2NiA5LjQxOTUgOS4wMTc0OCA4Ljg0NTc2IDguNDQzNzRMNi4xMTgzMyA1LjcxNjMxTDEuNjcyMDggMTAuMTYyNkMtMC4yODMyOTIgMTIuMTE3OSAtMC4yODMyOTIgMTUuMjg3NSAxLjY3MjA4IDE3LjI0MjlMMi41NzAzMSAxOC4xNDExQzMuMTQ0MDYgMTguNzE0OSA0LjA3NDI0IDE4LjcxNDkgNC42NDc5OCAxOC4xNDExTDcuMzc1NDEgMTUuNDEzN1YxNy40MDc4TDQuNjQ3OTggMjAuMTM1MkM0LjA3NDI0IDIwLjcwOSAzLjE0NDA2IDIwLjcwOSAyLjU3MDMxIDIwLjEzNTJMMS42NzIwOCAxOS4yMzdMMC41Njk1NjMgMjAuMzM5NUMtMS4zODU4MSAxOC4zODQxIC0xLjM4NTgxIDE1LjIxNDYgMC41Njk1NjMgMTMuMjU5Mkw1LjAxNTgxIDguODEyOTZMMC41Njk1NjMgNC4zNjY3MUMtMS4zODU4MSAyLjQxMTM0IC0xLjM4NTgxIC0wLjc1ODIxNCAwLjU2OTU2MyAtMi43MTM1OUwxLjY3MjA4IC0xLjYxMTA3QzIuMjQ1ODMgLTEuMDM3MzMgMy4xNzYwMSAtMS4wMzczMyAzLjc0OTc1IC0xLjYxMTA3TDYuNDc3MTggLTQuMzM4NVYtMi4zNDQzN0wzLjc0OTc1IDAuMzgzMDU3QzMuMTc2MDEgMC45NTY4IDIuMjQ1ODMgMC45NTY4IDEuNjcyMDggMC4zODMwNTdMMC43NzM4NTUgLTAuNTE1MTc1QzAuMTk1MDg4IDAuMDYzNTYzMyAtMC4xMjI0MjYgMC44NDk1OTIgLTAuMTIyNDI2IDEuNjY4NkMtMC4xMjI0MjYgMi40ODc2MSAwLjE5NTA4OCAzLjI3MzY0IDAuNzczODU1IDMuODUyMzhMNS4yMjAxIDguMjk4NjNMOS42NjYzNSAzLjg1MjM4TDguNzY4MTIgMi45NTQxNUM4LjE5NDM4IDIuMzgwNCA3LjI2NDE5IDIuMzgwNCA2LjY5MDQ1IDIuOTU0MTVMMy45NjMwMiA1LjY4MTU4SDEuOTY4ODlMNC42OTYzMiAyLjk1NDE1QzUuMjcwMDYgMi4zODA0IDYuMjAwMjUgMi4zODA0IDYuNzczOTkgMi45NTQxNUw3LjY3MjIyIDMuODUyMzhDOC4yNTA5OSAzLjI3MzY0IDkuMDM3MDIgMi45NTYxMyA5Ljg1NjAzIDIuOTU2MTNDMTAuNjc1IDIuOTU2MTMgMTEuNDYxMSAzLjI3MzY0IDEyLjAzOTggMy44NTIzOEwxNC43NjcyIDEuMTI0OTZIMTIuNzczMUwxNS41MDA1IDMuODUyMzhDMTYuMDc0MyA0LjQyNjEyIDE3LjAwNDUgNC40MjYxMiAxNy41NzgyIDMuODUyMzhMMTguNDc2NCAyLjk1NDE1QzE5LjA1NSIgZmlsbD0iY3VycmVudENvbG9yIi8+PC9zdmc+" class="img-icon">',
        revolut: '<img src="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTMuMiA1aDExLjZMMTIgMTAuOEg2TDMuMiA1em0xNy42IDE0SDkuMmwyLjgtNS44aDZsMi44IDUuOHpNMTIgMTEuMmwyLjgtNS44aDZMMTIgMjRWMTEuMnoiIGZpbGw9ImN1cnJlbnRDb2xvciIvPjwvc3ZnPg==" class="img-icon">'
    };

    // 2. CONFIGURAÇÃO
    const CONFIG = {
        api_url: 'https://dublincalling.duckdns.org/api/nowplaying/dublincalling',
        telegram_bot: 'https://t.me/Siteschanges_bot', 
        pix_key: '00020126330014BR.GOV.BCB.PIX0111330518788395204000053039865802BR5901N6001C62070503***63043C9E',
        revolut_user: 'robertao',
        whatsapp: 'https://wa.me/3530830209354',
        instagram: 'https://instagram.com/chch_changes',
        stationName: 'Dublin Calling'
    };

    let currentDonationData = CONFIG.pix_key; 
    let currentDonationType = 'pix';

    // 3. ESTATÍSTICAS DO TOPO (Listeners, Clima)
    if (!document.getElementById('top-info-container')) {
        const topInfo = document.createElement('div');
        topInfo.id = 'top-info-container';
        topInfo.innerHTML = `
            <div class="glass-pill" style="border-color: rgba(255,71,87,0.3)"><div class="red-dot"></div> ON AIR</div>
            <div class="glass-pill">👥 <span id="listener-count">--</span></div>
            <div class="glass-pill">🌡️ <span id="weather-text">...</span></div>
        `;
        document.body.appendChild(topInfo);
    }

    // 4. MODAL DE INSTRUÇÕES E COACH MARK
    if(!document.getElementById('guide-overlay')) {
        const overlay = document.createElement('div');
        overlay.id = 'guide-overlay';
        overlay.innerHTML = `
            <div class="guide-card">
                <div class="guide-title">How to Support?</div>
                <div class="guide-steps">
                    <div class="guide-step"><div class="step-num">1</div><div class="step-text">Click to Copy the Key/Link.</div></div>
                    <div class="guide-step"><div class="step-num">2</div><div class="step-text">Open your App (Revolut or Bank).</div></div>
                    <div class="guide-step"><div class="step-num">3</div><div class="step-text">Paste into "Pix Copy & Paste" or Browser.</div></div>
                </div>
                <button class="guide-close" onclick="closeGuide()">Got it!</button>
            </div>
        `;
        document.body.appendChild(overlay);
    }

    if(!document.getElementById('coach-mark')) {
        const coach = document.createElement('div');
        coach.id = 'coach-mark';
        if(window.innerWidth <= 1024) {
            coach.style.bottom = '130px'; coach.style.right = '20px';
            coach.innerHTML = `<span class="coach-text">Support us!</span> <span class="coach-arrow">↴</span>`;
        } else {
            coach.style.top = '440px'; coach.style.right = '270px';
            coach.innerHTML = `<span class="coach-text">Support us!</span> <span class="coach-arrow">→</span>`;
        }
        document.body.appendChild(coach);
        setTimeout(() => { coach.style.opacity = '1'; }, 2000);
        setTimeout(() => { coach.style.opacity = '0'; }, 10000);
    }

    window.openGuide = function() {
        document.getElementById('guide-overlay').classList.add('active');
        window.copyDonation();
    };
    window.closeGuide = function() { document.getElementById('guide-overlay').classList.remove('active'); };

    // 5. FUNÇÕES DE INTERAÇÃO (Reações e Compartilhar)
    window.sendReaction = function() {
        const emojis = ['❤️', '🔥', '👏', '🎶', '🎸'];
        const reaction = document.createElement('div');
        reaction.className = 'floating-reaction';
        reaction.innerText = emojis[Math.floor(Math.random() * emojis.length)];
        const randomX = Math.floor(Math.random() * 60) - 30; 
        reaction.style.transform = `translateX(${randomX}px)`;
        document.body.appendChild(reaction);
        setTimeout(() => reaction.remove(), 2500);
    };

    window.shareStation = function() {
        const shareData = { title: CONFIG.stationName, text: `🎵 I'm listening to ${CONFIG.stationName}! Tune in with me:`, url: window.location.href };
        if (navigator.share) { navigator.share(shareData).catch(err => console.log('Share canceled')); } 
        else { window.open(`https://wa.me/?text=${encodeURIComponent(shareData.text + " " + shareData.url)}`, '_blank'); }
    };

    // 6. SIDEBAR DO DESKTOP (Dashboard Lateral)
    if (!document.getElementById('right-dashboard')) {
        const dashboard = document.createElement('div');
        dashboard.id = 'right-dashboard';
        const pixQr = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${CONFIG.pix_key}`;

        dashboard.innerHTML = `
            <div class="sidebar-header">
                <div class="sidebar-title">DASHBOARD</div>
                <button class="theme-btn" id="theme-switcher" title="Change Theme">🎨</button>
            </div>
            <div class="weather-grid">
                <div class="weather-item"><div class="weather-value" id="side-wind">--</div><div class="weather-label">Wind</div></div>
                <div class="weather-item"><div class="weather-value" id="side-humid">--</div><div class="weather-label">Humidity</div></div>
            </div>
            <div id="next-song-container" style="display:none;">
                <div class="sidebar-title" style="color:var(--accent); margin-top:10px;">Playing Next</div>
                <div class="history-item" style="color: white; font-weight: bold;"><span class="history-icon">⏭️</span> <span id="next-song-text">Loading...</span></div>
            </div>
            <div>
                <div class="sidebar-title">Interact</div>
                <a href="${CONFIG.telegram_bot}" target="_blank" class="telegram-card">
                    <div class="tg-icon">${ICONS.telegram}</div>
                    <div class="tg-info"><div class="tg-text">Request a Song</div><div class="tg-sub">via Telegram</div></div>
                </a>
                <div class="social-grid">
                    <button class="social-btn btn-heart" onclick="sendReaction()" title="Like this song">${ICONS.heart}</button>
                    <button class="social-btn btn-share" onclick="shareStation()" title="Share Station">${ICONS.share}</button>
                    <a href="${CONFIG.whatsapp}" target="_blank" class="social-btn btn-whatsapp" title="WhatsApp">${ICONS.whatsapp}</a>
                    <a href="${CONFIG.instagram}" target="_blank" class="social-btn btn-instagram" title="Instagram">${ICONS.instagram}</a>
                </div>
            </div>
            <div>
                <div class="sidebar-title">Support Us</div>
                <div class="donation-card" onclick="openGuide()" title="Click for Guide">
                    <div class="donation-header">
                        <button class="donate-tab active" onclick="event.stopPropagation(); switchDonation('pix')">${ICONS.pix} &nbsp; PIX</button>
                        <button class="donate-tab" onclick="event.stopPropagation(); switchDonation('revolut')">${ICONS.revolut} &nbsp; Revolut</button>
                    </div>
                    <img src="${pixQr}" id="donation-qr" class="qr-img" alt="QR Code">
                    <div class="qr-label" id="donation-label">Scan or Click to Support</div>
                </div>
            </div>
            <div>
                <div class="sidebar-title">Recently Played</div>
                <div class="history-list" id="history-container"><div class="history-item">Loading...</div></div>
            </div>
        `;
        document.body.appendChild(dashboard);
    }

    // 7. FUNÇÕES DE DOAÇÃO E TROCA DE TEMA
    window.copyDonation = function() {
        navigator.clipboard.writeText(currentDonationData).then(() => {
            const label = document.getElementById('donation-label');
            const originalText = label.textContent;
            if(currentDonationType === 'pix') label.textContent = "✅ PIX KEY COPIED!";
            else label.textContent = "✅ REVOLUT LINK COPIED!";
            label.style.color = 'green';
            setTimeout(() => { label.textContent = originalText; label.style.color = '#444'; }, 3000);
        }).catch(err => { prompt("Copy manually:", currentDonationData); });
    };

    window.switchDonation = function(type) {
        currentDonationType = type;
        const img = document.getElementById('donation-qr');
        const label = document.getElementById('donation-label');
        const tabs = document.querySelectorAll('.donate-tab');
        tabs.forEach(t => t.classList.remove('active'));
        if (type === 'pix') {
            currentDonationData = CONFIG.pix_key;
            img.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${CONFIG.pix_key}`;
            label.textContent = "Scan or Click to Support (Pix)";
            tabs[0].classList.add('active');
        } else {
            const link = `https://revolut.me/${CONFIG.revolut_user}`;
            currentDonationData = link;
            img.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${link}`;
            label.textContent = "Scan or Click to Support (Rev)";
            tabs[1].classList.add('active');
        }
    };

    const themes = [
        'linear-gradient(-45deg, #0f0c29, #302b63, #24243e)', 
        'linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)', 
        'linear-gradient(-45deg, #000000, #434343)',
        'url("https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=2070&auto=format&fit=crop") center/cover'
    ];
    let currentTheme = 0;
    if(document.getElementById('theme-switcher')) {
        document.getElementById('theme-switcher').addEventListener('click', () => {
            currentTheme = (currentTheme + 1) % themes.length;
            document.body.style.background = themes[currentTheme];
            document.body.style.animation = themes[currentTheme].includes('url') ? 'none' : 'gradientBG 20s ease infinite';
        });
    }

    // 8. FOOTER E NOTÍCIAS
    if (!document.getElementById('modern-footer')) {
        const footer = document.createElement('div');
        footer.id = 'modern-footer';
        footer.innerHTML = `
            <div class="news-badge">MUSIC NEWS</div>
            <div class="ticker-container"><div class="ticker-wrapper" id="ticker-content">Loading feeds...</div></div>
            <div id="integrated-visualizer"></div>
        `;
        document.body.appendChild(footer);
    }
    const vizContainer = document.getElementById('integrated-visualizer');
    if (vizContainer && vizContainer.childElementCount === 0) {
        for(let i=0; i<10; i++) {
            const bar = document.createElement('div');
            bar.className = 'mini-bar';
            bar.style.animationDuration = (Math.random() * 0.5 + 0.5) + 's';
            vizContainer.appendChild(bar);
        }
    }

    const RSS_API = "https://api.rss2json.com/v1/api.json?rss_url=";
    const feeds = [ { name: 'Pitchfork', url: 'https://pitchfork.com/feed/feed-news/rss' }, { name: 'Billboard', url: 'https://www.billboard.com/feed/' }, { name: 'NME', url: 'https://www.nme.com/feed' } ];
    async function loadNews() {
        const contentDiv = document.getElementById('ticker-content');
        if(!contentDiv) return;
        let allItems = [];
        const promises = feeds.map(async (feed) => {
            try {
                const res = await fetch(RSS_API + encodeURIComponent(feed.url));
                const data = await res.json();
                if (data.status === 'ok') data.items.slice(0, 3).forEach(item => { allItems.push({ source: feed.name, title: item.title, link: item.link }); });
            } catch (e) {}
        });
        await Promise.all(promises);
        if (allItems.length === 0) { contentDiv.innerHTML = '<div class="ticker-item">Welcome to Dublin Calling Radio</div>'; return; }
        allItems.sort(() => Math.random() - 0.5);
        let html = '';
        allItems.forEach(news => { html += `<div class="ticker-item"><a href="${news.link}" target="_blank"><span class="source-tag">${news.source}</span> ${news.title}</a></div>`; });
        contentDiv.innerHTML = html + html + html;
    }
    loadNews();

    // 9. DADOS DO AZURACAST E CLIMA
    async function updateStats() {
        const countEl = document.getElementById('listener-count');
        const historyEl = document.getElementById('history-container');
        const nextSongContainer = document.getElementById('next-song-container');
        const nextSongText = document.getElementById('next-song-text');
        
        if(CONFIG.api_url) {
            try {
                const res = await fetch(CONFIG.api_url);
                const data = await res.json();
                countEl.textContent = data.listeners.total;
                if(data.playing_next && data.playing_next.song) {
                    nextSongText.textContent = `${data.playing_next.song.artist} - ${data.playing_next.song.title}`;
                    nextSongContainer.style.display = 'block';
                } else { nextSongContainer.style.display = 'none'; }
                if(data.song_history && data.song_history.length > 0) {
                    let historyHTML = '';
                    data.song_history.slice(0, 3).forEach(sh => {
                        historyHTML += `<div class="history-item"><span class="history-icon">🎵</span> <span><b>${sh.song.artist}</b> - ${sh.song.title}</span></div>`;
                    });
                    historyEl.innerHTML = historyHTML;
                }
            } catch(e) { simulateData(countEl, historyEl); }
        } else { simulateData(countEl, historyEl); }
    }
    function simulateData(countEl, historyEl) {
        if(!countEl.textContent || countEl.textContent === '--') countEl.textContent = Math.floor(Math.random()*(150-50)+50);
        if(historyEl.innerText.includes('Loading')) historyEl.innerHTML = '<div class="history-item">🎵 Loading...</div>';
    }
    setInterval(updateStats, 15000);
    updateStats();

    async function getFullWeather(lat, lon) {
        try {
            let cityName = "Dublin";
            try {
                const cityRes = await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lon}&localityLanguage=en`);
                const cityData = await cityRes.json();
                cityName = cityData.city || cityData.locality || "Local";
            } catch (err) {}
            const weatherRes = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true&hourly=relativehumidity_2m&windspeed_unit=kmh`);
            const weatherData = await weatherRes.json();
            const current = weatherData.current_weather;
            const temp = Math.round(current.temperature);
            const wind = Math.round(current.windspeed);
            const hourIndex = new Date().getHours();
            const humidity = weatherData.hourly.relativehumidity_2m[hourIndex] || 60;
            const code = current.weathercode;
            let icon = "☁️";
            if(code <= 1) icon = "☀️"; else if(code >= 51) icon = "🌧️"; else if(code >= 95) icon = "⚡";
            document.getElementById('weather-text').textContent = `${cityName}: ${temp}°C ${icon}`;
            if(document.getElementById('side-wind')) document.getElementById('side-wind').textContent = `${wind} km/h`;
            if(document.getElementById('side-humid')) document.getElementById('side-humid').textContent = `${humidity}%`;
        } catch (e) { console.log(e); }
    }
    function initWeather() {
        if(navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(pos => getFullWeather(pos.coords.latitude, pos.coords.longitude), err => getFullWeather(53.3498, -6.2603));
        } else { getFullWeather(53.3498, -6.2603); }
    }
    initWeather();
    setInterval(initWeather, 300000);

    // 10. MENU FLUTUANTE DO CELULAR (Botão "+" que abre as opções)
    if (!document.getElementById('fab-container')) {
        const fabContainer = document.createElement('div');
        fabContainer.id = 'fab-container';
        
        const mainBtn = document.createElement('button');
        mainBtn.className = 'fab-main';
        mainBtn.innerHTML = '<i class="fa-solid fa-plus"></i>';
        
        const buttonsContainer = document.createElement('div');
        buttonsContainer.id = 'fab-buttons-container';

        mainBtn.onclick = function() {
            mainBtn.classList.toggle('active');
            buttonsContainer.classList.toggle('show');
        };

        window.mobileCopy = function(text, type) {
            navigator.clipboard.writeText(text).then(() => { 
                alert(`✅ ${type} COPIED!\n\n1. Open your Bank App.\n2. Paste in the payment area.`); 
                mainBtn.classList.remove('active');
                buttonsContainer.classList.remove('show');
            });
        };

        const btns = [
            { icon: ICONS.heart, action: 'sendReaction()', type: 'func', class: 'btn-heart' },
            { icon: ICONS.share, action: 'shareStation()', type: 'func', class: 'btn-share' },
            { icon: ICONS.whatsapp, link: CONFIG.whatsapp, type: 'link', class: 'btn-whatsapp-mobile' },
            { icon: ICONS.instagram, link: CONFIG.instagram, type: 'link', class: 'btn-instagram-mobile' },
            { icon: ICONS.pix, action: `mobileCopy('${CONFIG.pix_key}', 'PIX Key')`, type: 'func', class: 'btn-pix-mobile' },
            { icon: ICONS.revolut, action: `mobileCopy('https://revolut.me/${CONFIG.revolut_user}', 'Revolut Link')`, type: 'func', class: 'btn-rev-mobile' }
        ];

        btns.forEach(b => {
            const btn = document.createElement('button');
            btn.className = 'fab-btn';
            if(b.class) btn.classList.add(b.class);
            btn.innerHTML = b.icon;
            
            if(b.type === 'link') {
                btn.onclick = () => window.open(b.link, '_blank');
            } else {
                btn.setAttribute('onclick', b.action);
            }
            buttonsContainer.appendChild(btn);
        });

        fabContainer.appendChild(buttonsContainer);
        fabContainer.appendChild(mainBtn);
        document.body.appendChild(fabContainer);
    }
});