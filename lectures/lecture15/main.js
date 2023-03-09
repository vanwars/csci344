const makeSentences = n => {
    // clear it!
    document.querySelector('#output').innerHTML = '';
    const userMessage = document.querySelector('#user-message').value;

    document.querySelector('#output')
    for (let i = 0; i < n; i++) {
        document.querySelector('#output').insertAdjacentHTML('beforeend', 
            `<div class="item">
                <p id="p_${i+1}">${i + 1}. ${ userMessage }</p>
                <button onclick="replaceText('#p_${i+1}')">Replace text</button>
            </div>`
        )
    }
} 

const replaceText = (selector) => {
    const userMessage = document.querySelector('#user-message').value;
    const num = selector.split('_')[1];
    document.querySelector(selector).innerHTML = num + '. ' + userMessage;
}