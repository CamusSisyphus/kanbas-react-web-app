import {TbFileImport} from "react-icons/tb";
import {MdOutlineArrowCircleRight} from "react-icons/md";
import {AiOutlineAim} from "react-icons/ai";
import {BsBarChartLineFill} from "react-icons/bs";
import {HiOutlineSpeakerphone} from "react-icons/hi";
import {BsBell} from "react-icons/bs";

function status(){
    return(
        <div class="d-none d-lg-block">
        <h3>Course Status</h3>
        <button type="button" class="btn btn-light"><i class="fas fa-ban"></i>Unpublished</button>
        <button type="button" class="btn btn-success"><i class="far fa-check-circle"></i> Published</button><br/>
        <br/>
        <a href="#"><button type="button" class="btn btn-light btn-block wd-b-s-margin"><TbFileImport/>Import Existing Content</button></a><br/>
        <a href="#"><button type="button" class="btn btn-light btn-block wd-b-s-margin"><MdOutlineArrowCircleRight/>Import From Commons</button></a><br/>
        <a href="#"><button type="button" class="btn btn-light btn-block wd-b-s-margin"><AiOutlineAim/>Choose Home Page</button></a><br/>
        <a href="#"><button type="button" class="btn btn-light btn-block wd-b-s-margin"><BsBarChartLineFill/>View Course Stream</button></a><br/>
        <a href="#"><button type="button" class="btn btn-light btn-block wd-b-s-margin"><HiOutlineSpeakerphone/>New Announcement</button></a><br/>
        <a href="#"><button type="button" class="btn btn-light btn-block wd-b-s-margin"><BsBarChartLineFill/>New Analytics</button></a><br/>
        <a href="#"><button type="button" class="btn btn-light btn-block wd-b-s-margin"><BsBell/>View Course Notifications</button></a><br/>
        
        <h3>Coming Up</h3> 
        <hr/>    
        <div class="wd-coming-up-navigation"><a href="#"><i class="far fa-calendar"></i> View Calendar</a></div>
        <div class="d-none d-lg-block wd-coming-up-navigation">            
            <ul class="wd-course-navigation">
                <li><a href="#"><i class="far fa-calendar"></i> Lecture CS4550.12631.202410 Sep 7 at 11:45am</a></li>
                <li><a href="#"><i class="far fa-calendar"></i> Lecture CS4550.12631.202410 Sep 11 at 11:45am</a></li>
                <li><a href="#"><i class="far fa-calendar"></i> Lecture CS5610 06 SP23 Lecture Sep 11 at 6pm</a></li>
            </ul></div>
    </div>

    )
}

export default status;