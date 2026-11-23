import { useState } from 'react'
import './App.css'

function App() {
  const [livros, setLivros] = useState([])
  const [carregando, setCarregando] = useState(false)
  const [erro, setErro] = useState('')

  async function buscarLivros() {
    setCarregando(true)
    setErro('')
    setLivros([])

    try {
      const resposta = await fetch('/api/livros')

      if (!resposta.ok) {
        throw new Error('Resposta inválida da API: ' + resposta.status)
      }

      const dados = await resposta.json()
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

      {carregando && <p className="mensagem">Carregando livros...</p>}
      {erro && <p className="mensagem erro" role="alert">{erro}</p>}

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