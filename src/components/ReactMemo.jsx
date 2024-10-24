import { useState, memo } from "react";

/* 
NOT TO USE MEMO:-
Simple Components: If a component is simple and doesn’t involve complex rendering logic, the overhead of memoization might
outweigh the benefits. Memoization itself incurs a performance cost due to the shallow comparison of props.

Dynamic Content: If a component frequently receives new props that change on every render, memoization won’t be effective.
The component will still re-render due to the constant prop changes.

Complex Props: If a component receives complex props (e.g., objects, arrays, functions), React.memo uses shallow comparison by
default. This means it only checks if the references to these objects have changed, not their content. 
If the props are deeply nested or change frequently, you might need to implement a custom comparison function, which can add complexity.
*/

/* 
WHEN TO USE:-
Pure Components: Use React.memo for functional components that render the same output given the same props. 
These components are often referred to as pure components

Performance Optimization: When you notice that a component is re-rendering frequently without any changes to its props, and this is
impacting performance.

Expensive Rendering: For components that perform expensive calculations or renderings. Memoizing these components can prevent
unnecessary calculations and improve performance. 
*/

const Counter = memo(({ count }) => {
	// shallow comparision
	console.log("Counter component re-rendered");
	return <div>Counter: {count}</div>;
});

const Memo = () => {
	const [count, setCount] = useState(0);
	const [otherState, setOtherState] = useState(false);

	const incrementCount = () => {
		setCount(count + 1);
	};
	const toggleState = () => {
		setOtherState(!otherState);
	};
	return (
		<div>
			<h1>React memo example</h1>
			<Counter count={count} />
			<button onClick={incrementCount}>Increment</button>
			<button onClick={toggleState}>Toggle other state</button>
		</div>
	);
};

export default Memo;
