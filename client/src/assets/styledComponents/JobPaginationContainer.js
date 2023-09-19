import styled from "styled-components";

const Wrapper = styled.section`
  height: 6em;
  margin-top: 2rem;

  display: flex;
  justify-content: end;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;

  .btns-container {
    background: var(--background-secondary-color);
    border-radius: var(--border-radius);
    display: flex;
  }

  .page-btn {
    background: transparent;
    width: 50px;
    height: 40px;
    font-weight: 700;
    font-size: 1.25rem;
    color: var(--primary-500);
    border-radius: var(--border-radius);
    cursor: pointer;
  }

  .pre-btn,
  .next-btn {
    background: var(--background-secondary-color);
    width: 100px;
    height: 40px;
    color: var(--primary-500);

    font-size: 1rem;
    font-weight: 700;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
  }

  .active {
    background-color: var(--primary-500);
    color: var(--white);
  }
`;

export default Wrapper;
