import { CardContent, CardHeader, Card, Typography, Grid, Box, Paper } from '@mui/material';
import { React, Component } from "react";

var markets = [
  {
    "id": 1234,
    "name": "Balance of Power",
    "category": "Politics",
    "outcomes": [
      {
        "name": "R House, D Senate",
        "yes_price": 37,
        "no_price": 63
      },
      {
        "name": "R House, R Senate",
        "yes_price": 61,
        "no_price": 39
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
        "name": "Washington Capitals Win really really really really really long outcome",
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
        "yes_price": 40,
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

class Markets extends Component {
    render() {
      return (
        <>
          <div>
            <Grid container direction="column" padding={3} alignItems="center" justifyContent="center">
              <Box sx={{ display: 'flex', flexWrap: 'wrap', maxWidth: 1600}} justifyContent="center" padding={1} alignItems="center">
                {
                  markets.map((market, index) => (
                    <Paper elevation={2} sx={{ m: .5}} alignItems="center">
                      <Card sx={{ width: 350 }} variant="outlined">
                        <CardContent>
                          <Typography noWrap variant="h6" sx={{ fontSize: 12 }} gutterBottom> { market.name } </Typography>
                          {
                            market.outcomes.sort((a, b) => {
                              return b.yes_price - a.yes_price;
                            }).slice(0, 2).map((outcome, index) => (
                              <>
                                <Typography sx={{ fontSize: 12 }} noWrap gutterBottom>
                                  {outcome.name}
                                </Typography>
                                <Typography variant="h5">
                                  { outcome.yes_price }
                                </Typography>
                              </>
                            ))
                          }
                        </CardContent>
                      </Card>
                    </Paper>
                  ))
                }
              </Box>
            </Grid>
          </div>
        </>
      )
    }
}

export default Markets;
