import styled from "styled-components";

const Wrapper = styled.section`
  nav {
    width: var(--fluid-width);
    max-width: var(--max-width);
    margin: 0 auto;

    height: var(--nav-height);

    display: grid;
    align-items: center;
  }

  .page {
    min-height: calc(100vh - var(--nav-height));
    display: grid;
    align-items: center;
  }

  .main-image {
    display: none;
  }

  h1 {
    margin-bottom: 1.5rem;
    text-transform: capitalize;
    span {
      color: var(--primary-500);
    }
  }

  p {
    font-size: var(--mid-text);
    color: var(--text-secondary-color);
    max-width: 35em;
  }

  .btn {
    display: inline-block;
    margin-top: 1rem;
  }

  .register-link {
    margin-right: 1rem;
  }

  @media (min-width: 992px) {
    .page {
      grid-template-columns: 1fr 420px;
      column-gap: 3rem;
    }

    .main-image {
      display: block;
    }
  }
`;

export default Wrapper;
