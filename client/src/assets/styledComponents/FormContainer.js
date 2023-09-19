import styled from "styled-components";

const Wrapper = styled.section`
  border-radius: var(--border-radius);
  background-color: var(--background-secondary-color);
  padding: 3rem 2rem 4rem;

  .form-title {
    margin-bottom: 2rem;
  }

  .form-center {
    display: grid;
    gap: 1rem;
  }

  .form-btn {
    align-self: end;
  }

  .form-row {
    margin-bottom: 0;
  }

  .btn-search {
    justify-self: start;
  }

  @media (min-width: 992px) {
    .form-center {
      grid-template-columns: 1fr 1fr;
    }
  }

  @media (min-width: 1120px) {
    .form-center {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
`;

export default Wrapper;
