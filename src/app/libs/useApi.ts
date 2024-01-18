import { Product } from "../types/Product";
import { Tenant } from "../types/Tenant";

export type getTenantResponse = {
    name: string;
    mainColor: string;
    secondColor: string;

}

const ONE_PRODUCT: Product = {
    id: 1,
    image: "/assets/Imgs/burguer.png",
    categoryName: "Tradicional",
    name: "Texas Burguer",
    price: 25.50,
    description: "2 Blends de carne de 150g, Queijo CHeddar, Bacon Caramelizado, "
}
export function useApi(tenantSlug: string) {
    const getTenant = (): Tenant | false => {

        switch (tenantSlug) {
            case "burguerX":
                return {
                    slug: "burguerX",
                    name: "burguerX",
                    mainColor: "#ff0000",
                    secondColor: "#00ff00"
                };
            case "pizzaX":
                return {
                    slug: "pizzaX",
                    name: "pizzaX",
                    mainColor: "#ff0000",
                    secondColor: "#00ff00"
                };
            default:
                return false;
        }
    };



    const getAllProducts = () => {
        let products = []
        for (let i = 0; i < 10; i++) {
            products.push(ONE_PRODUCT)
        }
        return products
    }

    const getProduct = (id: string) => {
        return ONE_PRODUCT
    }

    return { getTenant, getAllProducts, getProduct }
}
