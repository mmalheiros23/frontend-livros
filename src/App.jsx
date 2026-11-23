import { useState } from 'react'
import './App.css'

function App() {
  // Estado: livros recebidos da API, mensagem de carregamento e mensagem de erro.
  const [livros, setLivros] = useState([])
  const [carregando, setCarregando] = useState(false)
  const [erro, setErro] = useState('')

  // Executada SOMENTE quando o usuário clica no botão (evento onClick).
  async function buscarLivros() {
    setCarregando(true)
    setErro('')
    setLivros([])

    try {
      // 1. Requisição GET para a API Flask (via proxy do Vite).
      const resposta = await fetch('/api/livros')

      // 2. Verifica se a resposta HTTP foi bem-sucedida (status 200 a 299).
      if (!resposta.ok) {
        throw new Error('Resposta inválida da API: ' + resposta.status)
      }

      // 3. Converte o corpo da resposta de texto JSON para objeto JavaScript.
      const dados = await resposta.json()

      // 4. Guarda os livros no estado; o React redesenha a tela sozinho.
      setLivros(dados.livros)
    } catch (e) {
      setErro('Não foi possível buscar os livros. Verifique se a API está em execução.')
    } finally {
      setCarregando(false)
    }
  }

  return (
    <main className="pagina">
      <h1>Catálogo de Livros</h1>

      <button onClick={buscarLivros} disabled={carregando}>
        Buscar Livros
      </button>

      {/* Área de mensagens */}
      {carregando && <p className="mensagem">Carregando livros...</p>}
      {erro && <p className="mensagem erro" role="alert">{erro}</p>}

      {/* Área de exibição dos livros: map() percorre a lista e cria um bloco por livro */}
      <section className="lista">
        {livros.map((livro) => (
          <article className="livro" key={livro.id}>
            <p><strong>ID:</strong> {livro.id}</p>
            <p><strong>Título:</strong> {livro.titulo}</p>
            <p><strong>Autor:</strong> {livro.autor}</p>
            <p><strong>Ano:</strong> {livro.ano}</p>
          </article>
        ))}
      </section>
    </main>
  )
}

export default App
