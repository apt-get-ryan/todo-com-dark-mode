# Todo com dark mode
  Uma todo list com dark mode que salva suas anotações.

## Objetivos:
 - [x] Estrutura HTML
 - [x] Estilização
 - [x] Implementar troca de temas
 - [ ] Implementar botão de descida rápida
 - [x] Implementar adição de notas
 - [x] Implementar edição de notas
 - [ ] Implementar exclusão de notas
 - [ ] Implementar pesquisa de notas
 - [ ] Implementar armazenamento das notas
 
 ### Considerações:
 - Contenteditable="true" é muito, muito útil.
 - Não consegui utilizar um placeholder no span com conteúdo editável, porém fui capaz de utilizar uma solução usando ::before que aparece apenas quando o elemento editável estiver vazio.
 - O uso de variáveis vai facilitar a troca de temas que será futuramente implementada.
 - Font Aweasome pode ser utilizado em pseudo-elementos ::before e ::after
 - O uso do innerHTML para incluir a nota não funcionou corretamente, porém o insertAdjacentElement funcionou perfeitamente
- O innerHTML funcionou, porém apenas quando o "placeholder de nota" se encontrava fora do .notes-container, porém por uma futura convenção eu decidi utilizar o insertAdjacentElement
- Removido o botão de pesquisa da barra de procura
- Adicionado opção de troca de temas e uso do localStorage para armazenar a preferência
- tentei salvar a mudança de estado (feito/ a fazer) na nota usando .setAttribute, porém não consegui, resolvi o problema usando .removeattribute
- Adicionado funcionalidade de armazenar as notas