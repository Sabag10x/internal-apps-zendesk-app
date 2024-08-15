import * as React from 'react';
import {getMemberUrl} from '../lib/utils';
import {Card, Typography} from 'antd';

export const MemberLink = ({email}) => {
  const memberUrl = getMemberUrl(email);

  return (
    <Card title="Member Portal link" style={{width: '100%'}}>
      <Typography.Link href={memberUrl} target="_blank">
        {email}
      </Typography.Link>
    </Card>
  );
};
