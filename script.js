 
 const firebaseConfig = {
    apiKey: "AIzaSyCXMTqM0sngRi8vRNflBJhf7tyLyA_a9wQ",
    authDomain: "organi-3feb1.firebaseapp.com",
    projectId: "organi-3feb1",
    storageBucket: "organi-3feb1.appspot.com",
    messagingSenderId: "264511156631",
    appId: "1:264511156631:web:6748fcda55ef20a40754d2"
  };

  firebase.initializeApp(firebaseConfig);
 
  const db = firebase.firestore();


let mercado = document.querySelector('#mercadoLivre')
let shopee = document.querySelector('#shopee')
let amazom = document.querySelector('#amazom')
let b2w = document.querySelector('#b2w')
let drive = document.querySelector('#drive')
let data = document.querySelector('#inputData')

mercado.addEventListener("submit",(event) => {
  event.preventDefault();
  let impressosM = document.querySelector('#impressosM')
  let horarioImpressaoM = document.querySelector('#horarioImpressaoM')
  let horarioConferenciaM = document.querySelector('#horarioConferenciaM')
  let conferidosM = document.querySelector('#conferidosM')
  let embalouM = document.querySelector('#embalouM')
  let nembalouM = document.querySelector('#nembalouM')
  let observacaoM = document.querySelector('#observacaoM')

  db.collection("mercadoLivre").add({
   data: data.value,
   impressos: impressosM.value,
   horario_da_impressao: horarioImpressaoM.value,
   horario_da_conferencia: horarioConferenciaM.value,
   numero_de_pedidos_conferidos: conferidosM.value,
   quem_embalou: embalouM.value,
   numero_de_pedidos_embalados: nembalouM.value,
   obsevacao: observacaoM.value
})

impressosM.value = " ";
horarioImpressaoM.value = " ";
horarioConferenciaM.value = " ";
conferidosM.value = " ";
embalouM.value = " ";
nembalouM.value = " ";
observacaoM.value = " ";

  
})

shopee.addEventListener("submit", (event) => {
  event.preventDefault();
  let impressosS = document.querySelector('#impressosS')
  let horarioImpressaoS = document.querySelector('#horarioImpressaoS')
  let horarioConferenciaS = document.querySelector('#horarioConferenciaS')
  let conferidosS = document.querySelector('#conferidosS')
  let embalouS = document.querySelector('#embalouS')
  let nembalouS = document.querySelector('#nembalouS')
  let observacaoS = document.querySelector('#observacaoS')

  db.collection('shopee').add({
    data: data.value,
    impressos: impressosS.value,
    horario_da_impressao: horarioImpressaoS.value,
    horario_da_conferencia: horarioConferenciaS.value,
    numero_de_pedidos_conferidos: conferidosS.value,
    quem_embalou: embalouS.value,
    numero_de_pedidos_embalados: nembalouS.value,
    obsevacao: observacaoS.value
    
  })

  impressosS.value = " ";
  horarioImpressaoS.value = " ";
  horarioConferenciaS.value = " ";
  conferidosS.value = " ";
  embalouS.value = " ";
  nembalouS.value = " ";
  observacaoS.value = " ";
})

amazom.addEventListener("submit", (event) => {
  event.preventDefault();
  let impressosA = document.querySelector('#impressosA')
  let horarioImpressaoA = document.querySelector('#horarioImpressaoA')
  let horarioConferenciaA = document.querySelector('#horarioConferenciaA')
  let conferidosA = document.querySelector('#conferidosA')
  let embalouA = document.querySelector('#embalouA')
  let nembalouA = document.querySelector('#nembalouA')
  let observacaoA = document.querySelector('#observacaoA')

  db.collection('amazon').add({
    data: data.value,
    impressos: impressosA.value,
    horario_da_impressao: horarioImpressaoA.value,
    horario_da_conferencia: horarioConferenciaA.value,
    numero_de_pedidos_conferidos: conferidosA.value,
    quem_embalou: embalouA.value,
    numero_de_pedidos_embalados: nembalouA.value,
    obsevacao: observacaoA.value
    
  })

  impressosA.value = " ";
  horarioImpressaoA.value = " ";
  horarioConferenciaA.value = " ";
  conferidosA.value = " ";
  embalouA.value = " ";
  nembalouA.value = " ";
  observacaoA.value = " ";
})

b2w.addEventListener("submit", (event) => {
  event.preventDefault();
  let impressosB = document.querySelector('#impressosB')
  let horarioImpressaoB = document.querySelector('#horarioImpressaoB')
  let horarioConferenciaB = document.querySelector('#horarioConferenciaB')
  let conferidosB = document.querySelector('#conferidosB')
  let embalouB = document.querySelector('#embalouB')
  let nembalouB = document.querySelector('#nembalouB')
  let observacaoB = document.querySelector('#observacaoB')

  db.collection('b2w').add({
    data: data.value,
    impressos: impressosB.value,
    horario_da_impressao: horarioImpressaoB.value,
    horario_da_conferencia: horarioConferenciaB.value,
    numero_de_pedidos_conferidos: conferidosB.value,
    quem_embalou: embalouB.value,
    numero_de_pedidos_embalados: nembalouB.value,
    obsevacao: observacaoB.value
  })

  impressosB.value = " ";
  horarioImpressaoB.value = " ";
  horarioConferenciaB.value = " ";
  conferidosB.value = " ";
  embalouB.value = " ";
  nembalouB.value = " ";
  observacaoB.value = " ";
  
})

drive.addEventListener("submit", (event) => {
  event.preventDefault();
  let impressosD = document.querySelector('#impressosD')
  let horarioImpressaoD = document.querySelector('#horarioImpressaoD')
  let horarioConferenciaD = document.querySelector('#horarioConferenciaD')
  let conferidosD = document.querySelector('#conferidosD')
  let embalouD = document.querySelector('#embalouD')
  let nembalouD = document.querySelector('#nembalouD')
  let observacaoD = document.querySelector('#observacaoD')

  db.collection('driveimports').add({
    data: data.value,
    impressos: impressosD.value,
    horario_da_impressao: horarioImpressaoD.value,
    horario_da_conferencia: horarioConferenciaD.value,
    numero_de_pedidos_conferidos: conferidosD.value,
    quem_embalou: embalouD.value,
    numero_de_pedidos_embalados: nembalouD.value,
    obsevacao: observacaoD.value
  })

  impressosD.value = " ";
  horarioImpressaoD.value = " ";
  horarioConferenciaD.value = " ";
  conferidosD.value = " ";
  embalouD.value = " ";
  nembalouD.value = " ";
  observacaoD.value = " ";
  
})

