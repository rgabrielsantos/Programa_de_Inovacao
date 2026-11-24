# Portfólio CONECTA_OSC

Página estática (HTML, CSS e um pouco de JavaScript, sem build) que apresenta o projeto final do Programa de Inovação e Tecnologia do CAEC.

- Portfólio: https://conecta-osc-portfolio.vercel.app
- Sistema no ar: https://conecta-osc.vercel.app
- Código do sistema: https://github.com/LunaLu31/projeto_osc

## Estrutura

```
portfolio/
├── index.html      página completa, com estilos e script no próprio arquivo
├── vercel.json     URLs limpas e cache dos arquivos de assets
└── assets/         telas (.webp), wireframe, vídeo de demonstração e poster
```

## Deploy no Vercel

Pela linha de comando, dentro desta pasta:

```bash
npx vercel@latest deploy --prod
```

Ou pelo painel, para publicar a cada push:

1. No Vercel, clique em Add New, Project e importe o repositório `rgabrielsantos/Programa_de_Inovacao`.
2. Em Root Directory, escolha `TCC/portfolio`.
3. Em Framework Preset, deixe `Other`. Build Command e Output Directory ficam vazios.
4. Clique em Deploy.

## Link do projeto no ar

No fim do `index.html`, a variável `PROJETO_URL` guarda o endereço do CONECTA_OSC em produção. Com ela preenchida, a página mostra o botão "Abrir o projeto funcionando" e o link ao lado do vídeo; vazia, os dois ficam ocultos.

## Rodar localmente

```bash
cd TCC/portfolio
python3 -m http.server 8000
```

Abra http://localhost:8000.
