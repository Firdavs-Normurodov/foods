import { Search } from "lucide-react";
import RecipeCard from "../components/RecipeCard";
import { useState } from "react";
import recipesData from "../data/recipes.json"; // JSON faylni import qilamiz

const HomePage = () => {
	const [recipes, setRecipes] = useState(recipesData); // JSON dan olingan retseptlar
	const [loading, setLoading] = useState(false); // API talab qilinmagani uchun bu har doim false

	const handleSearchRecipe = (e) => {
		e.preventDefault();
		const query = e.target[0].value.toLowerCase();
		const filteredRecipes = recipesData.filter((recipe) =>
			recipe.label.toLowerCase().includes(query)
		);
		setRecipes(filteredRecipes);
	};

	return (
		<div className='bg-[#faf9fb] p-10 flex-1'>
			<div className='max-w-screen-lg mx-auto'>
				<form onSubmit={handleSearchRecipe}>
					<label className='input shadow-md flex items-center gap-2'>
						<Search size={"24"} />
						<input
							type='text'
							className='text-sm md:text-md grow'
							placeholder='What do you want to cook today?'
						/>
					</label>
				</form>

				<h1 className='font-bold text-3xl md:text-5xl mt-4'>Recommended Recipes</h1>
				<p className='text-slate-500 font-semibold ml-1 my-2 text-sm tracking-tight'>Popular choices</p>

				<div className='grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
					{recipes.map((recipe, index) => (
						<RecipeCard key={index} recipe={recipe} />
					))}
				</div>
			</div>
		</div>
	);
};
export default HomePage;
