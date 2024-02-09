import { useState } from 'react';
import Email from './Email';
import Info from './Info';
import Success from './Success';

function App() {
  const [email, setEmail] = useState('');
  const [isValid, setIsValid] = useState(true);
  const [submitted, setSubmitted] = useState(false);

  function handleEmailChange(e) {
    const { value } = e.target;
    setEmail(value);
    setIsValid(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value));
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isValid) {
      setSubmitted(true);
    } else {
      setIsValid(false);
    }
  };

  function handleDismiss() {
    setEmail('');
    setIsValid(true);
    setSubmitted(false);
  }

  return (
    <div className='flex items-center justify-center w-screen h-screen overflow-hidden bg-charcoal_grey'>
      {submitted && isValid ? (
        <Success email={email} onDismiss={handleDismiss} />
      ) : (
        <div className='app desktop: h-screen w-screen items-center justify-items-end rounded-[36px] bg-white desktop:grid desktop:h-4/6 desktop:w-8/12 desktop:grid-cols-2 desktop:grid-rows-1 desktop:pr-6'>
          <img
            className='hidden mb-0 desktop:order-2 desktop:block'
            src='assets/images/illustration-sign-up-desktop.svg'
            alt='illustration'
          />
          <img
            className='mb-10 desktop:order-2 desktop:hidden'
            src='assets/images/illustration-sign-up-mobile.svg'
            alt='illustration'
          />
          <div>
            <Info />
            <Email
              email={email}
              onSetEmail={handleEmailChange}
              isValid={isValid}
              onSubmit={handleSubmit}
              submitted={submitted}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
