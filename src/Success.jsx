function Success({ email, onDismiss }) {
  return (
    <div className='app  flex h-screen w-screen items-center justify-center bg-white px-6 desktop:h-[500px] desktop:w-[500px] desktop:rounded-[36px] desktop:px-16 '>
      <div className=''>
        <img
          src='assets/images/icon-success.svg'
          alt='checkmark'
          className='mb-10'
        />
        <h1 className='mb-6 text-4xl font-bold'>Thanks for subscribing!</h1>
        <p>
          A confirmation email has been sent to{' '}
          <span className='font-bold'>{email}</span> Please open it and click
          the button inside to confirm your subscription
        </p>
        <button
          onClick={onDismiss}
          className=' mt-10 w-4/5 rounded-lg bg-dark_slate_grey from-[#FF527B] to-[#FF6A3A] py-4 font-bold text-white hover:cursor-pointer hover:bg-gradient-to-tr hover:shadow-custom hover:shadow-primary/50'
        >
          Dismiss message
        </button>
      </div>
    </div>
  );
}

export default Success;
