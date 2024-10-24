import { useState, useCallback } from "react";
const ItemsList = () => {
	const [items, setItems] = useState([
		"Items 1",
		"Items 2",
		"Items 3",
		"Items 4",
		"Items 5",
	]);

  /* if items not mention in dependency, items inside function won't get updated version */
	const removeItem = useCallback((itemToRemove) => {
		console.log("Inside Function", items, itemToRemove);
		setItems(items.filter((item) => item !== itemToRemove));
	}, [items]);

	return (
		<div>
			{items.map((item, index) => (
				<div key={index}>
					{item}
					<button onClick={() => removeItem(item)}>Remove</button>
				</div>
			))}
		</div>
	);
};
export default ItemsList;
