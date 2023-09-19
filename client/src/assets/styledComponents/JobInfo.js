import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-items: center;

  .jobInfo-icon {
    font-size: 1rem;
    margin-right: 1rem;
    display: grid;
    place-items: center;
    svg {
      color: var(--text-secondary-color);
    }
  }

  .jobInfo-text {
    text-transform: capitalize;
    font-size: 1rem;
    letter-spacing: var(--letter-spacing);
  }
`;

export default Wrapper;
