# Pedidos disponíveis — marketplace de serviços

Ecrã onde um profissional consulta pedidos de reparação, filtra por cidade e aceita o trabalho que lhe interessa.

## Como correr

```bash
npm install
npm run dev
```

Abre o endereço indicado no terminal (normalmente `http://localhost:5173`).

Outros comandos:

```bash
npm run build    # verifica TypeScript e gera a versão de produção
npm run preview  # serve a build localmente
```

## O que faria a seguir

Se tivesse mais tempo, ligava a lista a uma API real (em vez dos dados em `src/data/jobs.ts`), persistia os pedidos aceites para não voltarem a aparecer ao recarregar a página, e acrescentava confirmação antes de aceitar um pedido urgente.

## Stack

React, TypeScript, Vite e CSS puro. Sem servidor nem base de dados — os dados estão no código, como pedido no exercício.
