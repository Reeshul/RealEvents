import React from 'react';
import { Segment, Button, Header, Icon } from 'semantic-ui-react';
import { withRouter } from 'react-router';

const NotFound = ({ history }) => {
  return (
    <Segment placeholder>
      <Header icon>
        <Icon name='search' />
        Whoopsie, looks like you may have got lost there.
      </Header>
      <Segment.Inline>
        <Button onClick={() => history.push('/events')} primary>
          Return to Events page
        </Button>
      </Segment.Inline>
    </Segment>
  );
};

export default withRouter(NotFound);
