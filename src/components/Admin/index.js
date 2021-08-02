import React from 'react'
import MyNavbar from '../NavBar/MyNavbar'
import Selector from './Cards/Selector/Selector'
const index = () => {
    return (
        <>
            <MyNavbar />
            <div className="container">
                <h1>Admin</h1>
                <div className="row justify-content-center">
                        <div className="col-md-6 col-lg-3">
                            <Selector 
                            imgLink={"https://www.tuneskit.com/images/resource/online-video-cutting.jpg"}
                            cardTitle={"Edit The Blog"}
                            redirect={"/mywaysblog/edit/listingBlog"}
                            />
                            
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <Selector
                            imgLink={"https://static.vecteezy.com/system/resources/thumbnails/000/578/699/small/3004-15.jpg"} 
                            cardTitle={"Write A New Blog"}
                            redirect={"/mywaysblog/addBlog"}
                            />                       
                    </div>
                </div>
            </div>
        </>
    )
}
export default index
