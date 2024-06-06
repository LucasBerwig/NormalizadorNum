document.getElementById('phone-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const phoneInput = document.getElementById('phone').value;
    
    try {
        const normalizedPhone = normalizePhoneNumber(phoneInput);
        document.getElementById('result').textContent = `Número normalizado: ${normalizedPhone}`;
    } catch (error) {
        document.getElementById('result').textContent = `Erro: ${error.message}`;
        document.getElementById('result').style.color = 'red';
    }
});

function normalizePhoneNumber(phone) {
    let digits = phone.replace(/\D/g, '');

    if (digits.length !== 12) {
        throw new Error('Número de telefone deve ter exatamente 12 dígitos');
    }

    let formattedPhone = `(${digits.slice(0, 3)}) ${digits.slice(3, 8)}-${digits.slice(8)}`;
    
    return formattedPhone;
}
