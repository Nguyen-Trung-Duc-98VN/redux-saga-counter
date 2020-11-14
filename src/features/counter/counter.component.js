import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  increment,
  decrement,
  incrementAsync,
  incrementByAmount,
} from './counter.action';
import { Container, Row, Col, Button } from 'react-bootstrap';
// import './counter.scss';

function Counter() {
  const selectCount = state => state.counter.value;

  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState('2');

  return (
    <Container className="counter">
      <Row>
        <Col md={12}>
          <span>{count}</span>{' '}

          <Button
            variant="primary"
            size="lg"
            aria-label="Increment value"
            onClick={() => dispatch(increment())}
          >
            +
          </Button>{' '}
          
          <Button
            variant="secondary"
            size="lg"
            aria-label="Decrement value"
            onClick={() => dispatch(decrement())}
          >
            -
          </Button>{' '}
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <input
            className="textbox"
            aria-label="Set increment amount"
            value={incrementAmount}
            onChange={e => setIncrementAmount(e.target.value)}
          />
          <Button
            variant="danger"
            size="lg"
            onClick={() =>
              dispatch(incrementByAmount(Number(incrementAmount) || 0))
            }
          >
            Add Amount
          </Button>{' '}
          <Button
            variant="dark"
            size="lg"
            onClick={() => dispatch(incrementAsync(Number(incrementAmount) || 0))}
          >
            Add Async
          </Button>{' '}
        </Col>
      </Row>
    </Container>
  );
}

export default Counter;