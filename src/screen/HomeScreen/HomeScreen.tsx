import React, { useState } from 'react'
import { Text, View } from 'react-native'
import { TitleComponent } from '../../components/TitleComponent'
import { BodyComponents } from '../../components/BodyComponents';
import { FlatList } from 'react-native-gesture-handler';
import { CardProductComponents } from './components/CardProductComponents';

export interface Product{
    id: number;
    name: string;
    price: number;
    stock: number;
    pathImage: string;
}

export const HomeScreen = () => {
  //arreglo de productos
const products: Product[] = [
    {id: 1, name: 'Funda de Papas', price: 3.00, stock: 10, pathImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU5sXk5zDqRX3nZ0EqDBwZ_csitNey1g9k5w&s'},
    {id: 2, name: 'Funda de Fideos', price: 1.00, stock: 8, pathImage: 'https://supermaxi-225de.kxcdn.com/wp-content/uploads/2026/01/7861097603153-1-1-300x300.png'},
    {id: 3, name: 'Funda de Sal', price: 0.50, stock: 0, pathImage: 'https://www.elahorro.com.ec/web/image/product.template/88852/image'},
    {id: 4, name: 'Funda de Papas', price: 3.00, stock: 10, pathImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU5sXk5zDqRX3nZ0EqDBwZ_csitNey1g9k5w&s'},
    {id: 5, name: 'Funda de Fideos', price: 1.00, stock: 8, pathImage: 'https://supermaxi-225de.kxcdn.com/wp-content/uploads/2026/01/7861097603153-1-1-300x300.png'},
    {id: 6, name: 'Funda de Sal', price: 0.50, stock: 2, pathImage: 'https://www.elahorro.com.ec/web/image/product.template/88852/image'},
    {id: 7, name: 'Funda de Fideos', price: 1.00, stock: 8, pathImage: 'https://supermaxi-225de.kxcdn.com/wp-content/uploads/2026/01/7861097603153-1-1-300x300.png'},
    {id: 8, name: 'Funda de Sal', price: 0.50, stock: 2, pathImage: 'https://www.elahorro.com.ec/web/image/product.template/88852/image'},
];

//hook useState: permite gestior la informacion de los productos
const [productsState, setProductsState] = useState<Product[]>(products);

//funcion para controlar el stock de los productos
 const changeStockProduct = (id: number, quantity: number): void =>{
    const updateProducts = productsState.filter(item=>item.id == id
        ? { ...item, stock: item.stock - quantity}
        : item)
    //Modificar el arreglo de productos
    setProductsState(updateProducts);
 }

    return (
    <View>
        <TitleComponent title='Productos'/>
        <BodyComponents>
            <FlatList 
                data={productsState}
                renderItem={({item})=><CardProductComponents item={item}/>}
                keyExtractor={item => item.id.toString()}
                numColumns={2}
                columnWrapperStyle={{justifyContent: 'space-between'}}
            />
        </BodyComponents>
    </View>

    
  )
}
