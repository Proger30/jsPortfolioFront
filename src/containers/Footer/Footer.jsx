.app__footer {
  flex: 1;
  width: 100%;
  flex-direction: column;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
}

.app__footer-cards {
  width: 60%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  margin: 4em 2rem 2rem;

  .app__footer-card {
    min-width: 290px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    margin: 1rem 0;
    padding: 1rem;
    border-radius: 10px;
    cursor: pointer;
    background-color: #fce5ea;
	&.phone-card {
		background-color: #e5fcf3;
	}
	&.whatsapp-card {
		background-color: #e5fce9;
	}
	&.telegram-card {
		background-color: #e5e9fc;
	}
	&.github-card {
		background-color: #e5e6fc;
	}
	&.headhunter-card {
		background-color: #fcf6e5;
	}
	&.instagram-card {
		background-color: #f9e5fc;
	}
	
    transition: all 0.3s ease-in-out;

    img {
      width: 40px;
      height: 40px;
      margin: 0 0.7rem;
    }

    p {
      font-weight: 500;
    }
    a {
      text-decoration: none;
      font-weight: 500;
    }
    &:hover {
      box-shadow: 0 0 25px #fef4f5;
    }

    @media screen and (max-width: 450px) {
      width: 100%;
    }
  }

  @media screen and (max-width: 768px) {
    width: 100%;
  }
}

.app__footer-form {
  width: 60%;
  flex-direction: column;
  margin: 1rem 2rem;

  div {
    width: 100%;

    margin: 0.75rem 0;
    border-radius: 10px;
    cursor: pointer;
    background-color: var(--primary-color);

    transition: all 0.3s ease-in-out;

    input,
    textarea {
      width: 100%;
      padding: 0.95rem;
      border: none;
      border-radius: 7px;
      background-color: var(--primary-color);

      font-family: var(--font-base);
      color: var(--secondary-color);
      outline: none;
    }

    textarea {
      height: 170px;
    }

    &:hover {
      box-shadow: 0 0 25px var(--primary-color);
    }
  }

  button {
    padding: 1rem 2rem;
    border-radius: 10px;
    border: none;
    background-color: var(--secondary-color);

    font-weight: 500;
    color: var(--white-color);
    outline: none;
    margin: 2rem 0 0 0;
    font-family: var(--font-base);

    transition: cubic-bezier(0.55, 0.085, 0.68, 0.53);
    cursor: pointer;

    &:hover {
      background-color: #2430af;
    }
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    margin: 1rem 0;
  }
}
