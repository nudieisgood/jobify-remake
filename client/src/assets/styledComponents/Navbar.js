import styled from "styled-components";

const Wrapper = styled.nav`
  height: var(--nav-height);
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--background-secondary-color);

  .nav-center {
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .toggle-btn {
    background: transparent;
    background-color: transparent;
    font-size: 1.75rem;
    color: var(--primary-500);
    cursor: pointer;
    display: flex;
    align-items: center;
    border: none;
  }

  .logo-text {
    display: none;
  }
  .logo {
    display: flex;
    align-items: center;
    width: 100px;
  }
  @media (min-width: 992px) {
    .logo {
      display: none;
    }
    .logo-text {
      display: block;
    }
  }
`;

export default Wrapper;
