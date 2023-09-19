import styled from "styled-components";

const Wrapper = styled.aside`
  display: none;

  @media (min-width: 992px) {
    display: block;
    box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.1);

    .sidebar-container {
      min-height: 100vh;
      width: 250px;
      background-color: var(--background-secondary-color);

      margin-left: -250px;
      transition: var(--transition);
    }

    .show-sidebar {
      margin-left: 0px;
    }

    .nav-links {
      display: flex;
      flex-direction: column;
    }

    .nav-link {
      display: flex;
      align-items: center;

      color: var(--text-secondary-color);
      margin-left: 2.5rem;
      padding: 1rem;
      text-transform: capitalize;
      gap: 1rem;

      transition: var(--transition);
    }

    .nav-link:hover {
      margin-left: 3rem;
      color: var(--primary-500);
    }

    .icon {
      font-size: 1.4rem;
      display: grid;
      place-items: center;
    }

    header {
      height: 6rem;
      display: grid;
      place-items: center;
    }

    .active {
      color: var(--primary-500);
    }
  }
`;

export default Wrapper;
