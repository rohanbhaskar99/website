import React from "react";
import ReactDOM from "react-dom";
import useTheme from "./hooks/useTheme";
import "./styles.css";

const App = () => {
	
	const { theme, toggleTheme } = useTheme();
	return (
		<div className={`App ${theme}`} style={{height:'110vh'}}>
				<button className="toggle-button" type="button" onClick={toggleTheme}>
					<div className="toggle-text">Toggle theme</div>
				</button>
		</div>
	);
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
