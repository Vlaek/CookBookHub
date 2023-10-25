import { FC } from 'react'
import Layout from '../../containers/Layout/Layout'
import Header from '../../components/Header/Header'
import CreateRecipe from '../../components/CreateRecipe/CreateRecipe'
import { RecipeMain } from '../Recipe/Recipe'
import { useParams } from 'react-router-dom'

const MyRecipeEdit: FC = () => {
	const { id = '' } = useParams()

	return (
		<Layout
			header={<Header />}
			aside={<CreateRecipe />}
			main={<RecipeMain id={id} />}
		/>
	)
}

export default MyRecipeEdit
