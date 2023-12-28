export type getTenantResponse = {
    name: string;
    mainColor: string;
    secondColor: string;

}
export function useApi() {
    const getTenant = (tenantSlug: string): getTenantResponse | false => {

        switch (tenantSlug) {
            case "burguerX":
                return {
                    name: "burguerX",
                    mainColor: "#ff0000",
                    secondColor: "#00ff00"
                };
            case "pizzaX":
                return {
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
