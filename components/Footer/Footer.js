import * as React from 'react';
import { Flex } from '@rebass/grid';
import Link from 'next/link';
import media from 'styled-media-query';
import { Container } from '../elements/Layout';
import Logo from '../elements/Logo';
import { FooterLink } from '../elements/Typography';
import styled from 'styled-components';
import IconWrapper from '../elements/IconWrapper/IconWrapper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope} from '@fortawesome/free-solid-svg-icons'
import { faTelegram, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';

const List = styled(Flex).attrs({
  alignItems: 'center',
  as: 'ul',
})`
  min-width: 0;
  margin: 0;
  padding: 0;
  list-style: none;

  ${media.lessThan('470px')`
    margin-top: 16px;
  `};
`;

const ListItem = styled(Flex).attrs({
  align: 'center',
  as: 'li',
})`
  margin: 0;
  padding: 0 13px 0;
  list-style: none;

  :last-child {
    padding-right: 0;
  }

  span {
    display: flex;
  }

  ${media.lessThan('470px')`
    padding: 0 8px 0;
  `};
`;

const Separator = styled.span`
  font-size: 14px;
  color: #d6dde2;

  ${media.lessThan('470px')`
    font-size: 13px;
  `};
`;

const Footer = () => (
  <Flex
  alignItems="center"
  justifyContent="center"
    as="footer"
    pb={4}
    pt={[5, 6]}
    flex="0 0 0"
  >
    <Container
      alignItems="center"
      justifyContent="space-between"
      flexDirection={['column', 'row']}
    >
      <Logo />
      <List>
        <ListItem>
          <Link href="/terms" as="/terms" passHref>
            <FooterLink>Terms</FooterLink>
          </Link>
        </ListItem>
        <ListItem>
          <Link href="/privacy-policy" as="/privacy-policy" passHref>
            <FooterLink>Privacy Policy</FooterLink>
          </Link>
        </ListItem>
        <ListItem>
          <Separator>|</Separator>
        </ListItem>
        <ListItem>
          <a
            href="https://github.com/thedevs-network/telegram-directory"
            title="GitHub"
            target="_blank"
            rel="nofollow noopener"
          >
           <IconWrapper  size={14}
              fill="#7990A2"
              hoverFill="#63B3F3">
              <FontAwesomeIcon icon={faGithub} /> 
            </IconWrapper>

          </a>
        </ListItem>
        <ListItem>
          <a href="https://t.me/tgdr_io" title="Telegram">
            <IconWrapper  size={14}
              fill="#7990A2"
              hoverFill="#63B3F3">
              <FontAwesomeIcon icon={faTelegram} /> 
            </IconWrapper>

          </a>
        </ListItem>
        <ListItem>
          <a
            href="https://twitter.com/tgdr_io"
            title="Twitter"
            target="_blank"
            rel="nofollow noopener"
          >
            <IconWrapper size={16} fill="#7990A2" hoverFill="#63B3F3">
              <FontAwesomeIcon icon={faTwitter} /> 
            </IconWrapper>
          </a>
        </ListItem>
        <ListItem>
          <a href="mailto:support@tgdr.io" title="Contact Email">
            <IconWrapper size={16} fill="#7990A2" hoverFill="#63B3F3">
              <FontAwesomeIcon  icon={faEnvelope} />
            </IconWrapper>
          </a>
        </ListItem>
      </List>
    </Container>
  </Flex>
);

export default Footer;
