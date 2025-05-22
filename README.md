# Montink Product Page

Projeto de uma página de produto desenvolvida como parte de um teste técnico, utilizando **React** e **Tailwind CSS**, com foco em funcionalidades reais de e-commerce.

Repositório: [github.com/lucasroncolato/montink-page](https://github.com/lucasroncolato/montink-page)

---

## 📄 Requisitos do Teste

* Desenvolver uma página de produto com:

  * Imagem principal (35% da tela)
  * Miniaturas clicáveis para trocar a imagem principal
  * Título e preço do produto
  * Seletores dinâmicos de **Tamanho** e **Cor** (com base em arrays)
  * Campo para digitar **CEP** e exibir o endereço completo consultando a API do [ViaCEP](https://viacep.com.br/)

## ⚖️ Tecnologias Utilizadas

* [React](https://reactjs.org/)
* [Vite](https://vitejs.dev/)
* [TypeScript](https://www.typescriptlang.org/)
* [Tailwind CSS](https://tailwindcss.com/)
* [Axios](https://axios-http.com/) para requisições HTTP
* [SASS/SCSS Modules](https://sass-lang.com/) para estilização modular

## ⚙️ Funcionalidades Implementadas

### 🖼️ Galeria de Imagens

* Imagem principal responsiva
* Miniaturas clicáveis com seleção visual
* Modal de galeria full-screen

### 📅 Seletores Dinâmicos

* Variantes de tamanho e cor carregadas dinamicamente
* Comportamento responsivo e visualmente claro

### 📦 Consulta de CEP

* Input com máscara de CEP (00000-000)
* Consulta à API do ViaCEP
* Exibição de logradouro, bairro, cidade e estado
* Mensagens de erro e toast de sucesso

### ⏱️ Persistência por 15 Minutos

* CEP e variáveis armazenadas no localStorage
* Validação de expiração via timestamp

## ⚡ Inspiração Visual

A interface foi baseada em boas práticas observadas em plataformas como:

* Mercado Livre
* Shopee
* Amazon

## ⚠ Observações Importantes

* O layout é responsivo e modular, pensado para ser facilmente reaproveitado em outros projetos
* Todos os componentes foram estruturados com separação clara de responsabilidades

## 🚀 Como rodar o projeto

```bash
# Clone o repositório
git clone https://github.com/lucasroncolato/montink-page
cd montink-page

# Instale as dependências
npm install

# Rode o projeto
npm run dev
```

## ✅ Melhorias Futuras

* Integração com carrinho de compras real
* Pagamento e checkout simulados
* Suporte à internacionalização (i18n)
* Testes unitários com Vitest + Testing Library

---

Feito com ❤️ para demonstrar competência técnica e atenção aos detalhes.
