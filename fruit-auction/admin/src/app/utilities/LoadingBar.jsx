import {KTIcon, toAbsoluteUrl} from '../../_metronic/helpers'
export const LoadingBar = () => {
  return (
      <div className='row g-6 g-xl-9'>
        <div className='col-md-12 col-xl-12'>
          <div className='d-flex justify-content-center p-10'>
            <img
              className='align-center'
              src={toAbsoluteUrl('/media/images/loading.gif')}
              alt='loading...'
            />
          </div>
        </div>
      </div>
  )
}

// export default LoadingBar
