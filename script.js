// script.js
document.getElementById('emailForm').addEventListener('submit', async function(e) {
    e.preventDefault();
  
    const toEmail = document.getElementById('toEmail').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
  
    const statusMessage = document.getElementById('statusMessage');
    statusMessage.textContent = 'Enviando...';
  
    const mailjetApiKey = 'bbaca755385bbff79b8847769c5bd921'; // Chave da API pública (não recomendada diretamente aqui)
    const mailjetSecret = 'f5f14c723481695964e911d35581cab8'; // Este valor seria obtido em tempo de execução de forma segura
  
    const credentials = btoa(`${mailjetApiKey}:${mailjetSecret}`);
  
    try {
      const response = await fetch('https://api.mailjet.com/v3.1/send', {
        method: 'POST',
        headers: {
          'Authorization': `Basic ${credentials}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          Messages: [
            {
              From: {
                Email: "elizeubh2006@yahoo.com.br",
                Name: "Elizeu S. F."
              },
              To: [
                {
                  Email: toEmail,
                }
              ],
              Subject: subject,
              TextPart: message,
              HTMLPart: `<p>${message}</p>`
            }
          ]
        })
      });
  
      const result = await response.json();
      if (result.Messages[0].Status === 'success') {
        statusMessage.textContent = 'Email enviado com sucesso!';
      } else {
        statusMessage.textContent = 'Falha ao enviar o email.';
      }
    } catch (error) {
      console.error('Erro:', error);
      statusMessage.textContent = 'Erro ao enviar o email.';
    }
  });
  