document.addEventListener('DOMContentLoaded', function() {
    // Configurações principais
    const CONFIG = {
        SCROLL_DURATION: 120, // Duração base em segundos
        UPDATE_INTERVAL: 3600000, // 1 hora
        FEATURES: {
            news: true,
            weather: true,
            twitter: false // Exemplo - pode ativar depois
        }
    };

    // Inicialização
    function init() {
        createNewsTicker();
        loadFeatures();
        setInterval(loadFeatures, CONFIG.UPDATE_INTERVAL);
    }

    // Carrega todos os recursos ativos
    async function loadFeatures() {
        const ticker = document.getElementById('news-ticker');
        if (!ticker) return;

        ticker.innerHTML = '<span class="ticker-item">Loading information...</span>';
        
        let allContent = [];
        
        if (CONFIG.FEATURES.news) {
            const news = await fetchPitchforkNews();
            allContent = allContent.concat(news);
        }
        
        if (CONFIG.FEATURES.weather) {
            const weather = await fetchWeather();
            allContent = allContent.concat(weather);
        }
        
        updateTickerContent(allContent);
    }

    // Cria o ticker na página
    function createNewsTicker() {
        const ticker = document.createElement('div');
        ticker.className = 'footer-news-ticker';
        ticker.innerHTML = `
            <div class="ticker-container">
                <div class="ticker-label">INFO</div>
                <div class="ticker-content" id="news-ticker"></div>
            </div>
        `;
        document.body.appendChild(ticker);
    }

    // ===== MÓDULO DE NOTÍCIAS =====
    async function fetchPitchforkNews() {
        try {
            const PITCHFORK_RSS = 'https://pitchfork.com/feed/feed-news/rss';
            const NEWS_LIMIT = 10;
            
            const proxyUrl = 'https://api.allorigins.win/get?url=';
            const response = await fetch(`${proxyUrl}${encodeURIComponent(PITCHFORK_RSS)}`);
            const data = await response.json();
            
            const parser = new DOMParser();
            const xmlDoc = parser.parseFromString(data.contents, "text/xml");
            const items = xmlDoc.querySelectorAll('item');
            
            const news = [];
            items.forEach((item, index) => {
                if (index >= NEWS_LIMIT) return;
                
                const title = item.querySelector('title')?.textContent || 'Pitchfork News';
                const link = item.querySelector('link')?.textContent || 'https://pitchfork.com';
                const cleanLink = link.includes('pitchfork.com') ? link : `https://pitchfork.com${link}`;
                
                news.push({
                    type: 'news',
                    content: title.replace(/^Pitchfork:\s*/i, ''),
                    link: cleanLink,
                    duration: Math.max(20, title.length / 3)
                });
            });
            
            return news.length > 0 ? news : [{ 
                type: 'news',
                content: 'Loading Pitchfork news...', 
                link: 'https://pitchfork.com',
                duration: 30
            }];
        } catch (error) {
            console.error('Error fetching Pitchfork news:', error);
            return [{ 
                type: 'news',
                content: 'Visit Pitchfork for latest news', 
                link: 'https://pitchfork.com',
                duration: 30
            }];
        }
    }

    // ===== MÓDULO DE TEMPO (WEATHER) =====
    async function fetchWeather() {
        try {
            // Substitua pela sua cidade e chave da API (ex: OpenWeatherMap)
            const CITY = 'Sao Paulo';
            const API_KEY = 'sua_chave_api_aqui';
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${CITY}&units=metric&appid=${API_KEY}`);
            const data = await response.json();
            
            const temp = Math.round(data.main.temp);
            const description = data.weather[0].description;
            const iconCode = data.weather[0].icon;
            
            return [{
                type: 'weather',
                content: `${temp}°C - ${description}`,
                icon: `https://openweathermap.org/img/wn/${iconCode}.png`,
                duration: 20
            }];
            
        } catch (error) {
            console.error('Error fetching weather:', error);
            return [{
                type: 'weather',
                content: 'Weather data unavailable',
                duration: 15
            }];
        }
    }

    // ===== MÓDULO DE TWITTER (EXEMPLO) =====
    async function fetchTwitter() {
        // Implementação similar usando a API do Twitter
        // Requer configuração de autenticação
    }

    // Atualiza o conteúdo do ticker
    function updateTickerContent(items) {
        const ticker = document.getElementById('news-ticker');
        if (!ticker) return;
        
        ticker.innerHTML = '';
        let totalDuration = 0;
        
        items.forEach(item => {
            totalDuration += item.duration;
            
            const itemElement = document.createElement('span');
            itemElement.className = `ticker-item ${item.type}`;
            
            if (item.type === 'weather' && item.icon) {
                itemElement.innerHTML = `
                    <img src="${item.icon}" class="weather-icon" alt="Weather icon">
                    ${item.content}
                `;
            } else if (item.link) {
                const link = document.createElement('a');
                link.href = item.link;
                link.target = '_blank';
                link.rel = 'noopener noreferrer';
                link.textContent = item.content;
                itemElement.appendChild(link);
            } else {
                itemElement.textContent = item.content;
            }
            
            ticker.appendChild(itemElement);
            ticker.appendChild(document.createTextNode(' ••• '));
        });
        
        // Ajusta a velocidade conforme o conteúdo
        const calculatedDuration = Math.max(90, totalDuration * 1.5);
        ticker.style.animationDuration = `${calculatedDuration}s`;
    }

    // Inicia com pequeno atraso para evitar conflitos
    setTimeout(init, 1500);
});