import { create } from "zustand";

export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

interface CartState {
  cartItems: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (itemId: string) => void;
  updateQuantity: (itemId: string, newQuantity: number) => void;
  clearCart: () => void;
  cartTotal: number;
}

export const useCartStore = create<CartState>((set, get) => ({
  cartItems: [],
  addToCart: (item) =>
    set((state) => {
      const existingItem = state.cartItems.find((i) => i.id === item.id);
      let newCart;
      if (existingItem) {
        newCart = state.cartItems.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      } else {
        newCart = [...state.cartItems, { ...item, quantity: 1 }];
      }
      return { cartItems: newCart };
    }),
  removeFromCart: (itemId) =>
    set((state) => ({
      cartItems: state.cartItems.filter((item) => item.id !== itemId),
    })),
  updateQuantity: (itemId, newQuantity) =>
    set((state) => {
      if (newQuantity < 1) return {};
      return {
        cartItems: state.cartItems.map((item) =>
          item.id === itemId ? { ...item, quantity: newQuantity } : item
        ),
      };
    }),
  clearCart: () => set({ cartItems: [] }),
  get cartTotal() {
    return get().cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  },
}));