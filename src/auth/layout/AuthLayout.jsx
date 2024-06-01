import './AuthLayout.css'
export const AuthLayout = ({children, title=''}) => {
  return (
    // <Grid container
    // spacing={0}
    // direction="column"
    // alignItems="center"
    // justifyContent="center"
    // sx={{minHeight: '100vh', backgroundColor:'primary.main', padding: 4}}>

    // <Grid item
    // className='box-shadow'
    // xs={3}
    // sx={{backgroundColor: 'white', padding: 3, borderRadius:2,
    //     width:{sm: 450}}}>
    //   <Typography variant='h5' sx={{mb:1}}>{title}</Typography>
    //   {children}
    // </Grid>
    // </Grid>
    
    
    <div className="container animate__animated animate__fadeIn animate__faster">
      <div className="col layout">
        <div className="card">
        <img src="/assets/ELEVA-T.png" className='img-fluid' alt="" />
        <div className="card-body">
        <h3 className="card-title">{title}</h3>
          {children}
        </div>
          
        </div>
      </div>
    </div>
    
  )
}
