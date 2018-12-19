import * as React from 'react';
import { Flex } from '@rebass/grid'
import { library } from '@fortawesome/fontawesome-svg-core'

// import Header from '../Header';
// import Slogan from '../Slogan';
import { Container } from '../elements/Layout';
// import Sidebar from '../Sidebar';
import Footer from '../Footer';

class Body extends React.Component {
    render() {
        return (
            <>
                {/* <Header /> */}
                {/* <Slogan /> */}
                <Flex justifyContent="center">
                <Container
                alignItems="flex-start"
                flexDirection={['column', 'column', 'row']}>
                    {/* <Sidebar /> */}
                    <Flex width={[1, 1, 1]} flexDirection="column" as="main">
                    {this.props.children}
                    </Flex>
                </Container>
                </Flex>
                <Footer />
            </>
        )
    }
};

export default Body;