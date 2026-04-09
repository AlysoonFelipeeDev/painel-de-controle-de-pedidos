# 📦 Painel de Controle de Pedidos

![Status](https://img.shields.io/badge/status-concluído-success)
![Testes](https://img.shields.io/badge/testes-9%20passando-brightgreen)
![Licença](https://img.shields.io/badge/licença-MIT-blue)

> Sistema de rastreamento e gerenciamento de pedidos com dashboard interativo, filtros dinâmicos e visualização detalhada de timeline de status.

**[🔗 Ver Projeto ao Vivo](https://painel-de-controle-de-pedidos.vercel.app/)**

---

## 🎯 Sobre o Projeto

O **Painel de Controle de Pedidos** é uma aplicação web desenvolvida para gerenciar e rastrear pedidos em tempo real. O projeto simula um sistema de logística com dashboard de métricas, filtros avançados e visualização detalhada do progresso de cada pedido.

Ideal para demonstrar habilidades em **React**, **Redux Toolkit**, **TanStack Query**, e **Testes** — tecnologias amplamente utilizadas no mercado.

---

## ✨ Funcionalidades

### Dashboard Principal
- ✅ **Métricas em tempo real**: Total de pedidos, pedidos de hoje e em trânsito
- ✅ **Filtros dinâmicos**: Por status, período (todos/7d/30d/90d) e busca por código/cliente
- ✅ **Tabela interativa**: Listagem de pedidos com navegação para detalhes
- ✅ **Responsivo**: Adaptado para mobile e desktop

### Página de Detalhes
- ✅ **Timeline visual**: Histórico completo de mudanças de status
- ✅ **Informações detalhadas**: Cliente, transportadora, datas e valores
- ✅ **Navegação fluida**: Botão voltar e UX otimizada

### Extras
- ✅ **Loading visual**: Spinner animado durante requisições
- ✅ **Tratamento de erros**: Estados de erro e pedido não encontrado
- ✅ **Testes automatizados**: Cobertura de componentes principais

---

## 🚀 Tecnologias

### Core
- **React 18** - Biblioteca para interfaces de usuário
- **TypeScript** - Tipagem estática
- **Vite** - Build tool moderna e rápida

### Gerenciamento de Estado
- **Redux Toolkit** - Estado global (filtros)
- **TanStack Query** - Gerenciamento de requisições e cache

### Estilização
- **Styled Components** - CSS-in-JS
- **React Spinners** - Loading animado

### Testes
- **Vitest** - Framework de testes
- **Testing Library** - Testes de componentes React
- **@testing-library/user-event** - Simulação de interações do usuário

### Outras
- **React Router DOM** - Navegação entre páginas
- **Axios** - Cliente HTTP
- **date-fns** - Formatação de datas

---

## 📸 Screenshots

### Dashboard Principal
<img width="1207" height="892" alt="image" src="https://github.com/user-attachments/assets/0022dbb3-dd5d-4eff-a9a5-1340e010e921" />


### Filtros Dinâmicos
<img width="1208" height="462" alt="image" src="https://github.com/user-attachments/assets/531ff87c-8397-4ffa-8488-96a7944aadd8" />


### Página de Detalhes
<img width="1265" height="673" alt="image" src="https://github.com/user-attachments/assets/c2de3950-61bc-4a55-b378-4544444cc1c1" />


### Testes Automatizados
<img width="608" height="712" alt="image" src="https://github.com/user-attachments/assets/8eb09faa-fc7a-43b8-99bc-3e75a882bea6" />

<img width="587" height="939" alt="image" src="https://github.com/user-attachments/assets/c1da8fac-9792-4992-a68b-5064e049de7f" />


---

## 🔧 Como Rodar Localmente

### Pré-requisitos
- **Node.js** 16+ 
- **npm** ou **yarn**

### Instalação

```bash
# Clone o repositório
git clone https://github.com/AlysoonFelipeeDev/painel-de-controle-de-pedidos.git

# Entre na pasta do projeto
cd painel-de-controle-de-pedidos

# Instale as dependências
npm install

# Rode o projeto em modo desenvolvimento
npm run dev
```

O projeto estará disponível em `http://localhost:5173`

---

## 🧪 Testes

### Rodar todos os testes

```bash
npm test
```

### Cobertura de Testes

- ✅ **DashboardMetrics** - 4 testes (renderização + cálculos)
- ✅ **DashboardFilters** - 5 testes (renderização + interações)

**Total: 9 testes passando**

---

## 🌐 Deploy

O projeto está em produção na **Vercel**:

**🔗 https://painel-de-controle-de-pedidos.vercel.app/**

### Como fazer deploy

1. Conecte o repositório à Vercel
2. Configure o build command: `npm run build`
3. Output directory: `dist`
4. Deploy automático a cada push na branch `main`

---

## 📂 Estrutura do Projeto

<img width="414" height="226" alt="image" src="https://github.com/user-attachments/assets/fc03c915-8591-4d37-8133-3ff52f1fa815" />


---

## 🎓 Aprendizados

Este projeto foi desenvolvido para consolidar conhecimentos em:

- ✅ Arquitetura de aplicações React escaláveis
- ✅ Gerenciamento de estado com Redux Toolkit
- ✅ Cache e sincronização de dados com TanStack Query
- ✅ Testes de componentes e interações do usuário
- ✅ TypeScript em projetos reais
- ✅ Deploy com Vercel

---

## 📝 Licença

Este projeto está sob a licença **MIT**. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

## 👨‍💻 Autor

**Alyson Felipe**

- GitHub: [@AlysoonFelipeeDev](https://github.com/AlysoonFelipeeDev)
- LinkedIn: [alysonozorio](https://www.linkedin.com/in/alysonozorio/)

---

⭐ **Se este projeto foi útil, deixe uma estrela!**
