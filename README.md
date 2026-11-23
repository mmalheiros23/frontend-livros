# Catálogo de Livros (React + Vite)

## Objetivo
Interface em React que consulta a API de Livros (Flask) quando o usuário clica em **Buscar Livros** e exibe os três livros retornados.

## Pré-requisito
A API Flask (`api-livros-flask`) precisa estar em execução em `http://127.0.0.1:5000`.

## Como instalar

npm install
Remove-Item -Recurse -Force .git

## Como executar
Terminal 1 (API Flask, dentro de `api-livros-flask`, com o venv ativo):
```bash
python app.py
```
Terminal 2 (React, dentro de `frontend-livros`):
```bash
npm run dev
```
Abra o endereço que o Vite mostrar (normalmente `http://localhost:5173`).

## Como funciona
- `src/App.jsx`: componente com título, botão, estado (`useState`), `fetch()` e `map()`.
- `vite.config.js`: proxy que encaminha `/api/livros` para `http://127.0.0.1:5000/livros`, evitando bloqueio de CORS.
