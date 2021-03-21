const topLeft = document.querySelector(".top-left");
const topRight = document.querySelector(".top-right");
const bottomLeft = document.querySelector(".bottom-left");
const bottomRight = document.querySelector(".bottom-right");
const box = document.querySelector(".box");
const textArea = document.querySelector("textarea");
const cpyButton = document.querySelector("#cpyButton");

const valuesBorderRadius = {
    borderBottomLeftRadius : `${0}px`,
    borderBottomRightRadius : `${0}px`,
    borderTopLeftRadius : `${0}px`,
    borderTopRightRadius : `${0}px`
}


topLeft.addEventListener('input',function (e){
    box.style.borderTopLeftRadius = `${this.value}px`;
    valuesBorderRadius.borderTopLeftRadius = `${this.value}px`;
    showValues();
});
topRight.addEventListener('input',function (e){
    box.style.borderTopRightRadius = `${this.value}px`;
    valuesBorderRadius.borderTopRightRadius = `${this.value}px`;
    showValues();
})
bottomLeft.addEventListener('input',function(e){
    box.style.borderBottomLeftRadius = `${this.value}px`;
    valuesBorderRadius.borderBottomLeftRadius = `${this.value}px`;
    showValues();
})
bottomRight.addEventListener('input',function(e){
    box.style.borderBottomRightRadius = `${this.value}px`;
    valuesBorderRadius.borderBottomRightRadius = `${this.value}px`;
    showValues();
})

const showValues = () => {
    textArea.value = '';
    textArea.value = `${valuesBorderRadius.borderTopLeftRadius} ${valuesBorderRadius.borderTopRightRadius} ${valuesBorderRadius.borderBottomLeftRadius}  ${valuesBorderRadius.borderBottomRightRadius}` ;
}

cpyButton.addEventListener('click',()=>{
    textArea.select();
    textArea.setSelectionRange(0,99999);

    document.execCommand('copy');

    alert("Copied the text");
})