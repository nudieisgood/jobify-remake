import styled from "styled-components";

const Wrapper = styled.aside`
  @media (min-width: 992px) {
    display: none;
  }

  .sidebar-container {
    position: fixed;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.7);
    display: grid;
    place-items: center;

    visibility: hidden;

    transition: var(--transition);
    opacity: 0;
  }

  .show-sidebar {
    visibility: visible;
    opacity: 1;
  }

  header {
    margin-top: 2rem;
  }

  .content {
    position: relative;
    background-color: var(--background-secondary-color);
    width: calc(var(--fluid-width) - 5vh);
    height: 85vh;
    border-radius: var(--border-radius);
    padding: 4rem 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .close-btn {
    font-size: 1.75rem;
    color: var(--red-dark);
    background: transparent;
    border: transparent;
    cursor: pointer;

    position: absolute;
    top: 30px;
    left: 40px;
  }

  .nav-links {
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
  }

  .nav-link {
    display: flex;
    align-items: center;

    color: var(--text-secondary-color);
    padding: 1rem;
    text-transform: capitalize;
    gap: 1rem;

    transition: var(--transition);
  }

  .nav-link:hover {
    margin-left: 3px;
    color: var(--primary-500);
  }

  .icon {
    font-size: 1.4rem;
    display: grid;
    place-items: center;
  }

  .active {
    color: var(--primary-500);
  }
`;

export default Wrapper;
