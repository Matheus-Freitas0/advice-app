# Advice-App

O **Advice-App** é uma aplicação simples em React, criada com Vite, que gera conselhos aleatórios usando a [API Advice Slip](https://api.adviceslip.com/). A aplicação também possui um modo escuro que pode ser alternado pelo usuário.

## Funcionalidades

-   **Gerar Novo Conselho**: A aplicação exibe um conselho aleatório e permite gerar um novo ao clicar no botão "Gerar Novo Conselho".
-   **Modo Escuro**: O usuário pode alternar entre modo claro e escuro usando o botão "Modo Claro" ou "Modo Escuro".

## Tecnologias Utilizadas

-   **React**: Biblioteca JavaScript para construção da interface de usuário.
-   **Vite**: Ferramenta de build extremamente rápida e moderna para projetos React.
-   **Tailwind CSS**: Framework CSS utilitário para estilização.
-   **Advice Slip API**: API usada para buscar conselhos aleatórios.

## Como Executar o Projeto

### Pré-requisitos

-   Node.js instalado em sua máquina.

### Passo a Passo

1.  **Clone o repositório:**

    `git clone https://github.com/Matheus-Freitas0/advice-app.git` 
    
2.  **Acesse o diretório do projeto:**

    `cd advice-app` 
    
3.  **Instale as dependências:**

    `npm install` 
    
4.  **Inicie a aplicação:**

    `npm run dev` 
    
5.  **Abra a aplicação em seu navegador:**
    
    Normalmente, a aplicação estará disponível em [http://localhost:5173](http://localhost:5173).
    

## Estrutura do Código

-   **`App.js`**: Componente principal da aplicação. Contém o estado e a lógica para buscar e exibir conselhos aleatórios. Também gerencia a alternância de modo escuro.
    
    -   **Estados:**
        
        -   `advice`: Armazena o conselho atual.
        -   `adviceId`: Armazena o ID do conselho atual.
        -   `animate`: Controla a animação de transição ao exibir um novo conselho.
        -   `darkMode`: Controla o tema da aplicação (modo claro ou escuro).
    -   **Funções:**
        
        -   `fetchAdvice`: Faz uma chamada à API para buscar um conselho aleatório e atualiza o estado da aplicação.
    -   **Hooks:**
        
        -   `useEffect`: Busca um conselho assim que a aplicação é carregada.

## Estilização

-   A aplicação utiliza **Tailwind CSS** para estilização, permitindo uma customização responsiva e eficiente.
    
-   **Transições e Animações**: A aplicação utiliza transições suaves ao alternar entre conselhos e ao mudar de modo claro para escuro.
    

## API Utilizada

A aplicação consome a [Advice Slip API](https://api.adviceslip.com/). Cada vez que o botão "Gerar Novo Conselho" é clicado, uma nova requisição é feita para a API para buscar um conselho aleatório.

## Melhorias Futuras

-   **Salvar Conselhos Favoritos**: Implementar funcionalidade para salvar e exibir conselhos favoritos.
-   **Compartilhar Conselhos**: Adicionar um botão para compartilhar o conselho em redes sociais.
-   **Personalizar o Estilo**: Adicionar mais opções de personalização de tema e layout.

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir um issue ou enviar um pull request.

## Licença

Este projeto está licenciado sob a licença MIT. 
