
//Here, I'm using the as const assertion to infer a literal type for the array, making it a readonly tuple.

const ROUTES = {
    HOME:'Home',
    PROFILE:'Profile'
}as const;
export default ROUTES