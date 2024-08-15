import React from 'react';
import {render} from 'react-dom';
import {resizeContainer} from '../lib/helpers';
import {getRequesterEmail} from '../lib/utils';
import {MemberOrders} from './MemberOrders';
import {MemberLink} from './MemberLink';
import {getClientOrders, getTokenRequest} from '../lib/apiRequests';
import {ConfigProvider, Row} from 'antd';
import Typography from 'antd/es/typography/Typography';

const MAX_HEIGHT = 1500;

class App {
  constructor(client, _appData) {
    this._client = client;
    // this.initializePromise is only used in testing
    // indicate app initilization(including all async operations) is complete
    this.initializePromise = this.init();
  }

  /**
   * Initialize module, render main template
   */
  async init() {
    //I18n.loadTranslations(currentUser.locale)
    const appContainer = document.querySelector('.main');

    const email = await getRequesterEmail(this._client);
    const tokenResponse = await getTokenRequest(this._client);

    const orders = await getClientOrders(this._client, tokenResponse.token, email);

    render(
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: '#ED4192',
            colorLink: '#d60480',
          },
        }}
      >
        <Row gutter={16} className="ia-container">
          <MemberLink email={email} />
          <MemberOrders orders={orders} />
        </Row>
        <Row justify="end">
          <Typography.Text disabled>v1.1.0</Typography.Text>
        </Row>
      </ConfigProvider>,
      appContainer
    );

    return resizeContainer(this._client, MAX_HEIGHT);
  }

  /**
   * Handle error
   * @param {Object} error error object
   */
  _handleError(error) {
    console.log('An error is handled here: ', error.message);
  }
}

export default App;
