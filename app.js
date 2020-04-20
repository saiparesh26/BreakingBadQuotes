const button = document.getElementById('btn');

const getQuotes = async(e) => {
    e.preventDefault();
    const number = document.getElementById('number').value;
    const response = await fetch(`https://breaking-bad-quotes.herokuapp.com/v1/quotes/${number}`);
    const data = await response.json();
    console.log(data);
    let output = '';
    data.forEach(quote => {
        output += `
            <li>
                <strong>Quote:</strong> ${quote.quote}
                <br>
                <strong>Author:</strong> ${quote.author}
            </li>
        `;
    });

    document.getElementById('getQuotes').innerHTML = output;
}

button.addEventListener('click',getQuotes);