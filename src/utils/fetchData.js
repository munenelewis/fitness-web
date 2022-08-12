export const excericesOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '1b23eb5601msh459120fed6a849bp14e4e7jsnb76da7405484',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
  },
}

export const fetchData = async (url, options) => {
  const response = await fetch(url, options)
  const data = await response.json()

  return data
}
