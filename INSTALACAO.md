# Guia de Instalação - Projeto ManyFlows

## ⚠️ Pré-requisitos Necessários

Este projeto precisa do **Node.js** e **npm** instalados para funcionar.

---

## 📦 Passo 1: Instalar Node.js (inclui npm)

### Opção A: Instalação via Site Oficial (Recomendado)

1. **Acesse o site oficial do Node.js:**
   - URL: https://nodejs.org/

2. **Baixe a versão LTS (Long Term Support):**
   - Clique no botão verde "LTS" (versão recomendada)
   - Isso baixará um arquivo `.msi` para Windows

3. **Execute o instalador:**
   - Abra o arquivo `.msi` baixado
   - Siga o assistente de instalação
   - ✅ Aceite os termos de licença
   - ✅ Mantenha as opções padrão (incluindo "Add to PATH")
   - ✅ Clique em "Install"

4. **Aguarde a instalação completar**

### Opção B: Instalação via Winget (Windows Package Manager)

Se você tem o Winget instalado, pode usar este comando no PowerShell:

```powershell
winget install OpenJS.NodeJS.LTS
```

### Opção C: Instalação via Chocolatey

Se você usa Chocolatey, execute:

```powershell
choco install nodejs-lts
```

---

## ✅ Passo 2: Verificar Instalação

**IMPORTANTE:** Após instalar o Node.js, você DEVE:
1. **Fechar completamente o VSCode**
2. **Reabrir o VSCode**
3. **Abrir um novo terminal**

Isso é necessário para que as variáveis de ambiente sejam atualizadas.

Depois, execute os seguintes comandos para verificar:

```bash
node --version
```
Deve mostrar algo como: `v20.x.x` ou `v22.x.x`

```bash
npm --version
```
Deve mostrar algo como: `10.x.x`

---

## 📚 Passo 3: Instalar Dependências do Projeto

Com o Node.js e npm instalados, execute:

```bash
npm install
```

Este comando irá:
- Ler o arquivo `package.json`
- Baixar e instalar todas as dependências necessárias
- Criar a pasta `node_modules` com todos os pacotes
- Pode levar alguns minutos dependendo da sua conexão

---

## 🚀 Passo 4: Executar o Projeto

Após a instalação das dependências, você pode rodar o projeto com:

```bash
npm run dev
```

Isso irá:
- Iniciar o servidor de desenvolvimento Vite
- Abrir o projeto em `http://localhost:5173`
- Habilitar hot-reload (atualização automática ao salvar arquivos)

---

## 📋 Comandos Disponíveis

Após tudo instalado, você terá acesso a estes comandos:

| Comando | Descrição |
|---------|-----------|
| `npm run dev` | Inicia o servidor de desenvolvimento |
| `npm run build` | Cria a versão de produção otimizada |
| `npm run preview` | Visualiza a build de produção localmente |
| `npm run lint` | Verifica erros de código com ESLint |

---

## 🔧 Dependências que serão instaladas

### Dependências Principais:
- **React 19** - Biblioteca para construir interfaces
- **React Router DOM** - Navegação entre páginas
- **Chakra UI** - Biblioteca de componentes UI
- **Framer Motion** - Animações
- **Phosphor React & React Icons** - Ícones

### Dependências de Desenvolvimento:
- **Vite** - Build tool e dev server
- **TypeScript** - Tipagem estática
- **ESLint** - Linter para qualidade de código

---

## ❓ Problemas Comuns

### "node não é reconhecido como comando"
- ✅ Certifique-se de ter instalado o Node.js
- ✅ Reinicie o terminal/VSCode após a instalação
- ✅ Verifique se o Node.js foi adicionado ao PATH

### "npm install" falha
- ✅ Verifique sua conexão com a internet
- ✅ Tente executar como administrador
- ✅ Limpe o cache: `npm cache clean --force`

### Porta 5173 já está em uso
- ✅ Feche outros processos usando a porta
- ✅ O Vite automaticamente tentará outra porta

---

## 📞 Próximos Passos

Depois de seguir todos os passos acima:

1. ✅ Node.js e npm instalados
2. ✅ Dependências do projeto instaladas (`npm install`)
3. ✅ Projeto rodando (`npm run dev`)
4. 🎉 Acesse `http://localhost:5173` no navegador!

---

**Versão do Guia:** 1.0  
**Última Atualização:** 2024
