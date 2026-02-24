import React from 'react'
import { Text, View } from 'react-native'
import { TitleComponent } from '../../components/TitleComponent'
import { BodyComponents } from '../../components/BodyComponents';
import { FlatList } from 'react-native-gesture-handler';
import { CardProductComponents } from './components/CardProductComponents';

interface Product{
    id: number;
    name: string;
    price: number;
    stock: number;
    pathImage: string;
}

export const HomeScreen = () => {
  //arreglo de productos
const products: Product[] = [
    {id: 1, name: 'Funda de Arroz', price: 2.00, stock: 5, pathImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd289RLgBtP4dErS2JnGIVpv2CLYU_QAdYGA&s'},
    {id: 2, name: 'Funda de Azucar', price: 1.50, stock: 4, pathImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmMSVKJ5aJ1OcdyU3ja9lCKHk4kXpDXBgt0w&s'},
    {id: 3, name: 'Funda de Papas', price: 3.00, stock: 10, pathImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU5sXk5zDqRX3nZ0EqDBwZ_csitNey1g9k5w&s'},
    {id: 4, name: 'Funda de Fideos', price: 1.00, stock: 8, pathImage: 'https://supermaxi-225de.kxcdn.com/wp-content/uploads/2026/01/7861097603153-1-1-300x300.png'},
    {id: 5, name: 'Funda de Sal', price: 0.50, stock: 2, pathImage: 'https://www.elahorro.com.ec/web/image/product.template/88852/image'},
]
    return (
    
    <View>
        <TitleComponent title='Productos'/>
        <BodyComponents>
            <FlatList 
                data={products}
                renderItem={({item})=><CardProductComponents/>}
                keyExtractor={item => item.id.toString()}
            />
        </BodyComponents>
    </View>

    
  )
}
