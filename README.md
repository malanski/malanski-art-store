# React + TypeScript + Vite


## Project structure  
  
Esta loja virtual é como uma sala de visitas para clientes que ainda não conhecem a loja principal situada na plataforma [Colab 55](https://www.colab55.com/@malanskiart/), exibindo uma seleção dos trabalhos que melhor representam todo nosso catálogo de produtos.  
  
Nesse aplicativo podemos separar e reorganizar os produtos em uma ordem diferente da loja principal na Colab 55, podendo assim dar destaque aos produtos que estão muito abaixo na lista geral. Da mesma forma, podemos criar agrupamentos e coleções especiais conectado produtos que foram criados em tempos diferentes.  
    
Moda
- Camisetas
- Full Prints
- Leggings
- Moletons
- Bonés
- Aventais
- Chinelos
- Broches  
  
Acessórios  
- Toalhas
- Almofadas
- Quadros
- Canecas
- Cadernos




This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
