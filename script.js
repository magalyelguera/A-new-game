const buttonA = document.getElementById ("startA");
const buttonB = document.getElementById ("startB");
const buttonC = document.getElementById ("startC");
const buttonD = document.getElementById ("startD");



buttonC.addEventListener('keypress', (e) => {
  if(e.key=="c"){
    const message1 = `CONGRATULATIONS!`;
    return buttonC.innerText = message1;
  }
  else (e.key!=="c");{
    const message2 = `ERROR! USASTE UNA TECLA INCORRECTA`;
    return buttonC.innerHTML = message2;
  };
});
 
buttonA.addEventListener('keypress',(e) =>{
  if(e.key=="a"){
const  messageA = `SIGUE INTENTANDO!`;
return buttonA.innerHTML = messageA;
  }
  else(e.key!=="a");{
    const messageB = `ERROR! USASTE UNA TECLA INCORRECTA`;
    return buttonA.innerHTML=messageB;
  }
});
 
buttonB.addEventListener('keypress',(e) =>{
  if(e.key=="b"){
const  messageX = `SIGUE INTENTANDO!`;
return buttonB.innerHTML = messageX;
  }
  else(e.key!=="b");{
    const messageZ = `ERROR! USASTE UNA TECLA INCORRECTA`;
    return buttonB.innerHTML=messageZ;
  }
});

buttonD.addEventListener('keypress',(e) =>{
  if(e.key=="d"){
const  messageS = `SIGUE INTENTANDO!`;
return buttonD.innerHTML = messageS;
  }
  else(e.key!=="d");{
    const messageW = `ERROR! USASTE UNA TECLA INCORRECTA`;
    return buttonD.innerHTML=messageW;
  }
});