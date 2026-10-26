# Referências React Bits — implementação local

Inspecionadas em 25/10/2026: páginas oficiais e arquivos completos JS-CSS do registry público, incluindo CSS, defaults, eventos e controle dos loops.

- https://reactbits.dev/components/holo-card
- https://reactbits.dev/animations/star-border
- https://reactbits.dev/micro/refine-frame?status=complete
- https://reactbits.dev/animations/crosshair
- Registry: https://reactbits.dev/r/{HoloCard,StarBorder,RefineFrame,Crosshair}-JS-CSS.json

## Código e adaptações

`dist/reference-effects.js` contém o port DOM do motor Canvas 2D de StarBorder, sem React. Preservados contorno arredondado, cauda luminosa, estrela e volta extra no hover. A cor acompanha o seletor; suspender ao ocultar a aba ou sair da viewport. O Crosshair foi retirado da hero em 25/10/2026 por decisão do usuário, incluindo seu motor e listeners. Código upstream e licença: https://github.com/DavidHDev/react-bits — [licença preservada](REACT-BITS-LICENSE.md).

`dist/scene-effects.js` integra os efeitos sem mudar o projeto buildless. Holo Card original é uma imagem com shader WebGL e oito presets de foil. Aqui, usamos uma adaptação CSS de luz iridescente + mola no tilt para manter texto selecionável, links, teclado e scroll do mini-site. Não se trata do shader holográfico original. A amplitude é menor por se tratar de uma página grande e interativa.

Refine Frame original oferece mosaico progressivo para imagens e estágios de blur/saturação/escala para conteúdo HTML. Escolhemos a variante HTML com os valores de estágio originais e duração de 400 ms por etapa. Não capturar o mockup em imagem: sua navegação deve continuar disponível após a transição. O indicador de progresso fica no topo do frame durante a transformação. Ao concluir, dá lugar a uma confirmação persistente com check ao lado da CTA, anunciada por uma região de status, e um halo único de 1,4 s no frame. Movimento reduzido mostra a conclusão imediatamente, sem animação.

## Verificação e restrições

- Canvas decorativos têm `aria-hidden` e `pointer-events:none`.
- Durante o refinamento, mini-sites ficam inert e o botão recebe `aria-disabled`; o foco permanece no botão. Ao concluir, só o estado visível volta a aceitar interação.
- Troca para original é imediata. A animação de refinamento acontece ao pedir o redesign.
- Touch conserva a janela estável: sem tilt nem crosshair. Star Border e transformação seguem disponíveis.
- Movimento reduzido: estrela estática, sem pulso; sem tilt, crosshair ou etapas de blur.
- Nenhuma nova dependência de runtime foi adicionada para os efeitos. Os dois scripts são locais e deferidos. Star Border mantém um estado independente de interseção para impedir que a troca de cor reinicie seu loop fora da viewport.
- Não afirmar ganho de desempenho por benchmark: foram aplicados limites de escopo e suspensão, sem medição de GPU em aparelhos físicos.
