export function processFormSubmission(event) {
    event.preventDefault();

    const articleUrl = document.getElementById('article-link').value;

    if (articleUrl === '') {
        alert('Please provide a URL!');
        return;
    }

    fetch('http://localhost:8081/analyzeArticle', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url: articleUrl }),
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('result-polarity').innerText = `Polarity: ${data.polarity}`;
        document.getElementById('result-subjectivity').innerText = `Subjectivity: ${data.subjectivity}`;
        document.getElementById('result-snippet').innerText = `Snippet: ${data.text}`;
    })
    .catch(error => console.error('Error:', error));
}
