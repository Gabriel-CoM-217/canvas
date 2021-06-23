const url = "https://api.mesitt.com/v3/images/deceased";
const url2 = "https://api.mesitt.com/v3/deceased";
const url3 = "http://www.video.mesitt.com/api/info";
const url4 = "https://api.mesitt.com/v3/images";
const url5 = "http://www.video.mesitt.com/api/servicios";
const url6 = "http://www.video.mesitt.com/api/participantes";
const url7 = "http://www.video.mesitt.com/api/condolencias";
const tempid = window.location.pathname;
const id_difunto = tempid.substring(1);
let foto = new Image();
foto.crossOrigin = "Anonymous";
foto.src = url + window.location.pathname + ".jpg";
let fMen1 = new Array();
fMen1[0] = new Image();
fMen1[1] = new Image();
fMen1[2] = new Image();
fMen1[3] = new Image();
fMen1[4] = new Image();
fMen1[5] = new Image();
fMen1[6] = new Image();
fMen1[7] = new Image();
fMen1[8] = new Image();
let canvasV = null;
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
let foty2 = 0;

const mensaje1_1 = "Si damos la vida a sus recuerdos,";
const mensaje1_2 = "nunca olvidaremos a nuestro ser querido";
const mensaje1_3 = "En memoria de";
const mensaje1_4 = "Personas que participaron en el velatorio virtual";
const mensaje1_5 = "Condolencias ofrecidas por:";
const mensaje1_6 = "Velas ofresidas por:";
const mensaje1_7 = "Abrazos ofresidas por:";
const mensaje1_8 = "Flores enviadas por:";
const mensaje1_9 = "Fotografias enviadas por:";
const mensaje1_10 = "Servicios presentados por:";
/////////////////////////////////////////////////////
const mensaje1_11 = "Todo el personal de este tanatorio";
const mensaje1_12 = "queremos agredecerles la confianza";
const mensaje1_13 = "depositada en nuetros servicios,";
const mensaje1_14 = "acompañandoles en estos momentos";
const mensaje1_15 = "tan dolorosos.";

let difunto_velas = null;

let velas = new Array();

let vel;

let participantesF = new Array();
let participantesNum = 0;
let participantesEstado = 0;
let part_time = 24;

let condolenciasT = new Array();
let condolenciasNum = 0;
let condolenciasEstado = 0;
let condolencia_time = 4;


const main = () => {
  getInfo();
  getCondolencias();
  getVelas();
  drawFoto();
  drawText();

  drawTextCoMen(mensaje1_4, 2, "text3", "ffffff");
  drawTextCoMen(mensaje1_5, 3, "text4", "1c285d");
  drawTextCoMen(mensaje1_6, 4, "text5", "ffffff");
  drawTextCoMen(mensaje1_7, 5, "text6", "ffffff");
  //document.getElementById("myImg").src = foto.src;
  canvasV = document.getElementById("canvasVideo");
  ctx2 = canvasV.getContext("2d");

  video1 = document.createElement("video");
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
};
//////////////////////////////////////////////////////////////////////
const readyToPlayVideo = (event) => {
  videoContainer.ready = true;
  //requestAnimationFrame(updateCanvas);
};
/////////////////////////////////////////////////////////////////////////////////
const updateCanvas = () => {
  if (videoContainer !== undefined && videoContainer.ready) {
    ctx2.drawImage(videoContainer.video, 0, 0, 1280, 720);
    console.log(videoContainer.video.currentTime);

    if (estadoVideo == 0) {
      video1R();
    } else if (estadoVideo == 1) {
      video2R();
    } else if (estadoVideo == 2) {
      video3R();
    } else if (estadoVideo == 3) {
      video4R();
    } else if (estadoVideo == 4) {
      video5R();
    } else if (estadoVideo == 5) {
      video6R();
    } else if (estadoVideo == 6) {
      video7R();
    } else if (estadoVideo == 7) {
      video8R();
    } else if (estadoVideo == 8) {
      video9R();
    } else if (estadoVideo == 9) {
      video10R();
    }

    videoContainer.video.onended = function () {
      //console.log(estadoVideo);
      //mediaRecorder.stop();
      estadoVideo = estadoVideo + 1;
      if (estadoVideo == 4) {
        mediaRecorder.stop();
        return;
      }
      actualizarVideo();
    };
  }
  requestAnimationFrame(updateCanvas);
};

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
      scalef = 0.3;
      scalef2 = 0.3;
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
      scalef2 = 0.3;
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
};
/////////////////////////////////////////////////////////////////////////
const video1R = () => {     
  if (videoContainer.video.currentTime < 10) {
    ctx2.save();
    ctx2.translate(1280 / 2 - fotx, 720 / 2 - foty);
    ctx2.scale(scalef, scalef);
    ctx2.drawImage(foto, 0, 0);
    ctx2.restore();
    scalef = scalef - 0.0005;
    fotx = fotx - 0.08;
    foty = foty - 0.08;
  }

  if (videoContainer.video.currentTime >= 10) {
    ctx2.drawImage(fMen1[0], 1280 / 2 - 400, 720 / 2 - 100);    
  }
};
/////////////////////////////////////////////////////////////////////////////////
const video2R = () => {
  if (videoContainer.video.currentTime < 6) {
    ctx2.save();
    ctx2.translate(1280 / 2 - fotx, 720 / 2 - foty);
    ctx2.scale(scalef, scalef);
    ctx2.drawImage(foto, 0, 0);
    ctx2.restore();
    scalef = scalef + 0.001;
    fotx = fotx + 0.2;
    foty = foty + 0.2;
    ctx2.drawImage(fMen1[1], 1280 / 2 - 400, 720 / 2 + 200);
  }

  if (videoContainer.video.currentTime >= 6) {
    ctx2.save();
    ctx2.translate(100 - fotx2, 100 - foty2);
    ctx2.scale(scalef2, scalef2);
    ctx2.drawImage(foto, 0, 0);
    ctx2.restore();
    scalef2 = scalef2 + 0.0005;
    fotx2 = fotx2 + 0.1;
    foty2 = foty2 + 0.1;    
  }
  if (
    videoContainer.video.currentTime >= 6 &&
    videoContainer.video.currentTime <= 21
  ) {
    ctx2.drawImage(fMen1[1], 1280 / 2 - 300, 720 / 2 - 410);    
  }
  //--------------//
  if (
    videoContainer.video.currentTime >= 6 &&
    videoContainer.video.currentTime <= 11
  ) {
    ctx2.drawImage(fMen1[6], 1280 / 2 - 350, 720 / 2 + 200);
  }
  if (
    videoContainer.video.currentTime >= 11 &&
    videoContainer.video.currentTime <= 16
  ) {
    ctx2.drawImage(fMen1[7], 1280 / 2 - 350, 720 / 2 + 200);
  }
  if (
    videoContainer.video.currentTime >= 16 &&
    videoContainer.video.currentTime <= 21
  ) {
    ctx2.drawImage(fMen1[8], 1280 / 2 - 600, 720 / 2 + 200);
  }
  ///-----////////
  if (videoContainer.video.currentTime >= 21) {
    ctx2.drawImage(fMen1[2], 1280 / 2 - 300, 720 / 2 - 410);
  }
  if (videoContainer.video.currentTime >= 21 && videoContainer.video.currentTime <82.944 ) {
    ctx2.drawImage(participantesF[participantesEstado], 1280 / 2 - 350, 200);
    if (
      videoContainer.video.currentTime > part_time &&
      participantesEstado < participantesNum -1
    )
    {      
      participantesEstado += 1;
      part_time += 3;
    }    
    if (participantesEstado == participantesNum -1) {      
      videoContainer.video.currentTime = 82.944;
    }
  }  
};
/////////////////////////////////////////////////////////////////////////////////
const video3R = () => {
  ctx2.save();
  ctx2.scale(scalef2, scalef2);
  ctx2.drawImage(foto, 50, 50);
  ctx2.restore();
  ctx2.drawImage(fMen1[3], 1280 / 2 - 50, 720 / 2 - 410);

  if (videoContainer.video.currentTime >= 1) {
    ctx2.drawImage(condolenciasT[condolenciasEstado], 0, 100);
    if (
      videoContainer.video.currentTime > condolencia_time &&
      condolenciasEstado < condolenciasNum -1
    )
    {      
      condolenciasEstado += 1;
      condolencia_time += 3;
    }
    if (condolenciasEstado == condolenciasNum -1) {
      console.log("terminado")
      videoContainer.video.currentTime = 94;
    }
  }  
};
/////////////////////////////////////////////////////////////////////////////////
const video4R = () => {
  ctx2.save();
  ctx2.scale(scalef2, scalef2);
  ctx2.drawImage(foto, 50, 50);
  ctx2.restore();
  ctx2.drawImage(fMen1[4], 1280 / 2, 720 / 2 + 250);

  ctx2.save();
  ctx2.translate(1280 / 2, 720 / 2);
  ctx2.drawImage(vel.image, 0, 0);
  ctx2.restore();
};
/////////////////////////////////////////////////////////////////////////////////
const video5R = () => {
  ctx2.save();
  ctx2.scale(scalef2, scalef2);
  ctx2.drawImage(foto, 50, 50);
  ctx2.restore();
};
/////////////////////////////////////////////////////////////////////////////////
const video6R = () => {
  ctx2.save();
  ctx2.scale(scalef2, scalef2);
  ctx2.drawImage(foto, 50, 50);
  ctx2.restore();
};
/////////////////////////////////////////////////////////////////////////////////
const video7R = () => {
  ctx2.save();
  ctx2.scale(scalef2, scalef2);
  ctx2.drawImage(foto, 50, 50);
  ctx2.restore();
};
/////////////////////////////////////////////////////////////////////////////////
const video8R = () => {
  ctx2.save();
  ctx2.scale(scalef2, scalef2);
  ctx2.drawImage(foto, 50, 50);
  ctx2.restore();
};
/////////////////////////////////////////////////////////////////////////////////
const video9R = () => {
  ctx2.save();
  ctx2.scale(scalef2, scalef2);
  ctx2.drawImage(foto, 50, 50);
  ctx2.restore();
};
/////////////////////////////////////////////////////////////////////////////////
const video10R = () => {
  if (videoContainer.video.currentTime > 10) {
    ctx2.save();
    ctx2.scale(scalef2, scalef2);
    ctx2.drawImage(foto, 350, 100);
    ctx2.restore();
  }
};
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
};
//////////////////////////////////////////////////////////////////////
const drawFoto = () => {
  let canvasF = document.createElement("canvas");
  canvasF.width = 350;
  canvasF.height = 400;
  let ctx1 = canvasF.getContext("2d");
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
  canvasF.toBlob(function (blob) {
    document.getElementById("myImg").src = URL.createObjectURL(blob);
    foto.src = URL.createObjectURL(blob);
  });
};

///////////////////////////////////////////////////
const drawText = () => {
  canvasT = document.createElement("canvas");
  canvasT.width = 800;
  canvasT.height = 200;
  ctx3 = canvasT.getContext("2d");
  ctx3.globalAlpha = 0.6;
  ctx3.font = "italic 40px Times New Roman";
  ctx3.fillStyle = "white";
  ctx3.textAlign = "center";
  ctx3.fillText(mensaje1_1, canvasT.width / 2, canvasT.height / 3);
  ctx3.fillText(mensaje1_2, canvasT.width / 2, (canvasT.height / 3) * 2);
  canvasT.toBlob(function (blob) {
    document.createElement("tex1").src = URL.createObjectURL(blob);
    fMen1[0].src = URL.createObjectURL(blob);
  });
};

const drawTextDifunto = (text) => {
  canvasT = document.createElement("canvas");
  canvasT.width = 800;
  canvasT.height = 200;
  ctx3 = canvasT.getContext("2d");
  ctx3.globalAlpha = 0.8;
  ctx3.font = "italic 50px Times New Roman";
  ctx3.fillStyle = "white";
  ctx3.textAlign = "center";
  ctx3.fillText(mensaje1_3, canvasT.width / 2, canvasT.height / 4);
  ctx3.fillText(
    text.nombre + " " + text.apellidos,
    canvasT.width / 2,
    (canvasT.height / 4) * 2
  );
  ctx3.fillText(
    text.fecha_nacimiento.substring(4, 0) +
      "-" +
      text.fecha_defuncion.substring(4, 0),
    canvasT.width / 2,
    (canvasT.height / 4) * 3
  );
  canvasT.toBlob(function (blob) {
    document.createElement("text2").src = URL.createObjectURL(blob);
    fMen1[1].src = URL.createObjectURL(blob);
    document.getElementById("nombreD").innerHTML = text.nombre;
    document.getElementById("apellidoD").innerHTML = text.apellidos;
  });
};

const drawTextDifunto2 = (text, i, id_A, text2, x) => {
  canvasT = document.createElement("canvas");
  canvasT.width = x;
  canvasT.height = 200;
  ctx3 = canvasT.getContext("2d");
  ctx3.globalAlpha = 0.8;
  ctx3.font = "italic 50px Times New Roman";
  ctx3.fillStyle = "white";
  ctx3.textAlign = "center";
  ctx3.fillText(text, canvasT.width / 2, canvasT.height / 3);
  ctx3.fillText(text2, canvasT.width / 2, (canvasT.height / 3) * 2);
  canvasT.toBlob(function (blob) {
    document.createElement(id_A).src = URL.createObjectURL(blob);
    fMen1[i].src = URL.createObjectURL(blob);
  });
};

const drawTextCoMen = (text, i, id_A, color) => {
  let canvasT = document.createElement("canvas");
  canvasT.width = 800;
  canvasT.height = 200;
  let ctx3 = canvasT.getContext("2d");
  ctx3.globalAlpha = 0.8;
  ctx3.font = "italic 40px Times New Roman";
  ctx3.fillStyle = "#" + color;
  ctx3.textAlign = "center";
  ctx3.fillText(text, canvasT.width / 2, canvasT.height / 2);
  canvasT.toBlob(function (blob) {
    document.createElement(id_A).src = URL.createObjectURL(blob);
    fMen1[i].src = URL.createObjectURL(blob);
  });
};

const drawTextParticipantes = (a, b, c, d, e, f, num) => {  
  let canvasT = document.createElement("canvas");
  canvasT.width = 800;
  canvasT.height = 400;
  let ctx3 = canvasT.getContext("2d");
  ctx3.globalAlpha = 0.8;
  ctx3.font = "italic 40px Times New Roman";
  ctx3.fillStyle = "white";
  ctx3.textAlign = "center";
  ctx3.fillText(a, canvasT.width / 2, canvasT.height / 7);
  ctx3.fillText(b, canvasT.width / 2, (canvasT.height / 7) * 2);
  ctx3.fillText(c, canvasT.width / 2, (canvasT.height / 7) * 3);
  ctx3.fillText(d, canvasT.width / 2, (canvasT.height / 7) * 4);
  ctx3.fillText(e, canvasT.width / 2, (canvasT.height / 7) * 5);
  ctx3.fillText(f, canvasT.width / 2, (canvasT.height / 7) * 6);

  participantesF[num] = new Image();
  canvasT.toBlob(function (blob) {
    document.createElement("participantes_" + num).src =
      URL.createObjectURL(blob);
    participantesF[num].src = URL.createObjectURL(blob);
  });
};

const drawTextCondolencias = (a, b, num) => {  
  let canvasT = document.createElement("canvas");
  canvasT.width = 1280;
  canvasT.height = 600;
  let ctx3 = canvasT.getContext("2d");
  ctx3.globalAlpha = 0.8;
  ctx3.font = "italic 35px Times New Roman";
  ctx3.fillStyle = "#1c285d";
  ctx3.textAlign = "center";
  ctx3.fillText(a, canvasT.width / 2, canvasT.height / 3);
  ctx3.fillText(b, canvasT.width / 2, (canvasT.height / 3) * 2);


  condolenciasT[num] = new Image();
  canvasT.toBlob(function (blob) {
    document.createElement("condolencias_" + num).src =
      URL.createObjectURL(blob);
    condolenciasT[num].src = URL.createObjectURL(blob);
  });
};
/////////////////////////////////////////////////////////////////////////////////
const getInfo = () => {
  axios
    .post(url3, {
      id: id_difunto,
    })
    .then((response) => {
      const difunto_datos = response.data[0];
      drawTextDifunto(difunto_datos);
      getServicios(difunto_datos.sala_entrada, difunto_datos.sala_salida);
    })
    .catch((error) => console.error(error));
};

const getServicios = (entrada, salida) => {
  axios
    .post(url5, {
      id: id_difunto,
    })
    .then((response) => {
      const serv = response.data;
      const velatorio = serv.find((serv) => serv.tipo === "Velatorio");
      const ceremonia = serv.find((serv) => serv.tipo === "Ceremonia");
      const entierro = serv.find((serv) => serv.tipo === "Entierro");
      drawTextDifunto2(
        velatorio.descripcion,
        6,
        "text7",
        "El día " + entrada.substring(10, 0),
        800
      );
      drawTextDifunto2(
        ceremonia.descripcion,
        7,
        "text8",
        "día " +
          salida.substring(10, 0) +
          " a las " +
          salida.substring(16, 11) +
          " horas",
        800
      );
      drawTextDifunto2("Sepultura:", 8, "text9", entierro.descripcion, 1200);
      getParticipantes();
    })
    .catch((error) => console.error(error));
};
const getParticipantes = () => {
  axios
    .post(url6, {
      id: id_difunto,
    })
    .then((response) => {
      const parti = response.data;
      let k = 0;
      for (let i = 0; i < parti.length; i += 6) {
        drawTextParticipantes(
          parti[i].nombre,
          parti[i+1].nombre,
          parti[i+2].nombre,
          parti[i+3].nombre,
          parti[i+4].nombre,
          parti[i+5].nombre,
          k
        );
        k++;
      }
      participantesNum = participantesF.length;
    })
    .catch((error) => console.error(error));
};
const getCondolencias = () => {
  axios
    .post(url7, {
      id: id_difunto,
    })
    .then((response) => {
      const condolencias = response.data;
      //console.log(condolencias)
      let k = 0;
      for (let i = 0; i < condolencias.length; i++) {
        drawTextCondolencias(
          condolencias[i].mensaje,
          condolencias[i].envia,
          k
        );
        k++;
      }
      condolenciasNum = condolenciasT.length;
    })
    .catch((error) => console.error(error));
};

const getVelas = () => {
  axios.get(url2 + window.location.pathname + "/candles").then((response) => {
    difunto_velas = response.data.data;
    for (let i = 0; i < difunto_velas.length; i++) {
      velas[i] = crossOrigin = "Anonymous";
      velas[i] = new Image();
      velas[i].src = url4 + "/candle/" + difunto_velas[i].id + ".jpg";
    }
    vel = GIF();
    vel.load(url4 + "/candle/" + difunto_velas[0].id + ".jpg");
  });
  //.catch(error => console.error(error));
};

//***************************************************************************************//

const GIF = function () {
  var timerID;
  var st;
  var interlaceOffsets = [0, 4, 2, 1];
  var interlaceSteps = [8, 8, 4, 2];
  var interlacedBufSize;
  var deinterlaceBuf;
  var pixelBufSize;
  var pixelBuf;
  const GIF_FILE = {
    GCExt: 0xf9,
    COMMENT: 0xfe,
    APPExt: 0xff,
    UNKNOWN: 0x01,
    IMAGE: 0x2c,
    EOF: 59,
    EXT: 0x21,
  };
  var Stream = function (data) {
    this.data = new Uint8ClampedArray(data);
    this.pos = 0;
    var len = this.data.length;
    this.getString = function (count) {
      var s = "";
      while (count--) {
        s += String.fromCharCode(this.data[this.pos++]);
      }
      return s;
    };
    this.readSubBlocks = function () {
      var size,
        count,
        data = "";
      do {
        count = size = this.data[this.pos++];
        while (count--) {
          data += String.fromCharCode(this.data[this.pos++]);
        }
      } while (size !== 0 && this.pos < len);
      return data;
    };
    this.readSubBlocksB = function () {
      var size,
        count,
        data = [];
      do {
        count = size = this.data[this.pos++];
        while (count--) {
          data.push(this.data[this.pos++]);
        }
      } while (size !== 0 && this.pos < len);
      return data;
    };
  };
  function lzwDecode(minSize, data) {
    var i, pixelPos, pos, clear, eod, size, done, dic, code, last, d, len;
    pos = pixelPos = 0;
    dic = [];
    clear = 1 << minSize;
    eod = clear + 1;
    size = minSize + 1;
    done = false;
    while (!done) {
      last = code;
      code = 0;
      for (i = 0; i < size; i++) {
        if (data[pos >> 3] & (1 << (pos & 7))) {
          code |= 1 << i;
        }
        pos++;
      }
      if (code === clear) {
        dic = [];
        size = minSize + 1;
        for (i = 0; i < clear; i++) {
          dic[i] = [i];
        }
        dic[clear] = [];
        dic[eod] = null;
      } else {
        if (code === eod) {
          done = true;
          return;
        }
        if (code >= dic.length) {
          dic.push(dic[last].concat(dic[last][0]));
        } else if (last !== clear) {
          dic.push(dic[last].concat(dic[code][0]));
        }
        d = dic[code];
        len = d.length;
        for (i = 0; i < len; i++) {
          pixelBuf[pixelPos++] = d[i];
        }
        if (dic.length === 1 << size && size < 12) {
          size++;
        }
      }
    }
  }
  function parseColourTable(count) {
    var colours = [];
    for (var i = 0; i < count; i++) {
      colours.push([st.data[st.pos++], st.data[st.pos++], st.data[st.pos++]]);
    }
    return colours;
  }
  function parse() {
    var bitField;
    st.pos += 6;
    gif.width = st.data[st.pos++] + (st.data[st.pos++] << 8);
    gif.height = st.data[st.pos++] + (st.data[st.pos++] << 8);
    bitField = st.data[st.pos++];
    gif.colorRes = (bitField & 0b1110000) >> 4;
    gif.globalColourCount = 1 << ((bitField & 0b111) + 1);
    gif.bgColourIndex = st.data[st.pos++];
    st.pos++;
    if (bitField & 0b10000000) {
      gif.globalColourTable = parseColourTable(gif.globalColourCount);
    }
    setTimeout(parseBlock, 0);
  }
  function parseAppExt() {
    st.pos += 1;
    if ("NETSCAPE" === st.getString(8)) {
      st.pos += 8;
    } else {
      st.pos += 3;
      st.readSubBlocks();
    }
  }
  function parseGCExt() {
    var bitField;
    st.pos++;
    bitField = st.data[st.pos++];
    gif.disposalMethod = (bitField & 0b11100) >> 2;
    gif.transparencyGiven = bitField & 0b1 ? true : false;
    gif.delayTime = st.data[st.pos++] + (st.data[st.pos++] << 8);
    gif.transparencyIndex = st.data[st.pos++];
    st.pos++;
  }
  function parseImg() {
    var deinterlace, frame, bitField;
    deinterlace = function (width) {
      var lines, fromLine, pass, toline;
      lines = pixelBufSize / width;
      fromLine = 0;
      if (interlacedBufSize !== pixelBufSize) {
        deinterlaceBuf = new Uint8Array(pixelBufSize);
        interlacedBufSize = pixelBufSize;
      }
      for (pass = 0; pass < 4; pass++) {
        for (
          toLine = interlaceOffsets[pass];
          toLine < lines;
          toLine += interlaceSteps[pass]
        ) {
          deinterlaceBuf.set(
            pixelBuf.subArray(fromLine, fromLine + width),
            toLine * width
          );
          fromLine += width;
        }
      }
    };
    frame = {};
    gif.frames.push(frame);
    frame.disposalMethod = gif.disposalMethod;
    frame.time = gif.length;
    frame.delay = gif.delayTime * 10;
    gif.length += frame.delay;
    if (gif.transparencyGiven) {
      frame.transparencyIndex = gif.transparencyIndex;
    } else {
      frame.transparencyIndex = undefined;
    }
    frame.leftPos = st.data[st.pos++] + (st.data[st.pos++] << 8);
    frame.topPos = st.data[st.pos++] + (st.data[st.pos++] << 8);
    frame.width = st.data[st.pos++] + (st.data[st.pos++] << 8);
    frame.height = st.data[st.pos++] + (st.data[st.pos++] << 8);
    bitField = st.data[st.pos++];
    frame.localColourTableFlag = bitField & 0b10000000 ? true : false;
    if (frame.localColourTableFlag) {
      frame.localColourTable = parseColourTable(1 << ((bitField & 0b111) + 1));
    }
    if (pixelBufSize !== frame.width * frame.height) {
      pixelBuf = new Uint8Array(frame.width * frame.height);
      pixelBufSize = frame.width * frame.height;
    }
    lzwDecode(st.data[st.pos++], st.readSubBlocksB());
    if (bitField & 0b1000000) {
      frame.interlaced = true;
      deinterlace(frame.width);
    } else {
      frame.interlaced = false;
    }
    processFrame(frame);
  }
  function processFrame(frame) {
    var ct, cData, dat, pixCount, ind, useT, i, pixel, pDat, col, frame, ti;
    frame.image = document.createElement("canvas");
    frame.image.width = gif.width;
    frame.image.height = gif.height;
    frame.image.ctx = frame.image.getContext("2d");
    ct = frame.localColourTableFlag
      ? frame.localColourTable
      : gif.globalColourTable;
    if (gif.lastFrame === null) {
      gif.lastFrame = frame;
    }
    useT =
      gif.lastFrame.disposalMethod === 2 || gif.lastFrame.disposalMethod === 3
        ? true
        : false;
    if (!useT) {
      frame.image.ctx.drawImage(
        gif.lastFrame.image,
        0,
        0,
        gif.width,
        gif.height
      );
    }
    cData = frame.image.ctx.getImageData(
      frame.leftPos,
      frame.topPos,
      frame.width,
      frame.height
    );
    ti = frame.transparencyIndex;
    dat = cData.data;
    if (frame.interlaced) {
      pDat = deinterlaceBuf;
    } else {
      pDat = pixelBuf;
    }
    pixCount = pDat.length;
    ind = 0;
    for (i = 0; i < pixCount; i++) {
      pixel = pDat[i];
      col = ct[pixel];
      if (ti !== pixel) {
        dat[ind++] = col[0];
        dat[ind++] = col[1];
        dat[ind++] = col[2];
        dat[ind++] = 255;
      } else if (useT) {
        dat[ind + 3] = 0;
        ind += 4;
      } else {
        ind += 4;
      }
    }
    frame.image.ctx.putImageData(cData, frame.leftPos, frame.topPos);
    gif.lastFrame = frame;
    if (!gif.waitTillDone && typeof gif.onload === "function") {
      doOnloadEvent();
    }
  }
  function finnished() {
    gif.loading = false;
    gif.frameCount = gif.frames.length;
    gif.lastFrame = null;
    st = undefined;
    gif.complete = true;
    gif.disposalMethod = undefined;
    gif.transparencyGiven = undefined;
    gif.delayTime = undefined;
    gif.transparencyIndex = undefined;
    gif.waitTillDone = undefined;
    pixelBuf = undefined;
    deinterlaceBuf = undefined;
    pixelBufSize = undefined;
    deinterlaceBuf = undefined;
    gif.currentFrame = 0;
    if (gif.frames.length > 0) {
      gif.image = gif.frames[0].image;
    }
    doOnloadEvent();
    if (typeof gif.onloadall === "function") {
      gif.onloadall.bind(gif)({ type: "loadall", path: [gif] });
    }
    if (gif.playOnLoad) {
      gif.play();
    }
  }
  function canceled() {
    finnished();
    if (typeof gif.cancelCallback === "function") {
      gif.cancelCallback.bind(gif)({ type: "canceled", path: [gif] });
    }
  }
  function parseExt() {
    const blockID = st.data[st.pos++];
    if (blockID === GIF_FILE.GCExt) {
      parseGCExt();
    } else if (blockID === GIF_FILE.COMMENT) {
      gif.comment += st.readSubBlocks();
    } else if (blockID === GIF_FILE.APPExt) {
      parseAppExt();
    } else {
      if (blockID === GIF_FILE.UNKNOWN) {
        st.pos += 13;
      }
      st.readSubBlocks();
    }
  }
  function parseBlock() {
    if (gif.cancel !== undefined && gif.cancel === true) {
      canceled();
      return;
    }

    const blockId = st.data[st.pos++];
    if (blockId === GIF_FILE.IMAGE) {
      parseImg();
      if (gif.firstFrameOnly) {
        finnished();
        return;
      }
    } else if (blockId === GIF_FILE.EOF) {
      finnished();
      return;
    } else {
      parseExt();
    }
    if (typeof gif.onprogress === "function") {
      gif.onprogress({
        bytesRead: st.pos,
        totalBytes: st.data.length,
        frame: gif.frames.length,
      });
    }
    setTimeout(parseBlock, 0);
  }
  function cancelLoad(callback) {
    if (gif.complete) {
      return false;
    }
    gif.cancelCallback = callback;
    gif.cancel = true;
    return true;
  }
  function error(type) {
    if (typeof gif.onerror === "function") {
      gif.onerror.bind(this)({ type: type, path: [this] });
    }
    gif.onload = gif.onerror = undefined;
    gif.loading = false;
  }
  function doOnloadEvent() {
    gif.currentFrame = 0;
    gif.nextFrameAt = gif.lastFrameAt = new Date().valueOf();
    if (typeof gif.onload === "function") {
      gif.onload.bind(gif)({ type: "load", path: [gif] });
    }
    gif.onerror = gif.onload = undefined;
  }
  function dataLoaded(data) {
    st = new Stream(data);
    parse();
  }
  function loadGif(filename) {
    var ajax = new XMLHttpRequest();
    ajax.responseType = "arraybuffer";
    ajax.onload = function (e) {
      if (e.target.status === 404) {
        error("File not found");
      } else if (e.target.status >= 200 && e.target.status < 300) {
        dataLoaded(ajax.response);
      } else {
        error("Loading error : " + e.target.status);
      }
    };
    ajax.open("GET", filename, true);
    ajax.send();
    ajax.onerror = function (e) {
      error("File error");
    };
    this.src = filename;
    this.loading = true;
  }
  function play() {
    if (!gif.playing) {
      gif.paused = false;
      gif.playing = true;
      playing();
    }
  }
  function pause() {
    gif.paused = true;
    gif.playing = false;
    clearTimeout(timerID);
  }
  function togglePlay() {
    if (gif.paused || !gif.playing) {
      gif.play();
    } else {
      gif.pause();
    }
  }
  function seekFrame(frame) {
    clearTimeout(timerID);
    gif.currentFrame = frame % gif.frames.length;
    if (gif.playing) {
      playing();
    } else {
      gif.image = gif.frames[gif.currentFrame].image;
    }
  }
  function seek(time) {
    clearTimeout(timerID);
    if (time < 0) {
      time = 0;
    }
    time *= 1000;
    time %= gif.length;
    var frame = 0;
    while (
      time > gif.frames[frame].time + gif.frames[frame].delay &&
      frame < gif.frames.length
    ) {
      frame += 1;
    }
    gif.currentFrame = frame;
    if (gif.playing) {
      playing();
    } else {
      gif.image = gif.frames[gif.currentFrame].image;
    }
  }
  function playing() {
    var delay;
    var frame;
    if (gif.playSpeed === 0) {
      gif.pause();
      return;
    } else {
      if (gif.playSpeed < 0) {
        gif.currentFrame -= 1;
        if (gif.currentFrame < 0) {
          gif.currentFrame = gif.frames.length - 1;
        }
        frame = gif.currentFrame;
        frame -= 1;
        if (frame < 0) {
          frame = gif.frames.length - 1;
        }
        delay = (-gif.frames[frame].delay * 1) / gif.playSpeed;
      } else {
        gif.currentFrame += 1;
        gif.currentFrame %= gif.frames.length;
        delay = (gif.frames[gif.currentFrame].delay * 1) / gif.playSpeed;
      }
      gif.image = gif.frames[gif.currentFrame].image;
      timerID = setTimeout(playing, delay);
    }
  }
  var gif = {
    onload: null,
    onerror: null,
    onprogress: null,
    onloadall: null,
    paused: false,
    playing: false,
    waitTillDone: true,
    loading: false,
    firstFrameOnly: false,
    width: null,
    height: null,
    frames: [],
    comment: "",
    length: 0,
    currentFrame: 0,
    frameCount: 0,
    playSpeed: 1,
    lastFrame: null,
    image: null,
    playOnLoad: true,

    load: loadGif,
    cancel: cancelLoad,
    play: play,
    pause: pause,
    seek: seek,
    seekFrame: seekFrame,
    togglePlay: togglePlay,
  };
  return gif;
};
