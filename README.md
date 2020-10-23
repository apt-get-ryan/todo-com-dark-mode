# Todo com dark mode
  Uma todo list com dark mode que salva suas anotações.

## Objetivos:
 - [x] Estrutura HTML
 - [ ] Estilização
 - [ ] Implementar troca de temas
 - [ ] Implementar botão de descida rápida
 - [x] Implementar adição de notas
 - [ ] Implementar edição de notas
 - [ ] Implementar exclusão de notas
 - [ ] Implementar pesquisa de notas
 - [ ] Implementar armazenamento das notas
 
 ### Considerações:
 - Contenteditable="true" é muito, muito útil.
 - Não consegui utilizar um placeholder no span com conteúdo editável, porém fui capaz de utilizar uma solução usando ::before que aparece apenas quando o elemento editável estiver vazio.
 - O uso de variáveis vai facilitar a troca de temas que será futuramente implementada.
 - Font Aweasome pode ser utilizado em pseudo-elementos ::before e ::after
 - O uso do innerHTML para incluir a nota não funcionou corretamente, porém o insertAdjacentElement funcionou perfeitamente
