const getQuote = () =>{
    fetch('https://api.kanye.rest/')
        .then(res => res.json())
        .then(data => displayQuote(data.quote));
}

const displayQuote = (quote) =>{
    document.getElementById('quote').innerText = `"${quote}"`;
}