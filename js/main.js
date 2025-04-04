document.addEventListener('DOMContentLoaded', function() {
    // Configuração específica para Pitchfork News
    const PITCHFORK_RSS = 'https://pitchfork.com/feed/feed-news/rss';
    const NEWS_LIMIT = 10; // Reduzi para 5 notícias simultâneas
    const SCROLL_DURATION = 120; // Aumentei de 40 para 120 segundos

    // Cria ticker estilizado
    function createNewsTicker() {
        const ticker = document.createElement('div');
        ticker.className = 'footer-news-ticker';
        ticker.innerHTML = `
            <div class="ticker-container">
                <div class="ticker-label">NEWS</div>
                <div class="ticker-content" id="news-ticker"></div>
            </div>
        `;
        document.body.appendChild(ticker);
        
        // Aplica a duração diretamente no estilo
        const tickerContent = document.getElementById('news-ticker');
        if (tickerContent) {
            tickerContent.style.animationDuration = `${SCROLL_DURATION}s`;
        }
    }

    // Processa o feed RSS da Pitchfork
    async function fetchPitchforkNews() {
        try {
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
                
                // Garante que o link vá para o domínio da Pitchfork
                const cleanLink = link.includes('pitchfork.com') ? link : `https://pitchfork.com${link}`;
                
                news.push({ 
                    title: title.replace(/^Pitchfork:\s*/i, ''), // Remove prefixo redundante
                    link: cleanLink,
                    duration: Math.max(20, title.length / 3) // Calcula duração baseada no tamanho do texto
                });
            });
            
            return news.length > 0 ? news : [{ 
                title: 'Loading Pitchfork news...', 
                link: 'https://pitchfork.com',
                duration: 30
            }];
        } catch (error) {
            console.error('Error fetching Pitchfork news:', error);
            return [{ 
                title: 'Visit Pitchfork for latest news', 
                link: 'https://pitchfork.com',
                duration: 30
            }];
        }
    }

    // Atualiza o ticker com os dados
    async function updateTicker() {
        const news = await fetchPitchforkNews();
        const ticker = document.getElementById('news-ticker');
        
        if (ticker) {
            ticker.innerHTML = '';
            
            // Calcula a duração total baseada no conteúdo
            let totalDuration = 0;
            news.forEach(item => {
                totalDuration += item.duration;
                
                const newsItem = document.createElement('span');
                newsItem.className = 'ticker-item';
                
                const link = document.createElement('a');
                link.href = item.link;
                link.target = '_blank';
                link.rel = 'noopener noreferrer';
                link.textContent = item.title;
                
                newsItem.appendChild(link);
                ticker.appendChild(newsItem);
                ticker.appendChild(document.createTextNode(' ••• '));
            });
            
            // Ajusta a velocidade conforme o conteúdo
            const calculatedDuration = Math.max(90, totalDuration * 1.5); // Mínimo de 90 segundos
            ticker.style.animationDuration = `${calculatedDuration}s`;
        }
    }

    // Inicialização
    function init() {
        createNewsTicker();
        updateTicker();
        setInterval(updateTicker, 3600000); // Atualiza a cada hora
    }

    setTimeout(init, 1500);
});