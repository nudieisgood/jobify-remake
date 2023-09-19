import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  .avatar-img {
    height: 25px;
    width: 25px;
    border-radius: 50%;
  }

  .user-container {
    display: flex;
    align-items: center;
    gap: 0.8rem;

    background-color: var(--primary-500);
    height: 2rem;
    padding: 0.5rem 1rem;
    border-radius: var(--border-radius);
    color: var(--white);
  }
`;

export default Wrapper;
