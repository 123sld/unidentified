import logo from './logo.svg';
import './App.css';
import { CardContent, CardHeader, Card, Typography, Grid, Box, Paper } from '@mui/material';
import NavBar from './components/NavBar'
import { React, Component } from "react";

var markets = [
  {
    "id": 1234,
    "name": "Balance of Power",
    "category": "Politics",
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
    "name": "Control of House",
    "category": "Politics",
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
  },
  {
    "id": 5555,
    "name": "Washington Capitals @ Pittsburgh Penguins 11/24/2022",
    "category": "Sports",
    "outcomes": [
      {
        "name": "Washington Capitals Win",
        "yes_price": 50,
        "no_price": 50
      },
      {
        "name": "Pittsburgh Penguins Win",
        "yes_price": 50,
        "no_price": 50
      }
    ]
  },
  {
    "id": 5555,
    "name": "Colorado Avalanche @ Calgary Flames 12/24/2022",
    "category": "Sports",
    "outcomes": [
      {
        "name": "Colorado Avalanche Win",
        "yes_price": 50,
        "no_price": 50
      },
      {
        "name": "Calgary Flames Win",
        "yes_price": 50,
        "no_price": 50
      }
    ]
  },
  {
    "id": 1234,
    "name": "Balance of Power",
    "category": "Politics",
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
    "name": "Control of House",
    "category": "Politics",
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
  },
  {
    "id": 5555,
    "name": "Washington Capitals @ Pittsburgh Penguins 11/24/2022",
    "category": "Sports",
    "outcomes": [
      {
        "name": "Washington Capitals Win",
        "yes_price": 50,
        "no_price": 50
      },
      {
        "name": "Pittsburgh Penguins Win",
        "yes_price": 50,
        "no_price": 50
      }
    ]
  },
  {
    "id": 5555,
    "name": "Colorado Avalanche @ Calgary Flames 12/24/2022",
    "category": "Sports",
    "outcomes": [
      {
        "name": "Colorado Avalanche Win",
        "yes_price": 50,
        "no_price": 50
      },
      {
        "name": "Calgary Flames Win",
        "yes_price": 50,
        "no_price": 50
      }
    ]
  },
  {
    "id": 5555,
    "name": "Colorado Avalanche @ Calgary Flames 12/24/2022",
    "category": "Sports",
    "outcomes": [
      {
        "name": "Colorado Avalanche Win",
        "yes_price": 50,
        "no_price": 50
      },
      {
        "name": "Calgary Flames Win",
        "yes_price": 50,
        "no_price": 50
      }
    ]
  },
  {
    "id": 8888,
    "name": "Too many outcomes",
    "category": "Percentage",
    "outcomes": [
      {
        "name": "0-10",
        "yes_price": 10,
        "no_price": 90
      },
      {
        "name": "10-20",
        "yes_price": 10,
        "no_price": 90
      },
      {
        "name": "20-30",
        "yes_price": 10,
        "no_price": 90
      },
      {
        "name": "30-40",
        "yes_price": 10,
        "no_price": 90
      },
      {
        "name": "40-50",
        "yes_price": 10,
        "no_price": 90
      },
      {
        "name": "50-60",
        "yes_price": 1,
        "no_price": 99
      },
      {
        "name": "60-70",
        "yes_price": 1,
        "no_price": 99
      },
      {
        "name": "70-80",
        "yes_price": 30,
        "no_price": 70
      },
      {
        "name": "80-90",
        "yes_price": 1,
        "no_price": 99
      },
      {
        "name": "90-100",
        "yes_price": 20,
        "no_price": 90
      },
    ]
  },
  {
    "id": 2931,
    "name": "Insanely long title Insanely long title Insanely long title Insanely long title Insanely long title Insanely long title Insanely long title Insanely long title Insanely long title Insanely long title Insanely long title Insanely long title Insanely long title Insanely long title Insanely long title Insanely long title Insanely long title Insanely long title Insanely long title Insanely long title Insanely long title Insanely long title Insanely long title Insanely long title Insanely long title Insanely long title Insanely long title Insanely long title Insanely long title Insanely long title Insanely long title Insanely long title Insanely long title Insanely long title Insanely long title ",
    "category": "Sports",
    "outcomes": [
      {
        "name": "Colorado Avalanche Win",
        "yes_price": 50,
        "no_price": 50
      },
      {
        "name": "Calgary Flames Win",
        "yes_price": 50,
        "no_price": 50
      }
    ]
  }
];

class App extends Component {
    render() {
      return (
        <>
          <NavBar />
          <div>
            <Grid container direction="column" padding={3} alignItems="center">
              <Paper elevation={3} sx={{ maxWidth: 1600}}>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }} alignItems="stretch" padding={1}>
                  {
                    markets.map((market, index) => (
                      <Paper elevation={2} sx={{ m: .5}}>
                        <Card sx={{ minHeight: 200, maxHeight: 200, minWidth: 300, maxWidth: 300 }} variant="outlined">
                            <CardContent>
                              <Typography sx={{ fontSize: 12 }} color="text.secondary" gutterBottom>
                                {market.category}
                              </Typography>
                              <Typography noWrap variant="h6"> {market.name} </Typography>
                            </CardContent>
                          </Card>
                        </Paper>
                    ))
                  }
                </Box>
              </Paper>
            </Grid>
          </div>
        </>
      )
    }
}

export default App;
