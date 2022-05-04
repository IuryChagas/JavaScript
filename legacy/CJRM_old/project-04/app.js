const form = document.querySelector('form')
const GIFSContainer = document.querySelector('div')

const APIKey = `tEt0n9T7FWAJhCmn1Ux9N7kQgf9kyoyS`

const getGIPHYApiUrl = GIFName => `https://api.giphy.com/v1/gifs/search?api_key=${APIKey}&q=${GIFName}&limit=1&offset=0&rating=g&lang=en`

const generateGIFImg = (downsizedGIFUrl, GIFData) => {
  const img = document.createElement('img')

  img.setAttribute('src', downsizedGIFUrl)
  img.setAttribute('title', GIFData.data[0].title)

  return img
}

const fetchGIF = async inputValue => {
  try {
    const GIPHYApiUrl =   getGIPHYApiUrl(inputValue)
    const response = await fetch(GIPHYApiUrl)

    if (!response.ok) {
      throw new Error('Não foi possível obter os dados')
    }

    return response.json()

  } catch (error) {
    console.error(`Erro: ${error.message}`)
  }
}

const insertGIFIntoDOM = async (inputValue) => {

  const GIFData = await fetchGIF(inputValue)

  if (GIFData) {
    const downsizedGIFUrl = GIFData.data[0].images.downsized.url
    const img = generateGIFImg(downsizedGIFUrl, GIFData)

    GIFSContainer.insertAdjacentElement('afterbegin', img)

    form.reset()
  }

}

form.addEventListener('submit', async event => {
  event.preventDefault()

  const inputValue = event.target.search.value
  insertGIFIntoDOM(inputValue)

})