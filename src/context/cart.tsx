import React, {
  createContext,
  useState,
  useCallback,
  useContext,
  useEffect,
  useMemo,
} from 'react';

import { IProduct, IDiscount } from '../pages/Dashboard';

interface ICartContext {
  products: IProduct[];
  totalPrice: number;
  currentDiscount: number;
  totalQuantity: number;
  productsPrice: number;
  addToCart(products: IProduct[]): void;
  addDiscounts(discounts: IDiscount[]): void;
  increment(id: number): void;
  decrement(id: number): void;
  removeProduct(id: number): void;
}

const CartContext = createContext<ICartContext | null>(null);

const CartProvider: React.FC = ({ children }) => {
  const [discounts, setDiscounts] = useState<IDiscount[]>([]);
  const [currentDiscount, setCurrentDiscount] = useState(0);
  const [products, setProducts] = useState<IProduct[]>(() => {
    const storedProducts = localStorage.getItem('@SuaMarca:products');

    if (storedProducts) return JSON.parse(storedProducts);
    return [];
  });

  useEffect(() => {
    async function updateStoredProducts(): Promise<void> {
      localStorage.setItem('@SuaMarca:products', JSON.stringify(products));
    }

    updateStoredProducts();
  }, [products]);

  const addToCart = useCallback((CartProducts: IProduct[]) => {
    setProducts(
      CartProducts.map(product => ({
        ...product,
        observacao: '',
      })),
    );
  }, []);

  const addDiscounts = useCallback(
    (discountTypes: IDiscount[]) => setDiscounts(discountTypes),
    [],
  );

  const increment = useCallback(
    async (id: number) => {
      const updatedProducts = products.map(product => {
        if (product.id !== id) return product;

        const updatedProduct = {
          ...product,
          quantidade: product.quantidade + 1,
        };

        return updatedProduct;
      });

      setProducts(updatedProducts);
    },
    [products],
  );

  const decrement = useCallback(
    async (id: number) => {
      const updatedProducts = products
        .map(product => {
          if (product.id !== id) return product;

          const updatedProduct = {
            ...product,
            quantidade: product.quantidade - 1,
          };

          return updatedProduct;
        })
        .filter(product => product.quantidade > 0);

      setProducts(updatedProducts);
    },
    [products],
  );

  const removeProduct = useCallback((id: number) => {
    setProducts(oldProducts =>
      oldProducts.filter(product => product.id !== id),
    );
  }, []);

  const totalQuantity = useMemo(() => {
    const quantity = products.reduce(
      (total, { quantidade }) => total + quantidade,
      0,
    );

    return quantity;
  }, [products]);

  const productsPrice = useMemo(() => {
    if (!products.length) return 0;

    /* eslint-disable no-param-reassign */
    const total = products.reduce((acc, { quantidade, valor_unitario }) => {
      acc += quantidade * valor_unitario;
      return acc;
    }, 0);

    return total;
  }, [products]);

  const totalPrice = useMemo(() => {
    if (!products.length) return 0;

    let discount;

    const minimumValueDiscount = discounts.find(
      discount => discount.tipo === 'valor_minimo',
    );
    const minimumAmountDiscount = discounts.find(
      discount => discount.tipo === 'quantidade_itens_minima',
    );

    if (
      totalQuantity < (minimumAmountDiscount?.valor || 50) &&
      productsPrice < (minimumValueDiscount?.valor || 200)
    ) {
      discount = 0;
      setCurrentDiscount(discount);
      return productsPrice - discount;
    }

    if (
      productsPrice > (minimumValueDiscount?.valor || 200) &&
      totalQuantity < (minimumAmountDiscount?.valor || 50)
    ) {
      discount =
        (productsPrice * (minimumValueDiscount?.desconto_percentual || 10)) /
        100;
      setCurrentDiscount(discount);
      return productsPrice - discount;
    }

    discount =
      (productsPrice * (minimumAmountDiscount?.desconto_percentual || 20)) /
      100;

    setCurrentDiscount(discount);
    return productsPrice - discount;
  }, [products, productsPrice, discounts, totalQuantity]);

  const value = React.useMemo(
    () => ({
      products,
      totalPrice,
      currentDiscount,
      totalQuantity,
      productsPrice,
      addToCart,
      addDiscounts,
      increment,
      decrement,
      removeProduct,
    }),
    [
      products,
      totalPrice,
      currentDiscount,
      totalQuantity,
      productsPrice,
      addToCart,
      addDiscounts,
      increment,
      decrement,
      removeProduct,
    ],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

function useCart(): ICartContext {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error(`useCart must be used within a CartProvider`);
  }

  return context;
}

export { CartProvider, useCart };
