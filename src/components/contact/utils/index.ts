import { ReactNode } from "react";
import { ContactProps } from "../types"; // Certifique-se de que o caminho para o arquivo types está correto

import { Memoji_1 } from "../../../svg/memoji1"; 
import { Memoji_2 } from "../../../svg/memoji2"; 
import { View } from "react-native-animatable";
export const dataContact: ContactProps[] = [
  {
   name: "Paulo Sanguli",
   state: "Amigo",
   backgroundPerfil: "violet-400"
  },
  {
    name: "Elizeu Gaspar",
    state: "Amigo",
    backgroundPerfil: "red-400"
   },
   {
    name: "Adão Angelo",
    state: "Amigo",
    backgroundPerfil: "yellow-400"
   },
 ];