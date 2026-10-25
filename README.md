# Studio Lizandro Costta — Personal Trainer & Nutricionista

Aplicação web premium e cinematográfica desenvolvida para **Lizandro Costta — Personal Trainer**, reproduzindo com máxima fidelidade visual a composição espacial de painéis sobrepostos da referência visual aprovada.

Construído com **React 19**, **TypeScript**, **Vite 6**, **Tailwind CSS v4**, **GSAP** (GreenSock Animation Platform) e **Lucide React**.

---

## 🎨 Arquitetura Visual e Composição

Ao contrário de uma landing page convencional linear, o projeto reproduz a **composição panorâmica e sobreposta de painéis**:

1. **Painel Central (Hero Stage):** 
   - Cabeçalho integrado com logotipo oficial, navegação e CTA `Comece Agora`.
   - Manchete de impacto: *"Transforme Seu Potencial"* em gradiente fogo.
   - Fotografia fitness com iluminação lateral de recorte.
   - Barra inferior com os 4 diferenciais: *Treinamento Personalizado, Acompanhamento Constante, Foco em Resultados, Evolução Sempre*.
   - Detalhe angular geométrico em laranja/vermelho.

2. **Painel Superior Esquerdo (Planos):**
   - 3 opções estruturadas: *Plano Essencial*, *Plano Performance* (destaque central com badge *Mais Popular* e borda iluminada) e *Plano Premium*.

3. **Painel Inferior Esquerdo (Treinos e Programas):**
   - Cards com fotografias cinematográficas e ícones esportivos: *Hipertrofia*, *Emagrecimento*, *Condicionamento*.

4. **Painel Superior Direito (Sobre Mim):**
   - Manchete *"Disciplina é o caminho"*, filosofia de treino e foto atlética emoldurada por faixas diagonais laranjas paralelas.

5. **Painel Inferior Direito (Depoimentos):**
   - 3 avaliações com aspas em laranja vibrante e classificação de 5 estrelas.

6. **Painel Base Esquerda (Vamos Conversar?):**
   - Chamada direta de agendamento com os canais oficiais (*WhatsApp*, *E-mail*, *Localização*) sobre fotografia de anilhas e barra de ferro.

7. **Painel Base Central (Identidade & Slogan):**
   - Logomarca em escala e o slogan oficial: *"Mais que treino, um estilo de vida."*

---

## ⚡ Animações com GSAP

O projeto utiliza **GSAP** com as melhores práticas recomendadas:
- `@gsap/react` com hook `useGSAP()` para limpeza e ciclo de vida automáticos sem vazamentos de memória.
- Timeline de entrada sequencial com interpolações suaves (`power3.out`).
- `gsap.matchMedia()` para alternar entre a exibição panorâmica em telas grandes (desktop) e a cascata fluida em tablets e celulares, além de respeitar a acessibilidade com `prefers-reduced-motion`.
- Microinterações de foco e elevação nos painéis e botões com reflexo luminoso deslizante (*sheen*).

---

## 🚀 Como Executar o Projeto

### Instalação
```bash
npm install
```

### Servidor de Desenvolvimento
```bash
npm run dev
```
Acesse em seu navegador: `http://localhost:5173/`

### Build de Produção
```bash
npm run build
```
Build compilado na pasta `dist/` com TypeScript estrito validado.

---

## 📁 Estrutura de Arquivos

```text
src/
├── assets/                  # Logotipo oficial e ativos
├── components/
│   ├── layout/              # Header global e MobileMenu
│   ├── panels/              # Painéis modulares da composição visual
│   │   ├── HeroStage.tsx
│   │   ├── PlansPanel.tsx
│   │   ├── ProgramsPanel.tsx
│   │   ├── AboutPanel.tsx
│   │   ├── TestimonialsPanel.tsx
│   │   ├── ContactPanel.tsx
│   │   └── BrandFooterPanel.tsx
│   ├── panoramic/           # Palco panorâmico com orquestração GSAP
│   │   └── PanoramicStage.tsx
│   └── ui/                  # Botões, badges e componentes atômicos
├── data/
│   └── content.ts           # Textos, planos e contatos centralizados
├── styles/                  # Tailwind v4, tokens CSS e animações
├── utils/
│   └── gsapConfig.ts        # Registro único e centralizado do GSAP
├── App.tsx
└── main.tsx
```
