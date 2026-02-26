import React, { useState } from 'react'
import { Image, Text, View } from 'react-native'
import { Product } from '../HomeScreen';
import { styleGlobal } from '../../../theme/appTheme';
import Icon from '@expo/vector-icons/MaterialIcons';
import { PRIMARY_COLOR } from '../../../commons/constants';
import { ModalProductComponents } from './ModalProductComponents';

interface Props{
  item: Product;
  changeStockProduct: (id: number, quantity: number) => void;
}

export const CardProductComponents = ({ item, changeStockProduct }: Props) => {
  //hook useState: permite gestionar el estado del modal
  const [showModal, setShowModal] = useState<boolean>(false);

  //funcion para mostrar u oculatar el modal
  const hiddenModal = (): void => {
    setShowModal (!showModal);
  }

  return (
  <>
    <View style={styleGlobal.containerCard}>
      <Image 
        source={{uri: item.pathImage}}
        style={styleGlobal.imageCard}
      />
      <View>
        <Text 
          style={styleGlobal.titleCard}>
            {item.name}
        </Text>
        <Text 
          style={styleGlobal.textPrice}>
            Precio: ${item.price.toFixed(2)}
        </Text>
      </View>
      <View style={styleGlobal.iconCard}>
        <Icon 
          name='add-shopping-cart' 
          size={33} 
          color={PRIMARY_COLOR}
          onPress={hiddenModal}/>
      </View>
    </View>
    <ModalProductComponents 
      isVisible={showModal} 
      item={item} 
      hiddenModal={hiddenModal} 
      changeStockProduct={changeStockProduct}
    />
  </>
  )
}
