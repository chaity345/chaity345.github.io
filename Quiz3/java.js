alert('Good Evening! John Doe');

function showSummary(){
    document.querySelector('h1').style.color='coffee'

    document.querySelector('h1').textContent='The result is'+ String(document.querySelector('input').value);
} 