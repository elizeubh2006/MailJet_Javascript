document.getElementById('emailForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const to = document.getElementById('to').value;
    const subject = document.getElementById('subject').value;
    const body = document.getElementById('body').value;
    
    const data = {
    Messages: [
    {
    From: {
    Email: "elizeubh2006@yahoo.com.br",
    Name: "Elizeu S. F."
    },
    To: [
    {
    Email: to,
    Name: "Destinatário"
    }
    ],
    Subject: subject,
    TextPart: body
    }
    ]
    };
    
    fetch('https://api.mailjet.com/v3.1/send', {
    method: 'POST',
    headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Basic ' + btoa('bbaca755385bbff79b8847769c5bd921:a7c46bd70bafe82ac3790e0e9a2c5709')
    },
    body: JSON.stringify(data)
    }) 
    .then(response => response.json())
    .then(data => {
    if (data.Messages[0].Status === 'success') {
    document.getElementById('response').innerText = 'Email enviado com sucesso!';
    } else {
    document.getElementById('response').innerText = 'Erro ao enviar email.';
    }
    })
    .catch(error => {
    document.getElementById('response').innerText = 'Erro ao enviar email.';
    console.error('Erro:', error);
    });
    });
    