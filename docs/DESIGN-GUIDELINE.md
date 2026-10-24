# Studio / 001 — direção de design e interação

Versão 1 · 23 de outubro de 2026 · identidade provisória

## 1. Objetivo

Criar um estúdio de websites para empresas de pintura residencial nos EUA. A experiência deve demonstrar cuidado, competência e familiaridade com o setor de serviços para casas. A promessa central é: **Your website should look as good as your work.** A IA é um possível meio de produção; não é a promessa principal desta versão.

O dono da empresa deve reconhecer a qualidade do próprio trabalho na forma como o estúdio apresenta websites. Evitar estética de SaaS, excesso de efeitos, jargão de marketing e promessas de leads sem evidência.

## 2. Referência e método

Referência principal: https://cresta-template.framer.website/

Pesquisa realizada no navegador em 23/10/2026: abertura, navegação por scroll, inspeção visual de hero, apresentação, serviços, processo, seção de seguros, depoimentos e FAQ; interação com pergunta do FAQ; leitura de propriedades computadas de fontes, cursor e posicionamento. Viewport observado: 1944 × 1244 CSS px. Capturas da ferramenta foram apresentadas durante a pesquisa.

Este documento distingue três tipos de informação:

- **Medido:** valor retornado pelo DOM/computed style.
- **Observado:** comportamento ou composição visível em capturas e interações.
- **Proposto:** tradução para a V1; não representa código ou configuração original do template.

Limitações: não houve profiling contínuo de frames, medição da curva de scroll, inspeção do projeto Framer ou teste da referência em dispositivo móvel. Portanto, durações, easing, valores responsivos e intensidade do parallax abaixo são especificações nossas. Não atribuir à referência bibliotecas ou parâmetros que não foram confirmados. A referência usava `scroll-behavior: auto` no HTML e no body; isso não exclui suavização por JavaScript. Não foi possível confirmar sua implementação interna de scroll.

## 3. O que faz o Cresta funcionar

### Estrutura visível

O grid participa da identidade. Linhas verticais finas atravessam o hero e reaparecem nos blocos claros. O alinhamento cria a sensação de projeto desenhado e construído. Pequenas cruzes aparecem como marcas de registro. A decoração tem relação com o setor, sem depender de ícones de ferramentas.

Na captura desktop, o conteúdo ocupa aproximadamente 1320 px e se organiza em quatro faixas de cerca de 330 px. A abertura começa na segunda coluna. Alguns títulos e listas usam as duas colunas centrais, enquanto notas laterais ocupam a primeira ou a última. Esses valores são estimados a partir da captura, não medidas exatas do container.

### Hierarquia

Abertura com fotografia de ambiente residencial, escurecida para receber texto branco. Títulos grandes, sem serifa, em caixa alta, com espaçamento entre letras apertado. Labels pequenos e monoespaçados distinguem navegação editorial de conteúdo. O corpo é curto e direto; os blocos têm muito espaço vertical.

### Materialidade

Retângulos, arestas firmes, poucas sombras. Fotografias fazem o trabalho expressivo. A cor verde é um acento pequeno, especialmente no cursor e em labels transitórios. O fundo claro é quase neutro; a página não depende de gradientes coloridos ou cartões arredondados.

### Movimento

Observamos labels em estados de caracteres embaralhados durante a navegação, títulos subdivididos em palavras, um pequeno ponto verde acompanhando a posição do mouse e componentes com texto de link preparado para rolar verticalmente. O texto dos links usa caracteres individuais e uma cópia visual deslocada uma altura de linha, confirmado em estilos presentes no DOM. O FAQ expande respostas, com sinal de mais mudando de estado. A referência permite mais de uma resposta aberta.

Também existem um carrossel de parceiros e depoimentos com navegação. Não foram incorporados à V1 porque ainda não há parceiros ou testemunhos reais para apresentar.

## 4. Valores confirmados na referência

| Elemento | Valor medido |
|---|---|
| Fundo do body | `rgb(244,244,244)` / `#f4f4f4` |
| Fonte de H1 e H2 | Geist |
| H1 no viewport observado | 94 px; line-height 94 px; letter-spacing −2,82 px |
| H2 no viewport observado | 64 px; line-height 70,4 px; letter-spacing −1,92 px |
| Texto introdutório do hero | Geist, 18 px, peso 500 |
| Títulos de serviços | Geist, 22 px, peso 500 |
| Label FAQ | Fragment Mono, 12 px, preto |
| Fontes presentes entre títulos, parágrafos e links | Geist, Inter Tight, Fragment Mono e fallback sans-serif |
| Cursor decorativo | 12 × 12 px; `rgb(181,209,115)` / `#b5d173`; borda arredondada; position fixed; pointer-events none |
| Cursor do body | `auto`; o ponto decorativo não comprova substituição do cursor nativo |
| Links observados | cursor pointer |
| Texto de navegação | Geist 14 px; altura de linha 16,8 px; caixa alta |
| Marcas de cruz | componentes brancos de 1 px com extensão de 15 px |
| Blocos laterais de serviços | position sticky; top 0 px |

## 5. Tradução para nosso estúdio

Preservar o vocabulário visual, construir a composição e o conteúdo para nossa oferta. Não reutilizar as fotos, logos, testemunhos, dados comerciais ou código do template. As fotos da V1 são imagens independentes de arquitetura, não trabalhos realizados pelo estúdio ou por clientes.

O símbolo de casa e o nome **Studio / 001** são placeholders de trabalho. Não constituem proposta final de naming. A marca Clubhouse permanece referência de atitude e síntese, sem reprodução do desenho.

Nossa diferenciação vem do redesign demonstrado, da linguagem específica para painting contractors e da promessa de valorizar um trabalho já bem feito. A página deve parecer mais um estúdio de design que entende ofícios do que uma empresa de pintura vendendo seus serviços.

## 6. Tokens da V1

| Token | Valor | Uso |
|---|---|---|
| Paper | `#f4f4f0` | Fundo com leve calor |
| Ink | `#20231f` | Texto principal |
| Muted | `#686c63` | Texto secundário em fundo claro |
| Grid light | `rgba(32,35,31,.022)` | Guias muito discretas no fundo claro |
| Lime | `#b5d173` | Cursor, CTA final e pequenos detalhes |
| Dark | `#252d27` | Contato e navegação móvel |
| Studio wash | `#e8ebdf` | Bloco editorial sobre o estúdio |
| Grid hero | `rgba(255,255,255,.04)` | Guias sutis sobre a fotografia do hero |
| Grid mobile | `rgba(32,35,31,.016)` | Guias ainda mais leves em telas estreitas |
| Container | Até 1320 px | Quatro colunas principais |
| Gutters | 48 / 32 / 24 / 20 px | Desktop amplo / intermediário / móvel / muito estreito |
| Padding de seção | 120 / 90 / 72 px | Desktop / tablet / mobile |
| Curva principal | `cubic-bezier(.22,1,.36,1)` | Desaceleração suave, sem bounce |

### Tipografia

Usar Geist para conteúdo e Fragment Mono para índices, labels e metadados. Fallbacks: Arial/sans-serif e monospace. No conceito Oak & Co., uma serifada editorial é usada intencionalmente para mostrar um sistema visual independente do estúdio.

- H1: 56–88 px em desktop normal; 94 px acima de 1700 px; cerca de 42–65 px no móvel. Caixa alta, peso 500, line-height 1.01, tracking −0.055em.
- H2: 40–64 px desktop; 37–52 px móvel; line-height 1.05.
- H3: 24–30 px; peso 450.
- Corpo: 16–18 px nas apresentações; 14–15 px nos detalhes.
- Monoespaçada: 10–12 px para rótulos; 9 px apenas para metadados de mockup e notas secundárias compactas.
- Campos editáveis: 16 px para evitar zoom inesperado no celular.

Se o conteúdo crescer, ajustar o layout antes de reduzir o tamanho da tipografia. Headline deve continuar compreensível sem efeitos.

## 7. Grid e linhas

O Cresta usa uma régua comum com quatro colunas iguais: duas linhas definem as margens do conteúdo e outras três indicam as divisões internas. Na captura de 1265 px, observei os limites em aproximadamente x=40 e x=1210, com guias em x=334, 626 e 918. A régua permanece alinhada ao passar do hero para as seções claras. Labels e títulos se posicionam em relação a ela; os elementos não ganham caixas decorativas próprias por causa da grade.

Na V1, as guias seguem a mesma largura máxima e os mesmos gutters do layout, mas sua função é orientar alinhamento sem competir com leitura. Usar linhas internas de 1 px a 2,2% no fundo claro, 4% em branco sobre a fotografia do hero e 1,6% em telas estreitas. Não desenhar bordas verticais externas que emoldurem cada seção.

**A tipografia tem prioridade sobre a grade.** Uma linha não deve atravessar visualmente letras ou parágrafos. Em áreas de texto denso — como etapas do processo, lista de FAQ e coluna editorial do estúdio — o fundo opaco do próprio bloco interrompe a guia, usando exatamente a cor da seção para que a proteção não pareça um cartão. Títulos de seção também recebem esse tratamento quando ocupam a coluna de conteúdo. Assim, as linhas continuam visíveis nos espaços livres e perto de imagens, mas cedem sob a cópia. Divisórias horizontais são independentes e discretas. Usar cruzes de 15 × 15 px só em pontos específicos.

Essa regra foi refinada depois de observar linhas verticais passando por trás de títulos e parágrafos na V1: mesmo com pouco contraste, o cruzamento fazia o texto parecer cortado. Se novos layouts criarem o mesmo conflito, proteger a leitura primeiro e atualizar esta especificação junto com a implementação.

## 8. Motion specification

Estes valores são decisões da V1, não medidas de tempo do Cresta.

| Interação | Especificação V1 | Razão |
|---|---|---|
| Entrada H1 | Máscara por linha, translateY 105% → 0; 1000 ms; stagger 100 ms | Presença sem salto brusco |
| Entrada de blocos | Opacidade 0 → 1 e Y 26 → 0 px; 800 ms | Revelação discreta durante leitura |
| Gatilho de blocos | IntersectionObserver, threshold .08, margem inferior −25 px; uma vez | Evitar replay constante |
| Labels | Revelação progressiva com letras transitórias; 480 ms; uma vez | Referência ao acabamento técnico |
| Links | Rolagem vertical por caractere; 450 ms; atraso 12 ms por letra | Resposta curta e tátil |
| Cursor | Ponto de 12 px, cor Lime; interpolação .22 por frame; offset 13 px | Pequena cauda de acompanhamento |
| Cursor sobre ações | 20 px, opacidade .55 | Sinal leve de interatividade |
| Foto do hero | Movimento de 12% do scroll, limitado a 90 px | Profundidade contida |
| Antes/depois | Troca explícita por botões; fade + Y 5 px; 450 ms | Controle do usuário e comparação clara |
| Accordion | Abertura nativa; resposta fade + Y 5 px, 350 ms | Sem sacrificar teclado e semântica |
| Sinal de mais | Rotação da haste vertical; 300 ms | Comunicar aberto/fechado |
| Scroll vertical e âncoras | Lenis 1.3.27, `lerp: .085`, `anchors: true`, `autoRaf: true` | Inércia curta, com âncoras suaves |

### Scroll e sensação de fluidez

Na V1, Lenis 1.3.27 está hospedado junto aos arquivos locais do Site, mantém o scroll nativo e acrescenta inércia suave à roda do mouse e às âncoras. Gestos de toque continuam no comportamento padrão do dispositivo. Manter `anchors: true` para navegação entre seções e `autoRaf: true` para sincronizar o movimento. O ajuste `.085` é deliberadamente suave, sem travar o deslocamento por um tempo fixo. A licença MIT da dependência está em `docs/LENIS-LICENSE.txt`.

Lenis respeita `prefers-reduced-motion` por padrão: quando o visitante pede movimento reduzido, a interpolação é desativada. A navegação sem JavaScript mantém `scroll-behavior: smooth` como fallback do navegador. Não afirmar que a V1 replica a física exata do Cresta: não foi possível medir sua inércia.

### Cursor

Manter o cursor nativo; o ponto é um complemento decorativo. Não capturar cliques e não mudar o alcance dos controles. Ativar apenas para pointer fine + hover. Desativar em touch e em reduced motion. O loop de animação para ao alcançar o alvo; não manter processamento em idle. Nunca tornar o ponto a única indicação de que um elemento é clicável.

### Acessibilidade do movimento

`prefers-reduced-motion: reduce` remove revelações, scramble, rolamento de letras, parallax e ponto seguidor. Conteúdo permanece legível e controles funcionais. Texto animado tem uma representação acessível estável; caracteres decorativos não devem ser lidos individualmente pelo leitor de tela. O site permanece legível sem JavaScript.

## 9. Estrutura aprovada e implementação

1. **Hero:** fala diretamente com empresas de pintura e conecta a qualidade do trabalho à apresentação no site. Copy atual: “You do good work. Your website should show it.” CTA para conversar e link para um redesign demonstrativo.
2. **Prova visual:** conceito Oak & Co. Painting com estados Before/After. Rótulo explícito de conceito; nunca tratar a demonstração como case real ou como prova de conversão.
3. **O que o site precisa fazer:** mostrar trabalhos concluídos, listar serviços e cidades atendidas, funcionar bem no telefone e facilitar o pedido de uma estimativa.
4. **Processo:** “Tell us about your business / We put the site together / Review it before launch.” Etapas expansíveis, descritas sem jargão de produção.
5. **Estúdio:** explicar por que um site deve mostrar o cuidado colocado em cada trabalho. Na ausência de bio/foto fornecida, não inventar história do fundador; usar texto provisório e símbolo provisório.
6. **FAQ:** custo, prazo, materiais necessários, endereço do site, propriedade após o lançamento e expectativa de novos trabalhos. Não inventar valores, prazo fixo ou resultados garantidos.
7. **Contato:** formulário curto. Nesta V1, somente prévia local da mensagem; o formulário informa com clareza que nada foi enviado nem armazenado.

Os labels numerados começam no primeiro bloco após a abertura, por isso há seis índices além do hero.

## 10. Copy e tom de voz

Escrever em inglês americano simples, direto e respeitoso. Falar com quem administra uma empresa de pintura, sem fazê-lo decifrar vocabulário de agência. Preferir frases curtas, verbos concretos e nomes de trabalhos que um pintor e um proprietário de casa reconheçam.

### Vocabulário do setor

Pesquisa de páginas de agências voltadas a painting contractors encontrou termos recorrentes e compreensíveis: **painting company / painting contractor**, **interior and exterior painting**, **cabinet refinishing**, **finished work**, **prep**, **service area**, **estimate** e **request an estimate**. Esses termos descrevem a atividade e o caminho comercial. Use “painting company” em frases conversacionais e “painting contractor” quando identificar a categoria. Nomeie apenas serviços que o negócio realmente oferece; os exemplos não são uma promessa de escopo para todo cliente.

Amostra consultada em 24/10/2026: [Painter Web Lab](https://painterweblab.com/en/), [PaintingPPC](https://paintingppc.com/services/painting-company-websites/) e [Wasatch Made](https://wasatchmade.com/painting/). A pesquisa serve para entender vocabulário do setor, não para adotar promessas de marketing, claims de desempenho ou o tom de venda dessas empresas.

Uma regra útil de copy: diga qual trabalho a empresa faz, mostre por que isso importa para o cliente da empresa e deixe claro o próximo passo. Exemplo: “Show your finished work. Explain your services. Make it easy to request an estimate.”

### O que evitar

- Jargão de agência ou tecnologia em copy voltada ao pintor: “conversion funnel”, “digital presence”, “lead-generation engine”, “omnichannel”, “AI-powered” e “high-converting”.
- Generalidades quando há uma palavra concreta disponível: preferir “finished rooms” ou “cabinet refinishing” a “solutions”; “ask for an estimate” a “convert”; “your website address” antes de “domain” quando a explicação precisa ser acessível.
- Ridicularizar o site atual ou presumir que o trabalho do pintor é ruim. Um site antigo não diminui a qualidade do serviço.
- Garantir ligações, estimativas ou novos trabalhos sem evidência. Uma boa apresentação ajuda o visitante a entender o negócio e entrar em contato; não controla tráfego, reputação, mercado ou contratação.

Não abrir com IA, revolução, automação ou transformação digital. Não usar “10x leads”, ranking garantido, depoimentos inventados ou números decorativos de clientes. Definir condições comerciais antes de acrescentar preço, planos, garantias ou prazo de entrega.

### Direção atual da copy

A copy da V1 deve soar como uma conversa clara sobre o website e o trabalho de pintura, não como uma promessa abstrata de branding. Exemplo de direção aprovada para o hero: **“You do good work. Your website should show it.”** Abaixo, explicar em linguagem simples o benefício concreto: apresentar trabalhos concluídos, esclarecer serviços e área atendida, e facilitar o pedido de uma estimativa. Revisar esta direção junto com o texto do site quando a oferta comercial for definida.

## 11. Fotografia

Usar casas, interiores, superfícies, luz natural e detalhes de acabamento. Composição precisa reservar respiro para texto. Overlay suficientemente escuro para leitura; não deixar o contraste depender de uma área específica da foto que muda no mobile.

V1: duas fotografias independentes servidas localmente, obtidas do CDN Unsplash. A casa moderna é uma direção provisória; pode ser substituída por residência suburbana americana com siding/trim para maior proximidade com o mercado. Não representa cliente, obra do estúdio ou localização nos EUA.

URLs dos assets:
- https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=85
- https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1400&q=85

Não foram confirmados nesta pesquisa os nomes dos fotógrafos ou as páginas originais das fotos; registrar essa procedência antes da campanha pública. Não atribuir autores por suposição. Google Fonts carrega Geist e Fragment Mono; imagens são locais.

## 12. Responsividade

- Acima de 1100 px: quatro faixas de grid, navegação horizontal, before/after com nota lateral, processo em duas colunas.
- Entre 761 e 1100 px: gutters 32 px; títulos e gaps reduzidos; manter composição sem comprimir textos.
- Até 760 px: menu expansível, hero sem recuo lateral, grid de duas faixas, prova visual e processo empilhados, contato em uma coluna, cursor decorativo desligado.
- Até 390 px: gutters 20 px, campos de nome/email empilhados, conteúdo do mockup simplificado.
- Não fazer scroll horizontal para caber conteúdo; não reduzir fontes essenciais ao tamanho de metadados.

## 13. Critérios de qualidade

- Headline não deve cobrir a navegação nem cortar palavras.
- Primeiro CTA e significado da oferta compreensíveis antes do scroll.
- Âncoras apontam para seções existentes; não usar links vazios.
- Before/After funciona com teclado e mouse e atualiza aria-pressed.
- Menu móvel informa aria-expanded e fecha com Escape ou seleção.
- Accordions usam controles semânticos e são operáveis por teclado.
- Formulário valida nome/email/empresa, não simula envio bem-sucedido e usa textContent ao apresentar entradas.
- Foco visível em controles, contraste coerente e texto alternativo em imagens.
- Fotos abaixo da dobra lazy-loaded; hero prioritário.
- Respeitar reduced motion e não exigir hover para revelar informação essencial.
- Não instalar analytics ou enviar dados de contato até definir a operação real.

## 14. Pendências para versão comercial

Nome e identidade finais; apresentação real do fundador; escopo e preço; política de manutenção e propriedade; canal para envio de formulários; aviso de privacidade final; domínio; portfólio próprio; seleção final de fotografia e atribuições. Remover `noindex` somente quando houver decisão de lançamento público.

## 15. Instrução para futuras implementações

Preserve a promessa, as sete seções, o grid de construção e o cuidado de movimento. Faça alterações a partir de `dist/index.html`, `dist/styles.css` e `dist/app.js`. Não transformar a página em um template genérico de cards arredondados. Trate efeitos como acabamento: o conteúdo, a clareza e o ritmo devem funcionar antes deles. Mantenha separados fatos observados na referência, escolhas deste projeto e afirmações que ainda precisam de aprovação comercial.

Este guideline é um documento vivo e deve acompanhar o desenvolvimento. Ao introduzir uma nova lógica visual, de interação, movimento, conteúdo ou layout, atualize aqui a decisão, seus valores relevantes e o motivo no mesmo trabalho. Corrija especificações antigas que ficarem contraditórias. Não registre cada detalhe incidental de código: preserve princípios reutilizáveis e sinalize o que ainda é proposta ou decisão pendente. As instruções permanentes para o agente estão em `AGENTS.md`.
