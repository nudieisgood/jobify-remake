import styled from "styled-components";

const Wrapper = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .logo {
    display: block;
    margin: 0 auto;
    margin-bottom: 1.5rem;
  }

  .form {
    max-width: 400px;
    border-top: 5px solid var(--primary-500);
  }

  h4 {
    text-align: center;
    font-size: 1.5rem;
  }

  .btn {
    margin-top: 1rem;
  }

  p {
    text-align: center;
    margin-top: 1rem;
    letter-spacing: var(--letter-spacing);
  }

  .member-btn {
    margin-right: 0.3rem;
    color: var(--primary-500);
  }
`;

export default Wrapper;
