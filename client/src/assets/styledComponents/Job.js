import styled from "styled-components";

const Wrapper = styled.section`
  background-color: var(--background-secondary-color);
  border-radius: var(--border-radius);
  box-shadow: var(--shadow-2);

  display: grid;
  grid-template-rows: auto 1fr;

  header {
    padding: 1rem 1.5rem;
    border-bottom: 1px solid var(--grey-100);

    display: grid;
    grid-template-columns: auto 1fr;
    gap: 3rem;
    align-items: center;
  }

  .main-icon {
    width: 80px;
    height: 80px;
    border-radius: var(--border-radius);
    background-color: var(--primary-500);

    display: grid;
    place-items: center;

    font-size: 2rem;
    font-weight: 700;
    color: var(--white);
    text-transform: uppercase;
  }

  .header-info {
    h5 {
      font-weight: 400;
      margin-bottom: 0.5rem;
    }

    p {
      text-transform: capitalize;
      letter-spacing: 0.8px;
      color: var(--text-secondary-color);
    }
  }

  .job-content {
    padding: 1rem 1.5rem;
  }

  .content-center {
    display: grid;
    grid-template-columns: 1fr;

    margin-top: 1rem;
    row-gap: 1.5rem;
    align-items: center;

    @media (min-width: 576px) {
      grid-template-columns: 1fr 1fr;
    }
  }

  .status {
    border-radius: var(--border-radius);
    text-transform: capitalize;
    letter-spacing: var(--letter-spacing);

    width: 100px;
    height: 35px;

    display: grid;
    place-items: center;
  }

  footer {
    margin-top: 1rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .edit-btn,
  .btn-danger {
    height: 35px;
    font-size: 1rem;
    display: grid;
    place-items: center;
  }
`;

export default Wrapper;
