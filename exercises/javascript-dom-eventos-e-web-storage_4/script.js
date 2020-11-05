window.onload = function(){
    //função par cor do background
    function setBackgroundColor(color){
        let backgroundC = document.querySelector(".content");
        backgroundC.style.backgroundColor = color;
        localStorage.setItem("backgroundColor", color);
    }

    //função para cor do texto
    function setTextColor(color){
        let textColor = document.querySelectorAll(".paragraph");
        for(index = 0; textColor.length > index; index+=1){
        textColor[index].style.color = color;
        }
        localStorage.setItem("color", color);
    }
    //função para o tamanho da fonte
    function setFont(size){
        let textFont = document.querySelectorAll(".paragraph");
        for(index = 0; textFont.length > index; index+=1){
            textFont[index].style.fontSize = size;
        }
        localStorage.setItem("fontSize", size);
    }
    //função para espaçamento entre linhas
    function setLineHeight(height){
        let textLineHeight = document.querySelectorAll(".paragraph");
        for(index = 0; textLineHeight.length > index; index +=1){
            textLineHeight[index].style.lineHeight = height;
        }
        localStorage.setItem("lineHeight", height);
    }
    //função para alterar o font family
    function setFontFamily(family){
        let textFontFamily = document.querySelectorAll(".paragraph");
        for(index = 0; textFontFamily.length > index; index +=1){
            textFontFamily[index].style.fontFamily = family;
        }
        localStorage.setItem("fontFamily", family);
    }

    //funcionalidade aos botões criados no html
    //botão background-color
    let backgroundColorButtons = document.querySelectorAll("#background-color>button");
    for (index = 0; backgroundColorButtons.length > index; index+=1){
        backgroundColorButtons[index].addEventListener("click", function(event){
        setBackgroundColor(event.target.innerHTML);
        })
    }
    //botão font-color
    let fontColorButtons = document.querySelectorAll("#font-color>button");
    for (index = 0; fontColorButtons.length > index ; index+=1){
        fontColorButtons[index].addEventListener("click", function(event){
            setTextColor(event.target.innerHTML);
        })
    }

    //botão font-size
    let fontSizeButtons = document.querySelectorAll("#font-size>button");
    for(index = 0; fontSizeButtons.length > index ; index +=1){
        fontSizeButtons[index].addEventListener("click", function(event){
            setFont(event.target.innerHTML);
        })
    }
    
    //espaçamento entre linhas
    let lineHeightSize = document.querySelectorAll("#line-height>button")
    for(index = 0; lineHeightSize.length > index; index+=1){
        lineHeightSize[index].addEventListener("click", function(event){
            setLineHeight(event.target.innerHTML);
        })
    }
    // escolha da font-family
    let fontFamilyButtons = document.querySelectorAll("#font-family>button")
    for(index = 0; fontFamilyButtons.length > index; index+=1){
        fontFamilyButtons[index].addEventListener("click", function(event){
            setFontFamily(event.target.innerHTML);
        })
    }
}