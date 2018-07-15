import * as React from 'react';
import './App.css';
import Child from './Child';
import Context from './MessageContext';
import Sibling from './Sibling';

interface IState {
  message: string;
}

// still trying to figure this out

class App extends React.Component<{}, IState> {
  public state = {
    message: "Hello"
  }

  public render() {
    return (
      <div className="App">
        <Context.Provider value={{ message: this.state.message, updateMessage: this.updateMessage }}>
          <Sibling />
          <Child />
        </Context.Provider>
      </div>
    );
  }

  private updateMessage = (nextMessage: string) => this.setState(state => ({...state, message: nextMessage}));
}

export default App;
