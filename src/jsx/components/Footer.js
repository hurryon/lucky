import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <Grid>
          <Row>
            <Col sm={6}>
              <p>Powered by <a href="https://software.intel.com/en-us/sgx">Intel SGX</a>, <a href="https://ipfs.io/">IPFS</a>, <a href="https://socket.io/">Socket.io</a> and <a href="https://facebook.github.io/react/">React</a> with <a href="https://facebook.github.io/flux/">Flux</a> architecture.</p>
            </Col>
            <Col sm={6}>
              <p><a href="https://github.com/luckychain/lucky">Source code</a>.</p>
            </Col>
          </Row>
        </Grid>
      </footer>
    );
  }
}

export default Footer;