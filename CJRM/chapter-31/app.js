console.info(
    `
    \n:::::   EXERCISES CHAPTER 31   :::::
    `
)

const section = num => {
    const sectionTitle = `\n:::::: Exercise ${num >= 0 && num < 10 ? `0${num}` : num} ::::::\n`
    return console.info(sectionTitle)
}

const result = result => {
    return console.log(' result >> ', result)
}

/*
  Neste exercício, vamos praticar um pouco do que vimos até aqui, através da 
  API do GIPHY, que é um website de GIFs (https://giphy.com/).

  - Seu desafio é implementar uma funcionalidade de busca dos GIFs. Quando o usuário digitar o termo de busca no input e pressionar enter, um GIF deve ser exibido na tela.
    Como neste exemplo: https://youtu.be/RHe-uCJGCeA
  - Observe que o GIF mais recente é inserido acima dos GIFs anteriores;
  - Para fazer requests para a API do GIPHY, você precisará de uma API key. 
    Para obtê-la, siga os seguintes passos:
    - Acesse https://developers.giphy.com/dashboard/ e faça o login;
    - No Dashboard, clique em "Create an App", clique em "API Selected" e em 
      "Next Step";
    - Dê um nome e descrição para o app e crie-o;
    - Clique no código da API key para copiá-la;
  - O submit do form deve ser feito para o endpoint abaixo.
    Atente-se para os 2 [PLACEHOLDERS] que devem ser substituídos:
    - https://api.giphy.com/v1/gifs/search?api_key=[SUA_CHAVE_DA_API_AQUI]&limit=1&q=[VALOR_INSERIDO_NO_INPUT]
    - Se quiser testar outras possibilidades, os endpoints da API estão 
      listados na documentação: https://developers.giphy.com/docs/api/endpoint#search
  - Ignore os avisos no console. Para limpá-lo, pressione "ctrl + L".
*/

const form = document.querySelector('form')
const GIFContainer = document.querySelector('.out')

const apiKey = `o9MI320xnGJrYOFseN70WD06POwzNGMb`

const getGIPHYApiUrl = GIFName => `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&limit=1&q=${GIFName}`

const insertImageIntoDOM = (url, title) => {
  const image = document.createElement('img')
  
  image.setAttribute('src', url)
  image.setAttribute('title', title)
  GIFContainer.prepend(image)

}
const fetchGIFImage = async inputValue => {
  const endpoint = getGIPHYApiUrl(inputValue)

  try {
      const response = await fetch(endpoint)
      const GIFData = await response.json()
      
      if (GIFData) {
        const { data } = GIFData
        const { title } = data[0]
        const { url } = data[0].images.downsized

        insertImageIntoDOM(url, title)
      }

      if(!response.ok) {
          throw new Error("Não foi possível obter os dados")
      }
  } catch (error) {
      alert(`${error.message},\nConsulte o log para mais informações`)
  }

  form.reset()
}

form.addEventListener('submit', event => {
    event.preventDefault()
    const inputValue = event.target.search.value.trim().toLowerCase()

    fetchGIFImage(inputValue)

})