async function redirection() {
        const url =  "https://blog-7hp5u76fha-uc.a.run.app/healthcheck"
        const response = await fetch(url, {
        method: "GET", 
        mode: "cors",   
        cache: "no-cache",
        headers: {"Content-Type": "application/json"}
    })

    const json = await response.json()
    console.log(json, "json")
    if (json.health)
    {
        window.location = "https://blog-7hp5u76fha-uc.a.run.app/"
    }
}

redirection()

setInterval(redirection, 5000)
