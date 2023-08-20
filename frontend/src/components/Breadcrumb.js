export default function Breadcrumb({ title, desc }) {
  return (
    <div className='section breadcrumb-section'>
      <span className='shape shape-one layer' data-speed='1'>
        <img src='assets/images/slider/shape-2.png' alt='Shape' />
      </span>
      <span className='shape shape-two layer' data-speed='2'>
        <img src='assets/images/slider/shape-5.png' alt='Shape' />
      </span>
      <span className='shape shape-three'>
        <img src='assets/images/slider/shape-7.png' alt='Shape' />
      </span>
      <span className='shape shape-four'>
        <img src='assets/images/slider/shape-9.png' alt='Shape' />
      </span>
      <span className='shape shape-five'>
        <img src='assets/images/slider/shape-10.png' alt='Shape' />
      </span>
      <div className='container'>
        <div className='row'>
          <div className='col-12 align-items-center text-center'>
            <div className='breadcrumb-wrapper'>
              <h1 className='title'>{title}</h1>
              <p className='text mb-0'>{desc}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
