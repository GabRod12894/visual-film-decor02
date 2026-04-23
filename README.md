# Visual Film Decor 🪟✨

Este é o site institucional da **Visual Film Decor**, uma empresa com mais de 30 anos de tradição (fundada em 1994) especializada em soluções de vidros, películas, redes de proteção e decoração. O site foi desenvolvido para atender clientes nas regiões de **Brasília/DF** e **Teresina/PI**.

## 🚀 Tecnologias Utilizadas

- **Framework:** [Next.js](https://nextjs.org/) (App Router)
- **Linguagem:** [TypeScript](https://www.typescript.org/)
- **Estilização:** [Tailwind CSS](https://tailwindcss.com/) utilizando o novo sistema de cores `oklch` para maior precisão visual.
- **Componentes UI:** Radix UI e Shadcn/UI (Dialogs, Cards, Badges).
- **Ícones:** Lucide React
- **Animações:** `tailwindcss-animate`

## 🛠️ Funcionalidades Principais

- **Páginas de Serviços Especializadas:**
  - **Redes de Proteção:** Foco em segurança para pets e crianças com detalhes técnicos de resistência.
  - **Vidros:** Exibição de soluções em box de banheiro, espelhos e guarda-corpos.
  - **Películas:** Informações sobre controle solar, privacidade e proteção UV.
- **Sistema de Orçamento Inteligente:** Integração com WhatsApp via componente customizado que permite ao usuário escolher a cidade de atendimento (Brasília ou Teresina).
- **Página Sobre:** Seção detalhando a história da família Rodrigues, desde a fundação por Valdimir até a gestão atual por Gabriel e Daniel.
- **Design Responsivo:** Adaptado para dispositivos móveis, tablets e desktops.
- **Feedback Visual:** Implementação de Toasts para notificações do sistema.

## 📂 Estrutura do Projeto

```text
├── app/               # Rotas e páginas (Sobre, Serviços, etc.)
├── components/        # Componentes reutilizáveis (UI, Navigation, Footer)
├── hooks/             # Hooks customizados (ex: use-toast)
├── public/            # Imagens e ativos estáticos
└── styles/            # Configurações globais de CSS e temas
```

## 🔧 Como Executar o Projeto Localmente

1. Clone o repositório:

   ```bash
   git clone https://github.com/GabRod12894/visual-film-decor.git
   ```

2. Instale as dependências:

   ```bash
   npm install
   # ou
   yarn install
   ```

3. Inicie o servidor de desenvolvimento:

   ```bash
   npm run dev
   ```

4. Acesse `http://localhost:3000` no seu navegador.

## 📄 Licença

Este projeto é de uso exclusivo da Visual Film Decor.

---

desenvolvido por Gabriel Rodrigues
