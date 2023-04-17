/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Helmet } from 'react-helmet-async';
import { useAppDispatch } from '../hooks';
import { fetchUserLogin } from '../store/action';
import { FormEvent} from 'react';
import { userAuth } from '../types/types';

function Login (): JSX.Element {
  const dispatch = useAppDispatch();

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form) as Iterable<[userAuth]>;
    const data: userAuth = Object.fromEntries (formData); // Unsafe assignment of an `any` value.eslint@typescript-eslint/no-unsafe-assignment
    dispatch(fetchUserLogin(data));
  };

  return (
    <div className="page page--gray page--login">
      <Helmet>
        <title>6 Cities.Аренда жилья в Европе</title>
      </Helmet>
      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form className="login__form form" action="#" method="post" onSubmit={handleFormSubmit} >
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input className="login__input form__input" type="email" name="email" placeholder="Email" required />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input className="login__input form__input" type="password" name="password" placeholder="Password" required />
              </div>
              <button className="login__submit form__submit button" type="submit">Sign in</button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="#">
                <span>Amsterdam</span>
              </a>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default Login;
