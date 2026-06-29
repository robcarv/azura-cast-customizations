# Histórico de Versões

## v4.0 - Jun 2026
### Adicionado
- Telegram Bot v2: mensagens interativas com inline keyboard
- Metadados do Last.fm (tags, playcount, bio do artista)
- Metadados do MusicBrainz (ano, país, link)
- Graceful degradation (sem API key = omite seções)
- Cache local (/tmp/azura_cache_v2.json) anti-duplicatas
- Preview da capa do álbum no Telegram
- Modo daemon (polling 10s) + one-shot (cron)

### Alterado
- Substitui o webhook básico + script antigo por uma única mensagem rica
- Formatação mais compacta e informativa
- Inline keyboard com botões: Listen Live, Request, Last.fm, MusicBrainz

## v3.0 - Jun 2026
### Adicionado
- Glassmorphism completo (blur, bordas sutis, cards translúcidos)
- Player centralizado com arte do álbum 180px
- PIX e Revolut com QR code dinâmico e alternância visual
- Ticker de notícias de música (Pitchfork, NME, Billboard)
- Equalizador animado (8 barras com delays)
- Clima por geolocalização (temperatura, vento, umidade)
- "Playing Next" no sidebar
- FAB flutuante mobile com 6 botões de ação
- Guia de doação em 3 passos com overlay
- Animações: gradiente, partículas de fundo, reações flutuantes
- Botão de troca de tema (4 temas)

### Alterado
- Refatoração completa do CSS para usar variáveis CSS
- Design system unificado (accent: #00d2d3, accent2: #ff6b6b)
- Sidebar reposicionada (centralizada verticalmente)
- Footer ticker com largura máxima e glassmorphism
- Melhor responsividade mobile

### Corrigido
- Compatibilidade com AzuraCast v0.23.1

## v2.0 - Abr 2025
### Adicionado
- Sistema modular de features
- Integração com API de clima
- Estrutura para futura integração com Twitter
- Novos estilos CSS para diferentes tipos de conteúdo

### Alterado
- Refatoração completa da estrutura do código
- Melhor tratamento de erros
- Sistema de configuração centralizado

## v1.0 - Abr 2025
- Versão inicial com ticker de notícias da Pitchfork
