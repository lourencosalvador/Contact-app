import { View, Text, Pressable, TouchableOpacity, TextInput} from "react-native"
import { Search } from "../../svg/search"
import { useState } from "react"
import * as Animatable from 'react-native-animatable';




export const Header = () => {
  const [status, setStatus] = useState(false)

 
  const handlePressOff = () => {
    setStatus(true)
  }
  return(
    <View className="flex-2 flex space-y-4 m-5 ">
      <Text
      className="text-[32px] font-extrabold "
      >Messages</Text>
      <View className="flex flex-row space-x-2">
     
      <Pressable
      className={`w-10 h-10 rounded-full border-[1px] border-[#999] flex duration-200 animate-bouce ease-out 
       px-3  flex-row space-x-3 overflow-hidden items-center ${status && "w-[330px]"}`}
      onPressOut={handlePressOff}
      >
        <Search />
        <TextInput 
        placeholder="Pesquisa por contacto"
        className="text-[12px] font-medium  w-[270px] py-2"
        />
      </Pressable>
      <TouchableOpacity
      className="w-10 h-10 rounded-full border-[1px] border-[#999999] flex 
      justify-center items-center
     "
      >
        <Text className="text-[25px] text-blue-500">+</Text>
      </TouchableOpacity>
      </View>
    </View>
  )
}