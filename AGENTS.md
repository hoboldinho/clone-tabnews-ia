# AGENTS.md

## Sobre o projeto

`clone-tabnews-ia` é uma implementação do [TabNews](https://www.tabnews.com.br) para o [curso.dev](https://curso.dev), construída com agentes de IA.

## Stack

- **Next.js 16.2.12** (fixado exatamente no `package.json` e no lockfile)
- **App Router** com JavaScript puro (sem TypeScript)
- **React 19**
- CSS global (`app/globals.css`), sem Tailwind ou bibliotecas de UI

## Estrutura

```text
app/
  layout.js      # layout raiz, metadata e <html lang="pt-BR">
  page.js        # página inicial com a lista de formas verbais
  globals.css    # estilos da página
package.json     # scripts e dependências
package-lock.json
.gitignore
README.md
```

## Comandos

```bash
npm install
npm run dev -- -p 8000   # desenvolvimento em http://localhost:8000
npm run build            # build de produção
npm start                # servir o build
```

## Convenções

- Manter o **mínimo de código possível**, seguindo as convenções modernas do Next.js (App Router, Server Components por padrão).
- Usar JavaScript puro; não adicionar TypeScript, Tailwind ou dependências sem necessidade.
- Conteúdo e textos em **português do Brasil**; o documento HTML usa `lang="pt-BR"`.
- A lista da página inicial deve permanecer centralizada, com fonte grande e em maiúsculo.
- Evitar `"use client"` enquanto não houver interatividade.
- Commits em português, na branch `main`.
