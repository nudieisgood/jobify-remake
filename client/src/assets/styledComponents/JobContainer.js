import styled from "styled-components";

const Wrapper = styled.section`
  .jobs {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  @media (min-width: 992px) {
    .jobs {
      grid-template-columns: 1fr 1fr;
    }
  }
`;

export default Wrapper;
