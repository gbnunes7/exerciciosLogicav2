function domainName(url){
    const match = url.match(/^(?:https?:\/\/)?(?:www\.)?([^\/]+)/)
    if(match) {
        return match[1].split(".")[0]
    }
  }

  console.log(domainName("http://google.com"))