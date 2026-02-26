import React, { useState } from 'react'
import { Text, View } from 'react-native'
import { TitleComponent } from '../../components/TitleComponent'
import { BodyComponents } from '../../components/BodyComponents';
import { FlatList } from 'react-native-gesture-handler';
import { CardProductComponents } from './components/CardProductComponents';
import Icon from '@expo/vector-icons/MaterialIcons';
import { SECONDARY_COLOR } from '../../commons/constants';
import { styleGlobal } from '../../theme/appTheme';
import { ModalCartComponents } from './components/ModalCartComponents';

export interface Product{
    id: number;
    name: string;
    price: number;
    stock: number;
    pathImage: string;
}

export interface Cart{
    id: number;
    name: string;
    price: number;
    quantity: number;
    total: number;
}

export const HomeScreen = () => {
  //arreglo de productos
const products: Product[] = [
    {id: 1, name: 'Funda de Papas', price: 3.00, stock: 10, pathImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU5sXk5zDqRX3nZ0EqDBwZ_csitNey1g9k5w&s'},
    {id: 2, name: 'Funda de Fideos', price: 1.00, stock: 8, pathImage: 'https://supermaxi-225de.kxcdn.com/wp-content/uploads/2026/01/7861097603153-1-1-300x300.png'},
    {id: 3, name: 'Funda de Sal', price: 0.50, stock: 3, pathImage: 'https://www.elahorro.com.ec/web/image/product.template/88852/image'},
    {id: 4, name: 'Funda de Papas', price: 3.00, stock: 10, pathImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU5sXk5zDqRX3nZ0EqDBwZ_csitNey1g9k5w&s'},
    {id: 5, name: 'Funda de Fideos', price: 1.00, stock: 8, pathImage: 'https://supermaxi-225de.kxcdn.com/wp-content/uploads/2026/01/7861097603153-1-1-300x300.png'},
    {id: 6, name: 'Funda de Sal', price: 0.50, stock: 2, pathImage: 'https://www.elahorro.com.ec/web/image/product.template/88852/image'},
    {id: 7, name: 'Funda de Fideos', price: 1.00, stock: 8, pathImage: 'https://supermaxi-225de.kxcdn.com/wp-content/uploads/2026/01/7861097603153-1-1-300x300.png'},
    {id: 8, name: 'Funda de Sal', price: 0.50, stock: 2, pathImage: 'https://www.elahorro.com.ec/web/image/product.template/88852/image'},
];

//hook useState: permite gestior la informacion de los productos
const [productsState, setProductsState] = useState<Product[]>(products);

//hook useState: permite gestionar el estado de los productos del carrito
const [cart, setCart] = useState<Cart[]>([]); ///areglo del carrito

//hook useState: permite gestionar el estado del modal
const [showModal, setShowModal] = useState<boolean>(false); 

//funcion para actualizar el estado del modal
const hiddenModal = (): void =>{
    setShowModal(!showModal);
}

//funcion para controlar el stock de los productos
 const changeStockProduct = (id: number, quantity: number): void =>{
    const updateProducts = productsState.map(item=>item.id == id
        ? { ...item, stock: item.stock - quantity}
        : item)
    //Modificar el arreglo de productos
    setProductsState(updateProducts);
    //lamar a la funcio para añadir producos al carrito
    addProduct(id, quantity);
 }

    //funcion para añadir prodcutos al carrito
    const addProduct = (id: number, quantity: number): void =>{
        const product = productsState.find(product => product.id == id);

        //si no existe el producto
        if(!product){
            return;
        }

        //crear el objeto del producto
        const newCart: Cart = {
            id: product.id,
            name: product.name,
            price: product.price,
            quantity:quantity,
            total: product.price * quantity
        }

        //Añadir al arreglo del carrito
        setCart([...cart, newCart]);
        console.log(cart);
    }
    
    return (
    <View>
        <View style={styleGlobal.headerHome}>
            <TitleComponent title='Productos'/>
            <View style={styleGlobal.iconHome}>
                <Text style={styleGlobal.textIconCart}>{cart.length}</Text>
                <Icon name='shopping-cart' color={SECONDARY_COLOR} size={30} onPress={hiddenModal}/>
            </View>
        </View>
        <BodyComponents>
            <FlatList 
                data={productsState}
                renderItem={({item})=><CardProductComponents item={item} changeStockProduct={changeStockProduct}/>}
                keyExtractor={item => item.id.toString()}
                numColumns={2}
                columnWrapperStyle={{justifyContent: 'space-between'}}
            />
        </BodyComponents>
        <ModalCartComponents 
            isVisible={showModal} 
            cart={cart} 
            hiddenModal={hiddenModal}/>
    </View>

    
  )
}
