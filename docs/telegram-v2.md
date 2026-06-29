# Telegram Bot v2 — Rich Interactive Notifications

Substitui o webhook básico do AzuraCast por mensagens enriquecidas com inline keyboard, metadados do Last.fm/MusicBrainz e dados dinâmicos de audiência.

## Funcionalidades

| Feature | Webhook antigo | Telegram Bot v2 |
|---------|---------------|-----------------|
| Mensagem | Texto puro | Markdown + inline keyboard |
| Capa do álbum | Não | Preview visível no Telegram |
| Botões interativos | Não | Listen Live, Request, Last.fm, MusicBrainz |
| Tags/gêneros | Só do AzuraCast | Last.fm tags + hashtags |
| Bio do artista | Não | Last.fm bio (até 280 chars) |
| Playcount/listeners | Não | Last.fm stats |
| Ano de lançamento | Só se no AzuraCast | MusicBrainz fallback |
| Listener count | Não | Ao vivo da API |
| Duplicatas | Sim (webhook + script) | Cache: 1 msg por música |
| Graceful degradation | N/A | Sem API key = omite seções |

## Requisitos

```bash
pip install requests python-dotenv
```

## Configuração (.env)

```bash
BOT_TOKEN=123456:ABC...     # Token do bot Telegram
CHAT_ID=123456789           # ID do chat/grupo
CHANNEL_ID=...              # Opcional: canal paralelo
LASTFM_API_KEY=abc123...    # Opcional: https://www.last.fm/api/account/create
```

## Comandos

```bash
python3 telegram_bot_v2.py --test       # Preview com dados fixos
python3 telegram_bot_v2.py --dry-run    # Busca API real, mostra no terminal
python3 telegram_bot_v2.py --once       # Envia 1x para o Telegram
python3 telegram_bot_v2.py --daemon     # Loop eterno (polling 10s)
python3 telegram_bot_v2.py --force      # Força envio (ignora cache)
```

## Formato da Mensagem

```
[​](album_art)           ← preview invisível
📻 DUBLIN CALLING 🇮🇪
▶  NOW PLAYING

🎵 Bloodclot
👤 Rancid
💿 Life Won't Wait

🏷 #punk #rock #ska
📊 1.2M plays · 85K listeners
━━━━━━━━━━━━━━━━━━━━━
📅 1998  ⏱ 2:45  🎸 Punk  📂 default  👂 3 listening

📖 Rancid is an American punk rock band formed in Berkeley, California in 1991...

⏭️  Next: IDLES — 1049 Gotho

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🔴 ▶ Listen Live
💬 Request a Song  ·  🌐 Last.fm  ·  📀 MusicBrainz
```

## Inline Keyboard

```
[🎧 Listen Live] [💬 Request]
[🌐 Last.fm]     [📀 MusicBrainz]
```

## Deploy (Pi501)

```bash
# Daemon manual
cd ~/azura-cast-customizations/scripts
nohup python3 telegram_bot_v2.py --daemon >> /tmp/azura-v2.log 2>&1 &

# Ou via cron (alternativa ao daemon)
* * * * * cd ~/azura-cast-customizations/scripts && python3 telegram_bot_v2.py --once
```

## Desabilitar Webhook Antigo

1. AzuraCast Dashboard → Station → Web Hooks
2. Editar webhook do Telegram
3. Desmarcar "Song Change" trigger
4. Salvar

## Troubleshooting

| Erro | Causa | Solução |
|------|-------|---------|
| `BOT_TOKEN não configurado` | .env sem BOT_TOKEN | Adicionar ao .env |
| `CHAT_ID não configurado` | .env sem CHAT_ID | Adicionar ao .env |
| Sem tags/bio | Sem LASTFM_API_KEY | Registrar em last.fm/api/account/create |
| Duplicatas | Webhook antigo ainda ativo | Desabilitar triggers no AzuraCast |
| `last_song` cache sujo | /tmp/azura_cache_v2.json corrompido | `rm /tmp/azura_cache_v2.json` |
