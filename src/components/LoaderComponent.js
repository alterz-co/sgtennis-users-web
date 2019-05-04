import React, { Component } from 'react';
import { Dimmer, Loader, Image } from 'semantic-ui-react';

class LoaderComponent extends Component {
  render(){
    return(
      <div>
        <Dimmer active inverted>
          <Loader inverted>Loading</Loader>
        </Dimmer>
        <Image src='/images/wireframe/short-paragraph.png' />
      </div>
    )
  }
}

export default LoaderComponent;
