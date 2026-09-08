export const currentUser = {
  name: "John Doe",
  username: "jdoe",
  avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=John",
};

export interface Tweet {
  id: string;
  author: {
    name: string;
    username: string;
    avatar: string;
  };
  content: string;
  timestamp: Date;
  likes: number;
  retweets: number;
  replies: number;
}

export const mockTweets: Tweet[] = [
  {
    id: "1",
    author: {
      name: "Universidad de Chile",
      username: "uchile",
      avatar: "https://api.dicebear.com/7.x/identicon/svg?seed=uchile",
    },
    content: "Bienvenidos estudiantes al semestre 2026. Recuerda que las clases comienzan el próximo lunes. ¡Mucho éxito en este nuevo período académico! 🎓",
    timestamp: new Date(Date.now() - 1000 * 60 * 30),
    likes: 342,
    retweets: 89,
    replies: 45,
  },
  {
    id: "2",
    author: {
      name: "Facultad de Cs. Físicas y Matemáticas",
      username: "fcfm_uchile",
      avatar: "https://api.dicebear.com/7.x/identicon/svg?seed=fcfm",
    },
    content: "Abiertas las postulaciones al programa de magíster en Ciencia de Datos. Fecha límite: 15 de octubre. Más información en nuestro sitio web.",
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2),
    likes: 156,
    retweets: 67,
    replies: 23,
  },
  {
    id: "3",
    author: {
      name: "VTI UChile",
      username: "vti_uchile",
      avatar: "https://api.dicebear.com/7.x/identicon/svg?seed=vti",
    },
    content: "🎉 ¡Felicitaciones al equipo del Laboratorio de Computación por ganar el hackathon nacional de IA! Representarán a Chile en la competencia internacional.",
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 5),
    likes: 523,
    retweets: 234,
    replies: 78,
  },
];
