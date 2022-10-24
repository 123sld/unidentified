import logo from './logo.svg';
import './App.css';
import { CardContent, Card, Typography, Grid } from '@mui/material';
import NavBar from './components/NavBar'
import {React, Component } from "react";

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
    }
];

class App extends Component {
    render() {
        return (
          <>
            <NavBar />
            <div>
              <Grid container direction="row" spacing={1} alignItems="stretch">
                {
                  markets.map((market, index) => (
                    <Grid item xs={4}>
                      <Card sx= {{ minWidth: 275 }} variant="outlined">
                        <CardContent>
                          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            {market.category}
                          </Typography>
                          <Typography>{market.name}</Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                  ))
                }
              </Grid>
            </div>
          </>
        )
    }
}

export default App;
