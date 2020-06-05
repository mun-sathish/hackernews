import { CaretUpOutlined } from '@ant-design/icons';
import moment from 'moment';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import './index.css';
import { Space } from 'antd';

export default class TableComponent extends Component {

  onUpVote = (data) => {
    this.props.onUpVote(data);
  }

  onHide = (data) => {
    this.props.onHide(data);
  }

  space = (count) => {
    let spaces = [];
    for (let i = 0; i < count; i++)
      spaces.push(<span>&nbsp;</span>)
    return spaces;
  }

  render() {
    const { currentTheme, data } = this.props;

    const columns = ["Comments", "Vote Count", "Up Vote", "News Details"];
    const tableHeader = columns.map(item => {
      return (
        <th>{item}</th>
      )
    })

    const tableRows = data.map((item, index) => {
      let newsDetails = <div>
        <p>
          <a href={item.url} target="_blank" rel="noopener noreferrer" style={{ color: currentTheme.textPrimary }}><span>{item.title ? item.title : 'N/A'}</span></a>{this.space(3)}
          {item.url && <span style={{ fontSize: '10px', color: currentTheme.textSecondary }}>({item.url}){this.space(3)}</span>}
          <span style={{ fontSize: '10px', color: currentTheme.textSecondary }}>by</span>{this.space(1)}
          <span style={{ fontSize: '10px', color: currentTheme.textPrimary }}>{item.author}</span>{this.space(3)}
          <span style={{ fontSize: '10px', color: currentTheme.textSecondary }}>{moment(item.created_at).fromNow()}</span>{this.space(3)}
          <span style={{ fontSize: '10px', color: currentTheme.textSecondary }} onClick={() => this.onHide(item)}>[ {'hide'} ]</span>
        </p>
      </div>

      let evenIndexColor = currentTheme.name === "DARK" ? "rgb(48, 45, 45)" : "#f6f6ef";
      let oddIndexColor = currentTheme.name === "DARK" ? "rgb(13, 13, 6)" : "#d3d0d0";
      return (
        <tr style={{ backgroundColor: index % 2 === 0 ? evenIndexColor : oddIndexColor }}>
          <td style={{ color: currentTheme.textPrimary }}>{item.num_comments}</td>
          <td style={{ color: currentTheme.textPrimary }}>{item.points}</td>
          <td style={{ color: currentTheme.textPrimary }}><CaretUpOutlined key="upvote" onClick={() => this.onUpVote(item)} /></td>
          <td>{newsDetails}</td>
        </tr>
      )
    })

    return (
      <div>
        <table>
          <tr style={{ background: currentTheme.primary, color: currentTheme.textContrast }}>{tableHeader}</tr>
          {tableRows}
        </table>
        <div>
          <div class="customTable paginationContainer"  >
            <Space size={6} >
              <h3 style={{ color: currentTheme.primary }} onClick={this.props.onPrevious}>Previous</h3>
              <h3 style={{ color: currentTheme.primary }}>|</h3>
              <h3 style={{ color: currentTheme.primary }} onClick={this.props.onNext}>Next</h3>
            </Space>
          </div>
          <div class="clearfix" />
        </div>
      </div>
    );
  }
}

TableComponent.propTypes = {
  data: PropTypes.object.isRequired,
  cardsPerRow: PropTypes.number.isRequired,
  isLoading: PropTypes.bool.isRequired,
  onNext: PropTypes.func.isRequired,
  onPrevious: PropTypes.func.isRequired,
  currentTheme: PropTypes.object.isRequired,
  onUpVote: PropTypes.func.isRequired,
  onHide: PropTypes.func.isRequired,
}