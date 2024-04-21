import { View, Text, SafeAreaView, FlatList} from "react-native"
import { dataContact } from "./utils"
import { ContactProps } from "./types"
import { Memoji_2 } from "../../svg/memoji2"




export const Contact = () => {
  return(
    <SafeAreaView className="flex-1 m-4 mt-5">
      <FlatList 
       data={dataContact}
       renderItem={({item, index}) => (
        <View className="flex  h-[90px]">
          <ListItem {...{item}}/>
        </View>
       )}
      />
    </SafeAreaView>
  )
}



const ListItem = ({item}) => {
  return(
    <View className="w-full flex flex-row space-x-4 ">
    <View className={`w-16 h-16 flex items-center justify-center rounded-full bg-${item.backgroundPerfil}`}>
      <Memoji_2 />
     </View>

     <View className="flex space-y-2">
     <Text className="text-[20px] font-bold">{item.name}</Text>
      <View className="flex flex-row space-x-1">
      <Text className="text-[14px] text-zinc-400">Categoria:</Text>
      <Text className="text-[14px] font-semibold text-blue-400">{item.state}</Text>
      </View>
     </View>
    </View>
  )
}