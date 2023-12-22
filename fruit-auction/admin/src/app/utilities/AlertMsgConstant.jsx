export const ERROR_ALERT = 'Whoops! Something went wrong on the server.'
export const ERROR_ALERT_ADMIN = 'Whoops! something wrong, please contact site Administrator'


//No Data Found Alert
export const NoDataFoundMessage = () => {
  return (

    <div className="p-15">
      <div className="alert alert-warning d-flex align-items-center p-10 ">
        <div className="d-flex flex-column">
          <h3 className="mb-1">Oops - No records were found</h3>
          <span className="">Try a different search.</span>
        </div>
      </div>
    </div>

  ) 
}