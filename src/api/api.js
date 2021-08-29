export default async function apiCall({url,  body}){
    try {
        const requestOptions = {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body)
        }
        
        const response = await fetch(url, requestOptions);
        return response.json();

    } catch (error) {
        Promise.reject(error);
    }
}