document.addEventListener('DOMContentLoaded', function() {
    // Formulário de contato
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Aqui você pode adicionar o código para enviar o formulário
            // Pode ser via fetch para um backend ou um serviço como Formspree
            
            // Exemplo simples apenas para demonstração
            const formData = new FormData(contactForm);
            const formObject = {};
            
            formData.forEach((value, key) => {
                formObject[key] = value;
            });
            
            console.log('Formulário enviado:', formObject);
            
            // Mostrar mensagem de sucesso
            alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
            
            // Limpar formulário
            contactForm.reset();
            
            // Em um caso real, você enviaria os dados para o servidor
            // fetch('seu-endpoint', {
            //     method: 'POST',
            //     body: formData
            // })
            // .then(response => response.json())
            // .then(data => {
            //     alert('Mensagem enviada com sucesso!');
            //     contactForm.reset();
            // })
            // .catch(error => {
            //     console.error('Error:', error);
            //     alert('Ocorreu um erro ao enviar a mensagem.');
            // });
        });
    }
});