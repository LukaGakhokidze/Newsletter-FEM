const listInfo = [
  {
    id: 1,
    text: 'Product discovery and building what matters'
  },
  {
    id: 2,
    text: 'Measuring to ensure updates are a success'
  },
  {
    id: 3,
    text: 'And much more!'
  }
];

function Info() {
  return (
    <div className='flex flex-col gap-6 px-6'>
      <h1 className='font-primary text-3xl font-bold text-dark_slate_grey desktop:text-[56px]'>
        Stay Updated !
      </h1>

      <p>Join 60,000+ product managers receiving monthly updates on:</p>

      <ul className='desktop:mb-3'>
        {listInfo.map((info) => (
          <li key={info.id} className='flex items-center gap-4 '>
            <img src='assets/images/icon-list.svg' alt='' />
            <p>{info.text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Info;
