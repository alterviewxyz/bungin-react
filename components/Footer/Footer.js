import * as React from 'react';
import { Flex } from '@rebass/grid';
import Link from 'next/link';
import media from 'styled-media-query';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {
  faTelegram,
  faTwitter,
  faGithub
} from '@fortawesome/free-brands-svg-icons';
import { Container } from '../elements/Layout';
import Logo from '../elements/Logo';
import { FooterLink } from '../elements/Typography';
import IconWrapper from '../elements/IconWrapper/IconWrapper';

const List = styled(Flex).attrs({
  alignItems: 'center',
  as: 'ul'
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
  as: 'li'
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
            href="https://github.com/alterviewxyz/bungin-react"
            title="GitHub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconWrapper size={14} fill="#7990A2" hoverFill="#63B3F3">
              <FontAwesomeIcon icon={faGithub} />
            </IconWrapper>
          </a>
        </ListItem>
        <ListItem>
          <a href="https://t.me/alterviewxyz" title="Telegram">
            <IconWrapper size={14} fill="#7990A2" hoverFill="#63B3F3">
              <FontAwesomeIcon icon={faTelegram} />
            </IconWrapper>
          </a>
        </ListItem>
        <ListItem>
          <a
            href="https://twitter.com/alterviewxyz"
            title="Twitter"
            rel="noopener noreferrer"
          >
            <IconWrapper size={16} fill="#7990A2" hoverFill="#63B3F3">
              <FontAwesomeIcon icon={faTwitter} />
            </IconWrapper>
          </a>
        </ListItem>
        <ListItem>
          <a href="mailto:support@tgdr.io" title="Contact Email">
            <IconWrapper size={16} fill="#7990A2" hoverFill="#63B3F3">
              <FontAwesomeIcon icon={faEnvelope} />
            </IconWrapper>
          </a>
        </ListItem>
      </List>
    </Container>
  </Flex>
);

export default Footer;
