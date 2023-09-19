import styled from "styled-components";

const Wrapper = styled.section`
  padding: 3rem 2rem;
  background: var(--background-secondary-color);
  border-radius: var(--border-radius);
  border-bottom: 5px solid ${(props) => props.color};
  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .count {
    font-size: 3rem;
    font-weight: 700;
    color: ${(props) => props.color};
  }

  .title {
    /* margin: 0; */
    margin-top: 1rem;
    letter-spacing: var(--letter-spacing);
    text-transform: capitalize;
    font-size: 1.25rem;
  }

  .icon {
    width: 70px;
    height: 60px;
    background-color: ${(props) => props.bcg};

    display: grid;
    place-items: center;
    svg {
      font-size: 2rem;
      color: ${(props) => props.color};
    }
  }
`;

export default Wrapper;
