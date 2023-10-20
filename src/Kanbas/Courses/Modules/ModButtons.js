import {AiOutlineCheckCircle} from "react-icons/ai";
import {FaEllipsisV} from "react-icons/fa";
function ModButtons(){
    return(
      <div class="row">
        <div class="col">
        <div class="float-end">
            <button type="button" class="btn btn-light">Collapse All</button>
            <button type="button" class="btn btn-light">View Content</button>
            <button class="btn btn-light dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
            <AiOutlineCheckCircle style ={{color:"green"}} />Publish All
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  <li><a class="dropdown-item" href="#">Publish All</a></li>
                  <li><a class="dropdown-item" href="#">Publish All Items and Modules</a></li>
                  <li><a class="dropdown-item" href="#">Unpublish All</a></li>
                </ul>
                <button type="button" class="btn btn-danger text-right">+ Module</button>
                <button type="button" class="btn btn-light text-right">  <FaEllipsisV /> </button>
                </div>
        </div>
        </div>

    );


}

export default ModButtons;