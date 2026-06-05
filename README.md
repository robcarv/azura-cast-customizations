# AzuraCast Customizations

Customizações visuais e funcionais para a public page do AzuraCast.
Feito para a rádio **Dublin Calling** (rodando em Raspberry Pi 5 com Docker).

> **Repositório público**: [github.com/robcarv/azura-cast-customizations](https://github.com/robcarv/azura-cast-customizations)

---

## Funcionalidades

### v3.0 (Atual)
- **Glassmorphism**: Cards translúcidos com blur, backdrop-filter
- **Player centralizado**: Arte do álbum 180px, título em destaque, barra de progresso
- **Sidebar doações**: PIX e Revolut com QR code dinâmico, alternância visual
- **Ticker de notícias**: Música (Pitchfork, NME, Billboard) em scroll infinito
- **Equalizador animado**: 8 barras com delays e alturas variadas
- **Clima**: Geolocalizado (temperatura, vento, umidade)
- **Histórico**: Últimas músicas tocadas
- **Playing Next**: Próxima música na fila
- **FAB Mobile**: Botão flutuante com 6 ações (PIX, Revolut, WhatsApp, Instagram, Like, Share)
- **Guia de doação**: Overlay de 3 passos
- **Tema**: 4 temas selecionáveis
- **Reações**: Emojis flutuantes ao curtir

---

## Dependências

### Runtime (no AzuraCast)
- AzuraCast v0.23+ (PHP 8.4, MySQL, Icecast, Liquidsoap)
- Navegador moderno (Chrome/Firefox/Safari) com suporte a:
  - `backdrop-filter` (CSS)
  - `fetch` API
  - `Intl` API (geolocalização)

### API Externas (usadas pelo JS no browser)
- **Open-Meteo** (clima) — gratuita, sem chave
- **BigDataCloud** (reverse geocode) — gratuita
- **rss2json.com** (conversão RSS) — gratuita
- **QR Server** (geração QR code) — gratuita

---

## Como usar

### 1. Via Dashboard do AzuraCast

1. Acesse `http://seu-ip:80/admin/station/dublincalling/branding`
2. Em **Custom CSS for Public Pages**, cole o conteúdo de `css/main.css`
3. Em **Custom JavaScript for Public Pages**, cole o conteúdo de `js/main.js`
4. Salve
5. Veja o resultado em `/public/dublincalling`

### 2. Via MySQL (acesso direto ao banco)

```bash
# Conectar no container
docker exec -it azuracast php -r '
$pdo = new PDO("mysql:host=127.0.0.1;port=3306;dbname=azuracast", "azuracast", getenv("MYSQL_PASSWORD"));
$stmt = $pdo->query("SELECT branding_config FROM station WHERE short_name=\"dublincalling\"");
$config = json_decode($stmt->fetch()["branding_config"], true);

// Atualizar CSS
$config["public_custom_css"] = file_get_contents("/tmp/novo_css.css");

// Salvar
$update = $pdo->prepare("UPDATE station SET branding_config = ? WHERE short_name = \"dublincalling\"");
$update->execute([json_encode($config)]);
'
```

---

## Estrutura

```
azura-cast-customizations/
├── css/
│   ├── main.css      # Versão atual (v3)
│   ├── v2.css        # Versão anterior
│   └── v3.css        # Glassmorphism completo
├── js/
│   ├── main.js       # Versão atual (v3)
│   ├── v2.js         # JS anterior
│   └── v3.js         # JS completo atual
├── docs/
│   ├── INSTALL.md    # Instruções de instalação
│   └── MODULES.md    # Documentação dos módulos
├── index.html        # Página de teste standalone
├── versions.md       # Histórico de versões
└── README.md
```

---

## Versões

| Versão | Data | Descrição |
|--------|------|-----------|
| v3.0 | Jun 2026 | Glassmorphism, sidebar doações PIX/Revolut, ticker music news, clima, equalizador, FAB mobile |
| v2.0 | Abr 2025 | Sidebar com doações, clima, histórico, ticker de notícias, modo escuro |
| v1.0 | Abr 2025 | Ticker básico de notícias da Pitchfork |

Veja `versions.md` para detalhes completos.

---

## Personalização

### Configurações no JS (`js/main.js`)

No início do arquivo, ajuste o objeto `CONFIG`:

```javascript
const CONFIG = {
    api_url: 'https://dublincalling.duckdns.org/api/nowplaying/dublincalling',
    telegram_bot: 'https://t.me/SeuBot',
    pix_key: 'sua-chave-pix-aqui',
    revolut_user: 'seu-usuario',
    whatsapp: 'https://wa.me/SEUNUMERO',
    instagram: 'https://instagram.com/seuperfil',
    stationName: 'Nome da Sua Radio'
};
```

### Cores no CSS (`css/main.css`)

```css
:root {
    --accent: #00d2d3;     /* Cor principal (cyan) */
    --accent2: #ff6b6b;    /* Cor secundária (coral) */
    --dark: #0a0a12;       /* Fundo escuro */
    --glass: rgba(10, 10, 18, 0.88);  /* Glass effect */
    --border: rgba(255,255,255,0.08);  /* Bordas */
}
```

---

## GitHub

```bash
git remote -v
origin  git@github.com:robcarv/azura-cast-customizations.git (fetch)
origin  git@github.com:robcarv/azura-cast-customizations.git (push)
```
