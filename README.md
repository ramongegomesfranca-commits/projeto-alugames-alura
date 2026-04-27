# AluGames - Sistema de Aluguel 🎲

Este projeto faz parte de um desafio prático proposto pela plataforma Alura. Com a estrutura visual (HTML e CSS) já definida, meu objetivo foi **desenvolver toda a interatividade e as regras de negócio utilizando JavaScript**.

## O que foi desenvolvido em JS:
* **Manipulação avançada do DOM:** Uso de `getElementById` e `querySelector` para isolar elementos específicos (imagens e botões) dentro do card do jogo clicado.
* **Template Strings:** Utilização de crases e variáveis (`` `game-${id}` ``) para identificar dinamicamente qual jogo está sendo interagido na página.
* **Gestão de Classes (CSS):** Aplicação de `classList.contains`, `add` e `remove` para alternar visualmente a aparência do botão e da capa do jogo (ex: escurecer a imagem quando o jogo é alugado).
* **Regras de Negócio e Validação:** Implementação de uma trava lógica (`if/return`) que impede o usuário de alugar múltiplos jogos simultaneamente, emitindo um `alert` de aviso.
* **Alteração de Texto Dinâmica:** Atualização do `textContent` do botão entre "Alugar" e "Devolver" de acordo com o status atual.

## Tecnologias Utilizadas
* JavaScript (Lógica de programação e manipulação de interface)
* HTML e CSS (Base fornecida pelo desafio)
