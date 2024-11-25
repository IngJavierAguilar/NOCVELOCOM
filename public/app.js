document.getElementById('controlForm').addEventListener('submit', async function (event) {
    event.preventDefault();

    const ip = document.getElementById('ip').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const comando = document.getElementById('comando').value;

    try {
        const response = await fetch('/control', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ ip, username, password, comando })
        });

        const data = await response.json();
        document.getElementById('resultado').innerText = data.respuesta || 'No se recibió respuesta';
    } catch (error) {
        console.error('Error en la conexión o en la solicitud:', error);
        document.getElementById('resultado').innerText = 'Error en la conexión o en la solicitud';
    }
});