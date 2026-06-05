# AzuraCast Customizations

Customizações visuais e funcionais para a public page do AzuraCast.
Feito para a rádio **Dublin Calling** (rodando em Raspberry Pi 5).

## Como usar

1. Acesse o dashboard do AzuraCast: `/admin/station/{station}/branding`
2. Cole o CSS em **Custom CSS for Public Pages**
3. Cole o JS em **Custom JavaScript for Public Pages**
4. Salve e veja o resultado em `/public/{station}`

## Versões

| Versão | Data | Descrição |
|--------|------|-----------|
| v3.0 | Jun 2026 | Glassmorphism, sidebar com PIX/Revolut, ticker music news (Pitchfork/NME/Billboard), clima, equalizador, FAB mobile |
| v2.0 | Abr 2025 | Sidebar com doações, clima, histórico, ticker de notícias, modo escuro |
| v1.0 | Abr 2025 | Ticker básico de notícias da Pitchfork |

## Funcionalidades (v3.0)

- **Player**: arte do álbum grande (180px), título em destaque, barra de progresso
- **Sidebar**: PIX e Revolut com QR code dinâmico, clima (geolocalizado), histórico, "Playing Next"
- **Footer ticker**: Notícias de música (Pitchfork, NME, Billboard) em scroll infinito
- **Mobile**: FAB flutuante com 6 botões de ação (PIX, Revolut, WhatsApp, Instagram, Like, Compartilhar)
- **Animações**: Gradiente animado, equalizador, reações flutuantes, pulse no ON AIR
- **Doações**: Guia interativo de 3 passos, alternância PIX/Revolut, cópia com feedback

## Estrutura

```
css/
  main.css          - Versão standalone (v1)
  v2.css            - Sidebar + doações + ticker
  v3.css            - Glassmorphism completo (atual)
js/
  main.js           - Versão standalone (v1)
  v2.js             - Sidebar + clima + histórico
  v3.js             - Versão completa (atual)
docs/
  INSTALL.md        - Instruções de instalação
  MODULES.md        - Documentação dos módulos
```
