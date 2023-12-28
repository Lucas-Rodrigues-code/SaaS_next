import { Tenant } from "../types/Tenant";

export type getTenantResponse = {
    name: string;
    mainColor: string;
    secondColor: string;

}
export function useApi() {
    const getTenant = (tenantSlug: string): Tenant | false => {

        switch (tenantSlug) {
            case "burguerX":
                return {
                    slug:"burguerX",
                    name: "burguerX",
                    mainColor: "#ff0000",
                    secondColor: "#00ff00"
                };
            case "pizzaX":
                return {
                    slug:"pizzaX",
                    name: "pizzaX",
                    mainColor: "#ff0000",
                    secondColor: "#00ff00"
                };
            default:
                return false;
        }
    };

    return { getTenant };
}
