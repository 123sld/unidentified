import logo from './logo.svg';
import './App.css';
import { Tile } from 'react-native-elements';
import { Button } from 'react-native-elements';

var markets = [
{
  "id": 1234,
  "name": "market1",
  "outcomes": [
    {
     "name": "R House, R Senate",
     "yes_price": 61,
     "no_price": 39
    },
    {
      "name": "R House, D Senate",
      "yes_price": 37,
      "no_price": 63
    },
    {
      "name": "D House, R Senate",
      "yes_price": 12,
      "no_price": 88
    },
    {
      "name": "D House, D Senate",
      "yes_price": 2,
      "no_price": 98
    }
  ]

},
{
  "id": 1234,
  "name": "market2",
  "outcomes": [
    {
     "name": "R House",
     "yes_price": 61,
     "no_price": 39
    },
    {
      "name": "D Senate",
      "yes_price": 37,
      "no_price": 63
    }
  ]

}
];

function App() {
  return (
    <div>Hello World
    <Button title="Hello World" />;
    </div>
  );
}


export default App;
