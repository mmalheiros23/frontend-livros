# Catálogo de Livros (React + Vite)

## Objetivo
Interface em React que consulta a API de Livros (Flask) quando o usuário clica em **Buscar Livros** e exibe os três livros retornados, com ID, título, autor e ano.

## Pré-requisito
A API Flask (repositório `api-livros-flask`) precisa estar em execução em `http://127.0.0.1:5000`.

## Como instalar
```bash
npm install
```

## Como executar
Terminal 1 (API Flask, dentro da pasta `api-livros-flask`, com o venv ativo):
```bash
python app.py
```

Terminal 2 (React, dentro da pasta `frontend-livros`):
```bash
npm run dev
```

Abra o endereço que o Vite mostrar no terminal (normalmente `http://localhost:5173`).

## Como funciona
- `src/App.jsx`: componente com título, botão, estado (`useState`), requisição com `fetch()` e exibição dos livros com `map()`. Mostra mensagem de carregamento e de erro.
- `vite.config.js`: proxy que encaminha `/api/livros` para `http://127.0.0.1:5000/livros`, evitando o bloqueio de CORS.