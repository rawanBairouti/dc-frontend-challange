import { createContext, useReducer, useEffect } from 'react';
import { Product } from '../types';

interface CartItem {
    product: Product;
    quantity: number;
}

type CartAction =
    | { type: 'ADD_TO_CART'; payload: { product: Product; quantity: number } }
    | { type: 'INCREMENT_QUANTITY'; payload: number }
    | { type: 'DECREMENT_QUANTITY'; payload: number }
    | { type: 'REMOVE_ITEM'; payload: number };

interface CartContextType {
    cartItems: CartItem[];
    totalItems: number;
    addItem: (product: Product, quantity: number) => void;
    incrementQuantity: (productId: number) => void;
    decrementQuantity: (productId: number) => void;
    removeItem: (productId: number) => void;
}

const storedCartItems = localStorage.getItem('cartItems');
const initialCartItems = storedCartItems ? JSON.parse(storedCartItems) : [];

const CartContext = createContext<CartContextType>({
    cartItems: initialCartItems,
    totalItems: 0,
    addItem: () => {},
    incrementQuantity: () => {},
    decrementQuantity: () => {},
    removeItem: () => {},
});

const cartReducer = (state: CartItem[], action: CartAction) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            const existingItem = state.find(
                (item) => item.product.id === action.payload.product.id
            );

            if (existingItem) {
                const updatedState = state.map((item) =>
                    item.product.id === action.payload.product.id
                        ? {
                              ...item,
                              quantity: item.quantity + action.payload.quantity,
                          }
                        : item
                );
                localStorage.setItem('cartItems', JSON.stringify(updatedState));
                return updatedState;
            } else {
                const updatedState = [
                    ...state,
                    {
                        product: action.payload.product,
                        quantity: action.payload.quantity,
                    },
                ];
                localStorage.setItem('cartItems', JSON.stringify(updatedState));
                return updatedState;
            }
        case 'INCREMENT_QUANTITY':
            return state.map((item) =>
                item.product.id === action.payload
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            );
        case 'DECREMENT_QUANTITY':
            return state.map((item) =>
                item.product.id === action.payload && item.quantity > 1
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
            );
        case 'REMOVE_ITEM':
            return state.filter((item) => item.product.id !== action.payload);
        default:
            return state;
    }
};

function CartProvider({ children }: { children: React.ReactNode }) {
    const [cartItems, dispatch] = useReducer(cartReducer, initialCartItems);

    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }, [cartItems]);

    const addItem = (product: Product, quantity: number) => {
        dispatch({ type: 'ADD_TO_CART', payload: { product, quantity } });
    };

    const incrementQuantity = (productId: number) => {
        dispatch({ type: 'INCREMENT_QUANTITY', payload: productId });
    };

    const decrementQuantity = (productId: number) => {
        dispatch({ type: 'DECREMENT_QUANTITY', payload: productId });
    };

    const removeItem = (productId: number) => {
        dispatch({ type: 'REMOVE_ITEM', payload: productId });
    };

    const totalItems = cartItems.reduce(
        (total, item) => total + item.quantity,
        0
    );

    return (
        <CartContext.Provider
            value={{
                cartItems,
                totalItems,
                addItem,
                incrementQuantity,
                decrementQuantity,
                removeItem,
            }}
        >
            {children}
        </CartContext.Provider>
    );
}

export { CartContext, CartProvider };
