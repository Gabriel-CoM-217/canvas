const url = "https://api.mesitt.com/v3/images/deceased";
const url2 = "https://api.mesitt.com/v3/deceased";
const url3 = "http://www.video.mesitt.com/api/datos";
const tempid = window.location.pathname;
const id = tempid.substring(1);
let foto = new Image();
foto.crossOrigin = "Anonymous";
foto.src = url + window.location.pathname + ".jpg";
let fMen1 = new Array();
fMen1[0] = new Image();
fMen1[1] = new Image();
fMen1[2] = new Image();
let canvasV = null;
let canvasF = null;
let canvasT = null;
let ctx3 = null;
let ctx1 = null;
let ctx2 = null;
let video1 = null;
let video2 = null;
const mediaSource = "http://video.mesitt.com/public/media/1.mp4";
const mtemp2 = "http://video.mesitt.com/public/media/2.mp4";
const mtemp3 = "http://video.mesitt.com/public/media/3.mp4";
const mtemp4 = "http://video.mesitt.com/public/media/4.mp4";
const mtemp5 = "http://video.mesitt.com/public/media/5.mp4";
const mtemp6 = "http://video.mesitt.com/public/media/6.mp4";
const mtemp7 = "http://video.mesitt.com/public/media/7.mp4";
const mtemp8 = "http://video.mesitt.com/public/media/8.mp4";
const mtemp9 = "http://video.mesitt.com/public/media/9.mp4";
const mtemp10 = "http://video.mesitt.com/public/media/10.mp4";
let videoContainer = null;
let videoStream = null;
let mediaRecorder = null;
let chunks = [];
let estadoVideo = 0;
let scalef = 0.999;
let scalef2 = 0;
let fotx = 175;
let foty = 200;
let fotx2 = 0;
let foty2= 0;

const mensaje1_1 = 'Si damos la vida a sus recuerdos,';
const mensaje1_2 = 'nunca olvidaremos a nuestro ser querido';
const mensaje1_3 = 'En memoria de';
const mensaje1_4 = 'Condolencias ofresidas por:';
const mensaje1_5 = 'Velas ofresidas por:';
const mensaje1_6 = 'Abrazos ofresidas por:';
const mensaje1_7 = 'Flores enviadas por:';
const mensaje1_8 = 'Fotografias enviadas por:';
const mensaje1_9 = 'Servicios presentados por:';
/////////////////////////////////////////////////////
const mensaje1_10 = 'Todo el personal de este tanatorio';
const mensaje1_11 = 'queremos agredecerles la confianza';
const mensaje1_12 = 'depositada en nuetros servicios,';
const mensaje1_13 = 'acompañandoles en estos momentos';
const mensaje1_14 = 'tan dolorosos.';
let difunto_datos = null; 

const main = () =>{
  getInfo();
  drawFoto();  
  canvasF.toBlob(function (blob) {
    document.getElementById("myImg").src = URL.createObjectURL(blob);
    foto.src = URL.createObjectURL(blob);
  });
  drawText();
  canvasT.toBlob(function (blob) {
    document.createElement("tex1").src = URL.createObjectURL(blob);
    fMen1[0].src = URL.createObjectURL(blob);
  });
  drawTextCoMen();
  //document.getElementById("myImg").src = foto.src;
  canvasV = document.getElementById("canvasVideo");
  ctx2 = canvasV.getContext("2d");

  video1 = document.createElement("video"); // create a video element
  video1.src = mediaSource;

  video1.autoPlay = false;
  video1.loop = false;
  videoContainer = {
    video: video1,
    ready: false,
  };

  video1.oncanplay = readyToPlayVideo;
  video2 = document.querySelector("video2");

  videoStream = canvasV.captureStream(60);
  mediaRecorder = new MediaRecorder(videoStream);

  mediaRecorder.ondataavailable = function (e) {
    chunks.push(e.data);
  };
  mediaRecorder.onstop = function (e) {
    let blob = new Blob(chunks, { type: "video/mp4" });
    //chunks = [];
    let videoURL = URL.createObjectURL(blob);
    //video2.src = videoURL;
    //console.log(videoURL)
    document.getElementById("video2").src = videoURL;
    document.getElementById("salida").href = videoURL;
  };
  mediaRecorder.ondataavailable = function (e) {
    chunks.push(e.data);
  };
}
//////////////////////////////////////////////////////////////////////
const readyToPlayVideo = (event) => {
  videoContainer.ready = true;
  //requestAnimationFrame(updateCanvas);
}
/////////////////////////////////////////////////////////////////////////////////
const updateCanvas = () => {
  if (videoContainer !== undefined && videoContainer.ready) {
    ctx2.drawImage(videoContainer.video, 0, 0, 1280, 720);
    //console.log(videoContainer.video.currentTime);

    if(estadoVideo == 0){
      video1R();
    }
    else if(estadoVideo == 1){
      video2R();
    }
    else if(estadoVideo == 2){
      video3R();
    }
    else if(estadoVideo == 3){
      video4R();
    }
    else if(estadoVideo == 4){
      video5R();
    }
    else if(estadoVideo == 5){
      video6R();
    }
    else if(estadoVideo == 6){
      video7R();
    }
    else if(estadoVideo == 7){
      video8R();
    }
    else if(estadoVideo == 8){
      video9R();
    }
    else if(estadoVideo == 9){
      video10R();
    }
    
    videoContainer.video.onended = function () {
      //console.log(estadoVideo);
      //mediaRecorder.stop();
      estadoVideo = estadoVideo + 1;
      if (estadoVideo == 3) {
        mediaRecorder.stop();
        return;
      }
      actualizarVideo();
    };
  }
  requestAnimationFrame(updateCanvas);
}

/////////////////////////////////////////////////////////////////////////////////
const actualizarVideo = () => {
  switch (estadoVideo) {
    case 1:
      video1.src = mtemp2;
      video1.autoPlay = false;
      video1.loop = false;
      videoContainer = {
        video: video1,
        ready: true,
      };
      videoContainer.video.play();
      scalef=0.3;
      scalef2=0.3;
      fotx = 50;
      foty = 100;
      fotx2 = 0;
      foty2 = 0;
      break;
    case 2:
      video1.src = mtemp3;
      video1.autoPlay = false;
      video1.loop = false;
      videoContainer = {
        video: video1,
        ready: true,
      };
      videoContainer.video.play();
      scalef2=0.3;      
      fotx2 = 0;
      foty2 = 0;
      break;
    case 3:
      video1.src = mtemp4;
      video1.autoPlay = false;
      video1.loop = false;
      videoContainer = {
        video: video1,
        ready: true,
      };
      videoContainer.video.play();
      break;
    case 4:
      video1.src = mtemp5;
      video1.autoPlay = false;
      video1.loop = false;
      videoContainer = {
        video: video1,
        ready: true,
      };
      videoContainer.video.play();
      break;
    case 5:
      video1.src = mtemp6;
      video1.autoPlay = false;
      video1.loop = false;
      videoContainer = {
        video: video1,
        ready: true,
      };
      videoContainer.video.play();
      break;
    case 6:
      video1.src = mtemp7;
      video1.autoPlay = false;
      video1.loop = false;
      videoContainer = {
        video: video1,
        ready: true,
      };
      videoContainer.video.play();
      break;
    case 7:
      video1.src = mtemp8;
      video1.autoPlay = false;
      video1.loop = false;
      videoContainer = {
        video: video1,
        ready: true,
      };
      videoContainer.video.play();
      break;
    case 8:
      video1.src = mtemp9;
      video1.autoPlay = false;
      video1.loop = false;
      videoContainer = {
        video: video1,
        ready: true,
      };
      videoContainer.video.play();
      break;
    case 9:
      video1.src = mtemp10;
      video1.autoPlay = false;
      video1.loop = false;
      videoContainer = {
        video: video1,
        ready: true,
      };
      videoContainer.video.play();
      break;
    case 10:

      break;
  }
}
/////////////////////////////////////////////////////////////////////////
const video1R = () => {
  if (videoContainer.video.currentTime < 10) {
    ctx2.save();
    ctx2.translate(1280/2 - fotx,720/2 - foty);  
    ctx2.scale(scalef, scalef);
    ctx2.drawImage(foto, 0,0);
    ctx2.restore();      
    scalef = scalef - 0.0005;
    fotx = fotx - 0.08;
    foty = foty - 0.08;
  }

  if (videoContainer.video.currentTime >= 10) {
    
    ctx2.drawImage(fMen1[0], 1280 / 2- 400, 720 / 2-100);
    
  }
}
/////////////////////////////////////////////////////////////////////////////////
const video2R = () => {
  if (videoContainer.video.currentTime < 6) {
    ctx2.save(); 
    ctx2.translate(1280/2 - fotx,720/2 - foty);   
    ctx2.scale(scalef, scalef);
    ctx2.drawImage(foto,0,0);    
    ctx2.restore();      
    scalef = scalef + 0.001;
    fotx = fotx + 0.2;
    foty = foty + 0.2;
    ctx2.drawImage(fMen1[1], 1280 / 2- 400, 720 / 2+200);
  }

  if (videoContainer.video.currentTime >= 6) {    
    ctx2.save(); 
    ctx2.translate(100 - fotx2,100 - foty2);   
    ctx2.scale(scalef2, scalef2);
    ctx2.drawImage(foto,0,0);    
    ctx2.restore();      
    scalef2 = scalef2 + 0.0005;
    fotx2 = fotx2 + 0.1;
    foty2 = foty2 + 0.1;    
    ctx2.drawImage(fMen1[1], 1280 / 2- 400, 720 / 2-410);
  }
}
/////////////////////////////////////////////////////////////////////////////////
const video3R = () => {  
    ctx2.save(); 
    ctx2.scale(scalef2, scalef2);
    ctx2.drawImage(foto,50,50);   
    ctx2.restore();   
    ctx2.drawImage(fMen1[2], 1280 / 2-50, 720 / 2-410);   
}
/////////////////////////////////////////////////////////////////////////////////
const video4R = () => {  
  ctx2.save(); 
  ctx2.scale(scalef2, scalef2);
  ctx2.drawImage(foto,50,50);   
  ctx2.restore();      
}
/////////////////////////////////////////////////////////////////////////////////
const video5R = () => {  
  ctx2.save(); 
  ctx2.scale(scalef2, scalef2);
  ctx2.drawImage(foto,50,50);   
  ctx2.restore();      
}
/////////////////////////////////////////////////////////////////////////////////
const video6R = () =>{  
  ctx2.save(); 
  ctx2.scale(scalef2, scalef2);
  ctx2.drawImage(foto,50,50);   
  ctx2.restore();      
}
/////////////////////////////////////////////////////////////////////////////////
const  video7R = () =>{  
  ctx2.save(); 
  ctx2.scale(scalef2, scalef2);
  ctx2.drawImage(foto,50,50);   
  ctx2.restore();      
}
/////////////////////////////////////////////////////////////////////////////////
const video8R = () => {  
  ctx2.save(); 
  ctx2.scale(scalef2, scalef2);
  ctx2.drawImage(foto,50,50);   
  ctx2.restore();      
}
/////////////////////////////////////////////////////////////////////////////////
const video9R = () =>{  
  ctx2.save(); 
  ctx2.scale(scalef2, scalef2);
  ctx2.drawImage(foto,50,50);   
  ctx2.restore();      
}
/////////////////////////////////////////////////////////////////////////////////
const video10R = () => {  
  if (videoContainer.video.currentTime > 10) {
  ctx2.save(); 
  ctx2.scale(scalef2, scalef2);
  ctx2.drawImage(foto,350,100);   
  ctx2.restore();    
  }  
}
/////////////////////////////////////////////////////////////////////////////////
const render = () => {
  if (videoContainer !== undefined && videoContainer.ready) {
    if (videoContainer.video.paused) {
      videoContainer.video.play();
      mediaRecorder.start();
      requestAnimationFrame(updateCanvas);
    } else {
      videoContainer.video.pause();
    }
  }
}
//////////////////////////////////////////////////////////////////////
const drawFoto = () => {
  canvasF = document.createElement("canvas");
  canvasF.width = 350;
  canvasF.height = 400;
  ctx1 = canvasF.getContext("2d");
  ctx1.globalAlpha = 0.4;
  ctx1.save();
  ctx1.strokeStyle = "#0000";
  let centroX = 350 / 2,
    centroY = 400 / 2,
    radioX = 150,
    radioY = 200,
    rot = 0,
    ap = 0,
    af = 2 * Math.PI,
    cr = true;
  ctx1.ellipse(centroX, centroY, radioX, radioY, rot, ap, af, cr);
  ctx1.stroke();
  ctx1.clip();

  ctx1.drawImage(foto, 0, 0, 350, 400);
  ctx1.restore();

}

///////////////////////////////////////////////////
const drawText = () => {
  canvasT = document.createElement("canvas");
  canvasT.width = 800;
  canvasT.height = 200;
  ctx3 = canvasT.getContext("2d");
  ctx3.globalAlpha = 0.6;
  ctx3.font = "30px Arial";
  ctx3.fillStyle = "white";
  ctx3.textAlign = "center";
  ctx3.fillText(mensaje1_1,canvasT.width/2,canvasT.height/3);
  ctx3.fillText(mensaje1_2,canvasT.width/2,(canvasT.height/3)*2);
}

const drawTextDifunto = () => {  
  canvasT = document.createElement("canvas");
  canvasT.width = 800;
  canvasT.height = 200;
  ctx3 = canvasT.getContext("2d");
  ctx3.globalAlpha = 0.6;
  ctx3.font = "50px Arial";
  ctx3.fillStyle = "white";
  ctx3.textAlign = "center";
  ctx3.fillText(mensaje1_3,canvasT.width/2,canvasT.height/4);
  ctx3.fillText(difunto_datos.nombre + " " + difunto_datos.apellidos,canvasT.width/2,(canvasT.height/4)*2);
  ctx3.fillText(difunto_datos.fecha_nacimiento.substring(4,0) + "-" + difunto_datos.fecha_defuncion.substring(4,0),canvasT.width/2,(canvasT.height/4)*3);
}

const drawTextCoMen = () => {  
  canvasT = document.createElement("canvas");
  canvasT.width = 800;
  canvasT.height = 200;
  ctx3 = canvasT.getContext("2d");
  ctx3.globalAlpha = 0.6;
  ctx3.font = "40px Arial";
  ctx3.fillStyle = "#0B2B7A";
  ctx3.textAlign = "center";
  ctx3.fillText(mensaje1_4,canvasT.width/2,canvasT.height/2); 
  canvasT.toBlob(function (blob) {
    document.createElement("tex2").src = URL.createObjectURL(blob);
    fMen1[2].src = URL.createObjectURL(blob);
  });
}
/////////////////////////////////////////////////////////////////////////////////
const getInfo = () => {  
  axios.post(url3, {    
      id: id    
  })
  .then(response => {
    difunto_datos = response.data[0];
    drawTextDifunto();
    canvasT.toBlob(function (blob) {
    document.createElement("text3").src = URL.createObjectURL(blob);
    fMen1[1].src = URL.createObjectURL(blob);
    document.getElementById("nombreD").innerHTML = difunto_datos.nombre;   
    document.getElementById("apellidoD").innerHTML = difunto_datos.apellidos;  
  });   
 })
  .catch(error => console.error(error));
 };
