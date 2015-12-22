//TODO impact data format is assumed for implementation will need to generate this format or something similar

const impact = [
  {
    regionName:'Global',
    walks:[
      {
        year: 2011,
        walks: 511
      },
      {
        year: 2012,
        walks: 615
      },
      {
        year: 2013,
        walks: 843
      },
      {
        year: 2014,
        walks: 1029
      },
      {
        year: 2015,
        walks: 1214
      },
    ],
    cities:[
      {
        year: 2011,
        cities: 76
      },
      {
        year: 2012,
        cities: 85
      },
      {
        year: 2013,
        cities: 109
      },
      {
        year: 2014,
        cities: 134
      },
      {
        year: 2015,
        cities: 189
      },
    ],
    countries:[
      {
        year: 2011,
        countries: 15
      },
      {
        year: 2012,
        countries: 19
      },
      {
        year: 2013,
        countries: 21
      },
      {
        year: 2014,
        countries: 25
      },
      {
        year: 2015,
        countries: 39
      },
    ],
    walkLeaders: [
      {
        year: 2011,
        total: 100,
        new: 50,
        returning: 50
      },
      {
        year: 2012,
        total: 150,
        new: 100,
        returning: 50
      },
      {
        year: 2013,
        total: 250,
        new: 150,
        returning: 100
      },
      {
        year: 2014,
        total: 350,
        new:150,
        returning: 200
      },
      {
        year: 2015,
        total: 550,
        new: 450,
        returning: 1000
      },
    ],
    Participants:[
      {
        year: 2011,
        participants: 12012
      },
      {
        year: 2012,
        participants: 15121
      },
      {
        year: 2013,
        participants: 22010
      },
      {
        year: 2014,
        participants: 26010
      },
      {
        year: 2015,
        participants: 42500
      },
    ],
    type:'Region'
  },
  {
    regionName:'Calgary',
    walks:[
    {
      year: 2011,
      walks: 178
    },
    {
      year: 2012,
      walks: 138
    },
    {
      year: 2013,
      walks: 150
    },
    {
      year: 2014,
      walks: 156
    },
    {
      year: 2015,
      walks: 183
    },
  ],
    walkLeaders: [
    {
      year: 2011,
      total: 100,
      new: 50,
      returning: 50
    },
    {
      year: 2012,
      total: 150,
      new: 100,
      returning: 50
    },
    {
      year: 2013,
      total: 250,
      new: 150,
      returning: 100
    },
    {
      year: 2014,
      total: 350,
      new:150,
      returning: 200
    },
    {
      year: 2015,
      total: 550,
      new: 450,
      returning: 1000
    },
  ],
    Participants:[
  {
    year: 2011,
    participants: 12012
  },
  {
    year: 2012,
    participants: 15121
  },
  {
    year: 2013,
    participants: 22010
  },
  {
    year: 2014,
    participants: 26010
  },
  {
    year: 2015,
    participants: 42500
  },
],
    type:'City'
  },
  {
    regionName:'USA',
    walks:[
      {
        year: 2011,
        walks: 64
      },
      {
        year: 2012,
        walks: 72
      },
      {
        year: 2013,
        walks: 166
      },
      {
        year: 2014,
        walks: 206
      },
      {
        year: 2015,
        walks: 332
      },
    ],
    cities:[
      {
        year: 2011,
        cities: 76
      },
      {
        year: 2012,
        cities: 85
      },
      {
        year: 2013,
        cities: 109
      },
      {
        year: 2014,
        cities: 134
      },
      {
        year: 2015,
        cities: 189
      },
    ],
    walkLeaders: [
      {
        year: 2011,
        total: 100,
        new: 50,
        returning: 50
      },
      {
        year: 2012,
        total: 150,
        new: 100,
        returning: 50
      },
      {
        year: 2013,
        total: 250,
        new: 150,
        returning: 100
      },
      {
        year: 2014,
        total: 350,
        new:150,
        returning: 200
      },
      {
        year: 2015,
        total: 550,
        new: 450,
        returning: 1000
      },
    ],
    Participants:[
      {
        year: 2011,
        participants: 12012
      },
      {
        year: 2012,
        participants: 15121
      },
      {
        year: 2013,
        participants: 22010
      },
      {
        year: 2014,
        participants: 26010
      },
      {
        year: 2015,
        participants: 42500
      },
    ],
    type:'Country'
  },
  {
    regionName:'Canada',
    walks:[
      {
        year: 2011,
        walks: 222
      },
      {
        year: 2012,
        walks: 291
      },
      {
        year: 2013,
        walks: 357
      },
      {
        year: 2014,
        walks: 468
      },
      {
        year: 2015,
        walks: 552
      },
    ],
    cities:[
      {
        year: 2011,
        cities: 76
      },
      {
        year: 2012,
        cities: 85
      },
      {
        year: 2013,
        cities: 109
      },
      {
        year: 2014,
        cities: 134
      },
      {
        year: 2015,
        cities: 189
      },
    ],
    walkLeaders: [
      {
        year: 2011,
        total: 100,
        new: 50,
        returning: 50
      },
      {
        year: 2012,
        total: 150,
        new: 100,
        returning: 50
      },
      {
        year: 2013,
        total: 250,
        new: 150,
        returning: 100
      },
      {
        year: 2014,
        total: 350,
        new:150,
        returning: 200
      },
      {
        year: 2015,
        total: 550,
        new: 450,
        returning: 1000
      },
    ],
    Participants:[
      {
        year: 2011,
        participants: 12012
      },
      {
        year: 2012,
        participants: 15121
      },
      {
        year: 2013,
        participants: 22010
      },
      {
        year: 2014,
        participants: 26010
      },
      {
        year: 2015,
        participants: 42500
      },
    ],
    type:'Country'
  },
  {
    regionName:'Toronto',
    walks:[
      {
        year: 2011,
        walks: 185
      },
      {
        year: 2012,
        walks: 155
      },
      {
        year: 2013,
        walks: 147
      },
      {
        year: 2014,
        walks: 164
      },
      {
        year: 2015,
        walks: 204
      },
    ],
    countries:[
      {
        year: 2011,
        countries: 15
      },
      {
        year: 2012,
        countries: 19
      },
      {
        year: 2013,
        countries: 21
      },
      {
        year: 2014,
        countries: 25
      },
      {
        year: 2015,
        countries: 39
      },
    ],
    walkLeaders: [
      {
        year: 2011,
        total: 100,
        new: 50,
        returning: 50
      },
      {
        year: 2012,
        total: 150,
        new: 100,
        returning: 50
      },
      {
        year: 2013,
        total: 250,
        new: 150,
        returning: 100
      },
      {
        year: 2014,
        total: 350,
        new:150,
        returning: 200
      },
      {
        year: 2015,
        total: 550,
        new: 450,
        returning: 1000
      },
    ],
    Participants:[
      {
        year: 2011,
        participants: 12012
      },
      {
        year: 2012,
        participants: 15121
      },
      {
        year: 2013,
        participants: 22010
      },
      {
        year: 2014,
        participants: 26010
      },
      {
        year: 2015,
        participants: 42500
      },
    ],
    type:'City'
  },
];

let generateCitiesScatterData = (cities = Math.floor(Math.random()*500)+100) => {
  let data = []; //new Array(cities);

  for(var i=0; i<cities; i++){
    data.push({
      cityname: `City ${i}`,
      walks: Math.floor(Math.random()*(100)+1),
      participants: Math.floor(Math.random()*(1000)+1)
    })
  }
  //?return data.map((c,i) => ({
  //    cityname: `City ${i}`,
  //    walks: Math.floor(Math.random()*(100)),
  //    participants: Math.floor(Math.random()*(1000))
  //}))
  return data;
};

const citiesData = generateCitiesScatterData();

export {impact, citiesData};