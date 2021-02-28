import Grid from "@material-ui/core/Grid"
import LinearProgress from "@material-ui/core/LinearProgress"
import { useQuery } from "react-query"
import { Wrapper } from "./App.styles"
import Item from "./Item/Item"
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
	console.log(data)

	const getTotalItems = () => null

	const handleAddToCart = (clickedItem: CartItemType) => null

	const hanleRemoveCart = () => null

	if (isLoading) return <LinearProgress />
	if (error) return <div>You're app is crashing</div>

	return (
		<Wrapper>
			<Grid container spacing={3}>
				{data?.map((item) => (
					<Grid item key={item.id} xs={12} sm={4}>
						<Item item={item} handleAddToCart={handleAddToCart} />
					</Grid>
				))}
			</Grid>
		</Wrapper>
	)
}

export default App
