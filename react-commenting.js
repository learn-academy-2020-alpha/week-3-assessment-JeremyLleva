// ASSESSMENT 3: React Commenting Challenge
// Add comments to the React Robot Listening Challenge
// Explain the purpose and functionality of the code directly below the 10 comment tags


// App.js
class App extends Component{
  constructor(){
    super()
    // 1. Creating a state that can store the userInput
    this.state = {
      userInput: "",
    }
  }

  robot = (e) => {
    // 2. Grabs the  value within the input box and set the userInput state to that
    this.setState({ userInput: e.target.value})
  }

  render(){
    // 3. Deconstructing the state object to let us access userInput without using this.state.userInput
    let { userInput } = this.state

    return(
      <div>
        <h1>Robot Challenge</h1>

        <h3>Enter text here:</h3>
        <input
          {/* 4. When we change the text it will call our we cacll out robot function which updates the state of user input */}
          onChange={ this.robot }
          {/* 5. This updates the text we see within the input to the userInput we updated during onChange*/}
          value={ userInput }
        />

        <div>
          {/* 6. Create the GoodRobot component within the App component*/}
          <GoodRobot
            {/* 7. Pass userInput as a prop to our GoodRobot component we just created*/}
            userInput={ userInput }
          />
          <BadRobot
            userInput={ userInput }
          />
          <KanyeBot
            userInput={ userInput }
          />
        </div>
      </div>
    )
  }
}
export default App


// GoodRobot.js
class GoodRobot extends Component{
  render(){
    return(
      // 8. Rendders the information about good robot
      <div>
        <h3>Good Robot</h3>
        {/* 9. Takes the prop passed down by out App and prints it out as a robot input*/}
        <h4>I hear you saying { this.props.userInput }. Is that correct?</h4>
      </div>
    )
  }
}
// 10. Lets us use this class in other classes using "import GoodRobot from '....'"
export default GoodRobot
