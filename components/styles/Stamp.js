import styled from 'styled-components';

const Stamp = styled.div`
  position: relative;

  :after {
    border: solid 0.1em #d00;
    border-radius: 0.2em;
    color: #d00;
    content: "Pending!";
    font-size: 17px;
    font-weight: bold;
    line-height: 1;
    position: absolute;
    padding: 0.1em 0.5em;
    margin: 0 auto;
    top: 10%;
    left: 20%;
    text-transform: uppercase;
    opacity: 1;
    transform-origin: 50% 50%;
    transform: rotate(-10deg) scale(5);
    transition: all 0.3s cubic-bezier(0.6, 0.04, 0.98, 0.335);
  }
`;

export default Stamp;
