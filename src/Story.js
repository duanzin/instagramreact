export default function Story() {
    const itens = [
      <div>
        <div class="imagem">
          <img src="assets/img/9gag.svg" />
        </div>
        <div class="usuario">9gag</div>
      </div>,
  
      <div>
        <div class="imagem">
          <img src="assets/img/meowed.svg" />
        </div>
        <div class="usuario">meowed</div>
      </div>,
  
      <div>
        <div class="imagem">
          <img src="assets/img/barked.svg" />
        </div>
        <div class="usuario">barked</div>
      </div>,
  
      <div>
        <div class="imagem">
          <img src="assets/img/nathanwpylestrangeplanet.svg" />
        </div>
        <div class="usuario">nathanwpylestrangeplanet</div>
      </div>,
  
      <div>
        <div class="imagem">
          <img src="assets/img/wawawicomics.svg" />
        </div>
        <div class="usuario">wawawicomics</div>
      </div>,
  
      <div>
        <div class="imagem">
          <img src="assets/img/respondeai.svg" />
        </div>
        <div class="usuario">respondeai</div>
      </div>,
  
      <div>
        <div class="imagem">
          <img src="assets/img/filomoderna.svg" />
        </div>
        <div class="usuario">filomoderna</div>
      </div>,
  
      <div>
        <div class="imagem">
          <img src="assets/img/memeriagourmet.svg" />
        </div>
        <div class="usuario">memeriagourmet</div>
      </div>
    ];
  
    return (
      <ul>
        {itens.map((item) => (
          <div class = "story">{item}</div>
        ))}
      </ul>
    );
  }