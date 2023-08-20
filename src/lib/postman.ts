type Method = "POST" | "GET" | "PUT" | "DELETE" | "PATCH" | "OPTIONS" | "HEAD" | "CONNECT" | "TRACE"

async function post(url:string, method:Method, data:object){
    
    const response = await fetch(url, {
        method: method,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
    })

    if (!response.ok) {
        throw new Error(response.statusText)
    }
    return response
}

export default post