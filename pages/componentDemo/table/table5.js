// table5.js
export default {
  data () {
    return {
      tabledatas: {},
      tabletitles: '',
      current1: 0,
      offsetTop: ui.DEFAULT_HEADER_HEIGHT,
      tab: [
        { name: '全部' },
        { name: '2017' },
        { name: '2016' },
        { name: '2015' },
        { name: '2014' },
        { name: '2013' },
        { name: '2012' }
      ],
      thisHeader: [{
        name: 'id',
        display: '排名'
      }, {
        name: 'filmtitles',
        display: '影片名'
      }, {
        name: 'bout',
        display: '票房'
      }, {
        name: 'fares',
        display: '平均票价'
      }, {
        name: 'averagednum',
        display: '均场人数'
      }],
      thisDatas: [
        {
          thisData: {
            tabletitle: '中国电影票房总榜',
            rows: [{
              id: '1',
              filmtitles: '猩球崛起',
              bout: '549856',
              fares: '35',
              averagednum: '56'
            }, {
              id: '2',
              filmtitles: '王牌保镖',
              bout: '8754426',
              fares: '35',
              averagednum: '56'
            }, {
              id: '3',
              filmtitles: '看不见的客人',
              bout: '423543',
              fares: '25',
              averagednum: '46'
            }, {
              id: '4',
              filmtitles: '蜘蛛侠：英雄归来',
              bout: '123314',
              fares: '35',
              averagednum: '56'
            }, {
              id: '5',
              filmtitles: '猩球崛起',
              bout: '95345',
              fares: '35',
              averagednum: '33'
            }, {
              id: '6',
              filmtitles: '王牌保镖',
              bout: '8754426',
              fares: '35',
              averagednum: '56'
            }, {
              id: '7',
              filmtitles: '看不见的客人',
              bout: '423543',
              fares: '25',
              averagednum: '46'
            }, {
              id: '8',
              filmtitles: '蜘蛛侠：英雄归来',
              bout: '123314',
              fares: '35',
              averagednum: '56'
            }, {
              id: '9',
              filmtitles: '猩球崛起',
              bout: '95345',
              fares: '35',
              averagednum: '33'
            }, {
              id: '7',
              filmtitles: '看不见的客人',
              bout: '423543',
              fares: '25',
              averagednum: '46'
            }, {
              id: '8',
              filmtitles: '蜘蛛侠：英雄归来',
              bout: '123314',
              fares: '35',
              averagednum: '56'
            }, {
              id: '9',
              filmtitles: '猩球崛起',
              bout: '95345',
              fares: '35',
              averagednum: '33'
            }]
          }
        }, {
          thisData: {
            tabletitle: '2017中国电影票房总榜',
            rows: [{
              id: '1',
              filmtitles: '猩球崛起2017',
              bout: '549856',
              fares: '35',
              averagednum: '56'
            }, {
              id: '2',
              filmtitles: '王牌保镖2017',
              bout: '8754426',
              fares: '35',
              averagednum: '56'
            }, {
              id: '3',
              filmtitles: '看不见的客人2017',
              bout: '423543',
              fares: '25',
              averagednum: '46'
            }, {
              id: '4',
              filmtitles: '蜘蛛侠：英雄归来2017',
              bout: '123314',
              fares: '35',
              averagednum: '56'
            }, {
              id: '5',
              filmtitles: '猩球崛起2017',
              bout: '95345',
              fares: '35',
              averagednum: '33'
            }, {
              id: '2',
              filmtitles: '王牌保镖2017',
              bout: '8754426',
              fares: '35',
              averagednum: '56'
            }, {
              id: '3',
              filmtitles: '看不见的客人2017',
              bout: '423543',
              fares: '25',
              averagednum: '46'
            }, {
              id: '4',
              filmtitles: '蜘蛛侠：英雄归来2017',
              bout: '123314',
              fares: '35',
              averagednum: '56'
            }, {
              id: '5',
              filmtitles: '猩球崛起2017',
              bout: '95345',
              fares: '35',
              averagednum: '33'
            }, {
              id: '2',
              filmtitles: '王牌保镖2017',
              bout: '8754426',
              fares: '35',
              averagednum: '56'
            }, {
              id: '3',
              filmtitles: '看不见的客人2017',
              bout: '423543',
              fares: '25',
              averagednum: '46'
            }, {
              id: '4',
              filmtitles: '蜘蛛侠：英雄归来2017',
              bout: '123314',
              fares: '35',
              averagednum: '56'
            }, {
              id: '5',
              filmtitles: '猩球崛起2017',
              bout: '95345',
              fares: '35',
              averagednum: '33'
            }]
          }
        }, {
          thisData: {
            tabletitle: '2016中国电影票房总榜',
            rows: [{
              id: '1',
              filmtitles: '猩球崛起2016',
              bout: '549856',
              fares: '35',
              averagednum: '56'
            }, {
              id: '2',
              filmtitles: '王牌保镖2016',
              bout: '8754426',
              fares: '35',
              averagednum: '56'
            }, {
              id: '3',
              filmtitles: '看不见的客人2016',
              bout: '423543',
              fares: '25',
              averagednum: '46'
            }, {
              id: '4',
              filmtitles: '蜘蛛侠：英雄归来2016',
              bout: '123314',
              fares: '35',
              averagednum: '56'
            }, {
              id: '5',
              filmtitles: '猩球崛起2016',
              bout: '95345',
              fares: '35',
              averagednum: '33'
            }, {
              id: '2',
              filmtitles: '王牌保镖2016',
              bout: '8754426',
              fares: '35',
              averagednum: '56'
            }, {
              id: '3',
              filmtitles: '看不见的客人2016',
              bout: '423543',
              fares: '25',
              averagednum: '46'
            }, {
              id: '4',
              filmtitles: '蜘蛛侠：英雄归来2016',
              bout: '123314',
              fares: '35',
              averagednum: '56'
            }, {
              id: '5',
              filmtitles: '猩球崛起2016',
              bout: '95345',
              fares: '35',
              averagednum: '33'
            }, {
              id: '2',
              filmtitles: '王牌保镖2016',
              bout: '8754426',
              fares: '35',
              averagednum: '56'
            }, {
              id: '3',
              filmtitles: '看不见的客人2016',
              bout: '423543',
              fares: '25',
              averagednum: '46'
            }, {
              id: '4',
              filmtitles: '蜘蛛侠：英雄归来2016',
              bout: '123314',
              fares: '35',
              averagednum: '56'
            }, {
              id: '5',
              filmtitles: '猩球崛起2016',
              bout: '95345',
              fares: '35',
              averagednum: '33'
            }]
          }
        }, {
          thisData: {
            tabletitle: '2015中国电影票房总榜',
            rows: [{
              id: '1',
              filmtitles: '猩球崛起2015',
              bout: '549856',
              fares: '35',
              averagednum: '56'
            }, {
              id: '2',
              filmtitles: '王牌保镖2015',
              bout: '8754426',
              fares: '35',
              averagednum: '56'
            }, {
              id: '3',
              filmtitles: '看不见的客人2015',
              bout: '423543',
              fares: '25',
              averagednum: '46'
            }, {
              id: '4',
              filmtitles: '蜘蛛侠：英雄归来2015',
              bout: '123314',
              fares: '35',
              averagednum: '56'
            }, {
              id: '5',
              filmtitles: '猩球崛起2015',
              bout: '95345',
              fares: '35',
              averagednum: '33'
            }, {
              id: '3',
              filmtitles: '看不见的客人2015',
              bout: '423543',
              fares: '25',
              averagednum: '46'
            }, {
              id: '4',
              filmtitles: '蜘蛛侠：英雄归来2015',
              bout: '123314',
              fares: '35',
              averagednum: '56'
            }, {
              id: '5',
              filmtitles: '猩球崛起2015',
              bout: '95345',
              fares: '35',
              averagednum: '33'
            }, {
              id: '3',
              filmtitles: '看不见的客人2015',
              bout: '423543',
              fares: '25',
              averagednum: '46'
            }, {
              id: '4',
              filmtitles: '蜘蛛侠：英雄归来2015',
              bout: '123314',
              fares: '35',
              averagednum: '56'
            }, {
              id: '5',
              filmtitles: '猩球崛起2015',
              bout: '95345',
              fares: '35',
              averagednum: '33'
            }]
          }
        }, {
          thisData: {
            tabletitle: '2014中国电影票房总榜',
            rows: [{
              id: '1',
              filmtitles: '猩球崛起2014',
              bout: '549856',
              fares: '35',
              averagednum: '56'
            }, {
              id: '2',
              filmtitles: '王牌保镖2014',
              bout: '8754426',
              fares: '35',
              averagednum: '56'
            }, {
              id: '3',
              filmtitles: '看不见的客人2014',
              bout: '423543',
              fares: '25',
              averagednum: '46'
            }, {
              id: '4',
              filmtitles: '蜘蛛侠：英雄归来2014',
              bout: '123314',
              fares: '35',
              averagednum: '56'
            }, {
              id: '5',
              filmtitles: '猩球崛起2014',
              bout: '95345',
              fares: '35',
              averagednum: '33'
            }, {
              id: '2',
              filmtitles: '王牌保镖2014',
              bout: '8754426',
              fares: '35',
              averagednum: '56'
            }, {
              id: '3',
              filmtitles: '看不见的客人2014',
              bout: '423543',
              fares: '25',
              averagednum: '46'
            }, {
              id: '4',
              filmtitles: '蜘蛛侠：英雄归来2014',
              bout: '123314',
              fares: '35',
              averagednum: '56'
            }, {
              id: '5',
              filmtitles: '猩球崛起2014',
              bout: '95345',
              fares: '35',
              averagednum: '33'
            }, {
              id: '2',
              filmtitles: '王牌保镖2014',
              bout: '8754426',
              fares: '35',
              averagednum: '56'
            }, {
              id: '3',
              filmtitles: '看不见的客人2014',
              bout: '423543',
              fares: '25',
              averagednum: '46'
            }, {
              id: '4',
              filmtitles: '蜘蛛侠：英雄归来2014',
              bout: '123314',
              fares: '35',
              averagednum: '56'
            }, {
              id: '5',
              filmtitles: '猩球崛起2014',
              bout: '95345',
              fares: '35',
              averagednum: '33'
            }]
          }
        }, {
          thisData: {
            tabletitle: '2013中国电影票房总榜',
            rows: [{
              id: '1',
              filmtitles: '猩球崛起2013',
              bout: '549856',
              fares: '35',
              averagednum: '56'
            }, {
              id: '2',
              filmtitles: '王牌保镖2013',
              bout: '8754426',
              fares: '35',
              averagednum: '56'
            }, {
              id: '3',
              filmtitles: '看不见的客人2013',
              bout: '423543',
              fares: '25',
              averagednum: '46'
            }, {
              id: '4',
              filmtitles: '蜘蛛侠：英雄归来2013',
              bout: '123314',
              fares: '35',
              averagednum: '56'
            }, {
              id: '5',
              filmtitles: '猩球崛起2013',
              bout: '95345',
              fares: '35',
              averagednum: '33'
            }, {
              id: '2',
              filmtitles: '王牌保镖2013',
              bout: '8754426',
              fares: '35',
              averagednum: '56'
            }, {
              id: '3',
              filmtitles: '看不见的客人2013',
              bout: '423543',
              fares: '25',
              averagednum: '46'
            }, {
              id: '4',
              filmtitles: '蜘蛛侠：英雄归来2013',
              bout: '123314',
              fares: '35',
              averagednum: '56'
            }, {
              id: '5',
              filmtitles: '猩球崛起2013',
              bout: '95345',
              fares: '35',
              averagednum: '33'
            }, {
              id: '3',
              filmtitles: '看不见的客人2013',
              bout: '423543',
              fares: '25',
              averagednum: '46'
            }, {
              id: '4',
              filmtitles: '蜘蛛侠：英雄归来2013',
              bout: '123314',
              fares: '35',
              averagednum: '56'
            }, {
              id: '5',
              filmtitles: '猩球崛起2013',
              bout: '95345',
              fares: '35',
              averagednum: '33'
            }]
          }
        }, {
          thisData: {
            tabletitle: '2012中国电影票房总榜',
            rows: [{
              id: '1',
              filmtitles: '猩球崛起2012',
              bout: '549856',
              fares: '35',
              averagednum: '56'
            }, {
              id: '2',
              filmtitles: '王牌保镖2012',
              bout: '8754426',
              fares: '35',
              averagednum: '56'
            }, {
              id: '3',
              filmtitles: '看不见的客人2012',
              bout: '423543',
              fares: '25',
              averagednum: '46'
            }, {
              id: '4',
              filmtitles: '蜘蛛侠：英雄归来2012',
              bout: '123314',
              fares: '35',
              averagednum: '56'
            }, {
              id: '5',
              filmtitles: '猩球崛起2012',
              bout: '95345',
              fares: '35',
              averagednum: '33'
            }, {
              id: '2',
              filmtitles: '王牌保镖2012',
              bout: '8754426',
              fares: '35',
              averagednum: '56'
            }, {
              id: '3',
              filmtitles: '看不见的客人2012',
              bout: '423543',
              fares: '25',
              averagednum: '46'
            }, {
              id: '4',
              filmtitles: '蜘蛛侠：英雄归来2012',
              bout: '123314',
              fares: '35',
              averagednum: '56'
            }, {
              id: '5',
              filmtitles: '猩球崛起2012',
              bout: '95345',
              fares: '35',
              averagednum: '33'
            }, {
              id: '2',
              filmtitles: '王牌保镖2012',
              bout: '8754426',
              fares: '35',
              averagednum: '56'
            }, {
              id: '3',
              filmtitles: '看不见的客人2012',
              bout: '423543',
              fares: '25',
              averagednum: '46'
            }, {
              id: '4',
              filmtitles: '蜘蛛侠：英雄归来2012',
              bout: '123314',
              fares: '35',
              averagednum: '56'
            }, {
              id: '5',
              filmtitles: '猩球崛起2012',
              bout: '95345',
              fares: '35',
              averagednum: '33'
            }]
          }
        }
      ]
    }
  },
  methods: {
    changeTab (index) {
      this.tabledatas = this.thisDatas[index].thisData
      this.tabletitles = this.thisDatas[index].thisData.tabletitle
    }

  },
  mounted () {
    this.tabledatas = this.thisDatas[0].thisData
    this.tabletitles = this.thisDatas[0].thisData.tabletitle
  }
}
