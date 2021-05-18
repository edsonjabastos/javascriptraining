export function createXMLHttpResquest(method, url, cb, data = null) {
    const xhr = new XMLHttpRequest()
    xhr.open(method, url)
    xhr.setRequestHeader("Content-Type", "applicaton/json;charset=UFT=8")
    xhr.send(data)
    xhr.onreadystatechange = checkAJAX
    function checkAJAX(){
        if (xhr.readyState === 4) {
            if (xhr.status < 400) {
                const json = JSON.parse(xhr.responseText)
                if(typeof cb === "function"){
                    cb(json)
                }
            } else if (typeof cb === "function"){
                cb({
                    error: true,
                    status: xhr.status,
                    message: "happen an error with server! ",
                })
            }
        }
    }
}