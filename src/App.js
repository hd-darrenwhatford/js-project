import React, { Component } from 'react'

import Table from './Table/Table'

class App extends Component {
	state = {
		characters: [
			{
				name: 'Joey',
				job: 'Singer'
			},
			{
				name: 'Johnny',
				job: 'Guitarist'
			},
			{
				name: 'Dee Dee',
				job: 'Bassist'
			},
			{
				name: 'Tommy',
				job: 'Drummer'
			}           
		],
	};

	// Method - remove character
	removeCharacter = index => {
		const { characters } = this.state

		this.setState({
			characters: characters.filter((character, i) => {
				return i !== index
			}),
		})
	};

	render() {
		const { characters } = this.state

		return (
			<div className="container">
				<Table characterData={characters} removeCharacter={this.removeCharacter} />
			</div>
		)
	}
}

export default App