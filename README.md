
# 🏎️ Mulheres no Automobilismo - Frontend

## 📋 Sobre o Projeto

Um site interativo dedicado à visibilização da participação feminina no automobilismo, destacando as trajetórias de pilotos, engenheiras e jornalistas que fizeram história no esporte. Este projeto visa inspirar novas gerações através de perfis detalhados, categorias de automobilismo e entrevistas exclusivas.

## ✨ Funcionalidades

- 👩‍🔧 **Perfis Detalhados**: Pilotos, engenheiras e jornalistas
- 🏁 **Categorias**: Modalidades do automobilismo com presença feminina
- 🎤 **Entrevistas**: Conteúdo exclusivo com profissionais da área
- 📱 **Design Responsivo**: Interface moderna e acessível
- 🔍 **Sistema de Busca**: Filtros por categoria e profissão

## 🚀 Tecnologias

- **Frontend**: React/Next.js
- **Estilização**: CSS Modules / Styled Components
- **API**: Consumo de API RESTful própria
- **Deploy**: Vercel/Netlify

## 📦 Instalação

### Pré-requisitos
- Node.js (versão 16+)
- npm ou yarn
- API Backend em execução

### 1. Clone o repositório
```bash
git clone https://github.com/seu-usuario/mulheres-automobilismo-frontend.git
cd mulheres-automobilismo-frontend
```

### 2. Instale as dependências
```bash
npm install
# ou
yarn install
```

### 3. Configure as variáveis de ambiente

Crie um arquivo `.env.local` na raiz do projeto:

```env
# API Configuration
NEXT_PUBLIC_API_URL=http://localhost:3001/api

# Conexão no Back
DATABASE_HOST=localhost
DATABASE_PORT=Sua Porta
DATABASE_NAME= automobilsimo_db
DATABASE_USER=seu_usuario
DATABASE_PASSWORD=sua_senha

```

### 4. Inicie o servidor de desenvolvimento
```bash
npm run dev
# ou
yarn dev
```

Acesse [http://localhost:3000](http://localhost:3000) no seu navegador.


## 5. Estrutura do projeto

Abaixo está um resumo da estrutura principal do repositório para orientar contribuições e navegação rápida:

```
/
├─ public/                 # Imagens, ícones e mídia estática
│  ├─ icons/               # Favicon e ícones do projeto
│  └─ images/              # Imagens usadas pelo site (banners, logos, fotos)
│  └─ media/               # Vídeos e mídias grandes
├─ src/                    # Código fonte do frontend
│  ├─ app/                 # Páginas e rotas (Next.js App Router)
│  │  ├─ home/             # Página inicial
│  │  ├─ entrevistas/      # Páginas de entrevistas
│  │  ├─ profissionais/    # Listagem e detalhe de profissionais
│  │  └─ sobre-mim/        # Página sobre o projeto/autora
│  ├─ Components/          # Componentes reutilizáveis (cards, header, footer)
│  └─ middleware.js        # Middleware do Next.js (quando aplicável)
├─ package.json            # Scripts e dependências do projeto
├─ next.config.js / mjs    # Configurações do Next.js
└─ README.md               # Documentação (este arquivo)
```


## 🌟 Como Contribuir

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👥 Equipe

Desenvolvido com 💜 por Giovanna Caron.

---

*Inspirando uma nova geração de mulheres no automobilismo* 🏁
