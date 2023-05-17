import imgComer from "../images/Comer.png";
import imgSalir from "../images/Salir.png";
import imgJugar from "../images/Jugar.png";
import imgBanio from "../images/Baño.png";
import imgAsistente from "../images/Asistente.png";
import imgDormir from "../images/Dormir.png";
import imgBack from '../images/back.png';
import imgPan from "../images/Pan.png";
import imgPlatano from "../images/Platano.png";
import imgYogur from "../images/Yogur.png";
import imgPatio from '../images/patio.png';
import imgParque from '../images/Parque.png';
import imgMall from '../images/Mall.png';
import imgDel1 from '../images/Del1.png';
import imgDel2 from '../images/Del2.png';
import imgKine from '../images/Kinesiologa.png';
import imgMama from '../images/Mama.png';
import imgProfe from '../images/Profesor.png';
import imgPuzzle from '../images/Puzzle.png';
import imgLudo from '../images/Ludo.png';
import imgTateti from '../images/Tresenraya.png';

export const actions = [
  {
    id: 0,
    name: "Comer",
    images: imgComer,
    description: 'Si tienes Hambre o ganas de comer algo, esta es la opción indicada a elegir.',
    voz: 'Yo quiero Comer',
    type: {
      opcion1: {
        id: 0,
        name: 'Pan',
        images: imgPan,
        voz: 'Yo quiero comer Pan',
      },
      opcion2: {
        id: 1,
        name: 'Plátano',
        images: imgPlatano,
        voz: 'Yo quiero comer Plátano',
      },
      opcion3: {
        id: 2,
        name: 'Yogurth',
        images: imgYogur,
        voz: 'Yo quiero comer Yogurth',
      },
    }
  },
  {
    id: 1,
    name: "Pasear",
    images: imgSalir,
    description: 'Si quieres salir a dar un paseo y tomar aire, esta es la opción correcta.',
    voz: 'Yo quiero Pasear',
    type: {
      opcion1: {
        id: 0,
        name: 'Parque',
        images: imgParque,
        voz: 'Yo quiero Pasear al Parque',
      },
      opcion2: {
        id: 1,
        name: 'Mall',
        images: imgMall,
        voz: 'Yo quiero Pasear al Moll',
      },
      opcion3: {
        id: 2,
        name: 'Patio',
        images: imgPatio,
        voz: 'Yo quiero Pasear al Patio',
      },
    }
  },
  {
    id: 2,
    name: "Jugar",
    images: imgJugar,
    description: 'Si quieres jugar y divertirte esta es la opción indicada.',
    voz: 'Yo quiero Jugar',
    type: {
      opcion1: {
        id: 0,
        name: 'Puzzle',
        images: imgPuzzle,
        voz: 'Yo quiero jugar con el Puzzle'
      },
      opcion2: {
        id: 1,
        name: 'Ludo',
        images: imgLudo,
        voz: 'Yo quiero jugar al ludo',
      },
      opcion3: {
        id: 2,
        name: 'Gato',
        images: imgTateti,
        voz: 'Yo quiero jugar al gato'
      },
    }
  },
  {
    id: 3,
    name: "Baño",
    images: imgBanio,
    description: 'Si necesitas ir al baño la opción a seleccionar es esta.',
    voz: 'Yo quiero ir al baño',
    type: {
      opcion1: {
        id: 0,
        name: 'Del 1',
        images: imgDel1,
        voz: 'Yo quiero ir al baño a hacer del uno'
      },
      opcion2: {
        id: 1,
        name: 'Del 2',
        images: imgDel2,
        voz: 'Yo quiero ir al baño a hacer del dos'
      },
    }
  },
  {
    id: 4,
    name: "Ayuda",
    images: imgAsistente,
    description: 'Si lo que necesitas es ayuda del asistente medico, puedes elegir esta opción.',
    voz: 'Yo necesito ayuda',
    type: {
      opcion1: {
        id: 0,
        name: 'Kinesióloga',
        images: imgKine,
        voz: 'Yo necesito ayuda de la Kinesióloga',
      },
      opcion2: {
        id: 1,
        name: 'Mamá',
        images: imgMama,
        voz: 'Yo necesito ayuda de mi mamá',
      },
      opcion3: {
        id: 2,
        name: 'Profesor',
        images: imgProfe,
        voz: 'Yo necesito ayuda del Profesor',
      },
    }
  },
  {
    id: 5,
    name: "Dormir",
    images: imgDormir,
    description: 'Si estas con sueño y quieres descansar está opción es la que debes elegir.',
    voz: 'Yo quiero dormir'
  },
  {
    id: 6,
    name: "Atrás",
    images: imgBack,
  }
];