import React, { useState } from 'react'
import { Image, Modal, Text, TouchableOpacity, useWindowDimensions, View } from 'react-native'
import { Product } from '../HomeScreen';
import { styleGlobal } from '../../../theme/appTheme';
import Icon from '@expo/vector-icons/MaterialIcons';
import { PRIMARY_COLOR } from '../../../commons/constants';

interface Props{
    isVisible: boolean; //mostar modal
    item: Product;
    hiddenModal: () => void; //ocultar el modal
}

export const ModalProductComponents = ({isVisible, item, hiddenModal}: Props) => {
    const { width } = useWindowDimensions();
    //hook useState: permite gestior el estado del contador
    const [quantity, setQuantity] = useState<number>(1);

    //funcion para validar el stock
    const handlechangeStock = (value: number): void =>{
        setQuantity(quantity + value)
    }

  return (
    <Modal 
        visible={isVisible}
        animationType='fade'
        transparent={true}>
    <View style={styleGlobal.containerModal}>
        <View style={{...styleGlobal.bodyModal, width: width * 0.80}}>
            <View style={styleGlobal.headerModal}>
                <Text style={{fontWeight:'bold'}}>{item.name} - ${item.price.toFixed(2)}</Text>
                <View style={styleGlobal.iconCard}>
                    <Icon 
                        name='cancel'  
                        color={PRIMARY_COLOR}  
                        size={20} 
                        onPress={hiddenModal}/>
                </View>
            </View>
            <View style={{alignItems: 'center'}}>
                <Image  
                    source={{uri: item.pathImage}} 
                    style={styleGlobal.imageModal}/>
            </View>
            {
                (item.stock == 0)
                ?<Text style={styleGlobal.textStock}>Producto agotado</Text>
                :
                <>
                    <View style={styleGlobal.containerQuantity}>
                <TouchableOpacity style={styleGlobal.buttonQuantity}
                onPress={() => setQuantity(quantity - 1)}
                disabled={quantity == 1}>
                    <Text style={styleGlobal.buttonQuantifyText}>-</Text>
                </TouchableOpacity>
                <Text style={{fontSize: 20}}>{quantity}</Text>
                <TouchableOpacity style={styleGlobal.buttonQuantity}
                onPress={() => setQuantity(quantity + 1)}>
                    <Text style={styleGlobal.buttonQuantifyText}>+</Text>
                </TouchableOpacity>
            </View>
            <View style={{alignItems: 'center'}}>
                <Text style={styleGlobal.textTotalPrice}>Total: ${(item.price * quantity).toFixed(2)}</Text>
            </View>
            <TouchableOpacity style={styleGlobal.button}>
                <Text style={styleGlobal.buttonText}>Agregar carrito</Text>
            </TouchableOpacity>
                </>
            }
            
        </View>
    </View>
    </Modal>
  )
}
