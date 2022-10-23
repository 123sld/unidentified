import logo from './logo.svg';
import './App.css';

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
    <div>
      <tbody>
        <tr>
          <th>Name</th>
          <th>ID</th>
        </tr>
        {markets.map((markets, index) => (
          <tr key={index}>
            <td>{markets.id}</td>
            <td>{markets.name}</td>
                {markets.outcomes.map((outcomes, index) => (
                    <><td>{outcomes.name}</td><td>{outcomes.yes_price}</td><td>{outcomes.no_price}</td></>
                ))}   
            <td>{markets.outcomes.yes_price}</td>
          </tr>
        ))}
      </tbody>
    </div>
  );
}


export default App;
