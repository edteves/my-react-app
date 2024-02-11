import UserGreeting from "./UserGreeting";

function App() {
	return (
		<>
			<UserGreeting isLoggedIn={true} username="ed" />
		</>
	);
}

export default App;
