# Módulos do Ticker AzuraCast

## Configuração
Todos os módulos podem ser ativados/desativados no objeto `CONFIG.FEATURES` no arquivo `main.js`.

## Módulos Disponíveis

### 1. Notícias da Pitchfork
- **Função**: `fetchPitchforkNews()`
- **Ativação**: `CONFIG.FEATURES.news = true`
- **Dependências**: Nenhuma
- **Fallback**: Mensagem padrão quando não consegue carregar notícias

### 2. Informações Climáticas
- **Função**: `fetchWeather()`
- **Ativação**: `CONFIG.FEATURES.weather = true`
- **Dependências**:
  - Chave API do OpenWeatherMap
  - Configurar cidade em `const CITY = 'SuaCidade'`
- **Fallback**: Mensagem de dados indisponíveis

### 3. Twitter (Planejado)
- **Função**: `fetchTwitter()`
- **Ativação**: `CONFIG.FEATURES.twitter = false` (padrão desativado)
- **Dependências**: Configuração de API do Twitter