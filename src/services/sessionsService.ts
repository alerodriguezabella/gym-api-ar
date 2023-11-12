
const piernas = {
  "id": 1,
  "name": "Piernas",
  "exercises": [
    {
     "id": 1,
     "name": "Extension de femorales",
     "videoUrl": "",
     "set": 4,
     "reps": 15
    },
    {
      "id": 2,
      "name": "Peso muerto con mancuernas",
      "videoUrl": "",
      "set": 4,
      "reps": 15
     },
     {
      "id": 3,
      "name": "Prensa",
      "videoUrl": "",
      "set": 4,
      "reps": 15
     },
     {
      "id": 4,
      "name": "Sentadilla con peso corporal",
      "videoUrl": "",
      "set": 4,
      "reps": 30
     },
     {
      "id": 5,
      "name": "Patada de gluteos con polea baja",
      "videoUrl": "",
      "set": 4,
      "reps": 15
     }
    
  ],
}

export function getSession() {
  return [piernas];
}