import LinearProgress from "@material-ui/core/LinearProgress"
import { useQuery } from "react-query"
// Types
export type CartItemType = {
	id: number
	category: string
	description: string
	image: string
	price: number
	title: string
	amount: number
}

const getProducts = async (): Promise<CartItemType[]> =>
	await (await fetch("https://fakestoreapi.com/products")).json()
const App = () => {
	const { data, isLoading, error } = useQuery<CartItemType[]>(
		"products",
		getProducts
	)
	const getTotalItems = () => null

	const handleAddToCart = () => null

	const hanleRemoveCart = () => null

	if (isLoading) return <LinearProgress />
	if (error) return <div>You're app is crashing</div>

	return <div>Shopping Cart</div>
}

export default App
