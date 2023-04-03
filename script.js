function pratoSelection(prato) {
    let pratoSelecionado = document.querySelector(".pratos .selecionado");
  
    if (!!pratoSelecionado) {
      pratoSelecionado.classList.remove(".selecionado");
    }
    prato.classList.add(".selecionado");
    verificarSelecao();
  }
  
