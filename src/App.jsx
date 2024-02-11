import Student from "./Student";

function App() {
	return (
		<>
			<Student name="Ed" age={25} isStudent={true} />
			<Student name="Claire" age={24} isStudent={false} />
			<Student name="Julz" age={23} isStudent={false} />
			<Student name="Amy" age={24} isStudent={true} />
			<Student />
		</>
	);
}

export default App;
