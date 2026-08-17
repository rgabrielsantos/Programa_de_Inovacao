// Seleciona a tela onde os números vão aparecer
const display = document.querySelector('.display');

// Seleciona todos os botões da calculadora
const buttons = document.querySelectorAll('.btn');

// Variável para guardar a conta que está sendo digitada
let expression = '';

// Adiciona um evento de clique para cada botão
buttons.forEach(button => {
  button.addEventListener('click', () => {
    // Pega o texto do botão clicado (ex: '7', '+', 'C')
    const value = button.innerText;

    if (value === 'C') {
      // Se for o botão de limpar, zera tudo
      expression = '';
      display.innerText = '0';
      
    } else if (value === '=') {
      // Se for o botão de igual, calcula o resultado
      try {
        // A função eval() resolve a string matemática (ex: "7+3" vira 10)
        const result = eval(expression);
        
        // Se o resultado for muito longo ou não for um número válido
        if (result === Infinity || isNaN(result)) {
          display.innerText = 'Erro';
          expression = '';
        } else {
          display.innerText = result;
          expression = result.toString(); // Guarda o resultado para a próxima conta
        }
      } catch (error) {
        // Se a conta for inválida (ex: 5++5)
        display.innerText = 'Erro';
        expression = '';
      }
      
    } else {
      // Para números e operadores
      
      // Impede que o usuário comece com múltiplos zeros
      if (expression === '' && value === '0') return;
      
      // Adiciona o valor digitado à expressão
      expression += value;
      display.innerText = expression;
    }
  });
});