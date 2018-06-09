import React, { Component } from 'react';
import styles from './Counter.css';

export default class Counter extends Component {
  render() {
    const {
      increment,
      decrement,
      counter
    } = this.props;
    return (
      <div>
        <div className={`counter ${styles.counter}`} data-tid="counter">
          {counter}
        </div>
        <div className={styles.btnGroup}>
          <button className={styles.btn} onClick={increment} data-tclass="btn">
            <i className="fa fa-plus" />
          </button>
          <button className={styles.btn} onClick={decrement} data-tclass="btn">
            <i className="fa fa-minus" />
          </button>
        </div>
      </div>
    );
  }
}
