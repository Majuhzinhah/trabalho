function classificarNota() {
    const nota = parseFloat(document.getElementById('nota').value);
    const resultado = document.getElementById('resultado');

    if (isNaN(nota) || nota < 1 || nota > 10) {
        resultado.textContent = 'Por favor, insira uma nota válida entre 1 e 10.';
        resultado.style.color = 'red';
    } else if (nota >= 6) {
        resultado.textContent = `Nota ${nota}: Aprovado!`;
        resultado.style.color = 'green';
    } else {
        resultado.textContent = `Nota ${nota}: Reprovado.`;
        resultado.style.color = 'red';
    }
}
