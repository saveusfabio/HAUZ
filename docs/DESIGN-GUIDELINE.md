# Studio / 001 — direção de design e interação

Versão 1 · 23 de outubro de 2026 · identidade provisória

## 1. Objetivo

Criar um estúdio de websites para empresas de pintura residencial nos EUA. A experiência deve demonstrar cuidado, competência e familiaridade com o setor de serviços para casas. A promessa central é: **Your website should look as good as your work.** A IA é um possível meio de produção; não é a promessa principal desta versão.

O dono da empresa deve reconhecer a qualidade do próprio trabalho na forma como o estúdio apresenta websites. Evitar estética de SaaS, excesso de efeitos, jargão de marketing e promessas de leads sem evidência.

## 2. Referência e método

Para o raciocínio específico de sites de home painters, consultar também [RESEARCH-HOME-PAINTER-WEBSITES.md](RESEARCH-HOME-PAINTER-WEBSITES.md). Esse documento separa fontes normativas, observações qualitativas de sites, propostas de avaliação e hipóteses a validar. Nenhuma alegação de conversão, conteúdo comercial ou credencial de um exemplo deve ser transferida para clientes sem verificação.

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

### Exploração de identidade — rodada inicial · 26/10/2026

**Referência fornecida pelo usuário:** Clubhouse. A preferência declarada é pelo traço irregular, quebrado e com aparência feita à mão, além da síntese de uma marca composta por símbolo e wordmark. O símbolo de casa e o elemento central pertencem à referência e não devem ser copiados. Esta é uma preferência observada, não uma identidade aprovada.

**Direção a explorar:** criar símbolos próprios relacionados à pintura residencial e à apresentação do trabalho — por exemplo, gesto de pincel, amostra/recorte de tinta ou moldura arquitetônica — em desenho manual controlado, simples o bastante para funcionar em tamanhos pequenos. Testar versões de uma cor e lockups símbolo + wordmark. Preservar legibilidade e evitar sugerir que o estúdio executa pintura. “Studio / 001” permanece nome de trabalho; conceitos não aprovam naming, cor ou marca final. A prancha inicial e os três caminhos estão em `docs/brand-concepts.html` e devem ser avaliados antes de incorporar qualquer opção ao website.

### Apresentação do trabalho: comparação antes → depois — orientação anterior, substituída em 03/11/2026

A seção “See what a better first impression looks like.” abre com um grid de duas colunas no desktop: título, identificação conceitual e CTA na coluna esquerda; um único frame de navegador rolável ocupa a coluna direita. O texto editorial mantém uma largura compacta e alinhada ao topo do mockup. Abaixo de 900 px, as colunas empilham, com a CTA junto ao texto e antes do mockup para permanecer fácil de encontrar.

A primeira vista mostra um website propositalmente fraco, com sinais visuais reconhecíveis de sites datados, sem ridicularizar empresas reais. A CTA “Transform this website” fica na coluna editorial, com Star Border, e alterna para o redesign pré-construído; ao transformar, oferece retorno ao original. Mostrá-la enquanto a composição da seção está visível e mantê-la acessível por teclado apenas nesse estado. As duas versões apresentam as mesmas partes de uma home painter — navegação, hero, apresentação, serviços, trabalhos, contato e rodapé — para que a diferença venha da organização, tipografia, fotografia e hierarquia. A referência escolhida foi P&D Painting, o maior score da planilha de prospects (81/100), com site atual no ar; usamos seu mix público de pintura interna/externa, murais, custom finishes e reparos para tornar o exemplo específico do ofício. A identidade é identificada como conceito independente, não encomendado nem trabalho de cliente. Fotos geradas são marcadas como conceituais, não como portfólio real. O mockup é uma página miniatura rolável dentro de uma moldura de navegador; a rolagem interna continua independente e pode passar à página principal ao atingir as extremidades. Revisar o equilíbrio das colunas e a leitura em larguras de 320–390 px.

A CTA usa o Star Border do React Bits: uma estrela com cauda na cor de accent percorre o contorno em 4 s; no hover, completa uma volta adicional. A cor de fundo dos botões principais da hero e de transformação acompanha o tom selecionado na paleta. Comparar as razões reais de contraste entre ink/branco e o fundo, escolhendo o maior contraste; no Porchlight, usar um terracota mais profundo no botão com texto branco (meta de 5,2:1), conservando o pigmento original na arte; a borda luminosa conserva contraste e o brilho acompanha o accent. Desativar o movimento contínuo quando `prefers-reduced-motion` estiver ativo. O mockup deve ocupar uma janela compacta para deixar espaço visível para continuar a página: no desktop, cerca de 62svh (máximo 620 px); no mobile, 54svh e 48svh até 380 px. O conteúdo continua rolável internamente, com navegação compacta, alvos de toque confortáveis e sem overflow horizontal. Em celulares estreitos (até 380 px), o título da seção usa 30–36 px, largura livre e quebra balanceada para evitar linhas com palavras isoladas.
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
| Grid hero | `rgba(32,35,31,.04)` | Guias de baixo contraste no fundo off-white do hero atual |
| Grid mobile | `rgba(32,35,31,.016)` | Guias ainda mais leves em telas estreitas |
| Container | Até 1320 px | Quatro colunas principais |
| Gutters | 48 / 32 / 24 / 20 px | Desktop amplo / intermediário / móvel / muito estreito |
| Padding de seção | 120 / 90 / 72 px | Desktop / tablet / mobile |
| Curva principal | `cubic-bezier(.22,1,.36,1)` | Desaceleração suave, sem bounce |

### Tipografia

Usar Geist para conteúdo e Fragment Mono para índices, labels e metadados. Fallbacks: Arial/sans-serif e monospace. No redesign conceitual de P&D Painting, usar sans-serif editorial e linguagem visual de empreiteiro residencial: preparação, siding, trim, ferramentas, exterior e cuidado com o local. Evitar linguagem/fotografia de design de interiores.

- H1: 56–88 px em desktop normal; 94 px acima de 1700 px; cerca de 42–65 px no móvel. Caixa alta é o padrão das seções; no hero atual, usar caixa de frase, peso 450 e espaçamento mais aberto.
- H2: 40–64 px desktop; 37–52 px móvel; line-height 1.05.
- H3: 24–30 px; peso 450.
- Corpo: 16–18 px nas apresentações; 14–15 px nos detalhes.
- Monoespaçada: 12 px como base para rótulos e metadados. Não reduzir para acomodar o conteúdo; conceitos de sites antigos podem ter copy menor apenas quando ela for cenográfica, secundária e continuar legível no mockup.
- Campos editáveis: 16 px para evitar zoom inesperado no celular.

Se o conteúdo crescer, ajustar o layout antes de reduzir o tamanho da tipografia. Headline deve continuar compreensível sem efeitos.

## 7. Grid e linhas

O Cresta usa uma régua comum com quatro colunas iguais: duas linhas definem as margens do conteúdo e outras três indicam as divisões internas. Na captura de 1265 px, observei os limites em aproximadamente x=40 e x=1210, com guias em x=334, 626 e 918. A régua permanece alinhada ao passar do hero para as seções claras. Labels e títulos se posicionam em relação a ela; os elementos não ganham caixas decorativas próprias por causa da grade.

Na V1, as guias seguem a mesma largura máxima e os mesmos gutters do layout, mas sua função é orientar alinhamento sem competir com leitura. Usar linhas internas de 1 px a 2,2% no fundo claro, 4% em tinta escura sobre o off-white no hero atual e 1,6% em telas estreitas. Não desenhar bordas verticais externas que emoldurem cada seção.

**A tipografia tem prioridade sobre a grade.** Uma linha não deve atravessar visualmente letras ou parágrafos. Em áreas de texto denso — como etapas do processo, lista de FAQ e coluna editorial do estúdio — o fundo opaco do próprio bloco interrompe a guia, usando exatamente a cor da seção para que a proteção não pareça um cartão. Títulos de seção também recebem esse tratamento quando ocupam a coluna de conteúdo. Assim, as linhas continuam visíveis nos espaços livres e perto de imagens, mas cedem sob a cópia. Divisórias horizontais são independentes e discretas. Usar cruzes de 15 × 15 px só em pontos específicos.

Essa regra foi refinada depois de observar linhas verticais passando por trás de títulos e parágrafos na V1: mesmo com pouco contraste, o cruzamento fazia o texto parecer cortado. Se novos layouts criarem o mesmo conflito, proteger a leitura primeiro e atualizar esta especificação junto com a implementação.

## 8. Motion specification

Estes valores são decisões da V1, não medidas de tempo do Cresta.

| Interação | Especificação V1 | Razão |
|---|---|---|
| Entrada H1 | Máscara por linha, translateY 105% → 0; 1000 ms; stagger 100 ms | Presença sem salto brusco |
| Entrada de blocos | Opacidade 0 → 1 e Y 26 → 0 px; 800 ms | Revelação discreta durante leitura; proposta V1, referência About mostra Y 40 px antes da entrada |
| Gatilho de blocos | IntersectionObserver, threshold .08, margem inferior −25 px; uma vez | Evitar replay constante |
| Labels | Revelação progressiva com letras transitórias; 480 ms; uma vez | Referência ao acabamento técnico |
| Links | Rolagem vertical por caractere; 450 ms; atraso 12 ms por letra | Resposta curta e tátil |
| Cursor | Ponto de 12 px, cor Lime; interpolação .22 por frame; offset 13 px | Pequena cauda de acompanhamento |
| Cursor sobre ações | 20 px, opacidade .55 | Sinal leve de interatividade |
| Métricas About no hover | Linha vertical Lime 2 px aparece e o texto avança 4 px; 220 ms; mouse/trackpad | Dá resposta tátil sem fazer números parecerem links |
| Fotos e ícones de benefícios | Imagem cresce 2,5% em 650 ms; bloco do ícone avança 4 × −3 px em 350 ms | Aumenta sensação de resposta sem mover o layout |
| Hover em FAQ e campos | Cor e borda mudam suavemente; cerca de 200 ms | Indica controles interativos; manter foco visível no teclado |
| Entrada do campo de tinta | Revelação horizontal suave; cerca de 850 ms; uma vez na primeira entrada | Introduz o motivo de cor sem cobrir a copy |
| Superfície de tinta | Onda lenta contínua; no hover, inclinação e deslocamento ligados à posição do pointer; seleção eleva o nível por 780 ms | Sensação tátil e resposta direta à escolha |
| Antes/depois | Refine Frame de 1,2 s, seguido de confirmação persistente e halo único de 1,4 s; troca imediata com movimento reduzido | Tornar a conclusão perceptível, com controle para voltar ao original |
| Accordion | Abertura nativa; resposta fade + Y 5 px, 350 ms | Sem sacrificar teclado e semântica |

### Ideia de vídeo para o hero / exploração futura

O hero deve comunicar trabalho manual bem feito e presença digital com uma cena simples, elegante e luminosa. Brief do clipe: 6–8 segundos, pintura exterior de uma casa americana de personalidade, luz dourada suave de fim de tarde, pintor profissional aplicando acabamento com cuidado; câmera com movimento discreto e estável. A ação termina com o pintor olhando o celular, e uma notificação gráfica de avaliação 5 estrelas entra na tela para conectar o serviço à reputação online.

A notificação é uma camada HTML/CSS sobre o vídeo, não texto gerado dentro da filmagem: assim as estrelas e as palavras permanecem nítidas. Usar um card branco compacto, cantos discretos e entrada por opacidade + deslocamento curto; sem pop-up explosivo. A avaliação é um elemento conceitual até haver um depoimento real autorizado. Não inventar nome, citação ou nota como prova social do estúdio ou de cliente.

Esta ideia de clipe foi explorada antes da direção editorial atual e não está implementada. A direção atual usa um fundo off-white e uma interação CSS de tinta no hero; não há fotografia nem vídeo nessa seção. Se o vídeo voltar a ser considerado, preservar o conceito de filmagem silenciosa e cuidadosa, inserir a avaliação como HTML/CSS, preferir poster para `prefers-reduced-motion` e assegurar que o arquivo não atrase o H1. Qualquer avaliação deve ser identificada como conceitual até haver um depoimento real autorizado.
| Sinal de mais | FAQ: 45° (mais vira ×); 300 ms | Comunicar aberto/fechado como na referência |
| Scroll vertical e âncoras | Lenis 1.3.27, `lerp: .085`, `anchors: true`, `autoRaf: true` | Inércia curta, com âncoras suaves |
| Entrada do texto About | Opacidade 0 → 1 e Y 40 → 0 px, uma vez ao entrar em vista; duração exata da referência não confirmada | Reproduz o deslocamento discreto observado sem prender a rolagem |
| Cor do texto About | Cada palavra muda de cinza para ink ao cruzar aproximadamente 78% da altura do viewport; transição de cor 300 ms ease | Replica a leitura que se revela com a rolagem, sem máscara ou corte |

### Scroll e sensação de fluidez

Na V1, Lenis 1.3.27 está hospedado junto aos arquivos locais do Site, mantém o scroll nativo e acrescenta inércia suave à roda do mouse e às âncoras. Gestos de toque continuam no comportamento padrão do dispositivo. Manter `anchors: true` para navegação entre seções e `autoRaf: true` para sincronizar o movimento. O ajuste `.085` é deliberadamente suave, sem travar o deslocamento por um tempo fixo. A licença MIT da dependência está em `docs/LENIS-LICENSE.txt`.

A aplicação cria Lenis somente para pointer fine com hover e quando movimento reduzido não está ativo e destrói a instância quando a preferência muda. No modo reduzido, a navegação CSS usa `scroll-behavior: auto`. A navegação sem JavaScript mantém o comportamento nativo, com suavização CSS somente quando permitida. Não afirmar que a V1 replica a física exata do Cresta: não foi possível medir sua inércia.

### Cursor

Manter o cursor nativo; o ponto é um complemento decorativo. Não capturar cliques e não mudar o alcance dos controles. Ativar apenas para pointer fine + hover. Desativar em touch e em reduced motion. O loop de animação para ao alcançar o alvo; não manter processamento em idle. Nunca tornar o ponto a única indicação de que um elemento é clicável.

### Acessibilidade do movimento

`prefers-reduced-motion: reduce` remove revelações, scramble, rolamento de letras, parallax e ponto seguidor. Conteúdo permanece legível e controles funcionais. Texto animado tem uma representação acessível estável; caracteres decorativos não devem ser lidos individualmente pelo leitor de tela. O site permanece legível sem JavaScript.

## 9. Estrutura aprovada e implementação

1. **Hero:** “Your website should look as good as your work.” Explica que o trabalho de pintura merece um website tão cuidadoso quanto ele, para que proprietários entendam o serviço e peçam um estimate. CTAs: “Let’s talk about your website” e “How it works”. Fundo off-white, copy à esquerda e círculo com textura abstrata de pigmento, cinco shapes distintos e refração por pointer seguem “Hero v14 — pinceladas orgânicas e seletor sempre visível”.
2. **Prova visual:** “See what a better first impression looks like.” Conceito P&D Painting com estados Before/After, inspirado no site público e identificado como não encomendado. O redesign mantém os serviços observados e troca o foco visual para o trabalho do pintor e a preparação da casa. Não tratar a demonstração como case de cliente nem como prova de conversão.
3. **O que o site precisa fazer:** “What homeowners need to see.” Mostrar os melhores trabalhos, explicar serviços, facilitar o pedido de estimate e manter uma boa apresentação em toda tela.
4. **Processo:** “You know your business. We’ll handle the website.” Etapas visíveis em um fluxo conectado: “Get to know you / Build and refine / Launch.”
5. **Estúdio:** “A real team behind your website.” Explicar a passagem de tecnologia para homebuilding e por que o estúdio quer tornar websites modernos mais acessíveis às empresas que constroem e cuidam das casas. A seção usa uma composição editorial inspirada no bloco About Us do Cresta. Números usados como demonstração devem estar explicitamente identificados como placeholders e nunca parecer prova real.
6. **FAQ:** “A few things you might be wondering.” Responde a dúvidas sobre custo, prazo, materiais necessários, domínio/propriedade do site e expectativa de novos trabalhos. Não inventar valores, prazo fixo ou resultados garantidos. Termina com CTA “Still have questions?” levando à seção de processo enquanto o contato direto ainda não foi definido.
7. **Chamada final:** “Get a website you’re proud to show.” Fecha o site com fotografia e leva à seção de processo. A V1 não inclui formulário de contato.

Os labels numerados começam no primeiro bloco após a abertura, por isso há seis índices além do hero.

### Seção How it works / processo

Nova referência: [Altura Workflow Animation, Saved.Design](https://saved.design/works/kevserctk-altura-workflow-animation). A descrição publicada apresenta um workflow visual de três etapas conectadas; o usuário destacou a organização, a distribuição e os pequenos quadrados nas extremidades. Na parte superior, seguir o arranjo da referência: label curto com quadrado escuro acima; título grande em caixa de frase à esquerda; tagline explicativa em cinza, alinhada à direita do título. Preservar o título aprovado “You know your business. We’ll handle the website.” e o apoio “A clear plan from the first conversation to launch.” Traduzir os demais princípios para o serviço do estúdio sem copiar elementos de produto/IA da referência: mostrar as três etapas com a copy atual, conectadas por uma linha fina com marcadores quadrados, incluindo terminais quadrados nas pontas. Usar três colunas abertas e alinhadas à esquerda; em cada uma, número e label curto compartilham a primeira linha, com título e explicação abaixo. Sem guias verticais de fundo, divisórias verticais entre colunas, cards preenchidos, imagem ou accordions. O visitante deve entender o processo de uma só olhada. No hover do primeiro passo, acender o primeiro nó; no segundo, os dois primeiros; no terceiro, os três e o terminal. A linha de progresso acompanha o nó ativo, voltando ao início ao sair do fluxo; o título ativo sobe alguns pixels. Os efeitos são decorativos, não indicam controles de clique, e não escondem informação. Respeitar `prefers-reduced-motion`. Até 760 px, empilhar o cabeçalho e converter o fluxo em uma coluna vertical com linha e nós quadrados na margem, mantendo todos os textos visíveis e sem scroll horizontal.

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

A copy deve soar como uma conversa clara sobre o website e o trabalho de pintura, não como uma promessa abstrata de branding. O wireframe original é a referência de linguagem mais aprovada pelo usuário: seus títulos são curtos, memoráveis e falam diretamente com o pintor. Reutilizar esse eixo nas próximas revisões, em especial: **“Your website should look as good as your work.”**, **“You know your business. We’ll handle the website.”** e **“Let’s give your work the website it deserves.”**

O wireframe aprovado está em `docs/studio-wireframe.html`, junto dos arquivos do projeto para consulta contínua. Manter seus títulos e sua simplicidade como referência editorial; ajustar a explicação abaixo de cada título para refletir a oferta real e evitar alegações não comprovadas. Falar de craftsmanship, confiança, trabalhos concluídos, serviços, cidades atendidas e pedido de estimate em palavras que um pintor reconheça. Inglês americano simples, verbos ativos e frases curtas. Evitar generalidades e linguagem de agência.

### Seção About Us / o estúdio

Referência observada em 24/10/2026: a section “Cresta Roofing has worked on homes across…” começa com um label pequeno, traz três métricas em linhas separadas, um bloco de confiança, uma apresentação editorial em texto grande e uma fotografia horizontal. No viewport estreito inspecionado nesta rodada (319 × 607 CSS px), a ordem se empilha: label, métricas, confiança, parágrafo e fotografia. A referência mantém fundo `#f4f4f4`, tipografia Geist e Fragment Mono, divisórias horizontais finas, imagens com arestas retas e pouco ornamento. A coluna esquerda e a apresentação alinham pelo topo no layout largo; os valores de desktop desta section ainda não foram conferidos visualmente nesta rodada.

Na V1, reaproveitar esse ritmo e hierarquia, não as afirmações da empresa de roofing. Trocar números por fatos de posicionamento do estúdio: origem em tecnologia, foco em homebuilding e objetivo de levar design moderno a esse mercado. O usuário pediu uma faixa provisória de prova social; seus números precisam ser validados antes de qualquer lançamento público. O texto atual é: “We come from tech. Now we’re bringing modern, thoughtful design to homebuilding—so painting companies can show their work clearly and make it easier for homeowners to get in touch.” Enquanto a foto real do time não estiver disponível, ocultar o quadro placeholder por completo para a seção acompanhar o conteúdo existente, sem reservar altura vazia. Quando a foto for adicionada, reexibir o quadro horizontal abaixo do texto.

O título atual é “A real team behind your website.” para representar um estúdio formado por mais de uma pessoa. Nesta adaptação, as colunas começam no mesmo topo; removemos a nota editorial que não existe na referência. Métricas usam duas linhas da mesma escala: valor preto e descrição cinza, Geist 15 px/19,5 px no mobile, peso 400 e tracking −0,3 px, observados no DOM. As divisórias são horizontais e claras. A prova de confiança conserva cinco estrelas verdes e “Trusted by 100+ clients”; o usuário pediu para retirar os avatares, então eles não aparecem na adaptação, embora façam parte da referência. A copy `50+ brands delivered` e `Trusted by 100+ clients` foi fornecida pelo usuário; validar os números e a permissão para usá-los como prova antes de publicar. `85% referral rate` e `92% estimates approved` são números ilustrativos solicitados como placeholders, acompanhados de “SAMPLE FIGURES / REPLACE BEFORE LAUNCH”; precisam ser substituídos por dados reais aprovados ou removidos antes de publicação.

**Interação hover:** no desktop, passar o cursor em uma métrica revela um filete verde de 2 px, separa o texto dele em 8 px e desloca o bloco 10 px; o número muda para peso 600 e verde-oliva. As mudanças usam 220 ms. A linha não é um link e não deve usar cursor de clique; no touch a informação segue estática e completa. Para tornar o restante da página mais responsiva sem mexer no layout, imagens ampliam 2,5% em 650 ms, quadrados dos ícones de benefício se movem 4 × −3 px em 350 ms, FAQ e campos mudam cor/borda em cerca de 200 ms. Hovers são acabamento, nunca condição para entender ou usar o conteúdo, e são desligados com `prefers-reduced-motion`.

**Tipografia e movimento observados nesta rodada:** o parágrafo principal da referência usa Geist 28 px, peso 500, line-height 1,2 (33,6 px) e letter-spacing −0,04 em no viewport de 319 px. As palavras começam cinza (`#ccc`) e passam a preto quando cruzam uma linha próxima a 78% da altura do viewport; cada mudança tem `transition: color 0.3s`. A posição foi inferida comparando palavras e linhas em três posições de scroll, portanto 78% é uma aproximação visual, não uma medida interna do componente. O bloco de texto também entra com opacidade 0 e translateY de 40 px, depois chega a opacidade 1 e translateY 0; a duração/easing não ficou exposta. Quando houver foto, ela vem logo após o texto em um quadro 16:9 com arestas retas e `overflow: hidden`; no DOM da referência, a imagem interna ocupa 135% da altura, começa em top −17,5% e recebe translação vertical leve com o scroll. Em duas amostras, a translação foi −13,2 px e depois −0,2 px após 150 px de rolagem; os limites totais não foram medidos.

**Regra reutilizável para o restante do site:** usar reveals discretos (opacidade e pequeno deslocamento) na entrada dos blocos; reservar a mudança palavra-a-palavra de cinza para ink a textos editoriais longos, com gatilho aproximado em 78% do viewport e transição de 300 ms. Não aplicar em cada parágrafo ou título, para manter o efeito especial e a leitura calma. Em nossa versão, o cinza de repouso é `#858a80`, mais escuro que o `#ccc` medido na referência para melhorar contraste no fundo claro. O texto fica todo em ink sem JavaScript ou com `prefers-reduced-motion`; nenhuma máscara pode cortar glifos. Para imagem real futura, usar recorte retangular com movimento pequeno dentro do quadro, sem pinning, e medir no browser antes de fixar amplitude. Em mobile, empilhar métricas, confiança, texto e fotografia nessa ordem. O grid guia alinhamento mas não atravessa o texto; manter o fundo paper e evitar cards arredondados.

### Benefícios / “Know who’s on your roof”

Referência observada em 24/10/2026 em viewport desktop de 1280 × 710 CSS px: fundo carvão com granulação visível por toda a faixa, linhas verticais claras alinhadas ao grid e texto branco. O label “WHY CHOOSE US” e o título grande de duas linhas começam à esquerda. Uma grande pausa vertical separa o título de quatro colunas igualmente espaçadas. Cada coluna repete uma hierarquia simples: ícone verde em um quadrado translúcido, label curto em mono, título em branco e explicação em poucas linhas cinza-claro. As colunas não são cards separados: não há caixas, sombras ou contornos ao redor de cada benefício. O contraste entre fundo material e espaçamento faz a seção parecer organizada sem adicionar componentes.

Na adaptação Studio / 001, o eyebrow é “WHY A GOOD WEBSITE MATTERS” e o título curto é “What homeowners need to see.” Os quatro pontos falam do que o pintor precisa mostrar: trabalhos concluídos, serviços/área atendida, contato para pedir estimate e boa leitura em celular/computador. Cada benefício tem um ícone linear próprio em quadrado discreto, label mono, título direto e uma frase de apoio curta. O fundo usa `#20231f`, texto paper, guias brancas com 11% de opacidade e uma textura de grain estática, em WebP de 160 × 160 px (~14 KB), com blend soft-light e opacidade 13%. O tile rasterizado evita reprocessar um filtro SVG nesta faixa. A textura é decorativa e deve ficar atrás da cópia; preservar contraste e evitar noise sobre títulos ou descrições. No hover, não deslocar a caixa do ícone: preencher o quadrado com a cor accent ativa, usar ink de contraste calculado e halo suave ao redor. A transição anima cor, borda e brilho sem mover o layout. Também troca uma fotografia conceitual de pintor no fundo da seção escura inteira, contextualizada pelo benefício sob o cursor. As imagens não ficam dentro dos benefícios: uma máscara horizontal zera a fotografia nos primeiros 22% da seção e a revela gradualmente à direita; uma sombra vertical dissolve topo e base no carvão. A fotografia usa opacidade 38% antes da máscara e desaturação moderada. O grain permanece acima do fundo e abaixo dos textos. A imagem deve ser percebida como atmosfera da faixa, nunca como painel ou fundo fotográfico cru; a cópia permanece acima dela e legível. A transição usa fade de 800 ms e zoom lento de 1,4 s, sem deslocar a cópia. O benefício ativo recebe um pequeno filete, ícone claro e elevação do título de 2 px; a informação dos demais permanece legível. Quatro ativos WebP otimizados representam pintura interna, acabamento exterior, conversa sobre estimate e registro fotográfico do trabalho. O efeito funciona somente com hover preciso; em touch o fundo permanece limpo, e movimento reduzido remove as transições. As quatro fotos só são solicitadas quando a seção chega a 250 px da viewport e há pointer fine com hover.

Regra de legibilidade tipográfica: texto corrido deve permanecer em pelo menos 14 px, labels e metadados em pelo menos 12 px, e navegação/CTAs em pelo menos 14 px. Estes são limites de projeto, não mínimos definidos pela WCAG. Permitir zoom do navegador sem restringir a escala; verificar até 200% sem perda de conteúdo ou função e garantir reflow em larguras estreitas, conforme WCAG 2.2, critério 1.4.4 ([W3C: Resize Text](https://www.w3.org/WAI/WCAG22/Understanding/resize-text.html)).

Para manter legibilidade em telas menores, reduzir a pausa vertical e reorganizar em duas colunas até 900 px; abaixo de 540 px, usar uma lista de quatro linhas, com ícone à esquerda e texto agrupado à direita. A regra é preservar a ordem label → título → quatro benefícios, evitando introdução extra, separadores pesados ou novos cards. O título deve explicar a seção sem depender dos efeitos visuais.

### FAQ / “Answers before you commit”

Referência observada em 24/10/2026 em viewport desktop de 1280 × 710 CSS px: a seção usa fundo quase branco e a mesma régua de quatro colunas da página. O label lateral ocupa a primeira faixa; o título, as perguntas e o CTA alinham no início da segunda faixa. A lista ocupa aproximadamente duas das quatro faixas (metade do container), deixando espaço negativo à direita. As perguntas são linhas horizontais sem cards, com texto escuro à esquerda e sinal de mais discreto à direita. A primeira resposta aparece aberta no estado capturado; o texto de resposta é cinza, menor e alinhado ao título. A referência permite manter várias respostas abertas. Depois da lista há uma pausa e um CTA horizontal: “Still got questions?” com apoio curto à esquerda e botão branco “Contact Us” à direita.

Na V1, preservar o título aprovado do wireframe “A few things you might be wondering.” e usar cinco perguntas: custo, prazo, materiais, propriedade/domínio e expectativa de novos trabalhos. Domínio e propriedade ficam juntos para manter a quantidade e o ritmo da referência. Abrir a primeira pergunta por padrão e manter `details` nativo para que múltiplas respostas possam permanecer abertas. No FAQ, o símbolo passa de + para × com rotação de 45°. O CTA abaixo da lista diz “Still have questions?”, resume a ajuda oferecida e leva à seção de processo com o botão “See how it works”.

A lista e o CTA ocupam 50% do container, começando no offset de 25%; em telas até 760 px, expandem para a largura disponível e o CTA empilha texto e botão. O título usa Geist até 64 px, pergunta 16 px e resposta 14 px em cinza médio. Divisórias são 1 px e discretas. O botão fica branco sobre o paper e muda para Lime no hover; manter foco visível por teclado, contraste e leitura sem interação.

## 11. Fotografia

Priorizar o ofício e a casa em execução: pintor, rolo e pincel, preparação, proteção de superfícies, drop cloth, siding, trim, porch e fachada recém-pintada. A fotografia deve parecer documentação de trabalho residencial, não editorial de arquitetura ou decoração. Usar luz natural e overlay suficiente para legibilidade.

V1: imagens conceituais geradas de pintura externa residencial para o mockup P&D Painting. Não representam cliente, obra real da empresa nem localização verificada nos EUA; as legendas devem manter essa distinção. A antiga imagem conceitual de casa do hero permanece no projeto como referência de uma direção anterior e não é usada no hero atual.

URLs dos assets:
- https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=85
- https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1400&q=85
- Imagem gerada para o CTA final: `dist/assets/closing-home.webp` (casa Craftsman clara, siding branco e acabamento sage).

Não foram confirmados nesta pesquisa os nomes dos fotógrafos ou as páginas originais das fotos; registrar essa procedência antes da campanha pública. Não atribuir autores por suposição. Google Fonts carrega Geist e Fragment Mono; imagens são locais.

### Chamada final e rodapé

A referência Cresta fecha com uma composição contínua: a fotografia começa na chamada e permanece como a camada de fundo sob o footer inteiro, dissolvendo-se gradualmente em carvão. A chamada tem cerca de 500 px; a mudança entre chamada e footer não cria uma borda ou uma nova superfície. Noise e as guias verticais alinhadas ao container atravessam toda a composição, reforçando a sensação de um fundo único e profundo.

Repetir a hierarquia em vez de inventar um CTA dentro do footer: chamada grande alinhada ao segundo quarto do grid, apoio curto abaixo e um botão claro. Na V1, a copy é “Get a website you’re proud to show.” e o botão leva ao processo. Usar `dist/assets/closing-home.webp`, uma imagem conceitual de uma casa Craftsman americana com siding claro e acabamento sage; não representa obra do estúdio ou de cliente. A imagem cobre o wrapper combinado de CTA e footer; gradiente vertical em camadas a escurece até `#1a1a1a`, sem interromper o fundo na troca de seção. Linhas verticais discretas ocupam somente a largura do container e seguem do topo da chamada até o crédito final. Não há seção de formulário na V1 atual; os CTAs levam ao trabalho, ao processo ou ao studio, conforme o contexto.

O footer tem quatro áreas alinhadas em duas duplas: marca e descrição; convite de contato; navegação; links auxiliares e retorno ao topo. A distância entre o CTA e as colunas do footer é intencionalmente ampla: a composição deve deixar a fotografia escurecida continuar visível por uma grande faixa vazia antes de revelar os links, como um cenário que se prolonga além do conteúdo. No desktop, reservar aproximadamente 160–260 px no topo do frame do footer (fluido com o viewport) e cerca de 150 px entre as colunas e o crédito final. Não colocar CTA em caixa dentro do footer nem desenhar painéis, cards ou uma linha horizontal dividindo o crédito. Base carvão contínua, textura de noise discreta e um único crédito pequeno após essa pausa espaçosa. Adaptar os links ao conteúdo real do site; não inventar e-mail, telefone ou redes sociais. Em telas estreitas, reduzir o espaço superior para preservar a hierarquia sem alongar demais a página; empilhar marca/contato e manter navegação e links auxiliares lado a lado. Manter foco de teclado e alvos confortáveis.

### Referência adicional: Daylight / Kage

Pesquisa em 24/10/2026: navegação no [site Daylight](https://godaylight.com/) e consulta à [análise do design na Kage](https://kage.design/designs/godaylight-landing-page). O site real confirma hero com foto de casa ao entardecer, título serifado em duas linhas, formulário de endereço integrado ao CTA e pequenos indicadores de energia. A captura/análise da Kage descreve a página como uma sequência editorial de fotografia em tela cheia, cartões claros com bordas finas, interlúdios de gradiente e blocos escuros de contraste.

A linguagem visual usa títulos serifados grandes, labels pequenos em estilo mono e corpo de texto curto. A paleta observada pela Kage combina creme quente (`#F2EDE4`), tinta quase preta (`#1A1611`), gradientes solares laranja, azul/cinza de tempestade e lilás/pervinca no CTA final. Os cartões são planos, com borda cinza quente de 1 px, raio discreto e bastante espaço interno. A sequência alterna mosaicos fotográficos assimétricos, momentos de gradiente amplo, uma história de produto em três etapas com cartões divididos entre texto e imagem/ilustração, uma seção escura de problema e uma saída luminosa no CTA e no footer. As etapas têm grandes pausas verticais; a navegação por scroll e a fotografia fazem a maior parte do trabalho de movimento, sem animação pesada.

**Observações da referência:** usar a cadência editorial, a combinação de serifada expressiva com labels mono e a alternância controlada de temperatura como princípios possíveis. A direção aprovada para o nosso hero está registrada abaixo; as demais seções continuam seguindo o sistema Cresta até serem revistas. Não transformar a página toda em SaaS, nem adotar literalmente a paleta laranja/lilás, o desenho do produto ou a composição da referência. Não copiar nome, logo, tagline, copy, ilustrações, UI, fotografias ou outros assets do Daylight; usar princípios gerais de hierarquia, ritmo, contraste e atmosfera.

### Hero v14 — pinceladas orgânicas e seletor sempre visível

**Direção atual:** manter a copy aprovada, com tipografia expressiva e caixa de frase. A arte da direita permanece circular e compacta. As referências atuais pedem marcas de tinta mais expressivas: pinceladas imperfeitas, marmorização solta, washes de aquarela e misturas acrílicas, com textura tátil sutil. Evitar aspecto de seda, veios de mármore polido, manchas aleatórias densas, preto puro e contraste duro; as sombras permanecem coloridas e suaves. Cada tom deve ter uma silhueta legível distinta, ainda parte da mesma família: Garden Gate é um S verde e claro; Porchlight é uma espiral quente de terracota com pequenos ecos teal; Linen é um wash claro horizontal e difuso; Rainwashed é uma onda azul diagonal; Golden Hour é uma pincelada ocre ascendente. Assets: `paint-garden-gate.webp`, `paint-porchlight.webp`, `paint-linen.webp`, `paint-rainwashed.webp` e `paint-golden-hour.webp`, todos em 768 × 768 e otimizados em WebP (~77–127 KB cada). O asset anterior preto e marfim permanece arquivado sem uso. Não aplicar novamente a camada `multiply`, que apagaria as diferenças de pigmento.

Cada tom tem uma imagem correspondente e um swatch visível. A paleta permanece aberta por padrão; não exigir clique para revelá-la. A seleção atualiza o nome, a imagem visível e a textura usada pelo WebGL, além dos accents da página e do fundo complementar da hero. A troca da textura deve aguardar o decode da imagem selecionada e ignorar respostas antigas quando houver escolhas rápidas, mantendo o mesmo programa e mapa de ondas. Os nomes das cores são conceitos visuais, sem equivalência alegada a catálogos comerciais.

A tentativa anterior de mover oito faixas CSS foi rejeitada: introduzia cortes e não deformava a superfície de maneira contínua. Foi substituída por uma imagem única refratada em WebGL, sem biblioteca externa e sem solver de fluidos. Em repouso, dois campos senoidais lentos deslocam as coordenadas da imagem em cerca de 1–2%, curvando os veios suavemente. Um pequeno recorte ampliado protege as bordas. A inércia usa a velocidade do gesto para continuar deslocando o pigmento depois que o mouse sai, com desaceleração exponencial gradual; não zerar o movimento no pointerleave.

A documentação e o código de [Ripple Distortion, React Bits](https://reactbits.dev/animations/ripple-distortion) foram inspecionados: a referência acumula pinceladas em um mapa de deslocamento de baixa resolução; o valor do mapa controla a distância e a direção da refração. Nossa adaptação usa esse princípio com até 16 ondas, três dobras concêntricas por onda, força de refração 0,19 e clique com raio 1,65 vezes maior. Movimento do cursor deposita ondas a cada pelo menos 9 px e 38 ms; elas crescem, se misturam e desaparecem em 3,2 s. Os anéis são deformações da própria tinta, não contornos desenhados por cima.

Orçamento de renderização: mapa fixo de 128 × 128, canvas final limitado a 400 × 400 e DPR máximo de 1,25. A programação de quadros limita a animação a no máximo 24 fps em repouso / 30 fps durante a interação; o mapa só é recalculado enquanto existem ondas. Ao sair da viewport ou ocultar a aba, cancelar tanto o timer quanto o requestAnimationFrame. Movimento reduzido, ausência de WebGL ou perda de contexto exibem a imagem estática com o seletor de cor funcional. Este orçamento é uma restrição de implementação, não uma garantia de desempenho em todos os dispositivos.

Preservar o círculo compacto, a tipografia Geist, o título em caixa de frase, o seletor acessível. A hero não possui guias de fundo nem crosshair; utiliza o cursor nativo. A intensidade do hover deve dobrar os veios da tinta mantendo a superfície contínua. Não voltar a fragmentos CSS, anéis decorativos ou uma simulação de tela inteira.

Revisão técnica e orçamento detalhados em [PAINT-MOTION.md](PAINT-MOTION.md). Otimizações devem preservar a intensidade e a geometria aprovadas: cache de recursos, buffers reutilizados, cálculo de ondas suspenso em repouso e nenhum draw fora da tela. Ao trocar cor, atualizar a textura apenas no evento de carregamento, sem recriar o programa WebGL. Não confundir limites de renderização com benchmark de GPU.

No desktop, manter texto e arte na mesma composição de duas colunas, trazendo ambos levemente em direção ao centro do frame de quatro colunas. Usar título de 54–72 px e corpo de 17–19 px; brilho discreto e sublinhado em gradiente de “website” e “your work” seguem a cor selecionada. A linha do sublinhado usa cerca de 0.11em para continuar visível em telas pequenas sem competir com as letras. O CTA principal usa um fundo da família do pigmento com contraste calculado. Sua seta herda a cor do texto; a seta do link secundário usa uma variante do pigmento com contraste adequado no fundo claro. Deixar a paleta aberta com a cor selecionada, a frase curta e os cinco swatches visíveis. No mobile, resetar os offsets da antiga hero fotográfica e centralizar a composição. Título em fluxo normal, 34–44 px / 1,1, descrição de 14 px, círculo de 160–190 px e seletor aberto no fluxo da página. A animação de entrada por linhas fica desativada no mobile para evitar clipping; o efeito da tinta permanece com os mesmos parâmetros.

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
- CTAs levam a seções existentes e não prometem contato ou envio de dados que ainda não foi configurado.
- Foco visível em controles, contraste coerente e texto alternativo em imagens.
- Fotos abaixo da dobra lazy-loaded; hero prioritário.
- Respeitar reduced motion e não exigir hover para revelar informação essencial.
- Não instalar analytics ou enviar dados de contato até definir a operação real.

## 14. Pendências para versão comercial

Nome e identidade finais; apresentação real do fundador; escopo e preço; política de manutenção e propriedade; canal para envio de formulários; aviso de privacidade final; domínio; portfólio próprio; seleção final de fotografia e atribuições. Remover `noindex` somente quando houver decisão de lançamento público.

## 15. Instrução para futuras implementações

Preserve a promessa, as sete seções, o grid de construção e o cuidado de movimento. Faça alterações a partir de `dist/index.html`, `dist/styles.css` e `dist/app.js`. Não transformar a página em um template genérico de cards arredondados. Trate efeitos como acabamento: o conteúdo, a clareza e o ritmo devem funcionar antes deles. Mantenha separados fatos observados na referência, escolhas deste projeto e afirmações que ainda precisam de aprovação comercial.

Este guideline é um documento vivo e deve acompanhar o desenvolvimento. Ao introduzir uma nova lógica visual, de interação, movimento, conteúdo ou layout, atualize aqui a decisão, seus valores relevantes e o motivo no mesmo trabalho. Corrija especificações antigas que ficarem contraditórias. Não registre cada detalhe incidental de código: preserve princípios reutilizáveis e sinalize o que ainda é proposta ou decisão pendente. As instruções permanentes para o agente estão em `AGENTS.md`.

## 16. Acabamento interativo — 25/10/2026

Referências e implementação detalhada em [REFERENCE-EFFECTS.md](REFERENCE-EFFECTS.md). O frame dos mockups tem borda cinza fina, raio de 12 px (10 px no mobile), barra de navegador de 44 px e três indicadores discretos inspirados no macOS. Trata-se de uma única janela para os dois estados.

Holo Card: adaptar o princípio de inclinação com mola e luz normalizada pelo ponteiro ao conteúdo HTML navegável. Inclinação máxima de 1,8° por eixo, brilho iridescente sutil sobre o frame, sem capturar cliques. Não renderizar o site inteiro como imagem ou usar outra simulação WebGL. Retornar ao plano ao sair; desativar em touch e movimento reduzido.

Transformação: usar os estágios HTML do Refine Frame (queued, generating, refining, complete), em passos de 400 ms: blur 4 / 1,5 / 0,5 / 0 px, saturação 0,6 / 0,8 / 0,95 / 1 e escala 1,04 / 1,02 / 1,005 / 1. Barra de navegador fixa, indicador de progresso textual e varredura luminosa. Ao concluir, um check e uma confirmação persistente aparecem junto à CTA, com um halo único no frame; ver seção 17. O efeito leva aproximadamente 1,2 s e é uma apresentação do redesign pré-construído, não geração em tempo real. Evitar cliques repetidos e foco no conteúdo durante a transição; restaurar a navegação ao concluir. Com movimento reduzido, trocar imediatamente.

Hero: sem guias verticais, bordas laterais ou crosshair. Usar o cursor nativo e manter o ponto decorativo desligado dentro da hero. A interação se concentra na tinta e no seletor.


As CTAs da hero e da demonstração antes/depois usam a cor selecionada na paleta. A tinta define a família cromática do botão; comparar o contraste real de ink e branco. Porchlight recebe uma variante mais profunda para suportar texto branco; Linen e Golden Hour mantêm fundo claro e ink. Setas e texto do mesmo CTA usam a mesma cor de primeiro plano. A seção de comparação usa duas colunas no desktop — editorial e CTA à esquerda, mockup à direita — e empilha abaixo de 900 px. O sublinhado permanece como detalhe cromático; não indica um alvo de cursor.


## 17. Revisão de recompensa, acessibilidade e custo — 25/10/2026

**Implementado:** ao concluir a transformação, mostrar um check desenhado uma vez, “A better first impression.” e “Same painter. A clearer website.” junto ao botão. O frame recebe um halo único de 1,4 s. A confirmação permanece até voltar ao original e é anunciada por uma região `role=status` fora do mockup ocupado. Não usar confete, som, métricas inventadas ou sugerir geração em tempo real. Com movimento reduzido, a confirmação é imediata e estática.

**Hero:** “Color in motion” fica em uma linha própria abaixo do círculo, fora do recorte e sobre fundo sólido. O nome da tinta continua no seletor. A textura se move automaticamente quando visível; não há controle de pausa. Em movimento reduzido ou fallback sem WebGL, a versão estática continua disponível e a seleção de cores funciona. Reservar o círculo para a imagem evita cortes de texto e contraste imprevisível sobre a tinta.

**About us:** preservar métricas e sua identificação de placeholder. Acrescentar uma linha sob o título que se estende no hover, sublinhados suaves nas palavras de destaque e uma pequena elevação sequencial das estrelas. As métricas ganham um wash leve, mantendo a resposta já aprovada do número e filete. Nenhum contador fictício, clique ou tab stop em texto estático. Desativar deslocamentos com movimento reduzido. O texto que se revela no scroll usa cinza #6b7164 e só mede posições quando a seção está próxima da viewport, agrupando leituras antes das escritas.

**Contraste e toque:** meta de pelo menos 4,5:1 para textos pequenos, verificada por cor aplicada; evitar depender apenas de um limiar de luminância. Foco com contorno duplo claro/escuro, inclusive quando o acento escolhido é muito claro. As cinco amostras usam cartões clicáveis com nome visível e seleção também indicada por check: aproximadamente 43 px no tablet e 47 px no mobile de 320 px, com altura de pelo menos 82 px. Navegação do mockup tem controles de pelo menos 32 px de altura; CTAs principais de pelo menos 44 px. São decisões de projeto apoiadas em [WCAG contraste](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html) e [tamanho de alvo](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html). O mínimo AA de alvos é 24 px ou espaçamento equivalente, não 44 px.

**Mobile e performance:** remover o padding vazio que restou do antigo CTA flutuante dentro dos mockups. Expor as duas áreas roláveis como regiões nomeadas e focáveis para teclado. Fotografias dos mockups usam WebP responsivo 640/1280 px; o footer usa 960/1600 px e só solicita a imagem a 600 px da viewport. Fontes, conteúdo e estrutura seguem buildless. Crosshair foi removido; Star Border cancela o frame ao sair de vista e não reinicia fora da tela ao trocar de cor ou aba. Não alterar a geometria, força ou orçamento da tinta aprovado em PAINT-MOTION.md.

**Limite da revisão:** inspeção de navegador e auditoria automatizada não equivalem a certificação de acessibilidade nem a benchmark em celular físico; registrar resultados medidos no relatório da rodada.

## 18. Acabamento da hero e fotografias dos benefícios — 25/10/2026

**Seletor de cor:** coleção de cinco amostras em um único painel; nome completo e índice selecionado no cabeçalho, cartões de tinta com nome curto e numeração, frase da cor no rodapé. A seleção recebe contorno, elevação e check. Especificação atual na seção 20.

**Movimento da tinta:** não existe controle visível de pausar/reproduzir. A textura animada roda quando a hero está visível e a aba ativa; `prefers-reduced-motion` mantém o quadro estático e conserva a escolha de cor. O motivo é reduzir a interface concorrente e deixar a experiência simples, sem retirar a preferência de acessibilidade do sistema.

**Cursor da hero:** nativo. A experiência de target foi retirada a pedido do usuário, incluindo o motor Canvas e seus listeners.

**Confirmação do redesign:** depois da troca, a mensagem permanece ao lado da CTA num pequeno painel com fundo tonal de baixa intensidade, filete lateral verde, check branco sobre selo verde fixo #257044 e hierarquia em três níveis: `REDESIGN COMPLETE`, `A better first impression.` e `Same painter. Same work. A clearer website.` Um pequeno marcador decorativo reage uma vez; nada de looping, confete ou som. Essa resposta faz a conclusão parecer intencional sem disputar atenção com o mockup.

**Fotos de “What homeowners need to see”:** os quatro fundos são fotos conceituais recém-criadas de pintores em ação — acabamento interior com pincel, pintura de siding exterior com rolo, recorte de trim junto a uma janela e aplicação de tinta em parede interna com extensão. O profissional e a ferramenta ficam à direita; a esquerda permanece mais limpa para que o fade horizontal dissolva a imagem sob o texto. Mantêm-se o fade escuro da esquerda, granulação acima da foto e opacidade sutil de 0,38 no hover preciso. Cada WebP é limitado a 1365 px e carregado somente quando a seção se aproxima da tela e o dispositivo tem hover preciso. São imagens conceituais, não documentação de trabalho dos clientes.

**Revisão tipográfica:** metadados, labels da paleta e microcopy da confirmação têm mínimo de 12 px; corpo segue mínimo de 14 px e navegação/CTAs de 14 px. As exceções menores pertencem ao mockup propositalmente antigo e não devem afetar conteúdo ou instruções necessários para operá-lo. Validar visualmente a quebra da paleta e da confirmação em 320 px.
## 19. Segunda rodada de enquadramento, cor e prova visual — 25/10/2026

**Target da hero — retirado:** o usuário preferiu remover o efeito. As especificações anteriores de enquadramento foram substituídas pelo cursor nativo.

**Color Story / seleção:** a antiga caixa de bolinhas foi substituída pela coleção de amostras descrita na seção 20.

**Fotografia de pintor:** `feature-show-work.webp` mostra um pintor fazendo recorte de trim à janela, em close e sob luz natural, como imagem conceitual de apoio para o item `Show your best work`. A imagem deve permanecer limpa, sem card de avaliação ou notificação sobreposta.


## 20. Coleção de amostras e confirmação positiva — 25/10/2026

**Implementado:** Color Story é um painel único de até 460 px, com cinco cartões de amostras numerados. Cada botão mostra um nome curto; o cabeçalho mostra o nome completo escolhido e o índice 01–05. O painel usa borda fina, sombra difusa e superfície clara; a tinta é o foco cromático. A descrição inferior por cor foi removida para reduzir a altura e manter o seletor concentrado no nome e nas amostras. Os cartões têm 103 px de altura no desktop e 82–90 px no mobile; o layout reserva espaço para a elevação sem deslocar vizinhos.

**Interação:** inspiração geral no Dock do React Bits (https://reactbits.dev/components/dock), cujo princípio observado é a ampliação suave ao aproximar o ponteiro. Nossa adaptação própria usa CSS: cartão sob o ponteiro sobe 5 px e gira −1°, vizinhos sobem 1 px, selecionado repousa 2 px acima com borda e check. Clique dá compressão curta. Setas/Home/End movem o foco; Enter/Espaço selecionam. Os nomes acessíveis são completos. No touch a seleção é direta; movimento reduzido elimina deslocamentos. Não há novo canvas, biblioteca ou loop para a paleta.

**Sucesso semântico:** o selo do redesign é sempre #257044 com check branco, independentemente da tinta escolhida. Label, filete e fundo claro reforçam esse estado. Ao concluir, o selo tem uma única expansão de 600 ms e halo discreto; a confirmação textual permanece até retornar ao original. Movimento reduzido mantém a confirmação estática. A cor escolhida continua personalizando as CTAs, mas não muda o significado de sucesso.

### Acabamento das amostras — revisão de 25/10/2026

Correção observada: regras antigas do ícone de tinta ainda arredondavam e acrescentavam gotas à amostra do cabeçalho quando o ponteiro entrava no painel; a transição longa de cor também mostrava tons intermediários. O cabeçalho agora mantém uma amostra retangular inclinada em −6°, sem pseudo-gotas, e atualiza o pigmento imediatamente junto com o nome. Não elevar o cabeçalho inteiro no hover: ele é informativo. Os cartões usam hover de −5 px/−1°, vizinhos −1 px e selecionado −2 px, substituindo as amplitudes da seção 20. A borda de seleção muda imediatamente; sombra termina em 150 ms, reduzindo a sensação de duas escolhas simultâneas. No tablet estreito, reduzir padding para 16 px e gap para 6 px para preservar os alvos. O contorno de foco é independente do check de seleção. Manter a altura do painel estável ao trocar de cor.

**Hipótese de adequação ao público:** escolher uma amostra de tinta cria uma ligação familiar com o ofício e demonstra personalização. Isso é interpretação de design, ainda sem teste com pintores. As propostas comerciais do review de público estão em AUDIENCE-REVIEW-2026-10-25.md; não são políticas, preços ou promessas aprovadas.

### Troca confiável da textura — 26/10/2026

**Correção implementada:** o canvas WebGL mantinha a textura enviada na inicialização mesmo quando o seletor mudava o `src` do elemento `<img>`. A seleção agora informa o asset escolhido ao renderer; ele decodifica a imagem antes de atualizar a textura GPU e descarta atualizações obsoletas se o usuário fizer outra escolha durante o carregamento. Se a atualização WebGL falhar, a imagem estática selecionada continua visível. Isso preserva uma imagem distinta para cada tom sem reconstruir o shader nem o mapa de ondas.

## 21. Exploração de marca — proposta inicial · 26/10/2026

**Proposta em avaliação, ainda não aprovada:** explorar o nome **Housemark Studio** para o estúdio. “House” aponta para o universo residencial; “mark” liga o nome ao símbolo desenhado e à presença digital criada para cada empresa; “Studio” mantém a percepção de uma prática de design. A apresentação conceitual está em `output/pdf/housemark-studio-brand-concept.pdf`.

O símbolo proposto parte de um contorno de casa traçado à mão, com interrupções intencionais e poucos detalhes de fachada. Essa escolha traduz a preferência do usuário pelo traço irregular e pela síntese da Clubhouse, sem reutilizar a silhueta ou o símbolo da referência. A direção usa a paleta e a tipografia já existentes no site para manter continuidade visual. Nome, desenho final, detalhe interno, registro e disponibilidade de domínio permanecem em aberto; o símbolo gerado é estudo visual e requer redesenho vetorial antes de qualquer uso comercial.

### Estudo de alternativas de símbolo · 26/10/2026

**Em avaliação, sem seleção final:** prancha de 12 alternativas em `docs/brand-symbol-study.png`. As variações testam contorno de casa, telhado aberto, entrada em espaço negativo, linha de base e recorte de tinta. A preferência já declarada por um traço manual e interrompido continua guiando os estudos. Uma leitura preliminar destaca 01, 02, 05 e 10 para possível refinamento; isso é uma recomendação de exploração, não aprovação do usuário. Antes da escolha, comparar leitura em 16–32 px, reprodução monocromática e distinção de outras marcas.

**Desdobramento das direções A e B:** a prancha `docs/brand-symbol-directions.png` explora três variações para cada linguagem apresentada pelo usuário: A1–A3 mantêm a casa feita à mão; B1–B3 usam linhas de elevação arquitetônica. São estudos raster para comparação, não logos aprovados ou arquivos vetoriais. A próxima decisão deve indicar quais alternativas merecem desenho vetorial e teste em tamanho pequeno.

**Casa e pincel integrados:** a referência enviada pelo usuário inspira um novo estudo de oito alternativas em `docs/brand-house-brush-study.png`. A exploração testa pincel como abertura, telhado, detalhe interno e traço integrado à fachada, sem adotar a mesma silhueta da referência. Nenhum símbolo foi selecionado; o arquivo é um estudo raster e cada opção precisa de refinamento vetorial e checagem de legibilidade antes do uso.

**Refinamento da opção 02:** o usuário escolheu aprofundar a ideia em que as cerdas do pincel formam o telhado e a fachada permanece como estrutura aberta. O estudo `docs/brand-bristle-roof-study.png` apresenta oito variações (02A–02H), explorando largura e inclinação do telhado, densidade das cerdas, equilíbrio entre pincelada e linha arquitetônica e versão monocromática. A preferência se refere à direção conceitual; nenhum refinamento está aprovado como símbolo final.

**Exploração de espaço negativo:** após nova referência enviada pelo usuário, a direção passou a incluir o pincel recortado dentro da casa, funcionando também como porta. `docs/brand-negative-space-study.png` apresenta seis composições com silhuetas e fachadas diferentes. Esse princípio é agora uma preferência explícita para a exploração, mas os desenhos continuam não aprovados; avaliar leitura dupla (casa e pincel/porta), escala favicon e distintividade antes de redesenhar em vetor.

**Exploração de formas positivas:** `docs/brand-positive-space-study.png` abre oito direções que usam forma visível, mancha de tinta e campos de cor para construir telhado ou fachada, em diálogo com contornos e recortes arquitetônicos. São rotas conceituais para ampliar a comparação; nenhuma substitui a preferência por estudar espaço negativo nem está aprovada. Avaliar especialmente se cada marca mantém leitura residencial e se a tinta comunica ofício sem virar ícone genérico de pintura.


## Revisão comercial e cartela — 31/10/2026

Implementado: kicker DESIGN & TECHNOLOGY FOR HANDS-ON BUSINESSES; novo CTA de conversa e título do processo solicitados. A hero reúne a faixa de tinta e seletor num único card. A legenda redundante sob a faixa e a divisória foram removidas; a instrução da paleta explica a analogia com escolher tinta para casa e que o site muda com a escolha. As fichas individuais mantêm hover sem rotação. O card permanece fixo no layout, sem tilt, scale ou deslocamento magnético. Em hover de ponteiro preciso, apenas sombra, borda e um reflexo sutil que acompanha o ponteiro dão sensação de profundidade; ao sair, o reflexo desaparece. Touch não ganha efeito de hover e reduced motion desativa o reflexo. A hierarquia enfatiza título de 25 px, instrução de 15 px e nome aplicado.

Oferta fornecida pelo usuário: $999 USD one-time; até três páginas (Home, Gallery, Contact), design personalizado e até três revisões. Domínio, hosting e suporte opcionais por $99/mês. Substitui a orientação de preço ainda indefinido. Painel editorial verde escuro e painel claro com preço/escopo, empilhados no mobile. A seção precede o FAQ, renumerado 06 e atualizado com os valores. Não inventar prazos ou políticas adicionais.

Por decisão explícita do usuário, os botões de conversa permanecem sem destino, com aria-disabled e sem envio. Conectar quando o contato for definido.

## Cartela física digital — 31/10/2026

**Pesquisa:** Sherwin-Williams apresenta color chips de 2 × 3 polegadas e amostras peel & stick para testar cores no ambiente (https://www.sherwin-williams.com/homeowners/discovery/samples). Suvinil enfatiza teste no ambiente e comparação entre tons (https://suvinil.com.br/cores). Pantone descreve seus Formula Guides como leques portáteis para comparar e comunicar cor; a página retornou 403 na abertura, portanto a leitura ficou limitada ao resultado indexado (https://www.pantone.com/products/graphics/formula-guide-coated-uncoated).

**Interpretação implementada, não teste com usuários:** pequenas fichas de papel alinhadas são familiares ao ofício e permitem ver as cinco opções simultaneamente. Bordas quase retas, lâminas de papel simuladas por sombras estáticas, área de pigmento fosca com textura SVG estática leve e faixa branca para o nome. Não usar logos, códigos de fabricante ou sugerir equivalência com tintas comerciais.

**Comunicação:** título “Give this site a fresh coat.” e instrução “Pick a color. Watch the details change across the site.” deixam explícito o efeito da ferramenta. “APPLIED TO THIS SITE” identifica o nome já selecionado. A instrução também é associada ao grupo por aria-describedby. Não reintroduzir descrição filosófica por cor.

**Interação atual:** hover preciso eleva somente a ficha apontada em 5 px, sem rotação ou deslocar vizinhas; clique comprime 1 px; check e contorno persistem na seleção. Foco escuro independente, transição de 200 ms; reduced motion remove transformações e transições. Substitui as especificações de hover da revisão anterior. Fichas de 112 px desktop e 96 px mobile, nomes e números de 12 px. Nenhuma biblioteca ou loop adicionado.

**Preservado:** DOM, dimensões, imagem, shader, resposta ao ponteiro e inércia do círculo; dados, eventos, assets e lógica de aplicação das cinco cores. O painel cresce naturalmente para acomodar a instrução, sem redimensionar a tinta.

### Equilíbrio do card com a copy — 31/10/2026
A rodada anterior deixou a cartela alta demais. Reduzir o círculo de 330 para 260 px no desktop e de 210 para 190 px no mobile, preservando renderer e interação. Compactar amostras para 88 px e espaçamentos internos. Hierarquia: tinta como foco visual, título de 21 px, instrução de 14 px, nome ativo de 17 px e metadados de 12 px. A altura acompanha conteúdo, sem altura fixa que corte texto ou prejudique zoom; o objetivo é equilíbrio visual com a coluna esquerda.

## Página de apresentação de redesign — 31/10/2026

Implementado em dist/presentation.html, com CSS/JS próprios e sem dependências de runtime. Prévia local para futura integração. Empresa Evergreen Painting fictícia; imagens ilustrativas, sem atribuição de trabalho real. Não reutilizar os fatos ou telefone de P&D no exemplo.

A apresentação usa papel claro, Geist, Fragment Mono, linhas finas e verde do estúdio. Rolagem única do documento evita competição com frames internos. Desktop: site à direita e índice/notas sticky à esquerda. A seção que passa pelo ponto de leitura atualiza a nota; o índice permite saltar diretamente. Mobile: notas junto de cada seção para preservar associação e espaço útil.

Current site / Redesign e Transform this site controlam os mesmos dois estados. A troca preserva a posição relativa do capítulo ativo, muda as notas e permite retorno. Fade/leve deslocamento de 450 ms somente quando reduced motion não está ativo. Conteúdo nunca depende da animação para aparecer. Os quatro capítulos correspondem a introdução, serviços, portfólio e contato. Os comentários explicam clareza e encontrabilidade, sem prometer conversão. O botão do contato fictício revela explicação, sem envio.

Padrão reutilizável: substituir conteúdo e diagnóstico por dados específicos do cliente; manter o shell editorial do estúdio. Não impor a estética do site fictício a todos os redesigns.

### Faixa de tinta na hero — 31/10/2026
A superfície COLOR IN MOTION passa de círculo para faixa retangular horizontal de baixa altura, com o crop preenchendo a largura interna do card. Preservar mesma imagem, canvas, textura, movimento, interação de ponteiro e seleção de cor; esta alteração é somente de proporção visual. Desktop 100–150 px conforme viewport; mobile 96 px. A faixa fica sem legenda sobreposta; a copy contextual fica na cartela.

Correção da faixa: remover border-radius circular de todas as camadas. Canvas usa proporção real da superfície e coordenadas de textura com cover centralizado, cortando sobras sem esticar a arte. Fallback img mantém object-fit:cover. Não sobrepor legenda à faixa. O motor de ondas e inércia continua o mesmo.

### Ajuste da faixa e sincronização das imagens — 31/10/2026
A faixa volta a uma altura mais compacta: 100–150 px no desktop e 96 px no mobile. A imagem continua preenchendo a superfície com crop central (`object-fit: cover` no fallback e `uCover` no WebGL); nunca esticar a arte para caber. Cada swatch troca a imagem correspondente e os accents da página. Para evitar a textura WebGL ficar presa à primeira cor ou carregar uma escolha obsoleta em cliques rápidos, decodificar uma imagem isolada por seleção, ignorar respostas antigas e só então atualizar a imagem visível e a textura existente. Não recriar o programa WebGL nem alterar o efeito de movimento.




### Walkthrough editorial do redesign — 31/10/2026
A seção principal de redesign incorpora o padrão da página de apresentação dist/presentation.html: alternância explícita Current site / Redesign, notas que acompanham a seção visível e mensagens contextuais breves no mobile. A coluna editorial no desktop mostra o diagnóstico do site original ou a melhoria equivalente, com índice e progresso. No mobile, uma notificação discreta acompanha a área interna rolável quando o capítulo muda; ela não cobre os controles do mockup e desaparece após alguns segundos. A notificação de conclusão que já existe continua separada e permanece até retornar ao original. As quatro notas explicam hierarquia, serviços, prova visual e próximo passo; são observações do conceito, não alegações de conversão. Preservar a navegação interna e a troca animada/refinamento do redesign; tabs apenas acionam o mesmo estado do CTA. Mudança de capítulo é anunciada por status sem deslocar foco. Movimento reduzido remove as transições; o texto e o estado continuam acessíveis.

### Acesso integrado à apresentação — 01/11/2026

A página dist/presentation.html agora deve ser acessível pela navegação principal e por um link contextual após a seção de demonstração na Home. Objetivo: eliminar dependência de URL localhost ou abertura de arquivo; preservar apresentação separada em rota própria para foco e integração futura. Mobile usa link no menu expansível. A página permanece buildless junto aos demais HTML em dist.

### Rota para a apresentação de redesign — 01/11/2026

Orientação retirada em 01/11/2026: o encaminhamento para index.html#work confundia duas experiências distintas. presentation.html volta a ser a apresentação independente.


### Revisão visual da apresentação — 01/11/2026

Implementado: página independente recuperada a partir do gerador local existente, preservando CSS e JavaScript de notificações. Não representa recuperação de uma versão histórica via Git. Backup anterior em output/presentation-backup.

Shell alinhado à Home: Geist e Fragment Mono, fundo #f4f5f6, header de papel #f4f4f0, marca de casa com o mesmo recorte, largura máxima 1320 px, margens desktop de 48 px e mobile de 20 px. Título 48–76 px no desktop, peso 500, tracking apertado e sublinhado neutro; remover a abertura excessivamente grande e o gradiente. Controles verdes e linhas discretas. A identidade do exemplo fictício permanece separada da identidade editorial do estúdio.

Verificação em arquivo local: 1440, 390 e 320 px sem overflow horizontal ou exceções JavaScript; notificações presentes somente no mobile no modo redesign. Fontes ainda dependem de Google Fonts.

### Navegação principal · 03/11/2026

Orientação inicial de cabeçalho fixo e âncoras com compensação mantida. A composição dos links e o rótulo do CTA foram revisados abaixo para eliminar duplicidade.


### Ícones e CTA da navegação · 03/11/2026

Implementado: a navegação mantém Work, Process e About us; o CTA fixo “Get started” leva à seção da oferta e preço. Ele comunica um próximo passo sem repetir “Pricing” como link vizinho. Enquanto o canal de contato não estiver ativo, não rotular o CTA como envio de mensagem ou compra concluída.

Ícones funcionais das duas páginas usam SVGs locais do Lucide Static 1.67.0 (licença ISC em `dist/assets/lucide-LICENSE.txt`), com tamanho e traço consistentes, cor herdada e `aria-hidden` quando acompanhados por texto. Usar setas somente para direção ou navegação; `message-circle` para pedido de contato no conceito, `image` para portfólio, `panels-top-left` para serviços, `monitor-smartphone` para adaptação às telas, `sparkles` para transformação ou detalhe decorativo. Estados de seleção usam `check`. Pontos da janela de navegador são formas CSS decorativas. O mockup antigo conserva linguagem própria para representar a comparação histórica, mas sem caracteres Unicode tratados como controles. Evitar caracteres que possam renderizar como emoji em novas interfaces.


### Hero alinhada ao grid — 03/11/2026

Implementado: removido o kicker técnico e os metadados flutuantes no rodapé da hero, que competiam com a mensagem principal e pareciam decoração de interface. O bloco de texto começa na mesma borda do container das seções seguintes; o grid segue a mesma divisão de colunas e a composição da hero mantém sua altura, sem criar uma faixa adicional antes da seção seguinte. A ação principal agora diz “Get a new website” e leva diretamente à oferta. Manter na abertura uma promessa simples, uma ação clara e alinhamento compartilhado com o restante da página.

### Comparativo em foco — 03/11/2026

Implementado: a seção da landing apresenta título, uma frase de contexto, um CTA “Explore the redesign” e o preview como teaser clicável. As notas editoriais extensas e os controles de versão aparecem na lightbox, para que o preview seja o foco. A lightbox usa `dialog` nativo, fechamento por botão, Escape ou clique fora, e devolve foco ao CTA ao fechar. O preview é movido para dentro do diálogo enquanto está aberto; as abas Current site e Redesign ficam visíveis no topo, o conteúdo de cada versão continua rolável, e a nota contextual acompanha os capítulos no desktop. No mobile, a notificação contextual existente aparece durante o scroll do redesign. A identificação de estudo conceitual e a ressalva de que não é trabalho de cliente permanecem visíveis. Movimento reduzido mantém as trocas imediatas. O objetivo é convidar à exploração sem transformar a seção em um bloco de explicações antes da interação; não há evidência de aumento de conversão.

Refinamento visual: o microtexto sob o teaser sai da landing; a identificação conceitual e a ressalva permanecem na lightbox. A ação sobre o teaser usa o rótulo curto “View comparison”.
