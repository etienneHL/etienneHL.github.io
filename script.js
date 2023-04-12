 let tryCount = 20
 
 function redirect() {
    if (tryCount <= 0) return

    const url = "https://blog-7hp5u76fha-uc.a.run.app/"
    fetch(url, {cache: "no-cache", mode: "no-cors"}).then(res => {
        console.log(res, "res")
        if (res.status != 404)
        {
            window.location = url
        }
    })

    tryCount--;
}

redirect()

setInterval(redirect, 5000)
