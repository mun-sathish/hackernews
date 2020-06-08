import { BulbFilled } from '@ant-design/icons';
import { Divider, Layout, Spin } from 'antd';
import React, { Component } from 'react';
import CardComponent from '../components/cardview';
import ChartComponent from '../components/chartview';
import TableComponent from '../components/tableview';
import API, { Constants, Theme } from "../configuration";
import { getRequest } from '../utils';
import './App.css';

const { Header, Content, Footer } = Layout;

class App extends Component {

  constructor(props) {
    super(props);
    let currentTheme = localStorage.getItem(Constants.STORAGE_KEYS.CURRENT_THEME);
    let currentPage = 0;
    if (window.location.hash && window.location.hash.startsWith("#/?page=")) {
      let searchStr = window.location.hash;
      searchStr = searchStr.substring("#/?page=".length, searchStr.length);
      currentPage = Number(searchStr);
      currentPage = isNaN(currentPage) ? 0 : currentPage;
    }
    this.state = {
      windowWidth: 0,
      windowHeight: 0,
      currentPage,
      isLoading: false,
      data: undefined,
      currentTheme: currentTheme && currentTheme === Theme.DARK_THEME.name ? Theme.DARK_THEME : Theme.LIGHT_THEME,
    };
  }

  componentWillMount() {
    this.fetchHackerNews();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.currentPage !== this.state.currentPage)
      this.fetchHackerNews();
  }


  fetchHackerNews = () => {
    getRequest(API.NEWS.action, API.NEWS.url, { page: this.state.currentPage }, ({ actionType, payload }) => {
      switch (actionType) {
        case API.NEWS.action.requested:
          this.setState({ isLoading: true })
          break;
        case API.NEWS.action.success:
          let localUpVote = localStorage.getItem(Constants.STORAGE_KEYS.UP_VOTED);
          let localUpVoteObj = localUpVote ? JSON.parse(localUpVote) : {};
          let localhidden = localStorage.getItem(Constants.STORAGE_KEYS.HIDDEN);
          let localhiddenObj = localhidden ? JSON.parse(localhidden) : [];

          let fullData = payload.hits;
          let upVoteKeys = Object.keys(localUpVoteObj);
          for (let objectID of upVoteKeys) {
            let index = fullData.findIndex((item) => item.objectID === objectID);
            if (index !== -1) {
              let currentDataPoints = fullData[index].points ? fullData[index].points : 0;
              let upVotePoints = localUpVoteObj[objectID] ? localUpVoteObj[objectID] : 0;
              fullData[index].points = currentDataPoints + upVotePoints;
            }
          }

          for (let objectID of localhiddenObj) {
            let index = fullData.findIndex((item) => item.objectID === objectID);
            if (index !== -1) {
              fullData.splice(index, 1);
            }
          }
          this.setState({ isLoading: false, data: payload })
          break;
        case API.NEWS.action.failure:
          this.setState({ isLoading: false })
          break;
        default:
          break;
      }
      this.setState({ isLoading: false })
    })
  }

  componentDidMount() {
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }

  updateDimensions = () => {
    let windowWidth = typeof window !== "undefined" ? window.innerWidth : 0;
    let windowHeight = typeof window !== "undefined" ? window.innerHeight : 0;

    this.setState({ windowWidth, windowHeight });
  }

  onUpVote = (data) => {
    let localUpVote = localStorage.getItem(Constants.STORAGE_KEYS.UP_VOTED);
    let localUpVoteObj = localUpVote ? JSON.parse(localUpVote) : {}
    localUpVoteObj[data.objectID] = localUpVoteObj[data.objectID] ? localUpVoteObj[data.objectID] + 1 : 1
    localStorage.setItem(Constants.STORAGE_KEYS.UP_VOTED, JSON.stringify(localUpVoteObj));

    let fullData = this.state.data.hits;
    let index = fullData.findIndex((item) => item.objectID === data.objectID);
    data.points = data.points ? data.points + 1 : 1;
    fullData[index] = data;
    this.setState({ data: { ...this.state.data, hits: fullData } });
  }

  onHide = (data) => {
    let localhidden = localStorage.getItem(Constants.STORAGE_KEYS.HIDDEN);
    let localhiddenObj = localhidden ? JSON.parse(localhidden) : []
    localhiddenObj.push(data.objectID);
    localStorage.setItem(Constants.STORAGE_KEYS.HIDDEN, JSON.stringify(localhiddenObj));

    let fullData = this.state.data.hits;
    let index = fullData.findIndex((item) => item.objectID === data.objectID);
    fullData.splice(index, 1);
    this.setState({ data: { ...this.state.data, hits: fullData } });
  }

  onNext = () => {
    if (this.state.currentPage < this.state.data.nbPages - 1) {
      this.props.history.replace("?page=" + (this.state.currentPage + 1));
      this.setState({ isLoading: true }, () => {
        setTimeout(() => {
          this.setState({ currentPage: this.state.currentPage + 1, data: undefined });
        }, 500);
      });
    }

  }

  onPrevious = () => {
    if (this.state.currentPage > 0) {
      this.props.history.replace("?page=" + (this.state.currentPage - 1));
      this.setState({ isLoading: true }, () => {
        setTimeout(() => {
          this.setState({ currentPage: this.state.currentPage - 1, data: undefined });
        }, 500);
      });
    }

  }

  handleTheme = (e) => {
    e.preventDefault();
    let isDark = this.state.currentTheme.name !== Theme.DARK_THEME.name;
    localStorage.setItem(Constants.STORAGE_KEYS.CURRENT_THEME, isDark ? Theme.DARK_THEME.name : Theme.LIGHT_THEME.name);
    this.setState({ currentTheme: isDark ? Theme.DARK_THEME : Theme.LIGHT_THEME });
  }

  render() {
    const { currentTheme } = this.state;
    return (
      <Layout className="layout">
        <Header style={{ background: currentTheme.primary }}>
          <BulbFilled onClick={this.handleTheme} style={{ margin: '20px 24px 20px 0', float: 'right', fontSize: '20px', color: currentTheme.name === Theme.DARK_THEME.name ? 'white' : 'yellow' }} />
          <h2 style={{ color: currentTheme.textContrast }}>HackerNews</h2>
        </Header>
        <Content style={{ padding: '10px', background: currentTheme.background }}>
          {
            this.state.isLoading || !this.state.data ?
              <div className="spinnerContainer">
                <Spin />
              </div>
              :
              <div>
                {

                  // Mobile View
                  this.state.windowWidth < 480 &&
                  <CardComponent
                    isLoading={false}
                    isMobileView={true}
                    currentTheme={currentTheme}
                    cardsPerRow={1}
                    data={this.state.data.hits}
                    onNext={this.onNext}
                    onPrevious={this.onPrevious}
                    onUpVote={this.onUpVote}
                    onHide={this.onHide} />
                }

                {
                  // Tablet View
                  this.state.windowWidth >= 480 && this.state.windowWidth <= 768 &&
                  <CardComponent
                    isLoading={false}
                    isMobileView={false}
                    currentTheme={currentTheme}
                    cardsPerRow={2}
                    data={this.state.data.hits}
                    onNext={this.onNext}
                    onPrevious={this.onPrevious}
                    onUpVote={this.onUpVote}
                    onHide={this.onHide} />
                }

                {
                  // Mini Desktop View
                  this.state.windowWidth > 768 && this.state.windowWidth <= 992 &&
                  <CardComponent
                    isLoading={false}
                    isMobileView={false}
                    currentTheme={currentTheme}
                    cardsPerRow={3}
                    data={this.state.data.hits}
                    onNext={this.onNext}
                    onPrevious={this.onPrevious}
                    onUpVote={this.onUpVote}
                    onHide={this.onHide} />
                }

                {
                  // Desktop View
                  this.state.windowWidth > 992 &&
                  <TableComponent
                    isLoading={false}
                    currentTheme={currentTheme}
                    cardsPerRow={1}
                    data={this.state.data.hits}
                    onNext={this.onNext}
                    onPrevious={this.onPrevious}
                    onUpVote={this.onUpVote}
                    onHide={this.onHide} />
                }

                <Divider style={{ height: '5px', background: currentTheme.primary }} />
                <ChartComponent
                  data={this.state.data.hits}
                  currentTheme={currentTheme} />
              </div>
          }
        </Content>
        <Footer style={{ textAlign: 'center', background: currentTheme.background, color: currentTheme.textPrimary }}>Developed by Sathish</Footer>
      </Layout>
    );
  }
}

export default App;