function getData(endpoint, query_IDs){
  const querySource_ID = endpoint + '?query=' + encodeURIComponent(query_IDs) + '&format=json'
  return d3.json(querySource_ID).then(function(data){
    return data.results.bindings
    // loadData2(data1)
  })
}

const endpoint = "https://opendata.rdw.nl/resource/ixf8-gtwq.json"
